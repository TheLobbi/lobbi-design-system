The eternal sophistication of pharaonic design translated into digital luxury. This style captures the mathematical precision of Egyptian sacred geometry, the opulence of royal tombs, and the timeless appeal of hieroglyphic communication. Like the golden ratio found in pyramid construction, every element maintains divine proportion and purposeful placement.

**Blend:** Egyptian Design 50% + Art Deco Geometry 30% + Luxury Gold 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** premium, creative  
**Perfect for:** Luxury Museums, Cultural Heritage, Ancient Art

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Sacred Metrics”, “Exclusive Collections”, “Royal Dynasty Jewelry”, “Papyrus Manuscripts”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Schedule Consultation”, “Clear Form”, “Primary Action”.
- Navigation uses single nouns: “Collections”, “Heritage”, “Gallery”, “Membership”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `color-lapis`, `color-gold`, `color-terracotta`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Papyrus Cream (#F9F5EC): Ancient wisdom, scholarly pursuit, timeless knowledge
- Lapis Blue (#1A5490): Sacred stone, royal divinity, celestial connection
- Gold (#D4AF37): Pharaonic wealth, eternal value, divine illumination
- Terracotta (#C8664F): Desert warmth, earthly foundation, human craftsmanship

## Typography

- `display` — "Noto Serif Display", serif
- `body` — "Noto Serif", serif

Faces are hosted on Google Fonts (Noto Serif Display, Noto Serif); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@400;600;700&family=Noto+Serif:wght@400;600;700&display=swap">
```

- Set titles in `display` and running text in `body`.

### Type rationale

- Noto Serif Display: Elegant serifs echoing hieroglyphic formality
- High contrast strokes for visual drama
- Geometric letterform construction
- Available in multiple weights for hierarchy

- Noto Serif: Refined readability with classical proportions
- Excellent screen legibility
- Comfortable reading experience
- Maintains visual dignity at all sizes

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.618rem, `space-xl` 2.618rem, `space-2xl` 4.236rem, `space-3xl` 6.854rem, `content-padding` 1.618rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 2px, `border-radius-md` 4px, `border-radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-gold`, lowest first for resting cards, higher for hover and overlays.

1. Header: Pharaonic banner with cartouche-inspired logo
2. Stats Grid: Four sacred pillars displaying key metrics
3. Content Cards: Tomb-like containers with golden accents
4. Data Table: Hieroglyphic-inspired information architecture
5. Forms: Temple petition style with formal validation
6. Buttons: Tiered authority with geometric shapes
7. Badges: Scarab-beetle inspired status indicators
8. Footer: Foundation register with columnar organization

## States and motion

- Users experience the weight of millennia—sophisticated, prestigious, and
- timelessly elegant. The interface conveys exclusivity without coldness,
- luxury without ostentation. Like entering a beautifully preserved temple,
- every interaction feels significant and curated.

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 400ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-papyrus` 1.0:1, `color-gold` 1.9:1, `color-gold-light` 1.5:1, `color-sand` 1.3:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ✓ WCAG 2.1 AA contrast ratios (4.5:1 body, 3:1 large text)
- ✓ Focus indicators with gold outline (3px for visibility)
- ✓ Semantic HTML with ARIA labels where needed
- ✓ Responsive typography using clamp() functions
- ✓ Touch targets 44x44px minimum (royal decree)

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Pharaonic banner with cartouche-inspired logo
2. Stats Grid: Four sacred pillars displaying key metrics
3. Content Cards: Tomb-like containers with golden accents
4. Data Table: Hieroglyphic-inspired information architecture
5. Forms: Temple petition style with formal validation
6. Buttons: Tiered authority with geometric shapes
7. Badges: Scarab-beetle inspired status indicators
8. Footer: Foundation register with columnar organization

## Further guidance

### Temperature & Formality

- Temperature: 5/10 (Warm) - Golden accents, terracotta earth tones
- Formality: 8/10 (High) - Sacred geometry, institutional gravitas
- Luxury Level: 9/10 - Premium materials, opulent detailing

### Sacred Geometry Principles

- Golden Ratio (φ = 1.618): Applied to spacing, sizing, proportions
- Perfect symmetry: Bilateral balance in layout composition
- Horizontal bands: Egyptian register system for content organization
- Stepped elevation: Pyramid-inspired depth hierarchy
- Lotus proportions: Expanding patterns from central axis

### Responsive Strategy

- Mobile: Single column, stacked registers (papyrus scroll metaphor)
- Tablet: Two-column grids, balanced symmetry
- Desktop: Full multi-column layouts with hierarchical scale
- Large screens: Maximum 1600px width (temple proportion)

### Use Cases

- Luxury brands and premium services
- Museums and cultural institutions
- High-end hospitality and travel
- Fine art galleries and auction houses
- Exclusive membership organizations
- Premium creative agencies
- Heritage luxury goods

### Implementation Notes

- CSS Custom Properties enable light/dark mode (day/night cycle)
- Grid system based on 8px unit (sacred geometry)
- Border patterns use geometric repetition
- Hover states reveal golden underlays
- Gradient overlays create depth and richness
- Box shadows suggest carved relief

### Historical References

- Great Pyramid of Giza: Proportional mathematics
- Book of the Dead: Hierarchical visual organization
- Tutankhamun's Tomb: Color palette and gold abundance
- Karnak Temple: Columnar rhythm and scale
- Papyrus manuscripts: Horizontal register system
- Art Deco movement: 1920s Egyptian revival

### Geometric Patterns

- Lotus flower: Growth, enlightenment (border decorations)
- Papyrus bundle: Wisdom, documentation (content containers)
- Scarab beetle: Protection, transformation (badges)
- Ankh symbol: Life, continuity (navigation indicators)
- Was scepter: Authority, power (call-to-action buttons)

### Version

- 1.0.0

## Not synced

Built from `style-150-ancient-egyptian-luxe.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-size-xs`, `--font-size-sm`, `--font-size-base`, `--font-size-lg`, `--font-size-xl`, `--font-size-2xl`, `--font-size-3xl`.
