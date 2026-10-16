Dental Luxury: Dental Luxury 75% + Spa Calm 25%.

**Blend:** Dental Luxury 75% + Spa Calm 25%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** hospitality  
**Perfect for:** Dental Practices, Cosmetic Dentistry, Oral Healthcare

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Smile Transformation Dashboard”, “Recent Transformations”, “Treatment Journey”, “Smile Gallery”.
- Buttons are short verb phrases in Title Case: “Book Consultation”, “Book Consultation”.
- Navigation uses single nouns: “Dashboard”, “Patients”, “Treatments”, “Gallery”.
- The reference page uses emoji as inline glyphs (😊 ✨ 📅 🏆 😐 😄); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `soft-teal`, `warm-beige`, `charcoal`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Poppins, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Poppins); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-xxl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 12px, `radius-md` 16px, `radius-lg` 20px, `radius-full` 100px.
- Elevation: `shadow-subtle`, `shadow-moderate`, `shadow-elevated`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-smooth` 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `accent-teal-dark` 3.6:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `soft-teal` 2.5:1, `rose-gold` 1.5:1, `soft-gray` 1.7:1, `success-green` 1.9:1, `white` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-29-dental-luxury.html`. No component bundle: the reference page's markup is not packaged as live components.
