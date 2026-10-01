Premium Literary Publications. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ This design embodies the intellectual sophistication and refined elegance of premier literary journals like The New Yorker, Paris Review, and Granta. It prioritizes readability, contemplative space, and timeless typography to create an environment where content breathes and ideas flourish. STYLE BLEND COMPOSITION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ┌─ Literary Journal (80%) ────────────────────────────────────────┐ │ • Generous whitespace and reading-optimized line heights │ │ • Classic serif typography with editorial hierarchy │ │ • Cream paper aesthetic evoking premium print publications │ │ • Story-first layout with contributor attribution │ │ • Refined accent colors (editorial red, intellectual blue) │ │ • Drop caps, pull quotes, and literary conventions │ └─────────────────────────────────────────────────────────────────┘ ┌─ Academic Publishing (20%) ──────────────────────────────────────┐ │ • Structured information hierarchy and citation systems │ │ • Authoritative data presentation in tables and grids │ │ • Metadata-rich content cards (issue numbers, dates, authors) │ │ • Scholarly precision in typography and spacing │ │ • Research-grade data visualization principles │ └──────────────────────────────────────────────────────────────────┘.

**Blend:** Literary Journal 80% + Academic Publishing 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** media, academic  
**Perfect for:** Literary Journals, Publishers, Writing Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “The Quarterly Review”, “Editorial Overview”, “Featured in This Issue”, “The Architecture of Silence”.
- Navigation uses single nouns: “Current Issue”, “Submissions”, “Contributors”, “Archive”, “About”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `cream-paper`, `accent-red`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Crimson Pro", Georgia, serif
- `body` — Inter, -apple-system, sans-serif

