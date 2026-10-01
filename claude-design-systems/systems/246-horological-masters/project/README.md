This interface embodies the sacred precision of Swiss watchmaking tradition, where microscopic gears mesh with tolerances measured in microns, balance wheels oscillate at 28,800 beats per hour, and centuries of accumulated craftsmanship culminate in mechanical poetry measuring the inexorable passage of time. The design evokes watch dials catching light, blued steel hands sweeping seconds, and exhibition casebacks revealing jeweled movements of hypnotic complexity. Every element respects horological heritage, engineering precision, and the luxury craft of mechanical time measurement perfected across generations.

**Blend:** Swiss Watchmaking 55% + Precision Engineering 30% + Luxury Craft 15%  
**Temperature:** 4/10 (cool) · **Formality:** 10/10 · **Tags:** premium, heritage  
**Perfect for:** Watchmakers, Horology Institutes, Timepiece Collectors

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Precision Timepiece Collection”, “Featured Haute Horlogerie”, “Perpetual Calendar Tourbillon”, “Minute Repeater Grand Complication”.
- Buttons are short verb phrases in Title Case: “Submit Commission”, “Schedule Consultation”, “View Catalog”.
- Navigation uses single nouns: “Collections”, “Complications”, “Bespoke”, “Service”, “Institute”.
- The reference page uses emoji as inline glyphs (⌚ ⏱ ⏰ 🌙 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-movement-gold`, `color-complication-blue`, `color-deep-charcoal`, `color-rose-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Movement Gold (#ca8a04): Brass movement plates, gear trains, rotor decorations,
- traditional watchmaking warmth, mechanical prestige, engineering beauty,
- illuminated through exhibition casebacks, craftsmanship visibility, golden
- age of horology, precision metal, jewel settings, luxury foundation

- Dial White (#fafafa): Clean watch dial surfaces, legibility foundation,
- Swiss precision minimalism, functional clarity, uncluttered timekeeping,
- dial printing backgrounds, luminous foundations, examination surfaces,
- white-glove handling, sterile assembly rooms, quality inspection backgrounds

- Steel Silver (#6b7280): Stainless steel cases, polished bezels, metal bracelets,
- industrial precision, modern materials, tool watch heritage, professional
- durability, functional luxury, engineering aesthetic, machined perfection,
- titanium alternatives, brushed finishes, professional instruments

- Complication Blue (#1e40af): Blued steel hands, heat-treated components,
- traditional finishing technique, depth complexity, functional elegance,
- complication subdials, moonphase displays, technical sophistication, Swiss
- blue, royal watchmaking heritage, precision indication

- Anthracite Gray (#374151): Carbon fiber cases, technical straps, modern
- materials, sporty elegance, contemporary horology, aerospace connections,
- professional depth, serious collecting, technical documentation backgrounds

- Rose Gold (#b91c1c muted to #dc2626 accent): Everose, Sedna, red gold alloys,
- warm precious metal, modern luxury, feminine complications, dress watch
- elegance, evening sophistication, investment-grade materials

## Typography

- `display` — Fraunces, Georgia, serif
- `body` — "DM Mono", "Courier New", monospace

Faces are hosted on Google Fonts (Fraunces, DM Mono); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=DM+Mono:wght@300;400;500&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Fraunces (Primary - Display Variable):
- Contemporary interpretation of traditional serif forms with optical sizing
- Variable weight axis allows precise adjustment for horological elegance
- Soft serifs with calligraphic warmth echo hand-engraved watch movements
- "Wonky" style axis adds subtle craft character appropriate for artisan appeal
- Excellent for headings suggesting both tradition and modern innovation
- Conveys: horological sophistication, craft heritage, Swiss precision, luxury
- Perfect for brand names, collection titles, prestigious announcements
- Optical sizing ensures elegance from small indices to large display text

- DM Mono (Secondary - Monospace):
- Technical monospace perfectly suited to precision measurements and specifications
- Clean geometric forms echo engineering drawings and technical documentation
- Excellent readability for reference numbers, serial codes, caliber designations
- Monospace nature ideal for tabular data alignment (measurements, specifications)
- Modern technical aesthetic without coldness, professional without sterility
- Perfect for: technical specs, measurements, model numbers, serial tracking
- Suggests: precision instrumentation, engineering accuracy, technical mastery

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 56px, `space-xxl` 80px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 2px, `border-radius-md` 4px, `border-radius-lg` 8px, `border-radius-dial` 50%.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-movement`, lowest first for resting cards, higher for hover and overlays.

1. Header: Dial-inspired design with watch crown navigation elements
2. Collection Stats: Movement-style cards showing inventory, complications, values
3. Featured Timepieces: Watch display frames with exhibition-back aesthetic
4. Catalog Table: Systematic listings with caliber specs, complications, pricing
5. Commission Form: Bespoke timepiece ordering with complication selections
6. Action Buttons: Purchase, inquiry, servicing, collector membership CTAs
7. Status Badges: Availability, certification (COSC, Geneva Seal), condition
8. Footer: Institute information, service centers, horological resources

## States and motion

- Hover reveals exhibition caseback view of movement architecture
- Gold accents glow like movement illumination under magnification
- Subtle rotation animations echo sweeping seconds hands
- Smooth transitions reflect mechanical precision and Swiss quality
- Form validations styled as quality control inspection approvals
- Success states feel like official certification issuance
- Loading states show gear rotation or balance wheel oscillation
- Disabled states appear as "servicing" or "reserved for client"

Timing values: `--transition-base` 280ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-movement-gold` 2.8:1, `color-bright-gold` 1.8:1, `color-dial-white` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Movement gold (#ca8a04) on dial white (#fafafa): 4.6:1 contrast (AA large)
- Steel silver (#6b7280) on white: 4.7:1 contrast (AA standard)
- Complication blue (#1e40af) on white: 8.2:1 contrast (AAA)
- Anthracite gray (#374151) on white: 10.8:1 contrast (AAA) — **measured 9.7:1**
- Watch images include alt text with brand, model, reference number, complications
- Technical abbreviations expanded on hover (COSC = Contrôle Officiel Suisse...)
- Catalog tables with proper headers and scope for screen reader navigation
- Measurement units always specified (42mm, 15.2mm thickness, 100m WR)
- Form labels explicitly tied to inputs with proper ARIA attributes
- Focus indicators styled as subtle blue rings respecting theme
- Skip links for long technical specification listings
- Sufficient touch targets (minimum 44x44px) for mobile catalog browsing
- No information conveyed by color alone (certification badges use icons+text)

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Dial-inspired design with watch crown navigation elements
2. Collection Stats: Movement-style cards showing inventory, complications, values
3. Featured Timepieces: Watch display frames with exhibition-back aesthetic
4. Catalog Table: Systematic listings with caliber specs, complications, pricing
5. Commission Form: Bespoke timepiece ordering with complication selections
6. Action Buttons: Purchase, inquiry, servicing, collector membership CTAs
7. Status Badges: Availability, certification (COSC, Geneva Seal), condition
8. Footer: Institute information, service centers, horological resources

## Further guidance

### Spatial Hierarchy

- 8px base unit creating precise, engineering-appropriate spacing
- Watch dial circular motifs in decorative elements and icons
- Gear-pattern borders suggesting mechanical movement architecture
- Chronograph-inspired layouts with subdial information groupings
- Radial balance echoing watch dial symmetry and functional layout
- Precision alignment reflecting watchmaking tolerance standards
- Concentric organization patterns from watch face designs
- Clean margins respecting dial legibility principles

### Emotional Temperature

- Precision Cool (4/10):
- Steel silver and dial white create professional, precise foundation
- Movement gold adds measured warmth without emotional heat
- Complication blue provides depth without warmth
- Overall: Cool precision of Swiss watchmaking atelier
- Technical confidence rather than emotional warmth
- Professional mastery creating aspirational admiration
- Reserved elegance appropriate for serious collectors

### Formality Level

- Absolute Prestige (10/10):
- Maximum formality reflecting haute horlogerie standards
- Appropriate for Patek Philippe, Vacheron Constantin presentation levels
- Technical precision combined with luxury craft tradition
- Suitable for six-figure timepiece presentations
- Professional enough for Geneva watch auctions and SIHH exhibitions
- Sophisticated language matching serious collector expectations
- Zero compromise on quality, precision, or heritage authenticity

### Performance Optimization

- High-resolution watch images lazy-loaded with progressive enhancement
- Font loading optimized with subset for Latin + numerals (critical for specs)
- CSS Grid for efficient catalog layouts without framework overhead
- Minimal JavaScript for interactive movement displays and specification filters
- Optimized gradients for metallic effects without heavy image assets
- Progressive enhancement for 360° watch view interactions
- Efficient caching for movement images and technical specifications
- Debounced search to reduce server load during catalog browsing

### Brand Alignment

- Establishes horological authority through:
- Swiss-level presentation quality matching physical boutique experience
- Authentic watchmaking terminology building collector confidence
- Technical precision in specifications demonstrating expertise
- Heritage color palette resonating with traditional collectors
- Engineering-quality documentation showing professional standards
- Complication emphasis establishing high-end positioning
- Educational tone welcoming aspiring collectors into horology

### Use Cases

- Authorized dealer platforms (Bucherer, Tourneau digital presence)
- Independent watchmaker ateliers and manufacture boutiques
- Vintage watch specialists and certified pre-owned dealers
- Watch auction houses (Christie's, Sotheby's, Phillips watch departments)
- Collector community platforms and horological forums
- Watch servicing and restoration specialists
- Horological education institutions and certification programs
- Private collection management and insurance documentation

### Competitive Differentiation

- Unlike typical watch retailer websites, this design:
- Elevates digital presentation to haute horlogerie boutique standards
- Balances technical specifications with luxury craft storytelling
- Uses authentic watchmaking terminology and proper specification formats
- Integrates movement architecture visualization and complication hierarchy
- Respects collector sophistication while educating newcomers
- Combines Swiss precision aesthetic with modern digital excellence
- Creates emotional connection to mechanical watchmaking tradition

### Scalability

- Component system supports:
- Advanced filtering (brand, complications, movement type, case material, price)
- Technical specification deep-dives with expandable movement details
- 360° watch photography with caseback exhibition views
- Complication explainer modals with animation demonstrations
- Provenance timeline visualization for vintage pieces
- Modular watch card components reusable across contexts
- Responsive layouts from desktop catalogs to mobile browsing
- Theme variations for different categories (sport, dress, complications)
- Multi-language support for international collector base

## Not synced

Built from `style-246-horological-masters.html`. No component bundle: the reference page's markup is not packaged as live components.
