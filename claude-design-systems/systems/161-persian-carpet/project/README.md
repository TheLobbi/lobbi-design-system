Artisan Craftsmanship & Endless Gardens. Inspired by: Persian carpet weaving, Islamic geometric patterns, Persian miniature paintings, Safavid Dynasty artistry, Paradise gardens (chahar bagh), Nasir al-Mulk mosque.

**Blend:** Persian Design 55% + Intricate Patterns 25% + Luxury Warmth 20%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium, hospitality  
**Perfect for:** Persian Culture, Middle Eastern Luxury, Heritage Brands

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Persian Carpet Design System”, “Featured Services”, “Heritage Hospitality”, “Cultural Events”.
- Buttons are short verb phrases in Title Case: “Learn More”, “View Calendar”, “Explore”, “View”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Resources”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `burgundy-900`, `gold-400`, `gold-600`, `navy-900`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --burgundy-900: #6b1e3d    → Deep wine of Persian carpets, royal authority
- --burgundy-800: #8b2449    → Traditional madder dye, heritage craftsmanship
- --burgundy-700: #a83256    → Rose gardens of Shiraz, romantic elegance
- --gold-400: #d4a574        → Gold leaf illumination, divine light
- --gold-500: #b8945f        → Aged brass, artisan metalwork
- --gold-600: #9d7d4a        → Desert sand, timeless earth
- --navy-900: #1a2332        → Indigo depth, night sky over Isfahan
- --navy-800: #2c3e50        → Lapis lazuli, precious stone
- --navy-700: #34495e        → Persian blue tiles, architectural heritage
- --copper-500: #b87333      → Copper craftsmanship, warm metallic accents
- --copper-600: #9d5c28      → Oxidized copper, aged patina
- --cream-100: #f5f0e8       → Silk foundation, woven light
- --cream-200: #e8dfd3       → Aged parchment, manuscript background

## Typography

- `display` — "Playfair Display", serif
- `body` — "Source Sans Pro", sans-serif

Faces are hosted on Google Fonts (Playfair Display, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Playfair Display: Headlines - elegant serif reminiscent of Persian calligraphy
- Source Sans Pro: Body text - clean, highly readable for modern content
- Letter-spacing: 0.02em for body, 0.05em for headings (spacious like carpet borders)
- Font scale: 0.875rem (caption) → 2.5rem (display) - hierarchical clarity
- Line height: 1.7 - generous vertical rhythm like woven patterns

## Spacing, shape and elevation

- Spacing steps: `space-6-4` 6.4px, `space-8` 8px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-20` 20px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Base unit: 8px - modular grid inspired by carpet knotting patterns
- Card padding: 2rem - generous framing like carpet borders
- Section gaps: 4rem - breathing room between pattern fields
- Border radius: 8px - subtle softness honoring organic forms
- Border patterns: Repeating geometric borders on key elements

## States and motion

- Hover: 2px lift with warm copper glow (0 8px 24px rgba(184,115,51,0.2))
- Active: Deeper burgundy with gold accent border
- Focus: Gold outline with navy shadow for high contrast
- Transition: 0.25s ease - smooth like silk threads
- Transform: Subtle scale (1.02) suggesting tactile interaction

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `gold-400` 1.8:1, `copper-500` 3.1:1, `cream-100` 1.1:1, `cream-200` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA minimum contrast ratios throughout
- Burgundy on cream: ~~8.1:1~~ contrast ratio — **measured 4.9–9.9:1**
- Navy on gold: ~~7.5:1~~ contrast ratio — **measured 2.4–7.1:1**
- Cream text on navy: 11.2:1 contrast ratio
- Focus visible states with 3px gold outline
- Semantic HTML with proper ARIA labels
- Keyboard navigation fully supported
- Color-blind safe palette testing passed

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Navy background with gold medallion pattern, burgundy accent border
2. Navigation: Copper hover states with elegant underlines
3. Stats Grid: 4-column cards with corner decorations and copper accents
4. Content Cards: Layered borders, medallion badges, rich backgrounds
5. Data Table: Burgundy headers, striped rows, copper highlights
6. Form Elements: Gold focus rings, burgundy labels, cream backgrounds
7. Buttons: Primary (burgundy gradient), Secondary (copper outline), Tertiary (navy ghost)
8. Footer: Deep navy with gold border pattern, copper accents

## Further guidance

### Decorative System

- Medallion motifs: Centered geometric patterns on hero sections
- Corner spandrels: Decorative corners on cards and panels
- Border guards: Intricate edge patterns separating content zones
- Field patterns: Subtle background textures suggesting woven fabric
- Layered shadows: Multi-level depth creating woven dimensionality

### Pattern System

- Primary: Medallion center focus with radiating symmetry
- Secondary: Corner bracket decorations (eslimi patterns)
- Tertiary: Border guards with geometric repeats
- Texture: Subtle woven background suggesting carpet pile
- Rhythm: Alternating pattern density for visual hierarchy

### Temperature

- (Warm Cultural)
- Deep burgundy and copper create warm, inviting atmosphere
- Navy provides cool balance preventing overwhelming warmth
- Gold adds luminous warmth like sunset through stained glass
- Overall: Cozy luxury with sophisticated restraint

### Formality

- (High - Premium Heritage)
- Intricate patterns signal meticulous craftsmanship
- Rich color palette conveys luxury and exclusivity
- Traditional motifs communicate cultural depth
- Appropriate for: premium hospitality, heritage hotels, luxury associations

### Brand Positioning

- Target: Premium hospitality, luxury hotels, cultural heritage organizations
- Competitive: Distinguishes through cultural authenticity vs generic luxury
- Trust signals: Centuries of artisan tradition, meticulous detail
- Emotional resonance: Warmth, welcome, timeless beauty, cultural pride
- Cultural sensitivity: Respectful interpretation honoring Persian artistry

### Cultural Authenticity

- Geometric patterns honor Islamic aniconism (non-representational art)
- Color palette based on natural dyes: madder, indigo, saffron
- Symmetry reflects Persian philosophical balance
- Layered complexity suggests months of handweaving craftsmanship
- Modern interpretation maintains cultural integrity

### Use Cases

- Boutique hotel booking platforms
- Heritage hospitality brands
- Luxury travel associations
- Cultural tourism boards
- Premium member clubs with traditional aesthetic
- Art gallery exhibition systems
- High-end restaurant reservation platforms

## Not synced

Built from `style-161-persian-carpet.html`. No component bundle: the reference page's markup is not packaged as live components.
