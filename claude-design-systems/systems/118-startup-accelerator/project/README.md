Startup Accelerator: Startup/VC Culture 60% + Mentorship Network 25% + Demo Day 15%.

**Blend:** Startup/VC Culture 60% + Mentorship Network 25% + Demo Day 15%  
**Temperature:** 7/10 (warm) · **Formality:** 5/10 · **Tags:** tech, professional  
**Perfect for:** Startup Accelerators, VC Networks, Innovation Hubs

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Welcome back, TechFlow AI!”, “🏢 Portfolio Companies”, “TechFlow AI”, “HealthConnect”.
- Buttons are short verb phrases in Title Case: “Office Hours”, “Submit Update”, “📊 Weekly Update Submit metrics”, “🎯 Book Mentor Schedule session”.
- Navigation uses single nouns: “Dashboard”, “Portfolio”, “Mentors”, “Resources”, “Demo Day”.
- The reference page uses emoji as inline glyphs (🚀 📊 🎯 📈 💰 🏢); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `growth-up`, `growth-down`, `metric-yellow`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif

Faces are hosted on Google Fonts (Inter, Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap">
```

The reference page names Inter, Roboto without loading them, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 12px, `radius-lg` 16px, `radius-xl` 24px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `bg-primary` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-118-startup-accelerator.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--primary-gradient`, `--secondary-gradient`, `--success-gradient`, `--accent-gradient`, `--mentor-gradient`, `--network-gradient`, `--demo-gradient`, `--investor-gradient`.
