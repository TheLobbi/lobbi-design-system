Minimal Wellness: Zen Minimalism 60% + Wellness Design 40%.

**Blend:** Zen Minimalism 60% + Wellness Design 40%  
**Temperature:** 8/10 (warm) · **Formality:** 5/10 · **Tags:** hospitality, creative  
**Perfect for:** Wellness Centers, Spas, Mindfulness Brands

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Your Wellness Journey”, “Featured Wellness Programs”, “Your Recent Activities”, “Schedule a Coaching Session”.
- Buttons are short verb phrases in Title Case: “Start a Session”, “Browse Programs”, “all”, “meditation”.
- Navigation uses single nouns: “Dashboard”, “Programs”, “Community”, “Resources”, “Profile”.
- The reference page uses emoji as inline glyphs (🌱 🏃 🧘 😴 💧 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `sage-light`, `sage-dark`, `terracotta`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `warning`, `error`, `info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Quicksand, "Segoe UI", system-ui, sans-serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Quicksand, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem, `space-2xl` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 16px, `radius-lg` 24px, `radius-full` 999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-focus`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 400ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 600ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `bg-secondary` 1.1:1, `sage-primary` 2.6:1, `terracotta` 1.8:1, `text-tertiary` 2.5:1, `text-on-sage` 1.1:1, `success` 2.1:1, `warning` 2.0:1, `error` 2.9:1, `info` 2.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-136-minimal-wellness.html`. No component bundle: the reference page's markup is not packaged as live components.
