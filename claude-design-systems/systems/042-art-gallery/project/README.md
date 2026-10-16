WHITE CUBE GALLERY AESTHETICS. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Primary Inspiration: Gagosian Gallery, Pace Gallery, White Cube London.

**Blend:** Art Gallery 80% + Museum Curation 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** creative, premium  
**Perfect for:** Art Galleries, Museums, Cultural Institutions

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Gallery Analytics”, “Current Exhibitions”, “Fragments of Time”, “Urban Geometries”.
- Buttons are short verb phrases in Title Case: “Export”, “New Exhibition”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-gallery-green`, `color-bronze`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- GALLERY WHITE MINIMALISM
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#fefefe    Gallery White    Primary background, exhibition walls
#000000    Pure Black       Primary text, critical information
#f8f8f8    Off-White        Subtle cards, secondary surfaces
#e8e8e8    Light Gray       Dividers, borders, tertiary elements
#666666    Medium Gray      Secondary text, metadata, descriptions
#1a1a1a    Near Black       Hover states, emphasis

- Accent Colors (minimal usage, museum curation influence):
#2c5f2d    Gallery Green    Success states, acquisition indicators
#8b4513    Bronze           Premium features, special exhibitions

## Typography

- `display` — Inter, "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`, `body`, `label`, `caption`, `button`), always with the letter-spacing given.

### Type rationale

- NEUTRAL SANS-SERIF PRECISION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary: Inter (fallback: Helvetica Neue, -apple-system)
- Clean, neutral, professional
- Excellent readability across weights
- Modern interpretation of Helvetica

- Hierarchy:
- H1: 32px/48px, 300 weight - Exhibition titles, primary headers
- H2: 24px/36px, 400 weight - Section headers, artist names
- H3: 18px/28px, 500 weight - Card titles, metrics
- Body: 15px/24px, 400 weight - Descriptions, metadata
- Small: 13px/20px, 400 weight - Labels, captions
- Tiny: 11px/16px, 500 weight - Tags, status indicators

- Letter-spacing: Slight expansion (+0.01em) for sophistication

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 8px, `spacing-sm` 16px, `spacing-md` 24px, `spacing-lg` 32px, `spacing-xl` 48px, `spacing-2xl` 64px, `spacing-3xl` 96px. Pad cards and sections from these steps only.
- Corners: `border-radius` 2px.

- MUSEUM-QUALITY BREATHING ROOM
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Base Unit: 8px (curatorial precision)

- Scale (generous spacing):
- 8px     Tight elements, icon gaps
- 16px    Component internal padding
- 24px    Standard card padding
- 32px    Section padding, card gaps
- 48px    Major section separation
- 64px    Hero section margins
- 96px    Maximum emphasis zones

- Philosophy: Space is not empty - it elevates content importance

## States and motion

