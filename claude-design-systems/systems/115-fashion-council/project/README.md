Fashion Council: High Fashion 60% + Industry Network 25% + Trend Forecasting 15%.

**Blend:** High Fashion 60% + Industry Network 25% + Trend Forecasting 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** creative, media  
**Perfect for:** Fashion Councils, Designer Networks, Style Associations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “The World's Premier Fashion Council Network”, “Paris Fashion Week 2025”, “Featured Designers”, “Alessandro Moretti”.
- Buttons are short verb phrases in Title Case: “Join Council”, “Apply Now”, “Apply Now”, “Apply Now”.
- Navigation uses single nouns: “Designers”, “Fashion Week”, “Trend Reports”, “Industry News”, “Membership”.
- The reference page uses emoji as inline glyphs (📈 🌱 💻 🌍 📰 👔); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-blush`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Playfair Display", Didot, serif
- `body` — Inter, "Helvetica Neue", sans-serif

Faces are hosted on Google Fonts (Playfair Display, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap">
```

The reference page names Playfair Display, Inter without loading them, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-full` 50%.

## States and motion

Timing values: `--transition-fast` 0.2s ease, `--transition-smooth` 0.4s cubic-bezier(0.4, 0, 0.2, 1), `--transition-elegant` 0.6s cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `color-blanc` 1.0:1, `color-blush` 1.5:1, `color-blush-light` 1.2:1, `color-blush-dark` 2.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-115-fashion-council.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-accent`.
