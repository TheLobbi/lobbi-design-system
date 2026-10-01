━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Inviting warmth meets comfortable reading. This style embraces the organic qualities of natural materials and warm lighting to create a welcoming digital environment. Perfect for hospitality, creative industries, and lifestyle brands that value approachability and human connection.

**Blend:** Warm Light 55% + Natural Materials 25% + Soft Focus 20%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** hospitality, creative  
**Perfect for:** Wellness Brands, Natural Products, Holistic Services

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Warm Light Natural”, “Featured Experiences”, “Artisan Coffee Workshop”, “Wellness Retreat”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”, “Book Experience”, “View Calendar”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Team”, “Settings”.
- The reference page uses emoji as inline glyphs (☕ 🌿 🎨 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-cream`, `color-primary`, `color-sand`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Cream/Beige: Warmth, comfort, naturalness
- Warm Gray: Balance, sophistication, groundedness
- Terracotta: Earthiness, creativity, heritage
- Sage: Growth, wellness, harmony

## Typography

- `display` — "Source Serif Pro", Georgia, serif
- `body` — "Source Sans Pro", -apple-system, sans-serif

Faces are hosted on Google Fonts (Source Serif Pro, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&family=Source+Sans+Pro:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ├─ Headings: Source Serif Pro (warmth, character)
- Body: Source Sans Pro (clarity, readability)

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.5rem, `radius-md` 0.75rem, `radius-lg` 1rem, `radius-xl` 1.5rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Component: Warm Light (55%)
- ├─ Warm cream backgrounds (#FBF8F3)
- ├─ Soft beige tones for comfort
- ├─ Reduced color temperature
- Inviting, cozy atmosphere

- Secondary Component: Natural Materials (25%)
- ├─ Earth-inspired color palette
- ├─ Organic texture suggestions
- ├─ Terracotta and clay accents
- Connection to natural world

- Tertiary Component: Soft Focus (20%)
- ├─ Gentle shadows and highlights
- ├─ Reduced contrast for comfort
- ├─ Smooth transitions
- Easy on the eyes for long reading

## States and motion

- ├─ Temperature: 7/10 (Warm, inviting)
- ├─ Formality: 6/10 (Professional yet approachable)
- ├─ Energy: Calm, comfortable, grounded
- Mood: Welcoming, organic, trustworthy

Timing values: `--transition-fast` 150ms ease-out, `--transition-base` 250ms ease-out, `--transition-slow` 350ms ease-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ✓ WCAG 2.1 AA compliant
- ✓ Contrast ratio 4.5:1 minimum for text
- ✓ Warm tones optimized for readability
- ✓ Focus states with warm accent colors
- ✓ Touch targets 44x44px minimum
- ✓ Reduced eye strain for extended reading

## Further guidance

### Use Cases

- ├─ Hospitality and boutique hotels
- ├─ Creative agencies and studios
- ├─ Lifestyle and wellness brands
- Food and beverage services

### Technical Implementation

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Serif headings for warmth and character
- Sans-serif body for readability
- Organic border radius values
- Gentle shadow system
- Performance optimized (<55kb)

### Breakpoints

- ├─ Mobile: < 768px
- ├─ Tablet: 768px - 1024px
- Desktop: > 1024px

## Not synced

Built from `style-202-warm-light-natural.html`. No component bundle: the reference page's markup is not packaged as live components.
