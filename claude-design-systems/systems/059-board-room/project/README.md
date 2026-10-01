CORPORATE BOARD AUTHORITY + EXECUTIVE POWER. Blend Ratio: Board Room (80%) + Executive Power (20%).

**Blend:** Board Room 80% + Executive Power 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 10/10 · **Tags:** premium, professional  
**Perfect for:** Corporate Boards, Executive Councils, Leadership Groups

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Executive Summary - Q4 2025”, “Board Resolution #2025-47”, “Upcoming Meeting Agenda”, “Board Composition”.
- Buttons are short verb phrases in Title Case: “Export PDF”, “Filter”.
- Navigation uses single nouns: “Dashboard”, “Resolutions”, “Meetings”, “Directors”, “Documents”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `mahogany-dark`, `executive-cream`, `power-gold`, `navy`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `warning`, `error`, `info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

#5a3434 (Mahogany Light)    - Hierarchy, depth
#f5f3f0 (Warm White)        - Premium background
#8b7355 (Bronze)            - Secondary accents
#2c4a6e (Navy Light)        - Interactive states

## Typography

- `display` — "Libre Baskerville", serif
- `body` — Lato, sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Lato:wght@300;400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`), always with the letter-spacing given.

### Type rationale

- Primary: Libre Baskerville (Serif)
- Authoritative, traditional, board-appropriate
- High formality rating (10/10)
- Optimal legibility for resolutions and agendas

- Secondary: Lato (Sans-serif)
- Clean supporting text
- Data clarity
- UI element consistency

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px, `radius-full` 50%.

- 0.02em (refined, executive)

## States and motion

- Subtle gold underline for links
- Gentle elevation for cards (2px)
- Background shift to cream
- Smooth 200ms transitions

Timing values: `--transition-base` 200ms ease-in-out, `--transition-slow` 300ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Component inventory

The reference page composes these patterns from the tokens above:

- Time-blocked schedules
- Discussion topics
- Action item tracking
- Document attachments

## Further guidance

### Target Environment

- Board of directors portals
- Corporate governance systems
- Executive committee platforms
- Confidential decision-making interfaces

- COLOR PSYCHOLOGY & HIERARCHY

### Primary Palette

#3d1f1f (Mahogany Dark)    - Authority, tradition, gravitas
#faf8f5 (Executive Cream)   - Sophistication, clarity, prestige
#b8860b (Power Gold)        - Excellence, achievement, value
#1e3a5f (Navy)              - Trust, stability, governance

### Semantic Applications

- Mahogany: Primary headers, critical actions, authority markers
- Gold: Success metrics, achievements, premium features
- Navy: Trust indicators, governance elements
- Cream: Content backgrounds, clarity zones

### Hierarchy System

- H1: 42px/700 - Board titles, critical announcements
- H2: 32px/700 - Section headers, resolution titles
- H3: 24px/700 - Card headers, agenda items
- H4: 18px/600 - Subsections, director names
- Body: 16px/400 - General content, descriptions
- Small: 14px/300 - Metadata, timestamps, footnotes

### Line Height

- 1.7 (stately, dignified reading experience)

### Spatial Design System

- SPACING SCALE (Executive Stately):
- xs: 8px   - Tight groupings
- sm: 16px  - Related elements
- md: 24px  - Component spacing
- lg: 40px  - Section breaks
- xl: 64px  - Major divisions

### Container Widths

- Max Width: 1400px (accommodates board materials)
- Content: 1200px (optimal reading for resolutions)
- Narrow: 800px (focused documents)

### Border Radius

- 2px (minimal, authoritative)

## Not synced

Built from `style-59-board-room.html`. No component bundle: the reference page's markup is not packaged as live components.
