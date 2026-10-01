Imperial authority embodied in digital form. This style channels the eternal power of Roman governance, architectural permanence, and legal precision. Like the Roman Forum where laws were carved in marble, this design creates an immutable sense of authority and timeless institutional strength.

**Blend:** Roman Classical 55% + Law Firm Authority 25% + Marble Material 20%  
**Temperature:** 3/10 (cool) · **Formality:** 10/10 · **Tags:** professional, association  
**Perfect for:** Law Firms, Legal Institutions, Justice Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Imperial Metrics”, “Legal Divisions”, “Constitutional Law”, “Corporate Governance”.
- Buttons are short verb phrases in Title Case: “Submit Petition”, “Schedule Consultation”, “Clear Form”, “Primary Action”.
- Navigation uses single nouns: “Governance”, “Legislation”, “Archives”, “Tribunal”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-imperial-red`, `color-bronze`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Marble White (#FAF9F7): Purity, classical architecture, institutional trust
- Imperial Red (#8B1A1A): Roman power, legal authority, decisive action
- Bronze (#A0754A): Ancient prestige, timeless value, earned status
- Charcoal Gray (#2C2C2C): Gravitas, permanence, shadow of monuments

## Typography

- `display` — Cinzel, serif
- `body` — "Source Serif Pro", serif

Faces are hosted on Google Fonts (Cinzel, Source Serif Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Source+Serif+Pro:wght@400;600;700&display=swap">
```

- Set titles in `display` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-3`, `heading-4`, `label`), always with the letter-spacing given.

### Type rationale

- Cinzel: Modern interpretation of Trajan's Column inscriptions
- Uppercase for maximum authority (headlines, navigation)
- Balanced proportions for digital legibility
- Weighted variants for hierarchy (400/600/700)

- Source Serif Pro: Contemporary legal document clarity
- High x-height for screen reading
- Strong serifs for professional tone
- Versatile weights for content hierarchy

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem, `content-padding` 1.5rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 2px, `border-radius-md` 4px, `border-radius-lg` 6px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

1. Header: Imperial banner with columnar navigation
2. Stats Grid: Four-pillar metric display (quadriga symbolism)
3. Content Cards: Marble-like containers with bronze accents
4. Data Table: Legal document precision with sortable columns
5. Forms: Petition-style input with formal validation
6. Buttons: Tiered authority (primary/secondary/tertiary)
7. Badges: Status indicators with imperial color coding
8. Footer: Foundation stone with archival information

## States and motion

- Entering this interface feels like stepping into the Pantheon—immediate
- recognition of authority, permanence, and institutional weight. Users experience
- the psychological impact of classical architecture: respect for tradition,
- confidence in stability, and trust in established systems.

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 400ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ✓ WCAG 2.1 AA contrast ratios (4.5:1 body text, 3:1 large text)
- ✓ Focus indicators for keyboard navigation (2px bronze outline)
- ✓ Semantic HTML structure (landmarks, headings, labels)
- ✓ Responsive typography (clamp() for fluid scaling)
- ✓ Touch targets minimum 44x44px

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Imperial banner with columnar navigation
2. Stats Grid: Four-pillar metric display (quadriga symbolism)
3. Content Cards: Marble-like containers with bronze accents
4. Data Table: Legal document precision with sortable columns
5. Forms: Petition-style input with formal validation
6. Buttons: Tiered authority (primary/secondary/tertiary)
7. Badges: Status indicators with imperial color coding
8. Footer: Foundation stone with archival information

## Further guidance

### Temperature & Formality

- Temperature: 3/10 (Cold) - Marble coolness, institutional distance
- Formality: 10/10 (Maximum) - Imperial court, legal chambers, state functions
- Authority Level: 10/10 - Unquestionable institutional power

### Responsive Strategy

- Mobile-first foundation (320px base)
- Tablet breakpoint: 768px (adjusted grid columns)
- Desktop breakpoint: 1024px (full multi-column layouts)
- Large desktop: 1440px (maximum content width)

### Use Cases

- Law firms and legal associations
- Government portals and civic organizations
- Professional certification bodies
- Heritage institutions and museums
- Financial institutions requiring gravitas
- Academic institutions with classical traditions

### Implementation Notes

- CSS Custom Properties enable theme variations (dark mode: inverted marble)
- Grid system based on 8px base unit (Roman architectural proportions)
- Border widths use 1px/2px/3px progression (structural hierarchy)
- Box shadows suggest marble depth without excessive decoration
- Hover states provide subtle feedback while maintaining formality

### Historical References

- Trajan's Column (113 CE): Typographic inspiration
- Roman Forum: Layout and spatial hierarchy
- Pantheon: Proportion and monumentality
- Marble of Carrara: Color and texture palette
- Imperial decrees: Document structure and formality

### Version

- 1.0.0

### Created

- 2025-12-09

### Designer

- Lobbi Design System Team

## Not synced

Built from `style-149-roman-empire-digital.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-size-xs`, `--font-size-sm`, `--font-size-base`, `--font-size-lg`, `--font-size-xl`, `--font-size-2xl`, `--font-size-3xl`.
