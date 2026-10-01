Celebration of Life & Handcrafted Beauty. Inspired by: Mexican Talavera pottery, Oaxacan alebrijes, Día de los Muertos art, Frida Kahlo's palette, papel picado (cut paper banners), Puebla ceramic traditions, Mexican muralism movement, vibrant mercado (marketplace) energy.

**Blend:** Mexican Talavera 50% + Folk Art Vibrant 30% + Festive Color 20%  
**Temperature:** 9/10 (warm) · **Formality:** 4/10 · **Tags:** creative, hospitality  
**Perfect for:** Mexican Culture, Latin Arts, Festive Venues

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Mexican Folk Art Design System”, “Featured Collections”, “Talavera Pottery”, “Alebrije Sculptures”.
- Buttons are short verb phrases in Title Case: “Explore Collection”, “View Gallery”, “Learn More”, “View Portfolio”.
- Navigation uses single nouns: “Home”, “Gallery”, “Artists”, “Events”, “Shop”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `turquoise-500`, `turquoise-700`, `pink-500`, `yellow-400`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --turquoise-500: #06b6d4    → Caribbean waters, creativity, spiritual protection
- --turquoise-600: #0891b2    → Deeper ocean, cultural depth, artisan tradition
- --turquoise-700: #0e7490    → Ancient jade, precious heritage, stability
- --pink-500: #ec4899         → Hot pink papel picado, passion, celebration
- --pink-600: #db2777         → Vibrant magenta, bold creativity, life force
- --yellow-400: #facc15       → Marigold flowers (cempasúchil), sunshine, joy
- --yellow-500: #eab308       → Golden warmth, harvest abundance, prosperity
- --cobalt-600: #1e40af       → Talavera cobalt, traditional craftsmanship
- --cobalt-700: #1e3a8a       → Deep ceramic glaze, reliable foundation
- --orange-500: #f97316       → Terra cotta, earth connection, warmth
- --orange-600: #ea580c       → Spicy chile pepper, energy, vitality
- --white-pure: #ffffff       → Ceramic base, purity, canvas for color
- --cream-50: #fefce8         → Aged paper, soft contrast, warmth

## Typography

- `display` — "Abril Fatface", serif
- `body` — Nunito, sans-serif

Faces are hosted on Google Fonts (Abril Fatface, Nunito); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Nunito:wght@400;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Abril Fatface: Display headlines - bold, dramatic, festive presence
- Nunito: Body text - rounded, friendly, highly readable, approachable
- Letter-spacing: -0.02em for headlines (tight, impactful), 0.01em for body
- Font scale: 0.875rem (caption) → 3rem (hero) - exuberant hierarchy
- Line height: 1.6 - comfortable reading with energetic rhythm

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px, `space-48` 48px. Pad cards and sections from these steps only.
- Corners: `radius-12` 12px, `radius-16` 16px, `radius-25` 25px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Base unit: 8px - modular grid with playful flexibility
- Card padding: 1.5rem - comfortable framing without rigid formality
- Section gaps: 3rem - generous breathing room for visual celebration
- Border radius: 16px - soft, friendly, handcrafted feel
- Asymmetric accents: Intentional irregularity suggesting hand-painted charm

## States and motion

- Hover: 4px lift with vibrant colored glow (matching element color at 0.3 opacity)
- Active: Scale(0.98) with deeper color saturation
- Focus: Thick 4px outline in contrasting bright color
- Transition: 0.2s ease - quick, lively, responsive
- Transform: Slight rotation (1deg) on some hovers for playful energy

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA minimum contrast ratios
- Turquoise on white: 4.8:1 contrast ratio
- Pink on white: 4.7:1 contrast ratio
- Cobalt on cream: 9.1:1 contrast ratio
- Yellow text avoided on white (use as backgrounds/accents only)
- High-contrast mode support
- Focus indicators with 4px width for clarity
- Semantic HTML with descriptive ARIA labels
- Color never the only differentiator (icons + text)

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Vibrant gradient background, white text, decorative border pattern
2. Navigation: Bold links with colorful underlines on hover
3. Stats Grid: 4-column cards with mixed bright backgrounds
4. Content Cards: White base with colorful top borders and playful shadows
5. Data Table: Alternating row colors, cobalt headers, colorful badges
6. Form Elements: Rounded inputs with colored focus rings
7. Buttons: Primary (pink gradient), Secondary (turquoise), Tertiary (yellow accent)
8. Footer: Cobalt background with geometric pattern overlay

## Further guidance

### Decorative System

- Talavera patterns: Geometric florals, sun motifs, organic curves
- Papel picado borders: Perforated edge effects on dividers
- Alebrije colors: Unexpected color combinations with high energy
- Hand-drawn feel: Slightly irregular borders, organic shapes
- Layered shadows: Colorful multi-tone shadows (not just gray)

### Pattern System

- Talavera tiles: Geometric floral patterns in headers/footers
- Dotted borders: Hand-painted ceramic bead effect
- Zigzag dividers: Festive energy between sections
- Organic shapes: Irregular rounded rectangles for cards
- Color blocks: Bold, unapologetic color field backgrounds

### Temperature

- (Very Warm - Festive)
- Hot pink and orange create intense warmth
- Sunny yellow radiates joy and energy
- Turquoise provides refreshing balance without cooling too much
- Overall: Exuberant, life-affirming, celebratory warmth

### Formality

- (Low-Mid - Approachable Creative)
- Playful color palette breaks corporate conventions
- Rounded typography suggests friendliness
- Hand-crafted aesthetic over polished perfection
- Appropriate for: creative agencies, hospitality, cultural organizations, media

### Brand Positioning

- Target: Creative agencies, cultural tourism, hospitality, media companies
- Competitive: Stands out through authentic cultural vibrancy vs sterile minimalism
- Trust signals: Artisan quality, cultural authenticity, handcrafted care
- Emotional resonance: Joy, celebration, creativity, cultural pride, warmth
- Cultural sensitivity: Respectful celebration of Mexican folk art traditions

### Cultural Authenticity

- Color combinations honor traditional Talavera pottery glazes
- Patterns reference real folk art motifs (not caricatures)
- Asymmetry celebrates handmade imperfection as beauty
- Vibrancy reflects genuine cultural aesthetic, not stereotypes
- Modern interpretation maintains cultural integrity

### Animation Philosophy

- Lively but not chaotic
- Quick transitions suggesting hand-crafted responsiveness
- Playful micro-interactions (slight rotations, bounces)
- Color transitions on hover celebrate the palette
- Respect motion-reduction preferences for accessibility

### Use Cases

- Creative agency portfolios
- Cultural tourism platforms
- Boutique hotel booking systems
- Restaurant and hospitality brands
- Art gallery and museum exhibits
- Event planning platforms
- Craft marketplace websites
- Media and entertainment brands
- Community cultural centers
- Festival and celebration sites

## Not synced

Built from `style-162-mexican-folk-art.html`. No component bundle: the reference page's markup is not packaged as live components.
