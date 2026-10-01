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

Faces are hosted on Google Fonts (Lato, Open Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap">
```

The reference page names Lato, Open Sans without loading them, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px, `radius-20` 20px.
- Elevation: `shadow-soft`, `shadow-medium`, `shadow-strong`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `earth-moss` 3.4:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `terracotta-main` 2.7:1, `terracotta-light` 1.7:1, `cream-base` 1.0:1, `cream-warm` 1.1:1, `artisan-image-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-103-artisan-collective.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-accent`, `--font-modern`, `--border-thin`, `--border-medium`, `--border-thick`.
