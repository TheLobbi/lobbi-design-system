This design system captures the spirit of location independence and digital nomadism—the freedom to work from anywhere while staying connected. It balances adventure and exploration with the practical needs of remote work, creating an interface that feels both exciting and productive.

**Blend:** Digital Nomad 55% + Travel Adventure 30% + Coworking Modern 15%  
**Temperature:** 6/10 (warm) · **Formality:** 4/10 · **Tags:** tech, hospitality  
**Perfect for:** Digital Nomads, Remote Work Communities, Travel Tech

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Welcome Back, Explorer”, “📅 Recent Activity”, “Time Zones”, “Find Coworking”.
- Buttons are short verb phrases in Title Case: “View All”, “Search Nearby”, “Browse Events”, “📝 Log Activity”.
- Navigation uses single nouns: “🏠 Dashboard”, “📍 Locations”, “💼 Work”, “👥 Network”.
- The reference page uses emoji as inline glyphs (🌍 🏠 📍 💼 👥 🔒); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `passport-blue`, `sunset-orange`, `wifi-green`, `sky-light`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Passport Blue (#2563eb): Trust, professionalism, sky and sea -
- represents the freedom of travel and the reliability needed for
- remote work. Primary action color for critical workflows.
- Sunset Orange (#f97316): Energy, creativity, warmth - captures
- golden hour moments and the excitement of new destinations.
- Accent color for notifications and highlights.
- WiFi Green (#22c55e): Connectivity, growth, "online" status -
- signals successful connections and available resources. Used for
- positive status indicators and completion states.
- Luggage Gray (#64748b): Stability, neutrality, sophistication -
- provides grounding for information-dense interfaces. Text and
- structural elements that need to recede.

## Typography

- `display` — "Josefin Sans", sans-serif
- `body` — "DM Sans", sans-serif

Faces are hosted on Google Fonts (Josefin Sans, DM Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Josefin Sans (Sans-serif display): Used for headings and featured
- content. This geometric font has an adventurous, slightly quirky
- personality that suggests creativity and independence. Its tall
- x-height works well on mobile screens, and its distinctiveness
- creates memorable brand presence.
- DM Sans (Sans-serif): Used for UI elements and body text.
- Originally designed for low screen resolutions, DM Sans maintains
- excellent legibility on any device. Its clean, modern forms
- support dense information while remaining approachable. The wide
- range of weights provides clear hierarchy.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.5rem, `radius-md` 0.75rem, `radius-lg` 1rem, `radius-xl` 1.5rem, `radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

- Cards: Light, elevated feel suggesting cloud-based data
- Buttons: Confident CTAs with travel-inspired icons
- Tables: Compact, scannable for quick reference on mobile
- Forms: Streamlined with autofill and quick inputs
- Navigation: Tab-based for thumb-friendly mobile navigation
- Status indicators: Real-time connection and timezone displays

## States and motion

- Transitions: 250-350ms (snappy for mobile responsiveness)
- Gestures: Swipe navigation and pull-to-refresh on mobile
- Hover states: Lift and glow effects suggesting digital interaction
- Loading states: Progress indicators with location-based animations
- Offline mode: Graceful degradation with clear offline indicators

Timing values: `--transition-fast` all 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` all 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` all 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 6.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `luggage-gray` 4.2:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `wifi-green` 2.0:1, `wifi-green-dark` 2.9:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AA contrast ratios maintained (AAA on critical paths)
- Touch targets: 48x48px minimum for mobile-first usage
- Focus indicators: High contrast with 3px outlines
- Color never sole indicator (icons + text for status)
- Responsive from 320px width upward
- Offline states clearly communicated
- Time zones and dates show user's local time by default
- Screen reader labels for all connectivity indicators

## Component inventory

The reference page composes these patterns from the tokens above:

- Cards: Light, elevated feel suggesting cloud-based data
- Buttons: Confident CTAs with travel-inspired icons
- Tables: Compact, scannable for quick reference on mobile
- Forms: Streamlined with autofill and quick inputs
- Navigation: Tab-based for thumb-friendly mobile navigation
- Status indicators: Real-time connection and timezone displays

## Further guidance

### Remote Nomad Network - Design System

- Style ID: 234

### Temperature Rating

- (Adventure Balanced)
- Balanced between warm and cool to represent both professional
- work and exciting travel. Orange and green add warmth, while
- blues and grays provide cooling professionalism. The overall
- effect is energetic but not overwhelming.

### Formality Rating

- (Casual)
- Intentionally casual to match the flexible, independent lifestyle
- of digital nomads. Professional enough for work contexts, but
- relaxed enough to use at a beach cafe. The design says "work-life
- integration" not "corporate office."

### Location & Connectivity Features

- Timezone displays show multiple locations simultaneously
- Connectivity indicators (WiFi strength, VPN status, sync state)
- Location pins and map-inspired visual elements
- Currency converters and time zone calculators integrated
- "Where I'm Working" status displays

### Mobile-First Considerations

- Bottom navigation bar for thumb-friendly reach
- Collapsible sections to maximize screen real estate
- One-handed operation patterns throughout
- Minimal data usage with optimized assets
- Works on spotty connections with progressive loading

### Responsive Strategy

- 320px: Essential features only, vertical stack
- 768px: Two-column layouts, expanded navigation
- 1024px: Full desktop experience with sidebars
- Always maintains mobile accessibility patterns

## Not synced

Built from `style-234-remote-nomad.html`. No component bundle: the reference page's markup is not packaged as live components.
