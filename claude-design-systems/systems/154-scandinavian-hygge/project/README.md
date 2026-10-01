Scandinavian Hygge: Danish Hygge 55% + Nordic Minimalism 25% + Cozy Warmth 20%.

**Blend:** Danish Hygge 55% + Nordic Minimalism 25% + Cozy Warmth 20%  
**Temperature:** 8/10 (warm) · **Formality:** 5/10 · **Tags:** hospitality, creative  
**Perfect for:** Nordic Brands, Scandinavian Lifestyle, Cozy Spaces

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Featured Hygge Spaces”, “Nordic Coffee Corner”, “Candlelight Reading Room”, “Indoor Garden Lounge”.
- Buttons are short verb phrases in Title Case: “Reserve Your Space”, “Clear Form”, “Primary Comfort”, “Secondary Warmth”.
- Navigation uses single nouns: “Home”, “Spaces”, “Community”, “About”.
- The reference page uses emoji as inline glyphs (☕ 🕯 🌿 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-secondary`, `color-background`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Outfit, sans-serif
- `body` — "DM Sans", sans-serif

Faces are hosted on Google Fonts (Outfit, DM Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 12px, `radius-lg` 16px, `radius-xl` 24px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 350ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 6.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-primary` 2.1:1, `color-accent` 1.6:1, `color-surface` 1.1:1, `color-text-secondary` 3.8:1, `color-text-tertiary` 2.1:1, `color-success` 1.7:1, `color-warning` 1.6:1, `color-error` 2.0:1, `color-info` 2.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-154-scandinavian-hygge.html`. No component bundle: the reference page's markup is not packaged as live components.
