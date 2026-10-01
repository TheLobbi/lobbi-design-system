#!/usr/bin/env node
// Checks every systems/*/project against the Design System type's grammar:
// anything the page would silently drop is reported here instead.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NAME = /^[A-Za-z0-9][A-Za-z0-9_.-]{0,63}$/;
const HEX = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/;
const FN = /^(rgba?|hsla?|oklch|oklab|lab|lch|color)\([\d.,%\s/a-z-]+\)$/i;
const LEN = /^(-?[\d.]+(px|rem|em|%)|0|-?[\d.]+)$/;
const errors = [];
const stats = { systems: 0, colors: 0, styles: 0, themes2: 0, thin: [] };

for (const d of fs.readdirSync(path.join(ROOT, 'systems')).sort()) {
  const proj = path.join(ROOT, 'systems', d, 'project');
  const err = (m) => errors.push(`${d}: ${m}`);
  const t = JSON.parse(fs.readFileSync(path.join(proj, 'tokens.json'), 'utf8'));
  const idx = JSON.parse(fs.readFileSync(path.join(proj, 'design-system.json'), 'utf8'));
  if (idx.v !== 3 || idx.layout !== 'files' || !idx.createdOnFiles || !idx.title) err('index shape');
  const readme = fs.readFileSync(path.join(proj, 'README.md'), 'utf8');
  if (readme.length > 200_000) err('README > 200KB');
  const cover = fs.readFileSync(path.join(proj, 'components/Cover/preview.html'), 'utf8');
  if (!/^<!-- @dsCard height=(2[4-9]\d|3[0-5]\d|360) -->/.test(cover)) err('cover marker');
  if (/<(iframe|frame|object|embed|portal|noscript)\b/i.test(cover)) err('cover forbidden tag');

  const names = new Set();
  const all = [];
  const themes = t.color.themes.map((x) => x.id);
  if (themes.length > 1) stats.themes2++;
  for (const tok of t.color.tokens) all.push(['color', tok]);
  for (const [fam, v] of Object.entries(t)) if (v && Array.isArray(v.tokens) && fam !== 'color') for (const tok of v.tokens) all.push([fam, tok]);
  for (const [fam, tok] of all) {
    if (!NAME.test(tok.name)) err(`bad name ${tok.name}`);
    if (names.has(tok.name)) err(`duplicate ${tok.name}`);
    names.add(tok.name);
    if (!tok.usage) err(`no usage ${tok.name}`);
  }
  const colorNames = new Set(t.color.tokens.map((x) => x.name));
  for (const tok of t.color.tokens) {
    const vals = typeof tok.value === 'string' ? [tok.value] : Object.values(tok.value);
    for (const v of vals) {
      if (v == null) { err(`null colour ${tok.name}`); continue; }
      const a = v.match(/^\{(.+)\}$/);
      if (a) { if (!colorNames.has(a[1]) || a[1] === tok.name) err(`bad alias ${tok.name} -> ${v}`); continue; }
      if (!HEX.test(v) && !FN.test(v)) err(`bad colour ${tok.name}: ${v}`);
    }
  }
  for (const fam of ['spacing', 'radius', 'borderWidth', 'layout']) for (const tok of t[fam]?.tokens || []) if (!LEN.test(String(tok.value))) err(`bad length ${fam}.${tok.name}: ${tok.value}`);
  for (const tok of t.shadow?.tokens || []) if (/var\(|url\(/.test(tok.value) || tok.value.length > 400) err(`bad shadow ${tok.name}`);
  for (const [k, s] of Object.entries(t.type.families)) if (!NAME.test(k) || /[;{}<>\\()]/.test(s) || s.length > 200) err(`bad family ${k}: ${s}`);
  let styles = 0;
  for (const g of t.type.groups) {
    if (!t.type.families[g.family]) err(`group ${g.name} family ${g.family} missing`);
    for (const st of g.styles) {
      styles++;
      if (!LEN.test(st.fontSize)) err(`bad fontSize ${st.name}: ${st.fontSize}`);
      if (st.family && !t.type.families[st.family]) err(`style family missing ${st.name}`);
    }
  }
  if (t.color.tokens.length > 600 || styles > 80 || t.type.groups.length > 12) err('caps');
  for (const [fam, v] of Object.entries(t)) if (v?.tokens && fam !== 'color' && v.tokens.length > 60) err(`>60 ${fam}`);
  stats.systems++; stats.colors += t.color.tokens.length; stats.styles += styles;
  if (t.color.tokens.length < 5 || styles < 3) stats.thin.push(`${d} (${t.color.tokens.length} colours, ${styles} styles)`);
}
console.log(JSON.stringify({ ...stats, thin: stats.thin.length, thinList: stats.thin.slice(0, 20) }, null, 1));
console.log(errors.length ? `${errors.length} ERRORS\n` + errors.slice(0, 80).join('\n') : 'no grammar errors');
process.exit(errors.length ? 1 : 0);
