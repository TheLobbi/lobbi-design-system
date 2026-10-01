HOA Management: Homeowners Association 80% + Community Management 20%.

**Blend:** Homeowners Association 80% + Community Management 20%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** association  
**Perfect for:** HOAs, Community Associations, Residential Boards

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Community Announcement”, “Community Management Dashboard”, “💳 Your Payment Status”, “📅 Amenity Booking - December”.
- Buttons are short verb phrases in Title Case: “Submit Request”, “View All Projects”, “Community Calendar”, “RSVP”.
- Navigation uses single nouns: “Dashboard”, “Amenities”, “Maintenance”, “Documents”, “Community”.
- The reference page uses emoji as inline glyphs (🏘 💳 📅 🔧 ⚠ 🛠); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `warm-terracotta`, `soft-cream`, `sky-blue`, `metric-badge-text`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Sage Green (#4d7c6f): Nature, community, stability, growth
- Warm Terracotta (#c2703e): Home warmth, earth, belonging
- Soft Cream (#faf8f5): Comfort, residential, approachable
- Sky Blue (#0ea5e9): Clear communication, trust, notices

## Typography

- `display` — Raleway, sans-serif
- `body` — Lato, sans-serif

Faces are hosted on Google Fonts (Raleway, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Lato:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Raleway (Headings): Modern residential aesthetic, clean, friendly
- Lato (Body): Exceptional readability for notices and documents
- Clear hierarchy for announcements, deadlines, and action items

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-8` 8px, `radius-12` 12px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `sage-green` 4.5:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `sky-blue` 2.6:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Psychological Profile

- Temperature: 6/10 - Welcoming neighborhood feel with professional structure
- Formality: 6/10 - Professional but residential, not corporate
- Trust Signals: Transparency in finances, clear communication, community focus

### Target Audience

- → Primary: HOA management companies, condo boards, property managers
- → Secondary: Homeowners, residents, board members
- → Use Cases: Compliance tracking, amenity booking, communication

### Conversion Elements

1. Payment Status Visibility: Transparent dues tracking
2. Amenity Booking: Easy reservation system
3. Communication Hub: Announcements, meetings, documents
4. Maintenance Tracking: Request status and follow-up
5. Community Engagement: Events, projects, directory

### Design Innovations

- ✓ Compliance dashboard with visual status indicators
- ✓ Integrated amenity calendar with real-time availability
- ✓ Architectural review queue with approval workflow
- ✓ Community announcements banner for urgent notices
- ✓ Reserve fund transparency with budget breakdowns
- ✓ Board meeting schedule with agenda access
- ✓ Unit-level compliance tracking table

### Brand Personality

- Organized | Transparent | Community-Focused | Approachable | Efficient

## Not synced

Built from `style-80-hoa.html`. No component bundle: the reference page's markup is not packaged as live components.
