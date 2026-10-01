Space Pioneers: Space Industry 60% + Scientific Community 25% + Advocacy Platform 15%.

**Blend:** Space Industry 60% + Scientific Community 25% + Advocacy Platform 15%  
**Temperature:** 4/10 (cool) · **Formality:** 7/10 · **Tags:** tech, academic  
**Perfect for:** Space Organizations, Aerospace Advocacy, Space Tech

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Advancing Humanity Beyond Earth”, “Mission Control Dashboard”, “Project Artemis II”, “Europa Clipper”.
- Buttons are short verb phrases in Title Case: “Join Alliance”, “Grid”, “Timeline”, “Map”.
- Navigation uses single nouns: “🚀 Space Pioneers Alliance”, “Missions”, “Research”, “Projects”, “Events”, “Advocacy”.
- The reference page uses emoji as inline glyphs (🚀 🌍 📅 🪐 🌙 🔴); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `space-black`, `nebula-purple`, `nebula-light`, `star-white`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`alert-red`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Segoe UI", system-ui, -apple-system, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-10` 10px, `radius-12` 12px, `radius-20` 20px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-120-space-pioneers.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--nebula-gradient`, `--cosmic-gradient`, `--star-glow`.
