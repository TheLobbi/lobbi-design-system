Blend: Photography Professional (80%) + Gallery Minimal (20%) This design establishes a professional photography platform that prioritizes visual storytelling through gallery-style presentation. Drawing inspiration from Magnum Photos and elite photographer portfolios, the interface recedes to let imagery dominate while maintaining sophisticated organizational tools. VISUAL HIERARCHY & COMPOSITION 1. Image-First Architecture 2. Gallery Exhibition Model 3. Professional Credibility COLOR PSYCHOLOGY & APPLICATION Primary Palette: Temperature: 5/10 (Neutral Artistic) Formality: 7/10 (High Professional).

**Blend:** Photography Professional 80% + Gallery Minimal 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** media, creative  
**Perfect for:** Photographers, Photography Studios, Visual Artists

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Portfolio Dashboard”, “Featured Projects”, “Urban Stories”, “Architecture 2025”.
- Buttons are short verb phrases in Title Case: “All”, “Published”, “Licensed”, “Draft”.
- Navigation uses single nouns: “Portfolio”, “Projects”, “Collections”, “Licensing”, “About”.
- The reference page uses emoji as inline glyphs (★ ✎ ↗ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Font Family: Inter (Variable)
- 300 Light: Captions, timestamps, metadata
- 400 Regular: Body text, descriptions
- 500 Medium: Navigation, labels
- 600 Semibold: Section headers, card titles
- 700 Bold: Page titles, primary CTAs

- Hierarchy:
- Display (42px): Main portfolio title
- H1 (32px): Section headers
- H2 (24px): Card headers, project titles
- H3 (18px): Subsection labels
- Body (15px): Standard text
- Caption (13px): Metadata, timestamps

- Line Height: 1.6 for optimal reading
- Letter Spacing: -0.01em for headings (optical tightening)

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Grid Structure:
- 12-column responsive grid
- Gallery-style margins: 60px desktop, 24px mobile
- Vertical rhythm: 8px base unit (multiples of 8)
- Card padding: 32px (4 × base unit)

- Spacing Scale (8px base):
- xs: 8px   - Tight elements
- sm: 16px  - Related items
- md: 24px  - Card internal spacing
- lg: 32px  - Section separation
- xl: 48px  - Major boundaries
- 2xl: 64px - Gallery walls

- COMPONENT ARCHITECTURE

1. Header Navigation
- Minimal logo/photographer name
- Clean horizontal navigation
- Subtle search integration
- Profile access without visual noise

2. Stats Grid (4 Cards)
- Portfolio Metrics: Projects, Images, Clients, Recognition
- Large numbers with subtle icons
- Minimal borders, shadow separation
- Hover states reveal additional context

3. Content Gallery (3 Cards)
- Featured Projects: Visual-first cards
- Large preview images with minimal overlay
- Project metadata appears on hover
- Gallery-style grid presentation

4. Data Table
- Recent Uploads: Image management interface
- Thumbnail previews in table rows
- Licensing status, technical metadata
- Clean, scannable typography

5. Footer
- Minimal copyright and links
- Social proof (awards, publications)
- Contact information without clutter

- INTERACTION PATTERNS

- Micro-interactions:
- Subtle scale on hover (1.02x) for cards
- Smooth opacity transitions (300ms ease)
- Shadow depth changes for elevation
- Image overlays appear on interaction only

- Navigation:
- Clear active states with understated indicators
- Breadcrumb trails for deep portfolio navigation
- Filtering without page reload
- Smooth scrolling for single-page sections

- ACCESSIBILITY & PERFORMANCE

- WCAG 2.1 AA contrast ratios (4.5:1 minimum)
- Semantic HTML5 structure
- Keyboard navigation support
- Focus indicators match design language
- Alt text critical for photography platform
- Lazy loading for image-heavy content
- Progressive enhancement philosophy

## States and motion

Timing values: `--transition-fast` 150ms ease, `--transition-base` 300ms ease, `--transition-slow` 500ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Responsive Strategy

- Breakpoints:
- Mobile: 320px - 768px (single column, stacked)
- Tablet: 769px - 1024px (2-column grid)
- Desktop: 1025px+ (3-4 column layouts)

- Image Optimization:
- Responsive images with srcset
- WebP with fallbacks
- Aspect ratio preservation
- Lazy loading below fold

- BUSINESS ALIGNMENT

- Target Users:
- Professional photographers managing portfolios
- Creative directors reviewing work
- Potential clients browsing collections
- Photo editors licensing images

- Core Metrics:
- Portfolio views and engagement
- Project completion tracking
- Client acquisition pipeline
- Licensing revenue streams

- Success Criteria:
- Imagery remains focus, UI recedes
- Professional credibility established immediately
- Easy navigation to featured work
- Client trust through polished presentation

### Design System Tokens

- Colors:
- --color-gallery-white: #fefefe
- --color-shadow-black: #1a1a1a
- --color-neutral-gray: #6b7280
- --color-light-gray: #e5e7eb
- --color-hover-gray: #f9fafb

- Shadows:
- --shadow-sm: 0 1px 2px rgba(26, 26, 26, 0.05)
- --shadow-md: 0 4px 6px rgba(26, 26, 26, 0.07)
- --shadow-lg: 0 10px 15px rgba(26, 26, 26, 0.1)

- Transitions:
- --transition-fast: 150ms ease
- --transition-base: 300ms ease
- --transition-slow: 500ms ease

- COMPETITIVE DIFFERENTIATION

- vs. Generic Portfolio Platforms:
- Museum-quality presentation elevates professionalism
- Business metrics integrated with artistic presentation
- Client management tools without sacrificing aesthetics

- vs. Social Media Photography:
- Controlled environment free from algorithm noise
- Professional licensing and rights management
- Long-form project storytelling capabilities

- FUTURE SCALABILITY

- Component library for consistent portfolio pages
- Template system for different photography genres
- White-label capability for photography agencies
- Integration with stock photography platforms
- Client proofing and feedback workflows

- Generated: 2025-12-09
- Design System: Photography Professional v1.0
- Temperature: 5 (Neutral Artistic) | Formality: 7 (High Professional)

## Not synced

Built from `style-56-photography-pro.html`. No component bundle: the reference page's markup is not packaged as live components.
