Legal Summit: Law Firm Premium 60% + Conference Platform 25% + Knowledge Base 15%.

**Blend:** Law Firm Premium 60% + Conference Platform 25% + Knowledge Base 15%  
**Temperature:** 3/10 (cool) · **Formality:** 10/10 · **Tags:** professional, association  
**Perfect for:** Legal Conferences, Law Associations, Attorney Networks

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Legal Summit Network”, “📈 CLE Requirements Tracking”, “General CLE Credits”, “Ethics & Professionalism”.
- Buttons are short verb phrases in Title Case: “View Full Report”, “Register for Event”, “All Events”, “Conferences”.
- Navigation uses single nouns: “Dashboard”, “Events”, “Directory”, “Resources”.
- The reference page uses emoji as inline glyphs (📧 📞 ⚖ 📊 🎓 📅); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-dark`, `navy-medium`, `burgundy-dark`, `burgundy-medium`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `warning`, `danger`, `info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Crimson Text", Georgia, serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Crimson Text, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Inter&display=swap">
```

The reference page names Crimson Text, Inter without loading them, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.25rem, `spacing-sm` 0.5rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 2px, `border-radius-md` 4px, `border-radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `gold-light` 1.2:1, `white` 1.1:1, `gray-light` 1.2:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-107-legal-summit.html`. No component bundle: the reference page's markup is not packaged as live components.
