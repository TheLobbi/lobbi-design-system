Fraternal Organization: Fraternal Order 80% + Brotherhood Heritage 20%.

**Blend:** Fraternal Order 80% + Brotherhood Heritage 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** association, premium  
**Perfect for:** Fraternal Orders, Brotherhood Organizations, Social Clubs

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Grand Lodge of Excellence”, “Grand Lodge Dashboard”, “Membership Development”, “Charitable Foundation Programs”.
- Navigation uses single nouns: “Lodges”, “Charity”, “Events”, “Archives”.
- The reference page uses emoji as inline glyphs (🏛 👥 ❤ 🎓); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `ceremonial-gold`, `parchment-cream`, `royal-purple`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Lodge Blue (#1e3a5f): Brotherhood, loyalty, ceremonial authority
- Ceremonial Gold (#c9a227): Tradition, achievement, honor
- Parchment Cream (#f9f6f0): Historical continuity, aged wisdom
- Royal Purple (#7e22ce): High degrees, special recognition, honors

## Typography

- `display` — "Libre Baskerville", serif
- `crimson-text` — "Crimson Text", serif

Faces are hosted on Google Fonts (Libre Baskerville, Crimson Text); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Crimson+Text:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Libre Baskerville: Serif dignity for headings - evokes classical texts
- Crimson Text: Readable heritage for body - suggests historical documents
- Decorative Initials: Chapter/degree markers - manuscript tradition

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-20` 20px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px.
- Elevation: `shadow-subtle`, `shadow-elevated`, lowest first for resting cards, higher for hover and overlays.

- Ceremonial header with organizational emblem placement
- Symmetrical layouts suggesting balance and order
- Bordered sections evoking framed certificates and charters
- Vertical progression for degree/rank advancement

## States and motion

- Enter → Recognize tradition → Feel brotherhood → See impact →
- Track progress → Honor heritage → Commit deeper

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `ceremonial-gold` 2.2:1, `nav-link-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Design Genetics

- Fraternal Order DNA: 80% - Lodge halls, ceremonial spaces, classical architecture
- Brotherhood Heritage: 20% - Tradition, lineage, generational continuity
- Temperature: 5/10 - Traditional warmth without excessive sentiment
- Formality: 8/10 - Ceremonial dignity, institutional gravitas

### Psychological Profile

- Trust Architecture: Heritage + continuity + ritual = institutional permanence
- Authority Markers: Degrees, officer titles, historical lineage
- Belonging Signals: Chapter identity, brotherhood bonds, shared symbols
- Legacy Focus: Charitable giving, scholarships, memorial recognition

### Fraternal Design Patterns

1. Degree Progression Tracker - Visual rank advancement
2. Officer Installation Calendar - Leadership succession ritual
3. Charitable Dashboard - Benevolent works measurement
4. Memorial Pages - Honoring departed brothers
5. Historical Archives - Organizational memory preservation
6. Lodge Directory - Chapter network visualization

### Trust Mechanisms

- Charitable giving transparency ($3.2M displayed)
- Membership growth metrics (18,456 members)
- Scholarship impact (456 recipients)
- Historical continuity markers (founded dates, lineage)

### Engagement Architecture

- Ritual calendar creates attendance motivation
- Degree progression drives advancement behavior
- Charitable impact builds purpose connection
- Officer roles create leadership pathways

### Competitive Advantages

- vs. Generic Association Sites: Ceremonial dignity, heritage depth
- vs. Social Networks: Structured hierarchy, meaningful ritual
- vs. Member Databases: Emotional brotherhood bonds, tradition

### Conversion Psychology

- "Active Lodges" → Network breadth credibility
- "Charitable Giving" → Purpose-driven membership
- "Scholarships Awarded" → Generational investment
- Degree progression → Clear advancement pathway

### Brotherhood Authenticity

- Not corporate: Ceremonial, not transactional
- Not casual: Dignified, not informal
- Not modern: Traditional, timeless
- Not exclusive: Welcoming within structure

## Not synced

Built from `style-86-fraternal-org.html`. No component bundle: the reference page's markup is not packaged as live components.
