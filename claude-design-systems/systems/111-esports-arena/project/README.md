ESports Arena: Gaming/eSports 60% + Streaming Platform 25% + Tournament Management 15%.

**Blend:** Gaming/eSports 60% + Streaming Platform 25% + Tournament Management 15%  
**Temperature:** 8/10 (warm) · **Formality:** 3/10 · **Tags:** tech, media  
**Perfect for:** Esports Teams, Gaming Leagues, Tournament Platforms

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Championship Season 2025”, “🔥 Live Tournaments LIVE NOW”, “📺 Featured Stream”, “VALORANT Champions Tour - Grand Finals”.
- Buttons are short verb phrases in Title Case: “Sign In”, “Join Arena”, “View All”, “Watch Live”.
- Navigation uses single nouns: “Home”, “Tournaments”, “Streams”, “Rankings”, “Teams”.
- The reference page uses emoji as inline glyphs (⚡ 🔥 📺 👁 🎮 🏆); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `neon-purple`, `electric-cyan`, `accent-gold`, `accent-red`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Neon Purple: #B026FF, #8B1FD9
- Electric Cyan: #00F0FF, #00D9E8
- Dark Base: #0A0A0F, #141419, #1E1E28
- Accent Gold: #FFD700, #FFA500

## Typography

- `display` — "Segoe UI", system-ui, -apple-system, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-2`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-8` 8px, `radius-12` 12px, `radius-full` 50%.
- Elevation: `glow-small`, `glow-medium`, `glow-large`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 19.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Temperature

- 8 (High Energy)

### Formality

- 3 (Casual Gaming Culture)

## Not synced

Built from `style-111-esports-arena.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--anim-fast`, `--anim-normal`, `--anim-slow`.
