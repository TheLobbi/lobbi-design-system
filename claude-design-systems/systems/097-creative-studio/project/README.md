Creative Studio: Design Agency 60% + Memphis 25% + Bauhaus 15%.

**Blend:** Design Agency 60% + Memphis 25% + Bauhaus 15%  
**Temperature:** 6/10 (warm) · **Formality:** 4/10 · **Tags:** creative  
**Perfect for:** Design Studios, Creative Agencies, Branding Firms

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Where Ideas Come to Life”, “Featured Projects”, “Urban Flow”, “Pixel Perfect”.
- Buttons are short verb phrases in Title Case: “All Assets”, “Icons”, “Templates”, “Fonts”.
- Navigation uses single nouns: “Projects”, “Collaborate”, “Assets”, “Inspiration”, “Team”.
- The reference page uses emoji as inline glyphs (💬 🎨 📄 ✏ 🔲 💼); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `primary-red`, `primary-blue`, `primary-yellow`, `memphis-pink`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success`, `warning`, `info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Arial Black", sans-serif
- `body` — "Helvetica Neue", Arial, sans-serif

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 2rem, `space-lg` 4rem, `space-xl` 6rem, `grid-gap` 2rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 4px.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 12.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `primary-yellow` 1.6:1, `memphis-pink` 2.7:1, `white` 1.0:1, `gray-medium` 1.6:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-97-creative-studio.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-accent`.
