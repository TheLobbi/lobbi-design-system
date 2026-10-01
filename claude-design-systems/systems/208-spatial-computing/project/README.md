This interface explores the emerging paradigm of spatial computing - designing for three-dimensional, immersive experiences where digital content exists in physical space. The design emphasizes depth perception, translucent layers, spatial awareness, and interface elements that feel like they float in 3D space. Inspired by AR/VR interfaces, spatial OS designs, and Vision Pro experiences.

**Blend:** Spatial UI 55% + AR/VR Interface 25% + 3D Space 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 6/10 · **Tags:** tech, creative  
**Perfect for:** AR/VR Companies, Spatial Computing, 3D Platforms

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Spatial Computing Interface”, “Spatial Layers”, “Main Interface Surface”, “Contextual Information”.
- Buttons are short verb phrases in Title Case: “◊ Create Element”, “👁 Preview”, “Cancel”.
- Navigation uses single nouns: “Space”, “Depth”, “Layers”, “Settings”.
- The reference page uses emoji as inline glyphs (⚡ ⏱ 👁 🌟 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-deep-space`, `color-spatial-purple`, `color-cyan-highlight`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`badge-warning-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Translucent White (rgba(255, 255, 255, 0.7)): Glass panels, spatial surfaces
- Deep Space Blue (#1a1f3a): Immersive background, spatial depth
- Spatial Purple (#6366f1): Interactive elements, focus indicators
- Ambient Gray (#e5e7eb): Subtle surfaces, spatial definition
- Highlight Cyan (#06b6d4): Active elements, spatial highlights

## Typography

- `display` — Outfit, system-ui, -apple-system, sans-serif
- `body` — Inter, system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Outfit, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Outfit (Headings):
- Geometric forms creating clear spatial presence
- Modern letterforms optimized for AR/VR readability
- Strong weights establishing hierarchy in 3D space
- Rounded characteristics reducing visual fatigue

- Inter (Body):
- Exceptional legibility in translucent contexts
- Neutral character supporting immersive content
- Variable weights for spatial information hierarchy
- Wide spacing optimized for distance reading

## Spacing, shape and elevation

- Spacing steps: `spacing-unit` 20px, `spacing-sm` 20px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 12px, `border-radius-md` 16px, `border-radius-lg` 24px.
- Elevation: `shadow-spatial-1`, `shadow-spatial-2`, `shadow-spatial-3`, lowest first for resting cards, higher for hover and overlays.

1. Header: Floating navigation with spatial depth
2. Stats Panels: Translucent metric cards with glassmorphism
3. Spatial Cards: Layered content with depth perception
4. Data Surface: Floating table with dimensional shadows
5. Input Fields: Translucent forms with spatial feedback
6. Action Buttons: Dimensional buttons with depth states
7. Status Indicators: Floating badges with spatial position
8. Footer: Grounded navigation with subtle elevation

## States and motion

- Depth-responsive hover states suggesting 3D movement
- Smooth transitions mimicking physical object behavior
- Glassmorphism effects for translucent surfaces
- Parallax-inspired interactions creating depth perception
- Spatial feedback confirming user actions in 3D space

Timing values: `--transition-fast` 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 500ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 18.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA compliant contrast ratios despite translucency
- High contrast fallback for reduced transparency mode
- Clear focus indicators visible in spatial context
- Semantic HTML supporting assistive technologies
- Motion reduction respecting user preferences
- Sufficient touch targets optimized for gesture input

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Floating navigation with spatial depth
2. Stats Panels: Translucent metric cards with glassmorphism
3. Spatial Cards: Layered content with depth perception
4. Data Surface: Floating table with dimensional shadows
5. Input Fields: Translucent forms with spatial feedback
6. Action Buttons: Dimensional buttons with depth states
7. Status Indicators: Floating badges with spatial position
8. Footer: Grounded navigation with subtle elevation

## Further guidance

### Spatial Hierarchy

- Z-index layering creating clear depth perception
- Translucent overlays suggesting spatial relationships
- Shadow systems establishing elevation levels
- Blur effects creating depth of field
- Transform properties generating 3D positioning

### Emotional Temperature

- Calm Immersive (5/10):
- Translucent elements reducing visual weight
- Soft color palette minimizing eye strain
- Spacious layouts supporting comfort
- Balanced warmth appropriate for extended use

### Formality Level

- Professional Modern (6/10):
- Contemporary design language
- Professional competence with innovation
- Forward-thinking aesthetics
- Business context with creative edge

### Performance Optimization

- Hardware-accelerated CSS transforms
- Efficient backdrop-filter implementation
- Optimized blur effects using CSS filters
- Minimal DOM complexity for smooth rendering
- GPU-accelerated animations
- Efficient shadow rendering

### Brand Alignment

- Establishes innovative credibility through:
- Cutting-edge spatial design patterns
- Immersive user experience approach
- Forward-thinking visual language
- Premium technological sophistication

### Use Cases

- AR/VR application interfaces
- Spatial computing platforms
- Next-generation OS designs
- Immersive productivity tools
- Mixed reality applications
- Vision Pro style experiences
- 3D data visualization tools

### Competitive Differentiation

- Unlike traditional flat interfaces, this design:
- Leverages depth as primary organizational principle
- Uses translucency to show spatial relationships
- Creates immersive experience within 2D constraints
- Prepares users for true spatial computing
- Balances innovation with usability

### Scalability

- Component system supports:
- Additional depth layers without confusion
- Dynamic spatial reorganization
- Responsive adaptation maintaining depth perception
- Theme variations for different spatial contexts
- Modular spatial components

## Not synced

Built from `style-208-spatial-computing.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--spacing-xs`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`, `--blur-sm`, `--blur-md`, `--blur-lg`.
