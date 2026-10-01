TEMPERATURE & FORMALITY RATINGS.

**Blend:** Central Asian Patterns 55% + Trade Route Heritage 30% + Modern Commerce 15%  
**Temperature:** 8/10 (warm) · **Formality:** 7/10 · **Tags:** premium, association  
**Perfect for:** Trade Organizations, Central Asian Culture, Heritage Commerce

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Ancient Routes, Modern Commerce”, “Key Performance Indicators”, “Active Trade Initiatives”, “Partnership Application”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Save Draft”, “Preview”, “Reset”.
- Navigation uses single nouns: “Dashboard”, “Trade Routes”, “Partners”, “Culture”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `spice-gold`, `silk-red`, `desert-sand`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`badge-warning-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Spice Gold (#d97706): Wealth, prosperity, trade, saffron
- Psychology: Warmth, luxury, optimism, abundance
- Usage: Primary actions, emphasis, success states
- Cultural: Gold as universal trade currency, desert sunlight

- Silk Red (#b91c1c): Passion, silk textile heritage, energy
- Psychology: Power, importance, celebration, vitality
- Usage: Alerts, important notices, premium features
- Cultural: Ceremonial fabrics, royal garments, festive occasions

- Caravanserai Blue (#0369a1): Stability, trust, water in desert
- Psychology: Reliability, depth, professional authority
- Usage: Headers, containers, structural elements
- Cultural: Precious water, oasis sanctuaries, lapis lazuli

- Desert Sand (#fef3c7): Warmth, foundation, ancient landscapes
- Psychology: Comfort, timelessness, natural elegance
- Usage: Backgrounds, soft containers, breathing room
- Cultural: Silk Road deserts, ancient trade routes

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Manrope); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Manrope:wght@300;400;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Cormorant Garamond
- Purpose: Heritage, classical elegance, historical continuity
- Psychology: Sophisticated, cultured, timeless
- Usage: Headings, titles, ceremonial text, quotes
- Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- Rationale: Garamond's Renaissance origins echo Silk Road cultural exchange
- Character: High-contrast serifs suggest calligraphic craftsmanship

## Spacing, shape and elevation

- Spacing steps: `space-6-4` 6.4px, `space-8` 8px, `space-14` 14px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-8` 8px, `radius-16` 16px.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Hover: Warm glow (box-shadow with gold/red)
- Active: Pressed state with darker shade
- Focus: 3px border in spice gold
- Disabled: Desaturated with 50% opacity

- ACCESSIBILITY NOTES (WCAG 2.1 AA+ COMPLIANCE)

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `spice-gold` 2.9:1, `desert-sand` 1.0:1, `cream` 1.0:1, `footer-section-text` 1.3:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Respects prefers-reduced-motion
- Pattern animations optional/stoppable
- No flashing elements (seizure prevention)
- Smooth transitions: 0.3-0.4s (comfortable pace)

## Further guidance

### Organization

- Silk Road Collective

### Theme

- Central Asian Heritage meets Modern Commerce
- BLEND COMPOSITION (ULTRATHINK)

1. CENTRAL ASIAN PATTERNS (55%)
- Geometric Islamic art: tessellations, arabesques, star patterns
- Architectural motifs from Samarkand, Bukhara, Isfahan
- Ceramic tile patterns (zellige, girih)
- Color harmonies from traditional textiles and architecture
- Sacred geometry: octagonal stars, interlocking polygons

2. TRADE ROUTE HERITAGE (30%)
- Caravanserai aesthetics: courtyard layouts, archways
- Compass rose navigation elements
- Spice route color palette: saffron, cinnamon, cardamom
- Textile patterns from silk brocades
- Bazaar marketplace energy and layered information density

3. MODERN COMMERCE (15%)
- Clean data visualization for contemporary business
- Digital-first interaction patterns
- Professional typography for international trade
- Streamlined forms and efficient workflows
- Tech-enabled tradition: QR codes as geometric patterns

- COLOR PSYCHOLOGY & PALETTE

### Supporting Colors

- Terracotta (#c2410c): Earthenware, architecture, grounding
- Jade Green (#047857): Precious stones, prosperity, balance
- Deep Indigo (#1e3a8a): Night sky over desert, wisdom
- Cream (#fffbeb): Parchment, ancient manuscripts, light

### Pattern Colors

- Copper (#92400e): Metalwork, craftsmanship
- Ruby (#881337): Gemstones, luxury accents
- Turquoise (#0891b2): Precious stone, spiritual protection

### Gradient Compositions

- Spice Market: Linear from #d97706 to #c2410c (warm richness)
- Silk Shimmer: Linear from #b91c1c to #881337 (lustrous depth)
- Desert Horizon: Linear from #fef3c7 to #f59e0b (golden glow)

### Secondary Font

- Manrope
- Purpose: Modern clarity, contemporary business communication
- Psychology: Professional, approachable, efficient
- Usage: Body text, data tables, forms, navigation
- Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)
- Rationale: Geometric sans-serif bridges tradition and innovation
- Character: Open apertures ensure legibility in data-dense layouts

### Type Scale

- Display: 3.5rem (56px) - Hero sections, major announcements
- H1: 2.5rem (40px) - Page titles, primary headings
- H2: 2rem (32px) - Section headers
- H3: 1.5rem (24px) - Subsections
- Body Large: 1.125rem (18px) - Introductory paragraphs
- Body: 1rem (16px) - Standard content
- Small: 0.875rem (14px) - Supporting text, captions
- Tiny: 0.75rem (12px) - Labels, metadata

### Line Height

- Display: 1.1 - Tight, impactful
- Headings: 1.3 - Balanced elegance
- Body: 1.7 - Generous for multilingual readability
- Tables: 1.5 - Compact data presentation

## Not synced

Built from `style-224-silk-road.html`. No component bundle: the reference page's markup is not packaged as live components.
