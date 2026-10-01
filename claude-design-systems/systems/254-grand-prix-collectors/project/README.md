This interface embodies the adrenaline-fueled world of Formula racing merged with automotive luxury and collector prestige. Drawing from the heritage of legendary circuits, iconic race teams, and the precise engineering of Formula cars, the design balances speed aesthetics with collector sophistication. Carbon fiber textures, checkered flag patterns, and racing telemetry displays create an immersive experience for motorsport enthusiasts. The interface captures both the split-second precision of racing and the refined culture of automotive collecting—where each vehicle represents engineering excellence, racing history, and investment-grade prestige. Speed meets luxury in every pixel.

**Blend:** Formula Racing 55% + Automotive Luxury 30% + Collector Prestige 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** premium, association  
**Perfect for:** Racing Collectors, Grand Prix Clubs, Automotive Elite

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Racing Heritage Dashboard”, “Top Collection Values”, “Featured Collection”, “Ferrari 312 T2”.
- Buttons are short verb phrases in Title Case: “Add Vehicle”, “🏁 Add to Collection”, “💾 Save Draft”, “🗑️ Clear Form”.
- Navigation uses single nouns: “Collection”, “Auctions”, “Racing”, “Valuation”.
- The reference page uses emoji as inline glyphs (🏎 🏆 💎 🏁 ⚡ 💾); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `racing-red`, `championship-gold`, `podium-silver`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Racing Red (#dc2626): Ferrari passion, competition fire, emergency braking,
- race day adrenaline, Italian automotive heritage, podium triumph, speed
- intensity, danger awareness, maximum visibility, championship glory, blood-racing
- excitement (primary brand color across motorsport history)

- Carbon Fiber Black (#171717): Modern Formula car construction, lightweight
- strength, high-tech materials, precision engineering, stealth sophistication,
- aerodynamic surfaces, monocoque chassis, ultimate performance, technical
- excellence, contemporary racing aesthetic

- Checkered White (#fafafa): Starting grid lines, finish line victory, flag
- signals, safety zones, pit lane markings, clean room precision, data clarity,
- racing purity, technical documentation, engineering drawings

- Championship Gold (#f59e0b): Victory trophies, winner's laurels, premium
- membership, collector elite status, limited editions, investment value,
- historic significance, auction highlights, provenance markers, achievement
- recognition (traditional motorsport awards color)

- Pit Crew Silver (#94a3b8): Technical instruments, timing equipment, aluminum
- components, professional tools, data neutrality, supporting information,
- mechanical precision, engineering excellence

- Safety Orange (#fb923c): Marshal flags, safety barriers, warning systems,
- emergency equipment, track limits, incident alerts, high-visibility accents

## Typography

- `display` — "Racing Sans One", Impact, sans-serif
- `body` — Roboto, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Racing Sans One, Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Roboto:wght@300;400;500;700;900&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`, `button`), always with the letter-spacing given.

### Type rationale

- Racing Sans One (Primary Headers):
- Designed specifically for speed and motorsport branding
- Condensed letterforms suggesting aerodynamic efficiency
- Bold impact perfect for lap times and championship standings
- High-speed legibility at racing velocities
- Aggressive angles echoing racing aesthetics
- Immediate visual energy and forward momentum
- Excellent for numbers (lap times, speeds, years)
- Authentically captures racing typography heritage

- Roboto (Body & Technical Data):
- Geometric precision matching engineering specifications
- Excellent number rendering for telemetry and statistics
- Wide weight range for data hierarchy (300-900)
- Modern, technical aesthetic without being cold
- Superior screen legibility for dense data displays
- Google Fonts performance optimization
- Professional clarity for technical documentation
- Neutral enough to let racing content dominate

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-red-glow`, `shadow-gold-glow`, lowest first for resting cards, higher for hover and overlays.

1. Header: Racing stripe navigation with checkered flag accents
2. Race Stats: Speedometer-style gauge cards with carbon fiber texture
3. Championship Standings: Podium-style ranking display
4. Collection Gallery: Grid layout showcasing collector vehicles
5. Telemetry Table: Precision data with racing stripe highlights
6. Acquisition Form: New collection entry interface
7. Action Buttons: Pit crew efficiency (fast, precise CTAs)
8. Status Badges: Race condition and collection status indicators
9. Footer: International racing community links

## States and motion

- Racing red glow effects on hover (brake light intensity)
- Lightning-fast transitions (pit stop efficiency)
- Gold highlights for premium/collector items
- Carbon fiber pattern reveals on interaction
- Speedometer needle animations
- Checkered flag victory reveals
- Tire smoke particle effects (subtle)
- Rev counter RPM animations

Timing values: `--transition-fast` 150ms ease, `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `racing-red` 3.9:1, `carbon-black-deep` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant (minimum 4.5:1 text contrast)
- Racing red (#dc2626) passes AA on white backgrounds
- Carbon black provides excellent contrast for white/gold text
- Touch targets minimum 44px (racing gloves, mobile use)
- Focus indicators use championship gold (high visibility)
- Color never sole indicator (icons + text for all racing flags)
- Screen reader labels for all telemetry and statistics
- Keyboard navigation (full dashboard control without mouse)
- Reduced motion support (disable animations for motion sensitivity)
- High contrast mode for bright garage/showroom conditions

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Racing stripe navigation with checkered flag accents
2. Race Stats: Speedometer-style gauge cards with carbon fiber texture
3. Championship Standings: Podium-style ranking display
4. Collection Gallery: Grid layout showcasing collector vehicles
5. Telemetry Table: Precision data with racing stripe highlights
6. Acquisition Form: New collection entry interface
7. Action Buttons: Pit crew efficiency (fast, precise CTAs)
8. Status Badges: Race condition and collection status indicators
9. Footer: International racing community links

## Further guidance

### Spatial Hierarchy

- 4px base unit (engineering precision, CAD standards)
- Racing stripe visual separators (3px red accent lines)
- Card layouts suggesting race car positioning on grid
- Dynamic angles creating forward momentum
- Negative space representing open track
- Grid system based on Formula car dimensional ratios

### Emotional Temperature

- Dynamic Energy (5/10):
- Racing red provides adrenaline and excitement
- Carbon black adds technical sophistication
- Gold accents inject prestige and luxury
- Not cold (passionate motorsport) nor hot (controlled precision)
- Balanced: Exciting enough for racing, refined for collecting
- Psychological: Energized focus, competitive drive
- Captures racing intensity without overwhelming collector sophistication

### Formality Level

- Prestigious Professional (7/10):
- Serious collector investments (six-seven figure vehicles)
- Professional racing heritage and provenance
- Formal auction house presentation standards
- Balanced with enthusiast passion and racing excitement
- Elite membership community expectations
- Suitable for international collectors and racing legends
- Business-appropriate for luxury automotive sector

### Performance Optimization

- Lightning-fast load times (pit stop efficiency)
- Efficient CSS with minimal render blocking
- Optimized font loading (Racing Sans One + Roboto)
- Lazy loading for collection gallery images
- Progressive enhancement strategy
- Critical path CSS prioritization
- Minimal JavaScript dependencies
- Mobile-first responsive design

### Brand Alignment

- Establishes Grand Prix collector authority through:
- Authentic Formula racing color palette (red, black, white)
- Motorsport typography (Racing Sans One)
- Technical data presentation matching telemetry displays
- Checkered flag and racing stripe visual language
- Championship trophy gold for premium elements
- Heritage connection to legendary races and drivers
- Museum-quality collection presentation standards

### Use Cases

- Luxury automotive collection management platforms
- Formula racing heritage organizations
- Classic car auction houses (RM Sotheby's, Bonhams)
- Racing team collector programs (Ferrari, McLaren, Mercedes)
- Automotive museum portals (Petersen, Louwman)
- High-net-worth automotive investment portfolios
- Historic racing event management (Goodwood, Monaco Historique)
- Exotic car club membership platforms
- Automotive provenance documentation systems
- Racing memorabilia collector communities

### Competitive Differentiation

- Unlike generic automotive sites, this design:
- Authentically captures Formula racing heritage (not just cars)
- Balances adrenaline with sophistication (racing + luxury)
- Uses real motorsport color theory (not generic automotive)
- Incorporates telemetry and racing data displays
- Reflects actual collector workflows and valuation methods
- Honors both speed (racing) and permanence (collecting)

### Scalability

- Component system supports:
- Multiple racing categories (F1, Le Mans, IndyCar, Vintage)
- Various collection types (cars, memorabilia, art, watches)
- International racing circuits and events
- Auction integration and real-time bidding
- Provenance blockchain documentation
- Virtual showroom 3D displays
- Historical archive deep dives
- Market analysis and investment tracking

## Not synced

Built from `style-254-grand-prix.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-racing`, `--font-technical`.
