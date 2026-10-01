#!/usr/bin/env node
// Renders each system's cover the way the Design System page frames it
// (tokens.css preloaded, data-theme set) and saves PNGs to build/covers/.
// Usage: node render-check.mjs [num ...]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'build/covers');
fs.mkdirSync(OUT, { recursive: true });
const only = process.argv.slice(2).map(Number).filter(Boolean);
const dirs = fs.readdirSync(path.join(ROOT, 'systems')).filter((d) => !only.length || only.includes(Number(d.slice(0, 3))));

// A minimal stand-in for the page's compiled tokens.css.
function tokensCss(t) {
  const first = t.color.themes[0].id;
  const v = (val, theme) => (typeof val === 'string' ? (theme === first ? val : null) : val[theme] ?? (theme === first ? Object.values(val)[0] : null));
  const css = (val) => (val && val.startsWith('{') ? `var(--${val.slice(1, -1)})` : val);
  let out = '';
  for (const th of t.color.themes) {
    const decls = t.color.tokens.map((k) => [k.name, v(k.value, th.id)]).filter(([, x]) => x).map(([n, x]) => `--${n}:${css(x)};`).join('');
    out += `${th.id === first ? ':root,' : ''}[data-theme="${th.id}"]{${decls}}\n`;
  }
  const rest = ['spacing', 'radius', 'shadow', 'borderWidth', 'layout'].flatMap((f) => t[f]?.tokens || []);
  out += `:root{${rest.map((k) => `--${k.name}:${k.value};`).join('')}${Object.entries(t.type.families).map(([k, s]) => `--font-${k}:${s};`).join('')}}`;
  return out;
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 960, height: 288 } });
const problems = [];
for (const d of dirs) {
  const proj = path.join(ROOT, 'systems', d, 'project');
  const tokens = JSON.parse(fs.readFileSync(path.join(proj, 'tokens.json'), 'utf8'));
  let html = fs.readFileSync(path.join(proj, 'components/Cover/preview.html'), 'utf8');
  for (const th of tokens.color.themes) {
    const doc = html.replace('<html>', `<html data-theme="${th.id}">`).replace('<head>', `<head><style>${tokensCss(tokens)}</style>`);
    await page.setContent(doc, { waitUntil: 'load', timeout: 15000 }).catch(() => {});
    await page.evaluate(() => document.fonts?.ready);
    const check = await page.evaluate(() => {
      const h = document.querySelector('.name h1').getBoundingClientRect();
      const p = document.querySelector('.name p').getBoundingClientRect();
      return { nameRight: h.right, nameTop: h.top, pBottom: p.bottom, blocks: document.querySelectorAll('rect.blk').length };
    });
    if (check.nameTop < 0 || check.pBottom > 288 || check.blocks === 0) problems.push(`${d} [${th.id}] ${JSON.stringify(check)}`);
    await page.screenshot({ path: path.join(OUT, `${d}-${th.id}.png`) });
  }
}
await browser.close();
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : `ok ${dirs.length}`);
