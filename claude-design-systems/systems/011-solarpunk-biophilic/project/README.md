Solarpunk Biophilic: Solarpunk 70% + Biophilic 30%.

**Blend:** Solarpunk 70% + Biophilic 30%  
**Temperature:** 7/10 (warm) · **Formality:** 5/10 · **Tags:** tech  
**Perfect for:** Sustainability Orgs, Environmental Groups, Green Tech

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Good morning”, “Annual Conference 2025”, “Membership Renewal”, “Q4 Financial Report”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Send Reminders”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Reports”.
- The reference page uses emoji as inline glyphs (☀); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `leaf-100`, `leaf-300`, `leaf-400`, `leaf-600`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Plus Jakarta Sans", sans-serif

Faces are hosted on Google Fonts (Plus Jakarta Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-10` 10px, `space-12` 12px, `space-16` 16px, `space-20` 20px, `space-24` 24px. Pad cards and sections from these steps only.
- Corners: `radius-12` 12px, `radius-20` 20px, `radius-full` 50px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `leaf-600` 3.2:1, `solar-500` 2.1:1, `sky-400` 2.1:1, `category-tag-bg` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-11-solarpunk-biophilic.html`. No component bundle: the reference page's markup is not packaged as live components.
