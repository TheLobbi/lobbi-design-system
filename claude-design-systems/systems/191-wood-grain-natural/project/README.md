"Organic warmth and sustainable beauty through handcrafted natural materials".

**Blend:** Wood Material 55% + Cabin Warmth 25% + Artisan Craft 20%  
**Temperature:** 7/10 (warm) · **Formality:** 5/10 · **Tags:** hospitality, creative  
**Perfect for:** Furniture Brands, Natural Products, Craft Businesses

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Handcrafted from Nature”, “Signature Collections”, “Live Edge Tables”, “Cabin Furniture”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”, “Start Your Project”, “Clear Form”.
- Navigation uses single nouns: “Home”, “Gallery”, “Projects”, “Connect”.
- The reference page uses emoji as inline glyphs (🪵 🌲 🔨 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-oak-tan`, `color-walnut`, `color-cream`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Oak tan: Natural beauty, organic, sustainable
- Walnut brown: Rich depth, quality craftsmanship, earthiness
- Forest green: Growth, nature, environmental connection
- Cream: Light, clarity, natural illumination
- Warm gray: Aged wisdom, natural patina, authenticity

## Typography

- `display` — Vollkorn, serif
- `body` — "Nunito Sans", sans-serif

Faces are hosted on Google Fonts (Vollkorn, Nunito Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Vollkorn (700) - Classic serif with organic character
- Body: Nunito Sans (400-800) - Friendly, rounded sans with warmth
- Scale: 1.333 ratio for natural, pleasing hierarchy
- Leading: 1.7 for body, 1.3 for headings (comfortable, spacious)

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2.25rem, `space-2xl` 3.375rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-warm`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Hover states warm and brighten (like light on wood)
- Focus states use natural green outlines (forest connection)
- Transitions are smooth (400ms) like natural movement
- Active states deepen tone (like pressing into wood)
- Haptic quality to all interactions

Timing values: `--transition-base` 400ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA compliant with enhanced contrast
- Focus indicators clear and nature-inspired (3px forest green)
- Semantic HTML structure throughout
- Responsive breakpoints: 768px (tablet), 1024px (desktop)
- Large touch targets (min 44px) for accessibility

## Further guidance

### Visual Attributes

- Temperature: 7/10 (Warm) - Rich wood tones create inviting warmth
- Formality: 5/10 (Balanced) - Professional yet approachable and human
- Texture Density: Medium-High - Wood grain patterns throughout
- Material Authenticity: Natural, sustainable, handcrafted aesthetic

### Use Cases

- ✓ Hospitality and lodging businesses
- ✓ Artisan and craft marketplaces
- ✓ Sustainable and eco-friendly brands
- ✓ Home and interior design services
- ✓ Wellness and retreat centers
- ✓ Organic food and beverage brands

### Tags

- hospitality, creative, natural, sustainable, artisan, warm

## Not synced

Built from `style-191-wood-grain-natural.html`. No component bundle: the reference page's markup is not packaged as live components.
