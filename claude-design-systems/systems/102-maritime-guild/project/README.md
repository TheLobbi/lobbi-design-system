Maritime Guild: Nautical Heritage 60% + Trade Association 25% + Luxury Yacht 15%.

**Blend:** Nautical Heritage 60% + Trade Association 25% + Luxury Yacht 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** association, premium  
**Perfect for:** Maritime Associations, Shipping Guilds, Nautical Societies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “International Maritime Guild”, “🎖️ Certification Dashboard”, “🚢 Fleet Registry”, “📚 Training & Development”.
- Buttons are short verb phrases in Title Case: “Request Certification”, “Register Vessel”, “Book Training”, “View Documents”.
- Navigation uses single nouns: “Dashboard”, “Fleet Registry”, “Certifications”, “Events”, “Training”, “Resources”.
- The reference page uses emoji as inline glyphs (⚓ 🎖 🚢 ⛴ 🛳 📚); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-dark`, `navy-light`, `brass-dark`, `brass-light`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Georgia, Garamond, serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-10` 10px, `radius-15` 15px, `radius-full` 50%.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `brass-medium` 3.1:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `brass-light` 2.2:1, `cream-dark` 1.1:1, `cream-light` 1.0:1, `white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-102-maritime-guild.html`. No component bundle: the reference page's markup is not packaged as live components.
