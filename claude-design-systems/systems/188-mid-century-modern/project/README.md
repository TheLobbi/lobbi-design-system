Form follows function in this celebration of mid-century design principles. Clean lines meet organic shapes, creating a timeless aesthetic that balances modernist simplicity with warm, humanistic touches. This is the optimistic vision of the future from the 1950s-60s, where good design was accessible, functional, and beautiful. BLEND ANALYSIS (Total: 100%) 1. MID-CENTURY MODERN (55%) - Primary Foundation 2. ATOMIC AGE (25%) - Optimistic Energy 3. ORGANIC MODERNISM (20%) - Natural Warmth PSYCHOLOGICAL IMPACT Emotional Response: Optimistic confidence, nostalgic warmth, appreciation for timeless quality. Users feel the democratization of good design and the belief that beautiful things should be accessible and functional. Cognitive Load: Low to Medium - Clean layouts and strong hierarchy make information easy to process, while colorful accents maintain visual interest without overwhelming. User Expectation: Creative professionals, design-conscious brands, lifestyle products, modern furniture, architectural services, cultural venues, professional services with personality. Trust Signals: The emphasis on clean functionality and honest materials signals transparency and quality. The timeless aesthetic suggests stability and confidence rather than trend-chasing. COLOR PSYCHOLOGY & IMPLEMENTATION.

**Blend:** Mid-Century 55% + Atomic Age 25% + Organic Modernism 20%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** creative, professional  
**Perfect for:** Modern Furniture, Design Brands, Contemporary Living

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Form Meets Function”, “Design Legacy”, “Signature Collection”, “Atomic Age Furniture”.
- Buttons are short verb phrases in Title Case: “Explore”, “Details”, “Discover”, “Learn More”.
- Navigation uses single nouns: “Home”, “Collection”, “About”, “Design”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-mustard`, `color-teal`, `color-wood`, `color-cream`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Josefin Sans", sans-serif
- `body` — "Source Sans Pro", sans-serif

Faces are hosted on Google Fonts (Josefin Sans, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Josefin Sans
- Rationale: Geometric sans-serif with vintage elegance and modern
- clarity. The slightly extended letterforms recall 1960s signage
- while remaining contemporary and highly readable.
- Hierarchy: 700 weight for H1-H2, 600 for H3-H4, 400 for H5-H6
- Character: Sophisticated, geometric, vintage-modern, distinctive
- Usage: Headlines, navigation, section titles, calls-to-action

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 3rem, `space-xl` 6rem, `grid-gap` 1.5rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 16px, `radius-xl` 24px, `radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-hover`, lowest first for resting cards, higher for hover and overlays.

- Asymmetric 12-column with organic flow
- Based on modernist grid principles (Swiss design influence)
- 24px base unit for consistent rhythm
- Asymmetric layouts create dynamic visual interest
- White space as active design element

## States and motion

- Color shift (teal to mustard or vice versa)
- Gentle scale (1.03) suggesting quality craftsmanship
- Smooth shadow expansion
- 350ms transitions (smooth, confident)

Timing values: `--transition-base` 350ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-fast` 200ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- Charcoal on Cream: 10.8:1 (AAA) - Primary text
- Teal on Cream: 4.9:1 (AA Large) - Headings
- Mustard on Charcoal: 5.2:1 (AA Large) - Accents
- Wood on Cream: 4.6:1 (AA Large) - Secondary elements

## Component inventory

The reference page composes these patterns from the tokens above:

- Micro: 8px - Tight groupings
- Small: 16px - Related elements
- Medium: 24px - Base unit, standard separation
- Large: 48px - Section breaks (double base)
- XLarge: 96px - Major divisions (quadruple base)

## Further guidance

### Primary Palette

- Mustard Yellow (#E3A51A): Optimism, warmth, atomic age energy
- Teal Blue (#008B8B): Modernity, calm sophistication, trust
- Warm Wood (#8B6F47): Natural grounding, organic warmth, quality
- Cream (#F5F5DC): Clean canvas, warmth, approachability

### Supporting Palette

- Olive Green (#6B8E23): Nature connection, 60s nostalgia, balance
- Burnt Orange (#CC5500): Accent energy, retro warmth, vibrancy
- Charcoal (#36454F): Sophistication, structure, contrast
- Off-White (#FAFAF8): Lightness, spaciousness, clarity

### Body Font

- Source Sans Pro
- Rationale: Adobe's humanist sans-serif designed for clarity and
- warmth. Slightly condensed proportions feel efficient without
- being cold, perfect for mid-century's functional aesthetic.
- Hierarchy: 700 for strong emphasis, 600 for medium, 400 for body
- Character: Warm, professional, highly legible, neutral
- Usage: Body text, descriptions, data, forms, navigation items

### Pairing Logic

- Both fonts are geometric sans-serifs but with different personalities.
- Josefin Sans provides distinctive character for headlines while
- Source Sans Pro offers comfortable readability for extended text.
- The pairing feels cohesive yet hierarchically clear, embodying
- mid-century principles of form serving function.

- SPATIAL RELATIONSHIPS

### Elevation System

- Subtle shadows: Gentle depth without heavy drama
- Floating cards: Slight elevation suggesting quality
- Layered panels: Depth through color and subtle shadow
- Organic shapes: Rounded corners and curved elements

- INTERACTION PATTERNS

### Focus States

- 3px solid outline in teal or mustard
- High contrast for accessibility
- Maintains clean aesthetic
- Clear keyboard navigation

### Active States

- Slight scale down (0.97) for tactile feedback
- Color inversion on buttons
- Immediate response
- Satisfying interaction

### Loading States

- Smooth fade transitions
- Minimal spinner with mid-century aesthetic
- Color-based progress indicators
- Skeleton screens with organic shapes

- RESPONSIVE BEHAVIOR

## Not synced

Built from `style-188-mid-century-modern.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-size-base`.
