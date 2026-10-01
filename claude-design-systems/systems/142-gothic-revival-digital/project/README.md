Gothic Revival Digital: Gothic Architecture 55% + Dark Academia 25% + Editorial Swiss 20%.

**Blend:** Gothic Architecture 55% + Dark Academia 25% + Editorial Swiss 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** premium, academic  
**Perfect for:** Universities, Libraries, Heritage Institutions

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Gothic Revival Digital”, “Distinguished Fellows”, “Dr. Helena Ashford”, “Prof. Marcus Vale”.
- Buttons are short verb phrases in Title Case: “View Archives”, “Biography”, “Biography”, “Biography”.
- Navigation uses single nouns: “Library”, “Archives”, “Research”, “Settings”.
- The reference page uses emoji as inline glyphs (📜 ⚖ 🏛 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `burgundy-primary`, `gold-accent`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "EB Garamond", serif
- `body` — "Source Serif Pro", serif

Faces are hosted on Google Fonts (EB Garamond, Source Serif Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Source+Serif+Pro:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2.5rem, `space-2xl` 4rem, `space-3xl` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-inset`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-base` 0.25s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 12.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `gold-accent` 2.0:1, `gold-light` 1.6:1, `parchment` 1.0:1, `parchment-dark` 1.1:1, `stone-gray` 3.0:1, `color-success` 4.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-142-gothic-revival-digital.html`. No component bundle: the reference page's markup is not packaged as live components.
