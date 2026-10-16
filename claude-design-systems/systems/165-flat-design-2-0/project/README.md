"Clean simplicity with depth hints, bold colors, geometric precision" This evolution of flat design embraces the clarity and minimalism of the original flat design movement while acknowledging that subtle depth cues improve usability. The addition of minimal shadows creates visual hierarchy without abandoning flat design principles. Bold colors serve as the primary design language, creating energy and guiding user attention through strategic contrast and vibrancy.

**Blend:** Flat Design 55% + Subtle Shadows 25% + Bold Color 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 6/10 · **Tags:** tech, professional  
**Perfect for:** SaaS Companies, Tech Startups, Modern Apps

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Style 165: Flat Design 2.0”, “Featured Projects”, “Analytics Dashboard”, “Design System”.
- Buttons are short verb phrases in Title Case: “View Project”, “Details”, “View Project”, “Details”.
- Navigation uses single nouns: “Dashboard”, “Products”, “Analytics”, “Settings”.
- The reference page uses emoji as inline glyphs (📊 🎨 🚀 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-primary`, `color-secondary`, `color-gray-50`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Poppins, -apple-system, BlinkMacSystemFont, sans-serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Poppins, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Poppins (Google Fonts)
- Usage: Headings (h1-h6), navigation, buttons, labels
- Weights: 400 (Regular), 600 (Semibold), 700 (Bold)
- Characteristics: Geometric, friendly, highly legible
- Rationale: Modern geometric sans-serif complements flat design aesthetic

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px, `space-3xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 6px, `radius-lg` 8px, `radius-xl` 12px, `radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- xs: 4px (tight inline elements)
- sm: 8px (button padding, small gaps)
- md: 16px (card padding, standard gaps)
- lg: 24px (section spacing)
- xl: 32px (major section breaks)
- 2xl: 48px (page-level spacing)

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 250ms ease-in-out, `--transition-slow` 350ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 11.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-primary` 3.5:1, `color-gray-600` 3.8:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-secondary` 2.6:1, `color-success` 1.9:1, `color-white` 1.0:1, `color-gray-300` 1.4:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- All text meets minimum contrast ratios (4.5:1 for body, 3:1 for large)
- Focus indicators visible and high contrast (3:1 minimum)
- Interactive elements minimum 44x44px touch target
- Color not sole indicator of meaning (icons + text)
- Form labels properly associated with inputs
- Semantic HTML structure for screen readers

## Component inventory

The reference page composes these patterns from the tokens above:

- xs: 4px (tight inline elements)
- sm: 8px (button padding, small gaps)
- md: 16px (card padding, standard gaps)
- lg: 24px (section spacing)
- xl: 32px (major section breaks)
- 2xl: 48px (page-level spacing)

## Further guidance

### Style Identity

- Name: Flat Design 2.0
- ID: 165
- Category: Digital UI & Illustration
- Temperature: 5/10 (Balanced - Professional yet approachable)
- Formality: 6/10 (Semi-formal - Modern business casual)
- Tags: tech, professional

### Primary

- Flat Design (55%)
- Clean, two-dimensional aesthetics without textures or gradients
- Focus on simplicity, usability, and information hierarchy
- Bold, vibrant color palette as primary visual language
- Geometric shapes with crisp edges and minimal decoration
- Implementation: Base layer for all components, solid colors, no texture

### Secondary

- Subtle Shadows (25%)
- Soft, barely-there drop shadows for depth perception
- Elevation system with 2-3 levels of shadow intensity
- Shadows serve functional purpose (hierarchy) not decoration
- Box-shadow values kept minimal (2-8px blur radius)
- Implementation: 0 2px 4px rgba(0,0,0,0.08) for cards, 0 4px 8px for elevated

### Tertiary

- Bold Color (20%)
- High-contrast color combinations for visual impact
- Strategic use of vibrant hues (blue, coral, mint) against neutrals
- Color as functional signifier (status, actions, categories)
- Maintains WCAG AA contrast ratios despite boldness
- Implementation: Primary actions in vibrant blue, accents in coral/mint

### Core Principles

1. Simplicity First: Remove unnecessary elements, focus on content
2. Functional Depth: Shadows serve usability, not decoration
3. Color as Language: Vibrant hues communicate meaning and hierarchy
4. Geometric Clarity: Clean lines, perfect circles, precise rectangles
5. Information Priority: Design serves content, never overshadows it

### Primary Palette

- Vibrant Blue (#3B82F6): Primary actions, links, interactive elements
- Coral Red (#FF6B6B): Alerts, destructive actions, hot metrics
- Mint Green (#51CF66): Success states, positive metrics, confirmations
- White (#FFFFFF): Backgrounds, card surfaces, clean space
- Charcoal (#2D3748): Text, headers, strong contrast elements

### Functional Mapping

- Primary Actions: Vibrant Blue (CTAs, navigation active states)
- Secondary Actions: Charcoal with transparency
- Success: Mint Green (confirmations, positive metrics)
- Warning: Coral Red (alerts, important notices)
- Background: White (main), very light gray (#F7FAFC) for contrast
- Text: Charcoal (primary), gray variants for hierarchy

- CONTRAST RATIOS (WCAG AA Compliant):
- Blue on White: 4.89:1 (AA compliant for large text, AAA for graphics)
- Charcoal on White: ~~11.58:1~~ (AAA compliant) — **measured 12.0:1**
- White on Blue: 4.89:1 (AA compliant)
- Coral on White: 3.68:1 (AA compliant for large text)
- Mint on White: 1.82:1 (Used only for decorative elements, not text)

### Body Font

- Inter (Google Fonts)
- Usage: Body text, descriptions, table content, form inputs
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold)
- Characteristics: Optimized for screens, excellent readability
- Rationale: Designed for UI, maintains clarity at all sizes

- TYPE SCALE (Major Third - 1.25 ratio):
- h1: 2.441rem (39.06px) - Page titles
- h2: 1.953rem (31.25px) - Section headers
- h3: 1.563rem (25px) - Subsection headers
- h4: 1.25rem (20px) - Card titles
- body: 1rem (16px) - Standard text
- small: 0.8rem (12.8px) - Captions, metadata

## Not synced

Built from `style-165-flat-design-2.html`. No component bundle: the reference page's markup is not packaged as live components.
