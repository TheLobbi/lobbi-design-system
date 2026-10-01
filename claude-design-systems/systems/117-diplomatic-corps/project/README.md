Diplomatic Corps: Government Formal 60% + International Relations 25% + Secure Communications 15%.

**Blend:** Government Formal 60% + International Relations 25% + Secure Communications 15%  
**Temperature:** 4/10 (cool) · **Formality:** 10/10 · **Tags:** professional  
**Perfect for:** Diplomatic Corps, Foreign Service, International Relations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “DIPLOMATIC CORPS NETWORK”, “📊 Mission Status”, “🔐 Secure Messages ENCRYPTED”, “📜 Recent Protocols”.
- Buttons are short verb phrases in Title Case: “🔔 Alerts (3)”, “⚙ Settings”, “🚪 Logout”, “Mission Directory”.
- Navigation uses single nouns: “Dashboard”, “Mission Directory”, “Protocols”, “Events Calendar”, “Secure Comms”, “Diplomatic Pouch”.
- The reference page uses emoji as inline glyphs (⚜ 🔔 ⚙ 🚪 📊 🔐); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-primary`, `gold-primary`, `gold-light`, `cream-primary`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`red-alert`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Garamond, serif
- `body` — "Palatino Linotype", "Book Antiqua", Palatino, serif

- Set titles in `display` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.25rem, `spacing-sm` 0.5rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-3` 3px, `radius-4` 4px, `radius-8` 8px, `radius-full` 50%.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-117-diplomatic-corps.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-accent`.
