Typography becomes the primary visual element through motion. Text isn't static - it breathes, shifts, and responds to user interaction. This style treats letterforms as dynamic objects that communicate through movement, creating visual rhythm and expressive hierarchy.

**Blend:** Kinetic Type 55% + Motion Graphics 25% + Dynamic Layout 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 5/10 · **Tags:** creative, media  
**Perfect for:** Motion Design, Video Production, Creative Media

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Typography in Motion”, “Dynamic Layouts”, “Motion Graphics”, “Expressive Text”.
- Buttons are short verb phrases in Title Case: “Submit Request”, “Save Draft”, “Clear Form”, “Primary Action”.
- Navigation uses single nouns: “Dashboard”, “Analytics”, “Reports”, “Settings”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-red`, `color-cyan`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Base: Black (#000000) - Strong foundation
- Accent: Vibrant Red (#FF0054) - Energy and emphasis
- Secondary: Cyan (#00F0FF) - Technical edge
- Neutral: White (#FFFFFF), Gray (#808080)
- Philosophy: Bold contrast creates typographic impact

## Typography

- `display` — "Space Grotesk", sans-serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Space Grotesk, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Space Grotesk - Geometric, modern, great for kinetic effects
- Body: Inter - Clean, readable, excellent at all sizes
- Display: Space Grotesk Bold - Maximum impact
- Scale: 14px base, 1.25 ratio for hierarchy

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 0.25rem.

## States and motion

1. Text-First: Typography leads all motion
2. Responsive: Animations react to user input
3. Rhythmic: Consistent timing creates flow (0.3s standard)
4. Purposeful: Every animation communicates
5. Performant: GPU-accelerated transforms only

Timing values: `--transition-fast` 0.15s, `--transition-base` 0.3s, `--transition-slow` 0.5s, `--ease-out` cubic-bezier(0.33, 1, 0.68, 1), `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-red` 3.9:1, `color-gray` 3.9:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-white` 1.0:1, `color-cyan` 1.4:1, `color-gray-light` 1.3:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- prefers-reduced-motion support throughout
- 4.5:1+ contrast ratios maintained
- Focus states with animated indicators
- Keyboard navigation fully supported
- Screen reader friendly structure

## Further guidance

### Style Identity

- Name: Kinetic Typography
- ID: 193
- Category: Motion & Animation
- Temperature: 5/10 (Balanced energy)
- Formality: 5/10 (Casual-professional balance)
- Tags: creative, media

### Interaction Patterns

- Hover: Letter-spacing expansion, color shift
- Focus: Animated underline, scale emphasis
- Active: Quick scale feedback
- Load: Staggered text reveals
- Scroll: Subtle parallax on headings

### Responsive Strategy

- Mobile: Simplified animations, reduced motion
- Tablet: Moderate kinetic effects
- Desktop: Full kinetic typography experience
- Breakpoints: 768px, 1024px

### Technical Implementation

- CSS Custom Properties for theme control
- Transform-based animations for performance
- Will-change hints for complex animations
- Intersection Observer for scroll effects
- Reduced motion queries respected

### Use Cases

- Creative agencies
- Media companies
- Portfolio sites
- Digital magazines
- Brand experiences
- Design studios

## Not synced

Built from `style-193-kinetic-typography.html`. No component bundle: the reference page's markup is not packaged as live components.
