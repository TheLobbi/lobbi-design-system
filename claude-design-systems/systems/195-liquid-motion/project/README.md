Embrace organic, fluid motion inspired by natural liquids and morphing shapes. Elements flow, merge, and transform with smooth, continuous animations that feel alive. This style rejects rigid geometry in favor of soft, shape-shifting beauty that responds naturally to interaction.

**Blend:** Liquid Animation 55% + Morphing Shapes 25% + Fluid Dynamics 20%  
**Temperature:** 6/10 (warm) · **Formality:** 4/10 · **Tags:** creative, tech  
**Perfect for:** Animation Studios, Motion Design, Creative Tech

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Fluid Design in Motion”, “Organic Flow”, “Shape Shifting”, “Fluid Dynamics”.
- Buttons are short verb phrases in Title Case: “Start Creating”, “View Examples”, “Clear All”, “Primary Button”.
- Navigation uses single nouns: “Home”, “Features”, “Gallery”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-purple`, `color-pink`, `color-mint`, `color-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary: Soft Purple (#A78BFA) - Ethereal fluidity
- Secondary: Pastel Pink (#F9A8D4) - Warmth and approachability
- Accent: Mint Green (#6EE7B7) - Fresh highlights
- Gradient Blobs: Multi-color gradients for organic shapes
- Background: Off-white (#F8FAFC) with soft blurs
- Philosophy: Soft pastels create friendly, organic atmosphere

## Typography

- `display` — Sora, sans-serif
- `body` — "DM Sans", sans-serif

Faces are hosted on Google Fonts (Sora, DM Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Sora - Rounded, modern, flows naturally
- Body: DM Sans - Clean but warm, excellent readability
- Display: Sora Bold - Soft yet impactful
- Scale: 16px base, 1.25 ratio for gentle hierarchy

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem, `space-4xl` 6rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 2rem, `border-radius-xl` 3rem.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## States and motion

1. Organic: All motion follows natural curves
2. Continuous: Animations loop and flow seamlessly
3. Elastic: Springs and bounce for life
4. Morphing: Shapes transition fluidly
5. Responsive: Motion adapts to user input naturally

Timing values: `--transition-fast` 0.2s, `--transition-base` 0.5s, `--transition-slow` 0.8s, `--ease-elastic` cubic-bezier(0.68, -0.55, 0.265, 1.55), `--ease-fluid` cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- prefers-reduced-motion stops morphing animations
- High contrast mode adjusts blob visibility
- Focus states maintain clarity over blobs
- Color-independent information hierarchy
- Screen reader friendly despite visual complexity

## Further guidance

### Style Identity

- Name: Liquid Motion
- ID: 195
- Category: Motion & Animation
- Temperature: 6/10 (Warm and organic)
- Formality: 4/10 (Casual and approachable)
- Tags: creative, tech

### Interaction Patterns

- Hover: Blob expansion, color shift, gentle bounce
- Click: Ripple effect from interaction point
- Scroll: Parallax blob movement
- Load: Morphing reveal animations
- Focus: Pulsing glow effect

### Responsive Strategy

- Mobile: Simplified blobs, fewer morphing effects
- Tablet: Moderate blob complexity
- Desktop: Full liquid experience with complex morphs
- Breakpoints: 768px, 1024px
- Performance-aware: Reduce complexity on low-power devices

### Technical Implementation

- CSS animations with natural easing
- SVG filters for blur and glow effects
- Border-radius animations for morphing
- Multiple background gradients for blobs
- Backdrop-filter for glass morphism
- Transform-origin for natural pivots

### Use Cases

- Creative portfolios
- Tech startups
- Design agencies
- Product launches
- Brand experiences
- Interactive art projects

## Not synced

Built from `style-195-liquid-motion.html`. No component bundle: the reference page's markup is not packaged as live components.
