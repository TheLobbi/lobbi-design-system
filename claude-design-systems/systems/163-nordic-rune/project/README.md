Ancient Wisdom & Stoic Strength. Inspired by: Viking runestones, Norse mythology, Scandinavian heritage museums, Icelandic sagas, Elder Futhark alphabet, Nordic wood carving traditions, Norwegian stave churches, Swedish Viking Age artifacts, runic inscriptions.

**Blend:** Viking Heritage 50% + Norse Mythology 30% + Modern Nordic 20%  
**Temperature:** 3/10 (cool) · **Formality:** 7/10 · **Tags:** heritage, association  
**Perfect for:** Nordic Heritage, Viking Culture, Scandinavian Groups

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Nordic Rune Heritage”, “Heritage Programs”, “Runestone Archive”, “Saga Studies”.
- Buttons are short verb phrases in Title Case: “Explore Archive”, “Learn More”, “Join Workshop”, “View Profile”.
- Navigation uses single nouns: “Heritage”, “Sagas”, “Members”, “Events”, “Archive”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `slate-900`, `ice-blue-400`, `ice-blue-500`, `gold-400`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --slate-900: #0f172a        → Deep Nordic night, ancient stone, gravitas
- --slate-800: #1e293b        → Weathered rock, Viking age depth, stability
- --slate-700: #334155        → Storm clouds, timeless strength, heritage
- --slate-600: #475569        → Mountain stone, enduring foundations
- --ice-blue-400: #67e8f9     → Glacial ice, Arctic clarity, Nordic waters
- --ice-blue-500: #22d3ee     → Fjord waters, crystalline depth, purity
- --ice-blue-600: #06b6d4     → Deep ice, ancient frozen wisdom
- --charcoal-900: #18181b     → Charred wood, forge smoke, primordial dark
- --charcoal-800: #27272a     → Ash and ember, Viking hearth
- --wood-400: #a78bfa         → Warm aged wood, carved heritage
- --wood-500: #8b7355         → Oak beams, stave church timber
- --gold-400: #c4a65a         → Ancient gold artifacts, treasure hoards
- --gold-500: #b8945f         → Aged metal, Viking jewelry, precious heritage
- --stone-100: #f1f5f9        → Limestone, light granite, Nordic sky
- --stone-200: #e2e8f0        → Soft stone, parchment, aged vellum

## Typography

- `display` — Cinzel, serif
- `body` — "IBM Plex Sans", sans-serif

Faces are hosted on Google Fonts (Cinzel, IBM Plex Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Cinzel: Headlines - classical Roman-inspired serif suggesting runic inscriptions
- IBM Plex Sans: Body text - modern, technical, highly readable geometric sans
- Letter-spacing: 0.08em for headlines (suggesting carved rune spacing)
- Font scale: 0.875rem (body) → 2.5rem (display) - restrained hierarchy
- Line height: 1.7 - generous, readable, dignified spacing
- Font weight: Medium weights preferred (not ultra-light or ultra-bold)

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-16` 16px, `space-19.2` 19.2px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Base unit: 8px - modular grid suggesting stone masonry precision
- Card padding: 2rem - substantial, fortified borders
- Section gaps: 4rem - monumental spacing between elements
- Border radius: 4px - minimal rounding, angular strength
- Strong edges: 90-degree angles dominate (not soft curves)

## States and motion

- Hover: Subtle 2px lift with ice-blue glow (0 4px 16px rgba(34,211,238,0.2))
- Active: Slight darkening with deeper shadow
- Focus: Ice-blue outline with strong 3px width
- Transition: 0.3s ease - deliberate, weighted movement (not bouncy)
- Transform: Minimal scale changes (1.01 max) - restrained dignity

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA minimum contrast ratios
- Slate on stone: 12.5:1 contrast ratio (exceeds AAA)
- Ice-blue on charcoal: 8.2:1 contrast ratio
- Gold on slate: 6.9:1 contrast ratio
- Focus indicators with 3px ice-blue outline
- Semantic HTML with proper heading hierarchy
- ARIA landmarks for navigation
- High contrast mode fully supported
- Keyboard navigation with visible focus states

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Charcoal background, ice-blue accents, runic corner decorations
2. Navigation: Uppercase links, ice-blue underlines on hover, strong spacing
3. Stats Grid: 4-column cards with angular borders, stone backgrounds
4. Content Cards: Slate backgrounds, runic corner brackets, gold accents
5. Data Table: Slate headers, stone-striped rows, ice-blue highlights
6. Form Elements: Angular inputs, ice-blue focus rings, stone backgrounds
7. Buttons: Primary (ice-blue), Secondary (gold outline), Tertiary (slate ghost)
8. Footer: Deep charcoal with gold divider, runic pattern border

## Further guidance

### Decorative System

- Runic corner brackets: Angular decorative elements at card corners
- Stone texture: Subtle grain backgrounds suggesting carved rock
- Linear patterns: Straight geometric borders (no organic curves)
- Minimalist iconography: Simple, bold symbols
- Shadow depth: Layered shadows creating carved/etched effect

### Pattern System

- Primary: Angular runic corner brackets on cards
- Secondary: Horizontal divider lines (strong, bold)
- Tertiary: Subtle stone texture backgrounds
- Geometric: Right angles, straight lines, no curves
- Rhythm: Regular, measured spacing (suggesting deliberate carving)

### Temperature

- (Cool - Nordic)
- Ice-blue creates cold, crystalline atmosphere
- Slate grays reinforce cool stone aesthetic
- Warm wood and gold provide subtle warmth balance
- Overall: Cool, austere, dignified with controlled warmth accents

### Formality

- (High - Heritage Professional)
- Ancient symbolism conveys depth and gravitas
- Restrained color palette suggests seriousness
- Classical typography communicates authority
- Appropriate for: heritage associations, museums, professional societies

### Brand Positioning

- Target: Heritage associations, museums, cultural organizations, professional societies
- Competitive: Distinguished through authentic cultural depth vs generic corporate
- Trust signals: Ancient wisdom, timeless values, cultural preservation
- Emotional resonance: Strength, heritage, connection to ancestors, stoic dignity
- Cultural sensitivity: Respectful interpretation of Viking heritage (not costumes)

### Cultural Authenticity

- Runic elements based on historical Elder Futhark alphabet
- Color palette derived from Nordic landscape (stone, ice, wood, metal)
- Angular aesthetics honor Viking Age carving and metalwork techniques
- Symbolism references actual Norse mythology (not fantasy caricatures)
- Modern interpretation maintains cultural integrity and respect

### Symbolism Framework

- Ice-blue: Clarity, purity, Nordic waters and glaciers
- Slate: Endurance, strength, ancient runestones
- Gold: Precious heritage, Viking craftsmanship, valued knowledge
- Angular shapes: Carved runes, deliberate craftsmanship, strength
- Stone texture: Connection to earth, permanence, foundations

### Animation Philosophy

- Slow, deliberate transitions (nothing quick or bouncy)
- Weighted movement suggesting stone and metal
- Minimal transform effects (restrained dignity)
- Purposeful hover states (not playful)
- Respect for reduced motion preferences

## Not synced

Built from `style-163-nordic-rune.html`. No component bundle: the reference page's markup is not packaged as live components.
