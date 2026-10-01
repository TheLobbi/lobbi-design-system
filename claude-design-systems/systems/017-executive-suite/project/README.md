Executive Suite: Executive Suite 65% + Material Design 3 35%.

**Blend:** Executive Suite 65% + Material Design 3 35%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** professional  
**Perfect for:** Corporate Headquarters, C-Suite Services, Executive Firms

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Enterprise Analytics”, “Executive Dashboard”, “Q4 Strategic Review”, “Market Expansion Analysis”.
- Buttons are short verb phrases in Title Case: “View Report”, “Share”, “Open Project”, “Details”.
- Navigation uses single nouns: “Dashboard”, “Analytics”, “Reports”, “Team”, “Settings”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `surface-secondary`, `emerald`, `charcoal`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `warning`, `error`, `info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-1` 8px, `space-2` 16px, `space-3` 24px, `space-4` 32px, `space-5` 40px, `space-6` 48px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-smooth` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `surface-elevated` 1.0:1, `emerald` 3.6:1, `text-muted` 2.5:1, `success` 3.6:1, `warning` 2.1:1, `info` 3.5:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-17-executive-suite.html`. No component bundle: the reference page's markup is not packaged as live components.
