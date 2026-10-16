Indian Mughal Luxury: Mughal Architecture 50% + Luxury India 30% + Ornamental Gold 20%.

**Blend:** Mughal Architecture 50% + Luxury India 30% + Ornamental Gold 20%  
**Temperature:** 7/10 (warm) · **Formality:** 8/10 · **Tags:** premium, creative  
**Perfect for:** Indian Luxury, Cultural Heritage, Traditional Arts

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Imperial Collections”, “Taj Heritage Palace”, “Amber Fort Residency”, “Mughal Garden Villa”.
- Buttons are short verb phrases in Title Case: “Reserve Now”, “Clear Form”, “Primary Imperial”, “Secondary Royal”.
- Navigation uses single nouns: “Home”, “Palaces”, “Heritage”, “Experiences”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-primary`, `color-secondary`, `color-accent`, `color-background`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Yeseva One", serif
- `body` — Lato, sans-serif

Faces are hosted on Google Fonts (Yeseva One, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Yeseva+One&family=Lato:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `caption`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 10px, `radius-lg` 14px, `radius-xl` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 300ms ease-in-out, `--transition-slow` 450ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-text-tertiary` 3.5:1, `color-success` 4.0:1, `color-error` 3.9:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-accent` 1.7:1, `color-surface` 1.1:1, `color-warning` 1.7:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-156-indian-mughal-luxury.html`. No component bundle: the reference page's markup is not packaged as live components.
