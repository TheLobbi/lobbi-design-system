This interface embodies the reverent preservation of numismatic heritage, where ancient coins tell stories of civilizations, commerce, and craftsmanship spanning millennia. The design merges museum-quality curation with auction house prestige, treating each digital element as carefully as a rare coin under glass. Antique gold tones evoke the patina of age, while structured catalog layouts honor the scientific discipline of numismatic study. Every interaction respects the weight of history held in these small metal artifacts.

**Blend:** Coin Collecting Heritage 55% + Auction House Prestige 30% + Museum Curation 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** heritage, premium  
**Perfect for:** Coin Collectors, Numismatic Societies, Currency Museums

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Heritage Coin Collection”, “Featured Auction Lots”, “1804 Draped Bust Silver Dollar”, “1933 Saint-Gaudens Double Eagle”.
- Buttons are short verb phrases in Title Case: “Submit Consignment”, “Schedule Appraisal”, “Request Catalog”.
- Navigation uses single nouns: “Catalog”, “Auctions”, “Grading”, “Membership”, “Resources”.
- The reference page uses emoji as inline glyphs (⚜ 🪙 👑 🏛 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-antique-gold`, `color-rich-gold`, `color-patina-green`, `color-velvet-burgundy`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Antique Gold (#b8860b): Primary metal, numismatic prestige, coin surfaces,
- historical weight, warm heritage, treasure association, patina glow, monetary
- symbolism, collector passion, timeless value, aging grace, imperial legacy

- Patina Green (#10b981 muted to #059669): Natural oxidation, copper patina,
- bronze aging, authenticity indicator, museum preservation, time passage,
- archaeological verification, natural process beauty, historical accuracy

- Velvet Burgundy (#7f1d1d): Coin presentation boxes, velvet-lined cases,
- royal collecting tradition, imperial dignity, precious object framing, luxury
- housing, museum gallery walls, auction house interiors, sophisticated depth

- Archive Cream (#fef3c7): Catalog paper, archival documentation, aged vellum,
- conservation backgrounds, neutral examination surfaces, non-reactive materials,
- scholarly records, certificate backgrounds, gentle contrast foundation

- Deep Bronze (#78350f): Antique frames, aged wood, display cases, classical
- furniture, period appropriate warmth, earthy grounding, historical context

- Coin Silver (#9ca3af): Silver currency metals, tarnish tones, secondary
- precious metals, catalog borders, understated elegance, metal variety

## Typography

- `display` — "Cormorant Garamond", Georgia, serif
- `body` — "Libre Franklin", -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Libre Franklin); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Libre+Franklin:wght@300;400;500;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Cormorant Garamond (Primary - Serif):
- Classical elegance evoking 18th-century numismatic publications
- Scholarly gravitas perfect for historical contexts
- Old-style figures harmonize with coin date displays
- High contrast strokes echo engraved letterforms on coins
- Refined serifs suggest museum-quality presentation
- Excellent for titles, headings, coin descriptions
- Conveys heritage, authority, timeless collecting tradition

- Libre Franklin (Secondary - Sans):
- Clean catalog data presentation without competing with serif beauty
- Excellent number readability for pricing, grading, dates
- Modern clarity for technical specifications and metadata
- Professional sans-serif balances classical serif warmth
- Wide range of weights supports information hierarchy
- Perfect for tables, forms, navigation, functional elements
- Ensures contemporary usability within heritage aesthetic

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 20px, `space-lg` 32px, `space-xl` 48px, `space-xxl` 64px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 4px, `border-radius-md` 8px, `border-radius-lg` 12px, `border-radius-coin` 50%.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-gold`, lowest first for resting cards, higher for hover and overlays.

1. Header: Antique gold banner with society emblem, museum-quality branding
2. Coin Stats Grid: Precious metal cards showing collection metrics, values
3. Featured Lots: Coin imagery frames with auction details, bidding status
4. Catalog Table: Systematic listing with grading, provenance, estimates
5. Acquisition Form: Professional consignment submission with authentication
6. Action Buttons: Auction bid buttons, catalog requests, membership CTAs
7. Grading Badges: NGC/PCGS-style status indicators with condition reports
8. Footer: Society information, auction schedules, scholarly resources

## States and motion

- Hover reveals additional coin imagery or reverse side
- Gold accent appears on interaction like treasure discovery
- Bidding buttons pulse subtly during live auctions
- Smooth transitions respect dignified pace of collecting
- Form validations styled as curator quality checks
- Success states feel like acquisition confirmations
- Disabled states appear as "withdrawn from sale"
- Loading states show coin flip animation

Timing values: `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- Antique gold (#b8860b) on cream (#fef3c7): 4.2:1 contrast (AA large text)
- Burgundy (#7f1d1d) on cream: 7.8:1 contrast (AAA compliance)
- Patina green (#059669) on white: 4.5:1 contrast (AA standard)
- Coin images include alt text with identification, date, mint
- Grading abbreviations expanded on hover (MS = Mint State)
- Catalog tables with scope attributes for screen reader navigation
- Auction countdowns include ARIA live regions for time updates
- Form labels explicitly tied to inputs for accessibility
- Focus indicators styled as gold frames respecting theme
- Skip navigation for long catalog listings
- Sufficient touch targets (minimum 44x44px) for mobile bidding

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Antique gold banner with society emblem, museum-quality branding
2. Coin Stats Grid: Precious metal cards showing collection metrics, values
3. Featured Lots: Coin imagery frames with auction details, bidding status
4. Catalog Table: Systematic listing with grading, provenance, estimates
5. Acquisition Form: Professional consignment submission with authentication
6. Action Buttons: Auction bid buttons, catalog requests, membership CTAs
7. Grading Badges: NGC/PCGS-style status indicators with condition reports
8. Footer: Society information, auction schedules, scholarly resources

## Further guidance

### Spatial Hierarchy

- 12px base unit creating refined, museum-like spacing
- Coin frames with ornate borders suggesting protective display cases
- Generous padding around "artifact" content respecting precious objects
- Catalog grid patterns echoing traditional numismatic reference books
- Auction lot layouts with clear bidding hierarchies
- Whitespace as curatorial breathing room, never cramped
- Symmetrical balance honoring classical design principles

### Emotional Temperature

- Warm Heritage (5/10):
- Antique gold creates nostalgic warmth without overwhelming
- Patina green adds natural aged character
- Burgundy depths suggest velvet-lined treasure boxes
- Cream tones provide gentle, archival foundation
- Overall: Comfortably warm like a museum study room
- Inviting to collectors while maintaining scholarly dignity

### Formality Level

- Museum Prestige (9/10):
- Highest formality reflecting numismatic scholarship
- Appropriate for rare coin auctions and serious collectors
- Professional enough for institutional collections
- Classical typography enforces gravitas
- Structured layouts honor scientific cataloging discipline
- Respectful tone befitting historical artifacts
- Sophisticated without being intimidating to new collectors

### Performance Optimization

- High-resolution coin images lazy-loaded below fold
- Font subset loading for faster Latin character rendering
- CSS Grid for efficient catalog layouts without framework overhead
- Minimal JavaScript for countdown timers and bid submission
- Optimized gradients for gold metallic effects without heavy images
- Progressive enhancement for auction interactivity
- Cached auction data with real-time bidding updates only
- Efficient hover states using CSS transforms

### Brand Alignment

- Establishes numismatic authority through:
- Museum-quality visual presentation instilling collector confidence
- Classical typography signaling scholarly credibility
- Auction house sophistication attracting serious bidders
- Heritage color palette resonating with traditional collectors
- Structured cataloging demonstrating professional organization
- Provenance emphasis building trust in authenticity
- Educational tone welcoming new numismatists

### Use Cases

- Professional numismatic societies and collector associations
- Rare coin auction houses (Heritage, Stack's Bowers style)
- Museum numismatic collection digital catalogs
- Coin dealer inventory management and online galleries
- Private collector portfolio tracking and valuation
- Educational numismatic resources and scholarly publications
- Coin grading service customer portals (NGC, PCGS interfaces)
- Estate coin collection appraisal and liquidation platforms

### Competitive Differentiation

- Unlike typical coin dealer websites, this design:
- Elevates digital presentation to match physical auction catalog quality
- Balances museum scholarship with commercial auction functionality
- Uses authentic numismatic color palette (actual coin metal tones)
- Integrates proper grading terminology and professional standards
- Respects collector sophistication while remaining approachable
- Combines heritage aesthetics with modern digital usability

### Scalability

- Component system supports:
- Filterable catalogs by period, metal, denomination, price range
- Dynamic auction countdown timers across multiple concurrent lots
- Real-time bid updates without full page refreshes
- Expandable provenance documentation and certification images
- Modular coin card components reusable across contexts
- Responsive grids adapting from desktop catalogs to mobile browsing
- Theme variations for different metal focuses (gold, silver, copper)
- Multi-language support for international collector base

## Not synced

Built from `style-244-numismatic-society.html`. No component bundle: the reference page's markup is not packaged as live components.
