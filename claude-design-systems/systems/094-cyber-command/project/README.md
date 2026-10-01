Cyber Command: Mission Control 60% + Cyberpunk 25% + Military Precision 15%.

**Blend:** Mission Control 60% + Cyberpunk 25% + Military Precision 15%  
**Temperature:** 2/10 (cool) · **Formality:** 9/10 · **Tags:** tech  
**Perfect for:** Cybersecurity Firms, Defense Tech, Security Operations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Cyber Command Center”.
- Buttons are short verb phrases in Title Case: “Acknowledge”.
- The reference page uses emoji as inline glyphs (⚠ ⚙ ⛶ ⚒ ⚑); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `cyber-cyan`, `cyber-magenta`, `cyber-blue`, `cyber-purple`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`status-critical`, `status-warning`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Consolas, Monaco, "Courier New", monospace

- Set titles in `display` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-5` 5px, `space-10` 10px, `space-12` 12px, `space-15` 15px, `space-20` 20px. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px, `radius-3` 3px, `radius-4` 4px, `radius-full` 50%.
- Elevation: `shadow-glow`, `shadow-glow-magenta`, `shadow-text`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-94-cyber-command.html`. No component bundle: the reference page's markup is not packaged as live components.
