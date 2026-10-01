This interface embodies the intellectual rigor and cutting-edge innovation of premier AI research laboratories (DeepMind, OpenAI, Anthropic). The design establishes trust through academic credibility while maintaining accessibility for technical audiences.

**Blend:** AI Research 75% + Scientific Publication 25%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** tech, academic  
**Perfect for:** AI Research Labs, Tech Research, ML Companies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Neural Intelligence Lab”, “Model Performance Overview”, “Recent Publications”, “Sparse Attention Mechanisms for Efficient Large Language Models”.
- Buttons are short verb phrases in Title Case: “Read Paper”, “View Code”, “Read Paper”, “Dataset”.
- Navigation uses single nouns: “Research”, “Models”, “Benchmarks”, “Publications”, “Team”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-deep-purple`, `color-neural-blue`, `color-purple-light`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `change-negative-text`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Purple (#4c1d95): Intellectual depth, innovation, premium research
- Neural Blue (#3b82f6): Trust, intelligence, computational precision
- White (#ffffff): Clinical clarity, scientific objectivity
- Soft Gray (#f3f4f6): Subtle backgrounds, reduced cognitive load

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

Faces are hosted on Google Fonts (Inter, Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">
```

The reference page names Roboto without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Inter font family provides:
- Technical precision with excellent readability at all sizes
- Modern geometric forms suggesting computational accuracy
- Wide character set supporting mathematical notation
- Variable weights establishing clear information hierarchy

## Spacing, shape and elevation

- Spacing steps: `spacing-1` 0.5rem, `spacing-2` 1rem, `spacing-3` 1.5rem, `spacing-4` 2rem, `spacing-6` 3rem, `spacing-8` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 4px, `border-radius-md` 8px, `border-radius-lg` 12px, `border-radius-xl` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

1. Header: Institutional branding with research navigation
2. Metric Cards: Model performance indicators with trend analysis
3. Research Cards: Paper summaries with citation metadata
4. Benchmark Table: Comparative performance data across models
5. Footer: Academic links and institutional information

## States and motion

- Subtle hover states preserving professional demeanor
- Smooth transitions suggesting computational precision
- Accessible focus indicators meeting WCAG 2.1 AA standards
- Card-based organization supporting modular content

Timing values: `--transition-base` all 0.2s ease, `--transition-slow` all 0.3s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-neural-blue` 3.3:1, `change-negative-text` 3.4:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-white` 1.1:1, `color-medium-gray` 2.3:1, `color-success` 2.3:1, `color-warning` 2.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant contrast ratios (4.5:1 minimum)
- Semantic HTML structure supporting screen readers
- Keyboard navigation throughout interactive elements
- Focus indicators for all actionable components
- Sufficient touch targets (44x44px minimum)

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Institutional branding with research navigation
2. Metric Cards: Model performance indicators with trend analysis
3. Research Cards: Paper summaries with citation metadata
4. Benchmark Table: Comparative performance data across models
5. Footer: Academic links and institutional information

## Further guidance

### Spatial Hierarchy

- 24px base spacing unit (research paper line height)
- 16px grid system aligning with academic publishing standards
- Generous whitespace reducing visual complexity
- Clear sectioning supporting scannable content

### Emotional Temperature

- Cool Intellectual (3/10):
- Subdued color palette minimizing emotional reaction
- Data-first presentation supporting objective analysis
- Academic formality establishing credibility
- Restrained visual flourishes prioritizing content

### Formality Level

- High Academic (8/10):
- Citation-style metadata and attribution
- Formal language patterns and terminology
- Institutional branding and credibility markers
- Professional distance appropriate for research context

### Performance Optimization

- System font stack with Inter as primary typeface
- Embedded CSS eliminating additional HTTP requests
- CSS Grid for efficient layout calculations
- Minimal DOM complexity supporting fast rendering

### Brand Alignment

- Establishes credibility through:
- Academic visual language signaling research rigor
- Data transparency building trust with technical audiences
- Institutional design patterns suggesting stability
- Scientific objectivity over marketing persuasion

### Use Cases

- AI model benchmarking dashboards
- Research laboratory websites
- Technical documentation portals
- Academic conference platforms
- Machine learning competition leaderboards

### Competitive Differentiation

- Unlike consumer AI products, this design prioritizes:
- Intellectual credibility over emotional engagement
- Data transparency over simplified messaging
- Academic standards over marketing conventions
- Technical precision over broad accessibility

### Scalability

- Component system supports:
- Additional metric cards without layout disruption
- Dynamic content loading maintaining visual consistency
- Responsive breakpoints preserving information hierarchy
- Theme variations for different research domains

## Not synced

Built from `style-43-ai-research.html`. No component bundle: the reference page's markup is not packaged as live components.
