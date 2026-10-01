This interface bridges physical and virtual realms, celebrating the convergence of VR/AR technology with social connection. Every element suggests dimensionality, depth, and the liquid fluidity of digital space. Glass morphism creates layers of translucent surfaces while holographic accents evoke the shimmering boundary between real and virtual worlds.

**Blend:** VR/AR Aesthetics 55% + Cyberpunk Neon 30% + Glassmorphism 15%  
**Temperature:** 4/10 (cool) · **Formality:** 5/10 · **Tags:** tech, creative  
**Perfect for:** Metaverse Platforms, VR Communities, Digital Social Clubs

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “VIRTUAL SOCIAL CLUB”, “FEATURED PORTALS”, “Neon City Plaza”, “Quantum Garden”.
- Buttons are short verb phrases in Title Case: “✨ Create Portal”, “👁 Preview”, “Cancel”.
- Navigation uses single nouns: “Portals”, “Avatars”, “Worlds”, “Connect”.
- The reference page uses emoji as inline glyphs (⚡ 🌟 🎭 🔥 ✨ 👁); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-void`, `color-electric-cyan`, `color-holographic-pink`, `color-magenta`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Space Purple (#0d0221): Infinite virtual void, cosmic depth, mystery
- Electric Cyan (#00fff5): Digital energy, holographic presence, VR activation
- Holographic Pink (#ff00ff): Magenta portal glow, AR overlay, synthetic vibrance
- Neon Blue (#00d9ff): Virtual water, liquid interfaces, cool technology
- Digital White (#fafafa): Clean UI surfaces, text clarity, portal light
- Deep Navy (#0a1628): UI depth, shadow layers, dimensional space
- Purple Glow (#8b5cf6): Ambient VR lighting, soft hologram edges

## Typography

- `display` — Orbitron, system-ui, sans-serif
- `body` — "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Orbitron, Space Grotesk); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `label`), always with the letter-spacing given.

### Type rationale

- Orbitron (Headings):
- Futuristic geometric letterforms suggesting technology
- Strong display presence for VR interface elements
- Wide letter spacing evokes digital displays
- Perfect for dimensional titles and metrics

- Space Grotesk (Body):
- Modern geometric sans with warm personality
- Excellent readability in virtual contexts
- Neutral enough to balance neon aesthetics
- Clean, technical appearance with approachability

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 8px, `border-radius-md` 16px, `border-radius-lg` 24px, `border-radius-xl` 32px.
- Elevation: `glow-cyan`, `glow-pink`, `glow-purple`, `shadow-float`, `shadow-deep`, lowest first for resting cards, higher for hover and overlays.

1. Header: Glassy navigation with holographic logo glow
2. VR Stats: Floating glass cards with neon borders
3. Portal Cards: Dimensional content with depth shadows
4. Digital Table: Scan-line data with glowing accents
5. Metaverse Form: Floating inputs with electric focus states
6. Action Buttons: Glowing neon hovers with depth
7. Holographic Badges: Pulsing status with chromatic effects
8. Footer: Grid-based with ambient glow patterns

## States and motion

- Hover states trigger holographic glows
- Glass surfaces pulse with electric borders
- Transform animations suggest 3D space
- Neon trails follow cursor interaction
- Portal effects on major transitions
- Ambient animations suggest living VR world

Timing values: `--transition-fast` 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 350ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 600ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 19.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA compliant contrast despite neon colors
- Text maintains readability on glass backgrounds
- Reduced motion support for animations
- Keyboard navigation with visible focus states
- Screen reader semantic structure
- Touch targets minimum 44x44px
- Color not sole indicator of information
- Alt text for decorative holographic effects

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Glassy navigation with holographic logo glow
2. VR Stats: Floating glass cards with neon borders
3. Portal Cards: Dimensional content with depth shadows
4. Digital Table: Scan-line data with glowing accents
5. Metaverse Form: Floating inputs with electric focus states
6. Action Buttons: Glowing neon hovers with depth
7. Holographic Badges: Pulsing status with chromatic effects
8. Footer: Grid-based with ambient glow patterns

## Further guidance

### Spatial Hierarchy

- 16px base unit for dimensional consistency
- Z-axis layering: -100 to 100 depth scale
- Transform3d for true spatial positioning
- Perspective: 1000px for realistic depth
- Floating elements with subtle parallax
- Glass layers creating depth perception

### Emotional Temperature

- Cool Futuristic (4/10):
- Electric colors create cold digital energy
- Purple/cyan palette evokes synthetic environments
- Glass materials suggest high-tech coolness
- Overall: Immersive, technological, sleek

### Formality Level

- Casually Futuristic (5/10):
- Playful neon aesthetics reduce formality
- Social focus creates approachability
- Technical precision balanced with fun
- Virtual space encourages exploration

### Performance Optimization

- CSS backdrop-filter for glass effect
- Hardware-accelerated transforms
- Will-change for animated elements
- Efficient pseudo-element glows
- Optimized gradient calculations
- Minimal DOM manipulation
- CSS custom properties for theming

### Brand Alignment

- Establishes VR/metaverse credibility through:
- Holographic aesthetics suggesting advanced tech
- Glass morphism indicating modern interfaces
- Neon accents evoking digital energy
- Spatial depth demonstrating 3D understanding
- Portal metaphors connecting virtual worlds

### Use Cases

- Virtual reality social platforms
- Metaverse community hubs
- AR collaboration tools
- Digital avatar marketplaces
- VR event management
- Mixed reality dashboards
- Web3 social networks
- Holographic communication apps

### Competitive Differentiation

- Unlike standard social platforms, this design:
- Visualizes dimensionality through glass layers
- Uses holographic effects as functional elements
- Creates portal metaphors for navigation
- Balances neon energy with glass elegance
- Suggests VR space through flat design

### Scalability

- Component system supports:
- Infinite color variations for holographic themes
- Adjustable glass opacity and blur levels
- Modular depth layers (z-index system)
- Responsive glass breakpoints
- Dynamic neon color schemes
- Reusable portal components

## Not synced

Built from `style-211-metaverse-social.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--glass-blur`.
