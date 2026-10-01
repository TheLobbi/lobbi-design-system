AMPLIFYING VOICES FOR POLICY CHANGE. Core Principle: "Bold voices demand bold design" Mission Statement Reflected in Design:.

**Blend:** Trade Association 35% + Bold Typography 25% + Color Block 20% + Kinetic Typography UI 20%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** professional, association, media  
**Perfect for:** Advocacy Groups, Policy Networks, Industry Advocates

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “ADVOCACY ALLIANCE”, “FIGHTING FOR CHANGE”, “ACTIVE CAMPAIGNS”, “CLEAN ENERGY NOW”.
- Buttons are short verb phrases in Title Case: “Take Action”, “Act Now →”, “Learn More →”, “Support →”.
- Navigation uses single nouns: “Issues”, “Action”, “Wins”, “Join”.
- The reference page uses emoji as inline glyphs (✊ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `statement-white`, `advocacy-blue`, `blue-dark`, `action-red`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`alert-amber`, `info-cyan`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Pure color fields: Solid backgrounds, no gradients
- High contrast pairing: Complementary colors, visual punch
- Geometric division: Hard edges, clean splits
- Brand consistency: Limited palette, strong recognition
- Emotional coding: Color = category = meaning
- Print heritage: Poster tradition, silkscreen aesthetic
- Accessibility focus: WCAG AAA contrast ratios

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, "Helvetica Neue", Arial, sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap">
```

The reference page names Inter without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Type as hero: Oversized headlines, statement-making text
- Typographic hierarchy: Dramatic scale changes, clear levels
- Font personality: Strong character, distinctive voice
- Kinetic tension: Dynamic layouts, energetic positioning
- Contrast extremes: Huge vs tiny, bold vs light
- Message first: Typography carries brand, minimal decoration
- Reading experience: Scannable, impactful, memorable

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 48px, `space-xl` 72px, `space-2xl` 96px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 400ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `pure-white` 1.0:1, `slate-lighter` 1.4:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Primary (35%) - Trade Association Advocacy Principles

- Policy influence: Legislative engagement, regulatory expertise
- Industry voice: Unified representation, sector leadership
- Member mobilization: Action alerts, grassroots campaigns
- Evidence-based advocacy: Research, data, white papers
- Coalition building: Partner organizations, strategic alliances
- Issue tracking: Legislative monitoring, policy analysis
- Professional lobbying: Capitol Hill presence, government relations

### Quaternary (20%) - Kinetic Typography Ui

- Motion suggestion: Diagonal layouts, dynamic angles
- Animated potential: Slide-in ready, transition-friendly
- Scroll-triggered reveals: Progressive disclosure
- Attention direction: Visual flow through type
- Urgency communication: Movement implies action
- Modern web aesthetic: Contemporary digital design
- Engagement optimization: Interactive type experiences

### Temperature

- (Professional neutral)

### Formality

- (Serious advocacy, approachable)

### Compatibility Matrix

- Trade Association × Bold Typography: 92% SYNERGY
- Shared values: Clear messaging, professional impact
- Mutual reinforcement: Policy clarity meets typographic punch
- Visual harmony: Both demand attention, authority
- Tension point: Dry policy vs. creative expression
- Resolution: Serious content, bold delivery

- Trade Association × Color Block: 87% SYNERGY
- Shared values: Clarity, organization, structure
- Mutual reinforcement: Issue categories meet color coding
- Visual harmony: Both favor clean, systematic design
- Tension point: Conservative sector vs. bold aesthetics
- Resolution: Professional color palette, strategic boldness

- Bold Typography × Color Block: 95% SYNERGY
- Shared values: High contrast, visual impact, clarity
- Mutual reinforcement: Perfect partnership—type on color
- Visual harmony: Both rooted in print poster tradition
- Minimal tension: Natural allies in design language

- Kinetic Typography × All Blends: 83% SYNERGY
- Enhancement: Adds energy and modernity to advocacy
- Challenge: Motion can distract from serious policy work
- Resolution: Subtle dynamism, professional restraint
- Integration: Diagonal accents, scroll effects, transitions

### Color Psychology & Advocacy Semantics

- --statement-white: #fafbfc   → Clean slate, clarity, truth
- --advocacy-blue: #1d4ed8     → Trust, stability, policy depth
- --action-red: #dc2626        → Urgency, passion, call to action
- --progress-green: #16a34a    → Success, growth, forward movement
- --alert-amber: #f59e0b       → Attention, caution, awareness
- --neutral-slate: #475569     → Professional, serious, grounded
- --charcoal-text: #1e293b    → Authority, readability, weight

### Typography Strategy - The Star Of The Show

- Display scale: 64px+ headlines for hero impact
- Sans-serif dominance: Modern, clean, accessible
- Weight contrast: 300 light to 900 black variations
- Tight tracking: Headlines compressed for power
- Generous leading: Body text breathing room
- Responsive hierarchy: Mobile = still bold

## Not synced

Built from `style-128-advocacy-alliance.html`. No component bundle: the reference page's markup is not packaged as live components.
