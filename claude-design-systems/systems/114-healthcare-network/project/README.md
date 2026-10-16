Healthcare Network: Medical Professional 60% + Continuing Education 25% + Peer Collaboration 15%.

**Blend:** Medical Professional 60% + Continuing Education 25% + Peer Collaboration 15%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** professional, association  
**Perfect for:** Healthcare Networks, Medical Associations, Clinical Groups

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “MedConnect Pro”, “Welcome back, Dr. Rodriguez”, “Recent Activity”, “🔒 HIPAA Compliance & Data Security”.
- Buttons are short verb phrases in Title Case: “Export Report”, “Log Credits”, “Add Credential”, “Connect”.
- Navigation uses single nouns: “Dashboard”, “CME Tracking”, “Credentials”, “Peer Directory”, “Events”.
- The reference page uses emoji as inline glyphs (⚕ 🔔 📚 👥 📅 📊); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `primary-blue`, `light-blue`, `medical-green`, `pending-status`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`, `alert-red`, `warning-amber`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Segoe UI", Tahoma, Geneva, Verdana, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-xxl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `medical-green` 3.0:1, `medium-gray` 4.4:1, `verified-badge` 3.0:1, `expired-status` 4.3:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `warning-amber` 1.5:1, `white` 1.1:1, `pending-status` 1.5:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-114-healthcare-network.html`. No component bundle: the reference page's markup is not packaged as live components.
