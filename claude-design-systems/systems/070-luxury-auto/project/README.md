Premium Automotive Excellence. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Blend: 80% Luxury Auto + 20% Performance Engineering Inspired by: Porsche, Bentley, Rolls-Royce - brands that represent the pinnacle of automotive craftsmanship, where every detail is engineered for perfection and every surface communicates heritage, precision, and uncompromising quality.

**Blend:** Luxury Auto 80% + Performance Engineering 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** premium, tech  
**Perfect for:** Luxury Auto Brands, Car Dealerships, Automotive Clubs

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Luxury Automotive”, “2024 GT Performance Edition”, “White Glove Maintenance”, “Design Your Vision”.
- Buttons are short verb phrases in Title Case: “🔔 3”, “View Details”, “Configure”, “Schedule Service”.
- Navigation uses single nouns: “Dashboard”, “My Vehicles”, “Service”, “Concierge”.
- The reference page uses emoji as inline glyphs (🔍 🔔 🏎 ⚙ 🛣 ⭐); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-performance-red`, `color-british-racing-green`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Automotive Heritage Palette
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Typography

- `display` — Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Outfit); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Modern Luxury
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Font: Outfit
- Characteristics: Modern, geometric, luxury appeal
- Usage: All UI text, headings, body copy
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)

- Hierarchy:
- Display: 42px / 700 weight - Hero moments, major headings
- H1: 32px / 600 weight - Primary page headings
- H2: 24px / 600 weight - Section headings
- H3: 18px / 500 weight - Card headings, subsections
- Body: 15px / 400 weight - Standard content
- Small: 13px / 400 weight - Secondary information
- Caption: 11px / 400 weight - Metadata, labels

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md-sm` 12px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px, `space-3xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-chrome`, lowest first for resting cards, higher for hover and overlays.

- Showroom Presentation
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Scale: 4px base unit (automotive precision)
- 4px   : Minimal spacing, tight groups
- 8px   : Small spacing, related elements
- 12px  : Medium-small spacing
- 16px  : Medium spacing, standard padding
- 24px  : Medium-large spacing, card padding
- 32px  : Large spacing, section breaks
- 48px  : Extra-large spacing, dramatic reveals
- 64px  : Showroom spacing, major sections

## States and motion

- Refined Engagement
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Hover States:
- Subtle chrome border glow
- Smooth background elevation
- Performance red accent on primary actions
- 250ms transitions for premium feel

- Active States:
- Deeper shadows suggesting pressure
- British racing green for confirmations
- Performance red for critical actions

- Focus States:
- Chrome silver outline for accessibility
- Maintained luxury aesthetic
- Clear keyboard navigation support

Timing values: `--transition-fast` 150ms ease, `--transition-base` 250ms ease, `--transition-slow` 350ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-carbon-black` 1.0:1, `color-performance-red` 4.1:1, `color-british-racing-green` 1.7:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- WCAG 2.1 AA compliant contrast ratios
- Platinum text (#e8e8e8) on carbon black (#0c0c0c) = 14.2:1 contrast
- Chrome silver (#c0c0c0) on deep carbon (#151515) = 8.9:1 contrast
- Semantic HTML structure for screen readers
- Keyboard navigation support throughout
- Focus indicators maintaining luxury aesthetic

## Component inventory

The reference page composes these patterns from the tokens above:

- Automotive Excellence
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. HEADER COMPONENT
- Premium navigation with chrome accents
- Owner profile with exclusive access indicators
- Search functionality with refined styling
- Notification system for service reminders

2. STATS GRID COMPONENT
- 4-column performance dashboard
- Real-time vehicle metrics
- Service status indicators
- Ownership milestones

3. CONTENT CARDS
- Vehicle showcase with dramatic imagery
- Service scheduler with white-glove care emphasis
- Configuration tools for bespoke customization

4. DATA TABLE
- Service history with maintenance records
- Performance tracking over time
- Premium table styling with chrome borders

5. FOOTER COMPONENT
- Heritage brand information
- Concierge contact options
- Ownership resources

## Further guidance

### Core Design Principles

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SHOWROOM PRESENTATION
- Dramatic lighting gradients mimicking automotive studio photography
- Generous white space emphasizing individual elements
- Clean, uncluttered layouts allowing focus on key information
- Premium material textures (carbon fiber, brushed aluminum, leather)

2. PERFORMANCE ENGINEERING PRECISION
- Exact alignment and mathematical spacing systems
- Monospaced performance metrics for technical credibility
- Subtle engineering-inspired accent lines
- Performance data visualization with racing heritage

3. HERITAGE & CRAFTSMANSHIP
- Conservative color palette grounded in automotive tradition
- British Racing Green accent honoring racing legacy
- Chrome silver details suggesting premium metalwork
- Refined typography with modern luxury characteristics

4. OWNERSHIP EXPERIENCE
- Exclusive, members-only atmosphere
- Service and maintenance cards emphasizing white-glove care
- Configuration options reflecting bespoke customization
- Benefits presentation showcasing ownership privileges

### Primary Colors

- Carbon Black (#0c0c0c)      : Primary background, depth, luxury
- Deep Carbon (#151515)       : Elevated surfaces, card backgrounds
- Charcoal (#1a1a1a)          : Tertiary surfaces, subtle differentiation

### Metallic Accents

- Chrome Silver (#c0c0c0)     : Premium highlights, borders, icons
- Brushed Steel (#a8a8a8)     : Secondary text, muted elements
- Platinum (#e8e8e8)          : Primary text, maximum contrast

### Performance Accents

- Performance Red (#dc2626)   : Critical alerts, performance metrics
- Racing Red Dark (#991b1b)   : Hover states, active elements
- British Racing Green (#004225): Heritage accent, success states
- Racing Green Light (#065f46) : Hover states, interactive elements

### Performance Metrics

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Single font family loaded (Outfit with 5 weights)
- Embedded CSS for zero additional HTTP requests
- Semantic HTML for minimal DOM complexity
- CSS Grid and Flexbox for performant layouts
- No JavaScript dependencies for core rendering

### Brand Temperature

- Cool Powerful (4/10)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- The design maintains a cool, composed demeanor reflecting the confidence of
- premium automotive brands. Performance red provides controlled warmth for
- critical metrics, while British racing green adds heritage warmth. The overall
- temperature is deliberately cool to communicate precision, engineering, and
- uncompromising quality.

### Formality Level

- Ultra High Luxury (9/10)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- This is white-glove service territory. Every element communicates exclusivity,
- heritage, and the privilege of ownership. Language is refined, spacing is
- generous, and interactions are smooth and confident. The formality reflects
- the brands that inspired it - where every detail matters and every customer
- is treated as an honored guest.

### Responsive Considerations

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- While this demonstration is desktop-focused, production implementations would:
- Maintain luxury aesthetic across all viewport sizes
- Adapt showroom spacing for mobile contexts
- Preserve dramatic reveals through scroll animations
- Ensure touch targets meet premium interaction standards

- ╔══════════════════════════════════════════════════════════════════════════════╗
- ║              END ULTRATHINK ANALYSIS - Implementation Follows                ║
- ╚══════════════════════════════════════════════════════════════════════════════╝

## Not synced

Built from `style-70-luxury-auto.html`. No component bundle: the reference page's markup is not packaged as live components.
