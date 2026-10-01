Swiss + Aurora: Swiss 80% + Aurora UI 20%.

**Blend:** Swiss 80% + Aurora UI 20%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** professional  
**Perfect for:** Consulting Firms, Professional Services, Corporate

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Dashboard Overview”, “Recent Activity”, “Quick Actions”.
- Buttons are short verb phrases in Title Case: “Export”, “+ New Event”, “View All”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Communications”, “Reports”.
- The reference page uses emoji as inline glyphs (✉ ★); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `gray-800`, `aurora-1`, `aurora-2`, `aurora-3`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-16` 16px, `space-24` 24px, `space-32` 32px, `space-40` 40px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-full` 50px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `white` 1.0:1, `gray-400` 2.4:1, `aurora-1` 2.4:1, `aurora-2` 2.3:1, `aurora-3` 4.1:1, `aurora-4` 3.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-5-swiss-aurora.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--aurora-gradient`, `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-8`, `--space-10`, `--space-12`.
