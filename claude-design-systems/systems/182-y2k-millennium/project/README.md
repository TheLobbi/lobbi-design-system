Y2K Millennium: Y2K Aesthetic 55% + Cyber Chrome 25% + Bubble Interface 20%.

**Blend:** Y2K Aesthetic 55% + Cyber Chrome 25% + Bubble Interface 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 4/10 · **Tags:** tech, creative  
**Perfect for:** Tech Nostalgia, Y2K Brands, Digital Services

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Y2K Millennium Dashboard”, “Cyber Marketplace”, “Digital Art Gallery”, “Quantum Analytics”.
- Buttons are short verb phrases in Title Case: “Launch Project”, “Reset Form”, “Primary Button”, “Secondary Button”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Analytics”, “Profile”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-primary`, `color-secondary`, `color-accent`, `color-dark`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Audiowide, cursive
- `body` — "Titillium Web", sans-serif

Faces are hosted on Google Fonts (Audiowide, Titillium Web); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Audiowide&family=Titillium+Web:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-1` 0.5rem, `space-2` 1rem, `space-3` 1.5rem, `space-4` 2rem, `space-6` 3rem, `space-8` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 16px, `radius-lg` 24px, `radius-xl` 32px, `radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

- Color System:
- ├─ Primary: #00D9FF (Electric Blue) - Digital energy, innovation
- ├─ Secondary: #FF1F8F (Hot Pink) - Playfulness, pop culture
- ├─ Accent: #CCFF00 (Lime Green) - Cyber-organic, matrix vibes
- ├─ Metallic: #C0C0C0 (Silver Chrome) - Technology, sleekness
- ├─ Base Dark: #1A1A2E (Dark Navy) - Depth, sophistication
- Base Light: #FFFFFF (Pure White) - Clarity, future canvas

- Gradient Palette:
- ├─ Chrome: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- ├─ Cyber: linear-gradient(135deg, #00d9ff 0%, #0099ff 100%)
- ├─ Neon: linear-gradient(135deg, #ff1f8f 0%, #ff6b9d 100%)
- Matrix: linear-gradient(135deg, #ccff00 0%, #66ff00 100%)

- Typography System:
- ├─ Display: Audiowide (Headers)
- │  ├─ Weight: 400 (inherently bold/futuristic)
- │  ├─ Usage: H1-H3, hero text, key statements
- │  ├─ Personality: Futuristic, digital, tech-forward
- │  └─ Cultural Reference: Y2K sci-fi, digital interfaces
- Body: Titillium Web (Content)
- ├─ Weights: 400 (regular), 600 (semi-bold), 700 (bold)
- ├─ Usage: Paragraphs, UI text, data
- ├─ Rationale: Tech-friendly, clean, modern legibility
- Contrast: Geometric display vs. refined body

- Spacing & Rhythm:
- ├─ Base Unit: 8px
- ├─ Scale: 0.5x, 1x, 1.5x, 2x, 3x, 4x, 6x, 8x
- ├─ Layout Philosophy: Fluid, organic spacing with breathing room
- Grid System: Flexible, bubble-wrapped containers

- Component Design Principles:
- ├─ Cards: Glossy surfaces with gradient overlays
- ├─ Buttons: 3D bubble effect with inner highlights
- ├─ Forms: Translucent inputs with glow focus states
- ├─ Tables: Alternating chrome rows with cyber highlights
- Navigation: Metallic pills with holographic accents

- ACCESSIBILITY COMPLIANCE

- WCAG 2.1 AA Standards:
- ├─ Color Contrast Ratios:
- │  ├─ Electric Blue on Dark Navy: 6.8:1 (AA)
- │  ├─ White on Electric Blue: 4.9:1 (AA Large)
- │  ├─ Dark Navy on White: 15.5:1 (AAA)
- │  ├─ Hot Pink on Dark Navy: 5.2:1 (AA Large)
- │  └─ Lime Green on Dark Navy: 10.3:1 (AAA)
- ├─ Focus Indicators:
- │  ├─ 3px solid glowing outlines
- │  ├─ High contrast neon colors
- │  └─ Offset for visibility against gradients
- ├─ Touch Targets: Minimum 44x44px
- Screen Reader Support:
- ├─ Semantic HTML5 elements
- ├─ ARIA labels for decorative gradients
- Alt text for chrome textures

- Responsive Breakpoints:
- ├─ Mobile: 320px-767px (single column, larger bubbles)
- ├─ Tablet: 768px-1023px (2-column grids)
- Desktop: 1024px+ (full multi-column layouts)

- CULTURAL & BUSINESS CONTEXT

- Target Industries:
- ├─ Tech Startups: Digital-first, innovative brand identity
- ├─ Creative Agencies: Forward-thinking, trend-aware positioning
- ├─ E-commerce: Modern, youth-oriented retail experiences
- ├─ Entertainment: Gaming, streaming, digital media platforms
- Fashion/Beauty: Trend-forward, style-conscious brands

- User Psychology:
- ├─ Temperature: 5/10 (Neutral-warm, optimistic yet tech-forward)
- ├─ Formality: 4/10 (Casual-professional, approachable innovation)
- ├─ Emotional Response: Nostalgia, optimism, digital excitement
- Trust Signals: Modern tech credibility, forward-thinking

- Brand Personality:
- ├─ Voice: Optimistic, innovative, playfully futuristic
- ├─ Values: Progress, creativity, digital transformation
- ├─ Differentiation: Retro-futurism meets modern usability
- Community: Tech-savvy, trend-aware, culturally connected

- TECHNICAL IMPLEMENTATION

- CSS Architecture:
- ├─ Custom Properties: All colors, gradients, spacing, typography
- ├─ Utility Classes: Minimal, component-focused
- ├─ Layout System: CSS Grid for structure, Flexbox for components
- Performance: System fonts fallback, GPU-accelerated animations

- Browser Compatibility:
- ├─ Modern Browsers: Full feature support (gradients, transforms)
- ├─ Graceful Degradation: Solid colors if gradients unsupported
- Progressive Enhancement: Advanced effects as enhancements

- Interaction Design:
- ├─ Hover States: Glow intensification, scale transforms
- ├─ Active States: Bubble "press" depth simulation
- ├─ Focus States: Neon glow outlines, high visibility
- Transitions: Smooth (250-300ms), liquid easing

- Animation Philosophy:
- ├─ Purpose: Enhance futuristic feel without distraction
- ├─ Performance: CSS transforms (GPU-accelerated)
- ├─ Accessibility: Respects prefers-reduced-motion
- Timing: Snappy yet smooth (250ms sweet spot)

- USAGE GUIDELINES

- When to Use:
- ├─ Tech products with innovation focus
- ├─ Youth-oriented digital services
- ├─ Creative portfolios with modern edge
- ├─ E-commerce targeting trend-aware demographics
- Entertainment/gaming platforms

- When NOT to Use:
- ├─ Traditional financial services (too playful)
- ├─ Healthcare (lacks professional gravitas)
- ├─ Legal/government (insufficient formality)
- ├─ Heritage brands (wrong aesthetic period)
- Enterprise B2B (too casual for conservative sectors)

- Customization Notes:
- ├─ Gradient adjustment: Maintain metallic/cyber quality
- ├─ Typography: Keep futuristic display + clean body pairing
- ├─ Border radius: 16-24px range for bubble effect
- Glow intensity: Adjust box-shadow spread and blur

- Historical Context:
- ├─ Peak Period: 1999-2002 (millennium transition)
- ├─ Key Influences: iMac G3, Windows XP, early web design
- ├─ Revival Period: 2019-present (Y2K nostalgia trend)
- Modern Interpretation: Cleaner execution, better usability

## States and motion

Timing values: `--transition-fast` 200ms ease, `--transition-base` 250ms ease, `--transition-slow` 300ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-182-y2k-millennium.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-chrome`, `--gradient-cyber`, `--gradient-neon`, `--gradient-matrix`, `--gradient-metallic`.
