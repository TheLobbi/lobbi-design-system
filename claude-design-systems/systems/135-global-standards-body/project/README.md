Global Standards Body: International Professional 30% + Diplomatic Corps 25% + Swiss Typography 20% + Corporate Minimalism 15% + Glassmorphism 10%.

**Blend:** International Professional 30% + Diplomatic Corps 25% + Swiss Typography 20% + Corporate Minimalism 15% + Glassmorphism 10%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** premium, professional, association  
**Perfect for:** Global Standards, International Bodies, Regulatory Authorities

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “International Standards Organization”, “Regional Representation”, “Americas”, “EMEA”.
- Buttons are short verb phrases in Title Case: “Submit for Review →”, “Save Draft 💾”, “Clear Form”.
- Navigation uses single nouns: “Standards”, “Members”, “Compliance”, “Resources”.
- The reference page uses emoji as inline glyphs (🌐 🏛 📋 ✅ 🌍 🌎); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `diplomatic-white`, `international-blue`, `standards-gold`, `regulatory-navy`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`alert-red`, `info-cyan`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`, `label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-1` 8px, `space-2` 13px, `space-3` 21px, `space-4` 34px, `space-5` 55px, `space-6` 89px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px.
- Elevation: `glass-shadow`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `compliance-green` 3.0:1, `alert-red` 4.4:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `pending-amber` 2.1:1, `text-tertiary` 2.0:1, `surface-elevated` 1.0:1, `glass-bg` 1.0:1, `glass-border` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-135-global-standards-body.html`. No component bundle: the reference page's markup is not packaged as live components.
