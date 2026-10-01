Fintech Modern: Fintech Modern 70% + Gradient Mesh 30%.

**Blend:** Fintech Modern 70% + Gradient Mesh 30%  
**Temperature:** 4/10 (cool) · **Formality:** 7/10 · **Tags:** tech, professional  
**Perfect for:** Digital Banks, Payment Platforms, Investment Apps

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Financial Overview”, “Recent Activity”, “Payment Processing”, “Account Analytics”.
- Buttons are short verb phrases in Title Case: “New Transaction”, “All”, “Completed”, “Pending”.
- Navigation uses single nouns: “Dashboard”, “Transactions”, “Analytics”, “Reports”, “Settings”, “Privacy Policy”.
- The reference page uses emoji as inline glyphs (👥 📊 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `purple-900`, `purple-500`, `blue-600`, `slate-50`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-500`, `success-600`, `error-500`, `error-600`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Plus Jakarta Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px, `space-3xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 12px, `radius-lg` 16px, `radius-xl` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 500ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `blue-600` 3.5:1, `success-600` 3.6:1, `card-badge-text` 3.0:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-22-fintech-modern.html`. No component bundle: the reference page's markup is not packaged as live components.
