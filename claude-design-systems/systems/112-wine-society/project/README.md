Wine Society: Vineyard Estate 60% + Sommelier Certification 25% + Collector's Club 15%.

**Blend:** Vineyard Estate 60% + Sommelier Certification 25% + Collector's Club 15%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium, hospitality  
**Perfect for:** Wine Clubs, Sommelier Societies, Collector Groups

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Cultivating Wine Excellence”, “Wine Collection”, “Tasting Events”, “December 2025”.
- Buttons are short verb phrases in Title Case: “+ Add Bottle”, “Import from Excel”, “Red Wines (198)”, “White Wines (112)”.
- Navigation uses single nouns: “My Collection”, “Events”, “Certification”, “Cellar”, “Auctions”.
- The reference page uses emoji as inline glyphs (📞 ✉ 🍷 📍 📅 🔢); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `burgundy-dark`, `gold-dark`, `gold-light`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Garamond, Georgia, serif
- `body` — Arial, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-4-8` 4.8px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-10` 10px, `radius-15` 15px, `radius-full` 50%.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `gold-dark` 2.9:1, `gold-medium` 1.9:1, `gold-light` 1.5:1, `cream-dark` 1.1:1, `cream-light` 1.1:1, `category-tag-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-112-wine-society.html`. No component bundle: the reference page's markup is not packaged as live components.
