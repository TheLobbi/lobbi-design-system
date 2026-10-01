This design system embodies the intersection of environmental technology, data-driven sustainability, and organic natural elements. It creates a professional yet approachable interface that communicates ecological responsibility while maintaining technical credibility.

**Blend:** Environmental Tech 55% + Data Visualization 30% + Nature Organic 15%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** tech, association  
**Perfect for:** Climate Tech, Environmental Organizations, Green Innovation

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Environmental Impact Dashboard”, “Sustainability Projects”, “Quick Actions”, “Carbon Footprint”.
- Buttons are short verb phrases in Title Case: “Add Project”, “Submit Project”, “Save Draft”, “View Full Report”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Analytics”, “Reports”, “Settings”.
- The reference page uses emoji as inline glyphs (🌱 🌿 © 🌍); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `green-primary`, `green-light`, `blue-primary`, `gray-800`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Carbon Neutral Green (#22c55e): Growth, renewal, environmental action
- Ocean Blue (#0284c7): Trust, clarity, water conservation
- Earth Brown (#78716c): Stability, grounding, natural materials
- Clean Air White (#f9fafb): Purity, transparency, fresh beginnings

## Typography

- `display` — Lora, Georgia, serif
- `body` — Outfit, system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Outfit, Lora); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Outfit (Primary): Modern, geometric sans-serif that conveys innovation
- and approachability. Used for UI elements, headings, and data displays.
- Lora (Secondary): Serif font that adds authority and credibility.
- Used for emphasis, quotes, and important statements.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- Modular card-based layouts for scalability
- Consistent 16px spacing grid (1rem base)
- Rounded corners (8px) for approachability
- Subtle shadows for depth and hierarchy

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG AA contrast ratios maintained (4.5:1 minimum)
- Focus states clearly visible with 2px outlines
- Semantic HTML5 structure for screen readers
- Keyboard navigation fully supported
- Color is not the only indicator of meaning

## Component inventory

The reference page composes these patterns from the tokens above:

- Modular card-based layouts for scalability
- Consistent 16px spacing grid (1rem base)
- Rounded corners (8px) for approachability
- Subtle shadows for depth and hierarchy

## Further guidance

### Climate Tech Council Design System

- Style ID: 217

### Temperature & Formality

- Temperature: 6/10 (Warm Earth) - Inviting yet professional
- Formality: 7/10 - Structured but not corporate, accessible yet authoritative

## Not synced

Built from `style-217-climate-tech.html`. No component bundle: the reference page's markup is not packaged as live components.
