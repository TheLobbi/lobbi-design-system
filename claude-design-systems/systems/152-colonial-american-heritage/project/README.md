Democratic ideals expressed through timeless typography. This style embodies the founding principles of American civic life—reasoned debate, historic preservation, and institutional integrity. Like Independence Hall or the Constitution's parchment, it communicates gravitas earned through principled action rather than inherited authority.

**Blend:** Colonial American 55% + Heritage Society 25% + Editorial Classic 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** association, professional  
**Perfect for:** Heritage Societies, Historical Associations, Preservation Groups

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Our Impact”, “Current Initiatives”, “Colonial Architecture Preservation”, “Revolutionary War Documentation”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Schedule Tour”, “Clear Form”, “Primary Action”.
- Navigation uses single nouns: “Our Mission”, “Collections”, “Events”, “Membership”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-colonial-blue`, `color-parchment`, `color-brick-red`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Colonial Blue (#2C4A6E): Revolutionary ideals, Continental Army, civic duty
- Parchment Cream (#F5EFE0): Historical documents, aged paper, wisdom
- Dark Red (#8B3A3A): Colonial brick, Revolutionary fervor, courage
- Warm Brown (#6B4E3D): Wood construction, earthiness, foundational stability

## Typography

- `display` — "Libre Baskerville", serif
- `body` — "Crimson Text", serif

Faces are hosted on Google Fonts (Libre Baskerville, Crimson Text); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Crimson+Text:wght@400;600;700&display=swap">
```

- Set titles in `display` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Libre Baskerville: Modern interpretation of 18th-century typefaces
- High contrast between thick/thin strokes
- Classical proportions with digital optimization
- Excellent for headlines and display text
- Evokes period printing without pastiche

- Crimson Text: Inspired by classic old-style serif types
- Comfortable reading at extended lengths
- Traditional book typography heritage
- Professional, scholarly character
- Versatile across body copy and captions

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem, `content-padding` 1.5rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 2px, `border-radius-md` 4px, `border-radius-lg` 6px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

1. Header: Federal building pediment-inspired navigation
2. Stats Grid: Four founding principles metric display
3. Content Cards: Historical placard-style containers
4. Data Table: Census/registry record formatting
5. Forms: Membership petition parchment style
6. Buttons: Tiered civic action hierarchy
7. Badges: Wax seal-inspired status indicators
8. Footer: Foundation stone with columnar info

## States and motion

- Users feel connected to founding principles and American democratic tradition.
- The interface conveys trustworthiness through historical continuity, suggesting
- that the institution respects its heritage while remaining relevant. There's
- dignity without stuffiness, patriotism without exclusion, and tradition without
- being trapped in the past.

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 400ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ✓ WCAG 2.1 AA contrast ratios (4.5:1 body, 3:1 large text)
- ✓ Focus indicators with colonial blue outline (2px visible)
- ✓ Semantic HTML structure (articles, sections, navigation)
- ✓ Responsive typography with fluid scaling
- ✓ Touch targets 44x44px minimum for mobile patriots

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Federal building pediment-inspired navigation
2. Stats Grid: Four founding principles metric display
3. Content Cards: Historical placard-style containers
4. Data Table: Census/registry record formatting
5. Forms: Membership petition parchment style
6. Buttons: Tiered civic action hierarchy
7. Badges: Wax seal-inspired status indicators
8. Footer: Foundation stone with columnar info

## Further guidance

### Temperature & Formality

- Temperature: 5/10 (Warm-Neutral) - Warm browns balanced by cool blues
- Formality: 8/10 (High) - Historical institutions, civic organizations
- Patriotic Resonance: 9/10 - American heritage without jingoism

### Historical Document Principles

- Parchment texture: Subtle paper grain effects
- Quill-written aesthetic: Flowing, deliberate typography
- Wax seal inspiration: Circular badges and emblems
- Period printing: Letterpress-inspired depth
- Aged elegance: Sophisticated without appearing dated
- Constitutional structure: Three-branch hierarchy metaphors

### Responsive Strategy

- Mobile: Single-column gazette layout (pocket Constitution)
- Tablet: Two-column broadsheet (colonial newspaper)
- Desktop: Multi-column layouts with sidebars
- Large screens: Maximum 1400px (reading comfort)

### Use Cases

- Historical societies and preservation trusts
- Civic organizations and associations
- Museums (American history focus)
- Educational institutions (history departments)
- Genealogy and ancestry services
- Professional associations (law, government)
- Community foundations
- Heritage tourism organizations

### Implementation Notes

- CSS variables enable theme variations (era-specific palettes)
- Grid system inspired by colonial printing layouts
- Border treatments suggest parchment edges
- Hover states reveal subtle texture overlays
- Box shadows create letterpress depth
- Typography scales maintain classical proportions

### Historical References

- Declaration of Independence: Document aesthetic and color
- Federal architecture: Proportions and symmetry
- Colonial Williamsburg: Color palette and materials
- Benjamin Franklin's printing: Typography and layout
- Early American quilts: Pattern and craftsmanship
- Revolutionary War flags: Color combinations

### Period Typography

- Baskerville influence: 1750s transitional serif elegance
- Caslon heritage: Revolutionary-era printing standard
- Colonial printing: Letterpress texture and spacing
- Broadsheet layouts: Multi-column newspaper tradition
- Manuscript styling: Handwritten accents (sparingly)

### Version

- 1.0.0

## Not synced

Built from `style-152-colonial-american-heritage.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-size-xs`, `--font-size-sm`, `--font-size-base`, `--font-size-lg`, `--font-size-xl`, `--font-size-2xl`, `--font-size-3xl`.
