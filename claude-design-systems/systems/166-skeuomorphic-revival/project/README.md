"Tactile realism, material authenticity, familiar interactions" This revival of skeuomorphic design embraces the intuitive nature of physical metaphors while avoiding the kitsch that plagued early mobile interfaces. By combining realistic material textures with modern color palettes and refined execution, we create interfaces that feel substantial, premium, and immediately understandable. Each element suggests its function through visual metaphor - buttons that look pressable, cards that feel like paper, inputs that resemble engraved fields.

**Blend:** Skeuomorphism 50% + Realistic Textures 30% + Modern Polish 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** tech, premium  
**Perfect for:** Premium Apps, Luxury Software, High-End Tech

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Style 166: Skeuomorphic Revival”, “Featured Projects”, “Analytics Dashboard”, “Design System”.
- Buttons are short verb phrases in Title Case: “View Project”, “Details”, “View Project”, “Details”.
- Navigation uses single nouns: “Dashboard”, “Products”, “Analytics”, “Settings”.
- The reference page uses emoji as inline glyphs (📊 🎨 🚀 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-gray-50`, `stat-icon-bg`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Inter (Google Fonts)
- Usage: All headings, navigation, buttons, labels
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Characteristics: Clean, modern, highly legible geometric sans-serif
- Rationale: Professional appearance balances skeuomorphic richness

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px, `space-3xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 6px, `radius-lg` 8px, `radius-xl` 12px.
- Elevation: `shadow-inset`, `shadow-raised`, `shadow-floating`, `shadow-high`, lowest first for resting cards, higher for hover and overlays.

- xs: 4px (tight inline elements)
- sm: 8px (button padding, small gaps)
- md: 16px (card padding, standard gaps)
- lg: 24px (section spacing)
- xl: 32px (major section breaks)
- 2xl: 48px (page-level spacing)

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-white` 1.1:1, `color-steel` 4.2:1, `color-success` 2.7:1, `color-warning` 2.8:1, `color-gray-600` 4.2:1, `nav-link-bg-2` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- All text meets minimum contrast ratios (4.5:1 body, 3:1 large)
- Focus indicators visible and high contrast
- Interactive elements minimum 44x44px
- Color + texture convey meaning (not color alone)
- Form labels properly associated
- Semantic HTML structure

## Component inventory

The reference page composes these patterns from the tokens above:

- xs: 4px (tight inline elements)
- sm: 8px (button padding, small gaps)
- md: 16px (card padding, standard gaps)
- lg: 24px (section spacing)
- xl: 32px (major section breaks)
- 2xl: 48px (page-level spacing)

## Further guidance

### Style Identity

- Name: Skeuomorphic Revival
- ID: 166
- Category: Digital UI & Illustration
- Temperature: 5/10 (Balanced - Familiar yet sophisticated)
- Formality: 7/10 (Formal - Professional and polished)
- Tags: tech, premium

### Primary

- Skeuomorphism (50%)
- Digital representations of physical materials and textures
- Realistic lighting, shadows, and depth to create tactile feel
- Material authenticity (leather, metal, wood, glass effects)
- Embossed and debossed effects for dimensionality
- Implementation: CSS gradients for material simulation, multiple layered
- shadows for realistic depth, inset shadows for pressed effects

### Secondary

- Realistic Textures (30%)
- Subtle noise patterns for material authenticity
- Gradient overlays to simulate lighting and reflections
- Border and shadow combinations for physical boundaries
- Surface variations through opacity and blend modes
- Implementation: Linear/radial gradients for metallic sheens, box-shadows
- with multiple layers, border treatments for beveled edges

### Tertiary

- Modern Polish (20%)
- Contemporary color palette avoiding dated appearance
- Refined typography for clarity and professionalism
- Balanced application of effects (not overdone)
- Accessibility considerations in contrast and interaction
- Implementation: Clean sans-serif fonts, WCAG compliant colors,
- smooth transitions, responsive behavior

### Core Principles

1. Material Honesty: Digital elements reference real-world materials
2. Tactile Feedback: Visual affordances suggest touch and interaction
3. Dimensional Hierarchy: Depth creates clear information architecture
4. Refined Execution: Modern restraint prevents dated appearance
5. Functional Metaphor: Design choices aid understanding and usability

### Primary Palette

- Brushed Metal Gray (#E5E7EB): Primary surfaces, metallic elements
- Leather Brown (#78716C): Accent surfaces, warm tactile elements
- Soft White (#FAFAF9): Clean backgrounds, paper-like surfaces
- Charcoal (#1C1917): Text, deep shadows, strong contrast
- Steel Blue (#64748B): Interactive elements, cool accents

### Material Simulations

- Brushed Metal: Linear gradients with light gray tones
- gradient: linear-gradient(180deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)
- Leather Texture: Warm browns with subtle grain
- gradient: linear-gradient(135deg, #78716C 0%, #57534E 100%)
- Glass Effect: Semi-transparent whites with blur
- background: rgba(255, 255, 255, 0.9) with backdrop-filter
- Paper Surface: Off-white with subtle texture simulation
- background: #FAFAF9 with slight shadow variations

### Functional Mapping

- Primary Actions: Brushed metal buttons with depth
- Secondary Actions: Leather-textured elements
- Success: Warm green (#65A30D) with embossed effect
- Warning: Amber (#D97706) with raised appearance
- Background: Soft white with subtle paper texture
- Text: Charcoal with multiple weights for hierarchy

- CONTRAST RATIOS (WCAG AA Compliant):
- Charcoal on Soft White: 13.2:1 (AAA compliant)
- Steel Blue on White: 4.68:1 (AA compliant)
- Leather Brown on White: 5.12:1 (AA compliant)
- All interactive elements meet minimum 3:1 for graphics

## Not synced

Built from `style-166-skeuomorphic-revival.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-metal`, `--gradient-leather`, `--gradient-button`.
