Blend denominational authority (80%) with faith community warmth (20%). Create a reverent yet accessible digital space that serves both administrative needs and spiritual connection. Balance sacred tradition with modern ministry effectiveness.

**Blend:** Denominational HQ 80% + Faith Community 20%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** association  
**Perfect for:** Religious Bodies, Faith Denominations, Church Networks

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Grace & Truth Denomination”, “Annual Conference 2025”, “Mission & Outreach Programs”, “Global Missions”.
- Buttons are short verb phrases in Title Case: “View All Programs”, “Access Library”, “Full Directory”.
- Navigation uses single nouns: “Congregations”, “Clergy Resources”, “Missions”, “Annual Conference”, “Youth Ministry”, “Resource Library”.
- The reference page uses emoji as inline glyphs (🌍 🤝 🎓 ❤ 📖 🤲); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `sacred-purple`, `grace-gold`, `grace-gold-light`, `peaceful-ivory`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`, `alert-amber`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — Lato, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Lato); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Cormorant Garamond: Timeless reverence for sacred headings
- Lato: Clear, welcoming readability for body text
- Elegant capitals for denominational terminology

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem, `space-2xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-full` 50px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 AA compliant color contrasts
- Clear visual hierarchy for all ages
- Intuitive navigation for varying tech literacy
- Respectful, inclusive language
- Mobile-responsive for field ministry

## Further guidance

### Visual Strategy

- Sacred Purple (#5b21b6): Spiritual authority, divine calling
- Grace Gold (#d4a843): Light of faith, divine blessing
- Peaceful Ivory (#fffbf5): Gentle warmth, welcoming space
- Deep Burgundy-Brown (#44403c): Grounded wisdom, reverent text
- Hope Blue (#3b82f6): Outreach, ministry extension

### Temperature

- (Warm, Welcoming)
- Inviting without being casual. Professional warmth that respects the
- sacred nature of the work while remaining accessible to all members.

### Formality

- (Reverent but Accessible)
- Maintains dignity and respect for religious tradition while ensuring
- modern usability and approachability for diverse congregations.

### Denominational Features

- Congregation management and statistics
- Clergy roster and credentialing
- Mission giving and stewardship tracking
- Conference and regional organization
- Ministry program coordination
- Resource sharing and theological education

### Faith Community Integration

- Welcoming visual warmth
- Accessible language and navigation
- Community connection emphasis
- Ministry impact storytelling
- Spiritual growth resources

### Target Users

- Denominational leadership and staff
- District superintendents and bishops
- Ordained and licensed clergy
- Congregation administrators
- Ministry coordinators
- Faith community members

### Sacred Design Principles

1. Honor tradition while embracing innovation
2. Serve both administrative and spiritual needs
3. Unite diverse congregations under shared mission
4. Make resources accessible to all levels
5. Celebrate ministry impact and Kingdom growth

## Not synced

Built from `style-85-religious-denomination.html`. No component bundle: the reference page's markup is not packaged as live components.
