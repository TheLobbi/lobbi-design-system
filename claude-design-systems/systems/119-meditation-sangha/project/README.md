Meditation Sangha: Zen Minimalism 60% + Retreat Center 25% + Practice Tracking 15%.

**Blend:** Zen Minimalism 60% + Retreat Center 25% + Practice Tracking 15%  
**Temperature:** 8/10 (warm) · **Formality:** 4/10 · **Tags:** hospitality, creative  
**Perfect for:** Meditation Centers, Mindfulness Groups, Spiritual Communities

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Find Peace in Every Breath”, “Today's Practice”, “Upcoming Retreats”, “Mountain Silence Retreat”.
- Buttons are short verb phrases in Title Case: “Join Sangha”, “Start Practicing”, “Upcoming Retreats”, “5 Quick”.
- Navigation uses single nouns: “Practice”, “Retreats”, “Teachers”, “Community”, “Resources”, “Join Sangha”.
- The reference page uses emoji as inline glyphs (☸ 🧘 🔥 ⏱ 📿 ✨); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `sand-light`, `gold-accent`, `gold-soft`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `info`, `warning`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Georgia, serif
- `body` — -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-12` 12px, `radius-16` 16px, `radius-20` 20px, `radius-full` 50%.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `sage-primary` 2.7:1, `sage-light` 2.0:1, `sand-light` 1.0:1, `sand-medium` 1.3:1, `warning` 2.2:1, `social-icon-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-119-meditation-sangha.html`. No component bundle: the reference page's markup is not packaged as live components.
