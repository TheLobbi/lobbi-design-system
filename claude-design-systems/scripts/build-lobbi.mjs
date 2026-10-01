#!/usr/bin/env node
// Merges every per-style system (systems/*/project) into ONE Claude Design
// System, "Lobbi Design System", with a live Style Switcher:
//   lobbi/project/design-system.json, tokens.json (default style), README.md,
//   styles/index.json, styles/<NNN-slug>.json (tokens + README + UI roles),
//   components/StyleSwitcher/{preview.html,README.md}, components/Cover/preview.html
// Usage: node build-lobbi.mjs [defaultStyleNum=9]
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const REPO = path.resolve(ROOT, '..');
const OUT = path.join(ROOT, 'lobbi/project');
const DEFAULT = Number(process.argv[2] || 9);
const NAME = 'Lobbi Design System';
const AUTHOR = process.env.DS_AUTHOR || 'Markus Ahling';
const NOW = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
let SHA = 'main';
try { SHA = execSync('git rev-parse --short HEAD', { cwd: REPO }).toString().trim(); } catch {}

const html = fs.readFileSync(path.join(REPO, 'index.html'), 'utf8');
const at = html.indexOf('const styles = [');
const META = Object.fromEntries(Function('return ' + html.slice(at + 15, html.indexOf('];', at) + 1))().map((s) => [s.num, s]));
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'registry.json'), 'utf8')).systems;

// ── colour helpers ──────────────────────────────────────────────────────────
const parse = (s) => {
  let m = String(s).match(/^#([0-9a-f]{3,8})$/i);
  if (m) { let h = m[1]; if (h.length <= 4) h = [...h].map((c) => c + c).join(''); return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1 }; }
  m = String(s).match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?\s*\)/);
  if (!m) return null;
  return { r: +m[1], g: +m[2], b: +m[3], a: m[4] == null ? 1 : m[4].endsWith('%') ? parseFloat(m[4]) / 100 : +m[4] };
};
const hex = (c) => '#' + [c.r, c.g, c.b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('');
const rgba = (c, a) => `rgba(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)}, ${a})`;
const lum = (c) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const over = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
const sat = (c) => { const mx = Math.max(c.r, c.g, c.b) / 255, mn = Math.min(c.r, c.g, c.b) / 255, l = (mx + mn) / 2; return mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2 * l - 1)); };
const dist = (a, b) => Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b);
const px = (v) => { const m = String(v).match(/^(-?[\d.]+)(px|rem|em)?$/); return m ? (m[2] === 'rem' || m[2] === 'em' ? +m[1] * 16 : +m[1]) : null; };
const isStatus = (n) => /success|warn|error|danger|info|critical|positive|negative|alert|caution|valid/.test(n);

// Resolve a colour token's first-theme value through aliases.
function resolver(tokens) {
  const first = tokens.color.themes[0].id;
  const by = Object.fromEntries(tokens.color.tokens.map((t) => [t.name, t]));
  const val = (t) => (typeof t.value === 'string' ? t.value : t.value[first] ?? Object.values(t.value)[0]);
  const res = (name, depth = 0) => { const t = by[name]; if (!t || depth > 16) return null; const v = val(t); const a = v && v.match(/^\{(.+)\}$/); return a ? res(a[1], depth + 1) : parse(v); };
  return { res, names: Object.keys(by) };
}

