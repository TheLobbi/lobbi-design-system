Green Energy: Sustainable Energy 60% + Data Dashboard 25% + Advocacy Platform 15%.

**Blend:** Sustainable Energy 60% + Data Dashboard 25% + Advocacy Platform 15%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** tech, association  
**Perfect for:** Green Energy Orgs, Renewable Tech, Climate Groups

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Powering a Sustainable Future Together”, “Live Energy Dashboard”, “Current Energy Mix - Renewable Sources”, “Carbon Footprint Tracker”.
- Buttons are short verb phrases in Title Case: “Join Us”, “Support This Bill”, “Learn More”, “Support This Bill”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Legislation”, “Impact”, “Join Us”.
- The reference page uses emoji as inline glyphs (🌱 ☀ 💨 💧 🌍 🌋); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `green-900`, `green-600`, `green-400`, `green-100`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `warning`, `danger`, `info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

Faces are hosted on Google Fonts (Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">
```

The reference page names Roboto without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-10` 10px, `radius-15` 15px, `radius-20` 20px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `green-600` 3.6:1, `green-400` 1.8:1, `blue-600` 3.9:1, `white` 1.0:1, `gray-300` 1.4:1, `gray-400` 2.5:1, `success` 2.4:1, `danger` 3.6:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-106-green-energy.html`. No component bundle: the reference page's markup is not packaged as live components.
