Retro-futuristic engineering meets Victorian elegance in this alternate- history aesthetic where steam power evolved into sophisticated machinery. Every element celebrates the beauty of mechanical engineering, ornate craftsmanship, and the industrial revolution's marriage of function and decorative art. This is Jules Verne's vision brought to visual life. BLEND ANALYSIS (Total: 100%) 1. STEAMPUNK (55%) - Primary Foundation 2. VICTORIAN INDUSTRIAL (25%) - Historical Depth 3. BRASS MACHINERY (20%) - Material Accent PSYCHOLOGICAL IMPACT Emotional Response: Intellectual curiosity, adventurous spirit, appreciation for craftsmanship, nostalgia for an era that never was. Users feel like Victorian inventors exploring impossible technology. Cognitive Load: Medium - The ornate details and rich textures create visual interest without overwhelming, but the formal typography requires slightly more reading effort. User Expectation: Premium products, creative services, fantasy gaming, alternative history content, luxury experiences, artisan brands, cultural institutions with historical focus. Trust Signals: The emphasis on craftsmanship, visible mechanisms, and attention to ornate detail signals quality, transparency, and dedication to excellence. COLOR PSYCHOLOGY & IMPLEMENTATION.

**Blend:** Steampunk 55% + Victorian Industrial 25% + Brass Machinery 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** creative, premium  
**Perfect for:** Alternative Fashion, Unique Brands, Creative Services

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Where Steam Meets Innovation”, “Engineering Achievements”, “Featured Contraptions”, “Clockwork Navigator”.
- Buttons are short verb phrases in Title Case: “Examine”, “Specifications”, “Investigate”, “Details”.
- Navigation uses single nouns: “Inventions”, “Gallery”, “Workshop”, “Chronicles”, “Contact”.
- The reference page uses emoji as inline glyphs (⚙ ⚗ ⚡ 🎩 🔧 📜); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `color-brass-gold`, `color-leather-brown`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "IM Fell English SC", serif
- `body` — "Old Standard TT", serif

Faces are hosted on Google Fonts (IM Fell English SC, Old Standard TT); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- IM Fell English SC
- Rationale: Authentic 17th century English typeface revived for digital
- use. Small caps create Victorian formality and elegant hierarchy without
- excessive ornamentation. Originally cut by Christoffel van Dijck.
- Hierarchy: Regular weight for all headings (authentic to period)
- Character: Historical, elegant, authoritative, British Victorian
- Usage: Titles, navigation, section headers, prominent labels

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 3rem, `space-xl` 6rem, `grid-gap` 1.5rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 8px.
- Elevation: `shadow-inset`, `shadow-raised`, `shadow-brass`, `shadow-deep`, lowest first for resting cards, higher for hover and overlays.

- 12-column with Victorian proportions
- Based on classical architectural ratios
- 16px base unit (craftsman's standard)
- Generous padding mimics Victorian frame ornamentation
- Asymmetrical layouts create visual interest

## States and motion

- Brass polish effect (brightness increase)
- Steam vapor glow (subtle shadow expansion)
- Gear rotation hint (1-2 degree tilt)
- 400ms transitions (mechanical, deliberate)

Timing values: `--transition-base` 400ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-fast` 200ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-brass-gold` 2.7:1, `color-aged-copper` 3.1:1, `color-aged-cream` 1.0:1, `color-steam-white` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Leather on Cream: 11.2:1 (AAA) - Excellent readability
- Bronze on Cream: 10.5:1 (AAA) - Strong hierarchy — **measured 11.8:1**
- Brass on Leather: 4.8:1 (AA) - Accent emphasis — **measured 4.1:1** (not for body text)
- Copper on Cream: 5.2:1 (AA Large) - Secondary text — **measured 3.1:1** (not for body text)

## Component inventory

The reference page composes these patterns from the tokens above:

- Micro: 8px - Tight details, rivet spacing
- Small: 16px - Related elements, base unit
- Medium: 24px - Component separation
- Large: 48px - Section breaks
- XLarge: 96px - Major divisions

## Further guidance

### Primary Palette

- Brass Gold (#B8860B): Warmth, luxury, mechanical precision
- Aged Copper (#B87333): Oxidation, authenticity, industrial heritage
- Leather Brown (#4A2511): Grounding, craftsmanship, Victorian elegance
- Aged Cream (#F5E6D3): Parchment, aged paper, vintage warmth

### Supporting Palette

- Dark Bronze (#3B2414): Deep shadows, cast iron, depth
- Oxidized Green (#6B8E7B): Patina, aged brass, natural corrosion
- Steam White (#FAF7F0): Highlights, gas lamp glow, steam vapor
- Rivet Steel (#8B8680): Iron rivets, structural elements, contrast

### Body Font

- Old Standard TT
- Rationale: Based on classical old-style serif typefaces from late 19th
- century. Excellent readability with historical authenticity. Created
- specifically for academic and historical text reproduction.
- Hierarchy: 700 weight for emphasis, 400 for body, italics for quotes
- Character: Scholarly, readable, classically proportioned, warm
- Usage: Paragraphs, descriptions, table data, form labels

### Pairing Logic

- Both fonts share late 19th century typographic DNA, creating cohesive
- period authenticity. IM Fell's formality establishes hierarchy while
- Old Standard's readability ensures comfortable extended reading. The
- combination feels scholarly yet accessible, perfect for steampunk's
- intellectual adventure aesthetic.

- SPATIAL RELATIONSHIPS

### Elevation System

- Layered depth: Multiple shadow layers create dimension
- Embossed effects: Brass plate appearance
- Inset panels: Leather padding aesthetic
- Riveted borders: Industrial construction detail
- Engraved text: Subtle depth in typography

- INTERACTION PATTERNS

### Focus States

- Brass rivet border appearance
- Oxidized green outline for accessibility
- Maintains ornate aesthetic
- High contrast for keyboard navigation

### Active States

- Pressed brass plate effect (inset shadow)
- Darkening (pressure application)
- Satisfying mechanical feedback
- Quick 150ms response

### Loading States

- Rotating gear animations
- Steam pressure building effect
- Clockwork progression indicators
- Victorian pocket watch aesthetic

- RESPONSIVE BEHAVIOR

## Not synced

Built from `style-187-victorian-steampunk.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-size-base`.
