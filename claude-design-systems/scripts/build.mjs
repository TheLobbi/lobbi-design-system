#!/usr/bin/env node
// Turns build/raw/<num>.json (from extract.mjs) plus the gallery metadata in
// index.html into one Claude Design System folder per style:
//   systems/<NNN-slug>/project/{design-system.json, tokens.json, README.md,
//                               components/Cover/preview.html}
// Usage: node build.mjs [num ...]   (no args = every extracted style)
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const REPO = path.resolve(ROOT, '..');
const RAW = path.join(ROOT, 'build/raw');
const SYSTEMS = path.join(ROOT, 'systems');

const REPO_SLUG = 'thelobbi/lobbi-design-system';
const AUTHOR = process.env.DS_AUTHOR || 'Markus Ahling';
let NOW = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
let SHA = 'main';
// Stamp builds with the source commit's time, not the clock, so a rebuild only changes what changed.
try {
  SHA = execSync('git rev-parse --short HEAD', { cwd: REPO }).toString().trim();
  NOW = new Date(execSync('git log -1 --format=%cI', { cwd: REPO }).toString().trim()).toISOString().replace(/\.\d+Z$/, 'Z');
} catch {}

// ── gallery metadata ────────────────────────────────────────────────────────
const indexHtml = fs.readFileSync(path.join(REPO, 'index.html'), 'utf8');
const at = indexHtml.indexOf('const styles = [');
const STYLES = Function('return ' + indexHtml.slice(at + 15, indexHtml.indexOf('];', at) + 1))();
const META = Object.fromEntries(STYLES.map((s) => [s.num, s]));

// ── colour helpers ──────────────────────────────────────────────────────────
const parseRgb = (s) => {
  if (!s) return null;
  let m = String(s).match(/^#([0-9a-f]{3,8})$/i);
  if (m) {
    let h = m[1];
    if (h.length <= 4) h = [...h].map((c) => c + c).join('');
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1 };
  }
  m = String(s).match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?\s*\)/);
  if (!m) return null;
  const a = m[4] == null ? 1 : m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4]);
  return { r: +m[1], g: +m[2], b: +m[3], a };
};
const hex2 = (n) => Math.round(n).toString(16).padStart(2, '0');
const toHex = (c) => '#' + hex2(c.r) + hex2(c.g) + hex2(c.b) + (c.a < 1 ? hex2(c.a * 255) : '');
const solidHex = (c) => '#' + hex2(c.r) + hex2(c.g) + hex2(c.b);
const lum = (c) => {
  const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
};
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const over = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
const sat = (c) => { const mx = Math.max(c.r, c.g, c.b) / 255, mn = Math.min(c.r, c.g, c.b) / 255, l = (mx + mn) / 2; return mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2 * l - 1)); };
const dist = (a, b) => Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b);
const hueBand = (c) => {
  const r = c.r / 255, g = c.g / 255, b = c.b / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = d === 0 ? 0 : mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h = (h * 60 + 360) % 360;
  return h < 15 || h >= 345 ? 'red' : h < 45 ? 'orange' : h < 70 ? 'yellow' : h < 170 ? 'green' : h < 200 ? 'cyan' : h < 255 ? 'blue' : h < 290 ? 'purple' : 'pink';
};
const HUE_OK = { red: ['red', 'pink', 'orange'], orange: ['orange', 'red', 'yellow'], yellow: ['yellow', 'orange', 'green'], green: ['green', 'yellow', 'cyan'], blue: ['blue', 'cyan', 'purple'], purple: ['purple', 'blue', 'pink'], violet: ['purple', 'blue', 'pink'], pink: ['pink', 'red', 'purple'] };

