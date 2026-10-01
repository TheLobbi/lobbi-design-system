Philanthropy Circle: Foundation Giving 60% + Donor Network 25% + Nonprofit Excellence 15%.

**Blend:** Foundation Giving 60% + Donor Network 25% + Nonprofit Excellence 15%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium, association  
**Perfect for:** Philanthropic Circles, Donor Networks, Giving Societies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Philanthropy Circle”, “📊 Impact by Focus Area”, “⚡ Recent Activity”.
- Buttons are short verb phrases in Title Case: “Impact Dashboard”, “Grant Management”, “Donor Network”, “Events & Calendar”.
- The reference page uses emoji as inline glyphs (💰 📋 👥 ❤ 📊 ⚡); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `primary-purple`, `accent-gold`, `cream-bg`, `text-primary`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`, `warning-amber`, `info-blue`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Segoe UI", "Helvetica Neue", Arial, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-7-6` 7.6px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-10` 10px, `radius-12` 12px, `radius-20` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `text-muted` 4.1:1, `success-green` 3.7:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `user-profile-bg` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-110-philanthropy-circle.html`. No component bundle: the reference page's markup is not packaged as live components.
