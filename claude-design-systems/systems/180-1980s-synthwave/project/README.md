1980s Synthwave: Synthwave 55% + Neon Glow 25% + Grid Horizon 20%.

**Blend:** Synthwave 55% + Neon Glow 25% + Grid Horizon 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 4/10 · **Tags:** creative, tech  
**Perfect for:** Retro Tech, Synthwave Brands, Gaming Companies

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “DASHBOARD”, “CONFERENCE 2025”, “MEMBER RENEWAL”, “Q4 FINANCIAL”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Send Reminders”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `neon-pink`, `electric-cyan`, `synthwave-purple`, `grid-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Orbitron, sans-serif
- `body` — Exo, sans-serif

Faces are hosted on Google Fonts (Orbitron, Exo); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Elevation: `neon-glow-pink`, `neon-glow-cyan`, `grid-shadow`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `deep-black` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-180-1980s-synthwave.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--sunset-gradient`, `--neon-gradient`, `--chrome-gradient`.
