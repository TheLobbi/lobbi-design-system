Data-Driven Industry Leadership with Dark Mode Intelligence. Inspired by: NACUBO, AAMC Industry Reports, Bloomberg Terminal, Modern SaaS Dashboards 4-WAY EXPERIMENTAL BLEND: 1. Industry Council (30%): Sector influence, data aggregation, policy insights, thought leadership 2. Enterprise SaaS (25%): Modern dashboard, subscription model, cloud-native UX 3. Data Visualization (25%): Charts, metrics, trend analysis, insight generation 4. Dark Mode Design (20%): Theme toggle, dual palette, visual comfort optimization.

**Blend:** Industry Council 30% + Enterprise SaaS 25% + Data Visualization 25% + Dark Mode 20%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** tech, association, professional  
**Perfect for:** Industry Councils, Sector Leadership, Trade Forums

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Industry Insights Council”, “Sector Performance Dashboard”, “Latest Council Insights”, “Market Trends”.
- Buttons are short verb phrases in Title Case: “Download Report”, “All Sectors”, “Technology”, “Manufacturing”.
- The reference page uses emoji as inline glyphs (📊 ☀ 📈 💡 🏢 💰); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light and dark; every colour token carries both values.
- Identity colours: `bg-tertiary`, `data-blue`, `insight-purple`, `text-primary`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`, `warning-amber`, `danger-red`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- `jetbrains-mono` — "JetBrains Mono", monospace

Faces are hosted on Google Fonts (Inter, JetBrains Mono); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `heading-4`, `label`), always with the letter-spacing given.

### Type rationale

- Inter: Headings, body text, UI labels (modern SaaS standard)
- JetBrains Mono: Data values, metrics, technical insights (data precision)
- Font sizes: Clear hierarchy (14px base → 32px impact titles)
- Line heights: 1.6 for readability, 1.2 for data density

## Spacing, shape and elevation

- Spacing steps: `space-1` 4px, `space-2` 8px, `space-3` 12px, `space-4` 16px, `space-5` 20px, `space-6` 24px, `space-8` 32px, `space-10` 40px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- DATA-OPTIMIZED DASHBOARD
- Efficient spacing for maximum insight density (12px base unit)
- Card spacing: 20px gaps for organized sections
- Padding: 24px cards for professional breathing room
- Compact data tables for analytical efficiency

## States and motion

- Dark Mode Toggle: Smooth 300ms theme transition, localStorage persistence
- Hover: 2px lift + shadow expansion on cards
- Active: Gentle press feedback (scale 0.98)
- Data Points: Tooltip on hover (not implemented, CSS only)
- Loading: Pulse animation for async data

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-theme` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `bg-secondary` 1.1:1, `data-blue` 3.5:1, `success-green` 3.6:1, `text-tertiary` 2.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 Level AA contrast ratios in BOTH themes (minimum 4.5:1)
- Color + icon + text redundancy for data insights
- Keyboard navigation with visible focus states
- Dark mode reduces eye strain for extended sessions
- Screen reader support for theme toggle
- Reduced motion support for theme transitions

## Component inventory

The reference page composes these patterns from the tokens above:

1. Dark Mode Toggle: Persistent theme switcher with smooth transitions
2. Industry Metrics Cards: Key sector performance indicators
3. Data Visualization: Charts, graphs, trend lines (SVG placeholders)
4. Insights Table: Sortable council data with analysis
5. Trend Indicators: Up/down arrows, percentage changes
6. Report Cards: Downloadable industry insights, white papers

## Further guidance

### Light Mode

- --bg-primary: #faf9f7          → Professional cream, warm institutional background
- --bg-secondary: #ffffff         → Pure white cards, elevated surfaces
- --data-blue: #3b82f6            → Primary insights, data points, council blue
- --insight-purple: #7c3aed       → Secondary analysis, deep insights, strategic thinking
- --success-green: #059669        → Positive trends, growth metrics, achievements
- --warning-amber: #f59e0b        → Alerts, attention metrics, watchlist items
- --text-primary: #1e293b         → Strong hierarchy, primary content
- --text-secondary: #64748b       → Supporting text, metadata, labels
- --border-light: #e2e8f0         → Subtle divisions, card boundaries

### Dark Mode

- --bg-dark-primary: #1e1e2e      → Rich dark surface, reduced eye strain
- --bg-dark-secondary: #2a2a3e    → Elevated dark cards, layered depth
- --data-blue-dark: #60a5fa       → Brighter blue for dark backgrounds
- --insight-purple-dark: #a78bfa  → Enhanced purple for visibility
- --text-dark-primary: #e2e8f0    → High contrast light text
- --text-dark-secondary: #94a3b8  → Muted supporting text
- --border-dark: #374151          → Subtle dark borders

### Temperature

- Cool Analytical (4/10)
- Professional data-driven tone
- Balanced warmth through cream backgrounds (light mode)
- Modern SaaS friendliness
- Not cold, but focused on insights

### Formality

- High Professional (8/10)
- Industry leadership authority
- Enterprise SaaS polish
- Data-driven credibility
- Sophisticated without stuffiness

### Performance Optimizations

- Single embedded stylesheet (zero external requests)
- CSS custom properties for instant theme switching
- GPU-accelerated transitions (transform/opacity)
- localStorage theme persistence
- Semantic HTML for SEO

### Brand Positioning

- Industry thought leadership platform
- Data-driven sector insights
- Modern council operations
- Enterprise-grade analytics

### Competitive Differentiation

- More modern than traditional councils (dark mode, SaaS UX)
- More authoritative than generic SaaS (industry council credibility)
- Better data viz than legacy platforms (modern chart integration)
- More accessible than Bloomberg (dual theme support)

### Dark Mode Implementation Notes

- Uses [data-theme="dark"] attribute on <html> element
- JavaScript toggle persists preference to localStorage
- All colors defined as CSS custom properties with light/dark variants
- Smooth 300ms transition on theme change
- Charts/graphs use theme-aware colors

## Not synced

Built from `style-131-industry-council.html`. No component bundle: the reference page's markup is not packaged as live components.
