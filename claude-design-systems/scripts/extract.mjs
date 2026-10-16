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
    // Running text: the size most text is set in, not the first paragraph (often a hero subtitle).
    const dominant = (sel) => {
      const w = new Map();
      for (const el of document.querySelectorAll(sel)) {
        if (!visible(el)) continue;
        const k = getComputedStyle(el).fontSize;
        const len = el.textContent.trim().length;
        const cur = w.get(k) || { n: 0, el };
        cur.n += len; w.set(k, cur);
      }
      const best = [...w.values()].sort((a, b) => b.n - a.n)[0];
      return best ? typeOf(best.el) : null;
    };
    const type = {
      display: largest('h1, .hero h1, .hero-title, [class*="hero"] h1, [class*="display"]'),
      h1: firstOf('h1'), h2: firstOf('h2'), h3: firstOf('h3'), h4: firstOf('h4'),
      body: dominant('main p, section p, article p, p, li, td'),
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
    const parseC = (s) => { const m = s && s.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/); return m ? [+m[1], +m[2], +m[3], m[4] == null ? 1 : +m[4]] : null; };
    const groundBehind = (el) => {
      const chain = [];
      for (let e = el; e; e = e.parentElement) chain.unshift(e);
      let c = [255, 255, 255];
      const lay = (x) => { if (!x || x[3] === 0) return; c = c.map((v, i) => x[i] * x[3] + v * (1 - x[3])); };
      for (const e of chain) {
        const st = getComputedStyle(e);
        if (/gradient/.test(st.backgroundImage)) {
          const stops = [...st.backgroundImage.matchAll(/rgba?\([^)]*\)/g)].map((m) => parseC(m[0])).filter(Boolean);
          if (stops.length) { const avg = [0, 1, 2, 3].map((i) => stops.reduce((a, s) => a + s[i], 0) / stops.length); lay(avg); }
        }
        lay(parseC(st.backgroundColor));
      }
      return `rgb(${c.map(Math.round).join(', ')})`;
    };
    // The ground most running text sits on (weighted by text length), and the ink most of that text uses.
    const grounds = new Map();
    for (const el of document.querySelectorAll('p, li, td, dd, label, span, a, h2, h3, h4')) {
      if (!visible(el) || el.children.length > 2) continue;
      const len = el.textContent.trim().length;
      const g = groundBehind(el), ink = getComputedStyle(el).color;
      const cur = grounds.get(g) || { n: 0, inks: new Map() };
      cur.n += len; cur.inks.set(ink, (cur.inks.get(ink) || 0) + len); grounds.set(g, cur);
    }
    const canvas = groundBehind(document.body);
    const cv = parseC(canvas);
    const lumC = (c) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); };
    const onCanvas = (c) => [0, 1, 2].map((i) => c[i] * c[3] + cv[i] * (1 - c[3]));
    const crOn = (ink) => { const a = lumC(onCanvas(parseC(ink))), b = lumC(cv); return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); };
    const inkWeight = new Map();
    for (const g of grounds.values()) for (const [ink, n] of g.inks) inkWeight.set(ink, (inkWeight.get(ink) || 0) + n);
    const inks = [...inkWeight.entries()].filter(([i]) => parseC(i)).sort((a, b) => b[1] - a[1]);
    // Page ink: the most-used text colour that reads on the canvas (4.5:1, else 3:1, else the best available).
    const ink = (inks.find(([i]) => crOn(i) >= 4.5) || inks.find(([i]) => crOn(i) >= 3) || inks.slice().sort((a, b) => crOn(b[0]) - crOn(a[0]))[0] || [getComputedStyle(document.body).color])[0];
    const topGround = [...grounds.entries()].sort((a, b) => b[1].n - a[1].n)[0];
    const page = {
      ground: canvas, ink, surface: topGround && topGround[0] !== canvas ? topGround[0] : null,
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
  // Google Fonts pulled in with CSS @import rather than <link>.
  for (const m of html.matchAll(/@import\s+url\(\s*['"]?(https:\/\/fonts\.googleapis\.com\/[^'")\s]+)['"]?\s*\)/g)) if (!data.fontLinks.includes(m[1])) data.fontLinks.push(m[1]);
  data.file = file;
  data.num = num;
  fs.writeFileSync(path.join(OUT, `${num}.json`), JSON.stringify(data, null, 1));
  await page.close();
  process.stdout.write(`${num} `);
}
await browser.close();
console.log(`\nextracted ${files.length}`);
