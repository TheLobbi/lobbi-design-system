High-end insurance carriers embodying institutional trust and protective authority. Inspired by Lloyd's of London, premium underwriters, and established risk protection. BLEND COMPOSITION.

**Blend:** Insurance Premium 75% + Corporate Trust 25%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** professional  
**Perfect for:** Insurance Companies, Risk Management, Financial Security

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Portfolio Overview”, “Property & Casualty”, “Directors & Officers”, “Cyber & Technology”.
- Buttons are short verb phrases in Title Case: “All”, “Active”, “Pending”, “Renewals”.
- Navigation uses single nouns: “Dashboard”, “Policies”, “Claims”, “Underwriting”, “Reports”, “Contact Advisor”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-primary`, `gold-accent`, `gold-light`, `table-status-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary:   #1e3a5f (Navy Blue)      - Authority, trust, stability, protection
- Surface:   #faf9f7 (Warm White)     - Premium, established, timeless elegance
- Accent:    #b8860b (Dark Gold)      - Premium quality, prestige, value
- Secondary: #64748b (Slate Gray)     - Professional, neutral, sophisticated

- Rationale: Navy blue conveys institutional trust and financial security.
- Gold accents signal premium coverage and established prestige. Warm white
- creates an approachable yet refined backdrop, avoiding clinical sterility.

## Typography

- `display` — "Libre Baskerville", serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Display:    Libre Baskerville (Serif)  - Traditional authority, institutional gravitas
- Interface:  Inter (Sans-serif)         - Modern clarity, data legibility

- Scale:      Conservative hierarchy preserving established formality
- Weight:     Medium to bold for authority, light for data precision

- Rationale: Serif headings establish traditional insurance authority while
- sans-serif body text ensures modern data readability and professional clarity.

- SPATIAL ARCHITECTURE

- Grid:       Conservative 24px base unit reflecting institutional stability
- Spacing:    Generous padding (32-48px) conveying established confidence
- Rhythm:     Predictable, reassuring vertical rhythm supporting trust

- Rationale: Conservative spacing signals financial stability and careful
- consideration, never rushed or aggressive like consumer insurance.

## Spacing, shape and elevation

- Spacing steps: `space-unit` 24px, `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-smooth` all 320ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Component inventory

The reference page composes these patterns from the tokens above:

- Shield iconography throughout reinforcing protection and security
- Trust badges and certifications establishing credibility
- Professional tables with excellent readability for policy details
- Subtle texture (fine grid pattern) adding tactile premium quality
- Bordered cards with conservative shadows avoiding modern flatness
- Traditional form elements respecting institutional conventions

- INTERACTION PATTERNS

- Temperature: 5/10 (Warm Professional)  - Approachable authority without coldness
- Formality:   9/10 (Very High)          - Institutional, established, ceremonial

- Animations:  Subtle, dignified transitions (300-400ms)
- Hover:       Conservative elevation and gold accent reveals
- Focus:       Clear, accessible gold borders for form compliance

- EMOTIONAL RESONANCE

- Trust        ████████████████████░ 95% - Institutional credibility paramount
- Authority    ██████████████████░░ 90% - Expert underwriting confidence
- Security     ███████████████████░ 95% - Protective, safeguarding presence
- Prestige     ████████████████░░░░ 80% - Premium tier positioning
- Stability    ████████████████████ 100% - Established, enduring institution

- ACCESSIBILITY STANDARDS

- WCAG 2.1 Level AA Compliance:
- Color contrast ratios exceed 7:1 for body text
- Interactive elements minimum 44×44px touch targets
- Focus indicators with 3:1 contrast ratio
- Semantic HTML with proper ARIA labels
- Screen reader optimized table structures

- IMPLEMENTATION NOTES

- Subtle background texture via radial gradient and linear patterns
- Gold accents applied sparingly to preserve prestige perception
- Shield SVG icons inline for performance and styling control
- Conservative animations respecting reduced-motion preferences
- Mobile-responsive grid maintaining institutional hierarchy

- TARGET AUDIENCE

- High-net-worth individuals, corporate risk managers, institutional clients
- seeking premium coverage with established underwriting expertise.

- COMPETITIVE POSITIONING

- Differentiation from consumer insurance through:
- Traditional serif typography vs modern sans-serif
- Conservative spacing vs aggressive call-to-actions
- Institutional imagery vs lifestyle marketing
- Data-focused tables vs emotional storytelling

- BRAND ALIGNMENT

- Evokes: Lloyd's of London, Chubb, AIG Private Client, PURE Insurance
- Avoids: Consumer direct marketing, aggressive sales tactics, trendy design

## Not synced

Built from `style-24-insurance-premium.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-interface`.
