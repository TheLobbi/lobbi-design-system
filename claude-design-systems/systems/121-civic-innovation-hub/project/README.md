Civic Innovation Hub: Government Civic 40% + Startup Accelerator 25% + Swiss Typography 20% + Glassmorphism 15%.

**Blend:** Government Civic 40% + Startup Accelerator 25% + Swiss Typography 20% + Glassmorphism 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** professional, association  
**Perfect for:** Innovation Hubs, Civic Tech, Government Innovation

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Innovation Initiatives”, “Citizen Services Dashboard”, “Submit Service Request”, “About”.
- Buttons are short verb phrases in Title Case: “View Details”, “Reports”, “View Details”, “Reports”.
- Navigation uses single nouns: “Dashboard”, “Initiatives”, “Services”, “Resources”.
- The reference page uses emoji as inline glyphs (🏛 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `civic-white`, `innovation-blue`, `startup-coral`, `text-primary`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 12px, `radius-lg` 16px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition` 200ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-121-civic-innovation-hub.html`. No component bundle: the reference page's markup is not packaged as live components.
