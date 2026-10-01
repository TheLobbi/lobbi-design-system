Drama, Movement & Emotional Intensity. Inspired by: Baroque palaces (Versailles), opera houses, Bernini sculptures, Caravaggio's dramatic lighting, ornate gilded frames, theatrical stagecraft.

**Blend:** Baroque Architecture 55% + Dramatic Typography 25% + Opera House 20%  
**Temperature:** 6/10 (warm) · **Formality:** 9/10 · **Tags:** premium, hospitality  
**Perfect for:** Opera Houses, Theaters, Performing Arts Centers

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Grand Opera House”, “Season Overview”, “La Traviata”, “Gala Evening”.
- Buttons are short verb phrases in Title Case: “Book Tickets”, “Preview”, “Reserve Now”, “Details”.
- Navigation uses single nouns: “Performances”, “Season”, “Artists”, “Membership”, “Events”, “Visit”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `royal-purple`, `gold-antique`, `gold-bright`, `cream-silk`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --royal-purple: #4a148c      → Imperial power, luxury, theatrical royalty
- --purple-deep: #311b92       → Deep velvet, dramatic shadows, mystery
- --purple-rich: #6a1b9a       → Regal sophistication, aristocratic elegance
- --gold-antique: #d4af37      → Gilded frames, baroque ornamentation
- --gold-bright: #ffd700       → Spotlight brilliance, theatrical lighting
- --gold-aged: #b8860b         → Aged gilt, patina of luxury
- --cream-silk: #faf8f4        → Silk damask, elegant fabrics, refinement
- --cream-warm: #f5f1e8        → Warm backgrounds, aged ivory
- --burgundy: #8b1538          → Wine velvet, dramatic accents, passion
- --burgundy-deep: #6d0f2b     → Deep shadows, emotional depth

## Typography

- `display` — "Bodoni Moda", Georgia, serif
- `body` — "Libre Caslon Text", Georgia, serif

Faces are hosted on Google Fonts (Bodoni Moda, Libre Caslon Text); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;600;700;900&family=Libre+Caslon+Text:wght@400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Bodoni Moda: Headlines - extreme contrast, dramatic vertical stress
- Libre Caslon Text: Body - classical refinement with baroque character
- Letter-spacing: Tight for display (-0.02em), normal for body
- Font scale: Extreme contrast from 0.875rem → 4rem (theatrical impact)
- Ligatures enabled for typographic elegance
- Optical sizing for display fonts

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-10` 10px, `space-16` 16px, `space-24` 24px, `space-32` 32px, `space-40` 40px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-full` 50px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Base unit: 1rem (16px) - baroque proportion
- Card padding: 2.5rem - generous palatial spacing
- Section gaps: 5rem - dramatic breathing room
- Border radius: 12px - soft baroque curves
- Ornamental borders: Multiple layered borders
- Asymmetric but balanced layouts

## States and motion

- Hover: Dramatic elevation with purple glow
- Active: Gold spotlight effect (0 0 30px rgba(255, 215, 0, 0.4))
- Focus: Bright gold border with high contrast
- Transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1) - theatrical timing
- Buttons: Gradient depth, velvet texture simulation

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `gold-bright` 1.3:1, `cream-silk` 1.0:1, `category-tag-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA minimum contrast ratios
- Royal-purple on cream-silk: 10.2:1 contrast ratio — **measured 11.2:1**
- Gold-antique on purple-deep: 4.9:1 contrast ratio — **measured 5.9:1**
- Burgundy on cream-warm: 8.7:1 contrast ratio — **measured 8.2–10.6:1**
- Focus visible states with 3px gold borders
- Semantic HTML with ARIA landmarks
- Keyboard navigation fully supported
- Screen reader optimized content hierarchy

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Purple gradient, gold crown accent, ornate borders
2. Navigation: Elegant spacing, gold underline animations
3. Stats Grid: 4-column with gilded frames
4. Cards: Layered shadows, gold corner flourishes, purple gradients
5. Buttons: Primary (purple velvet), Secondary (gold gilded)
6. Table: Purple headers, cream silk alternating rows
7. Form Elements: Ornate borders, elegant label transitions
8. Footer: Deep purple, gold decorative elements

## Further guidance

### Temperature

- (Moderately Warm)
- Purple adds coolness, gold adds warmth
- Burgundy provides emotional heat
- Overall: Passionate yet refined

### Formality

- (Very High - Theatrical Grandeur)
- Highly ceremonial and dramatic
- Luxurious without being understated
- Grand occasions and special events
- Appropriate for: luxury hospitality, opera houses,
- premium event venues, high-end brands, exclusive clubs

### Baroque Design Patterns

- Chiaroscuro lighting effects (dramatic light/shadow)
- Ornate corner decorations (scrollwork simulation)
- Layered depth and perspective
- Asymmetric balance (dynamic composition)
- Rich color harmonies (purple + gold + burgundy)
- Theatrical gradients (spotlight effects)
- Multiple border layers (frame within frame)

### Brand Positioning

- Target: Luxury hotels, opera houses, premium event venues,
- high-end hospitality, exclusive clubs, theatrical productions
- Competitive: Distinguished from minimalist luxury
- Trust signals: Grand tradition, theatrical excellence, prestige
- Emotional resonance: Awe, grandeur, passion, exclusivity

## Not synced

Built from `style-148-baroque-grandeur.html`. No component bundle: the reference page's markup is not packaged as live components.
