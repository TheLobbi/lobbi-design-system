Artisan Contemporary: Craftsmanship 60% + Bauhaus 40%.

**Blend:** Craftsmanship 60% + Bauhaus 40%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** creative, professional  
**Perfect for:** Artisan Brands, Contemporary Craft, Design Studios

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Artisan Contemporary”, “Authentic Craft for the Digital Age”, “Featured Makers”, “Sofia Andersson”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Save as Draft”, “Clear Form”.
- Navigation uses single nouns: “Marketplace”, “Makers”, “Workshops”, “Certifications”, “Community”, “Join”.
- The reference page uses emoji as inline glyphs (🛠 👤 🎨 🌱 ⭐ 🪵); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `bg-primary`, `bg-dark`, `color-primary`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Fraunces, Georgia, serif
- `body` — "IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Fraunces, IBM Plex Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 4px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-base` 0.2s ease, `--transition-slow` 0.3s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Primary (60%)

- CRAFTSMANSHIP/GUILD AESTHETIC
- Warm, textural color palette
- Celebration of handcraft and tradition
- Human-centered warmth
- Artisanal details and visible texture
- Traditional craft values: quality, authenticity, heritage
- Natural materials aesthetic
- Community and maker-focused

### Secondary (40%)

- MODERN BAUHAUS
- Geometric precision and clean lines
- Grid-based structural organization
- Functional minimalism
- Sans-serif clarity for readability
- Form follows function philosophy
- Systematic spacing and rhythm
- Modular, repeatable components
- Primary shape vocabulary: squares, circles, rectangles

- === BLEND CHEMISTRY ===

- The fusion creates a bridge for traditional makers entering
- digital spaces without losing authenticity. Bauhaus provides
- the structural clarity and organization that modern users expect,
- while craft aesthetic maintains warmth and human connection.

- Think: "Organized workshop" where every tool has its place
- (Bauhaus) but the warmth of wood and worn leather remains
- (Craft). Like a well-designed maker space - functional but
- inviting, systematic but soulful.

- === COLOR PSYCHOLOGY & SEMANTICS ===

- Background: #faf8f5 (Warm Craft White)
- Evokes unbleached linen, natural paper, workshop light
- Soft, approachable, reduces eye strain
- Balances digital clarity with analog warmth

- Primary: #b8704a (Warm Artisan Terracotta)
- Clay, leather, copper - maker materials
- Conveys quality, tradition, earthiness
- Active, creative, warm but professional
- Used for: Primary actions, highlights, brand elements

- Secondary: #2d4a5e (Deep Craft Blue)
- Indigo dye, workshop aprons, blueprint technical drawings
- Trust, craftsmanship, precision, depth
- Bauhaus influence - serious, systematic
- Used for: Structure, data, technical information

- Supporting Palette:
- Charcoal: #3d3d3d (Typography, high contrast)
- Warm Gray: #6b6b6b (Secondary text, reduced emphasis)
- Cream: #f5f0e8 (Subtle backgrounds, cards)
- Sage: #7a8a7e (Success, sustainable practices)
- Amber: #d4925a (Warnings, featured items)
- Slate: #4a5f6d (Tables, borders, structure)

- === TYPOGRAPHY STRATEGY ===

- Display: Fraunces (Serif)
- Contemporary revival with historical roots
- "Wonky" optical adjustments echo handcraft imperfections
- Warm, characterful, bridges tradition and modernity
- Used for: H1, H2, large numbers, brand elements

- Body: IBM Plex Sans
- Designed for IBM's digital-first needs (Bauhaus alignment)
- Highly legible, systematic, neutral
- Professional yet approachable
- Used for: Body text, navigation, UI elements, data

- Hierarchy:
- H1: 3rem (48px) - Fraunces 700
- H2: 2.25rem (36px) - Fraunces 600
- H3: 1.5rem (24px) - Fraunces 600
- Body: 1rem (16px) - IBM Plex Sans 400
- Small: 0.875rem (14px) - IBM Plex Sans 400
- Line Height: 1.6 (body), 1.2 (headings)

- === SPATIAL DENSITY ===

- Temperature: 6/10 (Warm, human-centered)
- Formality: 6/10 (Balanced professional-creative)

