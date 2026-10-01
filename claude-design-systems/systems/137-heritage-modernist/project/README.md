"Structured Breathing Room".

**Blend:** Architectural Heritage 65% + Contemporary Minimalism 35%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** premium, association  
**Perfect for:** Heritage Organizations, Preservation Societies, Museums

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Heritage Modernist Design System”, “Featured Collections”, “Classical Revival Blueprints”, “Beaux-Arts Renderings”.
- Buttons are short verb phrases in Title Case: “Explore Collection”, “Details”, “Explore Collection”, “Details”.
- Navigation uses single nouns: “Collections”, “Archives”, “Research”, “Exhibitions”, “About”.
- The reference page uses emoji as inline glyphs (🏛 📐 🏗 📜 🎨 🗺); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `cream-bg`, `espresso`, `heritage-green`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-8` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 400ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `bronze-medium` 4.2:1, `aged-copper` 4.3:1, `pure-white` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Primary

- Architectural Heritage (65%)
- Classical proportions (1.618 golden ratio)
- Vertical rhythm and grid-based hierarchy
- Heritage color palette (earth tones, warm neutrals)
- Timeless serif typography for authority
- Deliberate spacing inspired by classical architecture
- Subtle ornamental elements (minimal, structural)

### Secondary

- Contemporary Minimalism (35%)
- Swiss design grid system (12-column layout)
- Clean geometric shapes and precise alignment
- Sans-serif typography for clarity and accessibility
- Generous white space for visual breathing room
- Flat design aesthetic with minimal shadows
- Modern interaction patterns and animations

- BLEND CHEMISTRY

- The 65/35 ratio creates a "dignified modernism" where:

1. VISUAL WEIGHT: Heritage dominates through color,
- typography hierarchy, and proportional systems

2. FUNCTIONAL CLARITY: Minimalism ensures usability,
- readability, and contemporary user expectations

3. SYNTHESIS: Classical proportions + modern grids =
- timeless layouts that feel both established and current

4. CONTRAST HARMONY: Serif headings (heritage) with
- sans-serif body text (minimalism) creates clear
- information hierarchy while maintaining accessibility

- COLOR PSYCHOLOGY & SEMANTICS

- Background (#f9f7f3): Cream warmth - archival paper feel,
- inviting yet professional, reduces eye strain

- Primary (#5a4a42): Deep heritage brown - authority,
- permanence, earth connection, museum quality

- Secondary (#8b7355): Warm bronze - craftsmanship,
- historical metals, bridge between warm/cool

- Accent (#2d2419): Rich espresso - grounding, text
- clarity, maximum contrast for accessibility

- Neutral (#e8e4df): Soft stone - subtle backgrounds,
- card elevation, architectural texture

- Success (#6b7744): Heritage green - preservation,
- growth, archival quality

- Warning (#9a6b3d): Aged copper - attention without alarm,
- heritage metal patina

### Headings

- Cormorant Garamond (Serif)
- Classical proportions, high contrast strokes
- Establishes authority and historical continuity
- Used at large sizes for maximum impact
- Letter-spacing: tight (-0.02em) for elegance

### Body

- Inter (Sans-serif)
- Modern, highly legible at all sizes
- Optimized for digital screens
- Variable font for performance
- Letter-spacing: normal to slightly open for clarity

### Scale

- 1.250 (Major Third) - musical harmony
- 12px (caption) → 15px (small) → 18px (body) →
- 22.5px (h4) → 28px (h3) → 35px (h2) → 44px (h1)

### Line Height

- 1.618 (Golden Ratio) for body text,
- 1.2 for headings (tighter for elegance)

- SPATIAL DENSITY

### Base Unit

- 8px grid system (common divisor)
- SPACING SCALE (Fibonacci-inspired):
- xs: 8px   - Tight internal spacing
- sm: 16px  - Component padding
- md: 24px  - Section spacing
- lg: 40px  - Major separations
- xl: 64px  - Section breaks

### Density

- Medium (40-60% content to whitespace ratio)
- Allows heritage to breathe
- Prevents overwhelming historical elements
- Modern expectation for scanning content

- COMPONENT ARCHITECTURE

1. MODULAR CARDS: Self-contained units with subtle
- borders and elevation, avoiding heavy shadows

2. GRID DISCIPLINE: 12-column responsive grid ensures
- consistency across all viewports

3. HIERARCHY THROUGH SCALE: Size and weight create
- importance, not color alone

4. RESTRAINED ORNAMENTATION: Minimal decorative elements
- reference classical architecture without pastiche

5. FUNCTIONAL MINIMALISM: Every element serves purpose,
- no decoration for decoration's sake

- ACCESSIBILITY COMPLIANCE (WCAG 2.1 AA)

- ✓ Color Contrast Ratios:
- Primary text (#2d2419) on cream: ~~12.5:1~~ (AAA) — **measured 14.2:1**
- Secondary text (#5a4a42) on cream: 7.8:1 (AA+)
- Link text (#5a4a42) on white: ~~8.9:1~~ (AAA) — **measured 7.9:1**
- Button text (white) on primary: 11.2:1 (AAA)

- ✓ Typography:
- Base font size: 18px (above 16px minimum) — **the reference page sets running text at 15px**
- Line height: 1.618 (above 1.5 minimum)
- Paragraph width: <75 characters for readability

- ✓ Interactive Elements:
- All buttons 44×44px minimum touch target
- Focus indicators on all interactive elements
- Keyboard navigation fully supported
- Skip links for screen readers

- ✓ Semantic HTML:
- Proper heading hierarchy (h1 → h6)
- ARIA labels for complex components
- Alt text for decorative/informative images

## Not synced

Built from `style-137-heritage-modernist.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--border-subtle`, `--border-medium`.
