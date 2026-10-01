Law Firm Premium: Law Firm Traditional 70% + Modern Conservative 30%.

**Blend:** Law Firm Traditional 70% + Modern Conservative 30%  
**Temperature:** 4/10 (cool) · **Formality:** 10/10 · **Tags:** premium, professional  
**Perfect for:** Law Firms, Legal Services, Attorney Associations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Executive Dashboard”, “Annual General Meeting”, “Governance Review”, “Financial Audit”.
- Buttons are short verb phrases in Title Case: “View Agenda”, “Register”, “Review Documents”, “Schedule Vote”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Governance”, “Finance”, “Reports”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `burgundy-primary`, `ivory-50`, `navy-primary`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Libre Baskerville", Georgia, serif
- `body` — "Source Sans Pro", sans-serif
- `eb-garamond` — "EB Garamond", serif

Faces are hosted on Google Fonts (Libre Baskerville, EB Garamond, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=EB+Garamond:wght@400;500;600&family=Source+Sans+Pro:wght@400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `ivory-50` 1.0:1, `category-tag-bg` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-18-law-firm-premium.html`. No component bundle: the reference page's markup is not packaged as live components.
