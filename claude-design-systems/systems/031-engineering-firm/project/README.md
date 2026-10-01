Engineering Firm: Engineering Firm 75% + Blueprint Technical 25%.

**Blend:** Engineering Firm 75% + Blueprint Technical 25%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** professional, tech  
**Perfect for:** Engineering Firms, Technical Services, Infrastructure

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “AECOM Engineering Solutions”, “Metro Transit Expansion - Phase 2”, “Active Project Streams”, “Resource Allocation & Team Capacity”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Resources”, “Reports”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-blueprint-blue`, `color-bright-blue`, `color-orange-accent`, `color-near-black`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (IBM Plex Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Font: IBM Plex Sans

- Rationale: Technical precision, engineered for clarity, IBM heritage

- Type Scale (Technical Precision):

- H1: 32px/38px, 600 weight, -0.02em    → Page titles, project names
- H2: 24px/30px, 600 weight, -0.01em    → Section headers
- H3: 18px/26px, 600 weight, 0em        → Card titles, subsections
- H4: 16px/24px, 500 weight, 0em        → Table headers, labels
- Body: 15px/24px, 400 weight, 0em      → Primary content
- Caption: 13px/20px, 400 weight, 0em   → Metadata, timestamps
- Label: 12px/16px, 500 weight, 0.02em  → Form labels, uppercase

- Letter-spacing Philosophy: Minimal tracking for technical precision

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px. Pad cards and sections from these steps only.
- Corners: `border-radius` 4px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Brand Fusion: Engineering Firm (75%) + Blueprint Technical (25%)

- Primary Influence: Major consultancies (AECOM, Jacobs, WSP)
- Secondary Layer: CAD/blueprint precision, technical documentation

- COLOR PSYCHOLOGY & APPLICATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Blueprint Blue (#1e40af)    → Primary brand, headers, technical trust
- Technical Gray (#374151)    → Body text, secondary elements, precision
- Orange Accent (#f97316)     → CTAs, alerts, milestone markers, energy
- White (#ffffff)             → Backgrounds, contrast, clarity

- Supporting Palette (derived):

#1e3a8a (Dark Blue)         → Hover states, depth
#3b82f6 (Bright Blue)       → Active states, interactive elements
#f3f4f6 (Light Gray)        → Backgrounds, subtle separation
#e5e7eb (Border Gray)       → Dividers, table borders
#111827 (Near Black)        → Heavy emphasis text

- Temperature: 3/10 (Cool Technical) - Professional engineering precision
- Formality: 8/10 (High Professional) - Corporate consultancy standard

## States and motion

Timing values: `--transition-fast` 100ms ease-in-out, `--transition-standard` 150ms ease-in-out, `--transition-slow` 250ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-orange-accent` 2.5:1, `color-white` 1.1:1, `color-border-gray` 1.1:1, `color-success` 3.0:1, `color-error` 4.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Spatial Grid System

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Base Unit: 4px (CAD-like precision)

- Spacing Scale:

- xs:  4px  (1 unit)  → Tight elements, inline spacing
- sm:  8px  (2 units) → Component padding, icon spacing
- md:  16px (4 units) → Card padding, section spacing
- lg:  24px (6 units) → Component margins, grid gaps
- xl:  32px (8 units) → Section separation
- 2xl: 48px (12 units)→ Major layout breaks

- Grid Philosophy: 12-column responsive grid, 24px gutters
- Container: 1280px max-width, centered, 32px horizontal padding

- COMPONENT ARCHITECTURE
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Project Timeline Component

- Purpose: Visualize project phases and milestones
- Structure: Horizontal timeline with milestone markers
- States: Completed (blue), Active (orange), Upcoming (gray)

2. Technical Specifications Card

- Purpose: Display engineering metrics and parameters
- Layout: Two-column grid, label-value pairs
- Typography: Monospace numbers for precision

3. Milestone Tracker

- Purpose: Track project deliverables and deadlines
- Visual: Progress bars with percentage indicators
- Color coding: On-track (blue), At-risk (orange), Critical (red)

4. Resource Allocation Table

- Purpose: Display team assignments and capacity
- Features: Sortable headers, status badges, utilization metrics
- Density: Compact for data-heavy display

