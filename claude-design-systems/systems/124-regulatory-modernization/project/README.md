Regulatory Modernization: Corporate Refinement 35% + Government Civic 30% + Fintech Modern 20% + Neumorphism 15%.

**Blend:** Corporate Refinement 35% + Government Civic 30% + Fintech Modern 20% + Neumorphism 15%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** professional, association  
**Perfect for:** Regulatory Bodies, Government Agencies, Policy Makers

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Modernizing Regulatory Oversight”, “Regulatory Frameworks”, “Compliance Dashboard”, “Submit Compliance Report”.
- Buttons are short verb phrases in Title Case: “View Framework”, “Documentation”, “View Framework”, “Documentation”.
- Navigation uses single nouns: “Dashboard”, “Compliance”, “Reporting”, “Resources”.
- The reference page uses emoji as inline glyphs (⚖ 🏢 📊 ⚡ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `regulatory-white`, `compliance-blue`, `compliance-blue-light`, `modern-teal-light`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, "Helvetica Neue", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap">
```

The reference page names Inter without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 16px, `space-lg` 24px, `space-xl` 40px, `space-2xl` 56px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 12px, `radius-lg` 16px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition` 200ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `modern-teal` 3.5:1, `category-tag-bg` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-124-regulatory-modernization.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--neuro-light`, `--neuro-dark`, `--neuro-inset-light`, `--neuro-inset-dark`.
