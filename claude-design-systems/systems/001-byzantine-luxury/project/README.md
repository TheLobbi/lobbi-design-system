Imperial Opulence & Sacred Authority. Inspired by: Byzantine Empire aesthetics, Orthodox iconography, Hagia Sophia mosaics.

**Blend:** Byzantine 80% + Luxury Dark 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** premium, heritage  
**Perfect for:** Heritage Organizations, Religious Institutions, Museums

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Association Management”, “Dashboard Overview”, “Annual Conference 2025”, “Membership Renewal”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Send Reminders”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Communications”, “Reports”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `burgundy-600`, `gold-400`, `gold-600`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --burgundy-600: #b83256    → Imperial authority, passion, power
- --burgundy-700: #9a2548    → Depth of royalty, commanding presence
- --burgundy-800: #812241    → Ancient wisdom, sacred institutions
- --burgundy-900: #6e203b    → Foundation of empire, gravitas
- --gold-400: #fbbf24        → Divine light, prosperity, excellence
- --gold-500: #d4a520        → Wealth, prestige, achievement
- --gold-600: #b8860b        → Aged gold, timeless value
- --sapphire: #1e3a5f        → Trust, depth, intellectual authority
- --ruby: #9f1239            → Precious value, VIP status
- --emerald: #065f46         → Growth, prosperity, renewal
- --amethyst: #581c87        → Spiritual wisdom, creativity
- --paper-100: #faf8f5       → Parchment, aged elegance, warmth
- --stone-900: #1c1917       → Foundation, contrast, stability

## Typography

- `display` — "Playfair Display", serif
- `body` — Inter, system-ui, sans-serif

Faces are hosted on Google Fonts (Playfair Display, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Playfair Display: Headlines, titles - classic serif elegance
- Inter: Body text, UI elements - modern readability
- Letter-spacing: 0.05-0.1em for uppercase elements (imperial inscriptions)
- Font scale: 0.75rem (fine) → 3rem (display)

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-12` 12px, `radius-full` 50px.

- Base unit: 0.5rem (8px) - Byzantine modular grid
- Card padding: 1.5rem - generous, dignified spacing
- Section gaps: 3rem - ceremonial breathing room
- Border radius: 12px - softened imperial edges

## States and motion

- Hover: 4px elevation lift with gold glow (0 20px 40px rgba(212,165,32,0.15))
- Active: Deeper burgundy with intensified shadow
- Focus: Gold border highlight for accessibility
- Transition: 0.3s ease - dignified, unhurried movement

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `stone-900` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA minimum contrast ratios
- Gold on burgundy: 7.2:1 contrast ratio — **measured 1.8–6.5:1**
- Paper on stone: 12.4:1 contrast ratio — **measured 16.5:1**
- Focus visible states on all interactive elements
- Semantic HTML structure with proper heading hierarchy

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Gold gradient text, burgundy background, double-border treatment
2. Navigation: Uppercase links, gold hover underlines
3. Stats Grid: 4-column metrics with sapphire-tinted backgrounds
4. Cards: Gradient backgrounds, gold top borders, jewel badges
5. Buttons: Primary (burgundy gradient), Secondary (gold outline)
6. Table: Burgundy headers, alternating row hover
7. Footer: Burgundy background, gold top border

## Further guidance

### Temperature

- (Warm Imperial)
- Rich burgundy warmth balanced with cool sapphire accents
- Gold creates visual warmth and invitation
- Dark backgrounds provide sophisticated contrast

### Formality

- (Very High - Imperial)
- Ceremonial, prestigious presentation
- Jewel tone palette signals exclusivity
- Serif typography adds classical authority
- Appropriate for: luxury associations, heritage organizations, executive boards

### Brand Positioning

- Target: Elite membership organizations, heritage societies
- Competitive: Distinguished from minimalist SaaS aesthetics
- Trust signals: Historical gravitas, institutional permanence
- Emotional resonance: Belonging, prestige, tradition

## Not synced

Built from `style-1-byzantine-luxury.html`. No component bundle: the reference page's markup is not packaged as live components.
