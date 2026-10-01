Motorsport Club: Racing Heritage 60% + Collector's Network 25% + Track Day Management 15%.

**Blend:** Racing Heritage 60% + Collector's Network 25% + Track Day Management 15%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** premium, association  
**Perfect for:** Motorsport Clubs, Racing Associations, Car Enthusiasts

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Elite Motorsport Community”, “Upcoming Track Days”, “Grand Prix Experience”, “Classic Car Showcase”.
- Buttons are short verb phrases in Title Case: “All Tracks”, “Silverstone”, “Brands Hatch”, “Goodwood”.
- Navigation uses single nouns: “Track Days”, “Leaderboard”, “Garage”, “Members”, “Auctions”, “Heritage”.
- The reference page uses emoji as inline glyphs (🏎 🏁 ⚡ 🔥 💨 🚀); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `racing-red`, `gold-accent`, `event-status-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Arial Black", sans-serif
- `body` — "Segoe UI", Tahoma, Geneva, Verdana, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 2rem, `spacing-lg` 4rem, `spacing-xl` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-8` 8px, `radius-20` 20px, `radius-full` 50%.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-carbon`, `glow-red`, `glow-silver`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-116-motorsport-club.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-technical`.
