Blend Formula: Streaming Platform (80%) + Entertainment Premium (20%) Strategic Intent: Premium streaming services (Netflix, Apple TV+) Core Experience: Content discovery, binge-worthy presentation, immersive viewing User Psychology: Lean-back experience, emotional engagement, discovery.

**Blend:** Streaming Platform 80% + Entertainment Premium 20%  
**Temperature:** 4/10 (cool) · **Formality:** 5/10 · **Tags:** media, tech  
**Perfect for:** Streaming Services, Entertainment Platforms, Media Tech

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Platform Overview”, “Continue Watching”, “The Quantum Directive”, “Neon Chronicles”.
- Buttons are short verb phrases in Title Case: “View All →”, “Resume”, “Info”, “Resume”.
- Navigation uses single nouns: “Home”, “TV Shows”, “Movies”, “New & Popular”, “My List”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `brand-red`, `accent-blue`, `status-badge-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 4px, `spacing-sm` 8px, `spacing-md` 16px, `spacing-lg` 24px, `spacing-xl` 32px, `spacing-2xl` 48px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-8` 8px, `radius-12` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-smooth` all 0.3s cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `brand-red` 3.8:1, `accent-blue` 4.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Design Token System

- Color Palette (Immersive Dark):
- --stream-dark: #141414      (Primary background - deep streaming black)
- --stream-darker: #0a0a0a    (Elevated surfaces)
- --content-white: #e5e5e5    (Primary text - soft white)
- --brand-red: #e50914        (Primary accent - Netflix red)
- --accent-blue: #0071eb      (Interactive elements - premium blue)
- --gray-700: #808080         (Secondary text)
- --gray-800: #404040         (Subtle borders)
- --card-hover: #2a2a2a       (Hover states)

- Typography Scale (Netflix Sans Style):
- Headings: Inter 700-900 (bold, commanding)
- Body: Inter 400-500 (clean, readable)
- Labels: Inter 600 (medium weight for emphasis)

- Spacing System (Content-First):
- Base: 4px multiplier
- Content rows: 32px vertical spacing
- Cards: 16px gap for horizontal scrolling
- Sections: 48px between content rows

- Component Architecture:
- Content cards with 16:9 aspect ratio
- Horizontal scroll rows (Netflix pattern)
- Preview hover with scale transform
- Continue watching progress bars
- Category navigation with smooth scroll

- INTERACTION PATTERNS

- Temperature: Cool Immersive (4/10)
- Dark, cinematic backgrounds
- Subtle animations on hover
- Content-focused with minimal UI chrome

- Formality: Entertainment Casual (5/10)
- Approachable language
- Engaging content presentation
- Balance between premium and accessible

- Micro-interactions:
- Card scale on hover (1.05x transform)
- Smooth fade-in for images
- Progress bars with gradient fills
- Subtle shadow elevation

- ACCESSIBILITY CONSIDERATIONS

- WCAG 2.1 AA Compliance:
- White text (#e5e5e5) on dark (#141414) = 14.8:1 contrast
- Red accent (#e50914) reserved for high-contrast use
- Focus states with 3px outline
- Keyboard navigation for all interactive elements
- Screen reader labels for content cards
- Reduced motion support via prefers-reduced-motion

### Responsive Strategy

- Breakpoints:
- Mobile: 320px-768px (stacked cards)
- Tablet: 768px-1024px (2-3 cards per row)
- Desktop: 1024px+ (4-6 cards per row)

- Layout Adaptation:
- Horizontal scroll containers on mobile
- Grid layout on larger screens
- Fluid typography scaling
- Touch-friendly 48px+ tap targets

- PERFORMANCE OPTIMIZATION

- Lazy loading for content images
- CSS transforms for smooth animations (GPU acceleration)
- Intersection Observer for scroll-triggered loading
- Minimal repaints via transform/opacity animations
- Web font optimization with display swap

- ╔══════════════════════════════════════════════════════════════════════════════╗
- ║                           IMPLEMENTATION NOTES                                 ║
- ╚══════════════════════════════════════════════════════════════════════════════╝

## Not synced

Built from `style-58-streaming-platform.html`. No component bundle: the reference page's markup is not packaged as live components.
