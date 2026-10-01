Chamber of Commerce: Chamber of Commerce 80% + Civic Authority 20%.

**Blend:** Chamber of Commerce 80% + Civic Authority 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** association, professional  
**Perfect for:** Local Chambers, Business Associations, Regional Councils

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Regional Chamber of Commerce”, “Chamber Overview”, “Key Initiatives”, “Annual Business Awards Gala”.
- Navigation uses single nouns: “Dashboard”, “Member Directory”, “Events”, “Advocacy”, “Resources”, “Join”.
- The reference page uses emoji as inline glyphs (📅 ⏰ 📍 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-primary`, `gold-secondary`, `burgundy-accent`, `stat-change-text`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary: Deep Navy (#1e3a5f)
- Conveys: Trust, authority, stability, professionalism
- Usage: Headers, navigation, primary containers
- Association: Corporate leadership, institutional reliability

- Secondary: Warm Gold (#c9a227)
- Conveys: Prosperity, achievement, value, excellence
- Usage: Accents, badges, highlights, awards
- Association: Business success, quality standards

- Background: Clean White (#ffffff) + Warm Gray (#f5f5f3)
- Conveys: Clarity, openness, professionalism
- Usage: Alternating sections for visual rhythm
- Association: Transparency, clean communication

- Text: Charcoal (#2d2d2d)
- Conveys: Readability, seriousness, substance
- Usage: Primary body text, data displays
- Association: Business communication standards

- Accent: Muted Burgundy (#8b2942)
- Conveys: Action, importance, urgency (controlled)
- Usage: CTAs, alerts, priority markers
- Association: Executive decision-making

## Typography

- `display` — Merriweather, serif
- `body` — "Source Sans Pro", sans-serif

Faces are hosted on Google Fonts (Merriweather, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Source+Sans+Pro:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Heading Font: Merriweather (Serif)
- Characteristics: Traditional, authoritative, established
- Weights: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
- Usage: Page titles, section headers, featured content
- Rationale: Serif fonts convey institutional longevity and trustworthiness

- Body Font: Source Sans Pro (Sans-Serif)
- Characteristics: Modern, readable, professional
- Weights: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)
- Usage: Body copy, UI elements, data displays
- Rationale: Sans-serif ensures digital readability and contemporary feel

- Numeric Display: Tabular Figures
- Characteristics: Fixed-width, aligned, precise
- Usage: Statistics, financial data, member counts
- Rationale: Professional data presentation standards

## Spacing, shape and elevation

- Spacing steps: `spacing-unit` 8px. Pad cards and sections from these steps only.
- Corners: `radius-card` 8px.
- Elevation: `shadow-subtle`, `shadow-lifted`, lowest first for resting cards, higher for hover and overlays.

- Chamber of Commerce (80%):
- ├─ Traditional serif typography for institutional credibility
- ├─ Professional navy/gold color scheme signaling stability
- ├─ Statistical dashboards showcasing economic impact
- ├─ Member directory structures emphasizing community
- Business-focused content hierarchy

- Civic Authority (20%):
- ├─ Clean, accessible layouts prioritizing clarity
- ├─ Data tables with governmental precision
- ├─ Legislative/advocacy update sections
- Formal spacing and alignment protocols

## States and motion

- Hover States:
- Subtle lift (translateY -2px) on cards
- Shadow depth increase for dimensionality
- Color shifts on interactive elements

- Click Affordances:
- Burgundy CTAs with clear labeling
- Button styling with adequate touch targets
- Cursor changes on interactive elements

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 12.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `gold-secondary` 2.2:1, `white-bg` 1.1:1, `status-planning-text` 3.5:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AA contrast ratios (navy on white: 12:1, gold on navy: 4.8:1)
- Semantic HTML structure (nav, main, section, article)
- Tabular data in proper table elements
- Font sizes ≥ 16px for body text
- Clear focus indicators for keyboard navigation

## Further guidance

### Design Methodology

- This design synthesizes the institutional authority of Chamber of Commerce
- aesthetics (80%) with the public service gravitas of Civic Authority design
- (20%) to create a professional, trustworthy platform for business associations
- and economic development organizations.

### Design Temperature

- (Balanced Professional Warmth)
- This moderate temperature creates a welcoming yet professional atmosphere:

- Warm Elements (5/10):
- ├─ Gold accent color (prosperity, not cold corporate blue)
- ├─ Rounded corners (8px) on cards (approachable, not sharp)
- ├─ Warm gray backgrounds (not stark white throughout)
- ├─ Member photos and community imagery
- Inviting event cards with visual hierarchy

- Cool Elements (5/10):
- ├─ Navy blue primary color (professional restraint)
- ├─ Structured grid layouts (organized, systematic)
- ├─ Clean data tables (factual, authoritative)
- ├─ Formal spacing protocols (institutional discipline)
- Serif typography (traditional establishment)

- Balance Achieved:
- Professional enough for C-suite executives
- Approachable enough for small business owners
- Authoritative enough for policy discussions
- Warm enough for community building

### Formality Level

- (Institutional but Approachable)
- High formality with strategic accessibility:

- Formal Elements (8/10):
- ├─ Traditional color palette (navy, gold, burgundy)
- ├─ Serif headings (institutional typography)
- ├─ Structured layouts (predictable, organized)
- ├─ Professional photography standards
- ├─ Formal language patterns
- ├─ Statistical precision
- Legislative/advocacy sections

- Approachable Elements (2/10):
- ├─ Warm gold accents (not cold metals)
- ├─ Rounded corners (not completely rectilinear)
- ├─ Community-focused imagery
- Member success stories

### Target Audience Alignment

- Primary: Chamber of Commerce Staff/Leadership
- Needs: Member management, event coordination, advocacy tracking
- Design Response: Dashboard-centric, statistics-forward, action-oriented

- Secondary: Business Association Members
- Needs: Directory access, event information, benefit tracking
- Design Response: Clear navigation, member cards, benefits tables

- Tertiary: Economic Development Organizations
- Needs: Impact metrics, legislative updates, community data
- Design Response: Statistical displays, data tables, civic integration

### Functional Design Patterns

1. Member Count Badge (Top Right)
- Establishes credibility through scale
- Gold accent for prestige

2. Statistical Dashboard (Hero Section)
- Four key metrics in grid layout
- Large numbers with tabular figures
- Percentage/currency formatting

3. Key Initiatives Cards (Featured Content)
- Visual hierarchy with iconography
- Date-based organization
- Progress/status indicators

4. Member Directory Preview
- Professional headshots
- Business affiliations
- Contact accessibility

5. Events Calendar Section
- Chronological organization
- Registration CTAs
- Category tagging

6. Legislative Updates Module
- Policy-focused content
- Date stamps for timeliness
- Action items for advocacy

7. Sponsor Recognition Area
- Tiered visibility (Gold, Silver, Bronze)
- Logo display standards
- Partnership acknowledgment

8. Member Benefits Table
- Clean data presentation
- Tier comparisons
- Feature availability matrix

9. Recent Activity Feed
- Timestamp formatting
- Member attribution
- Action categorization

### Information Hierarchy

- Level 1 (Immediate Priority):
- Total Members, Revenue, Events, Retention metrics
- Establishes organizational health at a glance

- Level 2 (Strategic Focus):
- Key Initiatives cards
- Shows active programs and priorities

- Level 3 (Community Engagement):
- Member Directory, Events, Activity Feed
- Facilitates networking and participation

- Level 4 (Institutional Authority):
- Legislative Updates, Sponsor Recognition
- Demonstrates influence and partnerships

### Spatial Design Principles

- Grid System: 4-column layout (responsive collapse)
- Whitespace: Generous (24px-48px) for clarity and breathing room
- Alignment: Strict left-alignment for readability, centered for emphasis
- Grouping: Related content in proximity with subtle separators

- Card Spacing:
- 24px gap between cards in grids
- 32px vertical spacing between major sections
- 16px internal padding for content comfort

### Data Visualization Strategy

- Dashboard Metrics:
- Large numerals (36px+) for quick scanning
- Secondary labels (14px) for context
- Positive indicators (green) for growth metrics
- Neutral presentation for stable metrics

- Tables:
- Alternating row backgrounds for scannability
- Right-aligned numeric columns
- Left-aligned text columns
- Fixed-width for consistent alignment

## Not synced

Built from `style-71-chamber-commerce.html`. No component bundle: the reference page's markup is not packaged as live components.
