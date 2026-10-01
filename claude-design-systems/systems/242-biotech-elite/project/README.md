This interface represents the convergence of cutting-edge life sciences research, venture capital sophistication, and academic institutional prestige. Every element communicates scientific rigor, innovation leadership, and investment excellence. The design draws inspiration from DNA helix structures, molecular biology visualization, laboratory environments, and the clean precision of research publications. This is where billion-dollar biotech breakthroughs meet world-class scientific talent and venture funding.

**Blend:** Life Sciences 55% + Venture Capital 30% + Research Institution 15%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** tech, premium, academic  
**Perfect for:** Biotech Firms, Life Sciences VCs, Research Networks

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “LIFE SCIENCES INNOVATION NETWORK”, “BREAKTHROUGH RESEARCH”, “CRISPR Cancer Treatment”, “CAR-T Cell Engineering”.
- Buttons are short verb phrases in Title Case: “🧬 Submit Protocol”, “📊 Save Draft”, “Clear Form”.
- Navigation uses single nouns: “Research”, “Portfolio”, “Trials”, “Funding”.
- The reference page uses emoji as inline glyphs (🧬 ⚕ 💰 📊 ⚠ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-dna-teal`, `color-off-white`, `color-investor-blue`, `color-deep-charcoal`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`badge-error-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- DNA Helix Teal (#0d9488): Life sciences innovation, genetic precision, molecular
- biology, cellular activity, research vitality, biotech sophistication, medical trust
- Innovation Green (#22c55e): Growth trajectories, living systems, cellular health,
- environmental sustainability, biotech breakthroughs, clinical success, positive outcomes
- Lab White (#fafafa): Clinical cleanliness, laboratory purity, scientific objectivity,
- sterile environments, research clarity, data integrity, institutional trust
- Investor Blue (#2563eb): Venture capital confidence, institutional investment, financial
- backing, strategic partnerships, growth funding, professional credibility
- Molecular Gray (#64748b): Neutral precision, technical accuracy, professional restraint,
- data objectivity, research seriousness, microscopy aesthetic
- Deep Charcoal (#1e293b): Foundation stability, institutional gravitas, research depth,
- scientific authority, academic seriousness

## Typography

- `display` — "Plus Jakarta Sans", system-ui, -apple-system, sans-serif
- `source-serif-pro` — "Source Serif Pro", serif

Faces are hosted on Google Fonts (Plus Jakarta Sans, Source Serif Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Source+Serif+Pro:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Plus Jakarta Sans (Headings & UI):
- Modern sans-serif for contemporary biotech feel
- Geometric clarity suggesting scientific precision
- Excellent readability for digital interfaces
- Professional without being overly corporate
- Weight variations (300-800) for rich hierarchy
- Tech-forward aesthetic matching innovation
- Clean geometry echoing molecular structures

- Source Serif Pro (Body & Publications):
- Elegant serif for research publication credibility
- Academic authority in content presentation
- Excellent for scientific paper readability
- Professional gravitas for formal content
- Heritage suggesting established institutions
- Perfect for citations and references

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 8px, `spacing-sm` 16px, `spacing-md` 20px, `spacing-lg` 40px, `spacing-xl` 80px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 12px, `radius-lg` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-biotech`, lowest first for resting cards, higher for hover and overlays.

1. Innovation Header: DNA helix gradient with research institution branding
2. Research Metrics: Clinical trial statistics and funding indicators
3. Discovery Cards: Breakthrough research presentation with molecular backgrounds
4. Clinical Data Table: Laboratory-grade results with scientific precision
5. Research Forms: Grant application and protocol submission interfaces
6. Action Buttons: Funding approval and research collaboration controls
7. Status Badges: Clinical phase indicators and approval stages
8. Institutional Footer: Regulatory compliance and research partnerships

## States and motion

- Molecular animations on hover suggesting cellular activity
- DNA helix scroll effects for scientific context
- Smooth transitions reflecting laboratory precision
- Clinical confidence in all state changes
- Subtle gradients indicating living systems
- Professional restraint in animations
- Research-appropriate interaction patterns

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 500ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-dna-teal` 3.6:1, `color-innovation-green` 2.2:1, `color-lab-white` 1.0:1, `color-gray-light` 2.5:1, `header-bg` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliance for scientific data
- 4.5:1 contrast ratio minimum for all text
- 7:1 for critical research data
- Semantic HTML for research content
- ARIA labels on scientific visualizations
- Keyboard navigation for researchers
- Focus indicators with 3px borders
- Color-blind safe data visualization
- Sufficient 44x44px touch targets
- Dyslexia-friendly font choices

## Component inventory

The reference page composes these patterns from the tokens above:

1. Innovation Header: DNA helix gradient with research institution branding
2. Research Metrics: Clinical trial statistics and funding indicators
3. Discovery Cards: Breakthrough research presentation with molecular backgrounds
4. Clinical Data Table: Laboratory-grade results with scientific precision
5. Research Forms: Grant application and protocol submission interfaces
6. Action Buttons: Funding approval and research collaboration controls
7. Status Badges: Clinical phase indicators and approval stages
8. Institutional Footer: Regulatory compliance and research partnerships

## Further guidance

### Spatial Hierarchy

- 16px base unit for digital precision
- 8px micro-spacing for dense data layouts
- 20px standard spacing for content breathing
- 40px section spacing for clear separation
- 80px major spacing for dramatic hierarchy
- 1.5 line-height for research readability
- Golden ratio in card proportions

### Emotional Temperature

- Clinical Premium (4/10):
- Scientifically objective yet human
- Professional with warmth of healing
- Precise but not cold
- Clinical confidence without sterility
- Innovation excitement tempered by rigor
- Optimistic about medical breakthroughs
- Serious about patient outcomes

### Formality Level

- High Professional (9/10):
- Academic institutional standards
- Research publication formality
- Venture capital presentation polish
- Scientific protocol adherence
- Regulatory compliance communication
- Peer-review quality expectations
- Professional conference aesthetic

### Performance Optimization

- CSS gradients instead of images
- Hardware-accelerated DNA animations
- Efficient pseudo-element patterns
- Minimal repaints for data updates
- Optimized Google Fonts loading
- CSS custom properties for theming
- Will-change for smooth animations
- Layer promotion for scrolling

### Brand Alignment

- Establishes life sciences leadership through:
- Cutting-edge research visualization
- Institutional academic credibility
- Venture capital sophistication
- Scientific precision standards
- Innovation excitement
- Clinical excellence signals

### Use Cases

- Biotech venture capital platforms
- Pharmaceutical research portals
- Clinical trial management systems
- Life sciences investment networks
- Academic research collaboration
- Drug discovery platforms
- Genomics data visualization
- Medical device innovation hubs

### Competitive Differentiation

- Unlike standard biotech interfaces, this design:
- Balances scientific rigor with investment appeal
- Visualizes molecular biology beautifully
- Communicates both research and ROI
- Signals academic authority and VC sophistication
- Maintains clinical precision
- Projects innovation leadership

### Scalability

- Component system supports:
- Multi-therapy area displays
- Clinical phase tracking
- Portfolio company management
- Research protocol variations
- Regulatory framework differences
- White-label customization

## Not synced

Built from `style-242-biotech-elite.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-dna`, `--gradient-research`, `--gradient-clinical`, `--gradient-helix`.
