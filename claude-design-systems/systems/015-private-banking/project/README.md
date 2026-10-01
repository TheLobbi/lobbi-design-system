Private Banking: Private Banking 70% + Classic Editorial 30%.

**Blend:** Private Banking 70% + Classic Editorial 30%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** premium, professional  
**Perfect for:** Private Banks, Wealth Management, Investment Firms

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Portfolio Overview”, “Strategic Insights”, “Q4 Positioning Strategy”, “Dividend Optimization”.
- Buttons are short verb phrases in Title Case: “Read Report”, “Schedule Call”, “View Details”, “Optimize”.
- Navigation uses single nouns: “Portfolio”, “Transactions”, “Reports”, “Advisory”, “Settings”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-deep`, `cream-base`, `gold-muted`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Cormorant Garamond", Georgia, serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-14` 14px, `space-16` 16px, `space-24` 24px, `space-32` 32px, `space-40` 40px, `space-48` 48px. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-15-private-banking.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--serif`, `--sans`.
