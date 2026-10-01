"Elegant simplicity, continuous lines, artistic restraint" Line art minimal celebrates the power of restraint. Every line has purpose, every element breathes. Drawing inspiration from continuous line drawing techniques, this style uses delicate strokes to define spaces and guide attention. The monochromatic base with a single accent color creates sophistication, while editorial typography provides gravitas. This is design as curation - carefully selecting what to include, and more importantly, what to leave out.

**Blend:** Line Illustration 55% + Minimal Design 25% + Editorial Clean 20%  
**Temperature:** 4/10 (cool) · **Formality:** 7/10 · **Tags:** creative, professional  
**Perfect for:** Design Agencies, Creative Studios, Minimal Brands

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Style 168: Line Art Minimal”, “Featured Projects”, “Analytics Dashboard”, “Design System”.
- Buttons are short verb phrases in Title Case: “View Project”, “Details”, “View Project”, “Details”.
- Navigation uses single nouns: “Dashboard”, “Products”, “Analytics”, “Settings”.
- The reference page uses emoji as inline glyphs (📊 🎨 🚀 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-accent`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- PRIMARY PALETTE (Monochromatic Base):
- Pure Black (#000000): Text, lines, primary elements
- Pure White (#FFFFFF): Backgrounds, negative space
- Charcoal (#1A1A1A): Softer alternative to pure black
- Light Gray (#F5F5F5): Subtle backgrounds, dividers
- Medium Gray (#999999): Secondary text, deemphasized elements

- ACCENT COLOR (Choose ONE per implementation):
- Option A - Coral: #FF6B6B (warm, approachable, creative)
- Option B - Teal: #14B8A6 (cool, professional, refined)

- For this implementation, we use TEAL as the accent color.

## Typography

- `display` — "Cormorant Garamond", Georgia, serif
- `body` — Karla, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Karla); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Karla:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Cormorant Garamond (Google Fonts)
- Usage: Headings (h1-h6), featured quotes, emphasized text
- Weights: 400 (Regular), 600 (Semibold), 700 (Bold)
- Characteristics: Elegant serif, high contrast strokes, editorial feel
- Rationale: Classic serif provides sophistication and artistic quality,
- complements line art aesthetic with its flowing forms

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px, `space-2xl` 96px. Pad cards and sections from these steps only.
- Corners: `radius-full` 50%.

- Line art minimal relies on white space to breathe. Spacing is larger
- than typical UI patterns to create editorial feel.

## States and motion

- Transitions are slow and elegant (400-600ms)
- Easing: ease-in-out for smooth, refined feel
- No bouncy or playful effects
- Transforms used sparingly

Timing values: `--transition-base` 400ms ease-in-out, `--transition-slow` 600ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 21.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- Black on white text: 21:1 (exceeds AAA requirements)
- All interactive elements minimum 44x44px
- Focus indicators high contrast and visible
- Color never sole indicator (lines, text, icons used)
- Form labels clearly associated
- Semantic HTML structure
- Skip links for navigation

## Component inventory

The reference page composes these patterns from the tokens above:

- xs: 8px (inline elements)
- sm: 16px (small gaps)
- md: 24px (standard gaps)
- lg: 40px (section spacing)
- xl: 64px (major section breaks)
- 2xl: 96px (page-level spacing)

## Further guidance

### Style Identity

- Name: Line Art Minimal
- ID: 168
- Category: Digital UI & Illustration
- Temperature: 4/10 (Cool - Sophisticated and restrained)
- Formality: 7/10 (Formal - Editorial and professional)
- Tags: creative, professional

### Primary

- Line Illustration (55%)
- Continuous line drawing technique
- Minimalist strokes that suggest rather than define
- Elegant, flowing borders and dividers
- Decorative line elements as primary visual language
- Implementation: CSS borders, pseudo-elements for line art, SVG patterns
- for decorative elements, thin stroke weights (1-2px)

### Secondary

- Minimal Design (25%)
- Generous white space for breathing room
- Restrained use of color (primarily black, white, single accent)
- Typography as primary visual hierarchy
- Removal of unnecessary elements
- Implementation: Clean layouts, ample padding/margins, negative space
- as design element, simple geometric shapes

### Tertiary

- Editorial Clean (20%)
- Magazine/editorial layout inspiration
- Strong typographic hierarchy
- Grid-based precision
- Sophisticated, cultured aesthetic
- Implementation: Classic serif for headings, clean sans for body,
- precise alignment, balanced compositions

### Core Principles

1. Restraint Over Abundance: Less is genuinely more
2. Line as Language: Strokes communicate hierarchy and flow
3. White Space as Element: Negative space is design material
4. Typographic Sophistication: Letters carry aesthetic weight
5. Single Accent Color: One color speaks louder than many

### Color Philosophy

- Black and white create drama and clarity
- Single accent color provides focal points sparingly
- Gray used only for deemphasized content
- No gradients - flat colors only
- Transparency used minimally for subtle overlays

### Functional Mapping

- Primary Actions: Black text/border with teal accent fill on hover
- Secondary Actions: Teal outline, black text
- Success: Teal (the accent color multipurpose)
- Warning: Black with distinctive pattern (not color-coded)
- Background: Pure white
- Text: Black for primary, medium gray for secondary
- Decorative Lines: Black at 1px weight

- CONTRAST RATIOS (WCAG AAA Compliant):
- Black on White: 21:1 (AAA compliant, maximum contrast)
- Charcoal on White: 15.3:1 (AAA compliant)
- Teal on White: 3.98:1 (AA compliant for large text)
- White on Teal: 3.98:1 (AA compliant for large text)
- Medium Gray on White: 5.8:1 (AA compliant)

### Body Font

- Karla (Google Fonts)
- Usage: Body text, navigation, buttons, labels, UI elements
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold)
- Characteristics: Geometric sans-serif, clean, highly legible
- Rationale: Simple, unfussy sans provides clarity for functional text,
- contrasts elegantly with decorative serif headers

- TYPE SCALE (Perfect Fifth - 1.5 ratio):
- h1: 3.052rem (48.8px) - Large, dramatic page titles
- h2: 2.441rem (39px) - Section headers
- h3: 1.953rem (31.2px) - Subsection headers
- h4: 1.563rem (25px) - Card titles
- h5: 1.25rem (20px) - Small headers
- body: 1rem (16px) - Standard text
- small: 0.8rem (12.8px) - Captions, fine print

## Not synced

Built from `style-168-line-art-minimal.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--line-thin`, `--line-medium`.
