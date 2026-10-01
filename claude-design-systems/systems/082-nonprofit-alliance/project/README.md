This style combines the collaborative spirit of nonprofit alliances with the collective impact framework of network organizations. The design emphasizes shared resources, joint advocacy, and measurable community outcomes while maintaining warmth and accessibility.

**Blend:** Nonprofit Alliance 80% + Impact Network 20%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** association, professional  
**Perfect for:** Nonprofit Networks, NGO Alliances, Impact Coalitions

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Nonprofit Alliance Dashboard”, “Impact Story: Community Food Security Initiative”, “Grant Opportunities”, “NEW: Community Health Equity Fund”.
- Buttons are short verb phrases in Title Case: “View All Grants”, “Enroll Now”, “Join Campaign”, “Register”.
- The reference page uses emoji as inline glyphs (💰 🎓 📅 👥 🎯 💡); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `impact-purple`, `hope-teal`, `sunrise-orange`, `soft-lavender`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`, `warning-amber`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Impact Purple (#7c3aed): Transformation, dignity, empowerment
- Hope Teal (#0d9488): Growth, renewal, community resilience
- Soft Lavender (#faf5ff): Compassion, calm, inclusive space
- Sunrise Orange (#f97316): Urgency, optimism, action-oriented

## Typography

- `display` — Poppins, sans-serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Poppins, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Poppins (headings): Friendly authority, modern purpose
- Inter (body): Universal accessibility, clarity
- Bold metrics: Impact-first communication

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-16` 16px, `radius-20` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-impact`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Creates sense of belonging to something larger than individual
- organizations. Emphasizes "together we achieve more" while
- celebrating individual member contributions. Balances urgency
- of social issues with sustainable, collaborative solutions.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Target Users

- Nonprofit coalition directors
- Community foundation program officers
- Collaborative initiative coordinators
- Grant-making alliance managers
- Advocacy network organizers

### Engagement Patterns

- Temperature: 7/10 - Warm, mission-driven, human-centered
- Formality: 6/10 - Professional but purpose-led, collaborative tone

### Key Differentiators

- Collective impact dashboard showing combined reach
- Shared resources library for capacity building
- Joint grant opportunities with collaborative applications
- Advocacy campaign tracking with coalition coordination
- Member organization spotlight and impact stories
- Capacity building program management

## Not synced

Built from `style-82-nonprofit-alliance.html`. No component bundle: the reference page's markup is not packaged as live components.
