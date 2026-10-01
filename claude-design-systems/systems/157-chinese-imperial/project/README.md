This design system embodies the imperial majesty and cultural heritage of Chinese dynasties, drawing inspiration from the Forbidden City's architectural grandeur and the symbolic use of auspicious colors. The system balances traditional imperial aesthetics with modern usability requirements.

**Blend:** Chinese Imperial 55% + Forbidden City 25% + Luxury Red 20%  
**Temperature:** 6/10 (warm) · **Formality:** 9/10 · **Tags:** premium, association  
**Perfect for:** Chinese Organizations, Asian Heritage, Cultural Institutions

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Imperial Palace”, “Imperial Metrics”, “Featured Heritage”, “Heritage Collection”.
- Buttons are short verb phrases in Title Case: “Submit Inquiry”, “Reset Form”, “Primary Action”, “Secondary Action”.
- Navigation uses single nouns: “Home”, “About”, “Services”, “Gallery”, “Contact”.
- The reference page uses emoji as inline glyphs (📅 👁 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `imperial-red`, `imperial-gold`, `jade-green`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Noto Serif SC", serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Noto Serif SC, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Noto Serif SC (Chinese-optimized serif)
- Rationale: Provides authentic Chinese aesthetic while maintaining
- excellent Latin character support. Serif style adds formality and
- traditional elegance befitting imperial theme.

- Body: Inter (modern sans-serif)
- Rationale: Ensures exceptional readability for extended content while
- providing subtle contrast to traditional heading style. Clean, neutral
- aesthetic allows imperial colors to dominate.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-imperial`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 350ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `imperial-gold` 2.0:1, `ivory` 1.1:1, `cream` 1.1:1, `gray-warm` 3.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- High contrast color pairings
- Clear focus indicators with gold outline
- Generous touch targets (min 44px)
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support

## Further guidance

### Cultural Context

- Imperial Red: Symbolizes prosperity, joy, and good fortune
- Gold: Represents wealth, power, and imperial authority
- Jade Green: Signifies harmony, virtue, and longevity
- Black: Denotes stability, power, and formality
- Ivory: Represents purity and elegance

### Temperature

- (Moderately Warm)
- Imperial red provides warmth and energy
- Balanced with cool jade and neutral ivory
- Gold adds warm metallic richness
- Overall: Welcoming yet dignified

### Formality

- (Highly Formal)
- Imperial heritage demands ceremonial presentation
- Strong hierarchical structures
- Refined, dignified component styling
- Minimal playful elements
- Professional, authoritative tone

- CONTRAST RATIOS (WCAG 2.1 AA Compliance):
- Primary text on ivory: 12.5:1 (AAA)
- White text on imperial red: 5.8:1 (AA)
- Text on jade green: ~~7.2:1~~ (AA) — **measured 1.8–2.7:1** (not for body text)
- Gold text on dark backgrounds: 4.8:1 (AA)

### Responsive Behavior

- Mobile (320px-767px): Single column, stacked navigation
- Tablet (768px-1023px): Two-column grids, condensed spacing
- Desktop (1024px+): Full grid layouts, optimal spacing

### Use Cases

- Premium association websites
- Cultural heritage organizations
- High-end hospitality brands
- Luxury product portfolios
- Executive membership platforms
- Formal event systems

### Tags

- premium, association, cultural, formal, traditional

## Not synced

Built from `style-157-chinese-imperial.html`. No component bundle: the reference page's markup is not packaged as live components.