- GALLERY VISITOR EXPERIENCE
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Hover States:
- Cards: border darkens (#d0d0d0), lift 2px
- Buttons: text darkens to pure black, subtle scale (1.01)
- Links: underline appears, no color change
- Table rows: background #f8f8f8, instant transition

- Transitions: Subtle, gallery lighting (200ms ease)
- Focus States: Thin black outline (2px), accessible
- Active States: Slightly darker background

Timing values: `--transition-speed` 200ms.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 1px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `color-gallery-white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA COMPLIANCE
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Contrast Ratios:
- Black on White: 21:1 (AAA)
- Medium Gray on White: 5.7:1 (AA)
- All interactive elements: >4.5:1

- Keyboard Navigation: Full support, visible focus indicators
- Screen Readers: Semantic HTML, ARIA labels where needed
- Touch Targets: Minimum 44x44px (generous spacing helps)

## Component inventory

The reference page composes these patterns from the tokens above:

- EXHIBITION DESIGN PATTERNS
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. STATS CARDS (Gallery Metrics)
- Minimal borders (1px #e8e8e8)
- Large numbers (32px, 300 weight) - hero presentation
- Small labels (11px uppercase) - museum placard style
- Subtle hover lift (2px) - gallery lighting effect
- No shadows - pure white cube aesthetic

2. EXHIBITION CARDS (Content Presentation)
- Art-first layout: visual dominates
- Generous padding (32px) - exhibition spacing
- Thin dividers (1px) - architectural precision
- Metadata in gray (#666) - recessive information
- Hover state: subtle border darkening

3. ARTIST PROFILES (Curatorial Information)
- Minimal avatars/images - content focus
- Biography/description prominent
- Exhibition history secondary
- Contact/representation tertiary

4. DATA TABLE (Collection Management)
- Clean grid, no zebra striping (gallery consistency)
- Hover row: subtle background (#f8f8f8)
- Column headers: uppercase (11px) - museum labels
- Generous row height (56px) - breathing room
- Minimal borders - architectural restraint

5. VIEWING ROOM (Feature Showcase)
- Hero image presentation
- Curatorial text alongside
- Technical details below
- Action buttons minimal, text-based

## Further guidance

### Cultural Temperature

- NEUTRAL OBJECTIVE (5/10)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Neither warm nor cold - perfectly balanced
- No emotional color (red/blue extremes avoided)
- Professional without corporate coldness
- Approachable through clarity, not friendliness
- Objective presentation of information

### Formality Level

- HIGH CULTURAL (8/10)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Cultural institution professionalism:
- Refined typography and spacing
- Restrained interaction design
- Curatorial language patterns
- Museum-quality presentation
- Sophisticated but accessible

### Responsive Strategy

- GALLERY ACROSS DEVICES
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Desktop (1200px+): Full gallery layout, maximum spacing
- Tablet (768px-1199px): Responsive grid, maintained spacing
- Mobile (320px-767px): Single column, preserved breathing room

- Philosophy: Gallery quality maintained across all viewports

### Design Decisions

- RATIONALE
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- ✓ Pure white background: Gallery wall neutrality
- ✓ Minimal borders: Architectural precision over decoration
- ✓ No shadows: White cube aesthetic (shadows imply depth, we want flat)
- ✓ Generous spacing: Museum-quality presentation elevates content
- ✓ Neutral typography: Content is hero, type recedes
- ✓ Subtle interactions: Refined, not flashy
- ✓ Limited accent colors: Only when essential (success/premium states)
- ✓ Uppercase labels: Museum placard convention
- ✓ Large metrics: Exhibition-scale presentation

- ✗ No gradients: Flat gallery aesthetic
- ✗ No rounded corners: Architectural precision (except subtle 2px)
- ✗ No decorative elements: Curatorial restraint
- ✗ No busy patterns: Visual silence
- ✗ No saturated colors: Neutral objective presentation

### Benchmark Inspirations

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Gagosian Gallery: Pure white cube, art-first
- Pace Gallery: Clean typography, generous spacing
- White Cube London: Architectural precision
- Artsy: Modern gallery digital experience
- MoMA Design Store: Curatorial product presentation
- Tate Modern: Museum-quality digital interface

### Implementation Notes

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Inter font loaded from Google Fonts (optimal rendering)
- Flexbox for layout (gallery grid precision)
- CSS Grid for stats/content cards (architectural alignment)
- Minimal JavaScript (static gallery experience)
- Mobile-first responsive (progressive enhancement)
- Print-friendly (exhibition catalog quality)

### Expected Outcomes

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- User Perception:
- "This feels like a contemporary art gallery"
- "The spacing lets the data breathe"
- "Professional and refined, not corporate"
- "Easy to focus on the important information"
- "Museum-quality presentation"

- Business Impact:
- Elevated brand perception (cultural institution quality)
- Clear information hierarchy (curatorial guidance)
- Accessible across audiences (inclusive design)
- Memorable aesthetic (gallery white distinctive)
- Professional credibility (art world standards)

## Not synced

Built from `style-42-art-gallery.html`. No component bundle: the reference page's markup is not packaged as live components.
