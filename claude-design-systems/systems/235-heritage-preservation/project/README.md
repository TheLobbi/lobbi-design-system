This design embodies the reverence and responsibility of preserving cultural heritage. It balances the weight of history with modern accessibility, creating a bridge between past and present through thoughtful visual language.

**Blend:** Historical Conservation 55% + Museum Quality 30% + Modern Archive 15%  
**Temperature:** 7/10 (warm) · **Formality:** 8/10 · **Tags:** heritage, association  
**Perfect for:** Preservation Societies, Historical Archives, Museum Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Heritage Preservation Foundation”, “Recent Acquisitions”, “Recent Activity”, “Submit Artifact”.
- Buttons are short verb phrases in Title Case: “Donate”, “View All”, “Submit for Review”, “Create Project”.
- Navigation uses single nouns: “Dashboard”, “Collections”, “Preservation”, “Research”, “Archives”, “Support”.
- The reference page uses emoji as inline glyphs (📜 🔧 💾 🤝 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `archive-sepia`, `preservation-green`, `document-cream`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Archive Sepia (#a16207): Warmth of aged documents, stability of preservation
- Preservation Green (#15803d): Growth through conservation, environmental care
- Document Cream (#fef3c7): Aged paper authenticity, gentle reading surface
- Antique Brass (#b45309): Heritage craftsmanship, enduring value

## Typography

- `display` — "Playfair Display", serif
- `body` — Spectral, serif

Faces are hosted on Google Fonts (Playfair Display, Spectral); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Spectral:wght@300;400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Playfair Display: Serif elegance for heritage titles, historical gravitas
- Spectral: Document-style serif for body text, archival readability

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 6px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-emboss`, lowest first for resting cards, higher for hover and overlays.

- Aged paper textures through subtle gradients and shadows
- Archival stamps as decorative accents and status indicators
- Timeline ribbons for chronological organization
- Heritage borders with subtle embossing effects

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `document-cream` 1.1:1, `document-cream-light` 1.0:1, `document-cream-dark` 1.2:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AAA contrast ratios on cream backgrounds
- Serif fonts sized generously for readability (16px+ body)
- Clear focus states with heritage-appropriate styling
- Semantic HTML for screen reader navigation

## Component inventory

The reference page composes these patterns from the tokens above:

- Aged paper textures through subtle gradients and shadows
- Archival stamps as decorative accents and status indicators
- Timeline ribbons for chronological organization
- Heritage borders with subtle embossing effects

## Further guidance

### Temperature

- (Warm Historic)
- Evokes the warmth of preserved materials while maintaining professional distance

### Formality

- (Institutional Reverence)
- Serious commitment to preservation with accessible modern touches

## Not synced

Built from `style-235-heritage-preservation.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-heritage`, `--font-document`.
