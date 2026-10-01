━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Blend: Private Aviation (75%) + Jet Set Luxury (25%) This design establishes a pinnacle of luxury digital experiences, channeling the refined sophistication of NetJets, VistaJet, and Wheels Up. Every pixel communicates exclusivity, global accessibility, and white-glove service standards. STRATEGIC COLOR ARCHITECTURE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Primary Palette: Color Psychology: The midnight blue establishes gravitas and trust—critical for high-net-worth clientele making six-figure travel decisions. Gold accents signal exclusivity without ostentation. This palette mirrors private jet interiors: dark leather, polished metals, pristine whites. TYPOGRAPHY HIERARCHY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Primary Font: Outfit emphasis), 600 (headings), 700 (commanding presence) Typographic Strategy: Outfit's geometric precision mirrors aviation engineering excellence. Wide letter spacing (0.02em-0.05em) creates breathing room—visual first-class seating. Font weights transition smoothly from whisper-light data labels to authoritative section headers. SPATIAL ORCHESTRATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ First-Class Spacing System: Spacing Philosophy: Generous whitespace isn't empty—it's a luxury commodity. Like private jet cabins prioritize legroom, this interface prioritizes visual space. Content never crowds; every element has room to command attention. COMPONENT ARCHITECTURE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1. Flight Cards - Aircraft-specific booking modules with real-time availability 2. Aircraft Gallery - High-fidelity imagery showcasing fleet excellence 3. Route Maps - Interactive global network visualization 4. Concierge Services - White-glove amenity selection interfaces 5. Trip Manifest - Detailed itinerary with passenger/crew coordination 6. Charter Calculator - Real-time pricing with route optimization INTERACTION PATTERNS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Hover States: Micro-interactions:.

**Blend:** Private Aviation 75% + Jet Set Luxury 25%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** premium  
**Perfect for:** Private Jet Services, Aviation Charter, Executive Travel

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Executive Flight Management”, “Available Aircraft”, “Gulfstream G650ER”, “Bombardier Global 7500”.
- Buttons are short verb phrases in Title Case: “Flight Manifest”, “Request Charter”, “Request Charter”, “Request Charter”.
- The reference page uses emoji as inline glyphs (✈ ⏱ 🌍 ★ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `champagne-gold`, `white-soft`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Outfit); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-base` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 2.5rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.375rem, `radius-md` 0.5rem, `radius-lg` 0.75rem, `radius-xl` 1rem.
- Elevation: `shadow-subtle`, `shadow-medium`, `shadow-elevated`, `shadow-gold`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Temperature: Cool Sophisticated (4/10)
- Not cold/clinical—that's commercial aviation
- Not warm/inviting—that's hospitality sector
- Precisely calibrated professional warmth
- Think: Handshake from a trusted advisor, not a hug from a stranger

- Formality: Ultra High (9/10)
- Language: "Request Charter" not "Book Now"
- Tone: "Your dedicated flight coordinator" not "Customer support"
- Imagery: Sleek aircraft exteriors, not lifestyle photography
- Data: Precise metrics (flight time to the minute, fuel efficiency stats)

- ACCESSIBILITY EXCELLENCE
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- WCAG 2.1 AA Compliance:
- Color Contrast: 7:1+ on all text (AAA level)
- Focus Indicators: Gold outlines (2px solid #d4af37)
- Keyboard Navigation: Full tab-order optimization
- Screen Reader: Semantic HTML, ARIA landmarks, descriptive labels
- Touch Targets: Minimum 44x44px (mobile-optimized for tablet charter)

- PERFORMANCE OPTIMIZATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Single-file architecture: Zero external dependencies
- CSS Grid/Flexbox: No framework bloat
- Font Loading: Preconnect + display=swap for instant render
- Image Strategy: Lazy-load aircraft photography (not included in base HTML)
- Animations: GPU-accelerated transforms only (transform, opacity)

- COMPETITIVE DIFFERENTIATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- vs. NetJets: More modern interface, less institutional
- vs. VistaJet: Comparable luxury, superior digital UX
- vs. Wheels Up: Higher formality, executive-focused (not lifestyle-casual)
- vs. Flexjet: Enhanced data transparency, real-time fleet visibility

- BUSINESS IMPACT METRICS
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Target Outcomes:
1. Increase charter request submissions by 34%
2. Reduce booking abandonment by 28%
3. Improve perceived brand prestige (Net Promoter Score +18 points)
4. Accelerate membership conversions by 41%
5. Enhance mobile/tablet booking completion by 52%

- SCALABILITY CONSIDERATIONS
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- This design system supports:
- Global expansion (multi-currency, multi-timezone)
- Fleet diversification (from light jets to ultra-long-range)
- Service tier differentiation (ad-hoc, membership, fractional ownership)
- White-label partnerships (branded experiences for partner operators)

Timing values: `--transition-fast` 0.15s ease, `--transition-base` 0.3s ease, `--transition-smooth` 0.4s cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `midnight-blue` 1.1:1, `gold-muted` 1.2:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Final Analysis

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- This interface is a strategic asset, not a commodity website. Every design
- decision reinforces brand positioning in the ultra-premium aviation market.
- The visual language speaks fluent "executive decision-maker"—confident,
- efficient, impeccably refined.

- When a CFO compares charter options at 11 PM before a crucial meeting, this
- interface instills immediate confidence. It doesn't shout luxury; it whispers
- excellence. That's the NetJets difference, digitized.

- ╔══════════════════════════════════════════════════════════════════════════════╗
- ║  Design Signature: Private Aviation Excellence | Temperature: 4 | Formality: 9 ║
- ╚══════════════════════════════════════════════════════════════════════════════╝

## Not synced

Built from `style-39-private-aviation.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-light`, `--font-regular`, `--font-medium`, `--font-semibold`, `--font-bold`.
