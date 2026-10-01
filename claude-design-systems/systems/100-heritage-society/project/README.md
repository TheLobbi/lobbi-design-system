Heritage Society: Historical Preservation 60% + Genealogy Research 25% + Classical Typography 15%.

**Blend:** Historical Preservation 60% + Genealogy Research 25% + Classical Typography 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** premium, academic  
**Perfect for:** Heritage Societies, Genealogy Orgs, Historical Groups

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “The Heritage Society”, “Historical Archive Collection”, “The Johnson Family Letters”, “Civil War Daguerreotypes”.
- Buttons are short verb phrases in Title Case: “View Collection”, “Request Copy”, “View Gallery”, “High-Res Request”.
- Navigation uses single nouns: “Archives”, “Genealogy”, “Events”, “Preservation”, “Membership”, “Contact”.
- The reference page uses emoji as inline glyphs (📅 📄 🔒 ⏰ 📍 👥); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `parchment-dark`, `sepia-medium`, `brown-dark`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Playfair Display", serif
- `body` — "Crimson Text", serif
- `eb-garamond` — "EB Garamond", serif

Faces are hosted on Google Fonts (Playfair Display, Crimson Text, EB Garamond); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=EB+Garamond:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2.5rem, `spacing-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-3` 3px, `radius-4` 4px, `radius-20` 20px, `radius-full` 50%.
- Elevation: `shadow-soft`, `shadow-lifted`, `shadow-inset`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `parchment-light` 1.1:1, `parchment-medium` 1.1:1, `sepia-light` 1.7:1, `sepia-dark` 3.7:1, `gold-antique` 2.7:1, `gold-aged` 3.5:1, `category-tag-bg` 1.2:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-100-heritage-society.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-accent`, `--border-ornate`, `--border-subtle`.
