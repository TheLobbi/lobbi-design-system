Symmetry, Democracy & Timeless Dignity. Inspired by: Greek Revival architecture, U.S. Capitol Building, Roman Forums, Federal-style government buildings, Swiss typography principles.

**Blend:** Neoclassical Architecture 60% + Government Civic 25% + Swiss Typography 15%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** professional, association  
**Perfect for:** Government Buildings, Civic Institutions, Public Services

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Professional Association Management”, “Dashboard Overview”, “Annual General Assembly”, “Certification Program”.
- Buttons are short verb phrases in Title Case: “Register Now”, “View Agenda”, “Apply Now”, “Learn More”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Governance”, “Finance”, “Reports”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `slate-deep`, `gold-accent`, `gold-light`, `senate-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --marble-white: #f8f9fa     → Purity, transparency, classical columns
- --marble-cream: #f1f3f5     → Aged stone, institutional warmth
- --slate-blue: #334155       → Authority, trustworthiness, civic duty
- --slate-deep: #1e293b       → Foundation stone, gravitas, stability
- --slate-charcoal: #0f172a   → Deep institutional strength
- --gold-accent: #d4af37      → Achievement, excellence, laurel wreaths
- --gold-light: #e8d4a0       → Subtle prestige, refined luxury
- --bronze: #8b7355           → Commemorative plaques, historical permanence
- --senate-blue: #2563eb      → Democratic participation, civic engagement
- --document: #fefce8         → Parchment, constitutional documents

## Typography

- `display` — "Libre Baskerville", Georgia, serif
- `body` — "IBM Plex Serif", Georgia, serif

Faces are hosted on Google Fonts (Libre Baskerville, IBM Plex Serif); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=IBM+Plex+Serif:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Libre Baskerville: Headlines - classical serif authority, readable gravitas
- IBM Plex Serif: Body text - modern clarity with traditional roots
- Letter-spacing: 0.02-0.05em for inscriptional quality
- Font scale: 0.875rem (fine print) → 3rem (monumental)
- All-caps for section headers (engraved stone aesthetic)

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.

- Base unit: 0.5rem (8px) - Neoclassical modular grid
- Golden ratio influences: 1.618 spacing relationships
- Card padding: 2rem - generous institutional spacing
- Section gaps: 4rem - monumental breathing room
- Border radius: 4px - minimal, architectural corners
- Symmetrical layouts enforced via flexbox/grid

## States and motion

- Hover: Subtle 2px elevation with slate shadow
- Active: Gold border accent (0 0 0 2px var(--gold-accent))
- Focus: High-contrast gold outline for WCAG compliance
- Transition: 0.2s ease - dignified, not playful
- Buttons: Crisp edges, solid colors, engraved text shadows

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `marble-cream` 1.1:1, `gold-accent` 2.0:1, `category-tag-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA minimum contrast ratios
- Slate-deep on marble-white: 14.2:1 contrast ratio
- Gold-accent on slate-blue: 4.8:1 contrast ratio
- Senate-blue on marble: 8.1:1 contrast ratio — **measured 4.6–4.9:1**
- Focus visible states with 2px gold borders
- Semantic HTML with proper ARIA landmarks
- Skip-to-content navigation for screen readers

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Marble gradient, gold top border, centered logo treatment
2. Navigation: Uppercase links, symmetrical spacing, underline states
3. Stats Grid: 4-column perfect symmetry, gold dividers
4. Cards: Clean white backgrounds, slate borders, gold corner accents
5. Buttons: Primary (slate solid), Secondary (gold outline), Tertiary (text)
6. Table: Alternating row colors, gold header accents
7. Form Elements: Crisp borders, label-above-input architecture
8. Footer: Centered text, constitutional minimalism

## Further guidance

### Temperature

- (Cool Institutional)
- Marble whites and slate blues create formal coolness
- Gold accents provide minimal warmth
- Overall effect: professional, trustworthy, unemotional

### Formality

- (Very High - Governmental)
- Symmetrical layouts convey order and balance
- Classical typography signals permanence
- Minimal ornamentation emphasizes function
- Appropriate for: government agencies, professional associations,
- regulatory bodies, bar associations, civic organizations

### Neoclassical Design Patterns

- Pediment shapes in card headers (triangular tops)
- Column-inspired vertical dividers (1px gold lines)
- Symmetrical grid systems (never asymmetric layouts)
- Inscriptional typography (caps, serif, spaced)
- Minimal decoration (ornamentation serves structure)

### Brand Positioning

- Target: Government agencies, professional regulatory bodies,
- bar/medical associations, civic organizations, chambers of commerce
- Competitive: Distinguished from corporate modernism
- Trust signals: Institutional permanence, democratic transparency
- Emotional resonance: Duty, service, collective good, equality

## Not synced

Built from `style-145-neoclassical-authority.html`. No component bundle: the reference page's markup is not packaged as live components.
