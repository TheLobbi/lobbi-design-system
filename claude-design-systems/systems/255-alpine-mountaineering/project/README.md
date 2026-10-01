This interface captures the precision and majesty of Alpine mountaineering—where Swiss watch accuracy meets the raw power of mountain environments. Drawing from the heritage of legendary Alpine peaks (Matterhorn, Eiger, Mont Blanc), technical climbing equipment aesthetics, and elite athletic performance, the design balances cold altitude environments with the warmth of mountaineering camaraderie. Every element reflects the life-or-death precision required at altitude: from route planning to weather monitoring, from rope systems to emergency protocols. The interface embodies both the stark beauty of Alpine landscapes and the meticulous preparation that separates successful ascents from tragedy. This is where Swiss engineering meets vertical adventure.

**Blend:** Mountain Climbing 55% + Swiss Precision 30% + Elite Athletics 15%  
**Temperature:** 2/10 (cool) · **Formality:** 7/10 · **Tags:** association, hospitality  
**Perfect for:** Mountaineering Federations, Alpine Clubs, Summit Societies

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Summit Operations Dashboard”, “Route Elevation Profile: Matterhorn (Hörnli Ridge)”, “Active Route Registry”, “Register New Expedition”.
- Buttons are short verb phrases in Title Case: “Plan Ascent”, “🏔️ Register Expedition”, “💾 Save Draft”, “🗑️ Clear Form”.
- Navigation uses single nouns: “Expeditions”, “Routes”, “Weather”, “Safety”.
- The reference page uses emoji as inline glyphs (⛰ 🏔 🌡 ⚠ 👥 ☀); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `summit-white`, `alpine-blue`, `alpine-blue-dark`, `safety-orange`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Summit White (#f8fafc): Snow-covered peaks, high-altitude purity, glacial
- ice, alpine clarity, clean technical precision, Swiss minimalism, safety
- visibility, pristine mountain environments, fresh snowfall, clean-slate
- preparation (primary background color conveying altitude)

- Rock Granite (#57534e): Ancient mountain stone, solid foundations, climbing
- walls, technical precision, geological permanence, Swiss stability, neutral
- professionalism, equipment durability, unshakable reliability, mountain core
- strength (primary text and structural color)

- Alpine Blue (#3b82f6): High-altitude sky, crisp mountain air, clear weather
- windows, safe climbing days, route marking, technical information, trust
- and reliability, professional standards, certified equipment, international
- mountain rescue (primary action and accent color)

- Safety Orange (#f97316): Emergency equipment, rescue visibility, avalanche
- beacons, safety ropes, warning systems, danger zones, critical alerts, high
- visibility markers, survival gear, urgency without panic (safety-critical
- interface elements)

- Ice Gray (#e2e8f0): Glacier surfaces, morning frost, metal equipment, neutral
- data backgrounds, technical displays, weathered rock, steel carabiners,
- instrument casings (secondary backgrounds and subtle accents)

- Pine Green (#065f46): Alpine forests, base camp vegetation, safety zones below
- tree line, environmental context, natural wayfinding, sustainable practices
- (tertiary accent for environmental data)

## Typography

- `display` — Montserrat, -apple-system, BlinkMacSystemFont, sans-serif
- `body` — "Source Sans Pro", system-ui, sans-serif

Faces are hosted on Google Fonts (Montserrat, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&family=Source+Sans+Pro:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`, `button`), always with the letter-spacing given.

### Type rationale

- Montserrat (Primary Headers):
- Swiss-inspired geometric precision (named after Montserrat mountain)
- Strong vertical emphasis suggesting mountain peaks and routes
- Excellent weight range (300-900) for clear hierarchy
- Bold stability at large sizes (summit achievements, peak names)
- Clean, modern aesthetic matching technical equipment
- Named after actual mountain (authentic mountaineering connection)
- Geometric letterforms suggesting technical instruments
- Professional without being cold—Swiss precision with human touch

- Source Sans Pro (Body & Technical Data):
- Adobe's open-source standard for technical documentation
- Superior legibility for dense expedition data and route descriptions
- Excellent number rendering for elevations and coordinates
- Wide weight range supporting complex data hierarchies
- Designed for UI/UX applications (perfect for dashboards)
- Clean, neutral, highly functional
- Professional clarity for safety-critical information
- Humanist warmth balancing technical precision

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-peak`, lowest first for resting cards, higher for hover and overlays.

1. Header: Mountain range silhouette navigation with peak identification
2. Expedition Stats: Elevation gain cards with altimeter styling
3. Peak Profile: Vertical elevation diagram with route overlay
4. Route Conditions: Current mountain weather and safety status
5. Climber Registry: Team member skills and certification tracking
6. Expedition Table: Route difficulty grades and completion status
7. Ascent Planning Form: New expedition registration and planning
8. Action Buttons: Emergency visibility (safety orange CTAs)
9. Status Badges: Weather conditions and route status indicators
10. Footer: International mountaineering federation links

## States and motion

- Alpine blue glow on hover (clear sky conditions)
- Crisp transitions (precise mechanical movements)
- Safety orange focus states (emergency visibility)
- Elevation profile animations
- Weather data real-time updates
- Route difficulty grade visualizations
- Barometric pressure trend displays
- Avalanche risk level animations

Timing values: `--transition-fast` 180ms ease, `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA compliant (minimum 4.5:1 text contrast)
- Granite gray (#57534e) on summit white passes AA easily
- Alpine blue (#3b82f6) optimized for readability on white
- Safety orange high visibility for critical actions and warnings
- Touch targets minimum 48px (gloved hands at altitude)
- Focus indicators use safety orange (emergency visibility standards)
- Color never sole indicator (icons + text + patterns for all warnings)
- Screen reader labels for all elevation and technical data
- Keyboard navigation essential (frozen touchscreen backup)
- High contrast mode for bright snow glare (alpine conditions)
- Reduced motion support (altitude sickness can cause nausea)

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Mountain range silhouette navigation with peak identification
2. Expedition Stats: Elevation gain cards with altimeter styling
3. Peak Profile: Vertical elevation diagram with route overlay
4. Route Conditions: Current mountain weather and safety status
5. Climber Registry: Team member skills and certification tracking
6. Expedition Table: Route difficulty grades and completion status
7. Ascent Planning Form: New expedition registration and planning
8. Action Buttons: Emergency visibility (safety orange CTAs)
9. Status Badges: Weather conditions and route status indicators
10. Footer: International mountaineering federation links

## Further guidance

### Spatial Hierarchy

- 8px base unit (metric precision, Swiss standards)
- Generous whitespace echoing open mountain landscapes
- Vertical emphasis in layouts (ascending page structure)
- Card-based isolation (each component is a "station" on route)
- Clean geometric grids (topographic map precision)
- Clear elevation-based visual hierarchy (summit at top)

### Emotional Temperature

- Cold Altitude (2/10):
- Summit white and ice gray dominate (high-altitude color palette)
- Alpine blue provides crisp coolness (not warmth)
- Safety orange only spark of warmth (emergency equipment)
- Granite gray suggests cold stone surfaces
- Overall: Clean, precise, alpine environment accuracy
- Psychological: Demands focus, reduces emotional noise, heightens alertness
- Environmental: True to 8,000m+ altitude conditions
- Appropriate for life-or-death decision-making environments

### Formality Level

- High Professional Standards (7/10):
- Serious safety protocols (mountaineering is inherently high-risk)
- Professional certification requirements (UIAA, IFMGA standards)
- Formal expedition planning and documentation
- Balanced with team camaraderie and adventure community
- International federation communication protocols
- Suitable for professional guides and elite mountaineers
- Safety-critical communication (zero ambiguity tolerance)

### Performance Optimization

- Minimal dependencies for remote mountain refuge WiFi
- Efficient CSS for low-power expedition devices
- Fast font loading critical for satellite connections
- Offline-first PWA architecture for no-signal environments
- Progressive enhancement for varying connection quality
- Critical safety data loads first (weather, avalanche risk)
- Graceful degradation for older mountain refuge computers
- Caching strategy for multi-day expeditions

### Brand Alignment

- Establishes Alpine mountaineering authority through:
- Authentic Alpine color palette (summit white, rock granite, alpine blue)
- Swiss precision aesthetics and typography
- Technical mountaineering data visualization standards
- International climbing grade systems (UIAA, French, YDS)
- Elevation profile and topographic conventions
- Heritage connection to legendary Alpine first ascents
- Professional guide and federation credibility

### Use Cases

- International mountaineering federations (UIAA, AAC, BMC)
- Professional mountain guide associations (IFMGA)
- Alpine club membership platforms (Swiss, Austrian, German)
- Expedition planning and logistics services
- Mountain rescue coordination centers
- Climbing school and certification programs
- Alpine hut reservation systems
- Weather and avalanche forecasting portals
- Peak permit and registration systems
- Mountaineering competition platforms

### Competitive Differentiation

- Unlike generic outdoor recreation sites, this design:
- Authentically captures Alpine environment (not generic mountains)
- Balances Swiss precision with adventure spirit
- Uses real mountaineering grade systems and conventions
- Incorporates actual expedition planning workflows
- Reflects life-or-death decision-making seriousness
- Honors Alpine climbing heritage (Matterhorn, Eiger nordwand)

### Scalability

- Component system supports:
- Multiple mountain ranges (Alps, Himalayas, Andes, Rockies)
- Various climbing disciplines (technical, alpine, ice, mixed)
- International grade system conversions
- Multi-language support (critical for Alpine regions)
- Real-time weather integration from mountain stations
- Avalanche bulletin RSS feeds
- Historical ascent archives
- Route database with community contributions

## Not synced

Built from `style-255-alpine-mountaineering.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-mountain`, `--font-expedition`.
