Artisan Collective: Craftsman Guild 60% + E-commerce Modern 25% + Organic Natural 15%.

**Blend:** Craftsman Guild 60% + E-commerce Modern 25% + Organic Natural 15%  
**Temperature:** 7/10 (warm) · **Formality:** 5/10 · **Tags:** creative, association  
**Perfect for:** Artisan Collectives, Craft Guilds, Maker Communities

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Artisan Collective”, “Where Craftsmanship Meets Community”, “Featured Master Artisans”, “Elena Rodriguez”.
- Buttons are short verb phrases in Title Case: “View Details”, “View Details”, “View Details”, “View Details”.
- Navigation uses single nouns: “Marketplace”, “Artisans”, “Workshops”, “Certifications”, “About”, “Join Us”.
- The reference page uses emoji as inline glyphs (🔨 🪵 🏆 🌱 ⭐ 🏺); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `terracotta-dark`, `terracotta-main`, `terracotta-light`, `cream-base`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Georgia, Garamond, serif
- `body` — Lato, "Open Sans", sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px, `radius-20` 20px.
- Elevation: `shadow-soft`, `shadow-medium`, `shadow-strong`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-103-artisan-collective.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-accent`, `--font-modern`, `--border-thin`, `--border-medium`, `--border-thick`.
