This design celebrates the rich cultural tapestry of Eastern European traditions, weaving together centuries of folk art, craftsmanship, and modern revival. The aesthetic honors traditional embroidery patterns, onion dome architecture, and the vibrant colors of matryoshka dolls while maintaining contemporary usability.

**Blend:** Eastern European Traditions 55% + Folk Art Patterns 30% + Modern Revival 15%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** heritage, association  
**Perfect for:** Slavic Culture, Eastern European Heritage, Folk Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Slavic Heritage Network”, “Recent Cultural Activities”, “Join Our Network”, “Featured Heritage Site”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Learn More”, “View Gallery”, “Submit Heritage Site”.
- Navigation uses single nouns: “Dashboard”, “Heritage Sites”, “Folk Art”, “Cultural Events”, “Member Directory”, “Resources”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `russian-red`, `matryoshka-gold`, `forest-green`, `folk-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary: Russian Red (#dc2626)
- Evokes traditional Slavic textiles, folk costumes, and imperial heritage
- Psychology: Warmth, passion, cultural pride, celebration
- Usage: Primary actions, headers, important highlights
- Accessibility: WCAG AA compliant when used with white text

- Secondary: Matryoshka Gold (#fbbf24)
- Inspired by golden ornaments and traditional painted dolls
- Psychology: Warmth, prosperity, craftsmanship, joy
- Usage: Accents, badges, success states, decorative elements
- Cultural significance: Gold leaf in icon painting, folk art gilding

- Tertiary: Forest Green (#166534)
- Represents vast Eastern European forests and natural landscapes
- Psychology: Growth, stability, heritage, connection to land
- Usage: Secondary actions, backgrounds, nature-related content
- Balance: Grounds the warm palette with earthy stability

- Quaternary: Folk Blue (#1e40af)
- Traditional cobalt blue from ceramics and embroidery
- Psychology: Trust, tradition, craftsmanship, sky and water
- Usage: Links, information states, decorative accents

- Neutral Palette:
- Linen (#fafaf9): Warm base reminiscent of traditional textiles
- Charcoal (#262626): Soft black for text, respecting eye comfort
- Stone Gray (#525252): Mid-tones for borders and subtle elements

## Typography

- `display` — Merriweather, serif
- `body` — Rubik, sans-serif

Faces are hosted on Google Fonts (Merriweather, Rubik); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Rubik:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Display/Heading: Merriweather (Serif)
- Characteristics: Traditional, literary, heritage feel
- Weight range: 400 (Regular), 700 (Bold), 900 (Black)
- Usage: Headers, titles, traditional content
- Rationale: Evokes printed books, manuscripts, cultural documentation
- Line height: 1.2-1.3 for display, 1.4 for reading

- Body/Interface: Rubik (Sans-serif)
- Characteristics: Modern, geometric, Cyrillic-inspired forms
- Weight range: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Usage: Body text, UI elements, data displays
- Rationale: Contemporary Slavic design, excellent Cyrillic support
- Line height: 1.6 for body text, optimal readability

- Type Scale:
- Display (2.5rem/40px): Hero sections, main titles
- H1 (2rem/32px): Page headers
- H2 (1.5rem/24px): Section headers
- H3 (1.25rem/20px): Card headers, subsections
- Body (1rem/16px): Primary reading text
- Small (0.875rem/14px): Captions, metadata

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Layout System:
- Grid: 12-column responsive grid with 24px gutters
- Breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)
- Max width: 1440px for optimal reading and visual balance
- Spacing scale: 4px base unit (0.25rem) for consistent rhythm

- Card Components:
- Border radius: 12px (soft, traditional feel)
- Shadow: Layered shadows for subtle depth
- Padding: 24px (1.5rem) for comfortable spacing
- Border treatment: Decorative folk-pattern inspired borders

- Interactive Elements:
- Buttons: Rounded (8px), solid with hover lift effect
- Links: Underlined on hover, folk blue color
- Forms: Bordered inputs with focus states, traditional aesthetic
- Transitions: 200-300ms ease for smooth interactions

- Folk Pattern Integration:
- Geometric borders inspired by traditional embroidery
- Decorative corner elements on cards
- Background patterns using CSS gradients and pseudo-elements
- Subtle texture overlays for depth

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `matryoshka-gold` 1.6:1, `stat-card-text` 3.0:1, `footer-section-text` 1.4:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Color Contrast:
- All text meets WCAG 2.1 AA standards (4.5:1 minimum)
- Important actions meet AAA standards (7:1)
- Decorative patterns don't interfere with content legibility
- Color is never the sole indicator of information

- Interactive Elements:
- Minimum touch target: 44x44px for mobile
- Focus indicators: 2px solid outline with offset
- Keyboard navigation: Full support with visible focus states
- Screen reader: Semantic HTML, ARIA labels where needed

- Typography:
- Minimum body text: 16px (1rem)
- Maximum line length: 75 characters for readability
- Sufficient line height: 1.6 for body text
- Resizable text: Supports up to 200% zoom without breaking layout

- Motion & Animation:
- Respects prefers-reduced-motion media query
- Essential animations only, no decorative motion
- Transitions enhance understanding, not distract

## Component inventory

The reference page composes these patterns from the tokens above:

- Layout System:
- Grid: 12-column responsive grid with 24px gutters
- Breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)
- Max width: 1440px for optimal reading and visual balance
- Spacing scale: 4px base unit (0.25rem) for consistent rhythm

- Card Components:
- Border radius: 12px (soft, traditional feel)
- Shadow: Layered shadows for subtle depth
- Padding: 24px (1.5rem) for comfortable spacing
- Border treatment: Decorative folk-pattern inspired borders

- Interactive Elements:
- Buttons: Rounded (8px), solid with hover lift effect
- Links: Underlined on hover, folk blue color
- Forms: Bordered inputs with focus states, traditional aesthetic
- Transitions: 200-300ms ease for smooth interactions

- Folk Pattern Integration:
- Geometric borders inspired by traditional embroidery
- Decorative corner elements on cards
- Background patterns using CSS gradients and pseudo-elements
- Subtle texture overlays for depth

## Further guidance

### Temperature & Formality Ratings

- Temperature: 7/10 (Warm Folk)
- Warm color palette (reds, golds) creates inviting atmosphere
- Traditional patterns evoke cultural warmth and hospitality
- Balanced with cooler greens and blues for visual comfort
- Appropriate for: Community sites, cultural organizations, heritage projects

- Formality: 6/10 (Respectfully Traditional)
- Professional enough for institutional use
- Cultural authenticity maintains dignity
- Not corporate-formal, but culturally respectful
- Balances heritage preservation with modern accessibility

### Cultural Considerations

- Patterns inspired by authentic folk art traditions
- Color meanings researched for cultural accuracy
- Typography choices respect Cyrillic script traditions
- Design honors heritage while embracing modern web standards

### Responsive Behavior

- Mobile-first approach with progressive enhancement
- Touch-friendly interface on smaller screens
- Simplified patterns on mobile for performance
- Flexible grid adapts to all screen sizes

### Performance Optimization

- CSS-only patterns (no image files for decorations)
- Google Fonts with display=swap for fast rendering
- Minimal use of shadows and effects for better performance
- GPU-accelerated transforms for smooth animations

## Not synced

Built from `style-229-slavic-heritage.html`. No component bundle: the reference page's markup is not packaged as live components.
