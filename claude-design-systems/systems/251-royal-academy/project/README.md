Scientific Excellence & Royal Patronage. Inspired by: Royal Society of London, Académie des Sciences, royal crests and seals, scientific publication aesthetics, academic regalia, research excellence, fellowship distinction, Nobel laureate recognition systems, peer-reviewed journal typography.

**Blend:** Scientific Excellence 55% + Royal Patronage 30% + Academic Distinction 15%  
**Temperature:** 4/10 (cool) · **Formality:** 10/10 · **Tags:** academic, premium  
**Perfect for:** Royal Academies, Scientific Societies, Distinguished Fellows

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “The Royal Academy of Sciences”, “Research Excellence”, “Recent Publications”, “Featured Research”.
- Buttons are short verb phrases in Title Case: “Submit Nomination”, “Save Draft”, “View Guidelines”, “Submit Manuscript”.
- Navigation uses single nouns: “Research”, “Fellows”, “Publications”, “Grants”, “Events”, “Library”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `royal-blue`, `academy-gold`, `parchment-cream`, `scholar-black`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --royal-blue: #1e40af       → Royal authority, trust, scientific precision, institutional stability
- --academy-gold: #d4a520     → Royal crest, fellowship medals, academic achievement
- --deep-navy: #1e3a8a        → Depth of knowledge, scholarly seriousness, intellectual authority
- --parchment-cream: #fef9ef  → Ancient manuscripts, publication paper, academic tradition
- --scholar-black: #0f172a    → Academic robes, formal authority, text clarity
- --crown-purple: #6d28d9     → Royal regalia, distinction, ceremonial importance
- --emerald-green: #059669    → Peer review approved, publication success, grant awarded
- --oxford-red: #b91c1c       → Academic importance, citation markers, emphasis
- --silver-gray: #64748b      → Secondary information, supporting data, methodology notes
- --ivory-white: #fefcf9      → Pristine publication, clean data presentation
- --copper-accent: #b45309    → Historical instruments, laboratory equipment, observation

## Typography

- `display` — "Libre Baskerville", serif
- `body` — "IBM Plex Serif", serif
- `ibm-plex-sans` — "IBM Plex Sans", sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, IBM Plex Sans, IBM Plex Serif); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:wght@400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Libre Baskerville: Headlines, fellows' names - classical academic authority
- IBM Plex Serif: Body text, abstracts - modern scientific readability with traditional feel
- IBM Plex Sans: Data, metrics, interface - technical precision, research data display
- Letter-spacing: 0.02em for academic titles (distinguished but readable)
- Line-height: 1.8 for research text (optimal for academic reading)
- Font scale: 0.875rem (footnotes) → 3.5rem (royal titles)
- Superscript styling for citations and footnotes (standard academic format)

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px, `space-40` 40px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

- Base unit: 0.5rem (8px) - Academic grid system
- Card padding: 2rem - Generous scholarly spacing
- Section gaps: 4rem - Publication section divisions
- Border radius: 8px - Refined but not overly modern (balances tradition/innovation)
- Asymmetric layouts: Reflects scientific precision (not decorative symmetry)
- Column structure: Publication-style multi-column layouts

## States and motion

- Hover: 4px elevation with royal blue glow (scientific discovery highlight)
- Active: Deeper navy with gold accent (fellowship selection)
- Focus: Academy gold border (3px) for accessibility
- Transition: 0.35s ease - Measured, academic pace
- Disabled: 0.4 opacity (research not yet published)
- Loading: Circular progress (peer review in process)

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `emerald-green` 3.6:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `academy-gold` 2.2:1, `ivory-white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA+ compliance (academic standard)
- Royal blue on cream: ~~8.9:1~~ contrast ratio — **measured 8.3:1**
- Scholar black on ivory: 17.2:1 contrast ratio
- Academy gold on navy: ~~7.1:1~~ contrast ratio — **measured 4.5:1**
- Focus indicators: 3px gold borders on all interactive elements
- Semantic HTML with proper ARIA labels for research data
- Screen reader friendly: All charts and data tables have text alternatives
- Keyboard navigation: Complete tab order for fellows' access

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Royal crest, academy gold borders, institution name with charter date
2. Navigation: Fellowship sections, research divisions, publication access
3. Stats Grid: Research metrics, citation counts, fellowship numbers, grant funding
4. Research Cards: Publication abstracts, fellow profiles, grant announcements
5. Buttons: Primary (royal blue), Secondary (academy gold), Tertiary (silver)
6. Tables: Research data, publication lists, citation records, peer review status
7. Forms: Fellowship nomination, grant application, manuscript submission
8. Badges: Fellow status (FRS, FBA), peer review status, impact factor ratings
9. Footer: Royal charter, patron information, international affiliations

## Further guidance

### Temperature

- (Distinguished Cool)
- Predominantly cool blue palette reflects scientific objectivity
- Warm gold provides prestige and recognition warmth
- Parchment cream adds historical warmth
- Overall effect: Professional, trustworthy, intellectually rigorous

### Formality

- (Maximum - Academic Excellence)
- Highest formality tier for scientific institutions
- Royal patronage demands ceremonial presentation
- Fellowship recognition requires distinguished aesthetics
- Appropriate for: Royal scientific societies, national academies, Nobel institutions,
- research councils, academic publishers of highest distinction

### Brand Positioning

- Target: Scientific fellows, research institutions, academic publishers
- Competitive: More prestigious than university departments (royal distinction)
- Trust signals: Royal patronage, peer review excellence, centuries of tradition
- Emotional resonance: Intellectual pride, scholarly achievement, recognition

### Design Patterns

- Crest/seal imagery: Royal coat of arms, academy medallions, fellowship seals
- Publication styling: Abstract formatting, citation styling, journal layouts
- Fellowship recognition: Member galleries, laureate lists, distinction markers
- Research metrics: Impact factors, h-index displays, citation graphs
- Historical timeline: Foundation dates, royal charters, scientific milestones
- Multilingual support: Latin mottos, international research collaboration

### Scientific Communication

- Abstract formatting: Structured abstracts with methods/results/conclusions
- Citation styling: Proper academic citation formatting (various styles supported)
- Data visualization: Tables, charts, graphs in publication-quality styling
- Peer review workflow: Manuscript status tracking, reviewer assignment
- Impact metrics: Citation counts, altmetrics, journal rankings

## Not synced

Built from `style-251-royal-academy.html`. No component bundle: the reference page's markup is not packaged as live components.
