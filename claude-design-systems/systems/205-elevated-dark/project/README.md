━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Depth through elevation meets premium dark design. This style uses Google's Material Design 3 elevation system to create sophisticated depth and hierarchy in dark mode. Surfaces appear to float at different heights, creating a premium, three-dimensional interface perfect for modern applications that value visual sophistication.

**Blend:** Elevated Dark 55% + Material Dark 25% + Layered Shadows 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** tech, premium  
**Perfect for:** Premium Tech, Design Software, Professional Apps

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Elevated Dark”, “Premium Collections”, “Midnight Frequencies”, “Cinematic Originals”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”, “Upgrade to Premium Plus”, “Manage Subscription”.
- Navigation uses single nouns: “Dashboard”, “Discover”, “Library”, “Settings”.
- The reference page uses emoji as inline glyphs (🎵 🎬 📚 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-primary`, `color-primary-light`, `color-secondary`, `color-pink`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Dark Gray: Sophistication, modernity, depth
- Elevated Surfaces: Hierarchy, importance, focus
- Gradient Overlays: Premium feel, dimensionality
- Vibrant Accents: Energy, interactivity, emphasis

## Typography

- `display` — Manrope, -apple-system, sans-serif
- `body` — Inter, -apple-system, sans-serif

Faces are hosted on Google Fonts (Manrope, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ├─ Headings: Manrope (modern, geometric)
- Body: Inter (clean, readable)

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.5rem, `radius-md` 0.75rem, `radius-lg` 1rem, `radius-xl` 1.5rem.
- Elevation: `shadow-elevation-1`, `shadow-elevation-2`, `shadow-elevation-3`, `shadow-elevation-4`, `shadow-elevation-5`, lowest first for resting cards, higher for hover and overlays.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Component: Elevated Dark (55%)
- ├─ Layered dark gray (#121212 base)
- ├─ Material Design 3 elevation system
- ├─ Surface hierarchy through brightness
- Premium dark aesthetic

- Secondary Component: Material Dark (25%)
- ├─ Google Material Design 3 principles
- ├─ Elevation-based surface colors
- ├─ Tonal color system
- Dynamic color overlays

- Tertiary Component: Layered Shadows (20%)
- ├─ Multi-level shadow system
- ├─ Ambient and key light shadows
- ├─ Depth perception through elevation
- Floating UI elements

## States and motion

- ├─ Temperature: 5/10 (Balanced, neutral)
- ├─ Formality: 7/10 (Professional, premium)
- ├─ Energy: Refined, sophisticated, modern
- Mood: Premium, elegant, immersive

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `color-background` 1.0:1, `color-text-disabled` 2.8:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ✓ WCAG 2.1 AA compliant
- ✓ Material Design 3 contrast standards
- ✓ Elevation perceivable by all users
- ✓ Focus states with elevated surfaces
- ✓ Touch targets 44x44px minimum
- ✓ Clear visual hierarchy

## Further guidance

### Use Cases

- ├─ Premium SaaS platforms
- ├─ Mobile applications (Android Material)
- ├─ Media and entertainment apps
- Modern enterprise dashboards

### Technical Implementation

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Material Design 3 elevation system
- 5-level surface hierarchy
- Overlay opacity calculations
- Sophisticated shadow layering
- Performance optimized (<58kb)

### Elevation System

- ├─ Level 0: #121212 (background)
- ├─ Level 1: #1E1E1E (cards)
- ├─ Level 2: #232323 (raised elements)
- ├─ Level 3: #282828 (dialogs)
- Level 4: #2C2C2C (menus, tooltips)

### Breakpoints

- ├─ Mobile: < 768px
- ├─ Tablet: 768px - 1024px
- Desktop: > 1024px

## Not synced

Built from `style-205-elevated-dark.html`. No component bundle: the reference page's markup is not packaged as live components.
