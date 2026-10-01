1960s Mod: 60s Mod 55% + Op Art 25% + Space Age 20%.

**Blend:** 60s Mod 55% + Op Art 25% + Space Age 20%  
**Temperature:** 6/10 (warm) · **Formality:** 4/10 · **Tags:** creative, media  
**Perfect for:** Retro Brands, Vintage Shops, Nostalgic Services

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “DASHBOARD”, “Conference 2025”, “Member Renewal”, “Q4 Financial”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Send Reminders”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `mod-orange`, `electric-blue`, `hot-pink`, `lime-green`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Righteous, cursive
- `body` — Rubik, sans-serif

Faces are hosted on Google Fonts (Righteous, Rubik); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Righteous&family=Rubik:wght@300;400;500;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `heading-3`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 21.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `mod-orange` 2.8:1, `mod-white` 1.0:1, `electric-blue` 3.1:1, `hot-pink` 3.6:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-178-1960s-mod.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--mod-gradient`, `--space-gradient`, `--op-art-shadow`.
