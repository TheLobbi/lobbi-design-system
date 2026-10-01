This interface embodies the strategic rigor and intellectual authority of top-tier management consulting firms (McKinsey, BCG, Bain). Every element serves a clear analytical purpose while maintaining executive-level polish.

**Blend:** Consulting Elite 80% + Minimal Precision 20%  
**Temperature:** 3/10 (cool) · **Formality:** 9/10 · **Tags:** professional  
**Perfect for:** Strategy Consultants, Management Firms, Business Advisors

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Executive Overview”, “Strategic Insights”, “Market Opportunity Analysis”, “Operational Efficiency Gains”.
- Buttons are short verb phrases in Title Case: “All Units”, “Top Performers”, “Needs Review”.
- Navigation uses single nouns: “Dashboard”, “Analytics”, “Insights”, “Reports”, “Portfolio”.
- The reference page uses emoji as inline glyphs (🔍 📊 ⚡ 🎯 ↗ ↘); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-900`, `blue-600`, `gray-50`, `green-500`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Dark Blue (#0f172a) - Authority, trust, strategic depth
- White (#ffffff) - Clarity, professional distance
- Accent Blue (#2563eb) - Insight, intelligence, precision
- Light Gray (#f1f5f9) - Organizational structure, frameworks

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Inter (Google Fonts) - Geometric precision, professional neutrality
- Weight hierarchy: 300 (data), 400 (body), 500 (labels), 600 (headings), 700 (emphasis)
- Consistent scale: 12px/14px/16px/20px/24px/32px

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-6` 6px, `space-8` 8px, `space-10` 10px, `space-16` 16px, `space-24` 24px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-8` 8px, `radius-12` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- 24px base grid system - all spacing multiples of 8 or 12
- Consistent 24px padding for all containers
- 16px gaps in grids for visual clarity
- Maximum content width: 1400px (executive readability)

## States and motion

- Hover states reveal secondary information layers
- Subtle elevation changes indicate interactivity
- Blue accent line appears on focus (strategic emphasis)
- Smooth 200ms transitions maintain professional feel

Timing values: `--transition` all 200ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `white` 1.0:1, `green-500` 2.4:1, `red-500` 3.6:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Executive navigation, global search, user context
2. Stats Grid: 4 KPI cards with trend indicators
3. Insight Cards: 3 strategic analysis summaries
4. Data Table: Sortable performance metrics
5. Footer: Structured organizational information

## Further guidance

### Temperature

- 3 (Cool Analytical)

### Formality

- 9 (Executive Professional)

### Target Audience

- C-suite executives, senior strategists, board members, management consultants

### Competitive Positioning

- Designed to compete with enterprise platforms like Tableau, PowerBI,
- SAP Analytics Cloud - but with consulting-grade polish and strategic focus.

## Not synced

Built from `style-27-consulting-elite.html`. No component bundle: the reference page's markup is not packaged as live components.
