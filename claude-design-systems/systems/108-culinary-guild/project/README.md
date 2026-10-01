Culinary Guild: Fine Dining 60% + Professional Certification 25% + Recipe Archive 15%.

**Blend:** Fine Dining 60% + Professional Certification 25% + Recipe Archive 15%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** hospitality, association  
**Perfect for:** Culinary Institutes, Chef Associations, Food Guilds

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Culinary Guild”, “Elevate Culinary Mastery”, “Master Chef Profiles”, “Chef Auguste Beaumont”.
- Buttons are short verb phrases in Title Case: “All Recipes”, “French Classical”, “Italian”, “Asian Fusion”.
- Navigation uses single nouns: “Master Chefs”, “Competitions”, “Certifications”, “Recipe Library”, “Knowledge Hub”.
- The reference page uses emoji as inline glyphs (⭐ 👨 🍳 🏆 🎓 👩); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `copper-primary`, `green-deep`, `gold-light`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Didot, "Bodoni MT", "Playfair Display", serif
- `body` — Georgia, Garamond, serif

Faces are hosted on Google Fonts (Playfair Display); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap">
```

The reference page names Playfair Display without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-4-8` 4.8px, `space-8` 8px, `space-12-8` 12.8px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-10` 10px, `radius-12` 12px, `radius-20` 20px, `radius-full` 50%.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `copper-primary` 3.4:1, `copper-dark` 4.3:1, `text-light` 3.8:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `cream-light` 1.1:1, `cream-medium` 1.1:1, `gold-accent` 1.9:1, `gold-light` 2.0:1, `recipe-difficulty-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-108-culinary-guild.html`. No component bundle: the reference page's markup is not packaged as live components.
