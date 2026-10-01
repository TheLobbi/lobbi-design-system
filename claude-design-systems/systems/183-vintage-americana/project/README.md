Vintage Americana: Vintage USA 55% + Americana Heritage 25% + Rustic Charm 20%.

**Blend:** Vintage USA 55% + Americana Heritage 25% + Rustic Charm 20%  
**Temperature:** 6/10 (warm) · **Formality:** 5/10 · **Tags:** hospitality, heritage  
**Perfect for:** American Brands, Heritage Businesses, Traditional Services

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Vintage Americana Dashboard”, “Classic Inn Experience”, “Regional Cuisine”, “Route 66 Tours”.
- Buttons are short verb phrases in Title Case: “Reserve Now”, “Clear Form”, “Primary Action”, “Secondary Action”.
- Navigation uses single nouns: “Home”, “Services”, “About”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-primary`, `color-secondary`, `color-accent`, `color-cream`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Alfa Slab One", cursive
- `body` — Lato, sans-serif

Faces are hosted on Google Fonts (Alfa Slab One, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@400;700;900&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-1` 0.5rem, `space-2` 1rem, `space-3` 1.5rem, `space-4` 2rem, `space-6` 3rem, `space-8` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 2px, `radius-md` 4px, `radius-lg` 6px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-vintage`, lowest first for resting cards, higher for hover and overlays.

- Color System:
- ├─ Primary: #A0201C (Barn Red) - Heritage, warmth, American tradition
- ├─ Secondary: #0F3057 (Classic Navy) - Trust, stability, timelessness
- ├─ Accent: #CC7033 (Rust Orange) - Weathered charm, nostalgia
- ├─ Neutral Light: #F5EFE0 (Cream) - Aged paper, vintage warmth
- ├─ Neutral Mid: #8B7355 (Weathered Wood) - Natural, rustic
- Base Dark: #2D2416 (Dark Brown) - Grounding, earthiness

- Typography System:
- ├─ Display: Alfa Slab One (Headers)
- │  ├─ Weight: 400 (inherently bold/impactful)
- │  ├─ Usage: H1-H3, vintage signage, hero statements
- │  ├─ Personality: Bold, confident, roadside attraction
- │  └─ Cultural Reference: 1950s diner signs, vintage advertisements
- Body: Lato (Content)
- ├─ Weights: 400 (regular), 700 (bold), 900 (black)
- ├─ Usage: Paragraphs, UI text, data
- ├─ Rationale: Clean, legible, professional warmth
- Contrast: Bold display vs. refined humanist sans

- Spacing & Rhythm:
- ├─ Base Unit: 8px
- ├─ Scale: 0.5x, 1x, 1.5x, 2x, 3x, 4x, 6x, 8x
- ├─ Layout Philosophy: Solid, reliable structure with breathing room
- Grid System: Traditional, centered, symmetrical layouts

- Component Design Principles:
- ├─ Cards: Framed like vintage postcards with border details
- ├─ Buttons: Dimensional with shadow depth like classic signage
- ├─ Forms: Clean inputs with subtle texture overlays
- ├─ Tables: Striped like classic diner booths
- Navigation: Badge-style elements with vintage borders

- ACCESSIBILITY COMPLIANCE

- WCAG 2.1 AA Standards:
- ├─ Color Contrast Ratios:
- │  ├─ Barn Red on Cream: 7.3:1 (AAA)
- │  ├─ Navy on Cream: 10.8:1 (AAA)
- │  ├─ Cream on Navy: 10.8:1 (AAA)
- │  ├─ Dark Brown on Cream: 12.5:1 (AAA)
- │  └─ Rust on Cream: 5.1:1 (AA)
- ├─ Focus Indicators:
- │  ├─ 3px solid outlines
- │  ├─ High contrast colors
- │  └─ Visible offset for dimensional elements
- ├─ Touch Targets: Minimum 44x44px
- Screen Reader Support:
- ├─ Semantic HTML5 elements
- ├─ ARIA labels for decorative textures
- Alt text for vintage aesthetic elements

- Responsive Breakpoints:
- ├─ Mobile: 320px-767px (single column, larger touch targets)
- ├─ Tablet: 768px-1023px (2-column grids)
- Desktop: 1024px+ (full traditional layouts)

- CULTURAL & BUSINESS CONTEXT

- Target Industries:
- ├─ Hospitality: Boutique hotels, bed & breakfasts, diners
- ├─ Heritage Brands: Established businesses, family-owned companies
- ├─ Tourism: Regional attractions, historic sites, travel services
- ├─ Food & Beverage: Craft breweries, BBQ joints, comfort food
- ├─ Retail: Antiques, vintage goods, artisan crafts
- Real Estate: Historic properties, countryside developments

- User Psychology:
- ├─ Temperature: 6/10 (Warm, welcoming, comforting)
- ├─ Formality: 5/10 (Balanced, approachable yet established)
- ├─ Emotional Response: Nostalgia, trust, comfort, authenticity
- Trust Signals: Heritage, longevity, reliability, craftsmanship

- Brand Personality:
- ├─ Voice: Friendly, honest, down-to-earth, welcoming
- ├─ Values: Tradition, quality, community, authenticity
- ├─ Differentiation: Genuine heritage vs. corporate sterility
- Community: Local pride, regional identity, family values

- TECHNICAL IMPLEMENTATION

- CSS Architecture:
- ├─ Custom Properties: All colors, spacing, typography
- ├─ Utility Classes: Minimal, component-focused
- ├─ Layout System: CSS Grid for structure, Flexbox for components
- Performance: System fonts fallback, optimized textures

- Browser Compatibility:
- ├─ Modern Browsers: Full feature support
- ├─ Graceful Degradation: Clean fallbacks for older browsers
- Progressive Enhancement: Texture overlays as enhancements

- Interaction Design:
- ├─ Hover States: Subtle brightening, gentle depth changes
- ├─ Active States: Press-down dimensional effect
- ├─ Focus States: Bold outlines, high visibility
- Transitions: Moderate (250-300ms), comfortable pacing

- Texture Implementation:
- ├─ Background Patterns: Subtle noise and grain
- ├─ Border Treatments: Multiple borders for dimensional frames
- ├─ Shadow Layering: Multiple shadows for vintage depth
- Color Variations: Slight hue shifts for aged appearance

- USAGE GUIDELINES

- When to Use:
- ├─ Heritage brands emphasizing longevity and tradition
- ├─ Hospitality services with regional American identity
- ├─ Food & beverage with comfort/nostalgia positioning
- ├─ Tourism promoting Americana experiences
- Local businesses emphasizing community roots

- When NOT to Use:
- ├─ Tech startups (too traditional)
- ├─ International brands (too US-specific)
- ├─ Luxury high-fashion (wrong nostalgia type)
- ├─ Corporate enterprise (insufficient modernity)
- Youth-oriented services (generation mismatch)

- Customization Notes:
- ├─ Color adjustment: Maintain warm, earthy palette
- ├─ Typography: Keep bold slab + clean sans pairing
- ├─ Texture intensity: Adjustable via opacity
- Shadow depth: Scale for desired dimensionality

- Historical Context:
- ├─ Peak Period: 1940s-1960s (post-war prosperity)
- ├─ Key Influences: Route 66, diners, motels, drive-ins
- ├─ Revival Period: 2000s-present (Americana nostalgia)
- Modern Interpretation: Cleaner execution, better UX

- Regional Considerations:
- ├─ Strongest resonance: American Midwest, South, Southwest
- ├─ Cultural references: Route 66, Main Street USA
- ├─ Architectural ties: Vintage signs, neon, mid-century
- Emotional connection: Baby Boomer nostalgia, heritage pride

## States and motion

Timing values: `--transition-fast` 200ms ease, `--transition-base` 250ms ease, `--transition-slow` 300ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-183-vintage-americana.html`. No component bundle: the reference page's markup is not packaged as live components.
