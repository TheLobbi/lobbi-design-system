This design system celebrates the vibrant storytelling tradition of Kente cloth, the iconic woven fabric from Ghana. Each color and pattern in traditional Kente carries meaning and tells a story. This system translates that rich cultural heritage into a bold, energetic digital experience that honors African craft traditions while embracing modern design principles.

**Blend:** Kente Patterns 50% + African Craft 30% + Bold Geometric 20%  
**Temperature:** 8/10 (warm) · **Formality:** 6/10 · **Tags:** creative, association  
**Perfect for:** African Art, Cultural Organizations, Heritage Groups

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Kente Heritage”, “Cultural Impact”, “Featured Stories”, “Artisan Directory”.
- Buttons are short verb phrases in Title Case: “Join Community”, “Reset”, “Primary Action”, “Secondary Action”.
- Navigation uses single nouns: “Home”, “Stories”, “Artisans”, “Gallery”, “Contact”.
- The reference page uses emoji as inline glyphs (📅 👁 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `kente-gold`, `deep-green`, `vibrant-orange`, `earth-brown`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Archivo Black", sans-serif
- `body` — Mulish, sans-serif

Faces are hosted on Google Fonts (Archivo Black, Mulish); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Mulish:wght@400;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Headings: Archivo Black (bold display sans-serif)
- Rationale: Provides powerful visual impact befitting the bold nature of
- Kente patterns. The heavy weight commands attention and creates strong
- hierarchy, reflecting the importance of storytelling in African culture.

- Body: Mulish (versatile sans-serif)
- Rationale: Offers excellent readability with a warm, friendly character
- that balances the bold headings. Its geometric construction echoes the
- structured patterns of woven cloth while remaining highly legible.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 350ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `vibrant-orange` 3.6:1, `gray-warm` 4.4:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `kente-gold` 2.3:1, `cream` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- High contrast color pairings
- Bold, clear focus indicators
- Large touch targets (min 44px)
- Semantic HTML structure
- ARIA labels for complex components
- Keyboard navigation support

## Further guidance

### Cultural Context

- Gold: Royalty, wealth, spiritual refinement, serenity
- Deep Green: Growth, harmony, spiritual renewal, vegetation
- Vibrant Orange: Energy, enthusiasm, creativity, healing
- Black: Spiritual maturity, heightened energy, spiritual power
- Earth Brown: Mother Earth, healing, grounding, connection

### Temperature

- (Very Warm)
- Vibrant orange and gold dominate
- Warm earth tones throughout
- Energetic, enthusiastic color palette
- Minimal cool colors
- Overall: Celebratory and inviting

### Formality

- (Moderately Formal)
- Cultural gravitas and heritage
- Bold, confident presentation
- Professional yet approachable
- Energetic without being casual
- Balanced tradition and accessibility

- CONTRAST RATIOS (WCAG 2.1 AA Compliance):
- Primary text on cream: 11.8:1 (AAA)
- White text on deep green: 8.2:1 (AA)
- Black text on gold: 4.9:1 (AA)
- White text on orange: 5.1:1 (AA)

### Responsive Behavior

- Mobile (320px-767px): Single column, simplified patterns
- Tablet (768px-1023px): Two-column grids, medium patterns
- Desktop (1024px+): Full grid layouts, rich pattern details

### Use Cases

- Cultural associations and organizations
- Creative agencies and studios
- Art galleries and museums
- Community centers
- Festival and event platforms
- Heritage education sites

### Tags

- creative, association, cultural, bold, vibrant

## Not synced

Built from `style-159-african-kente.html`. No component bundle: the reference page's markup is not packaged as live components.
