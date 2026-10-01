This interface embodies humanity's expansion into the commercial space frontier - where aerospace engineering excellence meets international trade sophistication and technological innovation. Every element communicates the vastness of space, the precision of orbital mechanics, and the global scale of interplanetary commerce. The design draws inspiration from mission control centers, satellite imagery, orbital trajectories, rocket launches, and the infinite starfield. This is where multi-billion dollar space ventures, international trade agreements, and cutting-edge technology converge to build the off-world economy.

**Blend:** Aerospace Industry 55% + International Trade 30% + Tech Innovation 15%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** tech, professional  
**Perfect for:** Space Commerce, Aerospace Trade, Orbital Industries

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “ORBITAL TRADE ALLIANCE”, “Active Missions”, “Falcon Heavy • Mission SX-847”, “ISS Resupply • Mission CRS-28”.
- Buttons are short verb phrases in Title Case: “🚀 Request Launch”, “📊 Run Simulation”, “Reset Form”.
- Navigation uses single nouns: “Launch”, “Cargo”, “Trade”, “Alliance”.
- The reference page uses emoji as inline glyphs (🚀 📦 🛰 💰 ⚠ 📊); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-cosmic-blue`, `color-blue-light`, `color-launch-orange`, `color-silver-light`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`badge-error-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Cosmic Blue (#1e3a8a): Deep space depth, orbital authority, aerospace engineering trust,
- atmospheric layers, professional credibility, infinite possibilities, celestial navigation
- Launch Orange (#ea580c): Rocket thrust energy, ignition power, mission urgency, heat
- shields, emergency systems, critical operations, action orientation, solar flares
- Orbital Silver (#94a3b8): Metallic spacecraft surfaces, satellite materials, precision
- engineering, technical neutrality, alloy strength, professional objectivity, moonlight
- Starfield Black (#0a0a0f): Infinite space void, deep cosmos, professional seriousness,
- mission control darkness, zero-light environments, ultimate depth, astronomical scale
- Nebula Purple (#7c3aed): Innovation energy, exotic propulsion, quantum communications,
- stellar phenomena, breakthrough technologies, cosmic mystery, advanced research
- Pure White (#ffffff): Starlight, data clarity, mission-critical information, clean
- interfaces, absolute precision, communication signals

## Typography

- `display` — "Exo 2", system-ui, sans-serif
- `body` — Inter, system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Exo 2, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `label`), always with the letter-spacing given.

### Type rationale

- Exo 2 (Headings & Display):
- Futuristic geometric sans-serif perfect for space tech
- Angular letterforms suggesting aerospace engineering
- Excellent readability for mission-critical displays
- Modern technological aesthetic
- Weight variations (300-800) for hierarchy
- Sci-fi credibility without being decorative
- Professional space industry standard feel

- Inter (Body & Data):
- Neutral professional sans-serif for data clarity
- Excellent screen readability for control panels
- Precise metrics and numbers display
- International character support
- Technical documentation quality
- Professional business communication
- Clean interface text rendering

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 8px, `spacing-sm` 16px, `spacing-md` 24px, `spacing-lg` 48px, `spacing-xl` 96px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-cosmic`, lowest first for resting cards, higher for hover and overlays.

1. Mission Control Header: Orbital gradient with aerospace branding
2. Space Metrics: Launch statistics and trade volume indicators
3. Mission Cards: Commercial ventures with trajectory backgrounds
4. Cargo Manifest Table: Logistics data with orbital precision
5. Launch Sequence Forms: Mission planning and approval workflows
6. Command Buttons: Launch authorization and trade execution
7. Status Indicators: Mission phase badges and orbital states
8. Alliance Footer: International partnerships and regulatory bodies

## States and motion

- Orbital trajectory animations on hover
- Rocket thrust effects on buttons
- Smooth zero-gravity transitions
- Mission control feedback patterns
- Launch countdown sequences
- Professional aerospace restraint
- Command confirmation protocols

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 500ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 18.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-launch-orange` 3.4:1, `color-orbital-silver` 2.5:1, `color-silver-light` 1.4:1, `color-pure-white` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliance for mission data
- 4.5:1 contrast ratio minimum for all text
- 7:1 for critical telemetry readings
- Semantic HTML for screen readers
- ARIA labels on trajectory visualizations
- Keyboard navigation for operators
- Focus indicators with 3px borders
- Color-independent mission status
- Sufficient 44x44px touch targets
- International symbol recognition

## Component inventory

The reference page composes these patterns from the tokens above:

1. Mission Control Header: Orbital gradient with aerospace branding
2. Space Metrics: Launch statistics and trade volume indicators
3. Mission Cards: Commercial ventures with trajectory backgrounds
4. Cargo Manifest Table: Logistics data with orbital precision
5. Launch Sequence Forms: Mission planning and approval workflows
6. Command Buttons: Launch authorization and trade execution
7. Status Indicators: Mission phase badges and orbital states
8. Alliance Footer: International partnerships and regulatory bodies

## Further guidance

### Spatial Hierarchy

- 16px base unit for engineering precision
- 8px micro-spacing for dense telemetry
- 24px standard spacing for module separation
- 48px section spacing for mission phases
- 96px dramatic spacing for launch sequences
- 1.5 line-height for technical readability
- Grid systems based on orbital periods

### Emotional Temperature

- Vast Cold (3/10):
- Infinite space distance
- Professional aerospace objectivity
- Mission-critical seriousness
- Technical precision over emotion
- Calculated risk assessment
- Engineering confidence
- Cosmic scale perspective

### Formality Level

- High Professional (8/10):
- International aerospace standards
- Mission control professionalism
- Trade agreement formality
- Engineering protocol adherence
- Regulatory compliance communication
- Multi-national collaboration standards
- Corporate space venture polish

### Performance Optimization

- CSS gradients instead of images
- Hardware-accelerated orbital animations
- Efficient pseudo-element patterns
- Minimal repaints for live telemetry
- Optimized Google Fonts loading
- CSS custom properties for theming
- Will-change for smooth transitions
- Layer promotion for scrolling performance

### Brand Alignment

- Establishes space commerce leadership through:
- Aerospace engineering credibility
- International trade sophistication
- Technological innovation signals
- Mission control precision
- Global scale operations
- Orbital authority

### Use Cases

- Space logistics platforms
- Satellite service providers
- Launch vehicle operators
- Orbital manufacturing facilities
- Space tourism booking systems
- Asteroid mining ventures
- International space agencies
- Commercial spaceport management

### Competitive Differentiation

- Unlike standard aerospace interfaces, this design:
- Balances engineering precision with business appeal
- Visualizes orbital mechanics beautifully
- Communicates both technical and commercial value
- Signals aerospace authority and trade sophistication
- Maintains mission-critical clarity
- Projects industry leadership

### Scalability

- Component system supports:
- Multi-orbit displays
- Launch schedule tracking
- Cargo manifest management
- Mission protocol variations
- International regulatory frameworks
- White-label customization

## Not synced

Built from `style-243-space-commerce.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-cosmic`, `--gradient-launch`, `--gradient-orbital`, `--gradient-starfield`.
