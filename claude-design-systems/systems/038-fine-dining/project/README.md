Inspired by world-renowned Michelin-starred establishments like French Laundry and Eleven Madison Park. This design embodies culinary artistry through visual language that speaks to exclusivity, refinement, and exceptional attention to detail.

**Blend:** Fine Dining 80% + Michelin Star 20%  
**Temperature:** 6/10 (warm) · **Formality:** 9/10 · **Tags:** premium, hospitality  
**Perfect for:** Fine Dining, Michelin Restaurants, Culinary Experiences

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Gastronomic Excellence”, “Performance Statistics”, “Signature Experiences”, “Chef's Grand Dégustation”.
- Navigation uses single nouns: “Dashboard”, “Reservations”, “Tasting Menu”, “Wine Cellar”, “Chef's Table”.
- The reference page uses emoji as inline glyphs (★ 🍽 🍷 👨 🍳 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `cream`, `burgundy`, `gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Rich Black (#1a1a1a): Sophistication, formality, the backdrop of fine dining
- Cream (#fffef5): Premium linens, pristine china, understated elegance
- Burgundy (#722f37): Aged wine, culinary passion, warmth without casualness
- Gold (#c9a227): Michelin stars, excellence, prestigious achievement

## Typography

- `display` — "Cormorant Garamond", serif
- `montserrat` — "Montserrat", sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Montserrat); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`, `label`), always with the letter-spacing given.

### Type rationale

- Cormorant Garamond: Elegant serif reflecting French culinary heritage
- Varied weights create rhythm like courses in a tasting menu
- Generous letter-spacing evokes printed menus and wine lists
- Montserrat as supporting typeface for modern refinement

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem, `space-xxl` 6rem. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px, `radius-4` 4px.

- White space treated as premium real estate, never wasted
- Content "plated" with chef-like precision and intentionality
- Breathing room between elements creates anticipation
- Margins and padding scaled to create intimate yet spacious feel

## States and motion

- Subtle hover states suggest refined responsiveness
- Smooth transitions mirror seamless service
- No aggressive animations - everything is controlled, intentional
- Focus states designed for accessibility without breaking aesthetic

Timing values: `--transition-smooth` all 0.4s cubic-bezier(0.4, 0, 0.2, 1), `--transition-subtle` all 0.3s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- Semantic HTML5 structure (header, nav, main, section, footer)
- ARIA labels for screen reader context
- Color contrast ratios exceed WCAG AA standards (cream on black: 16:1)
- Keyboard navigation fully supported with visible focus indicators
- Readable typography with minimum 16px base size

## Component inventory

The reference page composes these patterns from the tokens above:

- Stats cards as "amuse-bouche" - small, impactful, refined
- Content cards as "courses" - each deserving individual attention
- Data table as "wine list" - detailed, organized, premium
- Footer as "bill presentation" - discreet, professional, complete

## Further guidance

### Visual Hierarchy

- Theatrical spacing creates anticipation, mirroring the pacing of a tasting menu
- Menu-like presentation guides the eye through curated content experiences
- Artful asymmetry balanced with classical symmetry reflects haute cuisine plating
- Layered depth through subtle shadows suggests multi-course complexity

### Temperature & Formality

- Warm Intimate (6/10): Rich burgundy and gold create warmth
- Very High Exclusive (9/10): Every detail signals premium positioning
- Balance of approachability (warmth) with aspirational distance (formality)

### Responsive Considerations

- Grid system adapts gracefully from mobile to desktop
- Typography scales maintain readability across viewports
- Touch targets sized appropriately for mobile interaction
- Content reflows without losing compositional integrity

### Brand Positioning

- This interface positions the platform as the digital equivalent of a
- three-Michelin-star experience. Every pixel communicates excellence,
- exclusivity, and refined taste. Users are treated as distinguished guests
- receiving white-glove service through thoughtful, elegant design.

### Business Impact

- Establishes premium market positioning through visual language
- Builds trust through meticulous attention to detail
- Creates memorable brand experience that justifies premium pricing
- Attracts discerning clientele seeking excellence

### Token Execution

- ✓ Rich black, cream, burgundy, gold palette perfectly balanced
- ✓ Cormorant Garamond establishing refined serif authority
- ✓ Theatrical spacing creating menu-like presentation
- ✓ Tasting menu, reservation, chef profile, wine pairing components
- ✓ Warm intimate temperature (6) through burgundy/gold warmth
- ✓ Very high exclusive formality (9) through every design decision

### Technical Excellence

- Single-file implementation for portability
- Embedded CSS for zero external dependencies
- Semantic HTML for SEO and accessibility
- Progressive enhancement approach
- Performance-optimized with minimal DOM complexity

## Not synced

Built from `style-38-fine-dining.html`. No component bundle: the reference page's markup is not packaged as live components.
