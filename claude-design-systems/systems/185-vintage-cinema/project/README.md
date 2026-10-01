Silver screen glamour meets dramatic noir lighting in this homage to Hollywood's golden age. Every element evokes the sophisticated elegance of classic cinema, from art deco marquee lettering to velvet curtain richness. The aesthetic captures the timeless drama and theatrical presence of 1920s-1950s filmmaking. BLEND ANALYSIS (Total: 100%) 1. CLASSIC HOLLYWOOD (55%) - Primary Foundation 2. FILM NOIR (25%) - Atmospheric Depth 3. THEATER MARQUEE (20%) - Showmanship Accent PSYCHOLOGICAL IMPACT Emotional Response: Nostalgic elegance, dramatic sophistication, timeless quality. Users feel transported to an era of craftsmanship and grandeur. Cognitive Load: Medium - The high formality and dramatic contrast create clear visual hierarchy but require focus and attention to detail. User Expectation: Premium content, artistic media, cultural institutions, entertainment industry brands, luxury experiences. Trust Signals: The historical gravitas and formal presentation establish credibility through association with Hollywood's golden age quality. COLOR PSYCHOLOGY & IMPLEMENTATION.

**Blend:** Classic Hollywood 55% + Film Noir 25% + Theater Marquee 20%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** media, premium  
**Perfect for:** Film Festivals, Cinema Organizations, Entertainment Venues

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “The Golden Age Returns”, “Box Office Statistics”, “Featured Presentations”, “The Silver Screen”.
- Buttons are short verb phrases in Title Case: “Watch Now”, “Details”, “Explore”, “Preview”.
- Navigation uses single nouns: “Features”, “Gallery”, “Premieres”, “About”, “Contact”.
- The reference page uses emoji as inline glyphs (★ ♦ ⭐ 🎬 🎭 📽); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-velvet-red`, `color-hollywood-gold`, `color-cream`, `color-dark-burgundy`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Playfair Display SC", serif
- `body` — "Crimson Text", serif

Faces are hosted on Google Fonts (Playfair Display SC, Crimson Text); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Playfair Display SC
- Rationale: Classic serif with theatrical small caps evokes movie title
- cards and marquee lettering. High contrast strokes create drama.
- Hierarchy: 900 weight for hero/H1, 700 for H2-H3, 400 for H4-H6
- Character: Sophisticated, theatrical, timeless elegance
- Usage: Titles, navigation, calls-to-action, card headers

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 3rem, `space-xl` 6rem, `grid-gap` 1.5rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-gold-glow`, `shadow-red-glow`, lowest first for resting cards, higher for hover and overlays.

- 12-column with dramatic proportions
- Golden ratio (1.618) influences spacing and card dimensions
- 24px base unit for consistent rhythm (classic 24fps cinema)
- Generous white space creates "breathing room" like wide film frames

## States and motion

- Gold underline fade-in (marquee light effect)
- Subtle scale (1.02) suggesting film reel click
- Shadow intensification (spotlight focus)
- 300ms transitions (smooth, theatrical timing)

Timing values: `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 500ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 19.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- Black on White: 19.5:1 (AAA) - Maximum readability
- White on Black: 19.5:1 (AAA) - Dramatic reverse
- Gold on Black: 9.8:1 (AA Large) - Accent hierarchy
- Red on Cream: 7.2:1 (AA) - Warm secondary

## Component inventory

The reference page composes these patterns from the tokens above:

- Micro: 8px - Tight elements, button padding
- Small: 16px - Related content grouping
- Medium: 24px - Component separation (base unit)
- Large: 48px - Section breaks (double base)
- XLarge: 96px - Major divisions (quadruple base)

## Further guidance

### Primary Palette

- Rich Black (#0A0A0A): Depth, sophistication, film emulsion darkness
- Pure White (#FAFAFA): Clarity, silver screen brightness, spotlights
- Velvet Red (#8B1538): Passion, drama, theater curtains, premiere glamour
- Hollywood Gold (#D4AF37): Prestige, awards, marquee lights, luxury

### Supporting Palette

- Shadow Gray (#1A1A1A): Noir atmosphere, depth layering
- Cream (#F5F1E8): Aged film stock, vintage paper, soft highlights
- Dark Burgundy (#4A0E1E): Deep velvet shadows, rich accents

### Body Font

- Crimson Text
- Rationale: Elegant old-style serif with excellent readability,
- reminiscent of film scripts and vintage print publications
- Hierarchy: 700 weight for emphasis, 600 for strong, 400 for body
- Character: Literary, refined, highly readable, warm
- Usage: Paragraphs, descriptions, table data, form labels

### Pairing Logic

- Both fonts share classical serif DNA but differ in formality levels.
- Playfair's high contrast and dramatic stress create headlines worthy
- of a marquee, while Crimson's moderate contrast ensures comfortable
- extended reading. Together they balance showmanship with substance.

- SPATIAL RELATIONSHIPS

### Elevation System

- Shadow-01: Subtle depth for cards (film grain texture)
- Shadow-02: Moderate lift for interactive elements
- Shadow-03: Dramatic noir shadows for modals and overlays
- Glow: Gold rim light effect for premium elements

- INTERACTION PATTERNS

### Focus States

- 3px gold outline for keyboard navigation
- High contrast for accessibility
- Maintains dramatic aesthetic while ensuring usability

### Active States

- Slight scale-down (0.98) for tactile feedback
- Brightness increase on gold elements
- Red velvet glow on primary actions

### Loading States

- Film reel spin animation
- Fade transitions between states
- Shimmer effect on cards (projector light sweep)

- RESPONSIVE BEHAVIOR

## Not synced

Built from `style-185-vintage-cinema.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-size-base`.
