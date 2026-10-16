Editorial Swiss: Editorial 65% + Swiss 35%.

**Blend:** Editorial 65% + Swiss 35%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** professional, media  
**Perfect for:** Publishers, Media Companies, News Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Association Overview”, “Key Initiatives”, “Annual Conference 2025”, “Membership Renewals”.
- Buttons are short verb phrases in Title Case: “Details”, “Register”, “Send”, “Review List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Reports”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `accent`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Playfair Display", Georgia, serif
- `body` — Inter, -apple-system, sans-serif

Faces are hosted on Google Fonts (Playfair Display, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-10` 10px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `gray-500` 4.5:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `gray-400` 2.8:1, `white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-14-editorial-swiss.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--serif`, `--sans`.
