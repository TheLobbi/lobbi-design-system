Vaporwave Y2K: Vaporwave 70% + Y2K 30%.

**Blend:** Vaporwave 70% + Y2K 30%  
**Temperature:** 5/10 (balanced) · **Formality:** 3/10 · **Tags:** creative  
**Perfect for:** Creative Agencies, Entertainment Brands, Media Companies

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Dashboard”, “Annual Conference 2025”, “Membership Renewal”, “Q4 Financial Report”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Send Reminders”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Reports”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `vapor-pink`, `vapor-magenta`, `vapor-cyan`, `vapor-purple`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — VT323, monospace
- `body` — Outfit, sans-serif

Faces are hosted on Google Fonts (Outfit, VT323); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=VT323&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-20` 20px, `radius-24` 24px, `radius-full` 50px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-10-vaporwave-y2k.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--sunset-gradient`, `--sky-gradient`.