// The handful of roles a sample UI needs, chosen from the style's own tokens.
function roles(tokens, readme) {
  const { res, names } = resolver(tokens);
  const bg = over(res('page-bg') || parse('#ffffff'), { r: 255, g: 255, b: 255, a: 1 });
  const text = over(res('page-text') || parse('#111111'), bg);
  const all = names.map((n) => ({ n, c: res(n) })).filter((x) => x.c && x.c.a === 1 && !/^page-/.test(x.n));
  const find = (re, ok) => all.find((x) => re.test(x.n) && ok(x.c));
  const brand = all.filter((x) => !isStatus(x.n) && !/hover|focus|border|divider|shadow|overlay|bg|background|surface|text|ink/.test(x.n) && contrast(x.c, bg) >= 1.6)
    .sort((a, b) => (/primary|brand/.test(b.n) - /primary|brand/.test(a.n)) || sat(b.c) - sat(a.c));
  const primary = (brand[0] || { c: text, n: 'page-text' });
  const accent = brand.find((x) => dist(x.c, primary.c) > 70) || primary;
  const on = (c) => (contrast(c, parse('#ffffff')) >= contrast(c, parse('#111111')) ? '#ffffff' : '#111111');
  const surface = find(/surface|card|panel|elevated|raised|paper/, (c) => contrast(c, bg) < 1.6 && contrast(text, c) >= 4.5);
  const mutedTok = all.find((x) => /muted|secondary|subtle|gray|grey|soft/.test(x.n) && /text|ink|fg|muted|gray|grey/.test(x.n) && contrast(x.c, bg) >= 4.5);
  const border = find(/border|divider|rule|line|outline/, (c) => contrast(c, bg) >= 1.15);
  const status = Object.fromEntries(['success', 'warning', 'danger'].map((k) => {
    const re = { success: /success|positive/, warning: /warn|caution/, danger: /error|danger|critical|negative/ }[k];
    const x = all.find((y) => re.test(y.n));
    return [k, x ? hex(x.c) : null];
  }));
  const styles = Object.fromEntries(tokens.type.groups.flatMap((g) => g.styles.map((s) => [s.name, { ...s, family: s.family || g.family }])));
  const pick = (...ks) => ks.map((k) => styles[k]).find(Boolean) || null;
  const fam = (s, fallback) => tokens.type.families[(s && s.family) || fallback] || tokens.type.families.body || Object.values(tokens.type.families)[0];
  const typeRole = (s, fb) => s && { family: fam(s, fb), size: s.fontSize, weight: s.fontWeight || 400, letterSpacing: s.letterSpacing || 'normal', upper: /uppercase/.test(s.usage || '') };
  const radii = (tokens.radius?.tokens || []).map((t) => px(t.value)).filter((v) => v != null && v < 40).sort((a, b) => a - b);
  const spaces = (tokens.spacing?.tokens || []).map((t) => px(t.value)).filter((v) => v != null && v > 0).sort((a, b) => a - b);
  const near = (arr, target, fb) => (arr.length ? arr.reduce((b, v) => (Math.abs(v - target) < Math.abs(b - target) ? v : b)) : fb);
  const fonts = [...readme.matchAll(/<link rel="stylesheet" href="([^"]+fonts\.googleapis[^"]+)">/g)].map((m) => m[1]);
  return {
    bg: hex(bg), text: hex(text),
    muted: mutedTok ? hex(mutedTok.c) : rgba(text, 0.72),
    surface: surface ? hex(surface.c) : (lum(bg) < 0.2 ? rgba(text, 0.06) : rgba(text, 0.04)),
    border: border ? hex(border.c) : rgba(text, 0.16),
    primary: hex(primary.c), onPrimary: on(primary.c), primaryName: primary.n,
    accent: hex(accent.c), onAccent: on(accent.c), accentName: accent.n,
    ...status,
    palette: [...new Map(all.filter((x) => x.c.a === 1).map((x) => [hex(x.c), x.n])).entries()].slice(0, 14).map(([h, n]) => ({ name: n, hex: h })),
    display: typeRole(pick('display', 'heading-1', 'heading-2'), 'display'),
    heading: typeRole(pick('heading-3', 'heading-2', 'heading-1'), 'display'),
    body: typeRole(pick('body'), 'body') || { family: fam(null, 'body'), size: '16px', weight: 400, letterSpacing: 'normal' },
    label: typeRole(pick('label', 'caption'), 'body'),
    button: typeRole(pick('button'), 'body'),
    radius: near(radii, 8, 8), radiusSm: radii[0] ?? 4, space: near(spaces, 16, 16), spaceLg: near(spaces, 24, 24),
    shadow: (tokens.shadow?.tokens || [])[0]?.value || 'none',
    fonts,
  };
}

