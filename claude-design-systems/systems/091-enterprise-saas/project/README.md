Enterprise SaaS: Enterprise SaaS 60% + Swiss Typography 25% + Material Design 15%.

**Blend:** Enterprise SaaS 60% + Swiss Typography 25% + Material Design 15%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** tech, professional  
**Perfect for:** SaaS Companies, Enterprise Software, B2B Platforms

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Dashboard Overview”, “Quick Actions”, “Member Growth Trend”, “Recent Activity”.
- Buttons are short verb phrases in Title Case: “🔔”, “➕ Add Member Register new member”, “📊 Export Data Download member data”, “📧 Send Email Broadcast to members”.
- Navigation uses single nouns: “📊 Dashboard”, “📊 Dashboard”, “👥 Members 1,247”, “👥 Members 1,247”, “📅 Events”, “📅 Events”.
- The reference page uses emoji as inline glyphs (🔔 ❓ 📊 👥 📅 💳); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-primary-50`, `color-primary-200`, `color-primary-400`, `color-primary-700`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

Faces are hosted on Google Fonts (Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">
```

The reference page names Roboto without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-1` 0.25rem, `space-2` 0.5rem, `space-3` 0.75rem, `space-4` 1rem, `space-5` 1.5rem, `space-6` 2rem, `space-8` 3rem, `space-10` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 4px, `border-radius-md` 8px, `border-radius-lg` 12px, `border-radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-primary-600` 3.5:1, `color-primary-700` 4.4:1, `color-neutral-600` 4.4:1, `color-error` 3.5:1, `kpi-icon-text-2` 3.6:1, `kpi-icon-text-3` 4.3:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-neutral-400` 1.8:1, `color-neutral-500` 2.6:1, `color-success` 2.7:1, `surface-base` 1.0:1, `surface-elevated-1` 1.0:1, `surface-elevated-2` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Primary Influence (60%)

- Enterprise SaaS
- Dashboard-first design philosophy prioritizing data visibility
- Clean, minimal interface reducing cognitive load
- Professional color palette (cool blues, grays) for corporate environments
- Card-based widget system for modular content organization
- Data visualization emphasis with chart placeholders and KPI metrics
- Functional hierarchy: most important data gets prominence

### Secondary Influence (25%)

- Swiss Typography
- Precise 8px grid system for mathematical spacing consistency
- Clear typographic hierarchy using size, weight, and spacing
- Generous whitespace (breathing room) between elements
- Systematic spacing using multiples of 8 (8, 16, 24, 32, 48, 64)
- Limited color palette with strong contrast ratios for accessibility
- Grotesque sans-serif typeface (system fonts) for clarity
- Grid-based layout ensuring perfect alignment

### Tertiary Influence (15%)

- Material Design 3
- Elevated surfaces with subtle shadows (elevation levels 1-3)
- Surface tinting using primary color at low opacity
- Rounded corners (4-8px) for modern, approachable feel
- State layers for hover/active interactions
- Dynamic color tokens adaptable to themes
- Floating elements for primary actions

### Temperature

- 4 (Cool-Professional)
- Blues: Primary interaction color, trust and professionalism
- Cyans: Accent for secondary actions and highlights
- Cool Grays: Neutral backgrounds, sophisticated and clean
- Minimal warm tones: Only for success/warning states

### Formality

- 8 (Highly Formal)
- Corporate-grade professional design
- Serious, business-oriented tone
- Precise, technical language
- Formal typographic scale
- Conservative interaction patterns

### Member Management Context

- Association platform for member organizations
- KPIs: Total members, active members, renewal rate, engagement
- Quick actions: Add member, export data, send communication
- Activity feed: Recent member activities and system events
- Member directory with search and filters

## Not synced

Built from `style-91-enterprise-saas.html`. No component bundle: the reference page's markup is not packaged as live components.
