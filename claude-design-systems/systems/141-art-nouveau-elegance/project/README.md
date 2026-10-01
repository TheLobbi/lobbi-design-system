Art Nouveau Elegance: Art Nouveau 60% + Organic Modern 25% + Soft Pastel 15%.

**Blend:** Art Nouveau 60% + Organic Modern 25% + Soft Pastel 15%  
**Temperature:** 7/10 (warm) · **Formality:** 7/10 · **Tags:** creative, premium  
**Perfect for:** Art Galleries, Design Studios, Cultural Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Art Nouveau Elegance”, “Featured Members”, “Sophia Bennett”, “Marcus Chen”.
- Buttons are short verb phrases in Title Case: “View All”, “View Profile”, “View Profile”, “View Profile”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Analytics”, “Settings”.
- The reference page uses emoji as inline glyphs (🎨 🌿 ✨ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `rose-accent`, `cream-bg`, `gold-dark`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Cinzel, serif
- `body` — "Crimson Pro", serif

Faces are hosted on Google Fonts (Cinzel, Crimson Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Pro:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.382rem, `space-sm` 0.618rem, `space-md` 1rem, `space-lg` 1.618rem, `space-xl` 2.618rem, `space-2xl` 4.236rem. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-20` 20px, `radius-24` 24px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-base` 0.3s ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-141-art-nouveau-elegance.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-organic`.
