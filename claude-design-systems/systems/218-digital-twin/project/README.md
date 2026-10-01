This design system represents the convergence of physical and digital worlds, creating an interface that feels like a living mirror of reality. It emphasizes real-time data synchronization, simulation accuracy, and the duality between the real and virtual. The aesthetic is technical yet sophisticated, with a strong emphasis on data visualization and system monitoring.

**Blend:** Mirror World 55% + Simulation Tech 30% + Real-Time Data 15%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** tech, professional  
**Perfect for:** Digital Twin Tech, Simulation Companies, IoT Platforms

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Real-Time Infrastructure”, “Virtual Mirror”, “Digital Twin Registry”, “System Monitor”.
- Buttons are short verb phrases in Title Case: “NEW TWIN”, “CREATE”, “SIMULATE”, “DIAGNOSTICS”.
- Navigation uses single nouns: “Dashboard”, “Twins”, “Simulations”, “Analytics”, “Settings”.
- The reference page uses emoji as inline glyphs (⚠ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `cyan-primary`, `cyan-light`, `cyan-dark`, `purple-primary`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Twin Cyan (#00bcd4): Digital precision, real-time data, clarity
- Mirror Silver (#b0bec5): Reflection, neutrality, technological elegance
- Simulation Purple (#9c27b0): Virtual reality, computation, advanced tech
- Data Green (#4caf50): Active connections, live data, system health

## Typography

- `display` — Poppins, system-ui, -apple-system, sans-serif
- `roboto-mono` — "Roboto Mono", monospace

Faces are hosted on Google Fonts (Roboto Mono, Poppins); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `label`, `button`), always with the letter-spacing given.

### Type rationale

- Roboto Mono (Technical): Monospace font for code, data, and technical info.
- Conveys precision, system monitoring, and computational accuracy.
- Poppins (UI): Modern geometric sans-serif for interface elements, headings,
- and user-facing content. Balances technical precision with usability.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 6px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- Split-screen layouts for physical/digital comparison
- Modular card system with data streaming capabilities
- Grid-based spacing (8px base) for precision alignment
- Sharp corners (4px) emphasizing technical precision
- Data visualization priority with live updating elements

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `cyan-primary` 2.1:1, `green-data` 2.5:1, `gray-400` 1.7:1, `gray-600` 4.2:1, `white` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AA contrast maintained (4.5:1 minimum)
- High contrast mode for technical readability
- Focus indicators with 3px outline for visibility
- Monospace fonts sized appropriately (14px min) for readability
- Status indicators use icons + color for redundancy
- Screen reader announcements for real-time data updates

## Component inventory

The reference page composes these patterns from the tokens above:

- Split-screen layouts for physical/digital comparison
- Modular card system with data streaming capabilities
- Grid-based spacing (8px base) for precision alignment
- Sharp corners (4px) emphasizing technical precision
- Data visualization priority with live updating elements

## Further guidance

### Digital Twin Consortium Design System

- Style ID: 218

### Temperature & Formality

- Temperature: 4/10 (Tech Cool) - Clinical, precise, data-focused
- Formality: 8/10 - Professional, enterprise-grade, technical authority

## Not synced

Built from `style-218-digital-twin.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-ui`.
