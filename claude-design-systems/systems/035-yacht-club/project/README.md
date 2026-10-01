Blend Composition: Yacht Club (80%) + Nautical Heritage (20%) Inspiration: Monaco Yacht Club, Royal Yacht Squadron, New York Yacht Club Core Essence: Maritime elegance meets exclusive membership sophistication Target Context: Premium yacht clubs, sailing associations, maritime societies, exclusive waterfront venues, regatta organizations, nautical heritage foundations.

**Blend:** Yacht Club 80% + Nautical Heritage 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** premium, hospitality  
**Perfect for:** Yacht Clubs, Sailing Organizations, Maritime Societies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Monaco Maritime Club”, “Commodore's Dashboard”, “Featured Events & Announcements”, “Fleet Registry & Member Directory”.
- Buttons are short verb phrases in Title Case: “Portal”.
- Navigation uses single nouns: “Dashboard”, “Fleet Registry”, “Regattas”, “Members”, “Club House”.
- The reference page uses emoji as inline glyphs (⚓ ⛵ 🏆 📅 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-naval-navy`, `color-gold`, `color-ocean-blue`, `color-horizon-blue`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Playfair Display", Georgia, serif
- `body` — Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Playfair Display, Montserrat); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 12px, `space-sm` 24px, `space-md` 32px, `space-lg` 48px, `space-xl` 64px, `space-2xl` 96px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-hover`, lowest first for resting cards, higher for hover and overlays.

- Container:
- Max Width:             1400px - Stately club proportions
- Padding:               48px - Generous clubroom margins
- Breakpoints:           1200px / 768px / 480px

- Grid Structure:
- Stats Grid:            4 columns @ 1fr each (responsive to 2×2, then 1 column)
- Content Cards:         3 columns @ 1fr each (responsive to 1 column)
- Table:                 Full width with horizontal scroll on mobile

- Card Anatomy:
- Border:                1px solid rgba(255,255,255,0.1)
- Border Top:            3px solid #d4a853 - Gold club designation
- Padding:               48px - Premium interior spacing
- Border Radius:         8px - Refined modern elegance
- Shadow:                0 4px 24px rgba(12,26,62,0.15) - Subtle depth

- MARITIME HERITAGE ELEMENTS

- Nautical Details:
- Rope Dividers:         Decorative borders suggesting braided maritime lines
- Flag Signal Badges:    Color-coded status using international maritime flags
- Compass Rose Icons:    Navigation elements for directional orientation
- Anchor Motifs:         Subtle watermarks on premium membership cards
- Wave Patterns:         Gentle background textures on hero sections

- Club Traditions:
- Burgee Display:        Triangular flag indicators for membership levels
- Chronometer Time:      Precise nautical time display (UTC/Zulu time)
- Knot Speed:            Wind speed in knots, distance in nautical miles
- Tide Tables:           Integrated marine data for harbor conditions
- Bell Schedule:         Traditional ship's bell hour announcements

- PERFORMANCE OPTIMIZATION

- Loading Strategy:
- Critical CSS:          Inline base styles, defer decorative enhancements
- Font Loading:          font-display: swap for Playfair Display
- Images:                WebP with JPEG fallback, lazy loading below fold
- Animations:            CSS transforms (GPU-accelerated) over position changes

- Bundle Considerations:
- Base CSS:              ~8KB gzipped
- Custom Fonts:          Playfair Display (~24KB), Montserrat (~18KB)
- Total Initial Load:    ~50KB (excluding imagery)

- RESPONSIVE BEHAVIOR

- Desktop (1200px+):
- Stats Grid:            4 columns, full navigation, expanded member directory
- Content Cards:         3 columns side-by-side, detailed vessel specifications
- Table:                 Full width with all columns visible

- Tablet (768px - 1199px):
- Stats Grid:            2×2 grid, condensed navigation menu
- Content Cards:         2 columns, then 1 column for narrow tablets
- Table:                 Horizontal scroll with sticky first column

- Mobile (< 768px):
- Stats Grid:            Single column stack, priority stats first
- Content Cards:         Single column, full-width cards
- Table:                 Card-based layout with expandable rows
- Navigation:            Hamburger menu with slide-out drawer

- IMPLEMENTATION NOTES

- All colors pass WCAG AA contrast requirements for text readability
- Playfair Display provides classical elegance, Montserrat ensures legibility
- Gold accents (#d4a853) used sparingly for premium designation and emphasis
- Shadow depths suggest quality craftsmanship without overwhelming refinement
- Spacing maintains exclusive atmosphere through generous breathing room
- All interactive elements include :focus-visible states for keyboard users
- Semantic HTML5 structure enables screen reader navigation
- Tables include proper <thead>, <tbody>, scope attributes for accessibility

## States and motion

- Hover States:
- Cards:                 Subtle lift (translateY(-4px)) + enhanced shadow
- Buttons:               Gold border glow + background darkening
- Links:                 Gold underline slide-in from left (200ms ease)
- Table Rows:            Soft ocean blue highlight (#0077b6 at 5% opacity)

- Transitions:
- Standard:              250ms ease-out - Smooth club elegance
- Hovers:                200ms ease - Responsive refinement
- Shadows:               300ms cubic-bezier - Gentle yacht motion

- Micro-interactions:
- Member Badge Reveal    - Gold shimmer on hover
- Regatta Status Update  - Animated flag wave on completion
- Weather Widget         - Tide level animation every 6 hours

- BRAND VOICE & TONE

- Written Style:
- Greeting:              "Welcome aboard, Commodore"
- Notifications:         "The regatta committee requests your presence"
- Success:               "Registration confirmed - membership privileges granted"
- Navigation:            "Club House • Fleet Registry • Member Services"

- Formality Indicators:
- Titles:                Commodore, Captain, Admiral, Flag Officer
- Language:              Traditional nautical terminology, club protocols
- Tone:                  Distinguished, heritage-focused, exclusive
- CTAs:                  "Request Membership" vs "Sign Up"

Timing values: `--transition-fast` 200ms ease, `--transition-base` 250ms ease-out, `--transition-smooth` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-naval-navy` 1.0:1, `color-white-10` 1.3:1, `color-white-05` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Design Tokens

- Temperature:  4/10 (Cool Maritime) - Crisp ocean breezes, naval discipline
- Formality:    9/10 (Very High Exclusive) - Club standards, refined protocols

- Color Palette:
- Naval Navy:    #0c1a3e - Deep ocean authority, club formality
- Pure White:    #ffffff - Yacht sails, club dress codes, maritime clarity
- Maritime Gold: #d4a853 - Nautical brass, club insignia, regatta trophies
- Ocean Blue:    #0077b6 - Mediterranean waters, racing flags, coastal elegance

- Extended Palette:
- Anchor Grey:   #546e7a - Nautical equipment, weathered decks
- Horizon Blue:  #b3d9ff - Distant waters, morning harbors
- Teak Wood:     #8b6f47 - Classic yacht decking, club furnishings
- Sail Cream:    #f8f6f0 - Canvas sails, club stationery

- Typography System:
- Display:       Playfair Display (700-800) - Prestigious club headers
- Headings:      Playfair Display (600) - Elegant nautical sophistication
- Body:          Montserrat (400-500) - Refined readability, modern clarity
- Captions:      Montserrat (300) - Delicate maritime details

- Letter Spacing:
- Headlines:     0.02em - Stately club announcements
- Subheadings:   0.01em - Distinguished section headers
- Body:          0.005em - Comfortable reading at sea
- Uppercase:     0.15em - Naval precision, regatta programs

- Spacing Philosophy: "Stately Club Proportions"
- Base Unit:     12px - Nautical measurement precision
- Card Padding:  48px - Exclusive clubroom breathing space
- Section Gap:   64px - Grand club architecture
- Grid Gap:      32px - Organized marina berths
- Element Gap:   24px - Refined component spacing

- COMPONENT ARCHITECTURE

- Primary Components:
- ✓ Regatta Calendars      - Race schedules, championship events, club regattas
- ✓ Member Directories     - Exclusive membership rosters, commodore listings
- ✓ Vessel Registries      - Fleet documentation, yacht specifications
- ✓ Event Cards            - Social functions, nautical ceremonies, club galas
- ✓ Navigation Headers     - Club house navigation, member portal access
- ✓ Trophy Showcases       - Championship displays, historic achievements
- ✓ Weather Displays       - Marine forecasts, tide tables, wind conditions
- ✓ Membership Tiers       - Club levels, privileges, annual dues

- Visual Patterns:
- Gold Accent Borders    - 2px solid #d4a853 for premium designation
- Naval Dividers         - Horizontal rules echoing maritime rope details
- Raised Card Shadows    - Subtle depth suggesting quality craftsmanship
- Monogram Integration   - Club crests, family emblems, yacht insignias
- Nautical Iconography   - Anchors, compasses, helm wheels, flags

- ACCESSIBILITY STANDARDS

- WCAG 2.1 Level AA Compliance:
- ✓ Color Contrast:        Navy/White (14.2:1), Gold/Navy (4.8:1), Blue/White (4.6:1)
- ✓ Focus Indicators:      2px gold outline with 4px offset for keyboard navigation
- ✓ Semantic HTML:         Proper heading hierarchy, landmark regions, ARIA labels
- ✓ Screen Reader:         Descriptive labels, status announcements, table headers
- ✓ Touch Targets:         Minimum 44×44px for mobile yacht club access
- ✓ Motion:                Respects prefers-reduced-motion for maritime animations
- ✓ Text Scaling:          Supports 200% zoom without horizontal scrolling
- ✓ Keyboard Navigation:   All interactive elements accessible via Tab/Enter/Escape

### Design System Metrics

- Accessibility Score:     98/100 (Lighthouse)
- Performance Score:       95/100 (Lighthouse)
- Color Contrast Ratio:    14.2:1 (Navy/White - AAA rated)
- Touch Target Size:       44×44px minimum (WCAG 2.5.5)
- Font Size Range:         14px - 64px (responsive scaling)
- Line Height:             1.6 - 1.8 (optimal readability)
- Animation Duration:      200ms - 300ms (smooth without sluggishness)

- BRAND POSITIONING

- This design system establishes maritime elegance through exclusive yacht club
- aesthetics. The naval navy foundation conveys deep ocean authority and club
- formality, while maritime gold accents celebrate nautical brass fixtures,
- regatta trophies, and prestigious club insignias.

- Playfair Display typography brings classical sophistication found in historic
- yacht club signage and championship programs. Stately spacing proportions
- create the exclusive clubroom atmosphere where every element has breathing
- space, mirroring the refined architecture of prestigious waterfront facilities.

- The cool maritime temperature (4/10) evokes crisp ocean breezes and the
- disciplined standards of naval tradition, while very high formality (9/10)
- ensures the interface maintains club protocol and membership exclusivity.

- Component choices - regatta calendars, vessel registries, member directories -
- directly support yacht club operations while maintaining the heritage and
- traditions that define exclusive maritime organizations.

## Not synced

Built from `style-35-yacht-club.html`. No component bundle: the reference page's markup is not packaged as live components.
