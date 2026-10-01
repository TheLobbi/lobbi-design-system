Premier auction house aesthetic blending the gravitas of Sotheby's and Christie's with centuries of connoisseurship. This design embodies legacy, provenance, and the refined world of fine art and luxury goods. Every element communicates expertise, discretion, and unparalleled prestige.

**Blend:** Auction House 80% + Heritage Prestige 20%  
**Temperature:** 4/10 (cool) · **Formality:** 10/10 · **Tags:** premium  
**Perfect for:** Auction Houses, Fine Art Sales, Collectibles Markets

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Prestige Auction House”, “Live & Upcoming Auctions”, “Featured Lots”, “Upcoming Auction Schedule”.
- Buttons are short verb phrases in Title Case: “Place Bid”, “Place Bid”, “Place Bid”.
- Navigation uses single nouns: “Auctions”, “Lots”, “Specialists”, “Results”, “Consign”, “Client Access”.
- The reference page uses emoji as inline glyphs (🎨 💎 📜 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `sotheby-s-blue`, `cream`, `gold`, `status-sold-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Sotheby's Blue (#0033a0): Authority, trust, institutional prestige
- Cream (#faf8f3): Museum-quality presentation, refined sophistication
- Gold (#c9a227): Luxury, investment value, precious objects
- Charcoal (#1c1c1c): Timeless elegance, printed catalog aesthetic

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — "Courier New", monospace
- `montserrat` — "Montserrat", sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Montserrat); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Headings: Cormorant Garamond (elegant serif, art catalog tradition)
- Body: Montserrat (refined sans, modern legibility)
- Lot numbers: Monospace (catalog authenticity)
- Emphasis: Italic Cormorant (provenance, attribution)

## Spacing, shape and elevation

- Spacing steps: `space-6` 6px, `space-12` 12px, `space-20` 20px, `space-24` 24px, `space-28` 28px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px, `radius-full` 50%.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

- Generous whitespace (cream background) = gallery wall breathing room
- Lot-focused cards with detailed provenance
- Table presentations mimicking printed catalogs
- Elegant borders suggesting framed presentation

## States and motion

- Subtle hover states (no aggressive animations - dignity first)
- Gold accent reveals on interaction
- Smooth transitions maintaining composure
- Discrete call-to-action styling

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `cream` 1.0:1, `gold` 2.3:1, `stat-detail-text` 3.3:1, `category-tag-bg` 1.1:1, `footer-about-text` 1.5:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- High contrast (blue/gold on cream) ensures readability
- Serif fonts sized generously for clarity
- Clear hierarchy supports screen readers
- Keyboard navigation maintains dignity

## Component inventory

The reference page composes these patterns from the tokens above:

1. Stats Grid: Auction performance metrics with gold accents
2. Featured Lots: Large imagery, detailed provenance, estimate ranges
3. Bid Tracker: Live auction status with specialist oversight
4. Provenance Table: Comprehensive ownership history
5. Specialist Profiles: Expert authority and credentials

## Further guidance

### Strategic Intent

- Establish immediate authority through classic auction house visual language
- Convey legacy and heritage through elegant serif typography
- Create sophisticated hierarchy mirroring catalog presentation
- Balance traditional prestige with modern functionality
- Signal exclusivity and expert curation

### Temperature

- Cool Prestigious (4/10)
- Restrained emotion, intellectual engagement
- Professional distance with warm gold accents
- Trust through institutional consistency

### Formality

- Ultra High (10/10)
- Impeccable presentation standards
- Traditional auction house conventions
- Expert terminology and nomenclature
- White-glove service aesthetic

### Competitive Positioning

- This design positions the platform as a premier destination for serious collectors,
- institutional buyers, and connoisseurs. It communicates expertise, discretion,
- and access to exceptional objects with impeccable provenance.

### Target Experience

- Users should feel they're engaging with a centuries-old institution that sets
- the global standard for auction excellence. Every interaction reinforces trust,
- expertise, and the significance of each transaction.

### Cultural References

- Sotheby's catalog layouts (1744-present)
- Christie's King Street aesthetic
- Fine art gallery presentations
- Museum collection displays
- Rare book auction traditions

## Not synced

Built from `style-67-auction-house.html`. No component bundle: the reference page's markup is not packaged as live components.
