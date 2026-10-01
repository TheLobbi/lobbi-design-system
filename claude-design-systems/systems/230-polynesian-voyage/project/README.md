This design celebrates the rich tradition of Pacific Island navigation and exploration. Drawing inspiration from ancient wayfinding techniques, ocean currents, and traditional Polynesian art forms, the design honors the deep connection between Pacific peoples and the sea. The aesthetic combines the fluid motion of waves, the geometric precision of tapa cloth patterns, and the adventurous spirit of voyaging canoes that connected islands across vast ocean expanses.

**Blend:** Ocean Navigation 55% + Pacific Island Art 30% + Explorer Spirit 15%  
**Temperature:** 8/10 (warm) · **Formality:** 5/10 · **Tags:** heritage, hospitality  
**Perfect for:** Pacific Culture, Polynesian Heritage, Ocean Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Polynesian Voyage Society”, “Recent Voyages & Expeditions”, “Join Our Voyage”, “Featured Voyage”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Learn More”, “Apply for Crew”, “Track Active Voyages”.
- Navigation uses single nouns: “Dashboard”, “Voyages”, “Navigation”, “Island Culture”, “Ocean Science”, “Community”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `ocean-blue`, `sunset-coral`, `navigation-gold`, `ocean-mist`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary: Ocean Blue (#0891b2)
- Evokes vast Pacific waters, deep ocean voyages, trust in navigation
- Psychology: Depth, wisdom, journey, connection, trust
- Usage: Primary actions, headers, navigation elements
- Cultural significance: The ocean as highway and homeland
- Accessibility: WCAG AA compliant (4.5:1) with white text

- Secondary: Sunset Coral (#fb7185)
- Inspired by tropical sunsets, coral reefs, and traditional dyes
- Psychology: Warmth, community, vitality, island beauty
- Usage: Accents, highlights, call-to-action elements, celebrations
- Balance: Provides warmth against cool ocean blues
- Cultural meaning: Dawn and dusk navigation, coral reef ecosystems

- Tertiary: Tapa Tan (#a3a3a3)
- Represents traditional bark cloth, natural materials, earth tones
- Psychology: Heritage, craftsmanship, natural materials, grounding
- Usage: Neutral elements, text, borders, backgrounds
- Texture: Suggests natural fibers and traditional materials

- Quaternary: Volcanic Black (#171717)
- Inspired by volcanic rock formations and traditional canoe hulls
- Psychology: Strength, foundation, islands rising from ocean
- Usage: Text, strong contrasts, grounding elements
- Symbolism: The solid earth within the fluid ocean

- Accent: Navigation Gold (#fbbf24)
- Star light, sun navigation, precious discoveries
- Usage: Success states, achievements, highlighting key information

- Neutral Palette:
- Sand White (#fafaf9): Light backgrounds, breathing space
- Ocean Mist (#f0fdfa): Subtle backgrounds for cards
- Deep Water (#164e63): Dark variant for emphasis

## Typography

- `display` — Vollkorn, serif
- `body` — Lexend, sans-serif

Faces are hosted on Google Fonts (Lexend, Vollkorn); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Vollkorn:wght@400;600;700;900&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Display/Heading: Vollkorn (Serif)
- Characteristics: Strong, storytelling, literary quality
- Weight range: 400 (Regular), 600 (Semibold), 700 (Bold), 900 (Black)
- Usage: Storytelling headers, narrative content, cultural documentation
- Rationale: Evokes oral tradition, voyage narratives, historical accounts
- Cultural connection: The importance of story in Polynesian culture
- Line height: 1.2-1.3 for impact, 1.4-1.5 for reading

- Body/Interface: Lexend (Sans-serif)
- Characteristics: Excellent readability, wayfinding clarity, modern
- Weight range: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Usage: Body text, UI elements, navigation, data displays
- Rationale: Designed for reading clarity—essential for navigation
- Special feature: Created for accessibility and dyslexia support
- Line height: 1.6-1.7 for optimal scanning and readability

- Type Scale:
- Display (2.75rem/44px): Hero sections, voyage titles
- H1 (2.25rem/36px): Main page headers
- H2 (1.75rem/28px): Section headers
- H3 (1.375rem/22px): Card headers, subsections
- Body (1rem/16px): Primary reading text
- Small (0.875rem/14px): Metadata, captions
- Tiny (0.75rem/12px): Labels, timestamps

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-14` 14px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-12` 12px, `radius-16` 16px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Layout System:
- Fluid grid: Adapts like ocean currents to container size
- Breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)
- Max width: 1400px for optimal content flow
- Spacing: 8px base unit (0.5rem) for rhythmic consistency
- Flow: Content flows like water, adapting to constraints

- Card Components:
- Border radius: 16px (smooth like wave-worn stones)
- Wave-inspired edges: Subtle curves and flowing transitions
- Layered depth: Multiple shadow levels suggest ocean depth
- Pattern overlays: Tapa cloth-inspired decorative elements
- Padding: 24-32px for comfortable content spacing

- Pattern Integration:
- Tapa cloth patterns: Geometric designs as subtle backgrounds
- Wave motifs: Flowing lines and curves throughout
- Star navigation: Subtle compass rose and star elements
- Ocean gradients: Blues transitioning like water depth

- Interactive Elements:
- Buttons: Rounded like canoe hulls, responsive hover states
- Links: Wave-underline animation on hover
- Forms: Clean inputs with ocean-blue focus states
- Transitions: Smooth like ocean swells (300-400ms)
- Hover effects: Subtle lift like a voyaging canoe on waves

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `ocean-blue` 3.4:1, `sunset-coral` 2.5:1, `tapa-tan` 2.3:1, `badge-bg` 1.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Color Contrast:
- All text combinations meet WCAG 2.1 AA minimum (4.5:1)
- Primary buttons meet AAA standards (7:1+)
- Pattern overlays never reduce text legibility
- Color-blind friendly: Multiple visual indicators beyond color
- Testing: Verified with various color blindness simulators

- Interactive Elements:
- Touch targets: Minimum 44x44px on all interactive elements
- Focus indicators: 3px solid outline with 2px offset
- Keyboard navigation: Full tab order, skip links provided
- Focus management: Logical flow, trapped focus in modals
- Active states: Clear visual feedback on all interactions

- Typography:
- Minimum size: 16px (1rem) for body text
- Line height: 1.6+ for body text (optimal for readability)
- Line length: 65-75 characters for comfortable reading
- Font choice: Lexend specifically chosen for accessibility
- Zoom support: Layout remains functional at 200% zoom
- Contrast: 4.5:1 minimum for all text

- Screen Reader Support:
- Semantic HTML5: Proper heading hierarchy, landmarks
- ARIA labels: Descriptive labels for all interactive elements
- Alt text: Meaningful descriptions for all images
- Form labels: Properly associated with inputs
- Status messages: Announced to screen readers appropriately

- Motion & Animation:
- Respects prefers-reduced-motion media query
- Essential animations only (no decorative motion)
- Smooth transitions enhance understanding
- No auto-playing animations that could cause distraction
- Parallax effects disabled for reduced-motion preference

## Component inventory

The reference page composes these patterns from the tokens above:

- Layout System:
- Fluid grid: Adapts like ocean currents to container size
- Breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)
- Max width: 1400px for optimal content flow
- Spacing: 8px base unit (0.5rem) for rhythmic consistency
- Flow: Content flows like water, adapting to constraints

- Card Components:
- Border radius: 16px (smooth like wave-worn stones)
- Wave-inspired edges: Subtle curves and flowing transitions
- Layered depth: Multiple shadow levels suggest ocean depth
- Pattern overlays: Tapa cloth-inspired decorative elements
- Padding: 24-32px for comfortable content spacing

- Pattern Integration:
- Tapa cloth patterns: Geometric designs as subtle backgrounds
- Wave motifs: Flowing lines and curves throughout
- Star navigation: Subtle compass rose and star elements
- Ocean gradients: Blues transitioning like water depth

- Interactive Elements:
- Buttons: Rounded like canoe hulls, responsive hover states
- Links: Wave-underline animation on hover
- Forms: Clean inputs with ocean-blue focus states
- Transitions: Smooth like ocean swells (300-400ms)
- Hover effects: Subtle lift like a voyaging canoe on waves

## Further guidance

### Temperature & Formality Ratings

- Temperature: 8/10 (Tropical Warm)
- Warm coral accents create inviting tropical atmosphere
- Ocean blues provide cooling balance
- Overall feeling: Welcoming island hospitality
- Energy level: Active, adventurous, but not overwhelming
- Emotional tone: Optimistic, connected, exploratory
- Appropriate for: Community organizations, educational institutions,
- cultural centers, adventure travel, ocean conservation

- Formality: 5/10 (Accessible Professional)
- Professional enough for educational and cultural institutions
- Approachable and community-focused
- Not corporate-formal, maintains cultural authenticity
- Balance: Respects tradition while remaining accessible
- Tone: Knowledgeable but welcoming, expert but inclusive

### Cultural Considerations

- Patterns inspired by authentic Polynesian art traditions
- Navigation elements honor traditional wayfinding practices
- Color choices reflect Pacific Island natural environments
- Respectful representation of cultural knowledge and practices
- Design acknowledges the deep connection between people and ocean
- Typography choices support multilingual content

### Responsive Behavior

- Mobile-first design philosophy (essential for island connectivity)
- Touch-optimized for mobile devices (primary access method)
- Fluid typography scales smoothly across breakpoints
- Flexible images: Responsive and performance-optimized
- Navigation: Simplified mobile menu with clear hierarchy
- Content priority: Most important content accessible first
- Performance: Optimized for slower island internet connections

### Performance Optimization

- CSS patterns: No image files needed for decorative elements
- Font loading: display=swap prevents invisible text
- Minimal shadows: Performance-friendly visual depth
- Transform-based animations: GPU-accelerated for smoothness
- Efficient selectors: Optimized CSS for fast rendering
- Lazy loading: Images load as needed
- Critical CSS: Above-fold styles load first

### Design Patterns

- Wave pattern: Achieved with CSS gradients and transforms
- Tapa cloth: SVG patterns encoded in CSS for zero HTTP requests
- Ocean depth: Layered shadows and gradients
- Navigation stars: CSS-only decorative elements
- Fluid layouts: CSS Grid and Flexbox for adaptive design

## Not synced

Built from `style-230-polynesian-voyage.html`. No component bundle: the reference page's markup is not packaged as live components.
