Investment Fund: Investment Fund 70% + Data Visualization 30%.

**Blend:** Investment Fund 70% + Data Visualization 30%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** professional, tech  
**Perfect for:** Investment Firms, Hedge Funds, Financial Services

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Portfolio Dashboard”, “Top Holdings”, “Sector Allocation”, “Recent Activity”.
- Buttons are short verb phrases in Title Case: “Export Data”, “New Position”, “All Assets”, “Stocks”.
- Navigation uses single nouns: “Portfolio”, “Markets”, “Analytics”, “Research”.
- The reference page uses emoji as inline glyphs (📊 📈 💼 💰 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `cyan`, `emerald`, `red`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, sans-serif
- `jetbrains-mono` — "JetBrains Mono", monospace

Faces are hosted on Google Fonts (Inter, JetBrains Mono); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-14` 14px, `space-16` 16px, `space-24` 24px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-8` 8px, `radius-12` 12px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-20-investment-fund.html`. No component bundle: the reference page's markup is not packaged as live components.
