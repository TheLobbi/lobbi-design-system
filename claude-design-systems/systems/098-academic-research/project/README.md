Academic Research: University Library 60% + Scientific Publishing 25% + Dark Academia 15%.

**Blend:** University Library 60% + Scientific Publishing 25% + Dark Academia 15%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** academic, professional  
**Perfect for:** Research Institutes, Academic Centers, University Labs

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Academic Research Portal”, “Research Areas”, “Publishers”, “Quick Filters”.
- Buttons are short verb phrases in Title Case: “Upload Paper”, “My Library”, “Research Papers”, “Citations”.
- The reference page uses emoji as inline glyphs (📖 👁 💬 ⭐ © ❦); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `burgundy-deep`, `burgundy-light`, `cream`, `parchment`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Crimson Text", Baskerville, Georgia, serif
- `body` — "Source Sans Pro", "Helvetica Neue", sans-serif
- `source-code-pro` — "Source Code Pro", monospace

Faces are hosted on Google Fonts (Crimson Text, Source Sans Pro, Source Code Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+Pro:wght@300;400;600;700&family=Source+Code+Pro:wght@400;500&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 6px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `cream` 1.3:1, `aged-paper` 1.1:1, `gold` 2.2:1, `gold-light` 1.5:1, `text-muted` 2.8:1, `text-inverse` 1.3:1, `category-tag-bg` 1.5:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-98-academic-research.html`. No component bundle: the reference page's markup is not packaged as live components.
