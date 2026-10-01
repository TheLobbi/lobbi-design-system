1950s Diner: 50s Americana 55% + Retro Diner 25% + Chrome Accent 20%.

**Blend:** 50s Americana 55% + Retro Diner 25% + Chrome Accent 20%  
**Temperature:** 7/10 (warm) · **Formality:** 4/10 · **Tags:** hospitality, creative  
**Perfect for:** Retro Diners, Vintage Restaurants, Nostalgic Venues

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Dashboard”, “Annual Conference”, “Membership Renewal”, “Q4 Financial Report”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Send Reminders”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `cherry-red`, `turquoise`, `cream`, `neon-pink`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Lobster, cursive
- `body` — "Roboto Slab", serif

Faces are hosted on Google Fonts (Lobster, Roboto Slab); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto+Slab:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-14` 14px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-12` 12px, `radius-20` 20px, `radius-24` 24px, `radius-full` 50px.
- Elevation: `neon-glow`, `retro-shadow`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `cream` 1.0:1, `white` 1.1:1, `neon-pink` 2.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-177-1950s-diner.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--chrome-gradient`, `--chrome-shine`.
