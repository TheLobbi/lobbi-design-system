HIGH JEWELRY MAISON. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Inspired by: Cartier, Van Cleef & Arpels, Bulgari, Tiffany & Co. Core Principle: Each pixel treated as a precious gem - meticulous, refined, rare.

**Blend:** Jewelry Boutique 80% + Glamour 20%  
**Temperature:** 6/10 (warm) · **Formality:** 9/10 · **Tags:** premium  
**Perfect for:** Jewelry Brands, Luxury Boutiques, Fine Jewelry

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Collection Dashboard”, “Featured Collections”, “Éternité Diamond Suite”, “Heritage Rose Collection”.
- Buttons are short verb phrases in Title Case: “Private Viewing”, “View Details”, “View Details”, “View Details”.
- Navigation uses single nouns: “Collections”, “Heritage”, “Craftsmanship”, “Care Guide”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `gold`, `rose`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ Velvet Black    #0d0d0d    Foundation - Luxurious darkness, jewelry box   │
- │ Diamond White   #fafafa    Brilliance - Pristine, flawless clarity        │
- │ Gold            #d4a574    Prestige - 18K gold warmth, timeless value     │
- │ Rose            #e8b4b8    Romance - Pink diamond, feminine sophistication│
- │ Pearl Grey      #f5f5f5    Subtlety - Background whisper, satin finish    │
- │ Champagne       #f4e8d8    Accent - Subtle luxury, refined warmth         │
- ┘

## Typography

- `display` — "Playfair Display", serif
- `body` — "Cormorant Garamond", serif
- `montserrat` — "Montserrat", sans-serif

Faces are hosted on Google Fonts (Playfair Display, Cormorant Garamond, Montserrat); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500&family=Montserrat:wght@300;400;500&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ Display:    Playfair Display - Didot-inspired, high contrast serifs       │
- │             Used for: Collection names, hero headlines, luxury messaging  │
- │             Weight: 400-700, Letter-spacing: 0.02em (refined elegance)    │
- │                                                                            │
- │ Body:       Cormorant Garamond - Elegant serif with Continental heritage  │
- │             Used for: Descriptions, stories, care instructions            │
- │             Weight: 300-500, Line-height: 1.8 (breathing space)          │
- │                                                                            │
- │ Interface:  Montserrat Light - Clean sans, luxury brand standard          │
- │             Used for: Navigation, labels, data, modern contrast           │
- │             Weight: 300-500, Minimal UI intrusion                         │
- ┘

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem, `space-xxl` 4rem, `space-gallery` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px, `radius-4` 4px.
- Elevation: `shadow-luxury`, lowest first for resting cards, higher for hover and overlays.

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ Negative Space: 60% of viewport - Breathing room for visual appreciation  │
- │ Component Spacing: 4-6rem vertical rhythm - Curated gallery distance      │
- │ Card Padding: 2.5-3rem - Generous presentation frames                     │
- │ Grid Gaps: 2rem - Deliberate separation, individual focus                 │
- │ Border Strategy: 1px delicate borders - Subtle definition, not separation │
- ┘

## States and motion

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ Hover: Subtle lift (translateY: -2px) + soft shadow - Delicate elevation  │
- │ Transitions: 0.4s cubic-bezier(.4,0,.2,1) - Smooth, luxurious motion     │
- │ Focus: Gold outline (2px) - Precious metal accent on interaction          │
- │ Buttons: Gold-to-Rose gradient on hover - Transformative elegance         │
- │ Cards: Gentle scale (1.01) - Minimal but noticeable refinement           │
- ┘

Timing values: `--transition-luxury` 0.4s cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `diamond-white` 1.0:1, `gold` 2.0:1, `rose` 1.7:1, `shadow-soft` 1.2:1, `shadow-medium` 1.3:1, `category-tag-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- WCAG AA contrast: Black/white (19.6:1), Gold/white (4.7:1) ✓
- Focus indicators: 2px gold outline visible on all interactive elements
- Font scaling: Rem-based, respects user preferences
- Touch targets: Min 48px height for mobile luxury browsing
- Screen reader: Semantic HTML5, ARIA labels on decorative elements

## Component inventory

The reference page composes these patterns from the tokens above:

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ 1. Maison Header: Navigation + appointment CTA, minimal distraction        │
- │ 2. Collection Overview: 4 stats - Pieces, Collections, Clients, Heritage  │
- │ 3. Featured Pieces: 3 showcase cards with imagery + provenance            │
- │ 4. Collection Table: Organized inventory with care details                │
- │ 5. Appointment Booking: Elegant form integration                          │
- │ 6. Care Guide References: Maintenance wisdom                              │
- │ 7. Signature Footer: Understated elegance, contact discretion             │
- ┘

## Further guidance

### Design Tokens Analysis

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Temperature Calibration

- WARM GLAMOROUS (6/10)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Golden undertones + rose accents = inviting luxury (not cold corporate)
- Soft shadows + warm greys = approachable sophistication
- Balance: Prestigious but welcoming, exclusive but not alienating

### Formality Level

- ULTRA HIGH EXCLUSIVE (9/10)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Language: Refined, curated, heritage-focused
- Presentation: Gallery-grade spacing, museum-quality attention
- Interaction: Appointment-based, personalized service paradigm
- Exclusivity markers: By appointment, private viewings, bespoke consultation

### Performance Optimizations

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Google Fonts: Preconnect + subset loading
- CSS Grid/Flexbox: Hardware-accelerated layouts
- Transform animations: GPU-optimized (translate, scale)
- Minimal DOM: Clean structure, no unnecessary wrappers
- Single stylesheet: No external dependencies, embedded elegance

### Brand Storytelling Elements

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Heritage dates (EST. 1897) - Established provenance
- Craftsmanship hours - Artisanal value communication
- Certification badges - Trust and authenticity
- Care instructions - Long-term relationship building
- Appointment flow - Personalized service emphasis

### Competitive Differentiation

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- vs. Generic luxury: More breathing space, refined typography
- vs. Fashion retail: Slower pace, deeper storytelling, heirloom positioning
- vs. Corporate dashboards: Artistic presentation over data density
- Unique angle: Each piece is a protagonist, not a data point

### Technical Implementation Notes

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- CSS Custom Properties for theme consistency
- BEM-inspired class naming (semantic clarity)
- Mobile-first responsive (luxury mobile shopping priority)
- Print stylesheet consideration (catalog generation)
- Dark mode NOT implemented (intentional: velvet black is THE background)

### Success Metrics For This Design

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ✓ Conveys exclusivity within 2 seconds of landing
- ✓ Encourages appointment booking over immediate purchase
- ✓ Supports 4K display presentation (jewelry detail visibility)
- ✓ Maintains elegance at all viewport sizes (320px - 2560px)
- ✓ Typography readable at arm's length (tablet showroom use)
- ✓ Color harmony supports product photography (neutral backdrop)

## Not synced

Built from `style-41-jewelry-boutique.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-interface`.
