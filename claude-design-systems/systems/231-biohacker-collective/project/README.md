This design embodies the quantified self movement and the intersection of biology, technology, and human optimization. The aesthetic balances clinical precision with approachable science, using data visualization principles and health monitoring interfaces as inspiration. Every element is purposeful, reflecting the biohacker's commitment to measured improvement and evidence- based decision making. The design language speaks to self-experimenters, health enthusiasts, and anyone seeking to optimize their physical and cognitive performance through technology and data.

**Blend:** Quantified Self 55% + Optimization Tech 30% + Health Data 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 6/10 · **Tags:** tech, association  
**Perfect for:** Biohacking Communities, Health Optimization, Quantified Self

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Biohacker Collective”, “Recent Data Logs”, “Log New Data”, “Active Experiments”.
- Buttons are short verb phrases in Title Case: “Log Data”, “View All Experiments”, “Log Metric”, “View Analytics”.
- Navigation uses single nouns: “Dashboard”, “Metrics”, “Experiments”, “Supplements”, “Lab Results”, “Community”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `vital-green`, `heart-red`, `data-blue`, `energy-orange`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary: Vital Green (#22c55e)
- Represents health, vitality, optimal function, growth
- Psychology: Life force, wellness, positive progress, achievement
- Usage: Success metrics, health indicators, positive trends
- Symbolism: Healthy vital signs, thriving biological systems
- Accessibility: WCAG AA compliant on white backgrounds (4.5:1)
- Associated with: Heart rate in optimal zone, good blood markers

- Secondary: Heart Red (#ef4444)
- Represents cardiovascular health, intensity, urgent alerts
- Psychology: Energy, intensity, important warnings, vital attention
- Usage: Alerts, important metrics, heart rate, critical data
- Medical context: Blood, cardiovascular system, urgent notifications
- Careful application: Used sparingly to maintain importance
- Not aggressive: Balanced to inform, not alarm unnecessarily

- Tertiary: Data Blue (#3b82f6)
- Represents analysis, cognition, mental performance, focus
- Psychology: Intelligence, trust, clarity, cognitive function
- Usage: Data displays, analytics, cognitive metrics, information
- Scientific association: Lab equipment, analytical tools, precision
- Accessibility: WCAG AA compliant for text (4.5:1)

- Quaternary: Lab White (#fafafa)
- Represents clean lab environments, clinical precision, purity
- Psychology: Cleanliness, clarity, scientific method, objectivity
- Usage: Backgrounds, clean surfaces, data containers
- Symbolism: Laboratory environment, sterile precision, clarity

- Neutral Palette:
- Pure White (#ffffff): Maximum contrast backgrounds
- Light Gray (#f5f5f5): Subtle backgrounds, cards
- Medium Gray (#737373): Secondary text, borders
- Charcoal (#262626): Primary text, strong emphasis
- Deep Black (#0a0a0a): Maximum contrast, critical text

- Data Visualization Colors:
- Sleep Blue (#60a5fa): Sleep tracking, recovery metrics
- Energy Orange (#fb923c): Energy levels, metabolism
- Focus Purple (#a78bfa): Cognitive performance, concentration
- Stress Amber (#fbbf24): Stress indicators, cortisol levels

## Typography

- `display` — Overpass, sans-serif
- `body` — "Atkinson Hyperlegible", sans-serif

Faces are hosted on Google Fonts (Overpass, Atkinson Hyperlegible); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;600;700;800&family=Atkinson+Hyperlegible:wght@400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Display/Data: Overpass (Sans-serif)
- Characteristics: Technical, precise, data-optimized, clean
- Weight range: 400 (Regular), 500 (Medium), 600 (Semibold),
- 700 (Bold), 800 (Extrabold)
- Usage: Headers, data displays, metrics, numerical information
- Rationale: Designed for highway signs—maximum clarity at a glance
- Numerals: Tabular figures for perfect data alignment
- Perfect for: Dashboard displays, metric cards, data visualization
- Line height: 1.1-1.2 for data displays, 1.3-1.4 for headers

- Body/Interface: Atkinson Hyperlegible (Sans-serif)
- Characteristics: Maximum legibility, accessibility-first design
- Weight range: 400 (Regular), 700 (Bold)
- Usage: Body text, descriptions, labels, extended reading
- Rationale: Specifically designed for low vision readers
- Special features: Greater letter differentiation, larger openings
- Perfect for: Instructions, educational content, form labels
- Line height: 1.6-1.7 for body text (optimal for comprehension)
- Accessibility: Industry-leading legibility research

- Type Scale:
- Display (3rem/48px): Hero metrics, main dashboard stats
- H1 (2.25rem/36px): Page headers, primary sections
- H2 (1.75rem/28px): Section headers, card titles
- H3 (1.25rem/20px): Subsections, metric labels
- Body (1rem/16px): Primary reading text, descriptions
- Small (0.875rem/14px): Captions, secondary information
- Tiny (0.75rem/12px): Timestamps, metadata, fine print

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-8` 8px.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

- Layout System:
- Modular grid: 12-column system with 20px gutters
- Breakpoints: Mobile (< 640px), Tablet (640-1024px), Desktop (> 1024px)
- Max width: 1600px (accommodates multi-column data displays)
- Spacing scale: 4px base unit (0.25rem) for precise alignment
- Card-based: Information organized in discrete, scannable modules

- Data Card Components:
- Sharp corners or subtle radius (4px): Clinical, precise aesthetic
- Clean borders: 1-2px solid lines for clear boundaries
- Minimal shadows: Subtle depth without distraction
- White backgrounds: Maximum clarity for data readability
- Structured padding: Consistent 24px (1.5rem) internal spacing
- Header indicators: Color-coded category markers

- Data Visualization Principles:
- Color as signal: Green (good), Red (attention), Blue (neutral)
- Progress indicators: Clear visual representation of metrics
- Trend lines: Simple sparkline-style charts
- Real-time updates: Animated state changes for live data
- Comparison views: Side-by-side metric comparisons

- Interactive Elements:
- Buttons: Clean, rectangular with minimal radius (6px)
- Hover states: Subtle color shifts, no dramatic transformations
- Active states: Clear pressed/selected appearance
- Focus indicators: 2px solid outline for keyboard navigation
- Transitions: Quick (150-250ms) for responsive feel
- Touch targets: Minimum 44x44px for accessibility

- Health Dashboard Patterns:
- Metric cards: Large numbers with context and trends
- Progress bars: Linear indicators for goals
- Status badges: Color-coded health indicators
- Data tables: Structured logs and historical data
- Charts: Line graphs for trends, bar charts for comparisons

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `vital-green` 2.2:1, `heart-red` 3.6:1, `data-blue` 3.5:1, `sleep-blue` 2.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Color Contrast:
- All text meets WCAG 2.1 AA minimum (4.5:1 ratio)
- Large text and UI components meet AA standard (3:1 ratio)
- Critical health data meets AAA standard (7:1 ratio)
- Color never sole indicator: Icons, labels, patterns supplement
- Red/green color blindness considered: Additional indicators used
- High contrast mode: Full support with border enforcement

- Typography Accessibility:
- Atkinson Hyperlegible: Specifically designed for accessibility
- Minimum text size: 16px (1rem) for body content
- Sufficient line height: 1.6+ for comfortable reading
- Letter spacing: Optimized for dyslexia-friendly reading
- Line length: 60-75 characters for optimal comprehension
- Font scaling: Supports up to 200% zoom without breaking
- Tabular numerals: Aligned data columns for easy scanning

- Interactive Accessibility:
- Keyboard navigation: Full support, logical tab order
- Focus indicators: High contrast, 2px solid outlines
- Touch targets: Minimum 44x44px on all interactive elements
- Click areas: Sufficient padding around links and buttons
- Form labels: Properly associated with all inputs
- Error messages: Clear, actionable, announced to screen readers

- Screen Reader Support:
- Semantic HTML: Proper heading hierarchy, landmarks
- ARIA labels: Descriptive labels for data visualizations
- Live regions: Dynamic data updates announced appropriately
- Alt text: Meaningful descriptions for all charts and graphs
- Table headers: Properly associated for data tables
- Status updates: Health metric changes announced clearly

- Data Visualization Accessibility:
- Pattern fills: Not relying on color alone in charts
- Data tables: Alternative to visual-only presentations
- Descriptive labels: All axes and data points labeled
- Tooltips: Keyboard accessible, announced to screen readers
- Export options: Data available in accessible formats

- Motion & Animation:
- Respects prefers-reduced-motion media query
- No auto-playing animations
- Essential animations only: Progress indicators, state changes
- Quick transitions: 150-250ms (not distracting)
- No parallax or complex motion effects
- Pause controls: For any timed content

## Component inventory

The reference page composes these patterns from the tokens above:

- Layout System:
- Modular grid: 12-column system with 20px gutters
- Breakpoints: Mobile (< 640px), Tablet (640-1024px), Desktop (> 1024px)
- Max width: 1600px (accommodates multi-column data displays)
- Spacing scale: 4px base unit (0.25rem) for precise alignment
- Card-based: Information organized in discrete, scannable modules

- Data Card Components:
- Sharp corners or subtle radius (4px): Clinical, precise aesthetic
- Clean borders: 1-2px solid lines for clear boundaries
- Minimal shadows: Subtle depth without distraction
- White backgrounds: Maximum clarity for data readability
- Structured padding: Consistent 24px (1.5rem) internal spacing
- Header indicators: Color-coded category markers

- Data Visualization Principles:
- Color as signal: Green (good), Red (attention), Blue (neutral)
- Progress indicators: Clear visual representation of metrics
- Trend lines: Simple sparkline-style charts
- Real-time updates: Animated state changes for live data
- Comparison views: Side-by-side metric comparisons

- Interactive Elements:
- Buttons: Clean, rectangular with minimal radius (6px)
- Hover states: Subtle color shifts, no dramatic transformations
- Active states: Clear pressed/selected appearance
- Focus indicators: 2px solid outline for keyboard navigation
- Transitions: Quick (150-250ms) for responsive feel
- Touch targets: Minimum 44x44px for accessibility

- Health Dashboard Patterns:
- Metric cards: Large numbers with context and trends
- Progress bars: Linear indicators for goals
- Status badges: Color-coded health indicators
- Data tables: Structured logs and historical data
- Charts: Line graphs for trends, bar charts for comparisons

## Further guidance

### Temperature & Formality Ratings

- Temperature: 5/10 (Clinical Balanced)
- Cool color palette (blues, greens) creates focused atmosphere
- Not cold: Warmed by green vitality and purposeful orange accents
- Professional medical aesthetic without being sterile
- Balanced: Approachable science, not intimidating lab
- Emotional tone: Focused, motivated, empowered, objective
- Energy: Steady, measured, purposeful—not hyperactive
- Appropriate for: Health tech, fitness apps, wellness platforms,
- medical dashboards, research communities

- Formality: 6/10 (Professional Scientific)
- Professional enough for medical/health contexts
- Scientific precision without academic stuffiness
- Data-driven formality—serious about metrics
- Accessible expertise: Knowledgeable but not exclusive
- Not casual: Information is important and treated seriously
- Not corporate: More lab/clinic than boardroom
- Tone: Expert community, peer-reviewed, evidence-based

### Performance Considerations

- Lightweight: Minimal CSS, no heavy frameworks
- Fast loading: Critical CSS inline, fonts optimized
- Efficient animations: GPU-accelerated transforms
- Lazy loading: Off-screen content loads on demand
- Data efficiency: Optimized for real-time metric updates
- Battery conscious: Minimal processing for mobile devices

### Health Data Privacy & Ethics

- Privacy by design: Data security reflected in UI trust
- Clear consent: Transparent about data usage
- User control: Easy data export and deletion
- No dark patterns: Honest, straightforward interface
- Evidence-based: Claims backed by research
- Medical disclaimer: Clear about informational nature

### Use Cases

- Personal health dashboards
- Fitness and activity tracking
- Sleep and recovery monitoring
- Nutrition and meal logging
- Supplement and medication tracking
- Cognitive performance monitoring
- Biometric data visualization
- Lab result interpretation
- Health goal tracking
- Wellness community platforms

## Not synced

Built from `style-231-biohacker.html`. No component bundle: the reference page's markup is not packaged as live components.
