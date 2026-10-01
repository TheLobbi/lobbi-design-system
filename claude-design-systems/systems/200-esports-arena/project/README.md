Competitive Energy Platform: This design system captures the electric atmosphere of professional esports tournaments, combining the intensity of competitive gaming with the polish of broadcast production. The interface communicates speed, precision, and high-stakes competition while maintaining clarity for real-time data streams and live statistics. Every element reinforces team identity and competitive spirit.

**Blend:** Esports Branding 55% + Tournament UI 25% + Stream Overlay 20%  
**Temperature:** 6/10 (warm) · **Formality:** 4/10 · **Tags:** tech, media  
**Perfect for:** Esports Organizations, Gaming Leagues, Tournament Platforms

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “ESPORTS ARENA”, “▸ LIVE MATCHES”, “THUNDER WOLVES VS CYBER DRAGONS”, “PHOENIX RISING VS STORM RAIDERS”.
- Buttons are short verb phrases in Title Case: “⚡ REGISTER TEAM”, “✓ VERIFY ROSTER”, “✕ CANCEL”.
- Navigation uses single nouns: “Matches”, “Teams”, “Players”, “Brackets”, “Stats”.
- The reference page uses emoji as inline glyphs (👥 🏆 ⚔ ⚡ 🔴 ⭐); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-purple`, `color-green`, `color-cyan`, `color-cyan-dark`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Russo One", sans-serif
- `body` — "Exo 2", sans-serif

Faces are hosted on Google Fonts (Russo One, Exo 2); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Russo+One&family=Exo+2:wght@300;400;600;700;900&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Headings: Russo One - Bold, impactful, sports/gaming aesthetic
- Body: Exo 2 - Technical, futuristic, highly readable at all sizes
- Weight Variation: Wide range from light data to heavy callouts

- EXPERIENTIAL METRICS

- Temperature: 6/10 (Moderate-warm - Competitive intensity balanced with professionalism)
- Formality: 4/10 (Casual-professional - Gaming culture meets broadcast standards)
- Energy: 10/10 (Maximum - Adrenaline, competition, live action)
- Intensity: 9/10 (Very high - Fast-paced, attention-demanding)

- ACCESSIBILITY STANDARDS

- WCAG 2.1 AA Compliance:
- Neon colors tested against dark backgrounds for sufficient contrast
- Multiple visual indicators beyond color (icons, patterns, borders)
- Clear typography hierarchy for rapid information scanning
- Motion effects can be disabled via prefers-reduced-motion
- Focus states prominent for keyboard navigation

- USE CASES

- Esports tournament platforms
- Gaming league websites
- Stream overlay designs
- Player and team stat trackers
- Competitive gaming communities
- Tournament bracket systems
- Gaming news and media sites

- INTERACTION PATTERNS

- Fast, snappy transitions matching game speed
- Score updates with dramatic emphasis
- Victory/defeat states with appropriate energy
- Live data streams with subtle pulsing
- Hover states reveal additional player/match data
- Click feedback feels responsive and immediate

- TECHNICAL NOTES

- CSS clip-path for angular, dynamic shapes
- Neon glow effects using multiple text-shadows
- Animation timing optimized for excitement without distraction
- Gradient overlays for depth and energy
- Transform skew for aggressive, forward-leaning aesthetic
- High-performance animations for live data updates

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-glow-purple`, `shadow-glow-green`, `shadow-glow-cyan`, `shadow-depth`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 0.15s ease, `--transition-medium` 0.3s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 19.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-200-esports-arena.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-primary`, `--gradient-accent`, `--gradient-team`, `--gradient-dark`.
