Japandi + Glass: Japandi 80% + Glassmorphism 20%.

**Blend:** Japandi 80% + Glassmorphism 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 6/10 · **Tags:** creative  
**Perfect for:** Wellness Brands, Design Studios, Lifestyle Products

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Welcome back”, “Annual Conference 2025”, “Membership Renewal”, “Q4 Financial Report”.
- Buttons are short verb phrases in Title Case: “View Details”, “Register”, “Send Reminders”, “View List”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Reports”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `sage-400`, `terracotta`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Outfit, "Noto Sans JP", system-ui, sans-serif
- `noto-sans-jp` — "Noto Sans JP", sans-serif

Faces are hosted on Google Fonts (Outfit, Noto Sans JP); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Noto+Sans+JP:wght@300;400;500&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-1` 0.25rem, `space-2` 0.5rem, `space-3` 0.75rem, `space-4` 1rem, `space-6` 1.5rem, `space-8` 2rem, `space-12` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 12px, `radius-lg` 16px, `radius-xl` 24px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `stone-50` 1.3:1, `stone-500` 3.6:1, `sage-500` 2.4:1, `terracotta` 2.5:1, `glass-white` 1.2:1, `glass-border` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-4-japandi-glass.html`. No component bundle: the reference page's markup is not packaged as live components.
