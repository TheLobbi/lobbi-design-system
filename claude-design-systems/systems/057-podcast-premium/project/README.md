Premium podcast network interface inspired by Gimlet Media, Wondery, and modern audio storytelling platforms. This design emphasizes engaging audio content, episode discovery, and listener analytics with warm, approachable professionalism. BLEND COMPOSITION → 75% Podcast Premium: Episode cards, show organization, listener engagement → 25% Audio Wave Aesthetic: Waveform visualizers, sonic branding, rhythmic spacing.

**Blend:** Podcast Premium 75% + Audio Wave Aesthetic 25%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** media, tech  
**Perfect for:** Podcast Networks, Audio Productions, Content Creators

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Podcast Premium”, “Network Statistics”, “Trending This Week”, “The Missing Evidence: Part 3”.
- Buttons are short verb phrases in Title Case: “+ Upload Episode”.
- The reference page uses emoji as inline glyphs (🔍 👥 🎙 📻 ⚡ 🎧); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `purple-deep`, `purple-medium`, `purple-light`, `purple-subtle`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Purple (#581c87)    → Primary brand, show headers, premium features
- Wave Blue (#0ea5e9)      → Interactive elements, waveforms, audio visualization
- Warm White (#fefefe)     → Backgrounds, content areas, clean reading surface
- Accent Orange (#f97316)  → CTAs, live indicators, engagement highlights

- Supporting Palette:
- → Purple Tints: #7c3aed (medium), #a78bfa (light), #e9d5ff (subtle)
- → Blue Tints: #38bdf8 (bright), #7dd3fc (soft), #e0f2fe (background)
- → Neutrals: #1e293b (dark text), #64748b (secondary), #f1f5f9 (borders)

## Typography

- `display` — Nunito, sans-serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Nunito, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Primary: Nunito (friendly, bold, engaging)
- → 800 weight: Show titles, hero headings (warm personality)
- → 700 weight: Episode titles, section headers (strong hierarchy)
- → 600 weight: Stats, metadata, navigation (readable emphasis)
- → 400 weight: Body text, descriptions (comfortable reading)

- Secondary: Inter (clean, metrics, technical data)
- → Used for: Analytics, timestamps, numerical data

- Scale: 1.125 (major second - conversational rhythm)
- → 32px: Hero show titles
- → 24px: Section headings
- → 18px: Episode titles
- → 16px: Body text — **the reference page sets running text at 14px**
- → 14px: Metadata, labels
- → 12px: Captions, timestamps

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 12px, `radius-lg` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- Episode-Focused Grid:
- → Base unit: 8px (rhythmic spacing like audio beats)
- → Content padding: 24px (episode breathing room)
- → Card spacing: 20px (series organization)
- → Section gaps: 32px (show separation)

- Layout Philosophy:
- → Card-based episodes (scannable, bingeable)
- → Horizontal waveform strips (audio DNA)
- → Generous white space (premium feel)
- → Clear show grouping (network organization)

- COMPONENT ARCHITECTURE

1. EPISODE CARDS
- → Cover art prominent (visual podcast identity)
- → Waveform preview (sonic fingerprint)
- → Play button overlay (instant engagement)
- → Duration + metadata (listener expectations)
- → Progress indicator (resume listening)

2. SHOW PAGES
- → Hero banner with host imagery
- → Season/episode organization
- → Subscribe CTA prominent
- → Related shows sidebar
- → Listener reviews section

3. LISTENER STATS
- → Total listens with trend
- → Completion rate visualization
- → Geographic distribution
- → Device breakdown
- → Peak listening times

4. WAVEFORM VISUALIZERS
- → SVG-based audio waves (scalable, crisp)
- → Gradient fills (depth, dimension)
- → Interactive scrubbing (timeline control)
- → Chapter markers (navigation aids)
- → Amplitude variation (visual interest)

- INTERACTION PATTERNS

- → Hover: Episode cards lift with shadow expansion
- → Active: Play buttons scale with haptic feedback
- → Loading: Waveform pulse animation
- → Transition: 250ms ease-out (snappy, responsive)
- → Focus: 3px orange outline (accessibility compliance)

- ACCESSIBILITY FEATURES

- → WCAG 2.1 AA contrast ratios (4.5:1 minimum)
- → Semantic HTML5 (article, section, nav)
- → ARIA labels on play buttons and controls
- → Keyboard navigation (Tab, Enter, Space for play/pause)
- → Screen reader announcements for episode metadata
- → Reduced motion support (prefers-reduced-motion)
- → Focus visible indicators (high contrast orange)

- TEMPERATURE & FORMALITY

- Temperature: 6/10 (Warm Engaging)
- → Rounded corners (12px cards, 8px buttons)
- → Friendly typography (Nunito curves)
- → Warm color accents (orange CTAs)
- → Conversational microcopy

- Formality: 6/10 (Approachable Professional)
- → Professional analytics presentation
- → Clear data hierarchy
- → Premium spacing and typography
- → Friendly, human-centered language

- PERFORMANCE OPTIMIZATIONS

- → CSS Grid for responsive layouts
- → Flexbox for episode card alignment
- → Transform for animations (GPU acceleration)
- → Preload critical fonts (FOUT prevention)
- → Lazy load episode cover art
- → Debounced waveform interactions

- BRAND PSYCHOLOGY

- → Deep purple: Premium, creative, thoughtful
- → Wave blue: Trust, clarity, sonic identity
- → Warm white: Clean, modern, approachable
- → Accent orange: Energy, engagement, action

- Emotional Response: Inviting, professional, story-focused
- Target Audience: Podcast creators, network operators, engaged listeners

- USE CASES

- ✓ Podcast network dashboards (creator analytics)
- ✓ Listener apps (episode discovery, playback)
- ✓ Show management platforms (content organization)
- ✓ Sponsor reporting (audience insights)
- ✓ Audio CMS interfaces (production workflows)

- RESPONSIVE BEHAVIOR

- Desktop (1440px+): 3-column episode grid, sidebar visible
- Laptop (1024px):   2-column grid, condensed stats
- Tablet (768px):    Single column, stacked navigation
- Mobile (375px):    Full-width cards, bottom nav

## States and motion

Timing values: `--transition-fast` 150ms ease-out, `--transition-base` 250ms ease-out, `--transition-slow` 400ms ease-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `logo-icon-bg` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-57-podcast-premium.html`. No component bundle: the reference page's markup is not packaged as live components.
