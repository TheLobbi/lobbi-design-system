Premium Winery Heritage & Terroir Excellence. Inspired by: Opus One, Château Margaux, Domaine de la Romanée-Conti.

**Blend:** Wine Estate 80% + Vineyard Terroir 20%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium, hospitality  
**Perfect for:** Wineries, Vineyards, Wine Estates

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Château Heritage Estate”, “Estate Management Dashboard”, “Featured Tasting Notes”, “Premium Cellar Inventory”.
- Navigation uses single nouns: “Cellar”, “Vintages”, “Tastings”, “Harvest”, “Awards”.
- The reference page uses emoji as inline glyphs (🍷 🏆 ⭐ 🌱 📝 🍾); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `wine-burgundy`, `cream`, `vineyard-green`, `gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ├─ Wine Burgundy (#722f37): Primary brand, prestige, aged complexity
- │  Usage: Headers, primary buttons, estate branding, vintage markers
- │  Evokes: Fine wine, heritage, exclusivity, deep terroir roots
- │
- ├─ Cream (#faf6eb): Base canvas, parchment elegance
- │  Usage: Backgrounds, card surfaces, content areas
- │  Evokes: Wine labels, estate documents, natural linen, aged paper
- │
- ├─ Vineyard Green (#4d7c0f): Terroir connection, vitality
- │  Usage: Accents, success states, growth indicators, harvest data
- │  Evokes: Vine leaves, estate grounds, organic vitality
- │
- Gold (#b8860b): Premium touches, awards, excellence markers
- Usage: Icons, borders, highlights, award badges, vintage markers
- Evokes: Gold medals, premium labels, sunset over vineyards

## Typography

- `display` — "Cormorant Garamond", Georgia, serif
- `body` — Lato, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ├─ Display: Cormorant Garamond (400-700) - Wine label elegance
- │  Purpose: Headers, estate name, vintage years, section titles
- │  Characteristics: Classic serifs, sophisticated curves, timeless
- │
- Body: Lato (300-400) - Clean readability for data
- Purpose: Body text, descriptions, technical specifications
- Characteristics: Professional, clear, complements Cormorant

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 40px, `space-2xl` 48px, `space-3xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

- Estate-Scale Generosity
- ├─ Macro rhythm: 48-64px vertical sections (rolling hills)
- ├─ Card spacing: 32-40px gaps (vineyard row spacing)
- ├─ Content padding: 40-48px (estate grounds breathing room)
- Micro details: 16-24px element spacing (careful craftsmanship)

## States and motion

- Warm Earthy (6/10)
- ├─ Subtle hover transitions (300ms) - aged wine patience
- ├─ Gentle elevation changes (wine cellar depth)
- ├─ Warm color shifts (candlelit tasting room)
- Organic movement (vineyard breeze)

Timing values: `--transition-quick` 150ms ease, `--transition-medium` 300ms ease, `--transition-slow` 500ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ├─ WCAG 2.1 AA contrast ratios maintained
- ├─ Burgundy (#722f37) on cream (#faf6eb): 8.2:1 (AAA)
- ├─ Green (#4d7c0f) on cream: 6.1:1 (AA)
- ├─ Gold (#b8860b) used decoratively, not for critical info
- ├─ Semantic HTML5 structure (estate organization)
- Keyboard navigation with visible focus states

## Component inventory

The reference page composes these patterns from the tokens above:

1. VINTAGE CARDS:
- ├─ Elevated surfaces with subtle shadows (aged wine depth)
- ├─ Gold accent borders (premium distinction)
- ├─ Generous padding (estate luxury)
- Hover states reveal depth (wine complexity)

2. TASTING NOTES PRESENTATION:
- ├─ Structured sections (nose, palate, finish)
- ├─ Descriptive typography with elegant spacing
- ├─ Wine burgundy headings with gold underlines
- Cream backgrounds with warm undertones

3. CELLAR INVENTORY DISPLAY:
- ├─ Organized grid system (wine rack precision)
- ├─ Vintage year prominence (heritage focus)
- ├─ Stock levels with vineyard green indicators
- Hover reveals detailed provenance

4. HARVEST CALENDAR:
- ├─ Timeline visualization (terroir cycles)
- ├─ Seasonal color variations (natural rhythms)
- ├─ Activity markers with gold highlights
- Estate-scale date ranges

5. DATA TABLES (Wine Collection):
- ├─ Refined borders with subtle cream tones
- ├─ Alternating row backgrounds (gentle distinction)
- ├─ Hover states with wine burgundy accents
- Generous cell padding (premium presentation)

## Further guidance

### Formality Scale

- High Exclusive (8/10)
- ├─ Refined typography (heritage documentation)
- ├─ Generous whitespace (estate luxury)
- ├─ Sophisticated color palette (fine wine complexity)
- ├─ Premium materials (quality craftsmanship)
- Curated content presentation (sommelier precision)

### Performance Optimizations

- ├─ Single embedded stylesheet (reduced requests)
- ├─ System font fallbacks for web fonts
- ├─ Efficient CSS Grid and Flexbox layouts
- ├─ Minimal DOM depth (clean structure)
- GPU-accelerated transforms for animations

### Brand Essence Captured

- ├─ Heritage: Classic typography, timeless layouts
- ├─ Terroir: Organic color palette, natural textures
- ├─ Craftsmanship: Attention to detail, refined spacing
- ├─ Exclusivity: Premium materials, generous space
- Excellence: Award markers, vintage prominence

### Target Experience

- "Walking into a private wine cellar of a grand estate, where every
- bottle tells a story, every vintage reflects terroir, and every
- detail demonstrates generations of winemaking excellence."

### Emotional Resonance

- Pride → Exclusivity → Heritage → Sophistication → Trust

## Not synced

Built from `style-68-wine-estate.html`. No component bundle: the reference page's markup is not packaged as live components.
