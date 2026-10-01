Create spatial depth through layered parallax scrolling, transforming flat interfaces into immersive 3D-like experiences. Elements exist on different depth planes, moving at varying speeds to create a sense of dimension and depth that responds to user scroll behavior.

**Blend:** Parallax Effect 55% + 3D Layers 25% + Immersive Scroll 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 6/10 · **Tags:** tech, creative  
**Perfect for:** Interactive Media, Web Design, Digital Agencies

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Experience Depth in Design”, “Spatial Design”, “3D Layers”, “Immersive Scroll”.
- Buttons are short verb phrases in Title Case: “Submit Inquiry”, “Schedule Call”, “Reset Form”, “Primary Action”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Analytics”, “Settings”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-deep-blue`, `color-light-blue`, `color-electric-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Base: Deep Blue (#0A1628) - Depth and space
- Gradient: Deep Blue to Light Blue (#0A1628 → #E8F4F8)
- Accent: Electric Blue (#0EA5E9) - Highlights and focus
- Secondary: Sky Blue (#38BDF8) - Mid-tone elements
- Neutral: White (#FFFFFF), Gray (#94A3B8)
- Philosophy: Gradient depth creates spatial hierarchy

## Typography

- `display` — Outfit, sans-serif
- `body` — "Plus Jakarta Sans", sans-serif

Faces are hosted on Google Fonts (Outfit, Plus Jakarta Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Outfit - Modern, geometric, excellent scaling
- Body: Plus Jakarta Sans - Clean, highly readable
- Display: Outfit Bold - Maximum impact for heroes
- Scale: 16px base, 1.333 (perfect fourth) ratio

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem, `space-4xl` 6rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 1rem.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

## States and motion

1. Depth-First: Parallax creates spatial relationships
2. Layered: Elements on distinct z-planes
3. Smooth: 60fps transforms with GPU acceleration
4. Purposeful: Motion reinforces hierarchy
5. Progressive: Content reveals as user explores

Timing values: `--transition-fast` 0.2s, `--transition-base` 0.4s, `--transition-slow` 0.6s, `--ease-out` cubic-bezier(0.33, 1, 0.68, 1), `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 18.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- prefers-reduced-motion disables parallax entirely
- High contrast maintained across depth layers
- Focus indicators work across all z-planes
- Keyboard navigation respects visual hierarchy
- Screen readers receive linear content order

## Further guidance

### Style Identity

- Name: Parallax Depth
- ID: 194
- Category: Motion & Animation
- Temperature: 5/10 (Balanced immersion)
- Formality: 6/10 (Professional with creativity)
- Tags: tech, creative

### Interaction Patterns

- Scroll: Primary interaction, drives all parallax
- Hover: Depth shift on cards (translateZ)
- Focus: Elevation increase with shadow
- Load: Staggered layer reveals
- Resize: Adaptive parallax speeds

### Responsive Strategy

- Mobile: Reduced parallax, more subtle effects
- Tablet: Moderate depth effects
- Desktop: Full 3D parallax experience
- Breakpoints: 768px, 1024px
- Orientation-aware depth scaling

### Technical Implementation

- CSS 3D transforms with perspective
- transform3d for GPU acceleration
- Intersection Observer for scroll triggers
- will-change for performance optimization
- Scroll-linked animations via CSS custom properties

### Use Cases

- Product showcases
- Portfolio sites
- Landing pages
- Storytelling experiences
- Brand microsites
- Immersive presentations

## Not synced

Built from `style-194-parallax-depth.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--perspective`, `--layer-back`, `--layer-mid`, `--layer-front`, `--layer-elevated`.
