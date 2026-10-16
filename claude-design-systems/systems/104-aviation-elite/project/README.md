Aviation Elite: Private Aviation 60% + Aerospace Engineering 25% + VIP Concierge 15%.

**Blend:** Private Aviation 60% + Aerospace Engineering 25% + VIP Concierge 15%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** premium, tech  
**Perfect for:** Private Aviation, Jet Services, Executive Travel

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Flight Operations Center”, “📋 Book Your Flight”, “✈️ Fleet Overview”, “Gulfstream G650ER”.
- Buttons are short verb phrases in Title Case: “Quick Book →”, “Search Available Aircraft”, “Save as Template”, “View All Aircraft”.
- Navigation uses single nouns: “Dashboard”, “Fleet”, “Book Flight”, “Safety”, “Privileges”.
- The reference page uses emoji as inline glyphs (✈ 🛫 🛡 👥 📋 🛩); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `gold-subtle`, `gold-dark`, `off-white`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `warning`, `error`, `info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Georgia, "Times New Roman", serif
- `body` — -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 0.25rem, `border-radius-md` 0.375rem, `border-radius-lg` 0.5rem, `border-radius-xl` 0.75rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-gold`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `silver-dark` 3.6:1, `error` 3.6:1, `info` 4.2:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `midnight-blue` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-104-aviation-elite.html`. No component bundle: the reference page's markup is not packaged as live components.
