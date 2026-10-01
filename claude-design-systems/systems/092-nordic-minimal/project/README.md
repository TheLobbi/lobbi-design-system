Nordic Minimal: Scandinavian 60% + Japanese Minimalism 25% + Swiss Grid 15%.

**Blend:** Scandinavian 60% + Japanese Minimalism 25% + Swiss Grid 15%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** creative, professional  
**Perfect for:** Design Agencies, Creative Studios, Modern Brands

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Welcome back, Anders”, “Recent Activity”, “Upcoming Events”, “Active Members”.
- Buttons are short verb phrases in Title Case: “New Member”.
- Navigation uses single nouns: “Dashboard”, “Dashboard”, “Members”, “Members”, “Events”, “Events”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-cream`, `color-wood-medium`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-info`, `color-error`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, "Helvetica Neue", Arial, sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap">
```

The reference page names Inter without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px, `space-2xl` 96px, `grid-gap` 24px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px, `radius-full` 9999px.
- Elevation: `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Mathematical precision: Calculated proportions
- Typographic hierarchy: Clear, structured information
- Grid-based layout: Invisible structure, visible harmony
- Helvetica-inspired: Clean, neutral, legible
- International style: Universal, objective, functional

## States and motion

Timing values: `--transition-fast` 150ms ease, `--transition-base` 250ms ease, `--transition-slow` 400ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-success` 3.4:1, `color-error` 3.4:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-white` 1.0:1, `color-gray-300` 1.9:1, `color-gray-400` 2.9:1, `color-warning` 2.2:1, `color-info` 3.0:1, `category-tag-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Primary (60%) - Scandinavian Design Principles

- Functional simplicity: Every element serves a purpose
- Light and airy: Maximized natural light, white backgrounds
- Natural materials: Wood tones, organic textures
- Hygge comfort: Warm, inviting, human-centered
- Democratic design: Accessible, unpretentious, egalitarian
- Understated elegance: Beauty through restraint

### Secondary (25%) - Japanese Minimalism

- Ma (間): Negative space as active design element
- Wabi-sabi: Beauty in imperfection and simplicity
- Kanso (簡素): Elimination of clutter
- Seijaku (静寂): Tranquility and calm
- Shizen (自然): Natural, effortless appearance
- Subtle asymmetry: Dynamic balance without symmetry

### Temperature

- (Balanced warm/cool)

### Formality

- (Professional yet approachable)

## Not synced

Built from `style-92-nordic-minimal.html`. No component bundle: the reference page's markup is not packaged as live components.
