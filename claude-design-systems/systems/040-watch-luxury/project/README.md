Horological Excellence & Heritage Craftsmanship.

**Blend:** Watch Luxury 80% + Swiss Precision 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** premium  
**Perfect for:** Luxury Watchmakers, Timepiece Boutiques, Horology Brands

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Horological Collection”, “Featured Timepieces”, “Grand Complications Perpetual Calendar”, “Cosmograph Daytona Everose”.
- Buttons are short verb phrases in Title Case: “Filter”, “Add to Collection”, “View Details”, “View Details”.
- Navigation uses single nouns: “Collection”, “Catalogue”, “Provenance”, “Services”, “Heritage”.
- The reference page uses emoji as inline glyphs (⌚ ⚙ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `rose-gold`, `cream`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Timeless Elegance Palette
- Primary: Deep Charcoal (#1c1c1c)     - Heritage foundation, timeless depth
- Accent:  Rose Gold (#b76e79)         - Luxury warmth, precious metal elegance
- Surface: Cream (#f5f0e1)             - Aged parchment, vintage refinement
- Metallic: Platinum (#c0c0c0)         - Precision craftsmanship, Swiss quality

- Supporting Tones:
- ├─ Warm Shadows: #2a2a2a, #3a3a3a   - Subtle depth, leather texture
- ├─ Gold Variants: #d4a574, #9a6d5a  - Warm metals, aged patina
- Neutral Tones: #e8e3d6, #d0cbc0  - Refined backgrounds, paper textures

## Typography

- `display` — "Libre Baskerville", Georgia, serif
- `body` — Montserrat, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, Montserrat); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Classic Horological Hierarchy
- Primary:   Libre Baskerville (Serif) - Heritage elegance, timeless authority
- Secondary: Montserrat (Sans-serif)   - Modern clarity, technical precision

- Scale & Weight:
- ├─ Display:  36px/700 - Collection headers, prestigious announcements
- ├─ Heading:  24px/700 - Watch models, complication names
- ├─ Body:     16px/400 - Provenance details, descriptions
- ├─ Caption:  13px/300 - Technical specifications, footnotes
- Technical: 12px/500 - Reference numbers, caliber details

## Spacing, shape and elevation

- Spacing steps: `space-1` 8px, `space-2` 16px, `space-3` 24px, `space-4` 32px, `space-6` 48px, `space-8` 64px, `space-12` 96px, `space-16` 128px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-8` 8px, `radius-12` 12px, `radius-full` 50%.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Museum-Quality Showcase
- Grid System: 12-column precision layout with golden ratio proportions
- Spacing Scale: 8px base (1x, 2x, 3x, 4x, 6x, 8x, 12x, 16x)

- Layout Principles:
- ├─ Generous whitespace for breathing room (24-48px margins)
- ├─ Asymmetric balance reflecting handcrafted artistry
- ├─ Focused content zones with clear visual hierarchy
- Premium spacing ratios (1.618 golden ratio influences)

## States and motion

- Refined Mechanical Motion
- Timing Functions: ease-in-out (300-400ms) - Smooth, mechanical precision
- Hover States: Subtle elevation + rose gold accents
- Focus States: Platinum outline (2px) with soft glow
- Active States: Pressed depth with darker shadows

- Micro-interactions:
- ├─ Card lift on hover (0-2px elevation)
- ├─ Rose gold border reveal (opacity 0 → 1)
- ├─ Image zoom on focus (scale 1.0 → 1.05)
- Smooth color transitions (background, border, shadow)

- ATMOSPHERIC QUALITIES

- Temperature:  Warm Heritage (5/10) - Inviting yet refined
- Formality:    Very High Prestigious (9/10) - Museum-level presentation
- Mood:         Timeless, Reverent, Aspirational
- Voice:        Authoritative yet warm, heritage storytelling

- ACCESSIBILITY COMPLIANCE

- ✓ WCAG 2.1 AA contrast ratios (4.5:1 minimum)
- ✓ Focus indicators visible on all interactive elements
- ✓ Semantic HTML5 structure (header, main, section, footer)
- ✓ ARIA labels for complex interactions
- ✓ Keyboard navigation support (Tab, Enter, Escape)
- ✓ Screen reader optimized content hierarchy

- TECHNICAL SPECIFICATIONS

- Framework:     Vanilla HTML/CSS (zero dependencies)
- Performance:   Optimized for 60fps animations
- Responsive:    Mobile-first (320px → 2560px)
- Browser:       Modern evergreen (last 2 versions)
- Bundle Impact: ~8KB CSS (minified + gzipped)

Timing values: `--transition-fast` 200ms ease-in-out, `--transition-base` 300ms ease-in-out, `--transition-slow` 400ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `rose-gold` 3.3:1, `accent-primary` 3.3:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `cream` 1.0:1, `platinum` 1.6:1, `neutral-light` 1.1:1, `bg-card` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Component inventory

The reference page composes these patterns from the tokens above:

- Horological Elements
1. WATCH GALLERY CARDS
- ├─ Large product imagery with subtle shadows
- ├─ Rose gold accent borders on hover
- ├─ Provenance metadata (year, caliber, reference)
- Smooth transitions reflecting mechanical precision

2. COMPLICATION DETAILS
- ├─ Technical specification grids
- ├─ Platinum dividers and separators
- ├─ Hierarchical information architecture
- Tooltip overlays for additional context

3. PROVENANCE CARDS
- ├─ Heritage storytelling with timeline elements
- ├─ Cream backgrounds with subtle textures
- ├─ Serif typography for narrative weight
- Gold accent lines marking milestones

4. COLLECTION MANAGEMENT TABLE
- ├─ Zebra striping with warm neutral tones
- ├─ Hover states with rose gold highlights
- ├─ Sortable columns with precision indicators
- Inline metadata badges (complications, materials)

## Further guidance

### Design Signature

- "Where heritage meets precision, every detail tells a story of craftsmanship.
- Museum-quality presentation for horological excellence."

- Version: 1.0.0 | Created: 2025-12-09 | Agent: react-component-architect

## Not synced

Built from `style-40-watch-luxury.html`. No component bundle: the reference page's markup is not packaged as live components.
