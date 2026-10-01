Elite Equestrian Heritage. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━.

**Blend:** Equestrian 80% + Racing Heritage 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** premium, hospitality  
**Perfect for:** Equestrian Clubs, Horse Racing, Riding Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Ashford Equestrian Club”, “Member Dashboard”, “Featured Thoroughbreds”, “2024 Championship Standings”.
- Buttons are short verb phrases in Title Case: “View Profile”, “Schedule”, “View Profile”, “Schedule”.
- Navigation uses single nouns: “Dashboard”, “Events”, “Stables”, “Members”, “Results”.
- The reference page uses emoji as inline glyphs (🐎 🏆 🐴 📅 👥 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `color-saddle-brown`, `color-cream`, `color-vintage-tan`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Forest Shadow (#16391f): Darker green for depth and hierarchy
- Vintage Tan (#d4c5b0): Soft warm neutral for subtle backgrounds
- Bronze Medal (#cd7f32): Secondary metallic for competitive rankings
- Ivory (#fffff0): Brightest highlight for premium emphasis

## Typography

- `display` — "Libre Baskerville", Georgia, serif
- `body` — "Crimson Pro", "Times New Roman", serif
- `lato` — "Lato", sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, Crimson Pro, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Crimson+Pro:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

### Type rationale

- Hero: 48px (Libre Baskerville) - Championship announcements
- H1: 36px (Libre Baskerville) - Primary page headings
- H2: 28px (Crimson Pro) - Section headings
- H3: 20px (Crimson Pro) - Card titles
- Body: 16px (Crimson Pro) - Primary content
- Small: 14px (Lato) - Metadata, captions
- Micro: 12px (Lato) - Labels, table data

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Generous proportions reflecting expansive estates and unhurried elegance.

## States and motion

- "Refined motion reflecting controlled equestrian grace"

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0.0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0.0, 0.2, 1), `--transition-slow` 400ms cubic-bezier(0.4, 0.0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-cream` 1.0:1, `color-gold` 2.2:1, `color-bronze` 2.9:1, `color-surface` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Racing green (#1e4d2b) on cream (#faf6eb): 10.2:1 (AAA)
- Saddle brown (#8b4513) on cream: ~~5.8:1~~ (AA+) — **measured 6.6:1**
- Gold (#c9a227) used only for non-essential accents
- Body text minimum 16px, data tables 14px — **the reference page sets running text at 14px**

## Further guidance

### Target Experience

- Private members' club atmosphere where tradition meets
- competitive excellence. Users feel they're accessing an exclusive institution
- with impeccable heritage and uncompromising standards.

- COLOR PSYCHOLOGY & HIERARCHY

### Primary Palette

- Racing Green (#1e4d2b): Deep, rich foundation - evokes English racing
- stables, polo field grass, traditional sporting heritage. Primary brand
- color suggesting prestige, tradition, and natural excellence.

- Saddle Brown (#8b4513): Warm leather accents - finest English saddles,
- aged tack, mahogany clubhouse interiors. Adds warmth and craftsmanship
- to the aristocratic palette.

- Cream (#faf6eb): Elegant neutral - fine parchment, pristine jodhpurs,
- marble clubhouse walls. Primary background maintaining sophistication
- without stark clinical feel.

- Championship Gold (#c9a227): Prestige accents - racing trophies, brass
- fixtures, winner's ribbons. Used sparingly for achievements, premium
- features, and calls-to-action.

### Psychological Impact

- Green + Brown = Natural heritage, outdoor sport, countryside estates
- Cream + Gold = Refinement, exclusivity, championship caliber
- Overall warmth (5/10) = Traditional yet approachable to members
- High formality (9/10) = Exclusive institution maintaining standards

### Hierarchy & Purpose

1. Libre Baskerville (Display/Headings)
- Traditional serif with classical proportions
- Used for: Main headings, section titles, horse names, event titles
- Rationale: Evokes heritage publications, racing programs, club signage
- Weight range: 400 (body), 700 (emphasis)
- Conveys: Timeless quality, institutional gravitas, sporting tradition

2. Crimson Pro (Subheadings/Body)
- Elegant transitional serif for extended reading
- Used for: Subheadings, card titles, descriptive content
- Rationale: Readable at smaller sizes while maintaining sophistication
- Weight range: 300-600
- Conveys: Refinement, readability, contemporary elegance

3. Lato (UI/Data)
- Clean humanist sans-serif for functional clarity
- Used for: Navigation, buttons, data tables, metrics
- Rationale: Modern contrast ensures usability without compromising elegance
- Weight range: 300-700
- Conveys: Professional precision, contemporary functionality

### Base Unit

- 8px (equestrian standard)

### Spacing Scale

- xs: 8px   - Tight groupings (icon + label)
- sm: 16px  - Related elements within cards
- md: 24px  - Card internal padding, list spacing
- lg: 32px  - Section spacing, card gaps
- xl: 48px  - Major section separation
- 2xl: 64px - Chapter-level divisions

### Container Strategy

- Max width: 1400px - Accommodates data tables while maintaining elegance
- Side margins: 48px desktop, 24px mobile - Generous breathing room
- Card padding: 32px - Luxury interior space
- Grid gaps: 32px - Paddock-appropriate separation

### Proportional Harmony

- Golden ratio influences (1.618) in card dimensions
- 4:3 aspect ratios for featured imagery (classic equestrian photography)
- Vertical rhythm maintains 8px baseline grid

- COMPONENT ARCHITECTURE

1. ARISTOCRATIC HEADER
- Centered brand with optional crest/emblem
- Horizontal navigation with generous letter-spacing
- Gold underline on active state (racing stripe heritage)
- Member profile with subtle bronze border
- Sticky behavior maintains institutional presence

2. CHAMPIONSHIP STAT CARDS
- Racing green primary cards with gold accent stripe
- Large numerals (Libre Baskerville) for trophy emphasis
- Icon + metric + label + trend indicator
- Hover: Subtle lift with refined shadow (quality craftsmanship)
- Border-left gold bar indicates premium status

3. THOROUGHBRED PROFILE CARDS
- Clean cream backgrounds with subtle tan borders
- Horse/member imagery with elegant framing
- Hierarchical information: Name → Pedigree → Performance
- Action buttons in saddle brown with gold hover
- Badge system for achievements (rosettes, ribbons)

4. COMPETITION DATA TABLE
- Alternating row backgrounds (cream/vintage tan)
- Saddle brown headers with gold sort indicators
- Ranking column with bronze/silver/gold highlighting
- Hover states enhance readability without distraction
- Generous row height (48px) - dignified presentation

5. HERITAGE FOOTER
- Racing green background anchors page
- Multi-column layout: Club info, quick links, events, contact
- Gold accent lines separate sections
- Social media in subtle cream icons
- Copyright in refined Crimson Pro

## Not synced

Built from `style-69-equestrian.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-ui`.
