This interface merges the intellectual prestige of Dark Academia (80%) with Lobbi's corporate professionalism (20%) to create an association management platform that feels both established and strategic.

**Blend:** Dark Academia 80% + Lobbi Brand 20%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** premium, academic  
**Perfect for:** Universities, Libraries, Academic Institutions

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Lobbi”, “Key Performance Indicators”, “Active Initiatives”, “Annual Leadership Summit”.
- Buttons are short verb phrases in Title Case: “Dashboard”, “New Initiative”, “View All”, “Export Report”.
- The reference page uses emoji as inline glyphs (👥 📊 💰 🎯 📅 📚); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `antique-gold`, `parchment`, `oxford-blue`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`badge-success-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Playfair Display", Georgia, serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Playfair Display, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `library-brown` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Conclusion

- This Dark Academia × Lobbi Professional blend establishes Lobbi as the
- scholarly authority in association management - combining the intellectual
- prestige of classical institutions with the strategic clarity modern
- executives demand. The warm, refined aesthetic transforms routine data
- interactions into experiences of trusted counsel, positioning Lobbi not
- as software, but as a strategic partner with institutional wisdom.

## Not synced

Built from `style-9-dark-academia-lobbi.html`. No component bundle: the reference page's markup is not packaged as live components.
