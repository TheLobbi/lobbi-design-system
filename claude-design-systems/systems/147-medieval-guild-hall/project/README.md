Craftsmanship, Brotherhood & Timeless Quality. Inspired by: Medieval guildhalls, illuminated manuscripts, Gothic architecture, artisan workshops, trade unions, heraldic emblems, craftsman marks.

**Blend:** Medieval Design 50% + Craft Guild 30% + Heritage Dark 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** association, premium  
**Perfect for:** Traditional Guilds, Craft Associations, Heritage Groups

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Master Craftsmen Guild”, “Guild Chronicle”, “Master Certification Ceremony”, “Apprenticeship Program”.
- Buttons are short verb phrases in Title Case: “View Details”, “RSVP”, “Apply Now”, “Requirements”.
- Navigation uses single nouns: “Guild Hall”, “Members”, “Apprentices”, “Ceremonies”, “Archives”, “Registry”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `oak-brown`, `gold-burnished`, `red-guild`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --oak-brown: #5d4037        → Solid craftsmanship, aged timber, guild halls
- --walnut: #4a2c2a           → Deep wood grain, master's bench, tradition
- --mahogany: #3e2723         → Rich heritage, polished furniture, authority
- --gold-burnished: #c9a85c   → Guild seals, achievement medals, master status
- --gold-leaf: #d4af37        → Illuminated manuscripts, prestige, honor
- --red-guild: #b71c1c        → Seal wax, ceremonial robes, pride
- --red-deep: #8b0000         → Leather bindings, authority, gravitas
- --parchment: #f4e8d0        → Ancient documents, scrolls, knowledge
- --cream-aged: #e8dcc0       → Aged paper, vellum, historical records
- --charcoal: #2c2c2c         → Iron work, shadows, depth

## Typography

- `display` — "Uncial Antiqua", cursive
- `body` — Merriweather, Georgia, serif

Faces are hosted on Google Fonts (Uncial Antiqua, Merriweather); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Merriweather:wght@400;700;900&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Uncial Antiqua: Headlines - medieval calligraphic tradition
- Merriweather: Body text - readable with historical character
- Letter-spacing: Slightly expanded for medieval inscription feel
- Font scale: 0.875rem (fine text) → 2.5rem (chapter headings)
- Drop caps consideration for major sections
- Decorative initial letters (illuminated manuscript aesthetic)

## Spacing, shape and elevation

- Spacing steps: `space-6-4` 6.4px, `space-8` 8px, `space-14` 14px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-3` 3px, `radius-4` 4px, `radius-full` 50px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Base unit: 0.75rem (12px) - medieval modular construction
- Card padding: 2rem - generous guild hall spacing
- Section gaps: 3rem - ceremonial breathing room
- Border radius: 4px - minimal (medieval architecture has sharp corners)
- Heavy borders: 3-4px for authority and solidity
- Texture layering: Multiple backgrounds for depth

## States and motion

- Hover: Warm glow effect (candlelight simulation)
- Active: Burnished gold highlight
- Focus: Red guild seal border for accessibility
- Transition: 0.25s ease - weighty, deliberate movement
- Buttons: Embossed appearance, leather texture hints

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `oak-brown` 1.5:1, `walnut` 1.1:1, `mahogany` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA minimum contrast ratios
- Parchment on mahogany: 11.4:1 contrast ratio
- Gold-leaf on oak-brown: 5.2:1 contrast ratio — **measured 4.4:1** (not for body text)
- Red-guild on parchment: 7.8:1 contrast ratio — **measured 5.4:1**
- Focus visible states with 3px borders
- Semantic HTML with proper headings
- Skip navigation for assistive technologies
- High contrast mode compatibility

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Dark wood gradient, gold guild seal accent
2. Navigation: Bold links, underline on active state
3. Stats Grid: 4-column with burnished borders
4. Cards: Parchment backgrounds, red wax seal badges
5. Buttons: Primary (guild red), Secondary (burnished gold)
6. Table: Dark headers, alternating parchment rows
7. Form Elements: Heavy borders, label above input
8. Footer: Dark mahogany, gold divider line

## Further guidance

### Temperature

- (Neutral Warm)
- Warm browns and golds balanced with cool shadows
- Candlelight warmth without excessive heat
- Welcoming but dignified

### Formality

- (Moderately High - Ceremonial)
- Traditional but not rigid
- Proud craftsmanship without pretension
- Ceremonial occasions balanced with daily function
- Appropriate for: trade associations, craft guilds,
- heritage organizations, professional societies, artisan collectives

### Medieval Design Patterns

- Illuminated letter aesthetics (decorative capitals)
- Heraldic color combinations (red + gold + brown)
- Wax seal badge treatments
- Gothic pointed arch hints in borders
- Texture overlays (wood grain, parchment)
- Heavy, solid borders (stone/timber construction)
- Layered shadows (candlelight depth)

### Brand Positioning

- Target: Trade associations, craft guilds, professional societies,
- artisan cooperatives, heritage brands, traditional organizations
- Competitive: Distinguished from corporate minimalism
- Trust signals: Craftsmanship, tradition, quality, brotherhood
- Emotional resonance: Pride, heritage, mastery, belonging

## Not synced

Built from `style-147-medieval-guild-hall.html`. No component bundle: the reference page's markup is not packaged as live components.
