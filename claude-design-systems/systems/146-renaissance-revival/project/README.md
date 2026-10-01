Humanism, Proportion & Artistic Mastery. Inspired by: Italian Renaissance art, Florentine palaces, Vatican museums, Leonardo da Vinci's notebooks, Medici patronage, classical proportions.

**Blend:** Italian Renaissance 55% + Fine Art Gallery 25% + Editorial Luxury 20%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium, creative  
**Perfect for:** Fine Art Museums, Cultural Institutions, Art Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Cultural Foundation”, “Exhibition Overview”, “Masters of Light & Shadow”, “Medici Manuscripts”.
- Buttons are short verb phrases in Title Case: “View Exhibition”, “Book Tour”, “Explore Collection”, “Audio Guide”.
- Navigation uses single nouns: “Gallery”, “Exhibitions”, “Collections”, “Programs”, “Support”, “Visit”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `terracotta`, `forest-green`, `forest-sage`, `ivory`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --terracotta: #d4735e       → Tuscan clay, warm earth, Siena palette
- --terracotta-deep: #b85c47  → Aged brick, Florentine rooftops
- --terracotta-light: #e89f8d → Fresco pink, delicate warmth
- --gold-renaissance: #c9a85c → Gilded frames, illuminated manuscripts
- --gold-deep: #a68745        → Old master varnish, aged gold leaf
- --forest-green: #2d5016    → Cypress trees, garden grottos
- --forest-sage: #5a7c41     → Olive groves, Renaissance gardens
- --ivory: #faf6f1           → Canvas, parchment, marble statuary
- --cream: #f5efe5           → Fresco plaster, aged paper
- --umber: #3e2723           → Oil paint shadows, walnut frames

## Typography

- `display` — Cormorant, Georgia, serif
- `body` — Spectral, Georgia, serif

Faces are hosted on Google Fonts (Cormorant, Spectral); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&family=Spectral:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Cormorant: Headlines - elegant classical serif, high-contrast strokes
- Spectral: Body text - refined readability with Renaissance proportions
- Letter-spacing: Optical for display sizes (varied per glyph)
- Font scale: Based on golden ratio (1:1.618)
- Line height: 1.618 for body text (Renaissance proportion)
- Hierarchy: 0.875rem → 1rem → 1.25rem → 1.618rem → 2rem → 3.236rem

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-14` 14px, `space-20` 20px, `space-25-888` 25.888px, `space-32` 32px, `space-41-888` 41.888px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-full` 50px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Golden ratio grid: Divisions at 0.618 and 1.618
- Base unit: 1rem (16px) - humanistic scale
- Card padding: 2.618rem - Renaissance proportion
- Section gaps: 4.236rem - Fibonacci sequence
- Border radius: 8px - soft classical curves
- Asymmetric balance (not rigid symmetry)

## States and motion

- Hover: Subtle 3px elevation with warm shadow
- Active: Terracotta glow (0 0 20px rgba(212, 115, 94, 0.3))
- Focus: Gold border with high contrast for accessibility
- Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1) - organic easing
- Buttons: Soft edges, gradient depth, subtle texture

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 12.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `terracotta` 3.0:1, `terracotta-deep` 4.2:1, `gold-deep` 3.2:1, `forest-sage` 4.4:1, `ivory` 1.0:1, `category-tag-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA minimum contrast ratios
- Umber on ivory: 12.8:1 contrast ratio
- Forest-green on cream: ~~7.4:1~~ contrast ratio — **measured 8.1:1**
- Gold-deep on terracotta: ~~4.6:1~~ contrast ratio — **measured 1.0–1.6:1** (not for body text)
- Focus visible states with 3px gold borders
- Semantic HTML with ARIA landmarks
- Alt text for all decorative elements
- Keyboard navigation with visible focus

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Cream gradient, terracotta accents, decorative border
2. Navigation: Elegant spacing, underline animations
3. Stats Grid: 4-column with golden ratio proportions
4. Cards: Layered shadows, gold corner details, fresco backgrounds
5. Buttons: Primary (terracotta gradient), Secondary (gold outline)
6. Table: Striped rows, forest green headers
7. Form Elements: Refined borders, label transitions
8. Footer: Terracotta background, gold divider

## Further guidance

### Temperature

- (Warm Cultural)
- Terracotta and gold create Tuscan warmth
- Forest greens provide balance
- Overall: inviting, cultivated, humanistic

### Formality

- (High - Cultural Sophistication)
- Refined but not rigid
- Artistic rather than corporate
- Sophisticated without pretension
- Appropriate for: art galleries, cultural foundations,
- museums, design studios, creative agencies, heritage brands

### Renaissance Design Patterns

- Golden ratio in all spacing and typography
- Layered depth (atmospheric perspective)
- Decorative corner flourishes (inspired by illuminated manuscripts)
- Asymmetric but balanced layouts
- Warm color harmonies (earth + gold)
- Generous white space (canvas breathing room)

### Brand Positioning

- Target: Art galleries, cultural institutions, creative studios,
- design agencies, architecture firms, luxury creative brands
- Competitive: Distinguished from minimalist tech aesthetics
- Trust signals: Cultural sophistication, artistic heritage
- Emotional resonance: Beauty, wisdom, creativity, refinement

## Not synced

Built from `style-146-renaissance-revival.html`. No component bundle: the reference page's markup is not packaged as live components.
