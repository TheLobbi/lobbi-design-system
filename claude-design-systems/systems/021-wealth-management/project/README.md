Target Audience: Ultra-high-net-worth individuals, family offices, private wealth advisors, institutional investors Blend Ratio: 75% Wealth Management + 25% Art Deco Elegance Core Principles: → Timeless sophistication over trendy aesthetics → Geometric precision inspired by 1920s Art Deco → Understated luxury through material quality (not flash) → Absolute clarity in financial data presentation → Privacy and discretion through muted elegance.

**Blend:** Wealth Management 75% + Art Deco Elegance 25%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** premium, professional  
**Perfect for:** Wealth Advisors, Private Banks, Asset Management

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Wentworth Capital”, “Portfolio Overview”, “Asset Allocation”, “Geographic Exposure”.
- Buttons are short verb phrases in Title Case: “Statements”, “Contact Advisor”, “Download Report”, “View All Holdings”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `forest-green`, `champagne-gold`, `stat-change-text-2`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Forest Green (#1a3a2f)
- Psychology: Stability, growth, heritage, established wealth
- Usage: Primary backgrounds, navigation, critical CTAs
- Symbolism: Old money, generational wealth, legacy planning

- Champagne Gold (#d4af37)
- Psychology: Prestige, exclusivity, achievement
- Usage: Accents, borders, geometric patterns, highlights
- Symbolism: Refined luxury (not gaudy), Art Deco glamour

- Ivory (#fefdf8)
- Psychology: Purity, sophistication, calm
- Usage: Primary background, card surfaces, reading areas
- Symbolism: Clean slate, transparency, trust

- Charcoal (#2c2c2c)
- Psychology: Authority, seriousness, permanence
- Usage: Typography, data visualization, emphasis
- Symbolism: Gravitas, professional expertise

- Temperature: Warm Sophisticated (5/10)
- Rationale: Balanced warmth creates approachability while maintaining
- professional distance. Too warm = casual, too cool = sterile.

- Formality: Very High (9/10)
- Rationale: UHNW clients expect institutional-grade professionalism.
- Not quite 10/10 to avoid appearing unapproachable.

## Typography

- `display` — Cormorant, Georgia, serif
- `body` — Inter, -apple-system, sans-serif

Faces are hosted on Google Fonts (Cormorant, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Cormorant (Serif) - Display & Headings
- Weight Range: 300-700
- Usage: Page titles, section headers, quoted figures
- Rationale: Classic elegance, readability at large sizes, Art Deco charm
- Pairing Strategy: High contrast with Inter for hierarchical clarity

- Inter (Sans-Serif) - Data & Body
- Weight Range: 300-600
- Usage: All numerical data, body text, UI labels
- Rationale: Exceptional legibility for financial figures, modern
- professional standard, geometric letterforms echo Art Deco

- Type Scale: 1.250 (Major Third)
- Rationale: Conservative progression suitable for data-heavy interfaces
- Hierarchy: 12px → 15px → 18.75px → 23.44px → 29.3px → 36.62px

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 32px, `space-lg` 48px, `space-xl` 64px. Pad cards and sections from these steps only.

- Base Unit: 8px
- Luxurious Whitespace Strategy:
- Micro:  8px  - Icon padding, tight groupings
- Small:  16px - Related elements, card padding
- Medium: 32px - Component separation, section breathing room
- Large:  48px - Major section breaks, premium feel
- XL:     64px - Hero spacing, statement isolation

- Grid System: 12-column with generous gutters (24px)
- Rationale: Provides flexibility while maintaining stately proportions

- Max Content Width: 1400px
- Rationale: Optimal reading line length while accommodating data tables

- ART DECO GEOMETRIC LANGUAGE

- Signature Patterns:
- → Chevron motifs (upward = growth, prosperity)
- → Stepped pyramid borders (hierarchy, achievement)
- → Sunburst radiating lines (optimism, expansion)
- → Octagonal frames (stability meets dynamism)
- → Parallel vertical lines (strength, structure)

- Application Strategy:
- → Subtle: Use as texture overlays at 3-5% opacity
- → Accent: Gold border treatments on premium elements
- → Structural: Card corner treatments, divider embellishments
- → Never overwhelming: Patterns support, never dominate content

## States and motion

- Hover States: Subtle lift (2-4px translateY) + shadow enhancement
- Transitions: 200-300ms ease-out (never instant, never sluggish)
- Focus States: Gold outline 2px, offset 2px (accessibility + brand)
- Loading States: Shimmer effect in champagne gold gradient

- Click Affordances:
- → All interactive elements have visible state changes
- → Gold accent appears on hover/focus
- → Scale slightly on press (transform: scale(0.98))

- ACCESSIBILITY CONSIDERATIONS

- Color Contrast:
- Charcoal on Ivory: ~~11.2:1~~ (AAA Large Text) — **measured 13.7:1**
- Forest Green on Ivory: ~~8.4:1~~ (AAA Large Text, AA Normal) — **measured 12.2:1**
- Gold on Green: Decorative only, never text-only indicator

- Typography:
- Minimum Size: 15px for body text (generous for aging eyes)
- Line Height: 1.6 for body, 1.3 for headings
- Letter Spacing: +0.01em for all-caps labels

- Keyboard Navigation:
- Visible focus indicators (gold outline)
- Logical tab order (left-to-right, top-to-bottom)
- Skip links for dashboard navigation

- Screen Readers:
- Semantic HTML (nav, main, section, article)
- ARIA labels for icon-only buttons
- Live regions for updating financial data

Timing values: `--transition-fast` 200ms ease-out, `--transition-medium` 300ms ease-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 12.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `champagne-gold` 1.9:1, `ivory` 1.1:1, `category-tag-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Component inventory

The reference page composes these patterns from the tokens above:

- Stat Cards:
- Border: 1px champagne gold with Art Deco corner accent
- Shadow: Minimal (0 2px 8px rgba(0,0,0,0.08)) - subtle depth
- Hover: Lift effect (translateY -2px) - responsive elegance
- Icon Strategy: Geometric line icons in gold, not illustrative

- Data Tables:
- Striping: Subtle ivory/white alternation (98% opacity difference)
- Borders: Hair-thin gold horizontal rules only
- Hover: Row highlight in lightest green tint
- Typography: Tabular numbers for financial alignment

- Buttons:
- Primary: Deep green with gold border, serif labels
- Secondary: Ivory with green text, gold border
- Hover: Subtle scale (1.02) + shadow lift
- Never: Rounded corners (too casual) - prefer subtle chamfer

- Cards:
- Background: Layered ivory with subtle texture
- Border: Champagne gold, 1px, with geometric corner detail
- Padding: Generous (32px) for premium feel
- Title: Cormorant 600, charcoal, with gold underline accent

- INFORMATION HIERARCHY

- Level 1: Portfolio Value (Largest, Cormorant 700, with subtle gold accent)
- Level 2: Key Metrics (Stats cards, prominent but balanced)
- Level 3: Holdings Detail (Clear tabular layout, scannable)
- Level 4: Meta Information (Discrete labels, Inter 300)

- Visual Weight Distribution:
- 20% - Header & Navigation (establish authority)
- 30% - Key Metrics Display (immediate insights)
- 40% - Detailed Data (actionable information)
- 10% - Footer & Metadata (unobtrusive support)

## Further guidance

### Responsive Strategy

- Desktop First Approach:
- Primary Breakpoint: 1400px (max content width)
- Tablet: 768px - 1399px (2-column grid, reduced spacing)
- Mobile: < 768px (single column, preserved hierarchy)

- Data Table Responsiveness:
- Desktop: Full table with fixed headers
- Tablet: Horizontal scroll with sticky first column
- Mobile: Card-based layout with key metrics prioritized

- Typography Scaling:
- Desktop: Full scale (36px h1)
- Tablet: 90% scale (32.4px h1)
- Mobile: 80% scale (28.8px h1)

- PERFORMANCE OPTIMIZATIONS

- Font Loading: Preconnect to Google Fonts, display=swap
- CSS Strategy: Single embedded stylesheet (no external requests)
- Images: None used (geometric patterns via CSS/SVG)
- Animations: GPU-accelerated transforms only (translateY, scale)
- Critical CSS: All styles inline for first paint optimization

- BRAND PERCEPTION GOALS

- Primary Impression: "This is where serious wealth is managed"
- Secondary: "Timeless elegance, not flash"
- Tertiary: "Sophisticated tools for sophisticated investors"

- Emotional Resonance:
- ✓ Trust through visual stability
- ✓ Confidence through geometric precision
- ✓ Exclusivity through restrained luxury
- ✓ Legacy through Art Deco historical reference

- Differentiation from Competitors:
- ✗ NOT sterile minimalism (too cold)
- ✗ NOT vibrant startup energy (inappropriate)
- ✗ NOT ornate traditional banking (outdated)
- ✓ IS refined modern classicism (unique position)

- IMPLEMENTATION NOTES

- Development Complexity: Moderate
- Custom geometric SVG patterns required
- Careful attention to spacing system
- Precise color calibration

- Maintenance Requirements:
- Design system documentation essential
- Component library for consistency
- Regular accessibility audits

- Scalability:
- Pattern library easily extended
- Color system accommodates dark mode
- Typography scales to additional weights

- Browser Support:
- Modern browsers (last 2 versions)
- Graceful degradation for geometric patterns
- Fallback serif fonts (Georgia) if Cormorant unavailable

## Not synced

Built from `style-21-wealth-management.html`. No component bundle: the reference page's markup is not packaged as live components.
