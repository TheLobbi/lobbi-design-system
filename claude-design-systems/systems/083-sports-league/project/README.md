Sports League: Sports League 80% + Athletic Excellence 20%.

**Blend:** Sports League 80% + Athletic Excellence 20%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** association  
**Perfect for:** Sports Leagues, Athletic Associations, Recreation Councils

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Lobbi Sports League”, “League Dashboard 2025”, “Division A Standings”, “Playoff Schedule 2025”.
- Buttons are short verb phrases in Title Case: “Register New Team”, “View All Teams”, “Verify Players”, “Export List”.
- Navigation uses single nouns: “Dashboard”, “Standings”, “Schedule”, “Teams”, “Players”, “Register”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `championship-blue`, `victory-gold`, `energy-red`, `slate-dark`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`green-success`, `orange-warning`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary (#1d4ed8 - Championship Blue): Competition, trust, authority
- Secondary (#eab308 - Victory Gold): Achievement, success, prestige
- Background (#ffffff/#f9fafb): Clean, organized, professional
- Text (#1e293b - Dark Slate): Strong, readable, authoritative
- Accent (#dc2626 - Energy Red): Urgency, excitement, action

## Typography

- `display` — Oswald, sans-serif
- `body` — Roboto, sans-serif

Faces are hosted on Google Fonts (Oswald, Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap">
```

- Set titles in `display` and running text in `body`.
- Uppercase is reserved for small labels (`display`, `heading-1`, `heading-3`, `label`), always with the letter-spacing given.

### Type rationale

- Headings: Oswald - Athletic impact, competitive spirit, bold presence
- Body: Roboto - Clear legibility, scoreboard aesthetic, modern professionalism
- Feature: Tabular numbers for consistent statistics alignment

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-6` 6px, `space-10` 10px, `space-12` 12px, `space-16` 16px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-8` 8px, `radius-20` 20px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

- Grid-based standings tables for competitive clarity
- Card-based schedule layouts for game organization
- Badge-driven status indicators for quick recognition
- Hierarchical information display for league structure

## States and motion

- Evokes: Team spirit, competitive drive, fair play, organized athletics
- Conveys: Professional league management, transparent standings, achievement recognition
- Inspires: Participation, excellence, sportsmanship, community engagement

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Design System Specifications

- Blend Ratio: Sports League (80%) + Athletic Excellence (20%)
- Temperature: 7/10 (energetic but professional)
- Formality: 6/10 (competitive yet organized)
- Target Audience: Amateur sports leagues, athletic associations, recreational leagues

### Functional Elements

- ✓ Season standings table with win/loss records
- ✓ Game/match schedule with venue details
- ✓ Team registration status tracking
- ✓ Player eligibility verification
- ✓ Referee/official assignments
- ✓ Championship bracket visualization
- ✓ Award nominations display
- ✓ Facility booking calendar

### Design Principles

1. Athletic Competition: Visual hierarchy emphasizing rankings and performance
2. Organized Management: Clear structure for complex league data
3. Achievement Focus: Highlighting excellence and accomplishments
4. Real-Time Updates: Dynamic presentation of current standings
5. Professional Sport: Maintaining credibility while celebrating competition

## Not synced

Built from `style-83-sports-league.html`. No component bundle: the reference page's markup is not packaged as live components.
