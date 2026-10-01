Government Civic: Government 80% + Civic Trust 20%.

**Blend:** Government 80% + Civic Trust 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** professional  
**Perfect for:** Government Agencies, Public Services, Civic Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Citizen Services Portal”, “Service Update”, “Service Statistics”, “Your Services”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-primary`, `table-link-bg`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-success-light`, `color-alert`, `color-alert-light`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px. Pad cards and sections from these steps only.
- Corners: `border-radius` 0.
- Elevation: `shadow-sm`, `shadow-md`, lowest first for resting cards, higher for hover and overlays.

- Blend Composition: Government Digital Services (80%) + Civic Trust (20%)

- Design Philosophy: Accessible government services prioritizing citizen needs
- through WCAG AA compliance, clear information hierarchy, and trustworthy
- visual language. Inspired by GOV.UK Design System and U.S. Digital Service.

## States and motion

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 200ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 6.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-surface` 1.1:1, `table-link-bg` 1.2:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Core Design Tokens

- Color Palette (Accessibility-First):
- Primary:    #003087 (Government Blue) - Official identity
- Surface:    #ffffff (White) - Maximum readability
- Success:    #00703c (Accessible Green) - Status confirmation
- Alert:      #b91c1c (Status Red) - Critical notifications
- Neutral:    #f3f4f6 (Light Gray) - Section backgrounds
- Text:       #0b0c0c (Near Black) - Optimal contrast
- Border:     #b1b4b6 (Mid Gray) - Subtle separators

- Typography System:
- Font Family: 'Source Sans Pro' (sans-serif) - Accessible, readable
- Scale: Modular (16px base, 1.25 ratio)
- Line Height: 1.5-1.6 (enhanced readability)
- Letter Spacing: Standard (no tracking adjustments)

- Spatial System (8px Grid):
- Micro:      8px  - Tight element spacing
- Small:      16px - Component padding
- Medium:     24px - Section spacing
- Large:      32px - Major divisions
- XLarge:     48px - Page sections

- COMPONENT ARCHITECTURE

- Service Cards: Clean layouts with clear calls-to-action
- Application Trackers: Step-based progress visualization
- Document Portals: Organized access to citizen resources
- Notification Banners: High-contrast status communication
- Data Tables: Accessible, scannable information display

- ACCESSIBILITY COMPLIANCE (WCAG 2.1 AA)

- Minimum 4.5:1 contrast ratio for all text
- Focus indicators visible on all interactive elements
- Semantic HTML structure for screen readers
- Skip navigation links for keyboard users
- Clear visual hierarchy with proper heading levels
- Touch targets minimum 44x44px
- Form labels explicitly associated with inputs
- Error messages linked via aria-describedby

- INTERACTION PATTERNS

- Temperature: Neutral Trustworthy (5/10)
- Professional without being cold
- Helpful without being casual
- Efficient without being rushed

- Formality: High Official (8/10)
- Authoritative language patterns
- Formal terminology and structure
- Official government tone

- Hover States: Subtle darkening (10-15%) with 200ms transitions
- Focus States: 3px solid outline with 2px offset
- Active States: Slightly darker with subtle inset shadow
- Loading States: Subtle pulse animation, accessible to motion-sensitive users

### Responsive Strategy

- Mobile-First: Base styles optimized for 320px viewports
- Breakpoints: 640px (tablet), 1024px (desktop), 1280px (wide)
- Grid: Flexbox-based responsive layouts
- Images: Not used (text-first government approach)

- TRUST INDICATORS

- Official government blue establishes authority
- High contrast ensures transparency
- Clear status indicators build confidence
- Consistent spacing creates reliability
- Simple language promotes understanding

- PERFORMANCE CONSIDERATIONS

- Single web font family (Source Sans Pro)
- No images or icons (text-based approach)
- Minimal CSS complexity
- No JavaScript dependencies
- Fast initial paint for government networks

### Brand Alignment

- BROOKSIDE BI
- This design establishes scalable, accessible patterns for government and
- civic sector clients requiring WCAG compliance and public sector trust.
- Professional execution demonstrates enterprise-grade accessibility expertise.

## Not synced

Built from `style-66-government-civic.html`. No component bundle: the reference page's markup is not packaged as live components.
