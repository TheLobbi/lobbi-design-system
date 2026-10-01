This design system captures the opulent sophistication of Saharan oasis luxury, blending the warmth of golden desert sands with the geometric precision of Moorish architecture and the resourceful elegance of nomadic heritage. Every element evokes the contrast between harsh desert and lush oasis, creating a visual language of refined refuge, cultural richness, and timeless beauty.

**Blend:** Desert Luxury 55% + Geometric Moorish 30% + Nomadic Heritage 15%  
**Temperature:** 9/10 (warm) · **Formality:** 7/10 · **Tags:** premium, hospitality  
**Perfect for:** Desert Resorts, Middle Eastern Luxury, Saharan Tourism

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Saharan Oasis Society”, “Society Impact”, “Featured Programs”, “Member Registry”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Clear Form”, “Join Society”, “View Programs”.
- Navigation uses single nouns: “Home”, “Members”, “Events”, “Heritage”, “Contact”.
- The reference page uses emoji as inline glyphs (📅 👥 🎨 💡 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `desert-gold`, `golden-sand`, `oasis-teal`, `teal-dark`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Desert Gold (#ca8a04): Prosperity, warmth, luxury, tradition, precious value
- Oasis Teal (#0d9488): Life, refreshment, vitality, rare beauty, sanctuary
- Sandstone (#d6d3d1): Stability, endurance, heritage, natural elegance
- Night Sky Navy (#1e293b): Depth, mystery, cosmic connection, authority
- Spice Terracotta (#c2410c): Energy, tradition, earthiness, cultural richness

## Typography

- `display` — "El Messiri", sans-serif
- `body` — Rubik, sans-serif

Faces are hosted on Google Fonts (El Messiri, Rubik); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;600;700&family=Rubik:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: El Messiri (Arabic-influenced elegance)
- Rationale: El Messiri brings authentic Arabic design sensibility with its
- elegant letterforms inspired by traditional Arabic calligraphy. The refined
- curves and distinctive character provide cultural authenticity while
- maintaining excellent Latin script readability. Weight variations (400/600/700)
- offer hierarchical clarity with Middle Eastern aesthetic integrity.

- Body: Rubik (modern geometric readability)
- Rationale: Rubik's geometric construction echoes Moorish architectural
- precision while providing exceptional legibility across all contexts. The
- slightly rounded corners add warmth that complements the desert luxury theme
- without sacrificing professionalism. Its open letterforms ensure accessibility
- while the uniform structure maintains visual harmony with geometric patterns.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 14px, `radius-xl` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `glow-gold`, lowest first for resting cards, higher for hover and overlays.

- Geometric Star Patterns: Eight-pointed stars in backgrounds and accents
- Sand Dune Gradients: Flowing warm gradients suggesting desert landscapes
- Palm Motifs: Organic shapes referencing oasis vegetation
- Moorish Arch Elements: Pointed arch shapes in card headers and panels
- Tile Border Patterns: Geometric borders inspired by zellige mosaic work
- Layered Shadows: Multiple shadow layers suggesting desert light depth

- CONTRAST RATIOS (WCAG 2.1 AA+ Compliance):
- Primary text on sandstone: 11.4:1 (AAA)
- White text on desert gold: 4.8:1 (AA)
- Text on oasis teal: ~~6.2:1~~ (AA+) — **measured 2.8:1** (not for body text)
- Navy text on sand: 9.7:1 (AAA)
- Gold on navy: 7.3:1 (AA+)

## States and motion

- Smooth golden glow on hover suggesting desert warmth
- Gentle lift animations evoking desert mirages
- Color transitions from gold to teal suggesting oasis discovery
- Focus states with oasis teal outline for clarity and beauty
- Button interactions with subtle shine effects
- Geometric pattern reveals on interaction
- 300ms transitions reflecting leisurely oasis pace

Timing values: `--transition-fast` 200ms ease-in-out, `--transition-base` 300ms ease-in-out, `--transition-slow` 500ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `oasis-teal` 3.5:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `desert-gold` 2.8:1, `golden-sand` 1.0:1, `sand-light` 1.0:1, `sand-dark` 2.4:1, `pure-white` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- High contrast text pairings meeting AA+ standards
- Clear focus indicators with teal outline (3px, high visibility)
- Generous touch targets (minimum 44x44px for desert heat usability)
- Semantic HTML5 structure with comprehensive ARIA
- ARIA labels for all navigation and interactive elements
- Keyboard-friendly with visible, elegant focus states
- Skip link for efficient screen reader navigation
- Never using color as sole indicator of state
- Sufficient spacing for users with motor challenges
- Pattern and texture as additional state indicators

## Component inventory

The reference page composes these patterns from the tokens above:

- Geometric Star Patterns: Eight-pointed stars in backgrounds and accents
- Sand Dune Gradients: Flowing warm gradients suggesting desert landscapes
- Palm Motifs: Organic shapes referencing oasis vegetation
- Moorish Arch Elements: Pointed arch shapes in card headers and panels
- Tile Border Patterns: Geometric borders inspired by zellige mosaic work
- Layered Shadows: Multiple shadow layers suggesting desert light depth

- CONTRAST RATIOS (WCAG 2.1 AA+ Compliance):
- Primary text on sandstone: 11.4:1 (AAA)
- White text on desert gold: 4.8:1 (AA)
- Text on oasis teal: ~~6.2:1~~ (AA+) — **measured 2.8:1** (not for body text)
- Navy text on sand: 9.7:1 (AAA)
- Gold on navy: 7.3:1 (AA+)

## Further guidance

### Cultural Context

- Desert Gold: Sunset over sand dunes, precious metal of ancient trade routes
- Oasis Teal: Life-giving water, palm-shaded pools, precious resource
- Sandstone: Ancient architecture, carved monuments, enduring structures
- Night Sky Navy: Desert night clarity, infinite star fields, cosmic majesty
- Spice Terracotta: Market treasures, earthenware, traditional crafts

### Temperature

- (Hot Desert)
- Dominant warm golds and desert tones
- Sandstone and terracotta earth warmth
- Oasis teal providing refreshing contrast
- Night navy adding depth while maintaining warmth
- Overall: Inviting, luxurious, sun-drenched atmosphere

### Formality

- (Formal with Warmth)
- Cultural sophistication and heritage authority
- Luxury refinement with accessible warmth
- Structured yet inviting presentation
- Professional gravitas with human connection
- Balance: Prestigious yet welcoming, formal yet warm

### Responsive Behavior

- Mobile (320px-767px): Single column oasis, priority content surfaced
- Tablet (768px-1023px): Two-column layouts, balanced proportions
- Desktop (1024px+): Multi-column luxury, optimal information hierarchy
- Fluid typography maintaining golden ratio at all scales
- Touch-optimized spacing on mobile (accounting for outdoor usage)
- Hover enhancements on desktop with subtle golden glows

### Use Cases

- Luxury hospitality and resort management
- Cultural heritage and preservation societies
- International trade and commerce associations
- Middle Eastern business councils and forums
- Desert tourism and eco-tourism organizations
- Art and architecture preservation foundations
- Premium retail and luxury goods associations

### Tags

- luxury, cultural, desert, sophisticated, warm, heritage

## Not synced

Built from `style-228-saharan-oasis.html`. No component bundle: the reference page's markup is not packaged as live components.
