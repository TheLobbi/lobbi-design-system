Democratic Transparency: Government Civic 35% + Editorial Swiss 25% + Biophilic Design 20% + Aurora UI 20%.

**Blend:** Government Civic 35% + Editorial Swiss 25% + Biophilic Design 20% + Aurora UI 20%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** professional, association  
**Perfect for:** Government Agencies, Public Transparency, Civic Initiatives

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Transparency Initiative 2024”, “Recent Publications”, “Open Data Catalog”, “Freedom of Information Request”.
- Buttons are short verb phrases in Title Case: “View Report”, “Download PDF”, “View Report”, “Download PDF”.
- Navigation uses single nouns: “Dashboard”, “Reports”, “Data Sets”, “API”.
- The reference page uses emoji as inline glyphs (📊 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `democratic-blue`, `democratic-blue-light`, `transparency-green`, `aurora-purple`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition` 200ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-122-democratic-transparency.html`. No component bundle: the reference page's markup is not packaged as live components.
