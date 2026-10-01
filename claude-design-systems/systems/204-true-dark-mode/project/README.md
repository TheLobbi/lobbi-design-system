━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ OLED-optimized darkness meets energy efficiency. This style embraces true black (#000) for OLED displays, conserving battery while reducing eye strain for late-night work sessions. Perfect for developers, night owls, and mobile applications where battery life matters.

**Blend:** True Dark 55% + OLED Black 25% + Reduced Eye Strain 20%  
**Temperature:** 4/10 (cool) · **Formality:** 6/10 · **Tags:** tech, professional  
**Perfect for:** Tech Products, Developer Tools, Modern Apps

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “True Dark Mode”, “Active Repositories”, “API Gateway Service”, “Auth Microservice”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”, “Deploy to Production”, “Run Tests”.
- Navigation uses single nouns: “Dashboard”, “Code”, “Projects”, “Settings”.
- The reference page uses emoji as inline glyphs (⚡ 🔐 📊 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-primary`, `color-primary-light`, `color-purple`, `color-pink`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- True Black: Mystery, sophistication, focus
- Soft White: Clarity without glare
- Muted Colors: Reduced stimulation, calm
- Accent Colors: Vibrancy against darkness

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.375rem, `radius-md` 0.5rem, `radius-lg` 0.75rem, `radius-xl` 1rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Component: True Dark (55%)
- ├─ Pure black backgrounds (#000000)
- ├─ Maximum contrast reduction
- ├─ OLED-optimized color choices
- Energy-efficient display support

- Secondary Component: OLED Black (25%)
- ├─ Pixel-off black for OLED screens
- ├─ Battery conservation
- ├─ Infinite contrast ratio
- Screen burn-in prevention

- Tertiary Component: Reduced Eye Strain (20%)
- ├─ Lower brightness levels
- ├─ Softer white tones (#E5E5E5)
- ├─ Reduced blue light emission
- Optimized for nighttime use

## States and motion

- ├─ Temperature: 4/10 (Neutral-cool)
- ├─ Formality: 6/10 (Professional, modern)
- ├─ Energy: Focused, calm, nocturnal
- Mood: Immersive, comfortable, efficient

Timing values: `--transition-fast` 150ms ease, `--transition-base` 200ms ease, `--transition-slow` 300ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-text-tertiary` 4.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ✓ WCAG 2.1 AA compliant (dark mode standards)
- ✓ Text contrast optimized for #000 backgrounds
- ✓ Reduced eye strain for extended use
- ✓ Focus states with high visibility
- ✓ Touch targets 44x44px minimum
- ✓ Color-blind friendly accent palette

## Further guidance

### Use Cases

- ├─ Developer tools and IDEs
- ├─ Mobile applications (battery saving)
- ├─ Entertainment platforms
- Late-night productivity tools

### Technical Implementation

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- True black (#000) for OLED efficiency
- Careful contrast management
- Softer shadows (dark on dark)
- Reduced brightness text colors
- Performance optimized (<50kb)

### Battery Efficiency

- ├─ OLED screens: 60% less power vs white
- ├─ True black pixels are OFF
- Extends device battery life

### Breakpoints

- ├─ Mobile: < 768px
- ├─ Tablet: 768px - 1024px
- Desktop: > 1024px

## Not synced

Built from `style-204-true-dark-mode.html`. No component bundle: the reference page's markup is not packaged as live components.
