Japanese Wabi-Sabi: Wabi-Sabi Philosophy 55% + Zen Minimalism 25% + Organic Natural 20%.

**Blend:** Wabi-Sabi Philosophy 55% + Zen Minimalism 25% + Organic Natural 20%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** creative, hospitality  
**Perfect for:** Zen Centers, Japanese Culture, Minimalist Brands

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Featured Projects”, “Zen Garden Redesign”, “Natural Materials UI”, “Mindful Interface”.
- Buttons are short verb phrases in Title Case: “Send Message”, “Clear Form”, “Primary Action”, “Secondary Action”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Team”, “Settings”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-secondary`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Noto Sans JP", sans-serif
- `body` — "Work Sans", sans-serif

Faces are hosted on Google Fonts (Noto Sans JP, Work Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem, `spacing-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 350ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-153-japanese-wabi-sabi.html`. No component bundle: the reference page's markup is not packaged as live components.