Faces are hosted on Google Fonts (Crimson Pro, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`body`, `label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px.

## States and motion

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Hover States: Subtle literary elegance
- Cards lift gently (4px) with soft shadow deepening
- Red accent line appears on story cards (editorial selection)
- Text links underline gracefully (not aggressively)

- Focus States: Accessibility with refinement
- 2px accent-red outline respecting visual hierarchy
- High contrast maintained for reading accessibility

- Reading Experience: Optimized for contemplation
- Line length capped at 75 characters for optimal readability
- Generous line-height (1.8) reduces eye strain
- Ample paragraph spacing encourages reflection

- USE CASES & ADAPTATIONS
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Perfect For:
- ✓ Literary magazines and journals (digital editions)
- ✓ Publishing house editorial dashboards
- ✓ Writer submission portals and manuscript tracking
- ✓ Academic humanities departments
- ✓ Book review platforms and literary criticism sites
- ✓ Creative writing program management systems
- ✓ Poetry foundation archives and collections
- ✓ Independent press author platforms

- Adaptation Guidance:
- Increase spacing further for long-form reading interfaces
- Add pull quotes and drop caps for feature stories
- Implement dark mode with inverted cream/ink palette
- Consider magazine-style grid layouts for content discovery

- ACCESSIBILITY CONSIDERATIONS
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- WCAG 2.1 Level AA Compliance:
- ✓ Color Contrast: 13.5:1 (ink-black on cream-paper) - AAA level
- ✓ Typography: 16px body text minimum for comfortable reading
- ✓ Focus Indicators: High-contrast 2px outlines on all interactive elements
- ✓ Semantic HTML: Proper heading hierarchy and landmark regions
- ✓ Keyboard Navigation: Full tab order with logical flow
- ✓ Screen Reader: Meaningful ARIA labels and descriptive text

- PERFORMANCE OPTIMIZATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Google Fonts: Preconnect and optimized loading (2 font families)
- Minimal CSS: Single embedded stylesheet, no external dependencies
- Semantic HTML: Reduced DOM complexity, faster parsing
- No JavaScript: Pure CSS interactions, instant page loads
- Font Subsetting: Could reduce to Latin character sets for production

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Design Tokens

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Color Palette: Literary Warmth
- ┌──────────────────────────────────────────────────────────────────┐
- │ --cream-paper:     #faf8f3  (Warm base, premium paper texture)   │
- │ --ink-black:       #1a1a1a  (Deep reading ink, timeless)         │
- │ --accent-red:      #b91c1c  (Editorial marks, importance)        │
- │ --muted-blue:      #6b7280  (Scholarly notes, secondary)         │
- │ --warm-white:      #ffffff  (Crisp contrast on cards)            │
- │ --border-subtle:   #e5e5e0  (Delicate separation lines)          │
- │ --shadow-soft:     rgba(26, 26, 26, 0.08)  (Gentle elevation)    │
- ┘

- Typography: Literary Hierarchy
- ┌──────────────────────────────────────────────────────────────────┐
- │ Primary: Crimson Pro (Serif)                                     │
- │   - Display: 700 weight, refined elegance                        │
- │   - Headings: 600 weight, editorial authority                    │
- │   - Body: 400 weight, optimal readability (1.8 line-height)      │
- │                                                                   │
- │ Secondary: Inter (Sans-serif)                                    │
- │   - UI Elements: 500-600 weight, clarity in metadata            │
- │   - Labels: 400 weight, functional precision                     │
- │                                                                   │
- │ Scale: 14px base → 16px body → 20px subhead → 32px title         │
- ┘

- Spacing: Reading-Optimized
- ┌──────────────────────────────────────────────────────────────────┐
- │ --space-xs:  0.5rem   (8px)   Tight metadata grouping           │
- │ --space-sm:  1rem     (16px)  Element breathing room             │
- │ --space-md:  1.5rem   (24px)  Section separation                 │
- │ --space-lg:  2.5rem   (40px)  Major content blocks               │
- │ --space-xl:  4rem     (64px)  Chapter-level divisions            │
- │                                                                   │
- │ Line Heights: 1.8 (body), 1.4 (headings), 1.2 (display)          │
- │ Margins: Generous (80px container padding on desktop)            │
- ┘

- Component Architecture: Editorial Structure
- ┌──────────────────────────────────────────────────────────────────┐
- │ 1. Masthead Header                                               │
- │    - Journal identity with issue metadata                        │
- │    - Minimalist navigation preserving focus                      │
- │                                                                   │
- │ 2. Stats Grid (4 Cards)                                          │
- │    - Editorial metrics with literary presentation                │
- │    - Contributor counts, submission tracking                     │
- │                                                                   │
- │ 3. Featured Content (3 Story Cards)                              │
- │    - Story excerpts with author attribution                      │
- │    - Genre badges and reading time estimates                     │
- │                                                                   │
- │ 4. Submissions Table                                             │
- │    - Manuscript tracking with editorial workflow                 │
- │    - Status indicators and reviewer assignments                  │
- │                                                                   │
- │ 5. Footer Colophon                                               │
- │    - Publication details and contributor links                   │
- ┘

### Design Attributes

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Temperature:  5/10  (Warm Intellectual)
- ┌──────────────────────────────────────────────────────────────────┐
- │ The cream paper background and refined serif typography create   │
- │ warmth without sacrificing intellectual rigor. Accent red adds   │
- │ passion to editorial selections while maintaining composure.     │
- ┘

- Formality:    8/10  (High Literary)
- ┌──────────────────────────────────────────────────────────────────┐
- │ Elevated language, classical typography, and generous spacing    │
- │ establish serious literary credentials. Not stuffy, but deeply   │
- │ respectful of the written word and editorial tradition.          │
- ┘

- INSPIRATIONAL REFERENCES
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Influences:
- The New Yorker - Refined editorial design, iconic typography
- Paris Review - Literary heritage, contributor-focused layouts
- Granta - Contemporary literary excellence, clean presentation
- London Review of Books - Intellectual depth, typographic mastery
- n+1 Magazine - Modern literary discourse, accessible elegance

- Academic Influences:
- JSTOR Interface - Scholarly data organization
- Oxford Academic - Citation systems and metadata structure
- MIT Press Journals - Clean information architecture

### Brand Alignment

- BROOKSIDE BI
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- This design establishes Brookside BI as a thought leader in data-driven
- storytelling. The literary journal aesthetic positions analytics as a
- narrative craft - where data becomes prose, insights become editorial, and
- dashboards transform into published works of analytical excellence.

- Key Brand Expressions:
- Intellectual Authority: Literary tradition meets modern analytics
- Storytelling Focus: Data presented as compelling narratives
- Quality Over Quantity: Curated insights, not information overload
- Timeless Professionalism: Classic design that ages gracefully

## Not synced

Built from `style-53-literary-journal.html`. No component bundle: the reference page's markup is not packaged as live components.
