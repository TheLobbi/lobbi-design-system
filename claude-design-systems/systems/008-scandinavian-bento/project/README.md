Scandinavian Bento: Scandinavian 75% + Bento Grid 25%.

**Blend:** Scandinavian 75% + Bento Grid 25%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** professional  
**Perfect for:** SaaS Companies, Tech Startups, Modern Business

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Welcome back, Markus”, “Recent Projects”, “Design System Refresh”, “Mobile App Beta”.
- Buttons are short verb phrases in Title Case: “View”, “View”, “View”.
- Navigation uses single nouns: “Dashboard”, “Analytics”, “Projects”, “Team”, “Settings”, “Privacy Policy”.
- The reference page uses emoji as inline glyphs (📊 👥 💬 ⭐ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-light-birch`, `color-muted-terracotta`, `bento-trend-text`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Outfit); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 20px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 12px, `radius-md` 16px, `radius-lg` 20px, `radius-xl` 24px.
- Elevation: `shadow-subtle`, `shadow-soft`, `shadow-elevated`, `shadow-hover`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-muted-terracotta` 2.1:1, `color-stone-gray` 3.3:1, `category-tag-bg` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA contrast ratios (charcoal #2D2D2D on light backgrounds)
- Semantic HTML5 structure (header, nav, main, section, footer)
- Hover states with 200ms transitions for clarity
- Touch-friendly targets (min 44px height for interactive elements)
- Screen reader-friendly labels and ARIA landmarks

## Further guidance

### Design Rationale

- This interface establishes a warm, organized dashboard experience by strategically
- blending two complementary design philosophies:

- SCANDINAVIAN FOUNDATION (80% Dominance):

- Natural Material Palette: Warm white (#FAFAF8), light birch (#F5F0E6), and
- soft sage (#D4E2D4) evoke natural wood and organic textures
- Organic Geometry: 20-24px border radius creates soft, approachable curves
- reminiscent of natural forms and Scandinavian furniture design
- Generous Spacing: Breathing room between elements reflects the "lagom"
- principle (not too much, not too little - just right)
- Functional Minimalism: Clean typography (Outfit), minimal ornamentation,
- purpose-driven elements
- Natural Light Quality: Soft, diffused shadows (rgba with low opacity) simulate
- indirect Nordic daylight
- Hygge Warmth: Muted terracotta accents (#C9A87C) provide cozy touchpoints
- without overwhelming the neutral base

- BENTO BOX STRUCTURE (20% Enhancement):

- Asymmetric Grid: CSS Grid with varied cell sizes (1x1, 2x1, 1x2 patterns)
- creates visual interest while maintaining organizational clarity
- Apple-Inspired Cards: Elevated surfaces with subtle shadows compartmentalize
- information like bento compartments
- Modular Hierarchy: Each "box" functions independently yet contributes to
- cohesive whole - mirrors bento meal presentation philosophy
- Rounded Corners: 16-24px radius across all cards unifies the bento aesthetic
- Contained Information: Each grid cell presents focused, digestible data points

### Performance Optimizations

- Single embedded CSS file (no external requests)
- CSS Grid for efficient layout calculation
- Font preloading via Google Fonts API
- Minimal shadow complexity (single box-shadow per element)
- Hardware-accelerated transitions (transform, opacity)

### Target Experience

- Users should feel they've entered a thoughtfully designed workspace - organized
- like a premium Apple product, but warm and inviting like a Scandinavian home.
- Information is immediately accessible yet never overwhelming, with each interaction
- feeling intentional and refined.

### Brand Positioning

- This design supports wellness-focused, premium SaaS products targeting users who
- value both efficiency and aesthetic quality. The natural color palette reduces
- eye strain during extended sessions, while the organized Bento grid supports
- data-driven decision making without cognitive overload.

## Not synced

Built from `style-8-scandi-bento.html`. No component bundle: the reference page's markup is not packaged as live components.
