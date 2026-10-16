The Amazonian Heritage Council design system honors the rich indigenous cultures of the Amazon rainforest while serving as a bridge to modern environmental activism. This interface walks the delicate balance between respecting traditional wisdom and leveraging contemporary digital tools for conservation. Every design decision reflects the philosophy that technology should amplify indigenous voices, not replace them. The visual language draws from the natural world - the deep greens of the canopy, the browns of the river, the vibrant colors of tropical birds - creating a digital space that feels rooted in the earth itself.

**Blend:** Rainforest Indigenous 55% + Nature Conservation 30% + Modern Activism 15%  
**Temperature:** 8/10 (warm) · **Formality:** 6/10 · **Tags:** association, creative  
**Perfect for:** Conservation Groups, Indigenous Rights, Environmental NGOs

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Amazonian Heritage Council”, “🦋 Priority Species Status”, “🌱 Submit Conservation Project”, “🛠️ Quick Actions”.
- Buttons are short verb phrases in Title Case: “Export Data”, “Add Species”, “Monitor”, “Monitor”.
- Navigation uses single nouns: “🏠 Dashboard”, “🌳 Conservation”, “🦜 Biodiversity”, “🏺 Heritage”, “📊 Data”, “🤝 Partners”.
- The reference page uses emoji as inline glyphs (🌿 🛡 ⚠ 🏠 🌳 🦜); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `forest-emerald`, `river-brown`, `parrot-orange`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary actions: Forest Emerald (#059669)
- Warnings/urgency: Parrot Orange (#ea580c)
- Success/positive: Leaf Green (#16a34a)
- Cultural elements: Sunset Gold / River Brown
- Data/info: Water Blue (#0891b2)

## Typography

- `display` — Bitter, serif
- `body` — "Work Sans", sans-serif

Faces are hosted on Google Fonts (Bitter, Work Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700;800&family=Work+Sans:wght@400;500;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Bitter: A slab serif "Contemporary" typeface that bridges traditional and
- modern. Slab serifs historically connect to 19th-century manifestos and
- printed activism materials. The name "Bitter" reflects the serious,
- uncompromising nature of conservation work. Used for headings to establish
- authority and cultural weight. The chunky serifs suggest carved wood,
- printed posters, and permanence.

- Work Sans: A geometric sans-serif designed for screen readability. "Work"
- in the name reflects the labor of activism and conservation. Its clean forms
- ensure body text is accessible across devices. The geometric construction
- provides modern clarity while the subtle humanist touches prevent coldness.

## Spacing, shape and elevation

- Spacing steps: `space-6` 6px, `space-7-5` 7.5px, `space-10` 10px, `space-14` 14px, `space-18` 18px, `space-20` 20px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- 8px base unit maintains mathematical consistency
- Generous spacing (32-48px between sections) prevents claustrophobia
- Content breathes - reflecting the open space of the forest canopy
- Asymmetrical spacing occasionally used to break grid rigidity

## States and motion

- Hover: Gentle lift (4px) with organic shadow growth
- Active: Slight press (2px downward) for tactile feedback
- Transitions: 250ms provides natural pace (not too fast or slow)
- Loading: Leaf animation or growth pattern rather than spinner
- Success: Green checkmark with brief leaf-fall animation
- Error: Orange highlight with supportive messaging (not red alarm)

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `sunset-gold` 4.5:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `parrot-orange` 2.7:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AA minimum contrast ratios (4.5:1 for body, 3:1 for large text)
- Colorblind-safe palette (orange/green are distinguishable by pattern/icon)
- Generous line-height (1.75) aids dyslexic readers
- Touch targets 44px minimum for mobile activists in field conditions
- Focus indicators clear and visible for keyboard navigation
- Alt text for all imagery describes cultural/conservation context
- Captions/transcripts for video content in multiple languages

## Further guidance

### Amazonian Heritage Council - Design System

- Style ID: 222

### Primary Palette

- Forest Emerald (#059669): The dominant color representing the Amazon canopy.
- This green is darker than typical eco-branding - it's the deep, mature green
- of old-growth forest, not the bright lime of corporate "sustainability."
- Psychologically, it communicates growth, life, resilience, and the wisdom
- of nature. Used extensively for primary actions and section headers.

- River Brown (#78350f): Inspired by the Amazon River's sediment-rich waters
- and the rich soil of the forest floor. This warm brown grounds the design
- and provides earthy contrast to the greens. It represents connection to
- land, indigenous heritage, and the tangible, material world. Used for
- secondary elements and grounding containers.

- Parrot Orange (#ea580c): A vibrant accent drawn from scarlet macaws and
- orange-winged parrots. This energetic orange provides visual excitement and
- urgency without feeling corporate or alarming. It's the color of tropical
- flowers and sunset through the canopy. Reserved for alerts, highlights, and
- calls-to-action that require immediate attention.

- Leaf Green (#16a34a): A lighter, brighter green for success states, positive
- indicators, and new growth. This is the green of new leaves in sunlight,
- representing hope, renewal, and conservation wins.

### Secondary Palette

- Deep Forest (#064e3b): Very dark green, almost black, for backgrounds. This
- creates the feeling of being under the canopy where sunlight is filtered.

- Earth Beige (#fef3c7): Warm light tone for contrast text backgrounds, inspired
- by bark and dried plant materials.

- Water Blue (#0891b2): Accent for informational elements, representing the
- river systems that sustain the rainforest.

- Sunset Gold (#f59e0b): Warm accent for heritage/cultural elements.

### Typography Scale

- Hero: 36px/48px (Major page titles)
- Title: 28px/36px (Section headers)
- Subtitle: 20px/28px (Subsections)
- Body: 16px/28px (Increased line-height for comfortable reading)
- Small: 14px/24px (Metadata, captions)
- Tiny: 12px/20px (Legal, fine print)

### Typographic Texture

- Headers use Bitter with slightly tighter tracking (-0.5px) for impact
- Body uses Work Sans with generous line-height (1.75) for readability
- Key terms in content can use Bitter for emphasis (scientific names, etc.)
- All caps used very sparingly (only for small labels)

### Buttons

- Organic Shapes: 8px border-radius provides gentle curves without being
- overly rounded. Buttons feel like carved wooden signs or painted stones
- rather than synthetic UI elements.

- Texture on Hover: Subtle overlay patterns create impression of natural
- materials. The hover state might suggest bark texture or woven patterns.

- Size Hierarchy: Primary actions are larger (48px height) to ensure touch
- accessibility and to convey importance. Secondary actions (40px) and
- tertiary (36px) create clear visual hierarchy.

- Iconography: Leaf icons, animal symbols, and geometric patterns inspired
- by indigenous art appear alongside text labels.

### Badges

- Conservation Status: Color-coded by urgency (Critical=orange, Protected=green)
- Regional Badges: Different tribal/regional affiliations have unique color/icon
- Achievement Badges: For milestones in conservation efforts
- All badges include icons/symbols, never relying on color alone

### Cards

- Each card has a subtle top border in an accent color (green/orange/gold)
- Background includes subtle texture overlay suggesting natural materials
- Padding is generous (24-32px) creating breathing room
- Hover state lifts card with shadow, suggesting physical layering

## Not synced

Built from `style-222-amazonian-heritage.html`. No component bundle: the reference page's markup is not packaged as live components.
