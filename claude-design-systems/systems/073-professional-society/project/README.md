Professional Society: Professional Society 80% + Academic Excellence 20%.

**Blend:** Professional Society 80% + Academic Excellence 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** association, academic  
**Perfect for:** Professional Societies, Industry Associations, Certification Bodies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Professional Certifications”, “Continuing Education Progress”, “Member Spotlight”, “Recent Research Publications”.
- Buttons are short verb phrases in Title Case: “View Available Courses”, “Register Now”, “Register Now”, “Register Now”.
- The reference page uses emoji as inline glyphs (🏆 ⭐ 🎖 📚 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `primary-forest`, `secondary-gold`, `background-ivory`, `accent-burgundy`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Forest Green (#1a4d2e): Growth, expertise, established authority
- Antique Gold (#b8860b): Achievement, recognition, timeless value
- Ivory (#fffff8): Purity, scholarly tradition, refined elegance
- Deep Charcoal (#1f1f1f): Gravitas, intellectual depth
- Burgundy (#722f37): Honor, distinction, academic excellence

## Typography

- `display` — "Libre Baskerville", serif
- `body` — Lato, sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Lato:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Libre Baskerville: Serif tradition for headings (scholarly heritage)
- Lato: Professional clarity for body (modern accessibility)
- Small caps: Credentials and designations (formal distinction)

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Pride in professional achievement
- Commitment to lifelong learning
- Respect for scholarly tradition
- Recognition among peers
- Advancement of field knowledge

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Style

- Professional Society + Academic Excellence

### Temperature

- (Intellectual, Distinguished)

### Formality

- (Scholarly Prestige)

### Target Audience

- Medical societies and healthcare professional organizations
- Engineering associations and technical societies
- Scientific organizations and research institutions
- Professional certification bodies
- Academic societies and scholarly associations

### Design Principles

1. Credential prominence - badges, certifications, designations
2. Continuing education integration - CE credits, learning pathways
3. Member achievement recognition - awards, publications, honors
4. Conference and event emphasis - annual meetings, symposia
5. Knowledge sharing - journals, publications, research
6. Geographic organization - chapters, regions, sections
7. Professional development tracking - progress, milestones

### Ui Patterns

- Certification badges with verification
- CE credit progress tracking
- Event countdown timers
- Publication access and archives
- Member directory with credentials
- Awards and honors showcase
- Chapter/regional navigation

## Not synced

Built from `style-73-professional-society.html`. No component bundle: the reference page's markup is not packaged as live components.
