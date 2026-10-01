Clean Energy: Clean Energy 75% + Sustainable Tech 25%.

**Blend:** Clean Energy 75% + Sustainable Tech 25%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** tech  
**Perfect for:** Clean Energy Firms, Solar Companies, Sustainability Tech

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Energy Dashboard”, “Energy Production”, “Grid Status”, “Sustainability Impact”.
- Buttons are short verb phrases in Title Case: “Today”, “Tomorrow”, “7 Days”.
- Navigation uses single nouns: “Dashboard”, “Production”, “Grid Status”, “Analytics”, “Sustainability”.
- The reference page uses emoji as inline glyphs (☀ ⚡ 🌱 ⚙ 🌍 💨); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `solar-gold`, `leaf-green`, `sky-blue`, `gray-800`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `warning`, `info`, `error`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Plus Jakarta Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-1` 0.5rem, `space-2` 1rem, `space-3` 1.5rem, `space-4` 2rem, `space-6` 3rem, `space-8` 4rem, `space-12` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.5rem, `radius-md` 0.75rem, `radius-lg` 1rem, `radius-xl` 1.5rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease-out, `--transition-base` 200ms ease-out, `--transition-slow` 300ms ease-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `solar-gold` 1.6:1, `solar-gold-dark` 2.1:1, `leaf-green` 2.2:1, `leaf-green-dark` 3.2:1, `sky-blue` 2.7:1, `sky-blue-dark` 4.0:1, `pure-white` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-48-clean-energy.html`. No component bundle: the reference page's markup is not packaged as live components.
