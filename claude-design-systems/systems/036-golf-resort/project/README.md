This interface embodies the exclusive elegance of premier golf destinations like Augusta National and Pebble Beach. The design balances traditional country club heritage with modern functionality, creating a member portal that feels both prestigious and accessible. AESTHETIC BLEND (Golf Resort 75% + Country Club 25%): ┌─────────────────────────────────────────────────────────────────────────────┐ │ GOLF RESORT DNA (75%) │ │ • Lush green palette inspired by championship fairways │ │ • Spacious layouts mimicking course landscape architecture │ │ • Natural elegance with warm earth tones and gold accents │ │ • Course-centric features: tee times, weather, conditions │ │ │ │ COUNTRY CLUB REFINEMENT (25%) │ │ • Traditional serif typography evoking heritage and prestige │ │ • Formal grid structures reflecting institutional stability │ │ • Exclusive membership language and hierarchical information │ │ • Classic color harmony: hunter green, cream, burnished gold │ └─────────────────────────────────────────────────────────────────────────────┘.

**Blend:** Golf Resort 75% + Country Club 25%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** premium, hospitality  
**Perfect for:** Golf Clubs, Country Clubs, Resort Communities

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Pinehurst Country Club”, “Good Morning, Distinguished Member”, “Today's Tee Times”, “Course Conditions”.
- Buttons are short verb phrases in Title Case: “Book Tee Time”, “View Course Map”, “Register Now”.
- Navigation uses single nouns: “Tee Times”, “Tournaments”, “Dining”, “Pro Shop”.
- The reference page uses emoji as inline glyphs (⛳ 🏆 📅 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `fairway-cream`, `tournament-gold`, `clubhouse-brown`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ PRIMARY COLORS                                                               │
- │ • Masters Green (#1d4d2b)    : Championship prestige, natural excellence    │
- │ • Fairway Cream (#faf6eb)    : Clean sophistication, open space            │
- │ • Tournament Gold (#c9a227)  : Achievement, member distinction              │
- │ • Clubhouse Brown (#78593e)  : Traditional warmth, heritage stability       │
- │                                                                              │
- │ SUPPORTING PALETTE                                                           │
- │ • Deep Forest (#163921)      : Depth, premium exclusivity                   │
- │ • Soft Sand (#f5f1e4)        : Subtle elegance, secondary surfaces         │
- │ • Aged Brass (#a68b3a)       : Vintage accents, trophy details             │
- │ • Morning Mist (#e8e4d8)     : Gentle backgrounds, card surfaces            │
- ┘

## Typography

- `display` — "Crimson Pro", serif
- `body` — "Cormorant Garamond", serif

Faces are hosted on Google Fonts (Crimson Pro, Cormorant Garamond); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ PRIMARY: Crimson Pro (Display & Headings)                                   │
- │ • Traditional serif with modern clarity                                     │
- │ • Weights: 300 (elegant), 600 (authoritative), 700 (bold statements)       │
- │ • Usage: Headlines, card titles, navigation, stats                         │
- │                                                                              │
- │ SECONDARY: Cormorant Garamond (Body & Accents)                              │
- │ • Classical elegance for extended reading                                   │
- │ • Refined letterforms suggesting club heritage                              │
- │ • Usage: Body text, descriptions, table content                            │
- │                                                                              │
- │ SCALE STRATEGY                                                               │
- │ • Display (3.5rem)  : Main headlines, hero elements                         │
- │ • H1 (2.5rem)       : Section headers                                       │
- │ • H2 (1.75rem)      : Card titles                                           │
- │ • Body (1.125rem)   : Readable, generous sizing for premium feel           │
- ┘

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px, `radius-full` 50%.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ SPATIAL PHILOSOPHY: "Fairway Breathing Room"                                │
- │ • Base unit: 8px system for mathematical harmony                           │
- │ • Generous margins (32-64px) mimicking course openness                     │
- │ • Card padding: 40px for luxurious internal spacing                        │
- │ • Section gaps: 48px vertical rhythm                                        │
- │                                                                              │
- │ GRID SYSTEM                                                                  │
- │ • Container: 1400px max-width (expansive yet controlled)                   │
- │ • Stats grid: 4-column responsive (championship quartet)                   │
- │ • Content grid: 3-column (tee, fairway, green metaphor)                    │
- │ • Breakpoints: 1200px, 992px, 768px (graceful degradation)                 │
- ┘

## States and motion

Timing values: `--transition-base` 300ms ease, `--transition-slow` 500ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `fairway-cream` 1.0:1, `tournament-gold` 2.2:1, `aged-brass` 3.0:1, `morning-mist` 1.2:1, `category-tag-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ WCAG 2.1 AA STANDARDS                                                        │
- │ • Color contrast: 7.2:1 (green on cream), 12.4:1 (cream on green)          │
- │ • Touch targets: Minimum 44x44px for all interactive elements              │
- │ • Focus indicators: 2px gold outline on keyboard navigation                │
- │ • Semantic HTML: Proper heading hierarchy, ARIA labels                     │
- │ • Screen reader: Descriptive alt text, status announcements                │
- │ • Responsive: Graceful reflow from 320px to 2560px                         │
- ┘

## Component inventory

The reference page composes these patterns from the tokens above:

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ CARDS: Elevated Prestige Surfaces                                           │
- │ • Background: Warm cream with subtle texture                                │
- │ • Border: 1px solid muted green (course boundary metaphor)                 │
- │ • Shadow: Soft (0 4px 20px rgba(29,77,43,0.08)) for floating elegance     │
- │ • Hover: Gentle lift with gold accent reveal                               │
- │                                                                              │
- │ STATS CARDS: Achievement Indicators                                          │
- │ • Large numerals in Crimson Pro 700 (authority)                            │
- │ • Gold accent bar (trophy detail)                                           │
- │ • Icon integration: Golf-specific symbols                                   │
- │ • Micro-interactions: Number count-up on load                              │
- │                                                                              │
- │ DATA TABLE: Tournament Precision                                             │
- │ • Alternating row colors for clarity                                        │
- │ • Green header with cream text                                              │
- │ • Hover states with gold highlight                                          │
- │ • Aligned columns (numbers right, text left)                               │
- │                                                                              │
- │ BUTTONS: Call-to-Action Excellence                                           │
- │ • Primary: Masters green with gold hover state                             │
- │ • Secondary: Cream outline with green fill on hover                        │
- │ • Generous padding (16px 32px) for touch-friendly targets                  │
- │ • Smooth transitions (300ms ease) for refined interactions                 │
- ┘

## Further guidance

### Temperature & Formality Calibration

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ WARMTH INDEX: 5/10 (Warm Traditional)                                       │
- │ • Achieved through: Earth tones, cream backgrounds, golden accents         │
- │ • Balanced by: Structured layouts, formal typography                       │
- │ • Result: Welcoming exclusivity - prestigious yet inviting                 │
- │                                                                              │
- │ FORMALITY SCALE: 8/10 (High Exclusive)                                      │
- │ • Expressed via: Serif typography, structured grids, muted palette         │
- │ • Member-centric language ("Fellow Members", "Distinguished")              │
- │ • Institutional design patterns (tables, formal headers)                   │
- │ • Controlled interactions (subtle, never flashy)                           │
- ┘

### Golf-Specific Features

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ TEE TIME BOOKING                                                             │
- │ • Quick access card with today's availability                              │
- │ • Time slot visualization (morning/afternoon/twilight)                     │
- │ • Course selection (Championship/Executive/Practice)                       │
- │                                                                              │
- │ COURSE CONDITIONS                                                            │
- │ • Live weather integration                                                  │
- │ • Green speed, fairway conditions, maintenance alerts                      │
- │ • Pin placements and yardage updates                                       │
- │                                                                              │
- │ TOURNAMENT DASHBOARD                                                         │
- │ • Upcoming events calendar                                                  │
- │ • Live leaderboard during competitions                                      │
- │ • Historical results and member achievements                               │
- │                                                                              │
- │ MEMBER SERVICES                                                              │
- │ • Handicap tracking and GHIN integration                                   │
- │ • Pro shop reservations                                                     │
- │ • Dining reservations and event bookings                                    │
- ┘

### Performance Optimizations

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ • Font loading: Preconnect to Google Fonts, subset optimization            │
- │ • CSS: Single embedded stylesheet, no external dependencies                │
- │ • Animations: GPU-accelerated transforms, will-change hints                │
- │ • Images: Lazy loading for course photos, WebP with fallbacks             │
- │ • Critical CSS: Above-fold styles inlined for instant render              │
- ┘

### Design Outcomes

- ┌─────────────────────────────────────────────────────────────────────────────┐
- │ ✓ Establishes premium golf resort atmosphere through color and typography  │
- │ ✓ Balances traditional country club formality with modern usability        │
- │ ✓ Supports core member workflows: booking, conditions, tournaments         │
- │ ✓ Maintains brand consistency across all interface touchpoints             │
- │ ✓ Achieves measurable accessibility and performance targets                │
- ┘

- This design establishes a digital presence worthy of championship golf venues,
- where every pixel reflects the prestige of the fairways beyond.

## Not synced

Built from `style-36-golf-resort.html`. No component bundle: the reference page's markup is not packaged as live components.
