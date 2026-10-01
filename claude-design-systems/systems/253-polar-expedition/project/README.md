This interface captures the crystalline purity of polar exploration merged with scientific rigor and elite adventure. Drawing inspiration from aurora borealis phenomena, ice crystal formations, and the stark beauty of Arctic landscapes, the design balances extreme environmental conditions with human achievement. Every element reflects the precision required for polar research—from navigation instruments to expedition logs—while maintaining the adventurous spirit that drives explorers to Earth's most remote regions. The interface embodies both the cold majesty of polar environments and the warm camaraderie of expedition teams.

**Blend:** Arctic Exploration 55% + Scientific Research 30% + Adventure Elite 15%  
**Temperature:** 1/10 (cool) · **Formality:** 7/10 · **Tags:** creative, association  
**Perfect for:** Polar Expeditions, Arctic Research, Exploration Societies

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Arctic Research Dashboard”, “2025 Arctic Season Timeline”, “Active Expedition Registry”, “Field Research Log Entry”.
- Buttons are short verb phrases in Title Case: “Launch Mission”, “🔬 Submit Research Log”, “💾 Save Draft”, “🗑️ Clear Form”.
- Navigation uses single nouns: “Expeditions”, “Research”, “Team”, “Data”.
- The reference page uses emoji as inline glyphs (❄ 🧊 🌌 📍 🔬 🔥); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `aurora-cyan`, `aurora-cyan-dark`, `ice-white`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Aurora Cyan (#22d3ee): Northern lights magic, scientific discovery, celestial
- wonder, electromagnetic phenomena, hope in darkness, navigation guidance,
- Arctic sky brilliance, 7-month night illumination

- Ice White (#f0fdfa): Glacial purity, pristine snow, research clarity, Arctic
- daylight, clean data presentation, crystalline structure, untouched wilderness,
- laboratory sterility, safe haven whiteness

- Expedition Orange (#f97316): Safety equipment, emergency visibility, survival
- gear, tent fabric, rescue signals, high-contrast marking, human presence in
- white landscape, warmth against cold, urgent attention

- Deep Arctic Navy (#1e3a5f): Ocean depths under ice, polar night sky, extreme
- cold professionalism, research vessel hulls, serious expedition planning,
- deep-water research, authority and competence, midnight sun horizon

- Frost Gray (#e5e7eb): Ice formations, cloud cover, instrument casings,
- data neutrality, scientific objectivity, equipment metal, weathered surfaces

- Snow Shadow Blue (#bae6fd): Ice shadows, glacier crevasses, deep ice color,
- crystal internal reflection, frozen water clarity, secondary highlights

## Typography

- `display` — "Fjalla One", "Arial Narrow", sans-serif
- `body` — "Open Sans", -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Fjalla One, Open Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Open+Sans:wght@300;400;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Fjalla One (Primary Headers):
- Condensed Nordic strength perfect for expedition headers
- Bold visibility against white backgrounds (Arctic whiteout legibility)
- Geometric precision echoing scientific instruments
- Scandinavian design heritage (birthplace of polar exploration)
- Strong vertical emphasis suggesting ice formations
- Excellent for coordinates, measurements, expedition titles
- Creates immediate visual hierarchy in data-heavy interfaces

- Open Sans (Body & Data):
- Superior legibility for long research logs and field notes
- Clean, neutral character supporting scientific objectivity
- Excellent number rendering for coordinates and measurements
- Wide range of weights for data hierarchy
- Humanist warmth balancing clinical research data
- Professional without being sterile
- Google Fonts optimization for global research collaboration

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

1. Header: Aurora-inspired gradient navigation with expedition branding
2. Expedition Stats: Ice crystal card designs with aurora accents
3. Research Timeline: Horizontal expedition progress tracker
4. Coordinate Display: Latitude/longitude precision displays
5. Data Table: Scientific data presentation with alternating ice tones
6. Field Form: Research log entry with expedition-specific fields
7. Action Buttons: High-visibility expedition orange CTAs
8. Status Badges: Weather condition and expedition status indicators
9. Footer: International research collaboration links

## States and motion

- Aurora glow effects on hover (cyan luminescence)
- Ice crystal transitions (smooth, cold, precise)
- Expedition orange focus states for visibility in harsh conditions
- Frosted glass effects for modal overlays
- Coordinate display animations
- Weather data real-time updates
- Temperature gradient visualizations
- Aurora forecast animations

Timing values: `--transition-fast` 200ms ease, `--transition-base` 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `aurora-cyan-dark` 3.4:1, `timeline-item-bg` 3.5:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `aurora-cyan` 1.7:1, `ice-white` 1.0:1, `snow-shadow` 1.2:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant (minimum 4.5:1 text contrast)
- Aurora cyan (#22d3ee) passes AA on dark backgrounds
- Expedition orange (#f97316) high visibility for critical actions
- Navy backgrounds provide strong contrast for white/cyan text
- Touch targets minimum 44px (winter glove-friendly)
- Focus indicators use expedition orange (emergency visibility)
- No reliance on color alone (icons + text always)
- Screen reader labels for coordinate displays
- Keyboard navigation for frozen equipment conditions
- High contrast mode for bright snow glare conditions
- Reduced motion support for motion sickness in extreme conditions

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Aurora-inspired gradient navigation with expedition branding
2. Expedition Stats: Ice crystal card designs with aurora accents
3. Research Timeline: Horizontal expedition progress tracker
4. Coordinate Display: Latitude/longitude precision displays
5. Data Table: Scientific data presentation with alternating ice tones
6. Field Form: Research log entry with expedition-specific fields
7. Action Buttons: High-visibility expedition orange CTAs
8. Status Badges: Weather condition and expedition status indicators
9. Footer: International research collaboration links

## Further guidance

### Spatial Hierarchy

- 8px base unit reflecting metric scientific precision
- Generous whitespace echoing vast Arctic landscapes
- Card-based layout isolating data like research stations
- Clear visual grouping for expedition vs. research content
- Breathing room preventing cognitive overload in extreme conditions
- Grid system based on polar coordinate mathematics

### Emotional Temperature

- Extreme Cold (1/10):
- Cyan and ice white dominate (sub-zero color palette)
- Cool blues evoke Arctic environment
- Orange provides only spark of warmth (survival equipment)
- Navy depths suggest polar ocean temperatures
- Overall: Crystalline, pristine, scientifically cool
- Psychological: Demands focus, reduces emotional noise
- Environmental accuracy: True to polar conditions

### Formality Level

- High Scientific Rigor (7/10):
- Serious scientific research mission
- Professional expedition planning required
- Formal data presentation standards
- Balanced with adventure community warmth
- International research collaboration protocols
- Suitable for academic institutions and elite explorers
- Safety-critical communication (no room for ambiguity)

### Performance Optimization

- Minimal dependencies for remote research station bandwidth
- Efficient CSS for low-power expedition computers
- Fast font loading critical for satellite connections
- Optimized for offline-first expedition scenarios
- Progressive enhancement for varying connection quality
- Critical data loads first (weather, coordinates, safety)
- Graceful degradation for older research equipment

### Brand Alignment

- Establishes polar expedition authority through:
- Authentic Arctic color palette from real polar photography
- Scientific data visualization standards
- Expedition planning interface conventions
- Research publication aesthetics
- International polar research community recognition
- Heritage connection to legendary polar explorers
- Modern technology meets traditional exploration

### Use Cases

- Arctic research stations
- Antarctic scientific bases
- Polar expedition planning organizations
- Climate research institutions
- Glaciology research portals
- Oceanographic polar studies
- Wildlife conservation in polar regions
- Polar tourism adventure companies
- Museum polar exploration exhibits
- Educational Arctic science programs

### Competitive Differentiation

- Unlike generic research interfaces, this design:
- Authentically captures polar environment aesthetics
- Balances scientific rigor with adventure spirit
- Uses aurora-inspired color theory (not generic blues)
- Incorporates actual expedition planning workflows
- Reflects real polar research station experiences
- Honors polar exploration heritage and modern science

### Scalability

- Component system supports:
- Multiple expedition types (Arctic, Antarctic, Alpine)
- Various research disciplines (climate, biology, geology)
- International research collaborations
- Public outreach and education modes
- Real-time data integration from remote sensors
- Historical expedition archive displays
- Modular dashboard for custom research needs

## Not synced

Built from `style-253-polar-expedition.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-expedition`, `--font-research`.
