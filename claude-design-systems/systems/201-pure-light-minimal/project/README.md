━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Maximum brightness meets pristine clarity. This style embodies the essence of minimalism - every element serves a purpose, every pixel counts. The pure white canvas creates an environment of focus and professionalism, perfect for tech companies and modern enterprises that value simplicity.

**Blend:** Ultra Light 55% + White Space 25% + Clean Typography 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** professional, tech  
**Perfect for:** Minimalist Brands, Clean Tech, Modern Services

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Pure Light Minimal”, “Featured Projects”, “Analytics Dashboard”, “Design System”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”, “Primary Action”, “Secondary Action”.
- Navigation uses single nouns: “Dashboard”, “Analytics”, “Reports”, “Settings”.
- The reference page uses emoji as inline glyphs (📊 🎨 🚀 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-primary`, `color-primary-light`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- White: Purity, clarity, simplicity
- Gray: Neutrality, balance, professionalism
- Blue: Trust, technology, reliability
- Black: Sophistication, contrast, definition

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.375rem, `radius-md` 0.5rem, `radius-lg` 0.75rem, `radius-xl` 1rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Component: Ultra Light (55%)
- ├─ Pure white backgrounds (#FFFFFF)
- ├─ Extreme lightness for maximum brightness
- ├─ Minimal color saturation
- High contrast text for readability

- Secondary Component: White Space (25%)
- ├─ Generous padding and margins
- ├─ Breathing room between elements
- ├─ Visual hierarchy through spacing
- Reduced visual noise

- Tertiary Component: Clean Typography (20%)
- ├─ Inter font family (400-700 weights)
- ├─ Clear hierarchy (48px/32px/24px/16px)
- ├─ Optimal line height (1.5-1.6)
- Letter spacing for readability

## States and motion

- ├─ Temperature: 5/10 (Neutral, balanced)
- ├─ Formality: 7/10 (Professional, structured)
- ├─ Energy: Clean, focused, efficient
- Mood: Pristine, modern, uncluttered

Timing values: `--transition-fast` 150ms ease, `--transition-base` 200ms ease, `--transition-slow` 300ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ✓ WCAG 2.1 AA compliant
- ✓ Contrast ratio 4.5:1 minimum for text
- ✓ Focus states visible and clear
- ✓ Touch targets 44x44px minimum
- ✓ Keyboard navigation support

## Further guidance

### Use Cases

- ├─ Tech startups and SaaS platforms
- ├─ Professional services and consulting
- ├─ Enterprise dashboards
- Modern B2B applications

### Technical Implementation

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Mobile-first responsive design
- CSS custom properties for theming
- Smooth transitions (200-300ms)
- System font fallbacks
- Performance optimized (<50kb)

### Breakpoints

- ├─ Mobile: < 768px
- ├─ Tablet: 768px - 1024px
- Desktop: > 1024px

## Not synced

Built from `style-201-pure-light-minimal.html`. No component bundle: the reference page's markup is not packaged as live components.
