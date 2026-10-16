Aerospace & Defense Systems. Blend: Aerospace Engineering (80%) + Mission Control Operations (20%).

**Blend:** Aerospace 80% + Mission Control 20%  
**Temperature:** 2/10 (cool) · **Formality:** 9/10 · **Tags:** tech, professional  
**Perfect for:** Aerospace Companies, Space Industry, Aviation Tech

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Propulsion Systems”, “Environmental Control”, “Guidance & Navigation”, “Mission Event Log”.
- Buttons are short verb phrases in Title Case: “Overview”, “Telemetry”, “Systems”, “Alerts”.
- Navigation uses single nouns: “Overview”, “Telemetry”, “Systems”, “Alerts”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `status-blue`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`warning-orange`, `warning-dim`, `success-green`, `critical-red`, `caution-yellow`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Roboto, sans-serif
- `body` — "Roboto Mono", monospace

Faces are hosted on Google Fonts (Roboto, Roboto Mono); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Mono:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-2`, `heading-3`, `heading-4`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.25rem, `spacing-sm` 0.5rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 6px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `space-black` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- WCAG 2.1 AA compliant contrast ratios for mission-critical readability
- Color-blind safe status indicators (shape + color redundancy)
- Keyboard navigation for hands-on-controls environments
- Screen reader semantic structure for accessibility compliance
- High-contrast mode support for various lighting conditions

## Further guidance

### Design Principles

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PRECISION ENGINEERING AESTHETIC
- Military-grade interface precision
- SpaceX/Lockheed Martin design language
- Zero-tolerance visual accuracy
- Technical blueprint inspiration

2. MISSION-CRITICAL DATA ARCHITECTURE
- Telemetry-first information hierarchy
- System status at-a-glance readability
- Real-time monitoring capabilities
- Failure mode visualization

3. AEROSPACE COLOR PSYCHOLOGY
- Space Black (#0a0a0f): Deep space, command center ambiance
- Technical Silver (#c0c0c0): Aerospace aluminum, precision instruments
- Warning Orange (#f97316): Mission-critical alerts, system warnings
- Status Blue (#0ea5e9): Active systems, operational indicators

4. TYPOGRAPHY STRATEGY
- Roboto Mono: Technical data, telemetry readings, system codes
- Roboto: Control labels, navigation, operational text
- Monospace for precision alignment of numerical data
- Clear hierarchy for mission-critical information

5. CONTROL PANEL DENSITY
- High information density without clutter
- Organized grid systems for rapid scanning
- Modular component architecture
- Professional console-grade layout

6. COMPONENT DESIGN LANGUAGE
- Mission Status Indicators: Real-time operational states
- Telemetry Cards: Live system readings and metrics
- Timeline Trackers: Mission phase monitoring
- System Health Monitors: Component status grids
- Alert Panels: Warning and critical notification systems

7. TEMPERATURE & FORMALITY
- Cool Technical (2/10): Professional, calculated, precise
- Very High Formality (9/10): Mission-critical operations tone
- Zero frivolous design elements
- Military-grade professionalism

### Technical Implementation

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- CSS Grid for precision control panel layouts
- Subtle animations for live data updates (respectful of mission focus)
- Monospace number alignment for telemetry accuracy
- Status indicator color coding (green=nominal, blue=active, orange=caution, red=critical)
- Console-grade contrast ratios for extended monitoring sessions
- Scalable vector indicators for system health visualization

### Aerospace Industry Benchmarks

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Reference Standards:
- NASA Mission Control interface design
- SpaceX Dragon capsule UI elements
- Lockheed Martin F-35 cockpit displays
- Boeing 787 flight deck aesthetics
- ESA ground control systems

### Brand Positioning

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- This design establishes authority through:
- Military-grade precision and reliability
- Aerospace engineering visual language
- Mission-critical operational credibility
- Technical excellence and attention to detail
- Professional command center aesthetics

- Perfect for: Defense contractors, aerospace platforms, mission control systems,
- satellite operations, flight management, engineering dashboards, technical
- monitoring systems, industrial control interfaces

- ╔══════════════════════════════════════════════════════════════════════════════╗
- ║                          END DESIGN ANALYSIS                                 ║
- ╚══════════════════════════════════════════════════════════════════════════════╝

## Not synced

Built from `style-45-aerospace.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-technical`, `--font-label`.
