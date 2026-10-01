Inspired by Sotheby's International Realty, Christie's Real Estate, and high-end property platforms. This design establishes aspirational, gallery-like presentation that positions properties as exclusive investment opportunities and lifestyle statements.

**Blend:** Real Estate Luxury 75% + Photography Focus 25%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium, hospitality  
**Perfect for:** Luxury Real Estate, Property Developers, Estate Agencies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Curated Luxury Properties”, “Featured Estates”, “Waterfront Estate”, “Modern Masterpiece”.
- Buttons are short verb phrases in Title Case: “Schedule Viewing”.
- Navigation uses single nouns: “Properties”, “Neighborhoods”, “Services”, “About”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `warm-white`, `rose-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Charcoal #2d2d2d: Sophisticated foundation, executive presence
- Warm White #faf8f5: Inviting elegance, premium paper quality
- Rose Gold #b76e79: Exclusive accent, feminine luxury, aspirational touch
- Cream #f5f0e8: Soft warmth, approachable refinement

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — Raleway, sans-serif

Faces are hosted on Google Fonts (Raleway, Cormorant Garamond); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600&family=Cormorant+Garamond:wght@300;400;500&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Raleway: Modern elegance with geometric precision, light weights create
- aspirational spaciousness
- Cormorant Garamond: Serif accent for property names, editorial sophistication
- Weight hierarchy: 200-300 for luxury feel, 500-600 for emphasis

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-16` 16px, `space-24` 24px, `space-28` 28px, `space-32` 32px, `space-36` 36px. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px, `radius-4` 4px, `radius-full` 50%.
- Elevation: `shadow-soft`, `shadow-elevated`, lowest first for resting cards, higher for hover and overlays.

- Cinematic margins (60-80px) create gallery-like breathing room
- Dramatic negative space positions content as curated selections
- Image-to-text ratio favors large visuals (60:40)
- Vertical rhythm matches property photography aspect ratios

## States and motion

- Entry → Aspiration (large imagery) → Curiosity (property cards) →
- Trust (data transparency) → Desire (elegant CTAs) → Action (contact)

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `rose-gold` 3.6:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `warm-white` 1.0:1, `property-badge-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- 4.5:1 contrast ratio maintained (charcoal on cream)
- Rose gold used as accent only, never sole indicator
- Generous spacing aids readability
- Clear hierarchy supports screen readers

## Component inventory

The reference page composes these patterns from the tokens above:

1. Hero imagery with minimal overlays (photography-first)
2. Property cards with dominant image areas (3:2 ratio)
3. Elegant CTAs with rose gold accents
4. Clean data presentation without visual competition
5. Subtle map integration opportunities

## Further guidance

### User Psychology

- Temperature: 6/10 (Warm Aspirational)
- Inviting yet exclusive, approachable luxury
- Cream tones create comfort without casualness
- Rose gold suggests attainability of luxury

- Formality: 8/10 (High Elegant)
- Sophisticated without intimidation
- Professional trust-building through restraint
- Executive-level presentation

### Competitive Differentiation

- vs. Zillow/Realtor.com: Far more sophisticated, curated vs. catalog
- vs. Sotheby's: Matches elegance, adds modern warmth
- vs. Douglas Elliman: More photography-focused, less corporate

### Conversion Optimization

- Large imagery builds emotional connection before data
- Rose gold CTAs create gentle urgency without pressure
- Spacious layouts reduce cognitive load
- Elegant data tables build trust through transparency

### Brand Alignment

- Positions platform as:
- Exclusive yet accessible
- Photography-forward storytelling
- High-end without pretension
- Investment-grade professional presentation

### Implementation Notes

- Image placeholders sized for property photography (3:2, 16:9)
- Hover states subtle (luxury doesn't shout)
- Micro-interactions minimal (confidence over cleverness)
- Mobile-first would require significant image hierarchy adjustments

### Success Metrics

- Time on page (visual engagement)
- Property detail click-through rate
- Contact form conversion
- Repeat visitor rate

## Not synced

Built from `style-26-real-estate-luxury.html`. No component bundle: the reference page's markup is not packaged as live components.
