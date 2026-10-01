"Raw materiality, structural honesty, and monumental strength through uncompromising design".

**Blend:** Concrete Material 55% + Brutalist Architecture 25% + Industrial Raw 20%  
**Temperature:** 3/10 (cool) · **Formality:** 7/10 · **Tags:** creative, professional  
**Perfect for:** Architecture Firms, Industrial Design, Modern Brands

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “RAW MATERIALSHONEST DESIGN”, “MONUMENTAL WORKS”, “Urban Fortress”, “Industrial Complex”.
- Buttons are short verb phrases in Title Case: “FILTER”, “EXPORT”, “Submit Request”, “Clear Form”.
- Navigation uses single nouns: “DATA”, “PROJECTS”, “ARCHIVE”, “CONTACT”.
- The reference page uses emoji as inline glyphs (🏢 🏛 ⚙ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-steel-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Concrete gray: Strength, permanence, institutional authority
- Charcoal: Depth, seriousness, structural shadow
- Steel blue: Industrial precision, engineered systems
- Exposed aggregate: Natural, unfinished, honest materials
- Minimal contrast: Brutalist aesthetic of monochromatic truth

## Typography

- `display` — "Bebas Neue", sans-serif
- `body` — Barlow, sans-serif

Faces are hosted on Google Fonts (Bebas Neue, Barlow); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `heading-4`, `label`, `caption`), always with the letter-spacing given.

### Type rationale

- Headings: Bebas Neue (700) - Bold, condensed, architectural presence
- Body: Barlow (400-700) - Industrial sans-serif with geometric clarity
- Scale: 1.2 ratio for compact, dense hierarchy
- Leading: 1.5 for body, 1.1 for headings (tight, structural)
- Letter-spacing: Wide on headings (0.1em) for architectural feel

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.6rem, `space-md` 0.75rem, `space-lg` 1rem, `space-xl` 1.5rem, `space-2xl` 2rem, `space-3xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-none` 0, `radius-sm` 2px, `radius-md` 2px.
- Elevation: `shadow-brutalist-sm`, `shadow-brutalist-md`, `shadow-brutalist-lg`, `shadow-inset`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Hover states are subtle (brutalism resists decoration)
- Focus states use sharp, geometric outlines (2px solid)
- Transitions are quick (200ms) - no softness, direct response
- Active states use depth through heavy shadows
- Clicks feel solid, weighty, structural

Timing values: `--transition-base` 200ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 6.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-concrete-light` 1.0:1, `color-concrete-dark` 2.5:1, `color-steel-blue` 2.5:1, `color-white` 2.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant contrasts (enhanced for concrete textures)
- Focus indicators bold and geometric (3px solid borders)
- Semantic HTML maintains structural clarity
- Responsive breakpoints: 768px (tablet), 1024px (desktop)
- High contrast mode available for readability

## Further guidance

### Visual Attributes

- Temperature: 3/10 (Cool) - Steel and concrete create stark coolness
- Formality: 7/10 (Professional) - Serious, authoritative, institutional
- Texture Density: Very High - Concrete grain, aggregate, formwork marks
- Material Authenticity: Unfinished, raw, honest exposure

### Use Cases

- ✓ Architecture and construction firms
- ✓ Engineering and industrial companies
- ✓ Urban development platforms
- ✓ Tech companies seeking bold, distinctive presence
- ✓ Cultural institutions embracing modernist aesthetics

### Tags

- creative, professional, brutalist, industrial, architectural

## Not synced

Built from `style-190-concrete-brutalist.html`. No component bundle: the reference page's markup is not packaged as live components.
