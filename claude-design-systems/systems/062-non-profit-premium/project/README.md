Institutional Trust Meets Human Impact.

**Blend:** Non-Profit Premium 80% + Impact Storytelling 20%  
**Temperature:** 7/10 (warm) · **Formality:** 8/10 · **Tags:** professional  
**Perfect for:** Nonprofits, Foundations, Social Impact Orgs

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Global Impact Foundation”, “Building a More Equitable Future”, “Our Impact in 2024”, “Flagship Programs”.
- Buttons are short verb phrases in Title Case: “Donate Now”.
- Navigation uses single nouns: “Programs”, “Impact”, “Grants”, “About”, “Donate Now”.
- The reference page uses emoji as inline glyphs (🌍 👥 💰 🎓 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `trust-blue`, `warm-white`, `impact-green`, `earth-brown`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Trust Blue (#1d4ed8) - PRIMARY
- → Institutional credibility, reliability, global perspective
- → Used for: Primary actions, headers, data visualization
- → Conveys: Professionalism, stability, trustworthiness

- Warm White (#fefce8) - FOUNDATION
- → Approachable warmth, openness, optimism
- → Used for: Backgrounds, cards, content containers
- → Conveys: Transparency, accessibility, hope

- Impact Green (#16a34a) - SUCCESS/GROWTH
- → Positive outcomes, sustainability, growth metrics
- → Used for: Success states, impact metrics, progress indicators
- → Conveys: Environmental consciousness, measurable impact

- Earth Brown (#78350f) - GROUNDING
- → Substance, foundation, long-term commitment
- → Used for: Accents, secondary text, grounding elements
- → Conveys: Stability, heritage, endurance

## Typography

- `display` — Merriweather, Georgia, serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Merriweather, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Inter:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

### Type rationale

- Merriweather (Serif) - Headings & Emphasis
- → Classic, authoritative, readable serif
- → Weights: 300 (light), 400 (regular), 700 (bold), 900 (black)
- → Purpose: Institutional credibility, gravitas, tradition
- → Accessibility: High x-height, generous letter spacing

- Inter (Sans-Serif) - Body & UI
- → Clean, modern, highly legible humanist sans
- → Weights: 300-600
- → Purpose: Clarity, readability, contemporary feel
- → Accessibility: Optimized for screen reading

- Type Scale (Modular):
- Display: 3rem (48px) - Hero statements
- H1: 2.25rem (36px) - Page titles
- H2: 1.875rem (30px) - Section headers
- H3: 1.5rem (24px) - Card titles
- Body: 1rem (16px) - Content
- Caption: 0.875rem (14px) - Meta information

- SPACING SYSTEM (Open & Approachable)

- Base Unit: 8px (0.5rem)

- Vertical Rhythm:
- Section spacing: 64px (8 units) - Generous breathing room
- Card spacing: 24px (3 units) - Clear visual separation
- Element spacing: 16px (2 units) - Comfortable reading
- Inline spacing: 8px (1 unit) - Tight relationships

- Container Strategy:
- Max width: 1280px - Optimal reading, not overwhelming
- Side padding: 48px desktop / 24px mobile - Generous margins
- Card padding: 32px - Premium, spacious feel

- Philosophy: "Give impact room to breathe"
- → Whitespace as luxury and clarity
- → Never cramped or rushed
- → Focus on individual stories and metrics

## Spacing, shape and elevation

- Spacing steps: `space-1` 0.5rem, `space-2` 1rem, `space-3` 1.5rem, `space-4` 2rem, `space-6` 3rem, `space-8` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.5rem, `radius-md` 0.75rem, `radius-lg` 1rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Blend Ratio: 80% Non-Profit Premium / 20% Impact Storytelling

## States and motion

- Animation Philosophy: Confident and Purposeful
- Transitions: 200-300ms (swift but noticeable)
- Easing: ease-in-out (natural, organic)
- Hover states: Subtle elevation, color shifts
- No frivolous motion (respect user attention)

- Accessibility Principles:
- WCAG 2.1 AA minimum contrast ratios
- Focus states: 2px solid outline
- Keyboard navigation: Full support
- Screen reader: Semantic HTML, ARIA labels
- Reduced motion: Respect prefers-reduced-motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 350ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `impact-green` 3.2:1, `gray-300` 1.4:1, `category-tag-bg` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Component inventory

The reference page composes these patterns from the tokens above:

- Impact Metrics Cards:
- Large, bold numbers (trust through transparency)
- Contextual icons (visual anchoring)
- Trend indicators (progress storytelling)
- Subtle shadows (premium depth)
- Hover states (interactive exploration)

- Program Cards:
- Image-led storytelling (human connection)
- Clear categorization (easy navigation)
- Impact summaries (outcome focus)
- Call-to-action clarity (conversion without aggression)
- Status indicators (transparency)

- Grantee Stories:
- Testimonial format (authentic voices)
- Location context (global reach)
- Impact statistics (measurable outcomes)
- Visual hierarchy (easy scanning)

- Data Tables:
- Clean, scannable rows (information clarity)
- Sortable columns (user empowerment)
- Status badges (quick assessment)
- Hover highlighting (interactive feedback)
- Generous padding (premium feel)

## Further guidance

### Temperature Calibration

- (Warm Compassionate)
- Warm color palette (cream backgrounds, earth tones)
- Rounded corners (8px standard, 12px cards)
- Personal language ("Our Impact", "Community")
- Human imagery (grantees, beneficiaries)
- Approachable spacing (never cramped)
- Gentle shadows (soft, not harsh)

- Balance: Professional authority + Human warmth

### Formality Level

- (High Institutional)
- Structured layouts (grid systems, alignment)
- Formal typography (serif headings)
- Professional color palette (blues, earth tones)
- Data-driven content (metrics, tables)
- Institutional language ("Foundation", "Programs")
- Premium materials (subtle gradients, depth)

- Balance: Credibility without coldness

### Design Trade-Offs & Decisions

1. Serif vs. Sans-Serif Headings
- Decision: Serif (Merriweather)
- Rationale: Institutional credibility, traditional philanthropy
- Trade-off: Slightly less modern, but more trustworthy

2. Color Saturation
- Decision: Muted, sophisticated palette
- Rationale: Professional, not playful; serious mission
- Trade-off: Less energetic, but more credible

3. Whitespace Generosity
- Decision: Very generous (64px section spacing)
- Rationale: Premium feel, focus on quality over quantity
- Trade-off: Less content above fold, but better engagement

4. Image Treatment
- Decision: Full-color, human-focused photography
- Rationale: Emotional connection, impact storytelling
- Trade-off: Performance considerations, but worth it for connection

5. Data Visualization
- Decision: Simple, clear metrics over complex charts
- Rationale: Transparency, accessibility, trust
- Trade-off: Less analytical depth, but clearer communication

### Responsive Strategy

- Mobile-First Foundation:
- Base: 320px minimum
- Tablet: 768px breakpoint
- Desktop: 1024px breakpoint
- Wide: 1280px max-width

- Adaptations:
- Stats grid: 1 col mobile → 2 col tablet → 4 col desktop
- Program cards: 1 col mobile → 2 col tablet → 3 col desktop
- Navigation: Hamburger mobile → Full nav desktop
- Typography: Fluid scaling (clamp functions)
- Spacing: Proportional reduction on mobile

- BRAND ALIGNMENT

- Reference Organizations:
- Bill & Melinda Gates Foundation (global scale, data-driven)
- Ford Foundation (institutional heritage, social justice)
- Open Society Foundations (transparency, progressive)
- MacArthur Foundation (innovation, impact)

- Shared Characteristics:
- Professional, credible visual language
- Data transparency and metric focus
- Human stories integrated with numbers
- Long-term commitment messaging
- Global perspective with local impact

- PERFORMANCE CONSIDERATIONS

- Font loading: Preconnect to Google Fonts
- Image optimization: Lazy loading, responsive srcsets
- CSS: Single embedded stylesheet (critical path)
- JavaScript: Minimal, progressive enhancement
- Accessibility: Semantic HTML reduces script dependency

### Target Metrics

- Lighthouse Performance: >90
- Accessibility: 100
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

- IMPLEMENTATION NOTES

- This design demonstrates:
- ✓ Institutional credibility through professional design language
- ✓ Warmth and approachability through color and spacing
- ✓ Impact storytelling through metrics and narratives
- ✓ Accessibility as core requirement, not addition
- ✓ Scalable component system for growing organizations
- ✓ Data transparency building donor trust
- ✓ Mission-driven aesthetics supporting organizational values

## Not synced

Built from `style-62-nonprofit-premium.html`. No component bundle: the reference page's markup is not packaged as live components.
