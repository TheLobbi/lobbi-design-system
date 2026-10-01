This design system celebrates the intersection of traditional craftsmanship and modern digital tools. Every element honors the handmade, the considered, and the skilled—while embracing technology as a tool that empowers rather than replaces the maker's touch.

**Blend:** Handcraft Heritage 55% + Digital Tools 30% + Workshop Aesthetic 15%  
**Temperature:** 8/10 (warm) · **Formality:** 5/10 · **Tags:** creative, association  
**Perfect for:** Maker Spaces, Artisan Guilds, Craft Communities

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Master Craftsman Dashboard”, “📋 Current Projects”, “Project Gallery”, “Material Calculator”.
- Buttons are short verb phrases in Title Case: “New Project”, “Upload Photos”, “Calculate”, “Browse Courses”.
- Navigation uses single nouns: “Workshop”, “Projects”, “Tools”, “Community”, “Marketplace”.
- The reference page uses emoji as inline glyphs (🔨 📐 🛠 👥 ⭐ 📋); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `craft-brown`, `wood-tan`, `maker-orange`, `parchment`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Craft Brown (#92400e): Rich, earthy, substantial - evokes leather,
- wood, and the patina of well-used tools. Primary color for headers
- and important actions that represent master craftsmanship.
- Tool Steel (#475569): Cool, precise, industrial - represents the
- tools that extend the maker's hand. Used for structural elements
- and navigation that provide the framework for creation.
- Wood Tan (#d4a574): Warm, natural, inviting - suggests sawdust,
- workshop light, and raw materials. Backgrounds and secondary
- elements that provide warmth without overwhelming.
- Maker Orange (#fb923c): Energy, creativity, spark - the color of
- forge fires and creative passion. Accent color for calls-to-action
- and moments of inspiration.

## Typography

- `display` — "Crimson Pro", serif
- `body` — "IBM Plex Sans", sans-serif

Faces are hosted on Google Fonts (Crimson Pro, IBM Plex Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Crimson Pro (Serif): Used for headings and featured content.
- This font family has roots in classical typography but includes
- modern refinements. Its high contrast and elegant details suggest
- both historical craft traditions and contemporary sophistication.
- Perfect for showcasing maker names and project titles with dignity.
- IBM Plex Sans (Sans-serif): Used for UI and body text.
- Originally designed for IBM's brand, this geometric sans-serif
- balances technical precision with warmth. Its wide variety of
- weights provides clear hierarchy while maintaining readability
- in tool-heavy interfaces.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.25rem, `radius-md` 0.5rem, `radius-lg` 0.75rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-inset`, lowest first for resting cards, higher for hover and overlays.

- Cards: Layered with subtle textures suggesting paper or wood grain
- Buttons: Substantial with beveled edges suggesting carved elements
- Tables: Grid-like precision with clear row dividers like workshop
- storage systems
- Forms: Tool-like precision with clear labels and purposeful fields
- Badges: Tool tags and material labels with distinctive shapes

## States and motion

- Transitions: 300-400ms with easing that suggests physical weight
- Hover states: Dimensional changes that feel tactile and substantial
- Click feedback: Pressed states that mimic physical button depression
- Loading states: Progress indicators styled as tools or measurements

Timing values: `--transition-fast` all 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` all 300ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` all 400ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG AAA contrast maintained for all text on backgrounds
- Focus indicators use high-contrast orange with 3px outlines
- All interactive elements meet 44x44px minimum touch targets
- Texture overlays never interfere with text legibility
- Tool icons paired with text labels for clarity
- Skip links provided for keyboard navigation
- Semantic HTML structure for assistive technologies

## Component inventory

The reference page composes these patterns from the tokens above:

- Cards: Layered with subtle textures suggesting paper or wood grain
- Buttons: Substantial with beveled edges suggesting carved elements
- Tables: Grid-like precision with clear row dividers like workshop
- storage systems
- Forms: Tool-like precision with clear labels and purposeful fields
- Badges: Tool tags and material labels with distinctive shapes

## Further guidance

### Artisan Makers Guild - Design System

- Style ID: 233

### Temperature Rating

- (Warm Craft)
- The design heavily favors warmth through browns, tans, and orange
- accents. The steel grays provide necessary cooling to maintain
- professionalism, but the overall feel is welcoming and human.

### Formality Rating

- (Balanced Craft)
- Balanced between approachable maker community and serious
- craftsmanship. Formal enough to respect skill and expertise,
- informal enough to welcome learners and celebrate process over
- perfection. The design says "professional maker" not "corporate."

### Texture And Materiality

- Subtle noise overlays suggest paper texture and material grain
- Box shadows create depth and layering like physical materials
- Border treatments suggest carved edges and joined materials
- Hover states add dimension like lifting or pressing physical objects

### Iconography Strategy

- Tool icons: Hammer, saw, chisel, measuring tape, square
- Material icons: Wood grain, leather texture, metal finish
- Process icons: Sketching, prototyping, finishing, shipping
- Achievement badges: Master craftsman, apprentice, journeyman levels

### Responsive Strategy

- Desktop: Workshop bench layout with tool palettes and work area
- Tablet: Simplified tool access with maintained material textures
- Mobile: Essential tools only, vertical stack for focused work
- All breakpoints maintain craft aesthetic and substantial feel

## Not synced

Built from `style-233-artisan-makers.html`. No component bundle: the reference page's markup is not packaged as live components.
