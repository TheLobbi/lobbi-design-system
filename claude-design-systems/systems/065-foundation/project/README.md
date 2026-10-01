Legacy Foundations - Generational Impact Architecture. This design embodies the institutional permanence and measured wisdom of generational philanthropic foundations. Drawing inspiration from Carnegie, Rockefeller, and similar legacy institutions established to create enduring social impact across centuries, not quarters.

**Blend:** Foundation 80% + Philanthropy Heritage 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** premium, professional  
**Perfect for:** Foundations, Philanthropic Orgs, Charitable Trusts

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “The Heritage Foundation”, “Legacy of Impact”, “Total Grants Distributed”, “Active Program Areas”.
- Navigation uses single nouns: “Grant Programs”, “Impact Reports”, “Governance”, “Grant Application”.
- The reference page uses emoji as inline glyphs (📚 🔬 🏛 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `heritage-green`, `heritage-green-light`, `cream`, `gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary: Heritage Green (#166534)
- ├─ Symbolism: Endowment growth, environmental stewardship, wealth preservation
- ├─ Psychology: Trust, stability, generational thinking
- ├─ Application: Headers, key metrics, call-to-action elements
- Cultural: Old money discretion, ivy league prestige

- Secondary: Cream (#faf6eb)
- ├─ Symbolism: Aged parchment, historical documents, timeless wisdom
- ├─ Psychology: Warmth without informality, approachability with dignity
- ├─ Application: Backgrounds, content cards, reading surfaces
- Cultural: Library reading rooms, executive board chambers

- Accent: Gold (#c9a227)
- ├─ Symbolism: Endowment assets, philanthropic excellence, founder vision
- ├─ Psychology: Achievement, legacy, measured celebration
- ├─ Application: Award markers, milestone indicators, premium highlights
- Cultural: Presidential medals, institutional seals, anniversary marks

- Neutral: Charcoal (#292524)
- ├─ Symbolism: Scholarly text, legal documents, institutional authority
- ├─ Psychology: Gravitas, intellectual rigor, formal communication
- ├─ Application: Body text, data labels, formal messaging
- Cultural: Printed annual reports, archival records, charter documents

- TYPOGRAPHY HIERARCHY (Serif-Dominant):

- Primary: Libre Baskerville
- ├─ Purpose: Traditional serif communicating scholarly authority
- ├─ Usage: Headers, institutional messaging, founder quotes
- ├─ Accessibility: High contrast, generous size scaling (18px+ body)
- Heritage: Book typography tradition, academic publishing roots

- Secondary: Crimson Text
- ├─ Purpose: Complementary serif for extended reading
- ├─ Usage: Body text, report excerpts, program descriptions
- ├─ Accessibility: Optimized for screen readability despite traditional roots
- Heritage: Transitional serif balancing classical/modern

- SPATIAL RHYTHM (Stately Proportions):

- Base Unit: 8px (conservative, classical rhythm)
- ├─ Card Padding: 48px (generous, library reading room comfort)
- ├─ Section Spacing: 64px (deliberate separation, chapter breaks)
- ├─ Header Height: 120px (institutional presence, not rushed)
- Container Max-Width: 1400px (dignified, not sprawling)

## Typography

- `display` — "Libre Baskerville", serif
- `body` — "Crimson Text", serif

Faces are hosted on Google Fonts (Libre Baskerville, Crimson Text); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Crimson+Text:wght@400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-8` 8px, `radius-full` 50%.
- Elevation: `shadow-subtle`, `shadow-card`, lowest first for resting cards, higher for hover and overlays.

1. INSTITUTIONAL HEADER
- Foundation seal/wordmark (left)
- Founding year subtitle (heritage timestamp)
- Primary navigation (grant programs, impact, governance)
- "Endowment Health" indicator (fiduciary transparency)

2. IMPACT METRICS GRID (4 Cards)
- Total Grants Distributed (lifetime cumulative)
- Active Program Areas (current focus sectors)
- Beneficiaries Reached (human impact scale)
- Years of Service (generational continuity)
- Format: Large numerals, gold accents, historical context

3. PROGRAM AREAS SECTION (3 Cards)
- Education & Scholarship
- Medical Research
- Community Development
- Each with: funding allocation, active grants, impact summary

4. GRANT PORTFOLIO TABLE
- Columns: Recipient, Program Area, Amount, Term, Impact Category
- Style: Ledger-inspired, precise alignment, alternating cream rows
- Function: Transparency in capital deployment decisions

5. INSTITUTIONAL FOOTER
- Governance: Board composition, investment committee
- Legacy: Founder biography excerpt, founding mission reaffirmation
- Contact: Physical address (not just digital), formal inquiry channels

## States and motion

- Hover States: Subtle gold underlines (not aggressive)
- Transitions: 400ms ease (measured, not snappy)
- Focus Indicators: 3px heritage green outline (accessibility with dignity)
- Loading States: Fade transitions (patience, not anxiety)

- Philosophy: Interactions reflect unhurried deliberation. Users are
- board members, researchers, and grantseekers—all requiring thoughtful
- engagement, not gamified dopamine hits.

Timing values: `--transition-standard` 400ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `cream` 1.0:1, `gold` 2.2:1, `gold-light` 1.3:1, `category-tag-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 Level AA (Minimum Standards):
- ├─ Color Contrast: 7:1 (charcoal on cream) - AAA level
- ├─ Focus Indicators: 3px visible outlines on all interactive elements
- ├─ Semantic HTML: <header>, <main>, <section>, <article>, <footer>
- ├─ ARIA Labels: All metrics have descriptive aria-label attributes
- ├─ Keyboard Navigation: Full tab order, Enter/Space activation
- ├─ Screen Reader: Strategic heading hierarchy (h1→h2→h3)
- Responsive: Maintains readability 320px→2560px viewports

- Institutional Commitment: Foundations serve diverse communities including
- individuals with disabilities. Accessibility is moral imperative, not compliance.

## Component inventory

The reference page composes these patterns from the tokens above:

1. INSTITUTIONAL HEADER
- Foundation seal/wordmark (left)
- Founding year subtitle (heritage timestamp)
- Primary navigation (grant programs, impact, governance)
- "Endowment Health" indicator (fiduciary transparency)

2. IMPACT METRICS GRID (4 Cards)
- Total Grants Distributed (lifetime cumulative)
- Active Program Areas (current focus sectors)
- Beneficiaries Reached (human impact scale)
- Years of Service (generational continuity)
- Format: Large numerals, gold accents, historical context

3. PROGRAM AREAS SECTION (3 Cards)
- Education & Scholarship
- Medical Research
- Community Development
- Each with: funding allocation, active grants, impact summary

4. GRANT PORTFOLIO TABLE
- Columns: Recipient, Program Area, Amount, Term, Impact Category
- Style: Ledger-inspired, precise alignment, alternating cream rows
- Function: Transparency in capital deployment decisions

5. INSTITUTIONAL FOOTER
- Governance: Board composition, investment committee
- Legacy: Founder biography excerpt, founding mission reaffirmation
- Contact: Physical address (not just digital), formal inquiry channels

## Further guidance

### Core Design Principles

1. INSTITUTIONAL PERMANENCE
- Typography: Traditional serif (Libre Baskerville) signals scholarly rigor
- Spacing: Generous margins reflect unhurried, thoughtful decision-making
- Layout: Symmetrical, classical proportions communicate stability

2. GENERATIONAL PERSPECTIVE
- Content: Multi-decade impact metrics, founder legacy tributes
- Language: Formal, enduring, "since 1902" messaging
- Imagery: Historical continuity with forward vision

3. STEWARDSHIP TRANSPARENCY
- Financial: Clear grant distributions, endowment health
- Impact: Measurable outcomes across program areas
- Governance: Board composition, investment philosophy visibility

### Temperature Calibration

- Warm Heritage (5/10)
- Balance Point: Institutional authority + measured human warmth

- Warmth Signals:
- ├─ Cream backgrounds (not stark white institutional cold)
- ├─ Gold accents (celebration of impact, not sterile bureaucracy)
- ├─ Program descriptions (beneficiary stories, not just numbers)
- Founder legacy sections (human vision behind institution)

- Authority Signals:
- ├─ Formal typography (serif dominance, classical proportions)
- ├─ Legal language precision ("fiduciary duty", "endowment stewardship")
- ├─ Financial transparency (exact figures, not rounded estimates)
- Governance visibility (board credentials, investment philosophy)

### Formality Spectrum

- Very High Institutional (9/10)
- Linguistic Markers:
- ├─ "The Foundation" (definite article formality)
- ├─ "Since 1902" (historical authority)
- ├─ "Grantees" not "partners" (precise legal relationships)
- ├─ "Fiduciary responsibility" (institutional language)
- Full names, titles (John D. Rockefeller, Chairman Emeritus)

- Avoided Patterns:
- ├─ Casual contractions ("we're" → "we are")
- ├─ Emoji or informal iconography
- ├─ Trendy design patterns (neumorphism, glassmorphism)
- Startup energy language ("disrupting philanthropy")

### Trust Architecture

- Foundations manage billions in public-benefit assets. Trust established through:

1. Financial Transparency
- Exact grant figures (not "~$50M" but "$49,847,293")
- Endowment performance (5-year returns, spending rate)
- Administrative costs (overhead ratio visibility)

2. Historical Continuity
- Founding mission consistency (1902 charter → today)
- Multi-decade impact timelines
- Generational leadership succession

3. Intellectual Rigor
- Research-backed program design
- Evidence-based impact measurement
- Academic partnership citations

4. Governance Credibility
- Board diversity and expertise transparency
- Conflict of interest policies
- Independent audit references

### Cultural Context

- Target Audience Psychographics:
- ├─ Board Members: Fiduciary oversight, legacy preservation focus
- ├─ Grantseekers: Formal proposal research, alignment verification
- ├─ Researchers: Historical giving patterns, program area analysis
- ├─ Donors: Potential additional endowment contributions
- Public: Accountability stakeholders, impact transparency seekers

- Design Must Signal:
- ├─ Permanence: "This institution will outlive us all"
- ├─ Seriousness: "Every dollar is thoughtfully deployed"
- ├─ Heritage: "Building on 120+ years of proven impact"
- Accessibility: "Open to inquiry while maintaining dignity"

### Competitive Differentiation

- vs. Startup/Tech Foundations (Gates, Chan Zuckerberg):
- ├─ Less: Innovation theater, metrics dashboards, tech optimization language
- More: Historical continuity, classical design, generational thinking

- vs. Community Foundations:
- ├─ Less: Local personality, grassroots warmth, folksy accessibility
- More: Institutional scale, formal governance, endowment sophistication

- vs. Corporate Foundations:
- ├─ Less: Brand synergy, marketing energy, trendy causes
- More: Independent mission, apolitical stance, research-driven focus

### Responsive Design Strategy

- Desktop (1400px+): Full grandeur
- ├─ 4-column metrics grid
- ├─ 3-column program cards
- ├─ Full-width data table (8 columns visible)
- Sidebar governance information

- Tablet (768px-1399px): Dignified adaptation
- ├─ 2-column metrics grid
- ├─ 2-column program cards (third wraps)
- ├─ Horizontal scroll table (preserve data density)
- Stacked governance sections

- Mobile (320px-767px): Preserved formality
- ├─ Single column (no compromise on readability)
- ├─ Metrics stack with full context
- ├─ Cards maintain generous padding (36px not 16px)
- Table converts to card stack (accessibility over data density)

- Philosophy: Never sacrifice dignity for device constraints. Better to
- require horizontal scroll than compress information into illegibility.

### Performance Considerations

- ├─ Typography: 2 font families (Libre Baskerville + Crimson Text)
- ├─ Color Palette: 4 colors (minimal CSS overhead)
- ├─ Images: Lazy-loaded, WebP format with fallbacks
- ├─ Animations: CSS-only (no JavaScript dependency)
- ├─ Bundle Size: <50KB (excluding fonts) for core styles
- Accessibility Tree: Optimized for screen reader performance

## Not synced

Built from `style-65-foundation.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-serif-primary`, `--font-serif-secondary`.