// ── misc helpers ────────────────────────────────────────────────────────────
const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const tokName = (s) => s.replace(/^--/, '').replace(/[^A-Za-z0-9_-]+/g, '-').replace(/^[^A-Za-z0-9]+/, '').slice(0, 64);
const pascal = (s) => s.replace(/&/g, ' And ').split(/[^A-Za-z0-9]+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join('').replace(/^(\d)/, 'S$1');
const px = (v) => { const m = String(v).trim().match(/^(-?[\d.]+)(px|rem|em)?$/); if (!m) return null; return m[2] === 'rem' || m[2] === 'em' ? +m[1] * 16 : +m[1]; };
const isLength = (v) => /^(-?[\d.]+(px|rem|em|%)|0)$/.test(String(v).trim());
const code = (s) => '`' + s + '`';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sentence = (s) => { s = s.trim().replace(/\s+/g, ' '); if (!s) return s; s = s[0].toUpperCase() + s.slice(1); return /[.!?]$/.test(s) ? s : s + '.'; };
const uniq = (a) => [...new Set(a)];

// ── design-doc comment parsing ──────────────────────────────────────────────
function parseDoc(doc) {
  const lines = doc.split('\n').map((l) => l.replace(/^\s*\*+ ?/, '').replace(/\s+$/, '')).map((l) => l.replace(/^\s+/, (w) => w.length > 8 ? '  ' : ''));
  const sections = [];
  let cur = null;
  for (const raw of lines) {
    const l = raw.trim();
    if (!l || /^[═=─\-_*#]{6,}$/.test(l)) { if (cur && cur.lines.length && cur.lines[cur.lines.length - 1] !== '') cur.lines.push(''); continue; }
    const h = l.match(/^([A-Z][A-Z0-9 &/'()+,.%-]{2,70}?)(?::\s*(.*))?$/);
    if (h && !/[a-z]/.test(h[1]) && (h[2] !== undefined || l.endsWith(':') || /DESIGN|SYSTEM|ANALYSIS|PHILOSOPHY|INVENTORY|STRATEGY/.test(h[1])) && h[1].replace(/[^A-Z]/g, '').length >= 4) {
      cur = { title: h[1].trim(), lead: (h[2] || '').trim(), lines: [] };
      sections.push(cur);
      continue;
    }
    if (!cur) { cur = { title: '', lead: '', lines: [] }; sections.push(cur); }
    cur.lines.push(raw.replace(/^\s{0,1}/, ''));
  }
  for (const s of sections) while (s.lines.length && s.lines[s.lines.length - 1] === '') s.lines.pop();
  return { lines: lines.map((l) => l.trim()), sections: sections.filter((s) => s.lead || s.lines.some(Boolean)) };
}
const findSection = (doc, re) => doc.sections.find((s) => re.test(s.title));

// What the doc says about a token: the text after its name or hex on the same
// line, or a "Usage:" line just below a "Name (#hex)" entry.
function docNote(doc, name, hexes) {
  const needles = [new RegExp('--' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b'), ...hexes.filter(Boolean).map((h) => new RegExp(h.replace('#', '#?') + '\\b', 'i'))];
  for (let i = 0; i < doc.lines.length; i++) {
    const l = doc.lines[i];
    if (!needles.some((re) => re.test(l))) continue;
    let after = l.split(/→|->|—|–|\s-\s/).slice(1).join(' ').trim();
    if (!after) {
      const m = l.match(/\)\s*[:–—-]?\s*(.+)$/);
      if (m && !/^[#\d]/.test(m[1])) after = m[1];
    }
    const label = (l.match(/^(?:[-•]\s*)?(?:[\w ]+:\s*)?([A-Z][\w' ]{2,30}?)\s*\(#/) || [])[1];
    for (let j = i + 1; j < Math.min(i + 7, doc.lines.length); j++) {
      const u = doc.lines[j].match(/^[-•]?\s*(Usage|Use|Used for|Purpose):\s*(.+)$/i);
      if (u) { after = (after ? after + '. ' : '') + u[2]; break; }
      if (/#[0-9a-f]{3,6}\b|^[A-Z][A-Z ]+:/.test(doc.lines[j])) break;
    }
    after = after.replace(/^[:\s]+/, '').replace(/\s+/g, ' ').trim();
    if (after || label) return { note: after, label };
  }
  return null;
}

// Colours the doc names but the CSS does not declare: "Russian Red (#dc2626)".
function docColors(doc) {
  const out = [];
  for (const l of doc.lines) {
    for (const m of l.matchAll(/([A-Z][A-Za-z' ]{1,28}?)\s*\(\s*(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})\s*\)/g)) out.push({ label: m[1].trim(), hex: m[2].toLowerCase() });
    const v = l.match(/--([\w-]+):\s*(#[0-9a-fA-F]{3,8})\b/);
    if (v) out.push({ label: v[1], hex: v[2].toLowerCase(), varName: v[1] });
  }
  const seen = new Set();
  return out.filter((c) => (seen.has(c.hex) ? false : seen.add(c.hex)));
}

// ── selectors → readable usage ──────────────────────────────────────────────
const KIND_WORD = { background: 'background', text: 'text', border: 'border', shadow: 'shadow/glow', spacing: 'spacing', radius: 'radius', type: 'type', size: 'size', other: 'value' };
function usageFromRefs(refs) {
  if (!refs) return '';
  const parts = [];
  for (const [kind, sels] of Object.entries(refs)) {
    const s = sels.filter((x) => !/^:root$|^html$/.test(x));
    if (!s.length || kind === 'other') continue;
    parts.push(`${KIND_WORD[kind] || kind} on ${s.slice(0, 3).map(code).join(', ')}`);
  }
  return parts.length ? 'Used as ' + parts.slice(0, 3).join('; ') + '.' : '';
}
const ROLE_HINTS = [
  [/(^|-)(bg|background|canvas|base|paper|ground|page)(-|$)/, 'Background surface.'],
  [/surface|card|panel|elevated|raised/, 'Surface for cards and panels.'],
  [/(^|-)(text|ink|fg|foreground|copy|body)(-|$)/, 'Text colour.'],
  [/muted|subtle|secondary-text|caption/, 'Secondary / muted text.'],
  [/border|divider|rule|line|outline|stroke/, 'Borders and dividers.'],
  [/primary|brand/, 'Primary brand colour: key actions and emphasis.'],
  [/secondary/, 'Secondary brand colour.'],
  [/accent|highlight/, 'Accent for highlights and emphasis.'],
  [/success|positive|valid/, 'Success state; pair with a label or icon.'],
  [/warn|caution|pending/, 'Warning state; pair with a label or icon.'],
  [/error|danger|critical|negative|alert/, 'Error / danger state; pair with a label or icon.'],
  [/info|notice/, 'Informational state.'],
  [/focus|ring/, 'Focus ring.'],
  [/hover/, 'Hover state.'],
  [/link/, 'Links.'],
];
const roleHint = (name) => (ROLE_HINTS.find(([re]) => re.test(name)) || [])[1] || '';
const isStatus = (name) => /success|warn|error|danger|info|critical|positive|negative|alert|caution|valid/.test(name);

// ── tokens.json ─────────────────────────────────────────────────────────────
function buildTokens(raw, meta, doc) {
  const R = raw.root;
  const notSynced = [];
  const used = new Set();
  const take = (n) => { let x = tokName(n) || 'token', i = 2; while (used.has(x.toLowerCase())) x = `${tokName(n)}-${i++}`; used.add(x.toLowerCase()); return x; };
  const nameOf = {};

  // Colours
  const colorVars = R.order.filter((p) => R.colorOf[p]);
  const darkColorVars = raw.dark.order.filter((p) => parseRgb(raw.dark.resolved[p]));
  const firstIsDark = false;
  const WHITE = { r: 255, g: 255, b: 255, a: 1 };
  const pageBg = over(parseRgb(raw.page.ground || raw.page.bg) || WHITE, WHITE);
  const themes = darkColorVars.length
    ? [{ id: 'light', name: 'Light' }, { id: 'dark', name: 'Dark' }]
    : [lum(pageBg) < 0.2 ? { id: 'dark', name: 'Dark' } : { id: 'light', name: 'Light' }];
  const T0 = themes[0].id;
  const colorTokens = [];
  for (const p of colorVars) nameOf[p] = take(p);
  const valueFor = (rawV, resolvedRgb) => {
    const v = rawV.trim();
    const alias = v.match(/^var\((--[\w-]+)\)$/);
    if (alias && nameOf[alias[1]] && R.colorOf[alias[1]]) return `{${nameOf[alias[1]]}}`;
    if (/^#[0-9a-f]{3,8}$/i.test(v)) return v.toLowerCase();
    if (/^(rgba?|hsla?)\([\d.,%\s/]+\)$/i.test(v)) return v.replace(/\s+/g, ' ');
    const c = parseRgb(resolvedRgb);
    return c ? toHex(c) : null;
  };
  for (const p of colorVars) {
    const name = nameOf[p];
    const v = valueFor(R.raw[p], R.colorOf[p]);
    if (!v) { notSynced.push(`${p} (${R.raw[p]})`); continue; }
    const c = parseRgb(R.colorOf[p]);
    const note = docNote(doc, p.slice(2), [c && solidHex(c)]);
    const refs = usageFromRefs(raw.refs[p]) || usageFromRefs(c && raw.hexRefs[solidHex(c)]);
    const usage = [note?.note && sentence(note.note), refs, !note?.note && !refs && roleHint(name)].filter(Boolean).join(' ');
    const value = darkColorVars.includes(p) ? { [T0]: v, dark: valueFor(raw.dark.raw[p], raw.dark.resolved[p]) } : v;
    colorTokens.push({ name, value, usage: usage || 'Declared in the style\'s palette.', _rgb: c, _var: p });
  }
  for (const p of darkColorVars) {
    if (nameOf[p]) continue;
    const name = (nameOf[p] = take(p));
    const v = valueFor(raw.dark.raw[p], raw.dark.resolved[p]);
    colorTokens.push({ name, value: { dark: v }, usage: (usageFromRefs(raw.refs[p]) || roleHint(name) || 'Dark-theme colour.') + ' Defined only for the dark theme.', _rgb: parseRgb(raw.dark.resolved[p]), _var: p });
  }
  // Colours the doc names but no variable declares (pages written with literals).
  if (colorTokens.length < 6) {
    for (const dc of docColors(doc)) {
      if (colorTokens.some((t) => t._rgb && solidHex(t._rgb) === dc.hex)) continue;
      const c = parseRgb(dc.hex);
      const name = take(slug(dc.label) || 'color');
      const n = docNote(doc, dc.varName || '___', [dc.hex]);
      const refs = usageFromRefs(raw.hexRefs[dc.hex]);
      colorTokens.push({ name, value: dc.hex, usage: [n?.note && sentence(n.note), refs].filter(Boolean).join(' ') || `${dc.label} from the style's palette.`, _rgb: c });
    }
  }
  // Colours the page paints directly that no token captures.
  const known = () => new Set(colorTokens.filter((t) => t._rgb).map((t) => solidHex(t._rgb)));
  const painted = Object.entries(raw.hexRefs)
    .map(([hex, kinds]) => ({ hex, kinds, n: Object.entries(kinds).filter(([k]) => ['background', 'text', 'border'].includes(k)).reduce((a, [, s]) => a + s.length, 0) }))
    .filter((x) => x.n >= 2 && !known().has(x.hex))
    .sort((a, b) => b.n - a.n)
    .slice(0, 10);
  for (const x of painted) {
    const kind = ['background', 'text', 'border'].find((k) => x.kinds[k]);
    const sel = (x.kinds[kind] || []).find((s) => /[.#]/.test(s)) || x.kinds[kind][0];
    const base = slug((sel.match(/[.#]([\w-]+)/) || [, sel])[1]) || 'color';
    const name = take(`${base}-${{ background: 'bg', text: 'text', border: 'border' }[kind]}`);
    colorTokens.push({ name, value: x.hex, usage: `Painted directly by the reference page: ${usageFromRefs(x.kinds).replace(/^Used as /, '')}`, _rgb: parseRgb(x.hex) });
  }
  // The page ground and ink, as rendered.
  const pageText = parseRgb(raw.page.ink || raw.page.text) || { r: 0, g: 0, b: 0, a: 1 };
  // Prefer a theme-aware token so the ground and ink follow every theme.
  const sameAs = (c) => colorTokens.filter((t) => t._rgb && t._rgb.a === 1 && dist(t._rgb, c) < 10 && (c.a ?? 1) === 1).sort((a, b) => (typeof b.value === 'object') - (typeof a.value === 'object'))[0];
  const bgTok = sameAs(pageBg), txTok = sameAs(pageText);
  const gradient = raw.page.bodyGround?.image && /gradient/.test(raw.page.bodyGround.image);
  colorTokens.unshift(
    { name: take('page-bg'), value: bgTok ? `{${bgTok.name}}` : toHex(pageBg), usage: `Page ground, as rendered behind the page's content${gradient ? ' (the body gradient, averaged)' : ''}. Every text pairing below is checked against it.`, _rgb: pageBg, _ground: true },
    { name: take('page-text'), value: txTok ? `{${txTok.name}}` : toHex(pageText), usage: `Default body text on \`page-bg\`: the colour most of the page's text uses that reads on it (${contrast(over(pageText, pageBg), pageBg).toFixed(1)}:1).`, _rgb: pageText, _ink: true },
  );
  const surf = raw.page.surface && over(parseRgb(raw.page.surface) || WHITE, WHITE);
  if (surf && dist(surf, pageBg) > 6) {
    const sTok = sameAs(surf);
    colorTokens.splice(2, 0, { name: take('page-surface'), value: sTok ? `{${sTok.name}}` : toHex(surf), usage: 'Surface most of the page\'s running text sits on (cards, panels).', _rgb: surf, _surface: true });
  }
  // A token named for one hue but holding another: keep the value exact, say so.
  for (const t of colorTokens) {
    if (!t._rgb || sat(t._rgb) < 0.25) continue;
    const word = (t.name.match(/(red|orange|yellow|green|blue|purple|violet|pink)/) || [])[1];
    if (!word) continue;
    const band = hueBand(t._rgb);
    if (!HUE_OK[word].includes(band)) t.usage += ` Named “${word}” in the source, but the value is ${band}; kept exact.`;
  }
  // Colours the design notes quote as text ("Pink on white: 4.7:1") count as text colours too.
  const claimedText = doc.lines.filter((l) => /\d(\.\d+)?\s*:\s*1/.test(l))
    .map((l) => (l.replace(/^[-•✓\s]+/, '').match(/^(?:[^:(]*?:\s*)?([A-Za-z][\w-]*(?: [A-Za-z][\w-]*)?)\s+(?:text\s+)?on\s+/i) || [])[1])
    .filter(Boolean).map(slug).filter((w) => w && !/^(white|black|text|body)$/.test(w));
  // Contrast notes for text colours.
  for (const t of colorTokens) {
    if (!t._rgb || t._ground || t._ink || t._surface) continue;
    const isText = /text|ink|fg|foreground|muted|link|heading|copy/.test(t.name) || (raw.refs[t._var]?.text?.length) || (raw.hexRefs[solidHex(t._rgb)]?.text?.length)
      || claimedText.some((w) => ('-' + t.name + '-').includes('-' + w + '-'));
    if (!isText) continue;
    const cr = contrast(over(t._rgb, pageBg), pageBg);
    t._cr = cr; t._lowText = cr < 4.5;
    t.usage += ` ${cr.toFixed(1)}:1 on \`page-bg\`${cr < 4.5 ? (cr >= 3 ? ' — large text (24px+) or non-text marks only.' : ' — under 3:1 here, as in the source: use it only on the lighter or darker fills the reference page pairs it with, never as text on `page-bg`.') : '.'}`;
  }

  // Non-colour variables.
  const spacing = [], radius = [], shadow = [], border = [], zIndex = [], layout = [], opacity = [], scale = [], motion = [];
  for (const p of R.order) {
    if (R.colorOf[p]) continue;
    const n = p.slice(2), v = (R.resolved[p] || R.raw[p] || '').trim();
    const note = docNote(doc, n, []);
    const refs = usageFromRefs(raw.refs[p]);
    const usage = [note?.note && sentence(note.note), refs].filter(Boolean).join(' ');
    if (/duration|transition|ease|timing|speed|animation|delay/.test(n)) { motion.push([n, R.raw[p]]); continue; }
    if (/shadow|elevation|glow/.test(n)) {
      if (v && v.length <= 400 && !/var\(|url\(/.test(v) && /^[\w\s#%(),./-]+$/.test(v) && !/\b(?!rgba?\b|hsla?\b|inset\b|none\b|px\b|rem\b|em\b)[a-z]{3,}\b/i.test(v.replace(/\d+(px|rem|em)/g, ''))) shadow.push({ name: take(n), value: v, usage: usage || 'Elevation.' });
      else notSynced.push(`${p} (${R.raw[p].slice(0, 60)})`);
      continue;
    }
    if (!isLength(v) && !/^-?[\d.]+$/.test(v)) { if (!/font-family|^font$|font-(display|body|heading|sans|serif|mono|primary|secondary)$/.test(n)) notSynced.push(`${p} (${String(R.raw[p]).slice(0, 60)})`); continue; }
    if (/radius|rounded|corner/.test(n)) radius.push({ name: take(n), value: v, usage: usage || 'Corner radius.' });
    else if (/z-index|^z-|layer/.test(n)) zIndex.push({ name: take(n), value: v, usage: usage || 'Stacking order.' });
    else if (/opacity|alpha/.test(n)) opacity.push({ name: take(n), value: v, usage: usage || 'Opacity.' });
    else if (/border-width|stroke|border-(thin|thick|medium|hairline)|^border$|hairline/.test(n)) border.push({ name: take(n), value: v, usage: usage || 'Border width.' });
    else if (/font-size|text-size|^fs-|^size-|^text-(2xs|xs|sm|base|md|lg|xl|\dxl)$|^font-(xs|sm|base|md|lg|xl|\dxl)$/.test(n) && isLength(v)) scale.push({ name: n, fontSize: v });
    else if (/line-height|leading|font-weight|^weight|letter-spacing|tracking/.test(n)) continue;
    else if (/space|spacing|gap|gutter|pad|inset|^s-\d|^sp-|margin/.test(n)) spacing.push({ name: take(n), value: v, usage: usage || 'Spacing step.' });
    else if (/width|height|max-|min-|container|sidebar|header|nav|content|grid|column|breakpoint/.test(n)) layout.push({ name: take(n), value: v, usage: usage || 'Layout dimension.' });
    else notSynced.push(`${p} (${String(R.raw[p]).slice(0, 60)})`);
  }
  // Fall back to what the page renders when it declares no scale.
  const top = (obj, min) => Object.entries(obj || {}).filter(([, c]) => c >= min).sort((a, b) => b[1] - a[1]);
  if (!spacing.length) {
    for (const [v, c] of top(raw.used.space, 3).slice(0, 6).sort((a, b) => px(a[0]) - px(b[0]))) spacing.push({ name: take(`space-${px(v)}`), value: v, usage: `Padding/gap the reference page renders on ${c} elements.` });
  }
  if (!radius.length) {
    for (const [v, c] of top(raw.used.radius, 2).filter(([v]) => isLength(v)).slice(0, 4).sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]))) {
      const full = px(v) >= 40 || v === '50%';
      if (full && radius.some((r) => r.name === 'radius-full')) continue;
      radius.push({ name: take(full ? 'radius-full' : `radius-${px(v)}`), value: v, usage: `${full ? 'Pills and circles; c' : 'C'}orner radius the reference page renders on ${c} elements.` });
    }
  }
  if (!shadow.length) {
    for (const [v, c] of top(raw.used.shadow, 2).filter(([v]) => v.length <= 400 && !/var\(/.test(v)).slice(0, 3)) shadow.push({ name: take(`shadow-${shadow.length + 1}`), value: v, usage: `Shadow the reference page renders on ${c} elements.` });
  }

  // Type
  const gFamilies = uniq(raw.fontLinks.flatMap((u) => [...u.matchAll(/family=([^&:]+)/g)].map((m) => decodeURIComponent(m[1].replace(/\+/g, ' ')))));
  const firstFam = (stack) => (stack || '').split(',')[0].replace(/["']/g, '').trim();
  const cleanStack = (stack) => (stack || '').replace(/[;{}<>\\()]/g, '').slice(0, 200);
  const S = raw.type;
  const bodyStack = cleanStack(S.body?.fontFamily || raw.page.fontFamily);
  const knownFam = new Set([...gFamilies, firstFam(bodyStack)].map((f) => f.toLowerCase()));
  const families = {};
  const famKey = {};
  const addFam = (key, stack) => { const f = firstFam(stack).toLowerCase(); if (famKey[f]) return famKey[f]; families[key] = stack; famKey[f] = key; return key; };
  const displayStack = cleanStack((S.display || S.h1 || S.h2)?.fontFamily || bodyStack);
  addFam('display', displayStack);
  addFam('body', bodyStack);
  if (S.mono && knownFam.has(firstFam(S.mono.fontFamily).toLowerCase())) addFam('mono', cleanStack(S.mono.fontFamily));
  for (const g of gFamilies) if (!famKey[g.toLowerCase()]) addFam(slug(g), `"${g}", ${/mono|code/i.test(g) ? 'monospace' : /serif|display|garamond|playfair|baskerville|lora|merriweather|crimson|cormorant|libre|noto serif|bodoni|didot/i.test(g) ? 'serif' : 'sans-serif'}`);
  const styleRow = (key, sample, label) => {
    if (!sample) return null;
    let fam = famKey[firstFam(sample.fontFamily).toLowerCase()];
    let note = '';
    if (!fam) { fam = famKey[firstFam(bodyStack).toLowerCase()]; note = ' The reference page leaves this element on the browser default face; set it in the body family.'; }
    const row = { name: key, family: fam, fontSize: sample.fontSize, fontWeight: +sample.fontWeight || 400 };
    if (/px$/.test(sample.lineHeight)) row.lineHeight = sample.lineHeight;
    if (/px$/.test(sample.letterSpacing) && sample.letterSpacing !== '0px') row.letterSpacing = sample.letterSpacing;
    if (sample.fontStyle === 'italic') row.fontStyle = 'italic';
    row.sample = sample.text.slice(0, 60) || label;
    row.usage = `${label}${sample.textTransform === 'uppercase' ? ', set in uppercase' : ''} — as \`${sample.tag}${sample.cls ? '.' + String(sample.cls).split(/\s+/)[0] : ''}\` on the reference page.${note}`;
    return row;
  };
  const rows = [
    styleRow('display', S.display, 'Hero and page titles'),
    styleRow('heading-1', S.h1, 'Top-level headings'),
    styleRow('heading-2', S.h2, 'Section headings'),
    styleRow('heading-3', S.h3, 'Card and module titles'),
    styleRow('heading-4', S.h4, 'Minor headings'),
    styleRow('body', S.body, 'Body copy'),
    styleRow('label', S.label, 'Labels, eyebrows and table headers'),
    styleRow('caption', S.small, 'Captions and metadata'),
    styleRow('button', S.button, 'Button labels'),
    styleRow('code', S.mono, 'Code and tabular figures'),
  ].filter(Boolean);
  const seen = new Set();
  const typeRows = rows.filter((r) => { const k = [r.family, r.fontSize, r.fontWeight, r.letterSpacing, r.usage.includes('uppercase')].join('|'); return seen.has(k) ? false : seen.add(k); });
  const groups = [];
  const byFam = {};
  for (const r of typeRows) (byFam[r.family] ??= []).push(r);
  const groupName = { display: 'Display', body: 'Text', mono: 'Code' };
  for (const [fam, styles] of Object.entries(byFam)) groups.push({ name: groupName[fam] || fam, family: fam, styles: styles.map(({ family, ...s }) => s) });
  if (scale.length) groups.push({ name: 'Scale', family: famKey[firstFam(bodyStack).toLowerCase()], styles: scale.slice(0, 16).map((s) => ({ name: s.name, fontSize: s.fontSize, usage: `Size step \`--${s.name}\` from the style's type scale.` })) });

  const strip = (arr) => arr.map(({ _rgb, _var, _ground, _ink, _surface, ...t }) => t);
  const tokens = {
    name: meta.name,
    version: 1,
    meta: {
      source: 'github', repo: REPO_SLUG, ref: `main@${SHA}`, package: '.',
      paths: { tokens: [raw.file], docs: [raw.file, 'index.html'] },
      synced: NOW.slice(0, 10),
    },
    color: { themes, tokens: strip(colorTokens) },
    type: { fonts: [], families, groups },
  };
  if (spacing.length) tokens.spacing = { tokens: spacing };
  if (radius.length) tokens.radius = { tokens: radius };
  if (shadow.length) tokens.shadow = { tokens: shadow };
  if (border.length) tokens.borderWidth = { tokens: border };
  if (layout.length) tokens.layout = { tokens: layout.slice(0, 60) };
  if (zIndex.length) tokens.zIndex = { tokens: zIndex };
  if (opacity.length) tokens.opacity = { tokens: opacity };
  return { tokens, colorTokens, spacing, radius, shadow, motion, notSynced, gFamilies, families, typeRows, pageBg, pageText, themes };
}

// ── README.md ───────────────────────────────────────────────────────────────
function buildReadme(raw, meta, doc, T) {
  const L = [];
  const phil = findSection(doc, /PHILOSOPHY|CONCEPT|VISION|ESSENCE/);
  const body = phil ? phil.lines.filter((l) => l && !/^\s*[-•]/.test(l)).join(' ') : '';
  const intro = phil ? [phil.lead && sentence(phil.lead), body && sentence(body)].filter(Boolean).join(' ') : '';
  L.push(intro || sentence(`${meta.name}: ${meta.blend}`));
  L.push('');
  L.push(`**Blend:** ${meta.blend}  `);
  L.push(`**Temperature:** ${meta.temp}/10 (${meta.temp >= 6 ? 'warm' : meta.temp <= 4 ? 'cool' : 'balanced'}) · **Formality:** ${meta.formality}/10 · **Tags:** ${meta.tags.join(', ')}  `);
  L.push(`**Perfect for:** ${meta.perfectFor.join(', ')}`);
  L.push('');

  // Content fundamentals
  L.push('## Content fundamentals', '');
  const c = raw.copy;
  const title = (s) => s.split(' ').every((w) => !/^[a-z]/.test(w) || /^(and|of|the|to|for|in|on|a|an|with|&)$/.test(w));
  const btnCase = c.buttons.length ? (c.buttons.filter(title).length >= c.buttons.length / 2 ? 'Title Case' : 'sentence case') : null;
  L.push(`- Write for members and staff of the organization: direct, ${meta.formality >= 8 ? 'formal and composed' : meta.formality <= 4 ? 'relaxed and conversational' : 'professional but warm'}.`);
  if (c.headings.length) L.push(`- Headings name the thing plainly: ${c.headings.slice(0, 4).map((h) => `“${h}”`).join(', ')}.`);
  if (btnCase) L.push(`- Buttons are short verb phrases in ${btnCase}: ${c.buttons.slice(0, 4).map((h) => `“${h}”`).join(', ')}.`);
  if (c.nav.length) L.push(`- Navigation uses single nouns: ${c.nav.slice(0, 6).map((h) => `“${h}”`).join(', ')}.`);
  L.push(`- ${raw.icons.emoji.length ? `The reference page uses emoji as inline glyphs (${raw.icons.emoji.slice(0, 6).join(' ')}); keep them functional, never decorative.` : 'No emoji: meaning is carried by words and icons.'}`);
  L.push('');

  // Colour
  L.push('## Color', '');
  const ct = T.colorTokens;
  const brandish = [];
  for (const t of ct.filter((t) => !t._ground && !t._ink && t._rgb && t._rgb.a === 1 && !isStatus(t.name) && sat(t._rgb) > 0.25)) if (brandish.length < 4 && brandish.every((b) => dist(b._rgb, t._rgb) > 70)) brandish.push(t);
  const brandNames = brandish.map((t) => code(t.name));
  L.push(`- Set the page on ${code('page-bg')} with body text in ${code('page-text')}. The theme is ${T.themes.map((t) => t.name.toLowerCase()).join(' and ')}${T.themes.length > 1 ? '; every colour token carries both values' : ''}.`);
  if (brandNames.length) L.push(`- Identity colours: ${brandNames.join(', ')}. Lead with the first; use the rest for accents and emphasis.`);
  const status = ct.filter((t) => isStatus(t.name)).map((t) => code(t.name));
  if (status.length) L.push(`- Status colours (${status.join(', ')}) always travel with a word or icon; never signal state by hue alone.`);
  L.push(`- Each token's note says where the reference page uses it and, for text colours, its contrast on ${code('page-bg')}. Keep body text at 4.5:1 or better.`);
  const colorSec = findSection(doc, /COLOU?R/);
  if (colorSec) { L.push('', '### Palette rationale', ''); pushLines(L, colorSec); }
  L.push('');

  // Typography
  L.push('## Typography', '');
  const famLines = Object.entries(T.families).map(([k, v]) => `- ${code(k)} — ${v}`);
  L.push(...famLines);
  if (raw.fontLinks.length) L.push('', `Faces are hosted on Google Fonts (${[...T.gFamilies, ...T.addedFonts].join(', ')}); load them with:`, '', '```html', ...raw.fontLinks.map((u) => `<link rel="stylesheet" href="${u}">`), '```');
  if (T.addedFonts.length) L.push('', `The reference page names ${T.addedFonts.join(', ')} without loading ${T.addedFonts.length > 1 ? 'them' : 'it'}, so it shows a fallback face; the last link above loads the intended face.`);
  L.push('', `- Set titles in ${code('display')}${T.typeRows.some((r) => r.name === 'heading-2') ? `, sections in ${code('heading-2')}` : ''} and running text in ${code('body')}.`);
  if (T.typeRows.some((r) => r.usage.includes('uppercase'))) L.push(`- Uppercase is reserved for small labels (${T.typeRows.filter((r) => r.usage.includes('uppercase')).map((r) => code(r.name)).join(', ')}), always with the letter-spacing given.`);
  const typeSec = findSection(doc, /TYPOGRAPH|TYPE|FONT/);
  if (typeSec) { L.push('', '### Type rationale', ''); pushLines(L, typeSec); }
  L.push('');

  // Spacing, shape, elevation
  L.push('## Spacing, shape and elevation', '');
  if (T.spacing.length) L.push(`- Spacing steps: ${T.spacing.map((s) => `${code(s.name)} ${s.value}`).join(', ')}. Pad cards and sections from these steps only.`);
  if (T.radius.length) L.push(`- Corners: ${T.radius.map((s) => `${code(s.name)} ${s.value}`).join(', ')}.`);
  if (T.shadow.length) L.push(`- Elevation: ${T.shadow.map((s) => code(s.name)).join(', ')}, lowest first for resting cards, higher for hover and overlays.`);
  const spatial = findSection(doc, /SPATIAL|SPACING|LAYOUT|GRID|ARCHITECTURE/);
  if (spatial) { L.push(''); pushLines(L, spatial); }
  L.push('');

  // States & motion
  const inter = findSection(doc, /INTERACTION|STATES|MOTION|ANIMATION|MICRO/);
  if (inter || T.motion.length) {
    L.push('## States and motion', '');
    if (inter) pushLines(L, inter);
    if (T.motion.length) L.push('', `Timing values: ${T.motion.map(([n, v]) => `${code('--' + n)} ${v}`).join(', ')}.`);
    L.push('', '- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.');
    L.push('');
  }

  // Iconography
  L.push('## Iconography', '');
  const I = raw.icons;
  if (I.strokeIcons) L.push(`- Inline SVG line icons${I.viewBoxes.length ? ` on a ${I.viewBoxes[0].split(' ').slice(2).join('×')} viewBox` : ''}${I.strokeWidths.length ? `, ${I.strokeWidths[0]}px stroke` : ''}, drawn in \`currentColor\` so they take the text colour around them.`);
  else if (I.svgCount) L.push(`- Inline SVG icons (${I.svgCount} on the reference page), coloured from the palette tokens.`);
  else L.push('- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.');
  L.push('- No logo ships with this style: set the organization name in the `display` style.');
  L.push('');

  // Accessibility
  L.push('## Accessibility', '');
  L.push(`- ${code('page-text')} on ${code('page-bg')} measures ${contrast(over(T.pageText, T.pageBg), T.pageBg).toFixed(1)}:1.`);
  L.push('- Every interactive element shows a visible focus state at 3:1 or better against its surface.');
  const low = T.colorTokens.filter((t) => t._lowText);
  const fmtT = (t) => `${code(t.name)} ${t._cr.toFixed(1)}:1`;
  const large = low.filter((t) => t._cr >= 3), never = low.filter((t) => t._cr < 3);
  if (large.length) L.push(`- Measured on ${code('page-bg')}, these text colours reach 3:1 but not 4.5:1: ${large.map(fmtT).join(', ')}. Use them on ${code('page-bg')} only for large text (24px+, or bold 19px+), whatever the design notes below claim.`);
  if (never.length) L.push(`- These fall under 3:1 on ${code('page-bg')}: ${never.map(fmtT).join(', ')}. Never set text in them on ${code('page-bg')}, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).`);
  const a11y = findSection(doc, /ACCESSIB|WCAG|A11Y/);
  if (a11y) { L.push('', 'From the style\'s design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):', ''); pushLines(L, a11y); }
  L.push('');

  // Components
  const comp = findSection(doc, /COMPONENT/);
  if (comp) { L.push('## Component inventory', '', 'The reference page composes these patterns from the tokens above:', ''); pushLines(L, comp); L.push(''); }

  // Remaining doc sections
  const usedSecs = new Set([phil, colorSec, typeSec, spatial, inter, a11y, comp].filter(Boolean));
  const rest = doc.sections.filter((s) => s.title && !usedSecs.has(s) && !/ULTRATHINK|DESIGN ANALYSIS|DESIGN SYSTEM DOC|^STYLE \d|BLEND/.test(s.title));
  if (rest.length) {
    L.push('## Further guidance', '');
    for (const s of rest.slice(0, 8)) {
      if (/TEMPERATURE|FORMALITY/.test(s.title)) { s.lead = s.lead.replace(/^\d+(\.\d+)?\/10\s*/, ''); if (s.lines[0] && /^\s*\d+(\.\d+)?\/10/.test(s.lines[0])) s.lines.shift(); }
      if (!s.lead && !s.lines.some(Boolean)) continue;
      L.push(`### ${titleCase(s.title)}`, ''); pushLines(L, s); L.push('');
    }
  }

  L.push('## Not synced', '');
  L.push(`Built from \`${raw.file}\`. No component bundle: the reference page's markup is not packaged as live components.${T.notSynced.length ? ` Variables not representable as tokens (calc/clamp/gradients/font stacks): ${T.notSynced.slice(0, 12).map((s) => code(s.split(' ')[0])).join(', ')}${T.notSynced.length > 12 ? ` and ${T.notSynced.length - 12} more` : ''}.` : ''}`);
  return checkClaims(L.join('\n'), T).replace(/\n{3,}/g, '\n\n') + '\n';
}
// Contrast ratios quoted in a style's design notes ("Teal on Cream: 4.9:1",
// "Amber (#f57c00) - 5.8:1") are measured against the tokens; a claim no
// matching pair supports gets the measured figure in bold beside it.
function checkClaims(md, T) {
  const toks = T.colorTokens.filter((t) => t._rgb);
  const named = { white: [{ c: { r: 255, g: 255, b: 255, a: 1 } }], black: [{ c: { r: 0, g: 0, b: 0, a: 1 } }] };
  const resolve = (phrase) => {
    const p = phrase.trim().replace(/^(the|a)\s+/i, '');
    const hx = p.match(/#[0-9a-f]{3,6}\b/i);
    if (hx) return [{ c: parseRgb(hx[0].toLowerCase()) }];
    const sl = slug(p);
    if (!sl) return null;
    const hits = toks.filter((t) => t.name === sl || t.name.endsWith('-' + sl) || ('-' + t.name + '-').includes('-' + sl + '-')).map((t) => ({ c: t._rgb, name: t.name }));
    return hits.length ? hits : named[sl] || null;
  };
  const fmt = (xs) => { const lo = Math.min(...xs), hi = Math.max(...xs); return lo.toFixed(1) === hi.toFixed(1) ? `${lo.toFixed(1)}:1` : `${lo.toFixed(1)}–${hi.toFixed(1)}:1`; };
  return md.split('\n').map((line) => {
    if (!/^- /.test(line) || /`page-bg`|focus state|golden ratio|1:1\.618/i.test(line)) return line;
    const bodyPx = parseFloat((T.typeRows.find((x) => x.name === 'body') || {}).fontSize);
    const sz = line.match(/(\d+(?:\.\d+)?)px\b/);
    if (sz && bodyPx && /(minimum|base)[^\n]*(body|text|font)|body[^\n]*(minimum|base|size)|(body|base) (text|font)/i.test(line) && !/:\s*1\b|line-height|letter/i.test(line) && Math.abs(+sz[1] - bodyPx) > 1)
      return `${line} — **the reference page sets running text at ${bodyPx}px**`;
    const r = line.match(/(\d+(?:\.\d+)?)\s*:\s*1/);
    if (!r) return line;
    const claimed = +r[1];
    let pairs = null;
    const on = line.replace(/^- (✓\s*)?/, '').match(/^(?:[^:(]*?:\s*)?(#[0-9a-f]{3,6}|[A-Za-z][\w-]*(?: [A-Za-z][\w-]*)?)\s+(?:text\s+)?on\s+(#[0-9a-f]{3,6}|[A-Za-z][\w-]*(?: [A-Za-z][\w-]*)?)/i)
      || line.match(/\((#[0-9a-f]{3,6})\s+on\s+(#[0-9a-f]{3,6})\)/i);
    if (on) {
      const fg = resolve(on[1]), bg = resolve(on[2]);
      if (fg && bg) pairs = fg.flatMap((f) => bg.map((b) => ({ cr: contrast(over(f.c, b.c), b.c), name: f.name })));
    } else {
      const hx = [...line.matchAll(/#[0-9a-f]{6}\b|#[0-9a-f]{3}\b/gi)];
      if (hx.length === 1) { const f = parseRgb(hx[0][0].toLowerCase()); pairs = [{ cr: contrast(over(f, T.pageBg), T.pageBg) }]; }
    }
    if (!pairs) return line;
    const crs = pairs.map((x) => x.cr);
    // A claim of body-text contrast must hold for every shade it names, not just the closest one.
    const short = claimed >= 4.5 ? pairs.filter((x) => x.cr < 4.5) : [];
    if (crs.some((x) => Math.abs(x - claimed) <= 0.35) && !short.length) return line;
    const shortNames = [...new Set(short.map((x) => x.name).filter(Boolean))];
    const note = Math.max(...crs) < 4.5 ? ' (not for body text)' : shortNames.length ? ` (under 4.5:1, so not for body text: ${shortNames.map(code).join(', ')})` : '';
    // Strike the claim so the designer's note reads as superseded by the measurement.
    return `${line.replace(r[0], `~~${r[0]}~~`)} — **measured ${fmt(crs)}**${note}`;
  }).join('\n');
}
function pushLines(L, sec) {
  const out = [];
  if (sec.lead) out.push(sec.lead);
  for (const l of sec.lines) {
    if (!l.trim()) { out.push(''); continue; }
    const t = l.trim().replace(/^[•└─]+\s*/, '- ').replace(/^(\d+)\.\s+/, '$1. ');
    out.push(/^[-\d]/.test(t) ? t : t);
  }
  // Prose lines in a row become bullets so markdown keeps them apart.
  const md = out.map((l) => (l && !/^(-|\d+\.)\s/.test(l) && !/^#/.test(l) ? '- ' + l : l));
  L.push(...md.map((l) => l.replace(/`/g, "'")).filter((l, i, a) => !(l === '' && a[i - 1] === '')));
}
const titleCase = (s) => s.toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase());

// ── Cover ───────────────────────────────────────────────────────────────────
function buildCover(raw, meta, T) {
  const W = 960, H = 288;
  const ground = T.pageBg;
  const tok = T.colorTokens.filter((t) => t._rgb && t._rgb.a === 1 && !t._ground);
  // Identity colours: saturated, non-status, visible on the ground, distinct.
  const cand = tok.filter((t) => !t._ink && !isStatus(t.name) && !/hover|focus|border|divider|shadow|overlay/.test(t.name) && contrast(t._rgb, ground) >= 1.35)
    .sort((a, b) => sat(b._rgb) - sat(a._rgb));
  const picks = [];
  for (const t of cand) if (picks.every((p) => dist(p._rgb, t._rgb) > 70)) picks.push(t);
  const ink = tok.find((t) => t._ink);
  let blocks = picks.slice(0, 4);
  if (blocks.length < 3 && ink && !blocks.includes(ink)) blocks.push(ink);
  for (const t of cand) if (blocks.length < 3 && !blocks.includes(t)) blocks.push(t);
  if (!blocks.length) blocks = [ink];

  const sp = (T.spacing.map((s) => ({ s, v: px(s.value) })).filter((x) => x.v >= 12 && x.v <= 40).sort((a, b) => Math.abs(a.v - 24) - Math.abs(b.v - 24))[0]) || null;
  const step = sp ? sp.v : 24;
  const stepName = sp ? sp.s.name : null;
  const radii = T.radius.map((r) => ({ r, v: px(r.value) ?? (r.value === '50%' ? 9999 : null) })).filter((x) => x.v != null).sort((a, b) => a.v - b.v);
  const rMid = radii.find((x) => x.v > 0 && x.v < 999) || null;
  const soft = radii.some((x) => x.v >= 16);

  const serif = /serif/i.test(T.families.display || '') && !/sans-serif/i.test(T.families.display || '');
  const mono = /mono|code/i.test(T.families.display || '');
  const tags = meta.tags.join(' ');
  let row;
  if (mono || /\btech\b/.test(tags) && meta.formality >= 5 && !soft) row = 'dots';
  else if (meta.formality <= 4) row = 'stripes';
  else if (serif && meta.formality >= 8) row = 'rules';
  else if (soft) row = 'discs';
  else row = 'tiles';
  const why = {
    dots: 'precise, technical palette on a modular grid → a dot grid at one spacing step',
    stripes: `loud, low-formality (${meta.formality}/10) voice → stripes at a spacing pitch`,
    rules: `formal (${meta.formality}/10) serif editorial voice → a few hairline rules crossing the blocks`,
    discs: 'soft, large-radius shapes → discs and pills cut from the radius scale',
    tiles: 'geometric, modular dashboard layouts → tiles cut by the radius tokens',
  }[row];

  // Name zoning.
  const name = meta.name;
  const heavy = (T.typeRows.find((r) => r.name === 'display' || r.name === 'heading-1')?.fontWeight || 700) >= 600;
  const k = (mono ? 0.62 : serif ? 0.56 : 0.62) + (heavy ? 0.04 : 0);
  const words = name.split(' ');
  const options = [[name]];
  for (let i = 1; i < words.length; i++) options.push([words.slice(0, i).join(' '), words.slice(i).join(' ')]);
  const sizeFor = (lines) => {
    const longest = Math.max(...lines.map((l) => l.length));
    const byWidth = Math.floor(440 / (longest * k));
    const byHeight = Math.floor((H - 40 - 24 - 21 - 16) / (lines.length * 0.95));
    return Math.min(120, byWidth, byHeight);
  };
  let best = options.map((lines) => ({ lines, size: sizeFor(lines) })).sort((a, b) => b.size - a.size || a.lines.length - b.lines.length)[0];
  const band = best.size < 64;
  if (band) {
    const opts = options.map((lines) => ({ lines, size: Math.min(64, Math.floor((W - 80) / (Math.max(...lines.map((l) => l.length)) * k)), Math.floor((H - 120 - 24 - 40 - 21 - 16) / (lines.length * 0.95))) }));
    best = opts.sort((a, b) => b.size - a.size || a.lines.length - b.lines.length)[0];
  }
  const lh = best.lines.length > 1 ? 0.95 : 0.92;

  // Blocks and pattern geometry, all in multiples of `step`.
  const cls = (t) => 'c-' + t.name.replace(/[^A-Za-z0-9_-]/g, '_');
  const shapes = [];
  const pattern = [];
  const x0 = band ? 0 : 480;
  const bw = W - x0;
  const bh = band ? 112 : H;
  const g = Math.max(4, Math.round(step / 3));
  const n = blocks.length;
  const variant = raw.num % 3;
  if (!band && variant === 0) {
    // one tall slab with satellites
    const slabW = step * 8;
    shapes.push({ t: blocks[0], x: x0 + step * 3, y: -step, w: slabW, h: H + step });
    const rest = blocks.slice(1);
    let y = step;
    rest.forEach((t, i) => {
      const w = step * (i % 2 ? 4 : 6), h = step * (i % 2 ? 3 : 4);
      shapes.push({ t, x: x0 + step * 3 + slabW + g, y, w: Math.max(W - (x0 + step * 3 + slabW + g), w), h });
      y += h + g;
    });
  } else if (!band && variant === 1) {
    // strip of unequal bands, bleeding off the top
    const widths = [6, 4, 3, 5, 2].slice(0, n).map((u) => u * step);
    let x = W;
    blocks.forEach((t, i) => { const w = widths[i]; x -= w; shapes.push({ t, x, y: i % 2 ? step * 2 : -step, w: w - g, h: H + step - (i % 2 ? step * 2 : 0) }); x -= 0; });
  } else if (!band) {
    // staggered stack bleeding off the right edge
    blocks.forEach((t, i) => shapes.push({ t, x: x0 + step * (2 + i * 3), y: step * (1 + i * 2.2), w: W - (x0 + step * (2 + i * 3)) + step, h: step * 4 }));
  } else {
    // top band skeleton: a strip of unequal bands
    const units = [5, 3, 4, 2, 6].slice(0, n);
    const sum = units.reduce((a, b) => a + b, 0);
    let x = 0;
    blocks.forEach((t, i) => { const w = Math.round((W * units[i]) / sum); shapes.push({ t, x, y: 0, w: w - g, h: bh }); x += w; });
  }
  // The pattern lives inside the lead block, cut out in the ground colour
  // (rules are the exception: a few hairlines crossing every block).
  const groundTok = T.colorTokens.find((t) => t._ground);
  const lead = shapes[0];
  const bx = Math.max(lead.x, x0), by = Math.max(lead.y, 0), bx2 = Math.min(lead.x + lead.w, W), by2 = Math.min(lead.y + lead.h, band ? bh : H);
  const inset = Math.round(step / 2);
  const zx = bx + inset, zy = by + inset, zw = bx2 - bx - inset * 2, zh = by2 - by - inset * 2;
  const pc = groundTok;
  const pc2 = blocks[1] || groundTok;
  if (row === 'dots') {
    const pitch = step, r = Math.max(2, Math.round(step / 8));
    for (let yy = zy + r; yy <= zy + zh - r && pattern.length < 60; yy += pitch) for (let xx = zx + r; xx <= zx + zw - r && pattern.length < 60; xx += pitch) pattern.push(`<circle class="${cls(pc)}" cx="${xx}" cy="${yy}" r="${r}"/>`);
  } else if (row === 'stripes') {
    const pitch = step, sh = Math.round(pitch / 2);
    for (let yy = zy, i = 0; yy + sh <= zy + zh && i < 10; yy += pitch, i++) pattern.push(`<rect class="${cls(pc)}" x="${zx}" y="${yy}" width="${zw}" height="${sh}"/>`);
  } else if (row === 'rules') {
    const lines = band ? [Math.round(bh / 3), Math.round((2 * bh) / 3)] : [2, 4, 6, 8].map((i) => i * step).filter((y) => y < H - step);
    for (const y of lines.slice(0, 4)) pattern.push(`<line class="${cls(blocks[1] || blocks[0])} rule" x1="${x0}" y1="${y}" x2="${W}" y2="${y}"/>`);
  } else if (row === 'discs') {
    const r = Math.max(4, Math.min(Math.round(step * 0.75), Math.floor((zw - inset) / 4)));
    for (let yy = zy + r, i = 0; yy + r <= zy + zh && i < 12; yy += r * 2 + inset) for (let xx = zx + r; xx + r <= zx + zw && i < 12; xx += r * 2 + inset, i++) pattern.push(`<circle class="${cls(pc)}" cx="${xx}" cy="${yy}" r="${r}"/>`);
  } else {
    const t = Math.round(step * 1.25);
    let i = 0;
    for (let yy = zy; yy + t <= zy + zh && i < 24; yy += t + g) for (let xx = zx; xx + t <= zx + zw && i < 24; xx += t + g, i++) {
      if (i % 5 === 3 && xx + t * 2 + g <= zx + zw) { pattern.push(`<rect class="${cls(pc)} tile" x="${xx}" y="${yy}" width="${t * 2 + g}" height="${t}"/>`); xx += t + g; continue; }
      pattern.push(`<rect class="${cls(pc)} tile" x="${xx}" y="${yy}" width="${t}" height="${t}"/>`);
    }
  }
  const used = uniq([...shapes.map((s) => s.t), pc, pc2, blocks[1]].filter(Boolean));
  const rvar = rMid ? `var(--${rMid.r.name})` : '0px';
  const tileR = row === 'tiles' && rMid ? `rx:var(--${rMid.r.name});` : '';
  const muted = T.colorTokens.find((t) => t._rgb && /muted|secondary|subtle|light|gray|grey|soft/.test(t.name) && /text|ink|fg|muted|gray|grey/.test(t.name) && contrast(over(t._rgb, ground), ground) >= 4.5);
  const borderTok = T.tokens?.borderWidth?.tokens?.[0];
  const css = [
    `body{margin:0;background:var(--page-bg);color:var(--page-text);}`,
    `.cover{position:relative;width:960px;height:${H}px;overflow:hidden;background:var(--page-bg);}`,
    `svg{position:absolute;inset:0;}`,
    ...used.map((t) => `.${cls(t)}{fill:var(--${t.name});stroke:var(--${t.name});stroke-width:0;}`),
    `.blk{rx:${rvar};}`,
    tileR ? `.tile{${tileR}}` : '',
    `.rule{stroke-width:1px;fill:none;}`,
    `.name{position:absolute;left:40px;${band ? `top:${bh + 24}px` : 'bottom:40px'};max-width:${band ? 880 : 440}px;}`,
    `.name h1 span{display:inline-block;white-space:nowrap;}`,
    `.name h1{margin:0;font-family:var(--font-display);font-weight:${T.typeRows.find((r) => r.name === 'display' || r.name === 'heading-1')?.fontWeight || 700};font-size:${best.size}px;line-height:${lh};color:var(--page-text);letter-spacing:0;}`,
    `.name p{margin:16px 0 0;font-family:var(--font-body);font-size:14px;line-height:1.5;color:var(--${muted ? muted.name : 'page-text'});}`,
  ].filter(Boolean);
  const tagline = findTagline(raw, meta);
  const derivation = [
    `blocks: ${shapes.map((s) => `${s.t.name} ${Math.round(s.w / step)}×${Math.round(s.h / step)} steps`).join(', ')}`,
    `arrangement: ${band ? 'top band of unequal strips (name too wide for its zone)' : ['one tall slab with satellites', 'strip of unequal bands bleeding off the top', 'staggered stack bleeding off the right edge'][variant]}`,
    `pattern: ${row} — ${why}`,
    `scales: step ${stepName ? `${stepName} (${step}px)` : `${step}px (no spacing token)`}, gap ${g}px, radius ${rMid ? `${rMid.r.name} (${rMid.r.value})` : 'none'}${borderTok ? `, hairline ${borderTok.name}` : ''}`,
  ];
  const links = raw.fontLinks.map((u) => `<link rel="stylesheet" href="${esc(u)}">`).join('\n');
  return `<!-- @dsCard height=${H} -->
<!doctype html>
<html><head><meta charset="utf-8">
${links}
<style>
${css.join('\n')}
</style></head>
<body><div class="cover">
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" aria-hidden="true">
<!--
${derivation.map((d) => '  ' + d.replace(/--/g, '-')).join('\n')}
-->
${shapes.map((s) => `<rect class="${cls(s.t)} blk" x="${Math.round(s.x)}" y="${Math.round(s.y)}" width="${Math.round(s.w)}" height="${Math.round(s.h)}"/>`).join('\n')}
${pattern.join('\n')}
</svg>
<div class="name"><h1>${best.lines.map((l) => `<span>${esc(l)}</span>`).join('<br>')}</h1><p>${esc(tagline)}</p></div>
</div>
<script>
// Real faces run wider or narrower than the estimate: shrink the name until each line fits its zone.
(function () {
  var h = document.querySelector('.name h1'), max = ${band ? 880 : 440}, min = ${band ? 32 : 48};
  var lines = h.querySelectorAll('span');
  function fit() {
    var s = parseFloat(getComputedStyle(h).fontSize);
    for (var i = 0; i < lines.length; i++) while (s > min && lines[i].getBoundingClientRect().width > max) { s -= 2; h.style.fontSize = s + 'px'; }
  }
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
</script>
</body></html>
`;
}
function findTagline(raw, meta) {
  const fits = (s) => s && s.length >= 6 && s.length <= 62;
  const m = raw.doc.match(/DESIGN PHILOSOPHY:[ \t]*([^\n]*)/);
  const lead = m && m[1].trim().replace(/[.:]$/, '');
  if (fits(lead)) return lead;
  const doc = parseDoc(raw.doc);
  const phil = findSection(doc, /PHILOSOPHY|CONCEPT|VISION|ESSENCE/);
  const first = phil && [phil.lead, ...phil.lines].filter(Boolean).join(' ').replace(/\s+/g, ' ').split(/(?<=[.!?])\s/)[0].replace(/\.$/, '');
  if (fits(first)) return first;
  if (fits(meta.blend)) return meta.blend;
  return `For ${meta.perfectFor.slice(0, 2).join(' and ')}`;
}

// Families some style in this repo loads from Google Fonts: a page that names one
// without loading it gets its load URL added (the reference page shows a fallback).
const GOOGLE = new Set(fs.readdirSync(RAW).flatMap((f) => JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8')).fontLinks)
  .flatMap((u) => [...u.matchAll(/family=([^&:]+)/g)].map((m) => decodeURIComponent(m[1].replace(/\+/g, ' ')))));
// System and commercial faces some pages wrongly request from Google Fonts.
const NOT_GOOGLE = /^(helvetica( neue)?|arial|georgia|garamond|didot|bodoni( mt)?|times( new roman)?|futura|gill sans|segoe ui|sf pro.*|avenir.*|baskerville|optima|palatino.*|trebuchet ms|verdana|courier( new)?|system-ui|-apple-system|blinkmacsystemfont)$/i;
function addMissingFonts(raw, families) {
  const loaded = new Set(raw.fontLinks.flatMap((u) => [...u.matchAll(/family=([^&:]+)/g)].map((m) => decodeURIComponent(m[1].replace(/\+/g, ' ')))));
  const named = new Set(Object.values(families).flatMap((st) => st.split(',').map((f) => f.replace(/["']/g, '').trim())));
  const missing = [...named].filter((f) => GOOGLE.has(f) && !loaded.has(f) && !NOT_GOOGLE.test(f));
  if (!missing.length) return [];
  // Plain family names: a css2 request listing a weight the family lacks fails outright.
  raw.fontLinks.push(`https://fonts.googleapis.com/css2?${missing.map((f) => `family=${f.replace(/ /g, '+')}`).join('&')}&display=swap`);
  return missing;
}

// ── main ────────────────────────────────────────────────────────────────────
const only = process.argv.slice(2).map(Number).filter(Boolean);
const nums = fs.readdirSync(RAW).map((f) => Number(f.replace('.json', ''))).filter((n) => !only.length || only.includes(n)).sort((a, b) => a - b);
const registry = [];
for (const num of nums) {
  const raw = JSON.parse(fs.readFileSync(path.join(RAW, `${num}.json`), 'utf8'));
  const meta = META[num];
  const doc = parseDoc(raw.doc);
  const T = buildTokens(raw, meta, doc);
  T.addedFonts = addMissingFonts(raw, T.families);
  T.tokens = T.tokens;
  const dirName = `${String(num).padStart(3, '0')}-${slug(meta.name)}`;
  const dir = path.join(SYSTEMS, dirName, 'project');
  fs.mkdirSync(path.join(dir, 'components/Cover'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'tokens.json'), JSON.stringify(T.tokens, null, 2) + '\n');
  fs.writeFileSync(path.join(dir, 'README.md'), buildReadme(raw, meta, doc, T));
  fs.writeFileSync(path.join(dir, 'components/Cover/preview.html'), buildCover(raw, meta, { ...T, tokens: T.tokens }));
  const indexPath = path.join(dir, 'design-system.json');
  const prev = fs.existsSync(indexPath) ? JSON.parse(fs.readFileSync(indexPath, 'utf8')) : null;
  const index = {
    v: 3, layout: 'files',
    createdOnFiles: prev?.createdOnFiles || { v: 1, at: NOW },
    title: meta.name,
    namespace: pascal(meta.name),
    libraries: [], sections: {}, groups: [], assetGroups: {}, blobs: {},
    docs: { readme: 'project/README.md', sections: [] },
    lastChange: { by: AUTHOR, at: NOW, via: `GitHub · ${REPO_SLUG}@${SHA}`, note: `Built from ${raw.file}` },
  };
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n');
  registry.push({ num, name: meta.name, dir: `systems/${dirName}`, source: raw.file, tags: meta.tags, colors: T.tokens.color.tokens.length, styles: T.typeRows.length });
  process.stdout.write(`${num} `);
}
// registry.json: one row per system; artifact URLs survive rebuilds.
const REG = path.join(ROOT, 'registry.json');
const prevReg = fs.existsSync(REG) ? JSON.parse(fs.readFileSync(REG, 'utf8')) : { systems: [] };
const urlOf = Object.fromEntries(prevReg.systems.map((r) => [r.num, r.artifact]));
const merged = Object.fromEntries(prevReg.systems.map((r) => [r.num, r]));
for (const r of registry) merged[r.num] = { ...r, artifact: urlOf[r.num] || null, status: merged[r.num]?.status || 'pending' };
fs.writeFileSync(REG, JSON.stringify({
  type: 'https://claude.ai/code/artifact/23336be2-ea67-47fa-abc1-ead8c645a326',
  note: prevReg.note || 'One Claude Design System artifact per Lobbi style. status: published | created-empty | pending.',
  systems: Object.values(merged).sort((a, b) => a.num - b.num),
}, null, 2) + '\n');
console.log(`\nbuilt ${registry.length}`);