// ── build ───────────────────────────────────────────────────────────────────
fs.rmSync(path.join(OUT, 'styles'), { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'styles'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'components/StyleSwitcher'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'components/Cover'), { recursive: true });
const index = [];
for (const r of registry) {
  const proj = path.join(ROOT, r.dir, 'project');
  const tokens = JSON.parse(fs.readFileSync(path.join(proj, 'tokens.json'), 'utf8'));
  const readme = fs.readFileSync(path.join(proj, 'README.md'), 'utf8');
  const m = META[r.num];
  const id = path.basename(r.dir);
  const ro = roles(tokens, readme);
  const doc = {
    id, num: r.num, name: r.name, blend: m.blend, tags: m.tags, temperature: m.temp, formality: m.formality, perfectFor: m.perfectFor,
    source: r.source, roles: ro, tokens, readme,
  };
  fs.writeFileSync(path.join(OUT, 'styles', `${id}.json`), JSON.stringify(doc) + '\n');
  index.push({ id, num: r.num, name: r.name, tags: m.tags, temperature: m.temp, formality: m.formality, perfectFor: m.perfectFor, blend: m.blend, swatch: [ro.bg, ro.primary, ro.accent, ro.text] });
}
fs.writeFileSync(path.join(OUT, 'styles/index.json'), JSON.stringify({ default: index.find((s) => s.num === DEFAULT).id, count: index.length, styles: index }, null, 1) + '\n');

// Default style = the system's own tokens (what the Colors / Type views show).
const def = index.find((s) => s.num === DEFAULT);
const defProj = path.join(ROOT, registry.find((r) => r.num === DEFAULT).dir, 'project');
const defTokens = JSON.parse(fs.readFileSync(path.join(defProj, 'tokens.json'), 'utf8'));
defTokens.name = NAME;
defTokens.meta = { ...defTokens.meta, paths: { tokens: ['claude-design-systems/systems/*/project/tokens.json'], docs: ['claude-design-systems/systems/*/project/README.md', 'index.html'] }, defaultStyle: def.id };
fs.writeFileSync(path.join(OUT, 'tokens.json'), JSON.stringify(defTokens, null, 2) + '\n');

// README: how to use the library, then the catalogue.
const byTag = {};
for (const s of index) for (const t of s.tags) (byTag[t] ??= []).push(s);
const readme = [
  `One system, ${index.length} styles. Every Lobbi style — its colours, type, spacing, radii, shadows and brand-book rules — lives in this system as \`styles/<id>.json\`. The Colors and Typography views show the default style, **${def.name}** (\`${def.id}\`); the **Style Switcher** previews any style live.`,
  '',
  '## Using a style',
  '',
  '1. Pick a style from the catalogue below (or `styles/index.json`): match its **Perfect for**, tags, temperature (1 cool – 10 warm) and formality (1 casual – 10 ceremonial) to the brief. No style named → use the default.',
  '2. Read `styles/<id>.json`. `readme` is that style\'s brand book: content rules, colour roles, type, spacing, states, accessibility. Follow it.',
  '3. Build from `tokens` (same shape as this system\'s `tokens.json`: `color.tokens[] {name, value, usage}`, `type.groups[].styles[]`, `spacing`, `radius`, `shadow`). Emit them as CSS custom properties named exactly `--<token name>`; aliases `{name}` become `var(--name)`.',
  '4. `roles` is a shortcut for quick UI: `bg`, `text`, `muted`, `surface`, `border`, `primary`/`onPrimary`, `accent`/`onAccent`, status colours, and `display`/`heading`/`body`/`label`/`button` type. Load `roles.fonts` (Google Fonts links) before rendering text.',
  '5. Use one style per product surface. Never mix two styles\' palettes on one page.',
  '',
  '## Rules for every style',
  '',
  '- Body text holds 4.5:1 on its ground; each style\'s token notes give the measured contrast on `page-bg`.',
  '- Status colours always travel with a word or icon.',
  '- No logos ship with the styles: set the organization name in the style\'s `display` type.',
  '- Honour `prefers-reduced-motion`.',
  '',
  '## Catalogue',
  '',
  '| # | Style | Tags | Temp | Formality | Perfect for | File |',
  '| --- | --- | --- | --- | --- | --- | --- |',
  ...index.map((s) => `| ${s.num} | ${s.name} | ${s.tags.join(', ')} | ${s.temperature} | ${s.formality} | ${s.perfectFor.join(', ')} | \`styles/${s.id}.json\` |`),
  '',
  '## By tag',
  '',
  ...Object.entries(byTag).sort((a, b) => b[1].length - a[1].length).map(([t, l]) => `- **${t}** (${l.length}): ${l.map((s) => s.num).join(', ')}`),
  '',
].join('\n');
fs.writeFileSync(path.join(OUT, 'README.md'), readme);

