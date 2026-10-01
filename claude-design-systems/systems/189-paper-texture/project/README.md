"Handcrafted authenticity meets print heritage through tactile digital expression".

**Blend:** Paper Material 55% + Print Design 25% + Tactile Craft 20%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** creative, professional  
**Perfect for:** Print Services, Publishing, Traditional Media

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Handcrafted Digital Experience”, “Featured Collections”, “Letterpress Legacy”, “Handwritten Notes”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”, “Submit Inquiry”, “Clear Form”.
- Navigation uses single nouns: “Overview”, “Content”, “Data”, “Contact”.
- The reference page uses emoji as inline glyphs (📄 ✍ 📖 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-paper-white`, `color-highlight`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Off-white base: Authenticity, natural, unprocessed
- Charcoal text: Authority, permanence, printed legacy
- Kraft brown: Organic, sustainable, handcrafted
- Cream: Warmth, approachability, vintage quality
- Soft gray: Subtle, refined, embossed details

## Typography

- `display` — "Libre Baskerville", serif
- `body` — Lora, serif

Faces are hosted on Google Fonts (Libre Baskerville, Lora); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Lora:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Libre Baskerville (700) - Classic serif with print heritage
- Body: Lora (400-600) - Readable serif with warmth and character
- Scale: 1.25 ratio for harmonious hierarchy
- Leading: 1.7 for body, 1.2 for headings (print-inspired spacing)

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 6px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-paper-lift`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Hover states lift elements like turning pages
- Focus states use soft outlines (pencil sketch aesthetic)
- Transitions are gentle (300ms) like paper settling
- Active states deepen shadows (pressing into paper)

Timing values: `--transition-base` 300ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA compliant color contrasts (4.5:1 minimum)
- Focus indicators visible and clear (2px soft outline)
- Semantic HTML structure throughout
- Responsive breakpoints: 768px (tablet), 1024px (desktop)

## Further guidance

### Visual Attributes

- Temperature: 6/10 (Warm) - Cream and kraft tones create inviting warmth
- Formality: 7/10 (Professional) - Classic typography with structured layouts
- Texture Density: High - Multiple paper simulation techniques layered
- Material Authenticity: Natural fiber aesthetic through digital means

### Use Cases

- ✓ Creative agencies with print background
- ✓ Publishing and editorial platforms
- ✓ Artisan and craft-focused businesses
- ✓ Professional services valuing tradition
- ✓ Cultural institutions and archives

### Tags

- creative, professional, print-heritage, handcrafted, authentic

## Not synced

Built from `style-189-paper-texture.html`. No component bundle: the reference page's markup is not packaged as live components.
