Professional trading desk interface inspired by Bloomberg Terminal, Refinitiv Eikon, and modern fintech platforms. Maximizes data density while maintaining clarity through strategic use of neon accent colors and monospace typography.

**Blend:** Trading Terminal 80% + Neon Accents 20%  
**Temperature:** 2/10 (cool) · **Formality:** 8/10 · **Tags:** tech, professional  
**Perfect for:** Trading Platforms, Financial Tech, Investment Apps

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Watchlist”, “Top Gainers”, “Market News”, “Recent Orders”.
- Buttons are short verb phrases in Title Case: “All”, “Filled”, “Pending”, “Cancelled”.
- Navigation uses single nouns: “Dashboard”, “Positions”, “Orders”, “Analytics”, “Watchlist”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `neon-green`, `neon-blue`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`alert-red`, `warning-orange`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- True Black (#0a0a0a): Professional depth, reduces screen glare
- Dark Gray (#1a1a1a): Content separation without harsh contrast
- Neon Green (#00ff88): Positive movements, gains, active states
- Neon Blue (#00d4ff): Neutral information, interactive elements
- Alert Red (#ff4444): Losses, warnings, critical alerts

## Typography

- `display` — Inter, sans-serif
- `body` — "JetBrains Mono", monospace

Faces are hosted on Google Fonts (JetBrains Mono, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- JetBrains Mono: Data tables, numbers, codes (monospace for alignment)
- Inter: Labels, headings, UI elements (clarity at small sizes)
- Font sizes: 11px-14px for dense data, 16px+ for headings

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md` 12px, `space-lg` 16px, `space-xl` 24px, `space-2xl` 32px. Pad cards and sections from these steps only.
- Corners: `border-radius` 4px.

## States and motion

- Hover: Subtle neon glow on interactive elements
- Active: Pulsing indicators for live data updates
- Focus: Neon border for keyboard navigation
- Disabled: 40% opacity with desaturated colors

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `true-black` 1.0:1, `text-muted` 3.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AAA contrast on critical data (white on black: 21:1)
- Redundant encoding: Color + icons + text labels
- Keyboard navigation: Tab order follows visual hierarchy
- Screen reader: ARIA labels on dynamic data updates

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Global navigation, market status, user context
2. Stats Grid: Key performance indicators with trend indicators
3. Content Cards: Segmented data views (watchlist, positions, news)
4. Data Table: Detailed transaction/market data with sortable columns
5. Footer: Secondary actions, timestamps, system status

## Further guidance

### Core Principles

1. Information Density: Maximum data per screen with minimal chrome
2. Scan-ability: Grid layouts, aligned columns, consistent spacing
3. Status Clarity: Color-coded indicators (green=gain, red=loss, blue=neutral)
4. Professional Credibility: Dark mode reduces eye strain during extended use
5. Performance Focus: Real-time data visualization with sparklines

### Performance Optimizations

- CSS Grid for efficient layouts
- GPU-accelerated animations (transform, opacity)
- Minimal repaints through fixed positioning
- Efficient selectors (avoid deep nesting)

### Business Alignment

- Target Audience: Professional traders, financial analysts, portfolio managers
- Use Context: Extended sessions (4-12 hours), multi-monitor setups
- Success Metrics: Reduced decision latency, increased data comprehension
- Temperature: 2/10 (Cold, analytical, data-driven)
- Formality: 8/10 (High technical sophistication)

### Responsive Strategy

- Desktop-first: Optimized for 1920x1080+ displays
- Tablet: Stack stats grid to 2 columns, preserve table scroll
- Mobile: Single column, collapsible sections, simplified tables

### Inspiration Sources

- Bloomberg Terminal: Data density, color coding, modular layout
- Robinhood Gold: Modern dark mode, clean data visualization
- TradingView: Chart integration, professional aesthetics
- Stripe Dashboard: Precise spacing, clear hierarchy

- ╔══════════════════════════════════════════════════════════════════════════════╗
- ║                              END ANALYSIS                                    ║
- ╚══════════════════════════════════════════════════════════════════════════════╝

## Not synced

Built from `style-23-trading-terminal.html`. No component bundle: the reference page's markup is not packaged as live components.
