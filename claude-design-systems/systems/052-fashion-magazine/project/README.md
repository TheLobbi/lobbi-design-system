High fashion editorial aesthetic blending Fashion Magazine (80%) with Vogue Elegance (20%). Creates aspirational, visually dramatic experience reminiscent of luxury fashion publications.

**Blend:** Fashion Magazine 80% + Vogue Elegance 20%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** media, creative  
**Perfect for:** Fashion Publishers, Style Magazines, Luxury Media

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Spring/Summer 2025 Collections”, “Performance Statistics”, “Featured Collections”, “Dior Spring Collection: A Return to Elegance”.
- Navigation uses single nouns: “Collections”, “Designers”, “Trends”, “Analytics”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-pink`, `color-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Pure Black (#000000): Primary text, dramatic backgrounds
- Pure White (#ffffff): Canvas, breathing space, luxury
- Fashion Pink (#f472b6): Accent highlights, CTAs, energy
- Gold (#d4af37): Premium details, borders, prestige markers

## Typography

- `display` — "Playfair Display", Didot, "Bodoni MT", Georgia, serif
- `body` — -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Playfair Display); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap">
```

The reference page names Playfair Display without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`body`, `label`), always with the letter-spacing given.

### Type rationale

- Headlines: Didot/Playfair Display (high fashion serifs)
- Body: Clean sans-serif for readability (Inter/System)
- Hierarchy: Dramatic size contrasts (72px down to 12px)
- Weight: Mix of ultra-light (100) and bold (700) for drama

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem, `space-2xl` 4rem, `space-3xl` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- Macro: Editorial spreads with generous padding (48px-96px)
- Micro: Tight line-height for fashion headlines (1.1)
- Grid: Asymmetric layouts, magazine-style columns
- Rhythm: Alternating dense/sparse content blocks

## States and motion

- Hover States: Subtle gold underlines, pink accents
- Transitions: Smooth, elegant (300ms ease)
- Focus: High-contrast gold outlines for accessibility
- Loading: Graceful fade-ins, shimmer effects

Timing values: `--transition-fast` 150ms ease, `--transition-base` 300ms ease, `--transition-slow` 500ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `color-white` 1.0:1, `color-pink` 2.6:1, `color-gold` 2.1:1, `stat-label-text` 2.8:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA: Black/white meets 21:1 contrast ratio
- Pink on White: ~~3.8:1~~ (sufficient for large text) — **measured 2.6:1** (not for body text)
- Gold on Black: ~~5.2:1~~ (sufficient for UI elements) — **measured 10.0:1**
- Focus Indicators: 3px solid gold outlines
- Semantic HTML: Proper heading hierarchy, ARIA labels

## Component inventory

The reference page composes these patterns from the tokens above:

- Cover Stories: Hero imagery with overlay typography
- Lookbook Cards: Gallery grid with hover reveals
- Trend Reports: Statistical cards with fashion metrics
- Designer Profiles: Minimalist bio cards with portraits
- Data Tables: Clean, sophisticated data presentation

## Further guidance

### Core Principles

- Editorial Sophistication: Vogue/Harper's Bazaar inspired layouts
- Dramatic Contrast: Pure black/white with strategic accent colors
- Typography Hierarchy: Didot/Bodoni style serif dominance
- Whitespace Mastery: Gallery-like spacing, breathing room
- Visual Drama: High-impact imagery placement patterns

### Performance Optimizations

- System Fonts: Fallback to native serif/sans stacks
- CSS Grid: Hardware-accelerated layouts
- Minimal Animations: Only transform/opacity changes
- No External Dependencies: Pure HTML/CSS

### Temperature

- Cool Stylish (4/10)
- Emotionally reserved, professionally distant
- Sophisticated restraint over warmth
- Aspirational rather than approachable

### Formality

- High Glamorous (8/10)
- Luxury brand aesthetic standards
- Editorial polish and refinement
- Prestige communication patterns

### Business Alignment

- Brand Positioning: Premium, aspirational, exclusive
- User Perception: Sophisticated, fashion-forward
- Competitive Edge: Editorial quality in digital spaces
- Conversion Strategy: Desire-driven engagement patterns

### Responsive Strategy

- Desktop: Full editorial spreads, asymmetric grids
- Tablet: Simplified columns, maintained hierarchy
- Mobile: Single column, preserved dramatic typography

## Not synced

Built from `style-52-fashion-magazine.html`. No component bundle: the reference page's markup is not packaged as live components.
