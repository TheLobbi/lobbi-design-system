Music Conservatory: Classical Music 60% + Academic Institution 25% + Event Management 15%.

**Blend:** Classical Music 60% + Academic Institution 25% + Event Management 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** academic, creative  
**Perfect for:** Music Schools, Conservatories, Performance Academies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “MAESTRO CONSERVATORY”, “Welcome to Your Musical Journey”, “Performance Calendar”, “December 2025”.
- Buttons are short verb phrases in Title Case: “View Full Schedule”, “My Reservations”, “Book”, “Book”.
- Navigation uses single nouns: “Dashboard”, “Performance Calendar”, “Practice Rooms”, “Recital Archive”, “Faculty”, “Curriculum”.
- The reference page uses emoji as inline glyphs (♫ ♪ 📅 🎭 ⏱ ♯); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `burgundy-primary`, `gold-accent`, `gold-light`, `ivory-primary`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Cinzel, "Trajan Pro", serif
- `body` — "Cormorant Garamond", "Playfair Display", Georgia, serif

Faces are hosted on Google Fonts (Cinzel, Cormorant Garamond, Playfair Display); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel&family=Cormorant+Garamond&family=Playfair+Display&display=swap">
```

The reference page names Cinzel, Cormorant Garamond, Playfair Display without loading them, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2.5rem, `spacing-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-8` 8px, `radius-10` 10px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-smooth` all 0.3s cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `gold-accent` 2.0:1, `gold-light` 1.2:1, `gold-bright` 1.8:1, `ivory-primary` 1.2:1, `ivory-warm` 1.1:1, `user-profile-bg` 1.2:1, `book-btn-bg` 1.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-105-music-conservatory.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-accent`.
