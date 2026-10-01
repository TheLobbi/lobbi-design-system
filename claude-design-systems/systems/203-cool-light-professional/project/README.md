━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Professional clarity meets cool efficiency. This style embodies corporate professionalism with a modern twist, using cool tones to convey trust, stability, and technological sophistication. Perfect for enterprise applications, financial services, and B2B platforms that require a trustworthy, data-driven interface.

**Blend:** Cool Light 55% + Corporate Clean 25% + Data Forward 20%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** professional, tech  
**Perfect for:** Tech Companies, Data Services, Corporate Software

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Cool Light Professional”, “Enterprise Solutions”, “Business Intelligence Platform”, “Security & Compliance Suite”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”, “Generate Report”, “Export Data”.
- Navigation uses single nouns: “Dashboard”, “Analytics”, “Reports”, “Settings”.
- The reference page uses emoji as inline glyphs (📊 🔒 ⚙ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-cool-white`, `color-text-primary`, `color-primary`, `color-navy`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Cool White: Cleanliness, efficiency, precision
- Slate Blue: Professionalism, trust, stability
- Steel Gray: Neutrality, sophistication, balance
- Teal: Technology, innovation, reliability

## Typography

- `display` — "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (IBM Plex Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ├─ Primary: IBM Plex Sans (professional, readable)
- Weights: 400-700 for hierarchy

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.25rem, `radius-md` 0.375rem, `radius-lg` 0.5rem, `radius-xl` 0.75rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Component: Cool Light (55%)
- ├─ Cool white backgrounds (#F8FAFB)
- ├─ Slate blue undertones
- ├─ Steel gray accents
- Reduced warmth for clarity

- Secondary Component: Corporate Clean (25%)
- ├─ Professional structure
- ├─ Grid-based layouts
- ├─ Formal typography hierarchy
- Business-appropriate aesthetics

- Tertiary Component: Data Forward (20%)
- ├─ Table-optimized design
- ├─ Chart-ready color system
- ├─ Information density support
- Analytics-focused components

## States and motion

- ├─ Temperature: 3/10 (Cool, efficient)
- ├─ Formality: 8/10 (Highly professional)
- ├─ Energy: Focused, analytical, precise
- Mood: Trustworthy, stable, authoritative

Timing values: `--transition-fast` 150ms ease, `--transition-base` 200ms ease, `--transition-slow` 300ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-error` 3.6:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-primary` 2.6:1, `color-success` 2.4:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ✓ WCAG 2.1 AA compliant
- ✓ High contrast for data visualization
- ✓ Color-blind friendly palette
- ✓ Focus states with blue indicators
- ✓ Touch targets 44x44px minimum
- ✓ Enhanced readability for tables

## Further guidance

### Use Cases

- ├─ Enterprise SaaS platforms
- ├─ Financial and banking applications
- ├─ Data analytics dashboards
- Professional B2B services

### Technical Implementation

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- IBM Plex Sans for consistency
- Crisp borders and edges
- Precise spacing system
- Optimized for data tables
- Performance optimized (<52kb)

### Breakpoints

- ├─ Mobile: < 768px
- ├─ Tablet: 768px - 1024px
- Desktop: > 1024px

## Not synced

Built from `style-203-cool-light-professional.html`. No component bundle: the reference page's markup is not packaged as live components.
