"Architectural prestige and timeless elegance through natural stone opulence".

**Blend:** Marble Material 55% + Luxury Interior 25% + Classic Elegance 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** premium, hospitality  
**Perfect for:** Luxury Interior, High-End Design, Premium Services

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Architectural Excellence”, “Signature Collections”, “Grand Residences”, “Penthouse Suites”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”, “Schedule Consultation”, “Clear Form”.
- Navigation uses single nouns: “Overview”, “Portfolio”, “Services”, “Inquire”.
- The reference page uses emoji as inline glyphs (🏛 💎 ✨ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-marble-cream`, `color-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- White marble: Purity, luxury, timeless quality
- Gray veining: Natural authenticity, depth, prestige
- Gold: Wealth, excellence, premium quality
- Charcoal: Sophistication, authority, grounding
- Soft cream: Warmth, accessibility, comfort in luxury

## Typography

- `display` — Cormorant, serif
- `body` — Jost, sans-serif

Faces are hosted on Google Fonts (Cormorant, Jost); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&family=Jost:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `caption`), always with the letter-spacing given.

### Type rationale

- Headings: Cormorant (700) - Elegant serif with classical proportions
- Body: Jost (400-700) - Geometric sans with modern sophistication
- Scale: 1.414 ratio (√2) for architectural harmony
- Leading: 1.8 for body, 1.2 for headings (luxurious spacing)

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.707rem, `space-md` 1rem, `space-lg` 1.414rem, `space-xl` 2rem, `space-2xl` 2.828rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 6px, `radius-lg` 8px, `radius-xl` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Hover states are subtle and refined (no aggressive changes)
- Focus states use gold outlines (premium accent)
- Transitions are smooth (500ms) like polished surfaces
- Active states deepen slightly (pressing into stone)
- All interactions feel premium and deliberate

Timing values: `--transition-base` 500ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `color-marble-white` 1.0:1, `color-marble-pure` 1.1:1, `color-marble-vein` 1.7:1, `color-marble-vein-dark` 2.2:1, `color-gold` 2.1:1, `color-gold-dark` 2.6:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant with enhanced contrasts
- Focus indicators elegant but clear (2px gold)
- Semantic HTML maintains structural clarity
- Responsive breakpoints: 768px (tablet), 1024px (desktop)
- High contrast available for readability without sacrificing elegance

## Further guidance

### Visual Attributes

- Temperature: 4/10 (Cool-Neutral) - Marble coolness warmed by gold/cream
- Formality: 9/10 (Highly Formal) - Prestigious, sophisticated, refined
- Texture Density: High - Complex veining patterns throughout
- Material Authenticity: Natural stone with polished finish

### Use Cases

- ✓ Luxury hospitality and hotels
- ✓ High-end real estate platforms
- ✓ Premium professional services (law, consulting)
- ✓ Luxury retail and e-commerce
- ✓ Fine dining and culinary experiences
- ✓ Wealth management and financial services
- ✓ Architectural and interior design firms

### Tags

- premium, hospitality, luxury, sophisticated, timeless, elegant

## Not synced

Built from `style-192-marble-luxury.html`. No component bundle: the reference page's markup is not packaged as live components.
