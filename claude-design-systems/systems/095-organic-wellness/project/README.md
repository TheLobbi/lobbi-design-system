Organic Wellness: Biophilic Design 60% + Spa Serenity 25% + Sustainable Tech 15%.

**Blend:** Biophilic Design 60% + Spa Serenity 25% + Sustainable Tech 15%  
**Temperature:** 8/10 (warm) · **Formality:** 5/10 · **Tags:** hospitality, creative  
**Perfect for:** Wellness Brands, Organic Products, Eco Lifestyle

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “🌿 Organic Wellness Hub”, “📈 Weekly Activity Overview”, “Active Minutes”, “📅 Upcoming Wellness Classes”.
- Buttons are short verb phrases in Title Case: “📊 View Reports”, “🎯 Set Goals”, “➕ Log Activity”, “Week”.
- The reference page uses emoji as inline glyphs (🌿 📊 🎯 ➕ 👟 ❤); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `forest-deep`, `leaf-fresh`, `terra-warm`, `stone-light`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Georgia, "Times New Roman", serif
- `body` — "Segoe UI", system-ui, -apple-system, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 12px, `radius-md` 20px, `radius-lg` 32px.
- Elevation: `shadow-leaf`, `shadow-floating`, `shadow-lifted`, `shadow-inner`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-smooth` all 0.4s cubic-bezier(0.4, 0, 0.2, 1), `--transition-organic` all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-95-organic-wellness.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-nature`, `--gradient-sunset`, `--gradient-earth`, `--gradient-zen`, `--radius-organic`.
