┌────────────────────────────────────────────────────────────────────────────┐ │ "Protecting Innovation Through Precision" │ │ │ │ This design system serves intellectual property law firms and patent │ │ attorneys who operate at the intersection of legal authority and technical │ │ innovation. Every element conveys expertise in protecting cutting-edge │ │ technology through rigorous legal frameworks. │ │ │ │ The interface balances formality with technical accessibility, ensuring │ │ complex patent information remains navigable while maintaining the │ │ gravitas required for high-stakes IP litigation and prosecution. │ └────────────────────────────────────────────────────────────────────────────┘.

**Blend:** Patent Law 75% + Technical Documentation 25%  
**Temperature:** 3/10 (cool) · **Formality:** 9/10 · **Tags:** professional  
**Perfect for:** Patent Attorneys, IP Law Firms, Tech Legal Services

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Active Prosecution”, “Distributed Ledger System for Secure IoT Device Authentication”, “Neural Network Architecture for Real-Time Image Segmentation”, “Quantum Encryption Protocol for Satellite Communication Networks”.
- Buttons are short verb phrases in Title Case: “Review Office Action”, “View Claims”, “Pay Issue Fee”, “Download Notice”.
- Navigation uses single nouns: “Portfolio”, “Prosecution”, “Analytics”, “Prior Art”, “Reports”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-indigo-950`, `color-indigo-800`, `color-indigo-100`, `color-amber-600`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ DEEP INDIGO (#312e81) - Primary Authority                                  │
- │ • Conveys legal expertise, intellectual depth, trustworthiness             │
- │ • Applied to headers, primary buttons, key legal elements                  │
- │ • Establishes professional credibility in IP protection services           │
- │                                                                            │
- │ AMBER (#f59e0b) - Status & Priority Indicators                             │
- │ • Highlights active filings, pending claims, urgent deadlines              │
- │ • Draws attention to critical patent prosecution milestones                │
- │ • Represents the value of protected intellectual property                  │
- │                                                                            │
- │ SLATE (#475569) - Technical Documentation                                  │
- │ • Secondary text, metadata, claim descriptions                             │
- │ • Provides technical readability without overwhelming formality            │
- │ • Balances legal precision with information hierarchy                      │
- │                                                                            │
- │ WHITE (#ffffff) - Clarity & Document Background                            │
- │ • Clean backgrounds mimicking official patent documentation                │
- │ • Ensures maximum readability for dense technical-legal content            │
- │ • Creates formal, document-centric user experience                         │
- ┘

## Typography

- `display` — Merriweather, Georgia, serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Merriweather, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ PRIMARY: Merriweather (Technical Serif)                                    │
- │ • Headings: 700-900 weight - Legal authority and gravitas                  │
- │ • Body text: 400 weight - Readable technical documentation                 │
- │ • Evokes formal legal documents and scholarly publications                 │
- │ • Serif structure enhances credibility in IP legal contexts                │
- │                                                                            │
- │ SECONDARY: Inter (Technical Sans-Serif)                                    │
- │ • UI elements, labels, metadata fields                                     │
- │ • Claim numbers, filing IDs, technical specifications                      │
- │ • Provides modern contrast to traditional serif formality                  │
- │                                                                            │
- │ Hierarchy reflects patent document structure:                              │
- │ • H1 (36px/900) - Patent titles, section headings                          │
- │ • H2 (28px/700) - Claim categories, subsections                            │
- │ • H3 (20px/700) - Individual claims, prior art entries                     │
- │ • Body (16px/400) - Claim text, legal descriptions                         │
- │ • Small (14px/400) - Filing metadata, status annotations                   │
- ┘

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px, `space-3xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 6px, `radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ Document-Centric Layout Strategy:                                          │
- │ • 32px base grid - Formal document-like spacing rhythm                     │
- │ • Generous whitespace - Enhances readability of complex legal text         │
- │ • Structured hierarchy - Mirrors official patent application format        │
- │ • Table-based organization - Prior art, claims, citations                  │
- │                                                                            │
- │ Content density balanced for:                                              │
- │ • Attorney review workflows (quick scanning of claims)                     │
- │ • Client presentations (clear IP portfolio visualization)                  │
- │ • Technical analysis (detailed prior art comparison)                       │
- │ • Deadline tracking (filing status and prosecution timelines)              │
- ┘

## States and motion

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ • Hover effects: Subtle indigo overlay (maintaining formality)             │
- │ • Focus states: Amber outline for accessibility and attention              │
- │ • Transitions: 200ms - Deliberate, professional (not playful)              │
- │ • Click affordances: Clear without excessive decoration                    │
- │ • Table sorting: Client-side filtering for large patent portfolios         │
- │                                                                            │
- │ Temperature: Cool Analytical (3/10)                                        │
- │ • Minimal emotional design - Focus on information and expertise            │
- │ • Professional restraint in color usage and visual effects                 │
- │ • Trust built through clarity, not persuasive design patterns             │
- │                                                                            │
- │ Formality: Very High (9/10)                                                │
- │ • Legal industry standards for professionalism                             │
- │ • Document-like formality reflecting patent office requirements            │
- │ • Conservative visual language appropriate for IP litigation contexts      │
- ┘

Timing values: `--transition-base` 200ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-amber-600` 3.0:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-indigo-100` 1.2:1, `color-amber-500` 2.1:1, `color-white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ • WCAG 2.1 AA contrast ratios (critical for legal document review)         │
- │ • Semantic HTML structure for assistive technology compatibility           │
- │ • Keyboard navigation for attorney workflow efficiency                     │
- │ • Print-friendly styling for court filings and client reports              │
- │ • Screen reader optimized for complex table data (prior art, claims)       │
- ┘

