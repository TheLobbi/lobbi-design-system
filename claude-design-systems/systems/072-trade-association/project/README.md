This design embodies the authoritative presence of professional trade associations and standards-setting bodies. It balances institutional credibility with technical precision, creating an interface that serves both regulatory oversight and member engagement.

**Blend:** Trade Association 80% + Industry Standards 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** association, professional  
**Perfect for:** Trade Associations, Industry Groups, Sector Councils

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Association Dashboard”, “Industry Standards Updates”, “Certification Programs”, “Policy & Advocacy”.
- Navigation uses single nouns: “Dashboard”, “Standards”, “Certifications”, “Members”, “Resources”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `primary`, `accent`, `certification-level-bg`, `certification-level-bg-2`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`warning`, `success`, `danger`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Steel Blue (#3d5a80): Industry strength, technical authority
- Slate Gray (#4a5568): Precision, neutrality, standards
- Teal (#0d9488): Innovation within tradition, forward-thinking
- Amber (#d97706): Important notices, compliance alerts
- White/Light Gray: Clean, professional backdrop

## Typography

- `display` — "IBM Plex Serif", serif
- `body` — "IBM Plex Sans", sans-serif
- `ibm-plex-mono` — "IBM Plex Mono", monospace

Faces are hosted on Google Fonts (IBM Plex Sans, IBM Plex Serif, IBM Plex Mono); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Serif:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- IBM Plex Serif: Technical authority for headings
- IBM Plex Sans: Clear, standardized body text
- IBM Plex Mono: Standards codes, technical references

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 6px, `radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `accent` 3.6:1, `warning` 3.0:1, `success` 3.6:1, `white` 1.1:1, `gray-400` 1.4:1, `gray-500` 2.0:1, `gray-600` 3.2:1, `certification-level-text` 4.3:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant contrast ratios
- Semantic HTML structure
- Clear visual hierarchy
- Professional typography scales
- Status indicators with icons and text

## Further guidance

### Visual Strategy

- Blend: Trade Association (80%) + Industry Standards (20%)
- Temperature: 4/10 (cool, authoritative, institutional)
- Formality: 9/10 (highly professional, regulatory feel)
- Target: Industry trade groups, standards bodies, professional federations

### Design Patterns

1. Industry Sector Badges: Visual categorization
2. Compliance Indicators: Status tracking
3. Member Tier System: Gold/Silver/Bronze hierarchy
4. Standards References: Code-style formatting
5. Certification Tracking: Progress visualization
6. Committee Listings: Organizational structure
7. Technical Resources: Document library preview

### Ux Principles

- Authoritative navigation with clear hierarchy
- Standards-compliant data presentation
- Member-centric dashboarding
- Industry news integration
- Certification pathways visibility
- Policy advocacy transparency

### Implementation Notes

- Responsive grid system for multi-device access
- Hover states for interactive elements
- Badge system for quick identification
- Table-based member activity tracking
- Card-based content organization
- Modal-ready for detailed standards views

## Not synced

Built from `style-72-trade-association.html`. No component bundle: the reference page's markup is not packaged as live components.
