Luxury Hotel: Luxury Hospitality 75% + Minimalist Japanese 25%.

**Blend:** Luxury Hospitality 75% + Minimalist Japanese 25%  
**Temperature:** 6/10 (warm) · **Formality:** 8/10 · **Tags:** premium, hospitality  
**Perfect for:** Luxury Hotels, Premium Resorts, 5-Star Hospitality

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Welcome to your sanctuary”, “Signature Annual Gathering”, “Membership Renewal Season”, “Quarterly Performance Review”.
- Buttons are short verb phrases in Title Case: “Discover More”, “Reserve”, “Send Communications”, “Review List”.
- Navigation uses single nouns: “Overview”, “Members”, “Experiences”, “Reservations”, “Concierge”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `cream-white`, `soft-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — Jost, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Jost, Cormorant Garamond); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500&family=Cormorant+Garamond:wght@300;400&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `caption`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem, `space-2xl` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-soft` 2px, `radius-gentle` 4px, `radius-organic` 8px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-19-luxury-hotel.html`. No component bundle: the reference page's markup is not packaged as live components.
