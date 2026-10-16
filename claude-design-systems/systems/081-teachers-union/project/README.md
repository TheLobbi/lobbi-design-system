Teachers Union: Teachers Union 80% + Education Advocacy 20%.

**Blend:** Teachers Union 80% + Education Advocacy 20%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** association, professional  
**Perfect for:** Teachers Unions, Education Associations, Faculty Groups

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “🎨 ULTRATHINK DESIGN ANALYSIS”, “Design Blend”, “Temperature”, “Formality”.
- Buttons are short verb phrases in Title Case: “View Full Proposal”, “Submit Member Feedback”, “Contact Rep”, “Take Action”.
- Navigation uses single nouns: “Dashboard”, “Contracts”, “Grievances”, “Benefits”, “Resources”.
- The reference page uses emoji as inline glyphs (🎨 👥 🏫 ⚠ 📚 🎓); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `color-primary`, `color-accent`, `ultrathink-header-border`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Source Sans Pro", sans-serif
- `body` — Merriweather, serif

Faces are hosted on Google Fonts (Source Sans Pro, Merriweather); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&family=Merriweather:wght@400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-12` 12px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-20` 20px, `radius-full` 50%.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `color-background` 1.1:1, `color-accent` 2.8:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-81-teachers-union.html`. No component bundle: the reference page's markup is not packaged as live components.
