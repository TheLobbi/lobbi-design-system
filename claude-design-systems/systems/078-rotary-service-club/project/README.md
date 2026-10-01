Rotary Service Club: Rotary/Service Club 80% + Community Impact 20%.

**Blend:** Rotary/Service Club 80% + Community Impact 20%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** association  
**Perfect for:** Rotary Clubs, Service Organizations, Community Groups

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “R Rotary Club of Springfield Central”, “$ Active Fundraising Campaigns”, “♥ Community Impact”, “🎯 District Conference 2025”.
- The reference page uses emoji as inline glyphs (♥ 🎯 📅 🔧 👥 📚); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `rotary-blue`, `royal-blue`, `sunshine-gold`, `service-red`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary Blue (#003366/#1e40af): Trust, service, tradition
- Sunshine Gold (#f5a623): Optimism, achievement, warmth
- Service Red (#dc2626): Urgency, impact, passion
- Navy Text (#1e3a5f): Authority with approachability
- Soft blue tints: Calm, community, collaboration

## Typography

- `display` — Poppins, -apple-system, BlinkMacSystemFont, sans-serif
- `body` — Roboto, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Poppins, Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Roboto:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Poppins (headings): Friendly authority, modern service
- Roboto (body): Clean readability, digital proficiency
- Bold display: Impact metrics, celebrating achievement

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.375rem, `radius-md` 0.5rem, `radius-lg` 0.75rem, `radius-xl` 1rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Pride in service accomplishments
- Community connection and belonging
- Optimism for future impact
- Recognition of member contributions
- Transparency in mission work

## States and motion

- Pride in service accomplishments
- Community connection and belonging
- Optimism for future impact
- Recognition of member contributions
- Transparency in mission work

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- High contrast ratios (WCAG AAA)
- Clear hierarchy (easy scanning)
- Readable typography (14px+ body)
- Color-blind safe palette
- Logical tab order

## Further guidance

### Design Dna

- Blend Ratio: Service Club 80% + Community Impact 20%
- Temperature: 7/10 (warm, community-focused)
- Formality: 6/10 (professional yet welcoming)
- Target Audience: Rotary, Lions, Kiwanis, service orgs

### Core Elements

- Service hours tracking (measurable impact)
- Fundraising thermometers (visual goal progress)
- Fellowship calendars (community building)
- Impact metrics (quantified good works)
- Member directory (classification system)
- Project updates (transparency & engagement)

### Engagement Patterns

- Visual progress bars (motivate participation)
- Impact numbers (celebrate collective effort)
- Event calendars (encourage attendance)
- Member highlights (recognize contributors)
- Project stories (inspire continued service)

### Conversion Goals

- Increase meeting attendance
- Boost project participation
- Drive fundraising contributions
- Encourage member recruitment
- Strengthen fellowship engagement

## Not synced

Built from `style-78-rotary-service.html`. No component bundle: the reference page's markup is not packaged as live components.