- Spacing Scale (Based on 8px grid - Bauhaus):
- xs: 8px   (0.5rem) - Tight groupings
- sm: 16px  (1rem)   - Related elements
- md: 24px  (1.5rem) - Component padding
- lg: 40px  (2.5rem) - Section separation
- xl: 64px  (4rem)   - Major divisions

- Layout:
- Max width: 1280px (readable, not overwhelming)
- Grid: 12-column flexible grid
- Cards: 16px padding minimum
- Borders: 2px (visible craftsmanship)
- Border radius: 4px (subtle, Bauhaus-influenced)

- Density Balance:
- Not too tight (allows craft elements to breathe)
- Not too loose (maintains modern efficiency)
- Generous whitespace for focus
- Grouped related information (Bauhaus organization)

- === COMPONENT ARCHITECTURE ===

1. Header/Navigation
- Fixed position for accessibility
- Geometric logo with craft icon
- Horizontal nav with clear hierarchy
- Subtle border-bottom for structure

2. Stats/Metrics Grid (4 cards)
- Equal-width cards (Bauhaus grid)
- Large numbers in Fraunces (craft warmth)
- Icons for visual interest
- Gentle hover states

3. Content Cards
- 2px borders (visible structure)
- Subtle shadows (depth without drama)
- Image placeholders with warm gradients
- Badge overlays for status
- Clear typographic hierarchy

4. Data Table
- Striped rows for readability
- Fixed header on scroll
- Filter controls above
- Responsive collapse on mobile

5. Form Elements
- Clear labels above inputs
- Generous padding (16px)
- Focus states with primary color
- Validation messages inline

6. Buttons
- Primary: Solid terracotta
- Secondary: Outlined craft blue
- Tertiary: Text-only with underline
- Consistent 40px height (touch-friendly)
- Subtle transform on hover

7. Badges/Status
- Rounded rectangles (not pills)
- Semantic colors
- Small, uppercase text
- Certification levels clearly differentiated

8. Footer
- Four-column grid
- Muted background
- Organized link groups
- Social icons as simple circles

- === ACCESSIBILITY COMPLIANCE (WCAG 2.1 AA) ===

- Color Contrast:
- Primary on white: 4.8:1 (AA Large ✓)
- Secondary on white: 11.2:1 (AAA ✓)
- Charcoal on white: 13.5:1 (AAA ✓)
- All text meets minimum 4.5:1

- Interaction:
- Focus indicators: 3px solid outline
- Touch targets: Minimum 44x44px
- Keyboard navigation: Full support
- Skip links: Included
- ARIA labels: On all interactive elements

- Structure:
- Semantic HTML5
- Proper heading hierarchy
- Alt text on all images
- Form labels explicitly associated
- Table headers properly scoped

- === TEMPERATURE & FORMALITY SCORES ===

- Temperature: 6/10 (Warm, Human-Centered)
- Warm color palette (terracotta, cream)
- Rounded corners (subtle)
- Serif display font adds personality
- Craft-focused imagery and icons
- Community-oriented language
- Not cold/corporate, not overly casual

- Formality: 6/10 (Balanced Professional-Creative)
- Professional structure (Bauhaus grid)
- Creative flourishes (craft details)
- Clear but not sterile
- Organized but not rigid
- Appropriate for business transactions
- Welcoming to creative professionals

- === TARGET VERTICAL ===

- Artisan collectives and maker communities
- Craft e-commerce platforms
- Design studios showcasing work
- Artisan certification bodies
- Maker education platforms
- Sustainable craft businesses
- Guild organizations
- Workshop and studio spaces

- === DESIGN PHILOSOPHY ===

- "Where Tradition Meets Clarity"

- This design celebrates the handmade while providing the
- organizational clarity modern users demand. It doesn't hide
- its digital nature, but it doesn't sacrifice warmth for
- efficiency. Every element serves a purpose (Bauhaus) while
- maintaining human connection (Craft).

- The grid keeps things findable. The warmth keeps people
- engaged. The result: a design system that helps traditional
- makers thrive in digital spaces without losing what makes
- their work special.

## Not synced

Built from `style-139-artisan-contemporary.html`. No component bundle: the reference page's markup is not packaged as live components.