// Style Switcher: a live preview that re-themes one sample interface.
fs.writeFileSync(path.join(OUT, 'components/StyleSwitcher/README.md'), `# StyleSwitcher

Live preview of any of the ${index.length} Lobbi styles: pick one and a sample member-management screen re-themes in that style's real colours, type, radii and spacing.

- **Data:** reads \`styles/index.json\` and \`styles/<id>.json\` from this system; nothing else.
- **Use it** to choose a style with a stakeholder before building, then follow \`styles/<id>.json\` → \`readme\`.
- The sample screen is a rendition built from each style's \`roles\`, not the style's original page.
`);
const switcher = fs.readFileSync(path.join(HERE, 'style-switcher.html'), 'utf8');
fs.writeFileSync(path.join(OUT, 'components/StyleSwitcher/preview.html'), switcher);

// Cover: the default style's cover, renamed.
const cover = fs.readFileSync(path.join(defProj, 'components/Cover/preview.html'), 'utf8')
  .replace(/<div class="name"><h1>[\s\S]*?<\/h1><p>[\s\S]*?<\/p><\/div>/, `<div class="name"><h1><span>Lobbi</span><br><span>Design System</span></h1><p>${index.length} styles, one system: pick any of them in the Style Switcher</p></div>`);
if (!cover.includes('Design System</span>')) throw new Error('cover name not replaced');
// Leave a clear gap before the blocks and rules that start at x = 480.
const coverOut = cover.replace(/max = 440,/, 'max = 420,');
fs.writeFileSync(path.join(OUT, 'components/Cover/preview.html'), coverOut);

// Index of the system.
const idxPath = path.join(OUT, 'design-system.json');
const prev = fs.existsSync(idxPath) ? JSON.parse(fs.readFileSync(idxPath, 'utf8')) : null;
const created = prev?.createdOnFiles || JSON.parse(fs.readFileSync(path.join(ROOT, registry.find((r) => r.num === 1).dir, 'project/design-system.json'), 'utf8')).createdOnFiles;
fs.writeFileSync(idxPath, JSON.stringify({
  v: 3, layout: 'files', createdOnFiles: created, title: NAME, namespace: 'Lobbi',
  libraries: [], sections: {}, groups: [], assetGroups: {}, blobs: {}, docs: { readme: 'project/README.md', sections: [] },
  lastChange: { by: AUTHOR, at: NOW, via: `GitHub · thelobbi/lobbi-design-system@${SHA}`, note: `Merged ${index.length} styles into one system with a Style Switcher` },
}, null, 2) + '\n');
console.log(`lobbi: ${index.length} styles, default ${def.id}`);
