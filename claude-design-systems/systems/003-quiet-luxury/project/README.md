Understated Elegance & Refined Restraint. Inspired by: Old Money aesthetics, Ralph Lauren heritage, private clubs, Ivy League traditions, European aristocratic restraint.

**Blend:** Quiet Luxury 80% + Minimal 20%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium  
**Perfect for:** Luxury Brands, Premium Services, Private Wealth

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Welcome back, Katherine”, “Upcoming Events”, “Annual Conference 2025”, “Leadership Excellence Workshop”.
- Buttons are short verb phrases in Title Case: “View Details”, “Learn More”, “RSVP”, “Add New Member”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Communications”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-900`, `navy-700`, `camel-100`, `camel-500`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --navy-900: #0c1929     → Deep trust, established authority, tradition
- --navy-800: #1a365d     → Institutional gravitas, professional excellence
- --navy-700: #2a4a7f     → Approachable authority, active engagement
- --camel-100: #faf6f1    → Natural luxury, soft warmth, paper texture
- --camel-200: #f5ebe0    → Cream cashmere, inherited comfort
- --camel-300: #ddd5c9    → Subtle borders, refined separation
- --camel-500: #c4a77d    → Aged leather, established quality
- --camel-600: #a68a5b    → Burnished gold, subtle wealth indicator
- --forest-700: #1e453e   → British racing green, country club heritage
- --forest-800: #14342f   → Deep tradition, environmental stability
- --cream: #fdfbf7        → Unbleached parchment, quiet sophistication
- --charcoal: #2d3436     → Ink on paper, readable authority

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — Inter, system-ui, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Cormorant Garamond: Refined serif for headings and display text.
- Evokes hand-set letterpress, library collections,
- and inherited publications. Used for emphasis.
- Inter: Clean, highly legible sans-serif for body text and UI.
- Provides modern readability without competing with elegance.
- Letter-spacing: Generous tracking (0.02em+) for sophistication

## Spacing, shape and elevation

- Spacing steps: `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-28` 28px, `space-32` 32px, `space-48` 48px. Pad cards and sections from these steps only.
- Corners: `radius-full` 50%.

- Generous whitespace reflecting confidence and wealth
- 1px hairline borders for understated separation
- Asymmetric layouts suggesting curated collections
- Deep padding (3rem+) conveying unhurried luxury

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 12.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `camel-300` 1.4:1, `camel-600` 3.2:1, `category-tag-bg` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA contrast ratios maintained
- Navy (#1a365d) on cream (#fdfbf7): 8.2:1
- Charcoal (#2d3436) on cream: 10.1:1 — **measured 12.3:1**
- Focus states with subtle underlines
- Semantic structure with ARIA labels

## Component inventory

The reference page composes these patterns from the tokens above:

- ✓ Header with minimal cream background
- ✓ Navigation with hairline underline states
- ✓ Stats grid with 1px border separation
- ✓ Member cards with subtle elevation
- ✓ Tables with refined typography
- ✓ Buttons: Primary (navy), Secondary (outlined)
- ✓ Forms with understated inputs
- ✓ Badges with muted colors
- ✓ Footer with quiet presence

## Further guidance

### Design Motifs

- Hairline underlines (subtle active states)
- Uniform borders (1px separators)
- No shadows (flatness = refinement)
- Uppercase labels with wide tracking
- Minimal iconography (content speaks for itself)

### Temperature

- (Balanced Warmth)

### Formality

- (Very High - Traditional)

### Energy

- 3/10 (Calm, Unhurried, Confident)

### Responsive Breakpoints

- Mobile: < 768px (stacked layouts)
- Tablet: 768px - 1024px (adapted grids)
- Desktop: > 1024px (full refinement)

## Not synced

Built from `style-3-quiet-luxury.html`. No component bundle: the reference page's markup is not packaged as live components.
