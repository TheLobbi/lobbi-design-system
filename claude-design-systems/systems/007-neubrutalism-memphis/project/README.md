This design system establishes a rebellious, anti-corporate visual language that combines the raw brutality of Neubrutalism with playful Memphis design touches.

**Blend:** Neubrutalism 75% + Memphis 25%  
**Temperature:** 6/10 (warm) · **Formality:** 4/10 · **Tags:** creative  
**Perfect for:** Design Studios, Creative Agencies, Modern Brands

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Dashboard Statistics”, “Key Features”, “Lightning Fast”, “Bold Design”.
- Navigation uses single nouns: “Dashboard”, “Analytics”, “Projects”, “Team”.
- The reference page uses emoji as inline glyphs (⚡ 🎨 🚀 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-yellow`, `color-magenta`, `color-green`, `color-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary: Electric Yellow (#FFFF00) - Primary brand, headers, CTAs
- Secondary: Electric Blue (#0066FF) - Links, interactive states
- Accent 1: Hot Magenta (#FF00FF) - Memphis playfulness, highlights
- Accent 2: Neon Green (#00FF00) - Success states, decorative
- Structure: Pure Black (#000000) - Borders, shadows, typography
- Base: Pure White (#FFFFFF) - Backgrounds, negative space

## Typography

- `display` — Outfit, sans-serif
- `body` — "Space Grotesk", sans-serif

Faces are hosted on Google Fonts (Space Grotesk, Outfit); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Outfit:wght@800;900&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-2`, `heading-3`, `heading-4`, `label`, `button`), always with the letter-spacing given.

### Type rationale

- Display: Outfit (900 weight) - Brutally bold headlines
- Body: Space Grotesk (400/700) - Geometric clarity, readable at scale

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px. Pad cards and sections from these steps only.
- Corners: `radius-none` 0px, `radius-playful` 24px.
- Elevation: `shadow-offset`, `shadow`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Hover states shift shadows (simulating 3D paper lift)
- Active states flatten shadows (button press effect)
- No gradients, no blur, no opacity - pure graphic design

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 21.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `color-yellow` 1.1:1, `color-green` 1.4:1, `color-white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AAA contrast ratios (black text on yellow/white)
- 4px borders provide clear interactive boundaries
- Hard shadows enhance depth perception
- Bold typography ensures readability

## Further guidance

### Neubrutalism Dominance (80%)

- Heavy 4px black borders on ALL interactive elements (non-negotiable)
- Hard 6px offset shadows creating depth without gradients
- High-contrast color blocking with saturated primaries
- Brutally honest, blocky geometry - no smooth transitions
- Chunky typography treating text as graphic elements
- Flat design rejecting skeuomorphism and subtlety

### Memphis Accent (20%)

- Terrazzo-inspired background patterns with geometric fragments
- Playful color squiggles as decorative accents
- Asymmetric layouts breaking grid rigidity
- Neon color pops (magenta, green) against primary palette
- Geometric shapes (circles, triangles) as ornamental elements

### Business Impact

- This design positions the brand as:
- Bold and confident (heavy borders, saturated colors)
- Creative and playful (Memphis patterns, asymmetry)
- Transparent and honest (flat design, no corporate polish)
- Modern and youthful (rejecting traditional design conventions)

- Ideal for: Creative agencies, indie SaaS, design tools, Gen Z products

## Not synced

Built from `style-7-neubrutalism-memphis.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--border-style`.
