Public Service Excellence: Government Civic 30% + Quiet Luxury 25% + Scandinavian Bento 20% + Material Design 15% + Light Academia 10%.

**Blend:** Government Civic 30% + Quiet Luxury 25% + Scandinavian Bento 20% + Material Design 15% + Light Academia 10%  
**Temperature:** 5/10 (balanced) · **Formality:** 9/10 · **Tags:** premium, professional, association  
**Perfect for:** Public Services, Government Excellence, Civic Leadership

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Excellence in Public Service”, “Service Programs”, “Service Performance Dashboard”, “Request Premium Service”.
- Buttons are short verb phrases in Title Case: “Learn More”, “Schedule”, “Learn More”, “Schedule”.
- Navigation uses single nouns: “Overview”, “Services”, “Programs”, “Contact”.
- The reference page uses emoji as inline glyphs (⚖ ⭐ 🏆 ⚡ 👥 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `service-navy`, `excellence-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, "Helvetica Neue", sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 20px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `elevation-1`, `elevation-2`, `elevation-3`, `elevation-4`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition` 250ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-123-public-service-excellence.html`. No component bundle: the reference page's markup is not packaged as live components.
