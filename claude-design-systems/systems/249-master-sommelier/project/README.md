This interface embodies the sophisticated world of professional wine certification, where centuries of French gastronomic tradition meet rigorous modern education standards. Drawing from wine label aesthetics, tasting room elegance, and certification authority, the design creates an atmosphere of refined expertise and terroir appreciation. Every element speaks to the sensory experience of wine: the warm earthy tones of cellar stone, the rich depth of Bordeaux reds, the elegant cream of champagne labels. This is a digital wine cellar for connoisseurs.

**Blend:** Fine Wine 55% + French Gastronomy 30% + Certification Authority 15%  
**Temperature:** 6/10 (warm) · **Formality:** 9/10 · **Tags:** hospitality, premium  
**Perfect for:** Sommelier Guilds, Wine Societies, Gastronomy Institutes

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Wine Education Portal”, “Program Statistics”, “Featured Selections”, “Château Lafite Rothschild”.
- Buttons are short verb phrases in Title Case: “Enroll Now”, “Submit Application”, “Download Syllabus”, “Schedule Consultation”.
- Navigation uses single nouns: “Certifications”, “Wine Library”, “Tasting Notes”, “Education”, “Cellar”.
- The reference page uses emoji as inline glyphs (🍷 🍇 🏆 📚 🌍 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-bordeaux`, `color-champagne-gold`, `color-vintage-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Bordeaux Red (#722f37): Fine wine prestige, aging complexity, varietal depth,
- vineyard heritage, vintage excellence, professional certification authority
- Champagne Gold (#f5e6c8): Label elegance, bottle sophistication, celebration,
- sparkling prestige, French luxury, parchment documentation
- Cellar Stone (#78716c): Underground aging, vault walls, temperature stability,
- historical preservation, earthen terroir, foundational knowledge
- Label Cream (#fef6ed): Wine label background, tasting note cards, certificate
- paper, archival documentation, sommelier exam sheets
- Oak Barrel (#8b7355): Aging barrels, French oak influence, toasted notes,
- winemaking craft, cooper artistry, maturation character
- Deep Burgundy (#6b1a2e): Grand cru excellence, sommelier authority, Pinot Noir
- refinement, restaurant elegance, certification prestige

## Typography

- `display` — Cormorant, Georgia, "Times New Roman", serif
- `body` — "Crimson Text", Georgia, serif
- `lato` — "Lato", sans-serif

Faces are hosted on Google Fonts (Cormorant, Crimson Text, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Crimson+Text:wght@400;600;700&family=Lato:wght@300;400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Cormorant (Primary Display):
- High-contrast serifs reminiscent of French wine labels
- Elegant proportions suitable for château names and appellations
- Classic letterforms echo 19th-century label typography
- Perfect for vintage years, vineyard names, certification titles
- Romantic yet authoritative (sommelier expertise)
- Used on premium wine labels worldwide

- Crimson Text (Secondary Headlines & Body):
- Designed for long-form reading (tasting notes, wine descriptions)
- Old-style figures ideal for vintage years and scores
- Excellent legibility for technical wine terminology
- Classical proportions honor gastronomic tradition
- Warm character suits wine education content
- Professional without being clinical

- Lato (Metadata & Navigation):
- Clean sans-serif for modern functionality
- Neutral enough not to compete with serif elegance
- Excellent readability for navigation and data tables
- Professional contrast to decorative display faces
- Used for wine scoring, ratings, technical specifications

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 32px, `space-lg` 64px, `space-xl` 96px, `space-xxl` 128px. Pad cards and sections from these steps only.
- Corners: `border-radius` 3px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-warm`, lowest first for resting cards, higher for hover and overlays.

1. Sommelier Header: Bordeaux red bar with gold accents, certification badges
2. Wine Stats: Large numerals with vintage years, tasting scores, cellar counts
3. Tasting Cards: Label-inspired design with vintage ribbons, appellation badges
4. Wine Library Table: Formal catalog with ratings, regions, aging potential
5. Certification Form: Elegant inputs with examination level selection
6. Sommelier Buttons: Refined interactions with wine cork texture hints
7. Rating Badges: Wine score inspired (90-100 point scale, gold medals)
8. Cellar Footer: Multi-column with French regional references

## States and motion

- Hover states reveal tasting notes (card flip metaphor)
- Buttons respond with gentle scale and color deepening (wine aging)
- Focus states use champagne gold outlines (2px, bottle label highlight)
- Cards lift with warm shadows (candlelit cellar ambiance)
- Transitions are smooth and mature (400ms, wine swirl pace)
- Wine glass icon animations on interactive elements
- No aggressive motions (sommelier sophistication)

Timing values: `--transition-slow` 450ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-champagne-gold` 1.2:1, `color-cellar-stone` 4.5:1, `color-label-cream` 1.0:1, `color-oak-barrel` 4.2:1, `color-vintage-gold` 2.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Bordeaux (#722f37) on cream (#fef6ed): 9.2:1 contrast (AAA compliant)
- Dark text on champagne gold backgrounds: 8.5:1 contrast
- 18px minimum body text for tasting note readability — **the reference page sets running text at 16px**
- 56px minimum touch targets for vintage selection
- Focus indicators use 2px champagne gold outline
- Semantic HTML5 for wine catalog navigation
- ARIA labels for wine rating systems
- Alt text for vineyard and bottle imagery
- Keyboard navigation for wine database
- Screen reader support for vintage information
- Color never sole indicator of wine ratings
- Text alternatives for wine color descriptors
- Clear hierarchy for certification levels
- Form labels explicitly associated

## Component inventory

The reference page composes these patterns from the tokens above:

1. Sommelier Header: Bordeaux red bar with gold accents, certification badges
2. Wine Stats: Large numerals with vintage years, tasting scores, cellar counts
3. Tasting Cards: Label-inspired design with vintage ribbons, appellation badges
4. Wine Library Table: Formal catalog with ratings, regions, aging potential
5. Certification Form: Elegant inputs with examination level selection
6. Sommelier Buttons: Refined interactions with wine cork texture hints
7. Rating Badges: Wine score inspired (90-100 point scale, gold medals)
8. Cellar Footer: Multi-column with French regional references

## Further guidance

### Spatial Hierarchy

- 8px baseline grid (wine label precision)
- Warm, intimate spacing like tasting room tables (48-80px between sections)
- Asymmetric balance (French wine label tradition)
- Vertical rhythm echoes wine bottle proportions
- Generous margins (cellar vault breathing room)
- Golden ratio for wine-related proportions (bottle shape, glass dimensions)

### Emotional Temperature

- Warm Refined (6/10):
- Bordeaux and burgundy provide rich warmth
- Champagne gold adds luxury and celebration
- Cellar stone grounds with earthen stability
- Oak barrel brings artisanal warmth
- Overall: Inviting like a wine cellar, sophisticated like a château
- Approachable expertise rather than intimidating authority

### Formality Level

- High Formality (9/10):
- Master sommelier certification demands expertise
- French gastronomic tradition and protocol
- Wine evaluation rigor and professionalism
- Certification authority and standards
- Château elegance and heritage
- Fine dining service excellence
- Suitable for professional wine education and luxury hospitality

### Performance Optimization

- Minimal DOM complexity (wine catalog efficiency)
- Font subsetting for display faces (Cormorant limited glyphs)
- System font fallbacks (Georgia, Times)
- CSS Grid for wine label layouts
- No heavy JavaScript for core functionality
- Optimized for tablet use (tasting room devices)
- Fast loading for wine database queries
- Progressive enhancement for vintage searches

### Brand Alignment

- Establishes sommelier credibility through:
- French wine label aesthetic authenticity
- Gastronomic tradition respect and knowledge
- Certification authority and rigor
- Terroir appreciation and education
- Professional service excellence
- Wine evaluation methodology
- Cellar management sophistication
- Château elegance and heritage

### Use Cases

- Master sommelier certification programs (Court of Master Sommeliers)
- Wine education platforms and academies
- Sommelier examination preparation systems
- Wine cellar management and inventory
- Restaurant wine program administration
- Tasting note documentation and sharing
- Wine rating and scoring platforms
- Vineyard and château management
- Wine auction and collector platforms
- Hospitality wine training programs
- Blind tasting competition management
- Wine pairing recommendation engines

### Competitive Differentiation

- Unlike typical wine websites, this design:
- Achieves true wine label aesthetic digitally
- Uses authentic French typography (Cormorant tradition)
- Balances sommelier authority with approachable warmth
- References cellar architecture in spatial design
- Communicates certification rigor through refinement
- Honors French gastronomic heritage authentically
- Serves professionals while educating enthusiasts

### Scalability

- Component system supports:
- Multiple certification levels (introduction to master)
- Vast wine database (regions, vintages, varietals)
- Tasting note libraries and archives
- Examination preparation modules
- Student progress tracking
- Cellar inventory management
- Wine pairing recommendations
- Educational content delivery
- Instructor and mentor coordination
- Professional directory and networking

## Not synced

Built from `style-249-master-sommelier.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-meta`, `--touch-min`, `--focus-ring`, `--focus-offset`.
