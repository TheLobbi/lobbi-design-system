Big Four Accounting Firms (Deloitte, PwC, EY, KPMG).

**Blend:** Accounting Premium 80% + Conservative Trust 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** professional  
**Perfect for:** Accounting Firms, CPA Services, Financial Auditing

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Accounting Premium”, “Audit Progress”, “Compliance Checklist”, “Quarterly Financial Summary”.
- Buttons are short verb phrases in Title Case: “Export Report”, “Settings”, “Generate Report”.
- Navigation uses single nouns: “Overview”, “Financial Reports”, “Compliance”, “Audit Trail”, “Analytics”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-green-primary`, `color-green-light`, `color-navy-dark`, `color-amber`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-green-success`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Georgia, "Playfair Display", Garamond, "Times New Roman", serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

- Set titles in `display` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-1` 8px, `space-2` 16px, `space-3` 24px, `space-4` 32px, `space-5` 40px, `space-6` 48px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 6px, `radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

1. FINANCIAL SUMMARY CARDS
- ├─ Clean metric presentation
- ├─ Percentage change indicators
- ├─ Conservative borders
- Structured data hierarchy

2. AUDIT STATUS INDICATORS
- ├─ Progress tracking
- ├─ Compliance checkmarks
- ├─ Status badges
- Timeline visualization

3. COMPLIANCE CHECKLISTS
- ├─ Checkbox interactions
- ├─ Completion percentages
- ├─ Priority markers
- Regulatory references

4. QUARTERLY REPORT TABLES
- ├─ Tabular financial data
- ├─ Sortable columns
- ├─ Row striping
- Precise alignment

## States and motion

- ├─ Hover: Background tint changes, border emphasis
- ├─ Active: Slight scale (0.98), no bounce
- ├─ Focus: 2px outline, accessibility-first
- Transitions: 150ms ease, professional tempo

Timing values: `--transition-fast` 150ms ease, `--transition-base` 200ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ├─ WCAG AAA contrast ratios (7:1 for body text)
- ├─ Semantic HTML structure
- ├─ ARIA labels for status indicators
- ├─ Keyboard navigation support
- ├─ Screen reader optimized tables
- Focus indicators on all interactive elements

## Component inventory

The reference page composes these patterns from the tokens above:

1. FINANCIAL SUMMARY CARDS
- ├─ Clean metric presentation
- ├─ Percentage change indicators
- ├─ Conservative borders
- Structured data hierarchy

2. AUDIT STATUS INDICATORS
- ├─ Progress tracking
- ├─ Compliance checkmarks
- ├─ Status badges
- Timeline visualization

3. COMPLIANCE CHECKLISTS
- ├─ Checkbox interactions
- ├─ Completion percentages
- ├─ Priority markers
- Regulatory references

4. QUARTERLY REPORT TABLES
- ├─ Tabular financial data
- ├─ Sortable columns
- ├─ Row striping
- Precise alignment

## Further guidance

### Primary Palette

- ├─ Accounting Green (#166534): Authority, growth, financial stability
- ├─ Navy (#1e3a5f): Trust, corporate professionalism, depth
- ├─ Warm White (#fafaf9): Clean backgrounds, spacious breathing room
- Charcoal (#27272a): Text hierarchy, structured information

### Supporting Tones

- ├─ Success Green (#15803d): Positive metrics, profitable indicators
- ├─ Alert Amber (#d97706): Attention items, pending reviews
- ├─ Neutral Gray (#71717a): Secondary information, metadata
- Soft Gray (#f4f4f5): Card backgrounds, subtle separation

- TYPOGRAPHY HIERARCHY (Formality: 9/10):

### Headings

- Serif (Georgia, "Playfair Display", Garamond)
- ├─ Purpose: Authoritative, established, prestigious
- ├─ H1: 32px/40px, weight 600, letter-spacing -0.02em
- ├─ H2: 24px/32px, weight 600, conservative spacing
- H3: 18px/28px, weight 600, section headers

### Body

- Sans-serif (Inter, -apple-system, "Segoe UI")
- ├─ Purpose: Readable, modern, efficient information consumption
- ├─ Base: 15px/24px, weight 400, optimal readability
- ├─ Labels: 13px/20px, weight 500, uppercase tracking
- Data: Tabular nums, monospace for financial figures

- SPACING SYSTEM (Ledger-like Organization):

- Conservative Grid: 8px base unit
- ├─ Micro: 8px (tight components)
- ├─ Small: 16px (related elements)
- ├─ Medium: 24px (section spacing)
- ├─ Large: 32px (major divisions)
- XLarge: 48px (page sections)

### Visual Language

- ├─ Borders: 1px solid, subtle dividers, structured containment
- ├─ Shadows: Minimal (0 1px 3px), conservative elevation
- ├─ Radius: 6px (professional, not playful)
- ├─ Icons: Line-based, 20px, consistent stroke weight
- Hover States: Subtle background shifts, no aggressive transforms

### Brand Alignment

- This design establishes credibility through:
- ├─ Precision: Exact alignment, consistent spacing
- ├─ Authority: Serif headings, structured layouts
- ├─ Trust: Conservative color palette, proven patterns
- ├─ Professionalism: Clean information hierarchy
- Excellence: Attention to typographic detail

### Target Audience

- CFOs, Controllers, Audit Partners, Finance Directors

### Emotional Response

- Confident, Secure, Professional, Trustworthy

## Not synced

Built from `style-32-accounting-premium.html`. No component bundle: the reference page's markup is not packaged as live components.
