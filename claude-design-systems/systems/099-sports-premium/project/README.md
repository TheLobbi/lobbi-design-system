Sports Premium: Athletic Excellence 60% + Broadcast Media 25% + Premium Membership 15%.

**Blend:** Athletic Excellence 60% + Broadcast Media 25% + Premium Membership 15%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** media, premium  
**Perfect for:** Sports Media, Athletic Brands, Premium Sports

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Live Games”, “Top Highlights”, “LeBron's Game-Winning Three Pointer”, “Incredible Save by Alisson Becker”.
- Buttons are short verb phrases in Title Case: “Upgrade to VIP”.
- Navigation uses single nouns: “Live”, “Highlights”, “Athletes”, “Schedule”, “Standings”, “Upgrade to VIP”.
- The reference page uses emoji as inline glyphs (⚡ 🏀 ⭐ ⚽ 🦁 ▶); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `electric-blue`, `victory-orange`, `athletic-green`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, system-ui, sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap">
```

The reference page names Inter without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 0.375rem, `border-radius-md` 0.5rem, `border-radius-lg` 0.75rem, `border-radius-xl` 1rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 19.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `primary-dark` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-99-sports-premium.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--broadcast-gradient`, `--live-gradient`, `--premium-gradient`, `--vip-gradient`.
