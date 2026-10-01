Sustainable Aspiration & Natural Refinement. Inspired by: Regenerative luxury, biophilic design, artisan sustainability, organic premium brands, eco-conscious hospitality, modern stewardship 2-WAY BLEND COMPOSITION:.

**Blend:** Sustainable Design 55% + Quiet Luxury 45%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium, creative  
**Perfect for:** Sustainable Luxury, Eco Premium Brands, Green Design

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “2025 Environmental Impact Dashboard”, “Featured Initiatives Our sustainability journey in action”, “Heritage Linen Series”, “Regenerative Wool Initiative”.
- Buttons are short verb phrases in Title Case: “Explore Collection”, “Learn More”, “Start Repair Request”, “View Impact Report”.
- Navigation uses single nouns: “Impact”, “Collections”, “Sourcing”, “Certifications”, “About”.
- The reference page uses emoji as inline glyphs (🌱 ♻ ⚡ 🌍 🌿 🍃); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `forest-900`, `forest-700`, `forest-100`, `gold-600`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --cream-100: #f4f2ed     → Organic cotton, natural wool, unbleached luxury
- --cream-200: #e8e4db     → Stone surfaces, sustainable architecture
- --cream-300: #d4cec1     → Subtle boundaries, natural separation

- --forest-900: #1a3d32    → Ancient growth, deep sustainability roots
- --forest-700: #3d6b5c    → Primary action - living systems, vital growth
- --forest-500: #5a8a7a    → Hover states - emerging vitality
- --forest-300: #a4c3b8    → Soft accents - gentle environmental presence
- --forest-100: #e5f0ed    → Success backgrounds - renewal & restoration

- --gold-600: #c9a96e      → Artisan craft, sustainable harvest
- --gold-500: #d4b684      → Premium organic materials
- --gold-300: #e5d1a8      → Warmth accents, natural light

- --charcoal-900: #2a2e2c  → Primary text - earthy authority
- --charcoal-700: #4a4e4c  → Secondary text - grounded presence
- --charcoal-500: #6a6e6c  → Tertiary text - subtle information

- --sage-100: #f0f4f2      → Alternate backgrounds - fresh air quality
- --terracotta-600: #c17a5c → Warning/caution - mindful attention
- --ocean-600: #4a7c9d     → Information - water stewardship

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — "Source Sans Pro", system-ui, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-6` 6px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-18` 18px, `space-28` 28px. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px.

- ✓ Header: Cream background, forest green brand, refined navigation
- ✓ Stats Grid: Sustainability metrics (carbon, renewables, circularity)
- ✓ Content Cards: Product/initiative showcases with organic imagery
- ✓ Data Table: Material sourcing, impact data, filterable columns
- ✓ Form Elements: Natural textures, accessible inputs
- ✓ Buttons: Forest primary, outlined secondary, text tertiary
- ✓ Badges: Eco-certifications (B-Corp, Carbon Neutral, Fair Trade)
- ✓ Footer: Minimal, earth-toned, essential links only

## States and motion

- Focus: 2px forest-700 outline with 3px offset
- Hover: Subtle color shift + gentle elevation
- Active: Slightly deeper color, minimal shadow
- Disabled: 50% opacity with cursor indication

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `cream-200` 1.1:1, `gold-600` 2.0:1, `gold-500` 1.7:1, `gold-300` 1.3:1, `ocean-600` 4.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Component inventory

The reference page composes these patterns from the tokens above:

- ✓ Header: Cream background, forest green brand, refined navigation
- ✓ Stats Grid: Sustainability metrics (carbon, renewables, circularity)
- ✓ Content Cards: Product/initiative showcases with organic imagery
- ✓ Data Table: Material sourcing, impact data, filterable columns
- ✓ Form Elements: Natural textures, accessible inputs
- ✓ Buttons: Forest primary, outlined secondary, text tertiary
- ✓ Badges: Eco-certifications (B-Corp, Carbon Neutral, Fair Trade)
- ✓ Footer: Minimal, earth-toned, essential links only

## Further guidance

### Primary (55%)

- Sustainable/Environmental Design
- Natural materials aesthetic (organic textures, earth tones)
- Environmental transparency (carbon metrics, lifecycle data)
- Biophilic elements (green as living, breathing identity)
- Circular economy principles (renewal, regeneration, longevity)

### Secondary (45%)

- Quiet Luxury
- Understated sophistication (refined typography, generous spacing)
- Premium material quality (tactile richness without ostentation)
- Timeless elegance (enduring design, not trends)
- Confident restraint (minimal ornamentation, maximum impact)

### Primary

- Cormorant Garamond
- Refined serif conveying heritage and timelessness
- Used for headings, emphasis, premium moments
- Evokes artisan craftsmanship and careful consideration

### Secondary

- Source Sans Pro
- Clean, highly legible humanist sans-serif
- Modern environmental transparency meets readability
- Weights: 300 (light data), 400 (body), 600 (labels), 700 (emphasis)

### Hierarchy

- H1: 2.75rem Cormorant (sophisticated presence)
- H2: 1.75rem Cormorant (section authority)
- H3: 1.25rem Cormorant (card titles)
- Body: 0.9375rem Source Sans Pro (optimal readability)
- Labels: 0.75rem Source Sans Pro (refined utility)
- Letter-spacing: Generous (0.02em+) for luxury breathing room

### Generous Whitespace Philosophy

- Reflects both luxury confidence and environmental "breathing room"
- 3rem+ padding on major sections (unhurried premium experience)
- 2rem gaps in grids (content given space to resonate)
- Natural rhythm: tight clusters, generous separations

### Border Strategy

- 1px hairlines in cream-300 (subtle, natural separation)
- Organic shapes avoided (luxury restraint > literal naturalism)
- Clean edges suggesting precision craftsmanship

### Elevation

- Minimal shadows (2-4px, 0.04-0.08 opacity)
- Hover states with subtle lift (luxury responds to attention)
- No harsh shadows (maintains natural softness)

## Not synced

Built from `style-138-eco-luxury.html`. No component bundle: the reference page's markup is not packaged as live components.
