Futuristic Command Interface: This design system channels the aesthetic of advanced space command centers, holographic displays, and tactical information systems. The interface presents complex data with clarity while maintaining the immersive feel of cutting-edge technology. Every element suggests precision, advanced engineering, and interstellar exploration.

**Blend:** Sci-Fi Interface 55% + Holographic HUD 25% + Space Command 20%  
**Temperature:** 3/10 (cool) · **Formality:** 7/10 · **Tags:** tech, creative  
**Perfect for:** Tech Companies, Gaming Studios, Futuristic Brands

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “◢ SCI-FI COMMAND CENTER ◣”, “◢ ACTIVE MISSIONS ◣”, “Deep Space Reconnaissance”, “Resource Extraction”.
- Buttons are short verb phrases in Title Case: “► Execute Command”, “✓ Verify Systems”, “✕ Abort”.
- Navigation uses single nouns: “Systems”, “Tactical”, “Crew”, “Navigation”, “Comms”.
- The reference page uses emoji as inline glyphs (⚡ 🛡 🎯 🚀 ⚠); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-navy`, `color-cyan`, `color-blue`, `color-orange`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`badge-critical-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Orbitron, sans-serif
- `body` — Rajdhani, sans-serif

Faces are hosted on Google Fonts (Orbitron, Rajdhani); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Headings: Orbitron - Geometric, futuristic, technical precision
- Body: Rajdhani - Clean, readable, slightly condensed for data density
- Monospace: Used for codes, coordinates, technical readouts

- EXPERIENTIAL METRICS

- Temperature: 3/10 (Cool - Clinical precision, advanced technology)
- Formality: 7/10 (Formal - Military/technical command structure)
- Energy: 8/10 (High - Dynamic, alert, mission-focused)
- Innovation: 10/10 (Maximum - Cutting-edge future technology)

- ACCESSIBILITY STANDARDS

- WCAG 2.1 AA Compliance:
- Enhanced contrast for glowing elements on dark backgrounds
- Minimum 4.5:1 ratio maintained despite glow effects
- Focus indicators use multiple visual cues (glow + border)
- Motion can be disabled for accessibility preferences
- Clear visual hierarchy without relying solely on color

- USE CASES

- Sci-fi game interfaces and dashboards
- Space exploration applications
- Tech product demonstrations
- Futuristic data visualization platforms
- Cyberpunk and techno-themed projects
- Military/tactical simulation interfaces

- INTERACTION PATTERNS

- Hover states intensify glow effects
- Click feedback with pulse animations
- Data updates with slide-in transitions
- Alert states trigger color shifts and pulses
- Loading states use scan line animations
- Menu reveals with geometric wipes

- TECHNICAL NOTES

- Multiple box-shadow layers for glow depth
- CSS animations for scan lines and pulses
- Transform3d for holographic depth effects
- Backdrop-filter for glass morphism
- Grid systems for precise technical layouts
- CSS custom properties for dynamic theming

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 8px.
- Elevation: `glow-sm`, `glow-md`, `glow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 0.2s ease, `--transition-medium` 0.3s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-gray` 4.2:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-navy` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-198-sci-fi-hud.html`. No component bundle: the reference page's markup is not packaged as live components.
