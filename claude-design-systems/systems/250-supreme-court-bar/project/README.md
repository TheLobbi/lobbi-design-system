Constitutional Authority & Judicial Dignity. Inspired by: Supreme Court chambers, legal tradition, marble architecture, judicial robes, constitutional gravitas, scales of justice, courtroom solemnity.

**Blend:** Constitutional Authority 55% + Legal Tradition 30% + Judicial Dignity 15%  
**Temperature:** 3/10 (cool) · **Formality:** 10/10 · **Tags:** professional, premium  
**Perfect for:** Supreme Court Bars, Constitutional Lawyers, Judicial Societies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “The Supreme Court Bar”, “Current Term Overview”, “Active Docket”, “Recent Opinions”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Save Draft”, “Cancel”, “File Cert Petition”.
- Navigation uses single nouns: “Docket”, “Opinions”, “Arguments”, “Members”, “Rules”, “History”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `gavel-brown`, `seal-gold`, `constitution-cream`, `law-navy`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --justice-black: #1c1917     → Judicial robes, impartial authority, solemn dignity
- --stone-800: #292524         → Courthouse stone, institutional permanence
- --marble-white: #f5f5f4      → Marble columns, purity of justice, clarity
- --marble-100: #fafaf9        → Pristine documents, constitutional text
- --gavel-brown: #92400e       → Mahogany gavel, judicial authority, tradition
- --seal-gold: #ca8a04         → Court seal, prestigious certification, excellence
- --constitution-cream: #fef9ef → Aged parchment, founding documents, legal history
- --law-navy: #1e3a8a          → Legal authority, trust, procedural order
- --chamber-gray: #57534e      → Courtroom walls, neutral impartiality
- --verdict-green: #065f46     → Favorable ruling, justice served
- --dissent-red: #991b1b       → Dissenting opinion, critical analysis

## Typography

- `display` — Lora, serif
- `body` — "Source Serif Pro", serif
- `inter` — "Inter", sans-serif

Faces are hosted on Google Fonts (Lora, Source Serif Pro, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Source+Serif+Pro:wght@400;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Lora: Headlines, opinions - judicial authority with serif gravitas
- Source Serif Pro: Legal documents, case citations - traditional legal typography
- Inter: Interface elements - modern clarity for digital legal systems
- Letter-spacing: 0.02-0.05em for legal terminology (judicial precision)
- Line-height: 1.7 for legal text readability (critical for legal documents)
- Font scale: 0.875rem (fine print) → 3rem (court title)

## Spacing, shape and elevation

- Spacing steps: `space-6` 6px, `space-7-2` 7.2px, `space-14` 14px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px.

- Base unit: 0.5rem (8px) - Constitutional grid system
- Card padding: 2rem - Dignified spacing reflecting courtroom formality
- Section gaps: 4rem - Ceremonial separation between legal matters
- Border radius: 4px - Minimal, authoritative corners (not playful)
- Column structure: Reflects courthouse architectural columns

## States and motion

- Hover: Subtle 2px elevation with restrained shadow (judicial restraint)
- Active: Deeper stone tone with gavel-brown accent
- Focus: Gold seal border for accessibility (3px solid seal-gold)
- Transition: 0.4s ease - Deliberate, measured like judicial proceedings
- Disabled: Reduced opacity to 0.5 (case dismissed)

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `chamber-gray` 2.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AAA compliance (highest standard for legal systems)
- Marble white on justice black: 18.5:1 contrast ratio — **measured 16.0:1**
- Seal gold on stone: 8.4:1 contrast ratio — **measured 5.2:1**
- Focus indicators: 3px visible borders on all interactive elements
- Semantic HTML with ARIA labels for screen readers
- Keyboard navigation: Full tab order for legal professionals
- Text resizable to 200% without loss of functionality

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Justice black background, marble text, seal gold accents, column dividers
2. Navigation: Uppercase legal terms, gavel brown active states
3. Stats Grid: 4-column case metrics with marble backgrounds, seal borders
4. Case Table: Alternating rows, citation formatting, verdict color coding
5. Buttons: Primary (gavel brown), Secondary (seal gold outline), Tertiary (text only)
6. Forms: Legal document styling with proper labels and validation
7. Badges: Verdict status (granted/denied), opinion types (majority/dissent/concurring)
8. Footer: Constitutional quote, bar association information

## Further guidance

### Temperature

- (Solemn Cool)
- Predominantly cool gray and black palette reflects impartiality
- Warm gavel brown provides minimal warmth (tradition)
- Marble white creates crisp, formal atmosphere
- Overall effect: Detached, objective, authoritative

### Formality

- (Maximum - Supreme Authority)
- Most formal possible design system
- Zero casual elements or playful interactions
- Reflects highest court in the land
- Appropriate for: Supreme Court Bar, constitutional law firms, judicial systems,
- appellate courts, legal associations of highest distinction

### Brand Positioning

- Target: Supreme Court Bar members, constitutional attorneys, appellate lawyers
- Competitive: Distinguished from corporate law firms (more authoritative)
- Trust signals: Judicial independence, legal excellence, constitutional adherence
- Emotional resonance: Reverence, authority, historical continuity, justice

### Design Patterns

- Column architecture: Visual callbacks to courthouse columns
- Scales motif: Balanced layouts reflecting scales of justice
- Citation styling: Proper legal citation formatting (Blue Book standards)
- Opinion structure: Majority/dissent/concurring opinion layouts
- Docket numbers: Formatted as legal case citations

## Not synced

Built from `style-250-supreme-court.html`. No component bundle: the reference page's markup is not packaged as live components.