## Component inventory

The reference page composes these patterns from the tokens above:

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ PATENT STATUS CARDS:                                                       │
- │ • Visual representation of filing lifecycle (pending, granted, expired)    │
- │ • Amber badges for active prosecution requiring attention                  │
- │ • Indigo headers establishing patent authority and ownership               │
- │ • Structured metadata: filing date, inventors, classification codes        │
- │                                                                            │
- │ FILING TIMELINE VISUALIZATIONS:                                            │
- │ • Chronological prosecution history tracking                               │
- │ • Office action responses and examiner communications                      │
- │ • Deadline indicators with urgency-based color coding                      │
- │                                                                            │
- │ CLAIM SUMMARY SECTIONS:                                                    │
- │ • Hierarchical claim dependencies (independent vs. dependent claims)       │
- │ • Technical field categorization                                           │
- │ • Allowance status per claim with examiner annotations                     │
- │                                                                            │
- │ PRIOR ART COMPARISON TABLES:                                               │
- │ • Citation analysis with relevance scoring                                 │
- │ • Technical feature mapping across references                              │
- │ • Examiner-cited vs. applicant-cited distinction                           │
- │ • PDF access links for full reference documents                            │
- ┘

## Further guidance

### Business Context

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ Target Users:                                                              │
- │ • Patent attorneys managing prosecution workflows                          │
- │ • IP paralegals tracking filing deadlines and office actions               │
- │ • Corporate counsel overseeing patent portfolio strategy                   │
- │ • Inventors reviewing application status and claim scope                   │
- │ • Licensing professionals analyzing IP asset value                         │
- │                                                                            │
- │ Key Use Cases:                                                             │
- │ • Patent application drafting and claim analysis                           │
- │ • Prosecution history review for litigation preparation                    │
- │ • Prior art search results evaluation and citation mapping                 │
- │ • Portfolio dashboard for C-suite IP strategy presentations                │
- │ • Deadline management and USPTO communication tracking                     │
- ┘

### Competitive Differentiation

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ vs. Generic Legal Software:                                                │
- │ • Patent-specific components (claim trees, prior art tables)               │
- │ • Technical documentation aesthetics match engineer-inventor expectations  │
- │ • Color system conveys innovation protection (not just legal services)     │
- │                                                                            │
- │ vs. Patent Office Interfaces:                                              │
- │ • Modern, streamlined UX vs. government system complexity                  │
- │ • Intelligent information hierarchy vs. form-based bureaucracy             │
- │ • Visual status tracking vs. text-heavy status reports                     │
- ┘

### Scalability & Implementation

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ • Component-based architecture for complex patent data structures          │
- │ • CSS custom properties enable firm-specific brand customization           │
- │ • Responsive grid adapts to attorney multi-monitor workflows               │
- │ • Modular table components for varying data types (claims, citations)      │
- │ • Print stylesheets for court filing document generation                   │
- ┘

### Emotional Resonance

- ┌────────────────────────────────────────────────────────────────────────────┐
- │ Primary Emotions Evoked:                                                   │
- │ • Trust - Through formal design language and legal convention adherence    │
- │ • Confidence - Via clear information architecture and expert presentation  │
- │ • Security - Deep indigo palette conveys IP protection and authority       │
- │ • Precision - Technical typography and structured layouts signal accuracy  │
- │                                                                            │
- │ This design intentionally avoids:                                          │
- │ • Playfulness (inappropriate for legal contexts)                           │
- │ • Excessive minimalism (risks appearing unsophisticated)                   │
- │ • Trendy aesthetics (legal work requires timeless professionalism)         │
- ┘

## Not synced

Built from `style-33-patent-law.html`. No component bundle: the reference page's markup is not packaged as live components.
