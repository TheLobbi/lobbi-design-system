Arctic Aurora: Extreme Minimal 55% + Aurora Borealis 30% + Ice Crystal 15%.

**Blend:** Extreme Minimal 55% + Aurora Borealis 30% + Ice Crystal 15%  
**Temperature:** 2/10 (cool) · **Formality:** 6/10 · **Tags:** creative, hospitality  
**Perfect for:** Nordic Brands, Arctic Tourism, Northern Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Northern Collaboration”, “Key Statistics”, “Current Projects”, “Submit Project Proposal”.
- Buttons are short verb phrases in Title Case: “Submit Proposal”, “Save as Draft”, “Preview”, “Reset Form”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Projects”, “Resources”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `aurora-green`, `northern-lights-purple`, `ice-blue`, `deep-arctic`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Aurora Green (#00ff87): Energy, vitality, natural phenomenon
- Psychology: Awakening, hope, environmental consciousness
- Usage: Primary actions, success states, highlights

- Northern Lights Purple (#a855f7): Mystery, innovation, creativity
- Psychology: Imagination, luxury, transformation
- Usage: Secondary actions, premium features, accents

- Ice Blue (#e0f2fe): Clarity, tranquility, vastness
- Psychology: Peace, openness, Arctic purity
- Usage: Backgrounds, containers, subtle emphasis

- Snow White (#ffffff): Purity, simplicity, space
- Psychology: Clean slate, minimalism, Arctic landscape
- Usage: Main background, content areas, breathing room

## Typography

- `display` — "Libre Franklin", sans-serif
- `body` — "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Nunito Sans, Libre Franklin); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Libre+Franklin:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Nunito Sans
- Purpose: Soft, rounded forms echo Arctic organic shapes
- Psychology: Approachable, warm despite cold theme
- Usage: Body text, descriptions, user-facing content
- Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- Rationale: Geometric but friendly, maintains readability in extreme minimalism

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-full` 9999px.

## States and motion

- Hover: Transform scale(1.02) + Aurora glow
- Active: Transform scale(0.98) + Stronger glow
- Focus: 3px solid aurora gradient outline
- Disabled: Opacity 0.5 + Grayscale filter

- ACCESSIBILITY NOTES (WCAG 2.1 AA COMPLIANCE)

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Organization

- Arctic Circle Alliance

### Theme

- Arctic Aurora - Extreme minimalism meets Northern Lights
- BLEND COMPOSITION (ULTRATHINK)

1. EXTREME MINIMAL (55%)
- Ultra-clean lines with maximum white space
- Scandinavian design principles: form follows function
- Negative space as a design element
- Breathing room between all components

2. AURORA BOREALIS (30%)
- Vibrant gradient transitions mimicking Northern Lights
- Dynamic color shifts: green to purple to blue
- Ethereal glow effects on interactive elements
- Light phenomena as visual metaphors

3. ICE CRYSTAL (15%)
- Crystalline geometric patterns
- Sharp, angular borders with frost effects
- Translucent overlays suggesting ice
- Hexagonal motifs inspired by snowflake geometry

- COLOR PSYCHOLOGY & PALETTE

### Supporting Colors

- Frost Gray (#f8fafc): Subtle depth without harshness
- Glacier Blue (#bfdbfe): Soft transitions
- Deep Arctic (#0c4a6e): Authority, depth, night sky
- Aurora Pink (#ec4899): Rare accent for special moments

### Gradient Compositions

- Primary Aurora: Linear gradient from #00ff87 to #a855f7 (45deg)
- Ice Gradient: Linear gradient from #e0f2fe to #ffffff (180deg)
- Night Aurora: Radial gradient from #a855f7 to #0c4a6e

### Secondary Font

- Libre Franklin
- Purpose: Crystal-clear clarity for navigation and data
- Psychology: Professional, trustworthy, precise
- Usage: Headings, navigation, data tables, metrics
- Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- Rationale: Neo-grotesque style provides stark clarity like Arctic air

### Type Scale

- Hero: 3rem (48px) - Large displays, hero sections
- H1: 2.25rem (36px) - Page titles
- H2: 1.875rem (30px) - Section headers
- H3: 1.5rem (24px) - Subsections
- Body: 1rem (16px) - Standard content
- Small: 0.875rem (14px) - Supporting text, captions
- Tiny: 0.75rem (12px) - Badges, labels, metadata

### Line Height

- Headings: 1.2 - Tight for impact
- Body: 1.6 - Generous for readability in minimal design
- Data: 1.4 - Compact for tables and forms

- TEMPERATURE & FORMALITY RATINGS

### Temperature

- (Very Cold)
- Visual: Dominated by blues, whites, cool greens
- Emotional: Crisp, refreshing, invigorating but distant
- Interaction: Smooth, icy transitions
- Purpose: Reflects Arctic environment, professional distance

## Not synced

Built from `style-223-arctic-aurora.html`. No component bundle: the reference page's markup is not packaged as live components.
