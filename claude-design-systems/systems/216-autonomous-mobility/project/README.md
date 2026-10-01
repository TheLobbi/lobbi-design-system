This interface embodies the future of transportation through autonomous vehicle technology. The design merges self-driving innovation, electric vehicle aesthetics, and urban mobility solutions into a cohesive system that feels both futuristic and trustworthy. Electric green represents sustainable energy, sensor blue indicates technological awareness, and road gray provides the stable foundation of infrastructure, creating an interface that inspires confidence in autonomous transportation's safety and efficiency.

**Blend:** Self-Driving Tech 55% + Electric Vehicle 30% + Urban Mobility 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** tech, professional  
**Perfect for:** Autonomous Vehicles, EV Companies, Mobility Tech

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Self-Driving Technology”, “Autonomous Features”, “Full Autonomy System”, “Zero Emission Drive”.
- Buttons are short verb phrases in Title Case: “🚗 Plan Route”, “📊 View Network”, “Clear Form”.
- Navigation uses single nouns: “Home”, “Technology”, “Safety”, “Network”.
- The reference page uses emoji as inline glyphs (🚗 🚙 ⚡ 📡 🛡 🛣); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-electric-green`, `color-sensor-blue`, `color-charging-amber`, `color-deep-black`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Electric Green (#00ff88): Sustainability, eco-friendly, energy, growth, future,
- environmental consciousness, electric power, renewable energy, clean technology
- Sensor Blue (#0099ff): Technology awareness, detection systems, intelligence,
- clarity, trust, precision, scanning capabilities, advanced sensors
- Road Gray (#374151): Infrastructure, stability, reliability, urban foundation,
- asphalt, city streets, solid engineering, dependable systems
- Charging Amber (#f59e0b): Energy transfer, warning systems, charging status,
- attention, power flow, caution indicators, system alerts
- Pure White (#ffffff): Safety, clarity, visibility, clean design, medical-grade
- Deep Black (#111827): Sophistication, luxury vehicles, premium technology

## Typography

- `display` — Rajdhani, system-ui, -apple-system, sans-serif
- `body` — "Open Sans", system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Rajdhani, Open Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&family=Open+Sans:wght@400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Rajdhani (Primary Headings & UI):
- Designed for Indian transport systems (modern mobility heritage)
- Geometric, technical appearance perfect for autonomous systems
- Strong presence suggesting reliable technology
- Excellent for data displays and dashboards
- Wide letter spacing enhances readability in motion
- Professional transport industry aesthetic

- Open Sans (Body Text & Details):
- Humanist sans-serif optimized for digital reading
- Neutral and highly legible across all devices
- Professional without being sterile
- Excellent for safety-critical information
- Wide character support for global audiences
- Trusted by transportation organizations worldwide

## Spacing, shape and elevation

- Spacing steps: `spacing-unit` 16px, `spacing-xs` 8px, `spacing-sm` 16px, `spacing-md` 24px, `spacing-lg` 36px, `spacing-xl` 52px. Pad cards and sections from these steps only.
- Corners: `border-radius` 10px, `border-radius-sm` 6px, `border-radius-full` 9999px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

1. Header: Sensor grid pattern with radar sweep animation
2. Mobility Stats: Real-time metrics with charging indicators
3. Vehicle Cards: Sensor visualization with detection zones
4. Route Table: Path optimization with traffic flow data
5. Navigation Form: Destination inputs with route planning
6. Action Buttons: Smooth acceleration-like transitions
7. Status Badges: Sensor states and charging levels
8. Footer: City skyline silhouette with route lines

## States and motion

- Smooth acceleration curves (cubic-bezier easing)
- Radar sweep animations (3s continuous)
- Charging pulse effects on power elements
- Route line drawing animations
- Sensor detection ripples
- Traffic light transitions
- Smooth deceleration on hover exit
- Regenerative feedback on interactions

Timing values: `--transition-smooth` 350ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-radar` 3000ms linear infinite.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-electric-green` 1.3:1, `color-sensor-blue` 2.9:1, `color-pure-white` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant contrast ratios (4.5:1 minimum)
- Critical safety information uses AAA standard (7:1)
- Color-blind friendly palette (green/blue distinguishable)
- Multiple indicators (not color-only)
- Large touch targets for in-vehicle use (48x48px)
- High contrast mode support
- Motion can be disabled via prefers-reduced-motion
- Voice control compatible structure
- Screen reader optimized for navigation instructions

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Sensor grid pattern with radar sweep animation
2. Mobility Stats: Real-time metrics with charging indicators
3. Vehicle Cards: Sensor visualization with detection zones
4. Route Table: Path optimization with traffic flow data
5. Navigation Form: Destination inputs with route planning
6. Action Buttons: Smooth acceleration-like transitions
7. Status Badges: Sensor states and charging levels
8. Footer: City skyline silhouette with route lines

## Further guidance

### Spatial Hierarchy

- 16px base unit (standard vehicle display sizing)
- Generous spacing for in-vehicle readability
- Grid patterns suggesting city street layouts
- Radar-like radial spacing for sensor displays
- Linear flows representing routes and paths
- Layered depth showing traffic layers

### Emotional Temperature

- Tech Balanced (5/10):
- Balanced warmth from electric green
- Cool technology from sensor blue
- Neutral gray provides stability
- Not cold like pure tech interfaces
- Not warm like consumer brands
- Professional and approachable balance
- Trust-building through measured tone

### Formality Level

- Industry Professional (7/10):
- High formality for transportation safety
- Professional enough for automotive industry
- Accessible for consumer audiences
- Credible for regulatory bodies
- Serious about safety, optimistic about future
- Balance between B2B and B2C communication

### Autonomous Vehicle Features

- Sensor radar sweep animations showing 360° awareness
- LIDAR-style detection zone visualizations
- Route optimization path displays
- Real-time traffic flow indicators
- Charging status with progress bars
- Battery level gauges
- Safety zone highlights
- Autonomous mode indicators
- Vehicle-to-vehicle communication icons

### Technical Performance

- Two optimized Google Fonts (Rajdhani & Open Sans)
- CSS animations only (no JavaScript required)
- Hardware-accelerated transforms
- Efficient SVG for sensor patterns
- Embedded CSS (minimal HTTP requests)
- Optimized for in-vehicle displays
- Responsive from mobile to dashboard screens
- Low power consumption for electric vehicles

### Safety Considerations

- High contrast for visibility in various lighting
- Clear hierarchies for critical information
- Distraction-minimized design
- Glanceable data displays
- Large, unambiguous controls
- Fail-safe color coding
- Redundant safety indicators
- Industry-standard iconography

### Brand Alignment

- Perfect for organizations focused on:
- Autonomous vehicle development
- Electric vehicle manufacturers
- Smart city transportation
- Mobility-as-a-service platforms
- Self-driving technology research
- Urban planning & transportation
- Automotive technology councils

### Use Cases

- Autonomous vehicle interfaces
- EV charging networks
- Smart city dashboards
- Mobility service platforms
- Transportation planning tools
- Vehicle fleet management
- Urban mobility councils

## Not synced

Built from `style-216-autonomous-mobility.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-electric`, `--gradient-sensor`, `--gradient-autonomous`.