- INTERACTION PATTERNS
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Hover States:

- Cards: Subtle shadow elevation (0 → 4px)
- Buttons: Darken 10%, slight scale (1.0 → 0.98 on active)
- Table rows: Light blue background (#eff6ff)

- Focus States:

- 2px blue outline, 2px offset
- High contrast for accessibility

- Transitions:

- Standard: 150ms ease-in-out
- Micro-interactions: 100ms
- Complex animations: 250ms ease

- ACCESSIBILITY COMPLIANCE
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- WCAG 2.1 Level AA Standards:

- ✓ Color Contrast: 7.2:1 (blue on white), 12.4:1 (gray on white)
- ✓ Focus Indicators: Visible 2px outlines on all interactive elements
- ✓ Keyboard Navigation: Full tab order, logical flow
- ✓ Screen Reader: Semantic HTML5, ARIA labels on complex components
- ✓ Touch Targets: Minimum 44x44px for all interactive elements
- ✓ Responsive Text: Scalable to 200% without horizontal scroll

- PERFORMANCE OPTIMIZATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Font Loading: Preconnect to Google Fonts, swap strategy
- CSS: Single embedded stylesheet, no external dependencies
- Layout: CSS Grid for efficient rendering
- Animations: GPU-accelerated transforms only
- Images: None (icon placeholders via CSS)

- BRAND POSITIONING
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Competitive Context: Major engineering consultancies

### Aecom

- Global infrastructure, technical excellence
- Jacobs: Connected thinking, innovation in engineering
- WSP: Future-ready engineering, sustainability focus

- Differentiators:

- → Blueprint precision in digital UI
- → CAD-inspired grid perfection
- → Technical data visualization excellence
- → Infrastructure project focus

- Target Audience:

- Project managers (engineering firms)
- Client stakeholders (infrastructure projects)
- Engineering teams (technical specialists)
- Executive leadership (strategic oversight)

### Design Decisions Rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Blueprint Blue Dominance

- Engineering heritage → Blueprint drawings → Trust and precision

2. Grid-Perfect Spacing

- CAD software influence → 4px base unit → Technical precision

3. IBM Plex Sans Typography

- IBM engineering heritage → Technical clarity → Professional credibility

4. Orange Accent Sparingly

- High visibility → Action items → Milestone markers → Energy

5. Data-Dense Tables

- Engineering workflows → Complex project data → Scannable layouts

- RESPONSIVE BREAKPOINTS
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Mobile:  < 640px  → Single column, stacked cards, simplified tables
- Tablet:  640-1024px → 2-column grid, condensed spacing
- Desktop: > 1024px → Full 12-column grid, optimal data density

- ENGINEERING-SPECIFIC PATTERNS
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Timeline Visualization:

- Horizontal progress bars
- Milestone markers (diamonds)
- Phase separators (vertical lines)
- Percentage completion indicators

- Technical Specifications:

- Label-value pairs in two columns
- Monospace numbers for precision
- Unit indicators (m², kN, MPa)
- Hierarchical grouping

- Status Indicators:

- On Schedule: Blue (#1e40af)
- In Progress: Orange (#f97316)
- Delayed: Red (#dc2626)
- Completed: Green (#16a34a)

- IMPLEMENTATION NOTES
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- CSS Architecture:

1. CSS Reset & Base Styles
2. Layout System (Grid, Container)
3. Component Styles (Header, Cards, Tables)
4. Utility Classes
5. Responsive Overrides

- HTML Structure:

- <header> → <main id="main-content"> → <footer>
- Main contains: stats-grid → content-section → data-table
- Semantic HTML5 throughout

- Future Enhancements:

- Interactive Gantt charts
- Real-time project updates
- 3D BIM model viewer integration
- PDF export for technical reports
- Multi-project comparison views

- ╔══════════════════════════════════════════════════════════════════════════════╗
- ║  Design Temperature: 3/10 (Cool Technical)                                  ║
- ║  Formality Level: 8/10 (High Professional)                                  ║
- ║  Target: Engineering consultancies, infrastructure project management       ║
- ╚══════════════════════════════════════════════════════════════════════════════╝

## Not synced

Built from `style-31-engineering-firm.html`. No component bundle: the reference page's markup is not packaged as live components.
