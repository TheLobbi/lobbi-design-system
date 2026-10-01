Luxury Concierge: Five-Star Hospitality 60% + Art Deco 25% + Editorial 15%.

**Blend:** Five-Star Hospitality 60% + Art Deco 25% + Editorial 15%  
**Temperature:** 6/10 (warm) · **Formality:** 9/10 · **Tags:** premium, hospitality  
**Perfect for:** Concierge Services, Luxury Lifestyle, VIP Services

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Le Concierge”, “Good Evening, Alexander”, “New Concierge Request”, “Quick Services”.
- Buttons are short verb phrases in Title Case: “🔔 3”, “✉ 5”, “Save as Draft”, “Submit Request ➔”.
- Navigation uses single nouns: “Dashboard”, “Services”, “Events”, “Benefits”, “My Requests”, “Profile”.
- The reference page uses emoji as inline glyphs (🔔 ✉ ⚙ 🍴 ✈ 🎫); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `cream-lightest`, `gold-light`, `gold-dark`, `burgundy-light`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Cinzel, "Times New Roman", serif
- `body` — Montserrat, "Helvetica Neue", sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `body`, `label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 2px.
- Elevation: `shadow-soft`, `shadow-medium`, `shadow-strong`, `shadow-gold`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-93-luxury-concierge.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--border-gold`.
