Investment Elite: Private Wealth 60% + Data Visualization 25% + Bloomberg 15%.

**Blend:** Private Wealth 60% + Data Visualization 25% + Bloomberg 15%  
**Temperature:** 3/10 (cool) · **Formality:** 10/10 · **Tags:** premium, professional  
**Perfect for:** Investment Banks, Private Equity, Wealth Management

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Investment Elite”, “📊 Portfolio Performance”, “🎯 Asset Allocation”, “📈 Performance Metrics”.
- Buttons are short verb phrases in Title Case: “📚 Access Research Library”, “🔔 Subscribe to Alerts”, “+ Add Securities”.
- Navigation uses single nouns: “Portfolio”, “Markets”, “Research”, “Analytics”, “Reports”.
- The reference page uses emoji as inline glyphs (📊 🎯 📈 📑 📅 📄); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `silver-light`, `gold-light`, `gold-darker`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `success-dark`, `danger`, `danger-dark`, `warning`, `info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Navy: #0a1628, #1a2942
- Silver: #c4d3e0, #8a9fb5
- Subtle Gold: #d4af37, #b8952e

## Typography

- `display` — Georgia, "Times New Roman", serif
- `body` — "Helvetica Neue", Helvetica, Arial, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem, `space-xxl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 0.15s ease, `--transition-base` 0.3s ease, `--transition-slow` 0.5s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `silver-darker` 4.5:1, `danger` 3.8:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `primary-darkest` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Temperature

- 3 (Cool - Professional, Reserved)

### Formality

- 10 (Maximum Formal - Refined, Exclusive)

## Not synced

Built from `style-96-investment-elite.html`. No component bundle: the reference page's markup is not packaged as live components.
