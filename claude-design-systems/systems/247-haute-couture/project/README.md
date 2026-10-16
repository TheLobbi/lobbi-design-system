This interface embodies the pinnacle of fashion design systems, where every pixel is treated like a stitch on a couture garment. Drawing from Parisian ateliers, runway presentations, and art gallery curation, the design creates an atmosphere of exclusive sophistication. The aesthetic speaks to fashion week elegance, designer portfolio presentation, and the meticulous craftsmanship of haute couture. Minimalism meets opulence through restraint, precision, and timeless elegance.

**Blend:** High Fashion 55% + Parisian Elegance 30% + Art Gallery 15%  
**Temperature:** 3/10 (cool) · **Formality:** 9/10 · **Tags:** creative, premium  
**Perfect for:** Fashion Houses, Couture Ateliers, Designer Guilds

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Spring/Summer 2025”, “Collection Statistics”, “Featured Collections”, “Midnight Elegance”.
- Buttons are short verb phrases in Title Case: “Create Collection”, “Save Draft”, “Preview Lookbook”.
- Navigation uses single nouns: “Collections”, “Designers”, “Runway”, “Atelier”, “Archive”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-rose-gold`, `color-champagne-cream`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Couture Black (#0a0a0a): Ultimate sophistication, timeless elegance, designer
- authority, fashion week gravity, atelier professionalism, photographic backdrop
- Runway White (#fafafa): Pure canvas, model walkway, fabric purity, design clarity,
- creative space, haute couture foundation, minimalist perfection
- Rose Gold (#f4a3a3): Feminine luxury, sunset champagne, Parisian romance, designer
- accent, limited edition prestige, fashion week glamour
- Atelier Gray (#78716c): Studio neutrality, fabric swatch, tailoring precision,
- professional workroom, textile foundation, couture neutrality
- Champagne Cream (#fef9f3): Silk lining, delicate fabric, invitation elegance,
- backstage lighting, studio softness, collection preview
- Deep Charcoal (#1a1a1a): Designer text, editorial weight, fashion authority,
- runway program, lookbook typography, collection documentation

## Typography

- `display` — Didot, "Cormorant Garamond", Georgia, serif
- `body` — "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- `cormorant-garamond` — "Cormorant Garamond", serif

Faces are hosted on Google Fonts (Didot, Cormorant Garamond, Helvetica Neue); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Didot&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Helvetica+Neue:wght@300;400;500;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Didot (Display Headlines):
- High-fashion editorial standard since 1780s
- Extreme contrast between thick and thin strokes (runway drama)
- Parisian refinement and aristocratic heritage
- Vogue, Harper's Bazaar legacy typeface
- Perfect for collection names, designer attributions
- Exudes timeless elegance and fashion authority

- Cormorant Garamond (Secondary Headlines):
- Contemporary interpretation of classical beauty
- Elegant serifs with fashion-forward proportions
- Bridges classical refinement and modern minimalism
- Ideal for category headers, seasonal collections
- Sophisticated without overwhelming

- Helvetica Neue (Body Copy):
- Swiss modernism meets fashion clarity
- Clean, neutral, infinitely versatile
- Used by luxury brands worldwide
- Perfect readability for descriptions
- Professional without decoration
- Designer workhorse for technical details

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 32px, `space-lg` 64px, `space-xl` 96px, `space-xxl` 128px. Pad cards and sections from these steps only.
- Corners: `border-radius` 2px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

1. Atelier Header: Minimalist black bar with white typography, rose gold accents
2. Runway Stats: Large numerals with fashion metrics, dramatic spacing
3. Collection Grid: Gallery-style cards with generous whitespace, editorial images
4. Designer Table: Monochromatic data with sophisticated row alternation
5. Couture Form: Elegant inputs with refined borders, subtle focus states
6. Fashion Buttons: Slim, architectural, sophisticated hover transformations
7. Status Badges: Rose gold accents, champagne backgrounds, refined typography
8. Atelier Footer: Minimalist links with Parisian cultural references

## States and motion

- Subtle hover states with opacity shifts (0.85 standard)
- Rose gold underlines appear on navigation hover
- Buttons transform with refined scale (1.02)
- Focus states use thin rose gold outlines (1px)
- Cards lift gently with soft shadows (editorial presentation)
- Transitions are slow and deliberate (400ms, runway pace)
- No aggressive animations (sophistication through restraint)

Timing values: `--transition-slow` 400ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `color-runway-white` 1.0:1, `color-rose-gold` 1.9:1, `color-rose-gold-dark` 2.6:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Black (#0a0a0a) on white (#fafafa): 19.8:1 contrast (exceeds AAA)
- Rose gold used as accent only, never sole indicator
- 16px minimum body text (Helvetica Neue) — **the reference page sets running text at 14px**
- 48px minimum touch targets on interactive elements
- Focus indicators use 1px rose gold outline plus background shift
- Semantic HTML5 structure throughout
- ARIA labels for icon-only buttons
- Alt text for all collection imagery
- Keyboard navigation fully supported
- Screen reader tested for fashion terminology
- Reduced motion media query for animations
- Form labels explicitly associated
- High contrast mode compatible

## Component inventory

The reference page composes these patterns from the tokens above:

1. Atelier Header: Minimalist black bar with white typography, rose gold accents
2. Runway Stats: Large numerals with fashion metrics, dramatic spacing
3. Collection Grid: Gallery-style cards with generous whitespace, editorial images
4. Designer Table: Monochromatic data with sophisticated row alternation
5. Couture Form: Elegant inputs with refined borders, subtle focus states
6. Fashion Buttons: Slim, architectural, sophisticated hover transformations
7. Status Badges: Rose gold accents, champagne backgrounds, refined typography
8. Atelier Footer: Minimalist links with Parisian cultural references

## Further guidance

### Spatial Hierarchy

- 8px baseline grid (fashion precision)
- Generous whitespace like gallery walls (80-120px between major sections)
- Asymmetric balance (editorial layout influence)
- Dramatic scale contrasts (runway presentation)
- Breathing room for each element (couture spacing)
- Golden ratio proportions (classical elegance)

### Emotional Temperature

- Cool Chic (3/10):
- Predominantly black and white creates distance
- Rose gold provides minimal warmth
- Overall palette is aloof and exclusive
- Intentionally intimidating to non-initiates
- Parisian cool detachment
- Artistic intellectualism over friendliness

### Formality Level

- Extreme Formality (9/10):
- Haute couture demands highest sophistication
- Parisian cultural capital and refinement
- Art gallery seriousness and curation
- Designer authority and expertise
- Fashion week exclusivity
- Atelier professionalism and craftsmanship
- Suitable only for luxury fashion brands

### Performance Optimization

- Minimal DOM complexity (gallery simplicity)
- Font subsetting for Didot display use only
- System font fallbacks (-apple-system, BlinkMacSystemFont)
- CSS Grid for efficient layouts
- No JavaScript dependencies for core interface
- Optimized for high-resolution displays (Retina, 4K)
- Lazy loading for collection imagery
- Progressive enhancement strategy

### Brand Alignment

- Establishes haute couture credibility through:
- Parisian design heritage and cultural capital
- Fashion week presentation quality
- Art gallery curatorial precision
- Designer portfolio elegance
- Atelier craftsmanship attention to detail
- Timeless sophistication over trends
- Exclusivity through refined minimalism

### Use Cases

- Haute couture fashion houses (Chanel, Dior level)
- Designer portfolio and lookbook platforms
- Fashion week organization systems
- Luxury brand campaign management
- Atelier production tracking
- Fashion buyer and merchandising dashboards
- Collection curation and archiving
- Fashion press and editorial management
- Designer collaboration platforms
- Luxury e-commerce for ultra-high-end fashion

### Competitive Differentiation

- Unlike typical fashion websites, this design:
- Achieves art gallery sophistication in digital form
- Uses authentic haute couture typography (Didot heritage)
- Balances extreme minimalism with functional complexity
- References Parisian cultural capital authentically
- Demonstrates fashion authority through restraint
- Creates exclusivity through design language itself

### Scalability

- Component system supports:
- Multiple seasonal collections
- Designer portfolios and attributions
- Fabric and material libraries
- Production and atelier workflows
- Fashion show and event management
- Press and editorial content
- Client and buyer relationship management
- Modular collection presentation
- Archive and heritage documentation

## Not synced

Built from `style-247-haute-couture.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--touch-min`, `--focus-ring`, `--focus-offset`.
