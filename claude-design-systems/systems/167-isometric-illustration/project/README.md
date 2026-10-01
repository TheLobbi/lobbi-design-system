"3D perspective, technical precision, playful complexity" Isometric illustration creates engaging, dimensional interfaces that feel modern and tech-forward. By using consistent 30-degree angles and layered elements, we create depth without perspective distortion. The playful color palette and technical precision balance professional functionality with creative expression. Each component exists in a subtle 3D space, making the interface feel dynamic and alive while maintaining usability.

**Blend:** Isometric Design 55% + Tech Illustration 25% + Playful Color 20%  
**Temperature:** 6/10 (warm) · **Formality:** 5/10 · **Tags:** tech, creative  
**Perfect for:** Tech Companies, SaaS Platforms, Digital Products

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Style 167: Isometric Illustration”, “Featured Projects”, “Analytics Dashboard”, “Design System”.
- Buttons are short verb phrases in Title Case: “View”, “Details”, “View”, “Details”.
- Navigation uses single nouns: “Dashboard”, “Products”, “Analytics”, “Settings”.
- The reference page uses emoji as inline glyphs (📊 🎨 🚀 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-blue`, `color-purple`, `color-purple-dark`, `color-mint`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Top Face: Lightest shade (primary color at 100% brightness)
- Left Face: Medium shade (primary color at 85% brightness)
- Right Face: Darkest shade (primary color at 70% brightness)
- Creates automatic depth through color variations

## Typography

- `display` — "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif
- `body` — "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Space Grotesk, DM Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Space Grotesk (Google Fonts)
- Usage: Headings, navigation, buttons, labels
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Characteristics: Geometric, modern, tech-inspired with unique character
- Rationale: Geometric nature complements isometric design language

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px, `space-3xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- 8px (0.5rem) - Aligns with 30-degree angle spacing

## States and motion

- Respect prefers-reduced-motion for users sensitive to animation
- Isometric transformations can be disabled via media query
- Alternative flat appearance for reduced motion preference

Timing values: `--transition-fast` 150ms ease-out, `--transition-base` 250ms ease-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-blue` 3.6:1, `color-purple-medium` 4.2:1, `color-mint-dark` 3.7:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-purple` 2.7:1, `color-mint` 1.9:1, `color-mint-medium` 2.5:1, `color-yellow` 1.6:1, `color-white` 1.0:1, `color-gray-200` 1.2:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Text uses Deep Navy (#1E293B) on white backgrounds (~~14.8:1~~ ratio) — **measured 14.4:1**
- Large text can use Electric Blue (4.89:1 ratio)
- Interactive elements minimum 44x44px touch target
- Color + shape convey meaning (not color alone)
- Form labels properly associated
- Semantic HTML structure
- Skip links for keyboard navigation

## Component inventory

The reference page composes these patterns from the tokens above:

- xs: 4px (tight inline)
- sm: 8px (grid unit, standard gap)
- md: 16px (card padding, 2x grid)
- lg: 24px (section spacing, 3x grid)
- xl: 32px (major breaks, 4x grid)
- 2xl: 48px (page spacing, 6x grid)

## Further guidance

### Style Identity

- Name: Isometric Illustration
- ID: 167
- Category: Digital UI & Illustration
- Temperature: 6/10 (Warm - Playful and engaging)
- Formality: 5/10 (Balanced - Professional but approachable)
- Tags: tech, creative

### Primary

- Isometric Design (55%)
- 3D perspective using isometric projection (no vanishing points)
- 30-degree angle transformations for depth illusion
- Geometric shapes arranged in isometric grid
- Layered elements creating spatial depth
- Implementation: CSS transforms (rotateX, rotateY, skew) for isometric angles,
- 3D positioning, layered shadows for depth perception

### Secondary

- Tech Illustration (25%)
- Clean vector-style graphics
- Technical precision in shapes and angles
- Icon-based visual language
- Grid-based alignment and structure
- Implementation: Geometric shapes via CSS, pseudo-elements for decorative
- tech details, consistent spacing grid, sharp edges

### Tertiary

- Playful Color (20%)
- Vibrant, energetic color palette
- Multiple accent colors for visual interest
- Color blocking for dimensional differentiation
- Gradients to enhance depth perception
- Implementation: Electric blue, soft purple, mint, warm yellow, strategic
- gradient overlays on isometric faces

### Core Principles

1. Consistent Perspective: All elements follow isometric rules (30° angles)
2. Layered Depth: Elements stack to create spatial relationships
3. Geometric Precision: Clean shapes, sharp edges, technical accuracy
4. Playful Energy: Vibrant colors and dynamic compositions
5. Functional Clarity: 3D effects enhance, never obscure, usability

### Primary Palette

- Electric Blue (#3B82F6): Primary actions, top surfaces
- Soft Purple (#A78BFA): Secondary elements, side surfaces
- Mint (#34D399): Success states, highlighted elements
- Warm Yellow (#FBBF24): Accents, attention elements
- White (#FFFFFF): Clean backgrounds, light surfaces
- Deep Navy (#1E293B): Text, shadows, depth indicators

### Face Variations

- Electric Blue Cube:
- Top: #3B82F6
- Left: #2563EB
- Right: #1D4ED8

- Purple Cube:
- Top: #A78BFA
- Left: #8B5CF6
- Right: #7C3AED

- Mint Cube:
- Top: #34D399
- Left: #10B981
- Right: #059669

### Functional Mapping

- Primary Actions: Electric blue with isometric depth
- Secondary Actions: Purple with softer appearance
- Success: Mint with bright, positive feel
- Warning: Warm yellow with high visibility
- Background: White with subtle grid pattern
- Text: Deep navy for strong contrast

- CONTRAST RATIOS (WCAG AA Compliant):
- Deep Navy on White: 14.8:1 (AAA compliant)
- Electric Blue on White: 4.89:1 (AA compliant)
- Purple on White: ~~3.27:1~~ (AA for large text, graphics) — **measured 2.7–5.7:1**
- Mint on White: 2.04:1 (Decorative only, not for text)
- All critical text uses Deep Navy for accessibility

## Not synced

Built from `style-167-isometric-illustration.html`. No component bundle: the reference page's markup is not packaged as live components.
