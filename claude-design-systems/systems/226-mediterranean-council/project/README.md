This design system captures the sun-drenched warmth and timeless elegance of Mediterranean culture, blending the terracotta warmth of Southern European architecture with the cool sophistication of coastal waters and the organic, earthy authenticity of ancient olive groves. Every design decision reflects the Mediterranean ethos of gracious living, cultural richness, and natural beauty.

**Blend:** Southern European Warmth 55% + Coastal Elegance 30% + Olive Grove Organic 15%  
**Temperature:** 9/10 (warm) · **Formality:** 6/10 · **Tags:** hospitality, association  
**Perfect for:** Mediterranean Tourism, Southern European Brands, Coastal Hospitality

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Mediterranean Council”, “Council Impact”, “Featured Initiatives”, “Member Directory”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Clear Form”, “Join Council”, “View Events”.
- Navigation uses single nouns: “Home”, “Members”, “Initiatives”, “Resources”, “Contact”.
- The reference page uses emoji as inline glyphs (📅 👥 🏆 🎨 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `aegean-blue`, `aegean-blue-light`, `deep-navy`, `terracotta`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Aegean Blue (#1e40af): Trust, authority, depth, Mediterranean waters
- Terracotta (#c2410c): Warmth, tradition, earthiness, cultural heritage
- Olive Green (#65a30d): Growth, sustainability, agricultural roots, vitality
- Limestone Cream (#fef3e7): Purity, openness, sunlight, coastal architecture
- Navy (#1e3a8a): Stability, professionalism, deep water authority

## Typography

- `display` — Lora, serif
- `body` — "Source Sans 3", sans-serif

Faces are hosted on Google Fonts (Lora, Source Sans 3); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Source+Sans+3:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Lora (classical serif elegance)
- Rationale: Lora's old-style letterforms evoke Mediterranean literary
- tradition and classical inscriptions. The elegant serifs suggest the
- refinement of Italian Renaissance typography while maintaining excellent
- legibility across all sizes. Weight variations (400/600/700) provide
- hierarchical clarity without sacrificing warmth.

- Body: Source Sans 3 (humanist sans-serif clarity)
- Rationale: Source Sans 3 offers exceptional readability with subtle
- humanist warmth that complements Mediterranean aesthetics. Its neutral
- character allows the color palette to shine while ensuring accessibility.
- The open letterforms and generous x-height work perfectly for extended
- reading, essential for council communications and documentation.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 10px, `radius-lg` 14px, `radius-xl` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Mosaic Pattern Headers: Geometric patterns inspired by Mediterranean tile work
- Terra Cotta Texture Cards: Subtle texture overlay suggesting clay pottery
- Coastal Gradient Backgrounds: Blue-to-azure gradients evoking water
- Olive Branch Accents: Decorative elements referencing agricultural heritage
- Sun-Bleached Spacing: Generous whitespace like sun-drenched courtyards

- CONTRAST RATIOS (WCAG 2.1 AA+ Compliance):
- Primary text on cream: 12.8:1 (AAA)
- White text on Aegean blue: 7.2:1 (AA+)
- Text on terracotta: ~~6.5:1~~ (AA) — **measured 1.1–1.5:1** (not for body text)
- Olive green text on white: ~~5.8:1~~ (AA) — **measured 3.0–3.1:1** (not for body text)
- Navy text on limestone: 14.1:1 (AAA)

## States and motion

- Subtle lift on card hover suggesting Mediterranean breeze
- Color transitions from terracotta to blue suggesting water flow
- Smooth 250ms transitions for refined, leisurely interactions
- Focus states with Mediterranean blue outline
- Button hover states with gentle elevation suggesting warmth rising

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 400ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `terracotta-light` 3.4:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `olive-green` 2.9:1, `white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- High contrast pairings throughout all components
- Clear focus indicators with blue outline (3px, high visibility)
- Generous touch targets (minimum 44x44px for all interactive elements)
- Semantic HTML5 structure with proper ARIA landmarks
- ARIA labels for all navigation and interactive components
- Keyboard-friendly interactions with visible focus states
- Skip link for screen reader accessibility
- Color is never the sole indicator of state or meaning

## Component inventory

The reference page composes these patterns from the tokens above:

- Mosaic Pattern Headers: Geometric patterns inspired by Mediterranean tile work
- Terra Cotta Texture Cards: Subtle texture overlay suggesting clay pottery
- Coastal Gradient Backgrounds: Blue-to-azure gradients evoking water
- Olive Branch Accents: Decorative elements referencing agricultural heritage
- Sun-Bleached Spacing: Generous whitespace like sun-drenched courtyards

- CONTRAST RATIOS (WCAG 2.1 AA+ Compliance):
- Primary text on cream: 12.8:1 (AAA)
- White text on Aegean blue: 7.2:1 (AA+)
- Text on terracotta: ~~6.5:1~~ (AA) — **measured 1.1–1.5:1** (not for body text)
- Olive green text on white: ~~5.8:1~~ (AA) — **measured 3.0–3.1:1** (not for body text)
- Navy text on limestone: 14.1:1 (AAA)

## Further guidance

### Cultural Context

- Aegean Blue: The deep, inviting waters of the Mediterranean Sea
- Terracotta: Traditional clay pottery, roof tiles, and sun-baked earth
- Olive Green: Ancient groves that have sustained civilizations for millennia
- Limestone Cream: Sun-bleached stone of coastal architecture
- Azure Accents: Sky reflections on whitewashed walls at midday

### Temperature

- (Very Warm)
- Dominant terracotta and warm earth tones
- Sun-drenched color palette throughout
- Warm gradient overlays and backgrounds
- Olive and sand tones adding warmth
- Overall: Inviting, welcoming, Mediterranean sunshine

### Formality

- (Moderately Formal)
- Professional council authority with accessible warmth
- Classical typography with approachable spacing
- Structured layouts with organic flourishes
- Refined but not stuffy or overly corporate
- Balance: Credible institution with human warmth

### Responsive Behavior

- Mobile (320px-767px): Single column, stacked cards, full-width components
- Tablet (768px-1023px): Two-column grids, adaptive typography scaling
- Desktop (1024px+): Multi-column layouts, optimal spacing, hover states
- Fluid typography using clamp() for smooth scaling
- Touch-friendly targets on mobile, hover enhancements on desktop

### Use Cases

- Cultural councils and heritage organizations
- Mediterranean trade associations and chambers
- Regional tourism and hospitality boards
- Agricultural cooperatives and olive producer guilds
- Coastal development and preservation societies
- International Mediterranean collaboration forums

### Tags

- cultural, warm, coastal, heritage, professional, welcoming

## Not synced

Built from `style-226-mediterranean.html`. No component bundle: the reference page's markup is not packaged as live components.
