This interface visualizes the concept of interconnected neural networks - representing data flow, connected nodes, and intelligent systems. The design emphasizes the beauty of connections, the flow of information, and the emergence of intelligence from networked components. Inspired by neural architecture diagrams and data visualization.

**Blend:** Neural Visualization 55% + Data Flow 25% + Tech Abstract 20%  
**Temperature:** 4/10 (cool) · **Formality:** 7/10 · **Tags:** tech, academic  
**Perfect for:** AI Research, Data Science, Neural Networks

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Neural Network Dashboard”, “Network Activity”, “Core Network Optimization”, “Data Stream Analysis”.
- Buttons are short verb phrases in Title Case: “⬡ Deploy Node”, “⚙ Test Configuration”, “Cancel”.
- Navigation uses single nouns: “Network”, “Nodes”, “Flow”, “Analytics”.
- The reference page uses emoji as inline glyphs (⚡ ⚠ ⚙ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `color-cyan`, `color-purple`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`badge-error-bg`, `badge-warning-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Blue (#0f172a): Foundation, stability, neural depth
- Cyan Connections (#06b6d4): Data flow, active connections, information streams
- Purple Nodes (#8b5cf6): Processing centers, intelligence points, key nodes
- Dark Background (#020617): Technical environment, focus, reduced eye strain
- Accent Teal (#14b8a6): Highlights, active states, successful processing

## Typography

- `display` — "Space Grotesk", system-ui, -apple-system, sans-serif
- `body` — "DM Sans", system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Space Grotesk, DM Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Space Grotesk (Headings):
- Geometric precision suggesting computational accuracy
- Technical character with modern sophistication
- Strong presence establishing clear hierarchy
- Wide letter spacing suggesting open architecture

- DM Sans (Body):
- Clean technical readability for data display
- Geometric consistency matching the design system
- Excellent legibility in dark mode contexts
- Balanced proportions for dense information

## Spacing, shape and elevation

- Spacing steps: `spacing-unit` 16px, `spacing-sm` 16px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 4px, `border-radius-md` 8px, `border-radius-lg` 12px.
- Elevation: `glow-cyan`, `glow-purple`, `glow-teal`, lowest first for resting cards, higher for hover and overlays.

1. Header: Network topology navigation with connection indicators
2. Neural Stats: Node performance metrics with flow visualization
3. Connection Cards: Data stream cards with network patterns
4. Flow Table: Network activity with connection status
5. Network Form: Topology configuration inputs
6. Action Nodes: Interactive connection buttons
7. Status Signals: Network health indicators
8. Footer: Distributed network information

## States and motion

- Pulse animations suggesting active data flow
- Hover states revealing connection pathways
- Smooth transitions mimicking neural signal propagation
- Glow effects indicating node activation
- Connected element relationships through visual linking

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 400ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 20.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-gray-light` 4.2:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-darker-blue` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant contrast ratios (minimum 4.5:1)
- High contrast dark mode optimized for accessibility
- Semantic HTML supporting assistive technologies
- Keyboard navigation with clear focus indicators
- Sufficient touch targets (44x44px minimum)
- Motion reduction support for animations

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Network topology navigation with connection indicators
2. Neural Stats: Node performance metrics with flow visualization
3. Connection Cards: Data stream cards with network patterns
4. Flow Table: Network activity with connection status
5. Network Form: Topology configuration inputs
6. Action Nodes: Interactive connection buttons
7. Status Signals: Network health indicators
8. Footer: Distributed network information

## Further guidance

### Spatial Hierarchy

- 16px base spacing unit (pixel-perfect technical grid)
- Hexagonal grid inspiration from neural architecture
- Network-based layouts suggesting data flow
- Layered depth creating 3D network perception

### Emotional Temperature

- Cool Technical (4/10):
- Dark color palette reducing emotional warmth
- Technical precision over emotional connection
- Data-centric visualization prioritizing information
- Professional distance appropriate for analytical context

### Formality Level

- High Technical (7/10):
- Precise technical language and terminology
- Academic rigor in presentation
- Professional data visualization standards
- Formal system architecture communication

### Performance Optimization

- Optimized Google Fonts loading strategy
- GPU-accelerated animations for smooth performance
- Efficient CSS Grid calculations
- Minimal DOM complexity for fast rendering
- CSS custom properties for dynamic theming

### Brand Alignment

- Establishes technical credibility through:
- Neural network visual metaphors
- Data flow visualization patterns
- Technical precision and accuracy
- Advanced system architecture representation

### Use Cases

- Machine learning dashboards
- Network monitoring systems
- Data flow visualization platforms
- Neural architecture design tools
- Distributed system management
- AI model training interfaces
- Research laboratory systems

### Competitive Differentiation

- Unlike traditional dashboards, this design:
- Visualizes data as flowing networks
- Emphasizes connections over isolated metrics
- Uses neural network metaphors throughout
- Creates depth through layered visualization
- Balances technical precision with aesthetic appeal

### Scalability

- Component system supports:
- Additional network nodes without complexity
- Dynamic connection visualization
- Responsive layouts maintaining network perception
- Theme variations for different network types
- Modular visualization components

## Not synced

Built from `style-207-neural-network.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--spacing-xs`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`.
