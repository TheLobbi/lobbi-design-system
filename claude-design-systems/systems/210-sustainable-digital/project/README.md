This interface embodies the principles of sustainable digital design - reducing carbon footprint through efficient code, dark-mode-first approach, minimal resource consumption, and eco-conscious visual language. Every design decision considers environmental impact: reduced data transfer, lower energy consumption, accessibility for all, and longevity over trends.

**Blend:** Sustainable Design 55% + Low Carbon UI 25% + Eco Conscious 20%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** tech, creative  
**Perfect for:** Sustainable Tech, Eco Companies, Green Design

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Low Carbon Interface”, “Sustainable Design Principles”, “Dark Mode First”, “Single Font Family”.
- Buttons are short verb phrases in Title Case: “🌱 Calculate Impact”, “📊 View Report”, “Reset”.
- Navigation uses single nouns: “Home”, “Impact”, “Resources”, “About”.
- The reference page uses emoji as inline glyphs (🌱 📊 ♻ ⚡ ♿ 🌍); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-forest-green`, `color-earth-brown`, `color-light-green`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`badge-error-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Forest Green (#166534): Growth, nature, sustainability, life
- Deep Green (#14532d): Stability, earth, environmental responsibility
- Moss Green (#365314): Natural, organic, grounded
- Sage Gray (#6b7280): Neutrality, balance, minimal impact
- Earth Brown (#78350f): Soil, foundation, natural materials
- Off-White (#fafaf9): Paper texture, natural light, minimal brightness

## Typography

- `display` — "Atkinson Hyperlegible", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

Faces are hosted on Google Fonts (Atkinson Hyperlegible); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Atkinson Hyperlegible:
- Specifically designed for accessibility and readability
- Greater legibility for low vision readers
- Maximizes character recognition
- Reduced data transfer with single optimized font family
- System font fallbacks for zero-load alternative

- System Font Stack Fallback:
- Zero additional HTTP requests
- Native rendering performance
- Respects user's system preferences
- Minimal energy consumption

## Spacing, shape and elevation

- Spacing steps: `spacing-unit` 16px, `spacing-xs` 8px, `spacing-sm` 16px, `spacing-md` 24px, `spacing-lg` 32px, `spacing-xl` 48px. Pad cards and sections from these steps only.
- Corners: `border-radius` 8px.

1. Header: Minimal navigation, efficient layout
2. Eco Stats: Environmental impact metrics
3. Sustainable Cards: Low-energy content presentation
4. Efficient Table: Minimal styling, maximum readability
5. Simple Form: Accessible inputs with clear labels
6. Minimal Buttons: CSS-only effects, no images
7. Status Badges: Semantic colors, minimal decoration
8. Footer: Lightweight links, efficient structure

## States and motion

- CSS-only hover states (no JavaScript)
- Minimal transitions reducing GPU load
- Efficient focus states for accessibility
- Simple animations respecting prefers-reduced-motion
- Keyboard navigation prioritized

Timing values: `--transition-base` 200ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AAA compliant contrast ratios (7:1 minimum)
- Atkinson Hyperlegible font for maximum readability
- Dark mode default reducing eye strain
- Semantic HTML throughout
- Comprehensive keyboard navigation
- Screen reader optimized structure
- Large touch targets (48x48px minimum)
- Clear focus indicators (4px minimum)
- No motion by default (respects preferences)

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Minimal navigation, efficient layout
2. Eco Stats: Environmental impact metrics
3. Sustainable Cards: Low-energy content presentation
4. Efficient Table: Minimal styling, maximum readability
5. Simple Form: Accessible inputs with clear labels
6. Minimal Buttons: CSS-only effects, no images
7. Status Badges: Semantic colors, minimal decoration
8. Footer: Lightweight links, efficient structure

## Further guidance

### Spatial Hierarchy

- 16px base unit (browser default, no calculation overhead)
- Consistent spacing reducing CSS complexity
- Generous whitespace improving readability
- Simple grid reducing rendering complexity
- Minimal nesting for efficient DOM

### Emotional Temperature

- Calm Responsible (6/10):
- Natural color palette creating calm
- Earthy tones suggesting responsibility
- Balanced warmth from earth colors
- Trustworthy greens building confidence
- Not cold, not overly warm - balanced

### Formality Level

- Professional Conscious (6/10):
- Professional design with environmental awareness
- Clear communication without pretension
- Accessible language for all audiences
- Business appropriate with ethical stance

### Performance Optimization

- Single font family (Atkinson Hyperlegible)
- System font fallback (zero load time)
- No images (CSS-only visuals)
- Embedded CSS (no additional requests)
- Minimal CSS (under 15KB)
- No JavaScript required
- Efficient selectors
- Minimal DOM depth
- CSS Grid for efficient layouts
- No external dependencies

### Environmental Impact

- Estimated page weight: <30KB
- CO2 per page view: ~0.05g (vs industry avg 0.5g)
- Dark mode reduces screen energy by ~60%
- Cached resources eliminate repeat loads
- Efficient code reduces server processing
- Accessible to all reducing digital divide

### Brand Alignment

- Establishes environmental credibility through:
- Visible commitment to sustainability
- Transparent environmental impact
- Ethical design practices
- Inclusive accessibility standards
- Long-term thinking over trends

### Use Cases

- Sustainability-focused organizations
- Environmental NGOs and non-profits
- Green technology companies
- Eco-conscious businesses
- Carbon tracking applications
- Sustainable product platforms
- Environmental education sites

### Competitive Differentiation

- Unlike typical "green" designs, this interface:
- Reduces environmental impact through technical decisions
- Prioritizes efficiency over visual flourishes
- Uses dark mode for energy savings
- Eliminates unnecessary resources
- Demonstrates sustainability through design choices

## Not synced

Built from `style-210-sustainable-digital.html`. No component bundle: the reference page's markup is not packaged as live components.
