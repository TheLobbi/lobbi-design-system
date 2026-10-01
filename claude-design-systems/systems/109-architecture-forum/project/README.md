Architecture Forum: Architect Portfolio 60% + Professional Network 25% + Urban Planning 15%.

**Blend:** Architect Portfolio 60% + Professional Network 25% + Urban Planning 15%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** professional, creative  
**Perfect for:** Architect Associations, Design Forums, Urban Planning

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Professional Architecture Network”, “Featured Projects”, “Metropolitan Tower Complex”, “National Arts Museum Extension”.
- Buttons are short verb phrases in Title Case: “Submit Project”, “All Events”, “Conferences”, “Workshops”.
- Navigation uses single nouns: “Portfolio”, “Credentials”, “Competitions”, “Education”, “Urban Planning”, “Resources”.
- The reference page uses emoji as inline glyphs (🏢 ⭐ 👁 🏛 🏘 🎓); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `blueprint-blue`, `light-blue`, `text-primary`, `status-active-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Segoe UI", Tahoma, Geneva, Verdana, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-8` 8px, `radius-full` 50%.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-109-architecture-forum.html`. No component bundle: the reference page's markup is not packaged as live components.
