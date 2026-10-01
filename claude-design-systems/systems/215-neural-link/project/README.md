This interface represents the convergence of neuroscience and technology, visualizing brain-computer interface concepts through synaptic patterns, neural network aesthetics, and clinical precision. The design balances scientific credibility with approachability, using neural purple and synapse blue to create a trustworthy, cutting-edge atmosphere that communicates both medical professionalism and technological innovation.

**Blend:** Brain-Computer Interface 55% + Synaptic Patterns 30% + Clinical Precision 15%  
**Temperature:** 4/10 (cool) · **Formality:** 7/10 · **Tags:** tech, academic  
**Perfect for:** Neurotechnology, BCI Research, Cognitive Science

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Brain-Computer Interface”, “Neural Technology Features”, “Direct Neural Interface”, “Neural Network Mapping”.
- Buttons are short verb phrases in Title Case: “⚡ Initialize Interface”, “📊 View Protocols”, “Reset Configuration”.
- Navigation uses single nouns: “Home”, “Research”, “Technology”, “Connect”.
- The reference page uses emoji as inline glyphs (⚡ 🧠 🔗 📡 📊 💜); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-synapse-blue`, `color-neural-purple`, `color-connection-green`, `color-deep-neural`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Synapse Blue (#00a8ff): Intelligence, neural activity, electrical signals,
- trust, medical technology, cognitive clarity, information transmission
- Neural Purple (#8b5cf6): Innovation, brain function, premium technology,
- consciousness, advanced science, neural plasticity, thought processes
- Cerebral Gray (#6b7280): Neutral substrate, gray matter, balanced thinking,
- professional reliability, mental clarity, measured approach
- Signal White (#ffffff): Purity, clinical environment, clarity, medical safety
- Connection Green (#10b981): Active connections, healthy neural pathways
- Deep Neural (#4c1d95): Deep learning, consciousness, neural depth

## Typography

- `display` — "Fira Code", "Courier New", monospace
- `body` — Nunito, system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Fira Code, Nunito); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Nunito:wght@400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Fira Code (Data & Technical Elements):
- Monospaced font designed for code and technical data
- Perfect for displaying neural signals and data streams
- Clear distinction between characters crucial for precision
- Professional technical aesthetic
- Excellent for numerical displays and metrics

- Nunito (Primary UI & Body):
- Rounded, friendly sans-serif for approachability
- Balances technical precision with warmth
- Highly legible for extended reading
- Reduces intimidation factor of complex neuroscience
- Professional yet accessible for diverse audiences

## Spacing, shape and elevation

- Spacing steps: `spacing-unit` 16px, `spacing-xs` 8px, `spacing-sm` 16px, `spacing-md` 24px, `spacing-lg` 36px, `spacing-xl` 52px. Pad cards and sections from these steps only.
- Corners: `border-radius` 12px, `border-radius-sm` 8px, `border-radius-full` 9999px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

1. Header: Neural network pattern background with connection nodes
2. Neural Stats: Connection pulse animations showing activity
3. Synaptic Cards: Node-based layouts with branching connections
4. Signal Table: Data stream visualization with pulse indicators
5. Interface Form: Clean clinical inputs with neural validation
6. Neural Buttons: Pulse effects on hover simulating signals
7. Status Nodes: Circular badges representing neural nodes
8. Footer: Synaptic connection pattern divider

## States and motion

- Pulse animations on neural nodes (1.5s intervals)
- Connection line animations showing signal flow
- Glow effects suggesting electrical activity
- Smooth transitions between states (250ms)
- Ripple effects from interaction points
- Node expansion on hover
- Signal propagation animations
- Synaptic delay timing (realistic 0.5-2ms simulation)

Timing values: `--transition-synapse` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-pulse` 1500ms ease-in-out infinite.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-synapse-blue` 2.5:1, `color-neural-purple` 4.1:1, `color-signal-white` 1.0:1, `color-connection-green` 2.5:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AAA compliant contrast ratios (7:1 minimum)
- Animations respect prefers-reduced-motion
- Color-blind friendly palette (blue/purple distinguishable)
- Large touch targets (48x48px minimum)
- Clear focus indicators (3px solid borders)
- Semantic HTML for screen readers
- Neural patterns are decorative, not informational
- Alternative text for all meaningful graphics
- Keyboard navigation fully supported

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Neural network pattern background with connection nodes
2. Neural Stats: Connection pulse animations showing activity
3. Synaptic Cards: Node-based layouts with branching connections
4. Signal Table: Data stream visualization with pulse indicators
5. Interface Form: Clean clinical inputs with neural validation
6. Neural Buttons: Pulse effects on hover simulating signals
7. Status Nodes: Circular badges representing neural nodes
8. Footer: Synaptic connection pattern divider

## Further guidance

### Spatial Hierarchy

- 16px base unit (clinical standard)
- Node-based spacing creating network feel
- Connections between related elements
- Layered depth showing neural layers
- Radial layouts for neural networks
- Grid systems representing electrode arrays

### Emotional Temperature

- Clinical Cool (4/10):
- Blue and purple create cool, technological feel
- Clinical white provides sterile, safe environment
- Not warm, but not coldly alienating
- Professional medical-tech balance
- Approachable through rounded typography
- Trust-building through clarity and precision

### Formality Level

- Medical Professional (7/10):
- High formality appropriate for medical technology
- Scientific credibility paramount
- Professional enough for clinical settings
- Accessible to patients and researchers
- Balanced between academic and commercial
- Trustworthy for sensitive brain interface technology

### Neural Interface Features

- Synaptic connection lines between related cards
- Pulsing node animations suggesting neural activity
- Network graph backgrounds
- Signal flow visualizations
- Electrode array patterns
- Brain wave inspired curves
- Neural pathway routing graphics
- Dendrite-like branching structures

### Technical Performance

- Two optimized Google Fonts
- CSS animations only (GPU accelerated)
- Embedded CSS (no additional requests)
- Efficient keyframe animations
- Transform-based effects for performance
- Minimal repaints/reflows
- CSS Grid for efficient layouts
- Optimized SVG for neural patterns

### Scientific Accuracy

- Color palette based on actual neural imaging
- Timing delays match real synaptic delays
- Network patterns reflect actual neural topology
- Professional terminology throughout
- Respects medical device design standards
- Appropriate for FDA-regulated interfaces

### Brand Alignment

- Perfect for organizations focused on:
- Brain-computer interface development
- Neurotechnology research
- Medical device companies (neural implants)
- Cognitive enhancement platforms
- Neural prosthetics
- Brain mapping initiatives
- Consciousness research labs

### Use Cases

- Neural implant company portals
- BCI research platforms
- Neurotechnology dashboards
- Medical device interfaces
- Brain mapping software
- Cognitive assessment tools
- Neural data visualization

## Not synced

Built from `style-215-neural-link.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-neural`, `--gradient-synapse`, `--gradient-deep`, `--font-technical`.
