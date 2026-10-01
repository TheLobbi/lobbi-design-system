Architect Portfolio: Architect's Portfolio 75% + Swiss Grid 25%.

**Blend:** Architect's Portfolio 75% + Swiss Grid 25%  
**Temperature:** 2/10 (cool) · **Formality:** 8/10 · **Tags:** professional  
**Perfect for:** Architecture Firms, Design Studios, Creative Professionals

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “AssociationOverview”, “Strategic Initiatives”, “Annual Conference 2025”, “Membership Renewals”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Deploy”, “Review”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Reports”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `accent`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Archivo, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Archivo); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-2`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `margin-dramatic` 80px. Pad cards and sections from these steps only.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `pure-white` 1.0:1, `concrete-gray` 2.6:1, `accent` 3.3:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-16-architect-portfolio.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-main`, `--unit`, `--grid-2`, `--grid-3`, `--grid-4`, `--grid-5`, `--grid-6`, `--grid-8`, `--grid-10`, `--grid-12`.
