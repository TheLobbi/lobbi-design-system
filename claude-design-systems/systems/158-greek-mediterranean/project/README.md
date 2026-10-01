This design system captures the essence of Aegean simplicity and sun-drenched elegance found in Greek island architecture. Inspired by the iconic white- washed buildings of Santorini and the deep blues of the Mediterranean Sea, this system balances classical proportion with coastal relaxation.

**Blend:** Greek Island 55% + Mediterranean Blue 25% + Whitewashed Architecture 20%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** hospitality, creative  
**Perfect for:** Greek Resorts, Mediterranean Hospitality, Island Venues

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Aegean Retreat”, “Island Highlights”, “Discover Our Destinations”, “Villa Collection”.
- Buttons are short verb phrases in Title Case: “Submit Inquiry”, “Clear Form”, “Book Now”, “View Gallery”.
- Navigation uses single nouns: “Home”, “Destinations”, “Experiences”, “Gallery”, “Contact”.
- The reference page uses emoji as inline glyphs (📅 👁 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `santorini-blue`, `aegean-blue`, `cream`, `terracotta`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Libre Baskerville", serif
- `body` — "Open Sans", sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, Open Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Libre Baskerville (classical serif)
- Rationale: Evokes classical Greek literature and philosophy while
- maintaining excellent readability. The serif style connects to ancient
- inscriptions and scholarly traditions, adding timeless elegance.

- Body: Open Sans (humanist sans-serif)
- Rationale: Provides warm, friendly readability perfect for extended
- content. The open letterforms echo the welcoming nature of Greek
- hospitality while ensuring accessibility across all devices.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 350ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- High contrast text pairings
- Clear focus indicators with blue outline
- Generous touch targets (min 44px)
- Semantic HTML structure
- ARIA labels for navigation
- Keyboard-friendly interactions

## Further guidance

### Cultural Context

- Santorini Blue: The iconic blue domes reflecting sky and sea
- White: Whitewashed walls reflecting Mediterranean sunlight
- Terracotta: Clay pottery and rooftops of traditional architecture
- Olive Green: Ancient olive groves and natural landscape
- Warm Sand: Sun-bleached stones and sandy beaches

### Temperature

- (Warm)
- Sun-drenched color palette
- Warm terracotta and sand accents
- Inviting, Mediterranean warmth
- Balanced with cool blues
- Overall: Welcoming and relaxed

### Formality

- (Moderately Formal)
- Classical heritage with casual comfort
- Professional yet approachable
- Refined but not stuffy
- Hospitality-focused warmth
- Balanced elegance and ease

- CONTRAST RATIOS (WCAG 2.1 AA Compliance):
- Primary text on white: 14.2:1 (AAA)
- White text on Santorini blue: 6.1:1 (AA)
- Text on olive green: 7.8:1 (AA)
- Navy text on sand: 8.3:1 (AA)

### Responsive Behavior

- Mobile (320px-767px): Single column, stacked cards
- Tablet (768px-1023px): Two-column grids, fluid typography
- Desktop (1024px+): Full grid layouts, optimal spacing

### Use Cases

- Hospitality and resort websites
- Travel and tourism platforms
- Restaurant and dining experiences
- Creative agency portfolios
- Wellness and spa services
- Cultural event platforms

### Tags

- hospitality, creative, travel, relaxed, coastal

## Not synced

Built from `style-158-greek-mediterranean.html`. No component bundle: the reference page's markup is not packaged as live components.
