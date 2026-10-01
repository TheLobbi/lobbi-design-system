Rococo Digital Garden: Rococo Style 55% + Soft Gradients 25% + Floral Organic 20%.

**Blend:** Rococo Style 55% + Soft Gradients 25% + Floral Organic 20%  
**Temperature:** 8/10 (warm) · **Formality:** 6/10 · **Tags:** creative, hospitality  
**Perfect for:** Floral Brands, Garden Societies, Botanical Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Rococo Digital Garden”, “Blooming Creators”, “Lily Dubois”, “Rose Moreau”.
- Buttons are short verb phrases in Title Case: “See Garden”, “Visit”, “Visit”, “Visit”.
- Navigation uses single nouns: “Garden”, “Blooms”, “Events”, “Profile”.
- The reference page uses emoji as inline glyphs (🌸 💐 ✨ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `pink-primary`, `mint-accent`, `cream-primary`, `gold-dark`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — Nunito, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Nunito); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Nunito:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2.5rem, `space-2xl` 4rem, `space-3xl` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-12` 12px, `radius-20` 20px, `radius-24` 24px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-base` 0.35s ease-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `pink-primary` 1.6:1, `pink-dark` 2.2:1, `pink-light` 1.2:1, `mint-accent` 1.3:1, `cream-card` 1.2:1, `gold-accent` 1.7:1, `gold-light` 1.3:1, `gray-secondary` 4.4:1, `color-success` 1.3:1, `color-error` 2.2:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-144-rococo-digital-garden.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--radius-sm`, `--radius-md`, `--radius-lg`.
