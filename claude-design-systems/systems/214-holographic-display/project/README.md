This interface captures the ethereal, prismatic nature of holographic display technology. Drawing inspiration from light diffraction, rainbow spectrums, and iridescent surfaces, it creates a futuristic yet accessible environment that feels both technological and magical. The design evokes the shimmering quality of holograms while maintaining professional functionality and readability.

**Blend:** Light Diffraction 55% + Prismatic Colors 30% + Ethereal Minimal 15%  
**Temperature:** 3/10 (cool) · **Formality:** 5/10 · **Tags:** tech, creative  
**Perfect for:** Holographic Tech, Display Innovation, Light Technology

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Light Diffraction Interface”, “Prismatic Display Features”, “Rainbow Spectrum Technology”, “Multi-Angle Projection”.
- Buttons are short verb phrases in Title Case: “◈ Submit Request”, “📊 View Specifications”, “Reset Form”.
- Navigation uses single nouns: “Home”, “Technology”, “Research”, “Members”.
- The reference page uses emoji as inline glyphs (📊 🌈 💎 ⚡ ✨ 🔮); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-refraction-blue`, `color-spectrum-purple`, `color-cyan-glow`, `color-dark-text`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Prism Rainbow Gradients: Innovation, creativity, spectrum of possibilities
- Hologram Silver (#c0c0c0): Technology, precision, reflective surfaces, modern
- Refraction Blue (#4dc3ff): Clarity, transparency, light transmission, trust
- Light Scatter White (#fafafa): Purity, illumination, bright projection space
- Spectrum Purple (#9333ea): Premium technology, innovation, future-forward
- Cyan Glow (#06b6d4): Energy, digital presence, holographic projection

## Typography

- `display` — "Exo 2", system-ui, -apple-system, sans-serif
- `body` — "Source Sans Pro", system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Exo 2, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&family=Source+Sans+Pro:wght@400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Exo 2 (Primary Headings):
- Geometric sans-serif with futuristic character
- Perfect for holographic/tech interfaces
- Strong presence without being aggressive
- Variable weight system for hierarchy
- Excellent for display purposes

- Source Sans Pro (Body & UI):
- Designed by Adobe for maximum clarity
- Professional and highly legible
- Works beautifully at small sizes
- Neutral enough to let holographic effects shine
- Perfect balance of modern and accessible

## Spacing, shape and elevation

- Spacing steps: `spacing-unit` 18px, `spacing-xs` 10px, `spacing-sm` 18px, `spacing-md` 28px, `spacing-lg` 40px, `spacing-xl` 56px. Pad cards and sections from these steps only.
- Corners: `border-radius` 12px, `border-radius-sm` 8px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

1. Header: Rainbow gradient accents with silver metallic base
2. Holographic Stats: Prismatic borders with spectrum highlights
3. Display Cards: Iridescent surfaces with light scatter effects
4. Data Table: Minimal design with rainbow header accents
5. Projection Form: Clean inputs with chromatic focus states
6. Spectrum Buttons: Multi-gradient hover effects
7. Light Badges: Color-shifting status indicators
8. Footer: Subtle rainbow divider with silver links

## States and motion

- Rainbow gradient hover transitions (300ms ease)
- Iridescent shimmer on interactive elements
- Chromatic aberration on focus states
- Soft glow effects on buttons
- Prismatic border animations
- Light scatter on card hover
- Smooth color-shifting transitions

Timing values: `--transition-base` 300ms ease, `--transition-glow` 400ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-refraction-blue` 1.8:1, `color-white` 1.1:1, `color-gray-text` 4.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant contrast ratios (4.5:1 minimum on text)
- Rainbow gradients used decoratively, not for critical info
- Clear typography with excellent readability
- Semantic HTML structure throughout
- Keyboard navigation fully supported
- Focus states highly visible with rainbow borders
- Touch targets minimum 44x44px
- Color-blind friendly status indicators (shape + color)
- Screen reader optimized labels

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Rainbow gradient accents with silver metallic base
2. Holographic Stats: Prismatic borders with spectrum highlights
3. Display Cards: Iridescent surfaces with light scatter effects
4. Data Table: Minimal design with rainbow header accents
5. Projection Form: Clean inputs with chromatic focus states
6. Spectrum Buttons: Multi-gradient hover effects
7. Light Badges: Color-shifting status indicators
8. Footer: Subtle rainbow divider with silver links

## Further guidance

### Spatial Hierarchy

- 18px base unit reflecting modern display standards
- Generous padding creating floating, projected feel
- Asymmetric rainbow borders for directionality
- Layered shadows suggesting depth projection
- Grid layouts with spectrum dividers

### Emotional Temperature

- Cool Ethereal (3/10):
- Silver and blue base creates cool foundation
- Rainbow spectrum adds magical warmth
- Light-based palette feels fresh and clean
- Not cold like pure tech interfaces
- Balanced by prismatic color accents
- Ethereal quality creates dreamlike atmosphere

### Formality Level

- Modern Professional (5/10):
- Futuristic without being gimmicky
- Professional enough for serious applications
- Playful rainbow elements add approachability
- Suitable for innovation-focused organizations
- Balances cutting-edge with accessibility

### Holographic Design Features

- Rainbow gradient borders simulating light diffraction
- Iridescent surface effects on cards
- Prismatic color separations on hover
- Light scatter shadows creating depth
- Chromatic aberration accents
- Multi-angle gradient transitions
- Silver metallic backgrounds
- Spectrum-based visual hierarchy

### Technical Performance

- Two optimized Google Fonts (Exo 2 & Source Sans Pro)
- CSS gradients only (no images)
- Embedded CSS (no additional requests)
- Hardware-accelerated transforms
- Efficient gradient calculations
- Minimal DOM depth
- CSS Grid for efficient layouts
- Optimized color stops for smooth gradients

### Brand Alignment

- Perfect for organizations focused on:
- Holographic display technology
- AR/VR innovation companies
- Optical technology research
- Light-based computing
- Future technology showcases
- Innovation exhibitions
- Display technology conferences

### Use Cases

- Holographic technology platforms
- AR/VR development portals
- Optical engineering interfaces
- Innovation showcase websites
- Future tech conferences
- Display technology organizations
- Light field computing groups

### Rainbow Spectrum Meaning

- The rainbow gradient represents the full spectrum of light wavelengths,
- symbolizing complete visibility, transparency, and the infinite possibilities
- of holographic display technology. It creates a sense of wonder while
- maintaining professional credibility through precise execution.

## Not synced

Built from `style-214-holographic-display.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-rainbow`, `--gradient-rainbow-vertical`, `--gradient-iridescent-1`, `--gradient-iridescent-2`.
