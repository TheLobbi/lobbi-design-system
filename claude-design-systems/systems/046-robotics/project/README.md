Robotics: Robotics 75% + Industrial Clean 25%.

**Blend:** Robotics 75% + Industrial Clean 25%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** tech  
**Perfect for:** Robotics Companies, Automation Tech, AI Hardware

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “RoboFleet Control Center”, “Active Robot Fleet”, “System Alerts”, “Live Sensor Data”.
- Buttons are short verb phrases in Title Case: “Emergency Stop”, “Control”, “Control”, “Details”.
- The reference page uses emoji as inline glyphs (⚙ 📊 ⏱ 🔧 🔋 📡); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `electric-orange`, `deep-dark`, `status-operational`, `status-maintenance`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`status-warning`, `status-critical`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "DM Sans", system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (DM Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `body`, `label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px. Pad cards and sections from these steps only.
- Corners: `radius-3` 3px, `radius-4` 4px, `radius-8` 8px, `radius-12` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease, `--transition-base` 200ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-46-robotics.html`. No component bundle: the reference page's markup is not packaged as live components.
