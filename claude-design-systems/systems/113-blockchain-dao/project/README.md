Blockchain DAO: Web3/Crypto 60% + Governance Platform 25% + Community Hub 15%.

**Blend:** Web3/Crypto 60% + Governance Platform 25% + Community Hub 15%  
**Temperature:** 4/10 (cool) · **Formality:** 5/10 · **Tags:** tech  
**Perfect for:** DAOs, Crypto Communities, Blockchain Projects

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Governance Proposals”, “Increase Developer Grant Budget to $500K”, “Implement Dynamic Fee Mechanism for Network Congestion”, “Establish Marketing & Community Growth Fund”.
- Buttons are short verb phrases in Title Case: “Active”, “Pending”, “Closed”, “Vote For”.
- Navigation uses single nouns: “Governance”, “Treasury”, “Community”, “Docs”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `bg-primary`, `electric-blue`, `electric-blue-light`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif

Faces are hosted on Google Fonts (Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">
```

The reference page names Roboto without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-20` 20px, `radius-full` 50%.
- Elevation: `glow-blue`, `glow-purple`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 19.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-113-blockchain-dao.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-main`.
