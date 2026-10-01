Sacred iconography reimagined for the digital age. This style bridges the spiritual weight of Byzantine art with contemporary clarity, transforming mosaic patterns into interface elements, and golden halos into UI accents. Like the Hagia Sophia merging earthly architecture with divine light, this design creates spaces where tradition illuminates modernity.

**Blend:** Byzantine Art 50% + Modern Orthodox 30% + Heritage Gold 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** premium, heritage  
**Perfect for:** Religious Institutions, Orthodox Churches, Faith Communities

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Divine Metrics”, “Sacred Collections”, “Mosaic Restoration”, “Icon Preservation”.
- Buttons are short verb phrases in Title Case: “Submit Inquiry”, “Schedule Visit”, “Clear Form”, “Primary Action”.
- Navigation uses single nouns: “Sacred Space”, “Heritage”, “Collections”, “Community”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-purple-deep`, `color-crimson-bright`, `color-gold`, `color-ivory`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Purple (#4A2B4F): Imperial power, spiritual depth, Byzantine royalty
- Crimson (#8B2E3E): Martyrdom, divine love, sacred passion
- Gold (#C9A961): Divine light, heavenly glory, eternal wisdom
- Ivory (#F8F6F0): Purity, sanctuary walls, spiritual clarity

## Typography

- `display` — Vollkorn, serif
- `body` — "Gentium Book Plus", serif

Faces are hosted on Google Fonts (Vollkorn, Gentium Book Plus); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;600;700&family=Gentium+Book+Plus:wght@400;700&display=swap">
```

- Set titles in `display` and running text in `body`.

### Type rationale

- Vollkorn: Classical serif with Byzantine manuscript influence
- High contrast for dramatic hierarchy
- Old-style numerals for historical authenticity
- Graceful curves suggesting calligraphic tradition

- Gentium Book Plus: Designed for international scripts, broad language support
- Excellent readability for body text
- Gentle, approachable character
- Maintains dignity without severity

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem, `content-padding` 1.5rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 2px, `border-radius-md` 4px, `border-radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-gold`, lowest first for resting cards, higher for hover and overlays.

1. Header: Iconostasis-inspired navigation wall
2. Stats Grid: Four evangelists motif (quadrant display)
3. Content Cards: Icon panels with gilded frames
4. Data Table: Chronicle/codex manuscript style
5. Forms: Petition scrolls with ornate borders
6. Buttons: Sacred action hierarchy
7. Badges: Seal/medallion status indicators
8. Footer: Foundation with columnar structure

## States and motion

- Users experience contemplative dignity—interfaces feel like entering a
- sacred space where every element has been placed with intentional reverence.
- The design invites focused attention, suggesting that what's contained within
- deserves respect and careful consideration. Modern functionality wrapped in
- timeless spiritual aesthetics.

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 300ms ease-in-out, `--transition-slow` 500ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ✓ WCAG 2.1 AA contrast ratios (4.5:1 body, 3:1 large text)
- ✓ Focus indicators with golden outline (3px liturgical emphasis)
- ✓ Semantic HTML with proper landmark roles
- ✓ Responsive typography with fluid scaling
- ✓ Touch targets 44x44px minimum

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Iconostasis-inspired navigation wall
2. Stats Grid: Four evangelists motif (quadrant display)
3. Content Cards: Icon panels with gilded frames
4. Data Table: Chronicle/codex manuscript style
5. Forms: Petition scrolls with ornate borders
6. Buttons: Sacred action hierarchy
7. Badges: Seal/medallion status indicators
8. Footer: Foundation with columnar structure

## Further guidance

### Temperature & Formality

- Temperature: 5/10 (Warm-Neutral) - Golden warmth balanced by cool purples
- Formality: 8/10 (High) - Liturgical gravitas, institutional reverence
- Spirituality Index: 10/10 - Sacred geometry, iconographic principles

### Mosaic Design Patterns

- Tessellation: Small repeated shapes forming larger patterns
- Opus tessellatum: Regular geometric tile arrangement
- Opus vermiculatum: Contoured lines following forms
- Gold tesserae: Angled tiles catching light at different angles
- Fractured beauty: Imperfection creating unified whole

### Responsive Strategy

- Mobile: Icon-style vertical composition (chapel window)
- Tablet: Two-column sanctuary layout
- Desktop: Triptych-inspired three-panel layouts
- Large screens: Cathedral-scale presentation (max 1440px)

### Use Cases

- Religious and spiritual organizations
- Heritage institutions and museums
- Cultural preservation societies
- Orthodox and Catholic digital presence
- Premium art galleries (religious art)
- Scholarly/academic theology portals
- Non-profit heritage organizations

### Implementation Notes

- CSS Grid mimics mosaic tessellation patterns
- Gradient overlays suggest gold leaf application
- Box shadows create icon relief depth
- Border patterns reference interlace designs
- Color transitions suggest candlelight flicker
- Typography scaling follows hierarchical icon tradition

### Historical References

- Hagia Sophia: Architectural proportions and light
- Ravenna Mosaics: Color palette and composition
- Byzantine Icons: Frontal symmetry and gold backgrounds
- Theodora and Justinian Mosaics: Imperial iconography
- Chora Church: Narrative panel arrangements
- Orthodox Iconostasis: Screen-like navigation structure

### Liturgical Color Calendar

- Purple: Lent, Advent (penitential seasons)
- Gold: Feast days, celebrations (divine glory)
- Crimson: Martyrs, Pentecost (holy spirit)
- White/Ivory: Purity, resurrection themes

### Version

- 1.0.0

## Not synced

Built from `style-151-byzantine-contemporary.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-size-xs`, `--font-size-sm`, `--font-size-base`, `--font-size-lg`, `--font-size-xl`, `--font-size-2xl`, `--font-size-3xl`.
