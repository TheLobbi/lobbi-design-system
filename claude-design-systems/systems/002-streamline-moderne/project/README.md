Machine Age Elegance & Aerodynamic Motion. Inspired by: 1930s Streamline Moderne, Art Deco Machine Age, Chrysler Building, Raymond Loewy industrial design, ocean liners, zeppelins.

**Blend:** Art Deco 80% + Streamline 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** creative  
**Perfect for:** Design Studios, Creative Agencies, Architecture Firms

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Dashboard”, “Upcoming Events”, “Annual Conference 2025”, “Leadership Workshop”.
- Buttons are short verb phrases in Title Case: “Export”, “+ Add Member”, “View All”, “View All”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Finance”, “Reports”, “Settings”.
- No emoji: meaning is carried by words and icons.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `chrome-100`, `chrome-800`, `accent-teal`, `accent-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --chrome-100: #f8fafc    → Polished aluminum, pristine surfaces
- --chrome-200: #e2e8f0    → Brushed metal, subtle texture
- --chrome-300: #cbd5e1    → Satin finish, refined neutrality
- --chrome-400: #94a3b8    → Weathered chrome, secondary elements
- --chrome-500: #64748b    → Steel gray, industrial strength
- --chrome-600: #475569    → Deep metal, structural elements
- --chrome-800: #1e293b    → Carbon steel, primary surfaces
- --chrome-900: #0f172a    → Engine black, foundational depth
- --platinum:   gradient   → Premium metallic surface, luxury indicator
- --quicksilver: gradient  → Dynamic movement, speed suggestion
- --accent-teal: #14b8a6   → Speed line accent, forward motion
- --accent-blue: #3b82f6   → Technical precision, trustworthy action

## Typography

- `display` — "Space Grotesk", sans-serif
- `body` — "DM Sans", system-ui, sans-serif

Faces are hosted on Google Fonts (DM Sans, Space Grotesk); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

### Type rationale

- DM Sans: Clean, geometric sans-serif for body text and UI elements.
- Embodies the streamlined efficiency of machine-age typography.
- Space Grotesk: Bold, technical display font for headings and logos.
- Evokes precision instruments and engineering blueprints.
- Letter-spacing: Tight negative tracking for modern efficiency

## Spacing, shape and elevation

- Spacing steps: `space-8` 8px, `space-10` 10px, `space-12` 12px, `space-16` 16px, `space-20` 20px, `space-24` 24px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-16` 16px, `radius-full` 50px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

- Horizontal emphasis reflecting speed and movement
- Rounded pill shapes suggesting aerodynamic forms
- 4px accent border evoking chrome trim details
- Gradient overlays creating depth and dimension

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 12.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `chrome-300` 1.3:1, `chrome-400` 2.3:1, `chrome-500` 4.2:1, `accent-teal` 2.2:1, `nav-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA contrast ratios maintained
- Teal accent (#14b8a6) on dark backgrounds: 5.1:1 — **measured 2.2:1** (not for body text)
- Focus states with visible indicators
- Semantic HTML structure with ARIA labels

## Component inventory

The reference page composes these patterns from the tokens above:

- ✓ Header with chrome gradient and speed line accent
- ✓ Navigation with pill-shaped active states
- ✓ Sidebar with section groupings
- ✓ Cards with metallic surface treatment
- ✓ Stats grid with platinum finish
- ✓ Buttons: Primary (teal), Secondary (chrome)
- ✓ Forms with streamlined inputs
- ✓ Tables with industrial styling
- ✓ Badges and status indicators
- ✓ Footer with chrome base

## Further guidance

### Design Motifs

- Speed lines (horizontal accents)
- Chrome gradients (metallic surfaces)
- Rounded corners (50px for pill shapes)
- Subtle shadows (elevation without heaviness)

### Temperature

- (Cool Industrial)

### Formality

- (Professional Modern)

### Energy

- 8/10 (Dynamic, Forward-Moving)

### Responsive Breakpoints

- Mobile: < 768px (collapsed navigation)
- Tablet: 768px - 1024px (adapted sidebar)
- Desktop: > 1024px (full layout)

## Not synced

Built from `style-2-streamline-moderne.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--platinum`, `--quicksilver`.
