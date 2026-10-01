Art Deco Cyberpunk: Art Deco 60% + Cyberpunk 40%.

**Blend:** Art Deco 60% + Cyberpunk 40%  
**Temperature:** 3/10 (cool) · **Formality:** 7/10 · **Tags:** creative  
**Perfect for:** Tech Startups, Gaming Companies, Creative Agencies

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Command Center”, “Annual Gala 2025”, “Renewal Alert”, “Q4 Report”.
- Buttons are short verb phrases in Title Case: “Access”, “Register”, “Execute”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Reports”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `gold-300`, `gold-500`, `gold-700`, `champagne`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Orbitron, sans-serif
- `body` — Rajdhani, sans-serif

Faces are hosted on Google Fonts (Orbitron, Rajdhani); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `body`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-12` 12px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Elevation: `gold-glow`, `cyan-glow`, `magenta-glow`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-6-deco-cyberpunk.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--deco-gold`, `--cyber-glow`.
