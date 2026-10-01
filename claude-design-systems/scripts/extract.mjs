#!/usr/bin/env node
// Renders every style-*.html in headless Chromium and records what the page
// actually defines: :root custom properties (raw + resolved), dark-theme
// overrides, computed type styles, Google Fonts and the design-doc comment.
// Output: claude-design-systems/build/raw/<num>.json (input to build.mjs).
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const OUT = path.resolve(HERE, '../build/raw');
fs.mkdirSync(OUT, { recursive: true });

const only = process.argv.slice(2).map(Number).filter(Boolean);
const files = fs.readdirSync(REPO)
  .filter((f) => /^style-\d+-.+\.html$/.test(f))
  .map((f) => ({ file: f, num: Number(f.match(/^style-(\d+)-/)[1]) }))
  .filter((s) => !only.length || only.includes(s.num))
  .sort((a, b) => a.num - b.num);

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
// Fonts and images are not needed to read computed styles; keep runs offline and fast.
await context.route(/^https?:/, (route) => route.abort());

for (const { file, num } of files) {
  const page = await context.newPage();
  const html = fs.readFileSync(path.join(REPO, file), 'utf8');
  await page.goto('file://' + path.join(REPO, file), { waitUntil: 'domcontentloaded' });
  const data = await page.evaluate(() => {
    const INJECTED = '.gallery-nav, .similar-styles-section, .export-panel, .back-to-gallery, .skip-link, #exportToast, .card-perfect-for';
    const DARK_SEL = /\[data-theme=["']?dark["']?\]|(^|[\s,])\.dark(-mode|-theme)?\b|body\.dark/;
    const root = { order: [], raw: {} };
    const dark = { order: [], raw: {}, selector: null };
    const take = (style, bucket) => {
      for (let i = 0; i < style.length; i++) {
        const p = style[i];
        if (!p.startsWith('--')) continue;
        if (!(p in bucket.raw)) bucket.order.push(p);
        bucket.raw[p] = style.getPropertyValue(p).trim();
      }
    };
    const walk = (rules, inDarkMedia) => {
      for (const r of rules) {
        if (r.type === CSSRule.MEDIA_RULE) {
          const m = r.media.mediaText;
          if (/prefers-color-scheme:\s*dark/.test(m)) walk(r.cssRules, true);
          continue; // responsive overrides are not tokens
        }
        if (r.type !== CSSRule.STYLE_RULE) continue;
        const sel = r.selectorText;
        if (inDarkMedia && /:root|html|body/.test(sel)) { take(r.style, dark); dark.selector ??= '@media (prefers-color-scheme: dark)'; }
        else if (DARK_SEL.test(sel)) { take(r.style, dark); dark.selector ??= sel; }
        else if (/^\s*(:root|html)\s*$/.test(sel) || /(^|,)\s*:root\s*(,|$)/.test(sel)) take(r.style, root);
      }
    };
    for (const sheet of document.styleSheets) { try { walk(sheet.cssRules, false); } catch (e) {} }

    const cs = getComputedStyle(document.documentElement);
    const resolved = {};
    for (const p of root.order) resolved[p] = cs.getPropertyValue(p).trim();

    // Colour probe: is a value a colour, and what is it in rgb()?
    const probe = document.createElement('div');
    document.body.appendChild(probe);
    const asColor = (v) => {
      if (!v || /^-?[\d.]+(px|rem|em|%|ms|s)?$/.test(v)) return null;
      probe.style.color = '';
      probe.style.color = v;
      if (!probe.style.color) return null;
      return getComputedStyle(probe).color;
    };
    const colorOf = {};
    for (const p of root.order) { const c = asColor(resolved[p]); if (c) colorOf[p] = c; }
    const darkResolved = {};
    for (const p of dark.order) {
      const raw = dark.raw[p];
      const viaRoot = raw.replace(/var\((--[\w-]+)\)/g, (_, n) => dark.raw[n] ?? resolved[n] ?? '');
      const c = asColor(viaRoot);
      darkResolved[p] = c ?? viaRoot;
    }

    const visible = (el) => {
      if (el.closest(INJECTED)) return false;
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && el.textContent.trim().length > 1;
    };
    const typeOf = (el) => {
      const s = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(), cls: el.className && String(el.className).slice(0, 60),
        text: el.textContent.trim().replace(/\s+/g, ' ').slice(0, 80),
        fontFamily: s.fontFamily, fontSize: s.fontSize, lineHeight: s.lineHeight,
        fontWeight: s.fontWeight, letterSpacing: s.letterSpacing, textTransform: s.textTransform, fontStyle: s.fontStyle,
      };
    };
    const firstOf = (sel) => { for (const el of document.querySelectorAll(sel)) if (visible(el)) return typeOf(el); return null; };
    const largest = (sel) => {
      let best = null, size = 0;
      for (const el of document.querySelectorAll(sel)) {
        if (!visible(el)) continue;
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs > size) { size = fs; best = el; }
      }
      return best ? typeOf(best) : null;
    };
    const type = {
      display: largest('h1, .hero h1, .hero-title, [class*="hero"] h1, [class*="display"]'),
      h1: firstOf('h1'), h2: firstOf('h2'), h3: firstOf('h3'), h4: firstOf('h4'),
      body: firstOf('main p, section p, p'),
      small: firstOf('small, .caption, figcaption, [class*="caption"], [class*="meta"]'),
      label: firstOf('label, th, [class*="label"], [class*="eyebrow"], [class*="overline"]'),
      button: firstOf('button:not(.gallery-nav-toggle), .btn, [class*="btn"], [class*="button"]'),
      mono: firstOf('code, pre, kbd, [class*="mono"]'),
    };

    // A ground is a solid background colour, else the first stop of a background gradient.
    const bgOf = (el) => {
      while (el) {
        const s = getComputedStyle(el);
        if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent') return s.backgroundColor;
        const stop = /gradient/.test(s.backgroundImage) && s.backgroundImage.match(/rgba?\([^)]*\)/);
        if (stop) return stop[0];
        el = el.parentElement;
      }
      return null;
    };
    const groundOf = (el) => { const s = getComputedStyle(el); return { color: s.backgroundColor, image: s.backgroundImage === 'none' ? null : s.backgroundImage.slice(0, 300) }; };
    const main = document.querySelector('main, .main, .container, section') || document.body;
    const body = getComputedStyle(document.body);
    const page = {
      bg: bgOf(document.body) || bgOf(document.documentElement) || 'rgb(255, 255, 255)',
      bodyGround: groundOf(document.body), htmlGround: groundOf(document.documentElement),
      mainBg: bgOf(main),
      text: body.color,
      fontFamily: body.fontFamily,
    };
    // Radii / shadows actually used by components, as fallback evidence.
    const used = { radius: {}, shadow: {}, colors: {}, space: {} };
    for (const el of document.querySelectorAll('body *')) {
      if (el.closest(INJECTED)) continue;
      const s = getComputedStyle(el);
      if (s.borderTopLeftRadius && s.borderTopLeftRadius !== '0px') used.radius[s.borderTopLeftRadius] = (used.radius[s.borderTopLeftRadius] || 0) + 1;
      if (s.boxShadow && s.boxShadow !== 'none') used.shadow[s.boxShadow] = (used.shadow[s.boxShadow] || 0) + 1;
      for (const c of [s.color, s.backgroundColor, s.borderTopColor]) if (c && c !== 'rgba(0, 0, 0, 0)') used.colors[c] = (used.colors[c] || 0) + 1;
      for (const v of [s.paddingTop, s.paddingLeft, s.rowGap, s.columnGap]) if (v && /px$/.test(v) && v !== '0px') used.space[v] = (used.space[v] || 0) + 1;
    }
    // Where each custom property is referenced: property kind -> selectors.
    const refs = {}, hexRefs = {};
    const kindOf = (prop) => /^(background|fill)/.test(prop) ? 'background' : /^border|outline/.test(prop) ? 'border' : /shadow/.test(prop) ? 'shadow' : prop === 'color' || prop === 'caret-color' || prop === 'text-decoration-color' ? 'text' : /radius/.test(prop) ? 'radius' : /^(padding|margin|gap|row-gap|column-gap|inset|top|left|right|bottom)/.test(prop) ? 'spacing' : /^font|line-height|letter-spacing/.test(prop) ? 'type' : /width|height/.test(prop) ? 'size' : 'other';
    const scan = (rules) => {
      for (const r of rules) {
        if (r.cssRules && r.type !== CSSRule.STYLE_RULE) { scan(r.cssRules); continue; }
        if (r.type !== CSSRule.STYLE_RULE) continue;
        const sel = r.selectorText;
        if (/gallery-nav|similar-|export-|back-to-gallery|skip-link|perfect-for/.test(sel)) continue;
        for (let i = 0; i < r.style.length; i++) {
          const prop = r.style[i];
          const val = r.style.getPropertyValue(prop);
          const lits = [...val.matchAll(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g)].map((m) => m[1].length === 3 ? [...m[1]].map((c) => c + c).join('') : m[1])
            .concat([...val.matchAll(/rgba?\((\d+),\s*(\d+),\s*(\d+)/g)].map((m) => m.slice(1, 4).map((n) => (+n).toString(16).padStart(2, '0')).join('')));
          for (const lit of lits) {
            const h = lit.toLowerCase();
            const k = kindOf(prop.startsWith('--') ? 'other' : prop);
            ((hexRefs['#' + h] ??= {})[k] ??= []);
            if (hexRefs['#' + h][k].length < 6 && !hexRefs['#' + h][k].includes(sel.slice(0, 50))) hexRefs['#' + h][k].push(sel.slice(0, 50));
          }
          for (const m of val.matchAll(/var\((--[\w-]+)/g)) {
            const k = kindOf(prop.startsWith('--') ? 'other' : prop);
            ((refs[m[1]] ??= {})[k] ??= []);
            if (refs[m[1]][k].length < 6 && !refs[m[1]][k].includes(sel)) refs[m[1]][k].push(sel.slice(0, 50));
          }
        }
      }
    };
    for (const sheet of document.styleSheets) { try { scan(sheet.cssRules); } catch (e) {} }
    const svgs = [...document.querySelectorAll('svg')].filter((el) => !el.closest(INJECTED));
    const icons = {
      svgCount: svgs.length,
      strokeIcons: svgs.filter((el) => el.getAttribute('stroke') || el.querySelector('[stroke]')).length,
      strokeWidths: [...new Set(svgs.map((el) => el.getAttribute('stroke-width')).filter(Boolean))].slice(0, 4),
      viewBoxes: [...new Set(svgs.map((el) => el.getAttribute('viewBox')).filter(Boolean))].slice(0, 4),
      emoji: [...new Set((document.body.innerText.match(/\p{Extended_Pictographic}/gu) || []))].slice(0, 12),
    };
    const copy = {
      headings: [...document.querySelectorAll('h1, h2, h3')].filter(visible).map((e) => e.textContent.trim().replace(/\s+/g, ' ')).slice(0, 8),
      buttons: [...document.querySelectorAll('button, .btn, a[class*="btn"]')].filter(visible).map((e) => e.textContent.trim().replace(/\s+/g, ' ')).filter((t) => t.length < 40).slice(0, 8),
      nav: [...document.querySelectorAll('nav a, .nav a, .sidebar a, [class*="nav-item"]')].filter(visible).map((e) => e.textContent.trim().replace(/\s+/g, ' ')).filter((t) => t.length < 30).slice(0, 8),
    };
    return {
      title: document.title,
      root: { order: root.order, raw: root.raw, resolved, colorOf },
      dark: { order: dark.order, raw: dark.raw, resolved: darkResolved, selector: dark.selector },
      type, page, used, refs, hexRefs, icons, copy,
      fontLinks: [...document.querySelectorAll('link[href*="fonts.googleapis.com"]')].map((l) => l.href),
    };
  });
  // The first block comment inside the first <style> is the style's design doc.
  const styleBlock = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i)?.[1] ?? '';
  data.doc = styleBlock.match(/\/\*([\s\S]*?)\*\//)?.[1] ?? '';
  data.file = file;
  data.num = num;
  fs.writeFileSync(path.join(OUT, `${num}.json`), JSON.stringify(data, null, 1));
  await page.close();
  process.stdout.write(`${num} `);
}
await browser.close();
console.log(`\nextracted ${files.length}`);
