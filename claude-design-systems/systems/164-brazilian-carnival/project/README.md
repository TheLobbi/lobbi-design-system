Joy, Movement & Tropical Exuberance. Inspired by: Rio Carnival parades, Samba school costumes, Brazilian street art, Bossa nova album covers, Copacabana wave patterns, Tropical modernism architecture, Carnival float decorations, Brazilian football culture, Festa junina celebrations.

**Blend:** Brazilian Carnival 50% + Tropical Vibrant 30% + Samba Energy 20%  
**Temperature:** 9/10 (warm) · **Formality:** 3/10 · **Tags:** creative, media  
**Perfect for:** Brazilian Culture, Carnival Events, Latin Entertainment

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Brazilian Carnival Design”, “Festival Experiences”, “Samba Parade”, “Street Blocos”.
- Buttons are short verb phrases in Title Case: “Join the Parade”, “Find Blocos”, “Book Workshop”, “Get Tickets”.
- Navigation uses single nouns: “Home”, “Events”, “Parade”, “Samba”, “Gallery”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `green-500`, `green-700`, `orange-400`, `orange-600`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --green-500: #10b981       → Amazon rainforest, lush tropics, growth, vitality
- --green-600: #059669       → Deep jungle, ecological richness, life force
- --green-700: #047857       → Emerald depth, sustainable energy, nature
- --orange-400: #fb923c      → Sunset over Ipanema, warmth, enthusiasm
- --orange-500: #f97316      → Carnival energy, tropical fruit, celebration
- --orange-600: #ea580c      → Intense heat, passion, dynamic movement
- --purple-500: #a855f7      → Royal parade float, creativity, festivity
- --purple-600: #9333ea      → Deep costume jewels, mystery, artistic expression
- --purple-700: #7e22ce      → Regal Samba school colors, sophistication
- --gold-400: #fbbf24        → Sequined costumes, championship trophy, achievement
- --gold-500: #f59e0b        → Golden beach sand, prosperity, radiance
- --pink-500: #ec4899        → Hot pink feathers, vibrant joy, playfulness
- --pink-600: #db2777        → Magenta energy, bold celebration, passion
- --white-pure: #ffffff      → Tropical clouds, pristine beaches, clarity
- --cream-50: #fffbeb        → Warm sand, soft light, gentle warmth

## Typography

- `display` — Righteous, sans-serif
- `body` — Quicksand, sans-serif

Faces are hosted on Google Fonts (Righteous, Quicksand); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Righteous&family=Quicksand:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Righteous: Display headlines - bold, playful, carnival poster energy
- Quicksand: Body text - rounded, friendly, smooth like samba rhythms
- Letter-spacing: 0.02em for body, 0.05em for uppercase carnival announcements
- Font scale: 0.875rem (fine print) → 3rem (festival headlines) - dynamic range
- Line height: 1.65 - energetic rhythm with comfortable readability
- Font weight variations: Medium to Bold (never thin - always energetic)

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px, `space-40` 40px. Pad cards and sections from these steps only.
- Corners: `radius-15` 15px, `radius-20` 20px, `radius-30` 30px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Base unit: 8px - modular grid with playful flexibility
- Card padding: 1.5rem - comfortable but not rigid
- Section gaps: 3rem - breathing room for visual celebration
- Border radius: 20px - soft, friendly, organic curves (not sharp angles)
- Curved elements: Wave patterns, organic shapes, flowing dividers

## States and motion

- Hover: 6px lift with vibrant multi-color glow
- Active: Scale(0.97) with rotation (2deg) - bouncy carnival energy
- Focus: Thick 4px outline in contrasting carnival color
- Transition: 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55) - bouncy, playful
- Transform: Rotation + scale suggesting dance movement

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA minimum contrast ratios
- Green on white: 4.6:1 contrast ratio
- Purple on cream: 7.2:1 contrast ratio
- Orange text avoided on white (use as backgrounds/accents)
- Pink paired with dark text for readability
- High-contrast alternatives provided
- Focus indicators with 4px width for visibility
- Semantic HTML with descriptive ARIA labels
- Color patterns supplemented with icons/text
- Motion reduction support for accessibility

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Multi-color gradient background, wave pattern overlay, white text
2. Navigation: Bold links with colorful wave underlines on hover
3. Stats Grid: 4-column cards with vibrant gradient backgrounds
4. Content Cards: White base with colorful curved top sections
5. Data Table: Gradient headers, playful row hovers with color washes
6. Form Elements: Rounded inputs with colorful focus effects
7. Buttons: Primary (gradient), Secondary (outline), All with bounce effects
8. Footer: Deep gradient with wave pattern divider

## Further guidance

### Decorative System

- Wave patterns: Copacabana sidewalk-inspired wavy dividers
- Confetti effects: Scattered colorful dots and shapes
- Gradient overlays: Multi-color tropical gradients
- Organic shapes: Irregular rounded forms suggesting movement
- Layered depth: Multiple shadow layers creating parade float dimensionality

### Pattern System

- Primary: Wave patterns (Copacabana sidewalk inspiration)
- Secondary: Confetti scatter (celebration particles)
- Tertiary: Diagonal stripes (samba school flags)
- Rhythm: Asymmetric, syncopated visual beats
- Energy: Radiating gradients suggesting movement

### Temperature

- (Very Warm - Tropical Festival)
- Orange and gold create intense tropical warmth
- Green provides fresh tropical balance (warm green, not cool mint)
- Pink and purple add festive warmth
- Overall: Exuberant, life-affirming, beach party atmosphere

### Formality

- (Low - Festive Casual)
- Vibrant carnival palette breaks all corporate conventions
- Playful rounded typography suggests approachability
- Bouncy animations and curves over rigid structures
- Appropriate for: creative agencies, media, entertainment, tourism

### Brand Positioning

- Target: Creative agencies, media companies, entertainment brands, tourism
- Competitive: Stands out through authentic Brazilian cultural vibrancy
- Trust signals: Joyful energy, cultural celebration, creative excellence
- Emotional resonance: Joy, celebration, movement, tropical paradise, freedom
- Cultural sensitivity: Respectful celebration of Brazilian culture (not stereotypes)

### Cultural Authenticity

- Color combinations honor actual Carnival costume palettes
- Wave patterns reference iconic Copacabana sidewalk design
- Green-gold-blue honors Brazilian flag colors with creative liberty
- Energy reflects genuine Samba rhythm and festival atmosphere
- Modern interpretation maintains cultural respect and integrity

### Animation Philosophy

- Bouncy, energetic transitions (cubic-bezier easing)
- Micro-interactions with rotation suggesting dance
- Staggered animations creating parade-like sequence
- Colorful hover effects celebrating the palette
- Always respect motion-reduction preferences for accessibility

### Gradient Strategy

- Multi-stop gradients (3-4 colors) creating tropical sunset effects
- Diagonal gradients suggesting movement and energy
- Radial gradients for spotlight/celebration effects
- Animated gradient backgrounds (optional, subtle)
- Gradients used generously but purposefully

## Not synced

Built from `style-164-brazilian-carnival.html`. No component bundle: the reference page's markup is not packaged as live components.
