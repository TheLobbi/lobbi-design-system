Victorian Modernist: Victorian Era 50% + Contemporary Minimalism 30% + Typography Focus 20%.

**Blend:** Victorian Era 50% + Contemporary Minimalism 30% + Typography Focus 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** premium, professional  
**Perfect for:** Heritage Brands, Classic Services, Traditional Business

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Victorian Modernist”, “Distinguished Members”, “Charlotte Whitmore”, “Edward Hartford”.
- Buttons are short verb phrases in Title Case: “View All”, “Profile”, “Profile”, “Profile”.
- Navigation uses single nouns: “Gallery”, “Collection”, “Society”, “Account”.
- The reference page uses emoji as inline glyphs (👔 💼 💎 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `teal-dark`, `bronze-accent`, `cream-primary`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Playfair Display", serif
- `body` — Lora, serif

Faces are hosted on Google Fonts (Playfair Display, Lora); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Lora:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2.5rem, `space-2xl` 4rem, `space-3xl` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-base` 0.3s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 6.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `bronze-accent` 3.7:1, `color-success` 4.3:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `bronze-light` 2.5:1, `cream-primary` 1.0:1, `cream-dark` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-143-victorian-modernist.html`. No component bundle: the reference page's markup is not packaged as live components.
