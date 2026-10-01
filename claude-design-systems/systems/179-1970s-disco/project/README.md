1970s Disco: Disco Era 55% + Groovy Typography 25% + Metallic Shine 20%.

**Blend:** Disco Era 55% + Groovy Typography 25% + Metallic Shine 20%  
**Temperature:** 7/10 (warm) · **Formality:** 3/10 · **Tags:** creative, media  
**Perfect for:** Entertainment Venues, Nightclubs, Retro Brands

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “DASHBOARD”, “CONFERENCE 2025”, “MEMBER RENEWAL”, “Q4 FINANCIAL”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Send Reminders”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `disco-gold`, `deep-purple`, `electric-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Bungee, cursive
- `body` — Outfit, sans-serif

Faces are hosted on Google Fonts (Bungee, Outfit); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee&family=Outfit:wght@300;400;500;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px, `space-40` 40px. Pad cards and sections from these steps only.
- Corners: `radius-30` 30px, `radius-full` 50px.
- Elevation: `neon-glow`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `disco-black` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-179-1970s-disco.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gold-gradient`, `--mirror-ball`, `--shimmer-gradient`, `--gold-shine`.
