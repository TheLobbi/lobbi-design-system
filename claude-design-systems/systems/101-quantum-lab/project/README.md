Quantum Lab: Scientific Research 60% + Futuristic Tech 25% + Academic Precision 15%.

**Blend:** Scientific Research 60% + Futuristic Tech 25% + Academic Precision 15%  
**Temperature:** 3/10 (cool) · **Formality:** 8/10 · **Tags:** tech, academic  
**Perfect for:** Quantum Labs, Advanced Research, Science Tech

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Quantum Lab Interface”, “🔬 Active Experiments”, “Quantum Entanglement Coherence”, “Protein Folding Analysis”.
- Buttons are short verb phrases in Title Case: “Export Data”, “New Experiment”, “🔬 All Experiments”, “⚡ Quantum”.
- The reference page uses emoji as inline glyphs (🔬 📊 📝 👥 ⚡ 🧬); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `quantum-purple-deep`, `quantum-purple-light`, `quantum-blue-electric`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`quantum-success`, `quantum-warning`, `quantum-danger`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif

Faces are hosted on Google Fonts (Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">
```

The reference page names Roboto without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.25rem, `spacing-sm` 0.5rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-20` 20px, `radius-full` 50%.
- Elevation: `shadow-1`, `shadow-2`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `quantum-purple-light` 4.1:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.

## Not synced

Built from `style-101-quantum-lab.html`. No component bundle: the reference page's markup is not packaged as live components.
