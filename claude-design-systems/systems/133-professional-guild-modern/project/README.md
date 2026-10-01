"Modern Guild-Style Organizations Embracing Geometric Precision" Target Organizations: Design Intent: This style reimagines the medieval guild system through a modernist lens. It honors the craft-focused, skill-development mission of trade associations while embracing Bauhaus principles of functional beauty and geometric precision. The result is a professional platform that feels like a workshop where form and function unite—perfect for organizations that build, create, and establish professional standards. COLOR PSYCHOLOGY & SEMANTICS.

**Blend:** Trade Association 35% + Bauhaus 25% + Neo-Minimalism 20% + Geometric Abstract 20%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** professional, association, creative  
**Perfect for:** Professional Guilds, Trade Associations, Craft Councils

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Builders Guild”, “Guild Overview”, “Master Guild”, “Certifications”.
- Buttons are short verb phrases in Title Case: “Submit Application →”, “Save Draft”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Standards”, “Training”.
- The reference page uses emoji as inline glyphs (⬛ 📐 🔧 📊 🏗 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `bauhaus-white`, `guild-blue`, `bauhaus-red`, `bauhaus-yellow`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Success/Certified: Guild Blue (professional achievement)
- Action/Primary: Bauhaus Red (clear CTAs)
- Warning/Featured: Bauhaus Yellow (attention without alarm)
- Neutral/Structure: Grays (functional framework)

## Typography

- `display` — "Space Grotesk", -apple-system, sans-serif
- `body` — "IBM Plex Sans", -apple-system, sans-serif

Faces are hosted on Google Fonts (IBM Plex Sans, Space Grotesk); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `heading-4`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-1` 8px, `space-2` 16px, `space-3` 24px, `space-4` 32px, `space-5` 40px, `space-6` 48px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- WORKSHOP GRID EFFICIENCY
- 8px base grid unit (Bauhaus rational system)
- 16px card gaps (tight, efficient)
- 24px section margins (functional breathing room)
- Max-width: 1280px (workshop-scale layout)
- Minimal padding (function over comfort)

## States and motion

Timing values: `--transition` 200ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `neutral-400` 2.5:1, `category-tag-bg` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Primary (35%) - Trade Association Foundations

- Guild-style membership structures (craft unions, professional bodies)
- Hierarchical organization visualization (apprentice → master)
- Credentialing and certification emphasis
- Professional standards and ethics frameworks
- Industry-specific knowledge repositories
- Member skill development tracking
- Peer recognition systems
- Collective bargaining aesthetics (strength in unity)

### Secondary (25%) - Bauhaus Design Principles

- Form follows function (no decoration for decoration's sake)
- Geometric primary shapes (square, circle, triangle)
- Primary color palette (red, blue, yellow + black/white)
- Grid-based rational layouts
- Typography as visual element
- Industrial materials aesthetic
- Asymmetric balance
- Unity of art and craft

### Tertiary (20%) - Neo-Minimalism

- Radical simplification
- Negative space as design element
- Monochromatic foundations with color accents
- Flat UI with subtle depth cues
- Clean sans-serif typography
- High contrast interfaces
- Stripped-down essentials
- Anti-ornament philosophy

### Quaternary (20%) - Geometric Abstract

- Mondrian-inspired compositions
- Bold geometric patterns
- Color block divisions
- Angular precision
- Mathematical harmony
- Constructivist influences
- Dynamic asymmetry
- Structural rhythm

### Compatibility Matrix (1-10 Scale)

- ┌────────────────────┬──────┬──────┬──────┬──────┐
- │                    │ Trad │ Baus │ NeoM │ GeoA │
- ├────────────────────┼──────┼──────┼──────┼──────┤
- │ Trade Association  │ 10.0 │  8.0 │  7.5 │  7.0 │
- │ Bauhaus            │  8.0 │ 10.0 │  9.5 │  9.0 │
- │ Neo-Minimalism     │  7.5 │  9.5 │ 10.0 │  8.5 │
- │ Geometric Abstract │  7.0 │  9.0 │  8.5 │ 10.0 │
- ┴──────┴──────┴──────┴──────┘

### Average Compatibility

- 8.4/10 (Excellent Harmony)

### Tension Points

- Trade Association professionalism vs Geometric Abstract playfulness (7.0/10)

### Resolution

- Geometric elements used structurally, not decoratively
- Guild hierarchy vs Bauhaus egalitarianism (8.0/10)

## Not synced

Built from `style-133-professional-guild-modern.html`. No component bundle: the reference page's markup is not packaged as live components.
