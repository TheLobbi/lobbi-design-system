This design system draws from the timeless beauty of Celtic art, where intricate knotwork symbolizes eternal connection, nature's patterns reflect sacred geometry, and every curve tells a story of ancient wisdom. The design honors Celtic heritage while creating a warm, approachable experience rooted in tradition and nature.

**Blend:** Celtic Knotwork 50% + Irish Heritage 30% + Nature Organic 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** heritage, association  
**Perfect for:** Celtic Heritage, Irish Organizations, Cultural Societies

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Celtic Circle”, “Ancient Wisdom”, “Heritage Tales”, “Heritage Registry”.
- Buttons are short verb phrases in Title Case: “Join Circle”, “Clear Form”, “Primary Action”, “Secondary Action”.
- Navigation uses single nouns: “Home”, “Heritage”, “Stories”, “Community”, “Contact”.
- The reference page uses emoji as inline glyphs (📅 👁 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `forest-green`, `celtic-gold`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Uncial Antiqua", cursive
- `body` — Merriweather, serif

Faces are hosted on Google Fonts (Uncial Antiqua, Merriweather); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Merriweather:wght@400;700;900&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Uncial Antiqua (Celtic-inspired display)
- Rationale: Evokes ancient Irish manuscripts and Celtic inscriptions,
- providing authentic historical character. The uncial letterforms connect
- directly to Celtic monastic tradition and illuminated manuscripts like
- the Book of Kells.

- Body: Merriweather (traditional serif)
- Rationale: Offers excellent readability with a warm, traditional feel
- that complements the Celtic aesthetic. The sturdy serifs suggest
- carved stone inscriptions while remaining highly legible for digital use.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 10px, `radius-lg` 16px, `radius-xl` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 300ms ease-in-out, `--transition-slow` 450ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `emerald` 4.1:1, `soft-gray` 3.1:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `celtic-gold` 2.2:1, `celtic-gold-light` 1.7:1, `cream` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- High contrast text pairings
- Clear focus indicators with gold outline
- Generous touch targets (min 44px)
- Semantic HTML structure
- ARIA labels for navigation
- Keyboard-friendly interactions

## Further guidance

### Cultural Context

- Forest Green: The lush landscapes of Ireland, growth, renewal
- Gold: Celtic treasures, divine light, spiritual illumination
- Cream: Ancient parchment, manuscript illuminations, timelessness
- Deep Brown: Earth connection, oak trees, grounding wisdom
- Soft Gray: Stone circles, misty mornings, Celtic monuments

### Temperature

- (Neutral to Cool)
- Forest green provides cool earthiness
- Warm gold balances coolness
- Cream and brown add warmth
- Natural, balanced palette
- Overall: Grounded and harmonious

### Formality

- (Formal)
- Heritage gravitas and tradition
- Refined, dignified presentation
- Historical depth and wisdom
- Professional yet approachable
- Balanced elegance and accessibility

- CONTRAST RATIOS (WCAG 2.1 AA Compliance):
- Primary text on cream: 13.1:1 (AAA)
- White text on forest green: 7.8:1 (AA)
- Text on gold background: 4.9:1 (AA)
- Brown text on cream: 8.7:1 (AA)

### Responsive Behavior

- Mobile (320px-767px): Single column, simplified ornaments
- Tablet (768px-1023px): Two-column grids, medium detail
- Desktop (1024px+): Full grid layouts, rich detail

### Use Cases

- Heritage associations and societies
- Cultural preservation organizations
- Historical museums and archives
- Traditional craft guilds
- Educational institutions
- Community cultural centers

### Tags

- heritage, association, traditional, cultural, organic

## Not synced

Built from `style-160-celtic-heritage.html`. No component bundle: the reference page's markup is not packaged as live components.
