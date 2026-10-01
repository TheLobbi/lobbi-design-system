This interface captures the grandeur of classical music performance through architectural majesty, refined typography, and ceremonial elegance. Drawing from concert hall acoustics, musical notation aesthetics, and patron society culture, the design creates an atmosphere of cultural sophistication and artistic excellence. Every element resonates with the gravitas of symphonic performance, from the golden accents reminiscent of gilded opera boxes to the rhythmic spacing that echoes musical measures. This is digital architecture for cultural institutions.

**Blend:** Classical Music 55% + Concert Hall Architecture 30% + Patron Society 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 10/10 · **Tags:** creative, premium  
**Perfect for:** Orchestras, Concert Halls, Music Patrons

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Concert Series”, “Season Statistics”, “Upcoming Concerts”, “Ludwig van Beethoven”.
- Buttons are short verb phrases in Title Case: “Get Tickets”, “Subscribe Now”, “Download Brochure”, “Schedule Tour”.
- Navigation uses single nouns: “Concerts”, “Repertoire”, “Artists”, “Patrons”, “Education”.
- The reference page uses emoji as inline glyphs (♪ ♫ ♬ ♩ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-concert-gold`, `color-score-cream`, `color-velvet-red`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Concert Hall Gold (#b8860b): Gilded prestige, brass instruments, chandelier
- illumination, patron luxury, cultural excellence, historical tradition
- Orchestra Black (#1a1a1a): Formal attire, tuxedo elegance, grand piano finish,
- authoritative foundation, performance gravity, conductor's baton
- Score Cream (#fef9f3): Sheet music, program pages, manuscript paper, notation
- clarity, archival preservation, documentation elegance
- Velvet Red (#8b1538): Theater curtains, patron seating, ceremonial draping,
- premiere nights, passion of performance, operatic drama
- Marble White (#f5f5f0): Column sophistication, foyer grandeur, architectural
- purity, cultural institution prestige, timeless elegance
- Deep Burgundy (#6b1a2e): Wine reception, donor cultivation, evening gala,
- patron recognition, sophisticated maturity

## Typography

- `display` — "Playfair Display", Georgia, "Times New Roman", serif
- `body` — Spectral, Georgia, serif
- `lora` — "Lora", serif

Faces are hosted on Google Fonts (Playfair Display, Spectral, Lora); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Spectral:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`body`, `label`, `button`), always with the letter-spacing given.

### Type rationale

- Playfair Display (Primary Headlines):
- High-contrast serifs echoing musical dynamics (fortissimo vs pianissimo)
- Designed for large display sizes (program covers, concert announcements)
- Transitional style bridges classical and modern (like orchestral programming)
- Elegant capitals perfect for composer names and work titles
- Dramatic stress creates visual rhythm
- Used by cultural institutions worldwide

- Spectral (Secondary Headlines & Body):
- Designed specifically for long-form reading
- Excellent legibility for program notes and artist biographies
- Contemporary serif with classical proportions
- Humanist warmth suitable for storytelling
- Wide language support for international repertoire
- Professional without being cold

- Lora (Tertiary & Captions):
- Balanced serif with moderate contrast
- Excellent for metadata (dates, locations, durations)
- Calligraphic influences add sophistication
- Clear at small sizes for program details
- Pairs elegantly with Playfair and Spectral

## Spacing, shape and elevation

- Spacing steps: `space-xs` 12px, `space-sm` 24px, `space-md` 36px, `space-lg` 72px, `space-xl` 96px, `space-xxl` 144px. Pad cards and sections from these steps only.
- Corners: `border-radius` 4px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-gold`, lowest first for resting cards, higher for hover and overlays.

1. Grand Header: Gold accent bar, formal black background, hierarchical navigation
2. Performance Stats: Large numerals with musical terminology, gold highlights
3. Concert Cards: Elegant frames with composer/work hierarchy, premiere ribbons
4. Repertoire Table: Formal data layout with conductor attribution, timing details
5. Patron Form: Refined inputs with subscription tier options, member benefits
6. Booking Buttons: Formal call-to-action with seat selection, gold accents
7. Status Badges: Musical notation inspired (allegro, andante, maestoso)
8. Grand Footer: Multi-column with donor recognition, accessibility statement

## States and motion

- Elegant hover states with gold underlines (curtain rising effect)
- Buttons respond with subtle scale (1.03, ceremonial presentation)
- Focus states use gold outlines (spotlight effect, 2px)
- Cards lift with dramatic shadows (stage lighting)
- Transitions are measured and dignified (500ms, adagio tempo)
- No frivolous animations (maintains institutional gravitas)
- Musical notation accents on hover (♪ ♫ symbols)

Timing values: `--transition-slow` 500ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 350ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- Gold (#b8860b) on black (#1a1a1a): 7.2:1 contrast (AAA compliant)
- White text on orchestra black: 15.8:1 contrast (exceeds AAA)
- Cream backgrounds with dark text: 14.2:1 contrast
- 18px minimum body text for program readability
- 56px minimum touch targets for ticket selection
- Focus indicators use 2px gold outline with clear visibility
- Semantic HTML5 for screen reader navigation
- ARIA labels for musical notation symbols
- Alt text for conductor and performer images
- Keyboard navigation for seat selection
- Captions and transcripts for video performances
- Clear hierarchy for screen reader announcement
- Time-based media accessible alternatives
- Form labels explicitly associated with inputs

## Component inventory

The reference page composes these patterns from the tokens above:

1. Grand Header: Gold accent bar, formal black background, hierarchical navigation
2. Performance Stats: Large numerals with musical terminology, gold highlights
3. Concert Cards: Elegant frames with composer/work hierarchy, premiere ribbons
4. Repertoire Table: Formal data layout with conductor attribution, timing details
5. Patron Form: Refined inputs with subscription tier options, member benefits
6. Booking Buttons: Formal call-to-action with seat selection, gold accents
7. Status Badges: Musical notation inspired (allegro, andante, maestoso)
8. Grand Footer: Multi-column with donor recognition, accessibility statement

## Further guidance

### Spatial Hierarchy

- 12px baseline grid (musical measure rhythm)
- Generous vertical spacing (concert hall scale, 96-120px between sections)
- Symmetrical balance (classical architectural proportion)
- Golden ratio dimensions (1.618, historically used in concert hall design)
- Clear visual hierarchy like orchestral seating (conductor > sections > individual)
- Breathing room appropriate for contemplation

### Emotional Temperature

- Warm Grand (5/10):
- Gold accents provide warmth and luxury
- Velvet red adds passion and emotion
- Black creates formality and distance
- Cream softens with historical warmth
- Overall: Welcoming to patrons, impressive to first-timers
- Balances approachability with cultural authority

### Formality Level

- Extreme Formality (10/10):
- Concert hall dress codes and etiquette
- Classical music tradition and reverence
- Patron society sophistication
- Cultural institution gravitas
- Ceremonial performance rituals
- Highest level of aesthetic refinement
- Suitable only for prestigious cultural organizations

### Performance Optimization

- Minimal dependencies (institutional stability)
- Font subsetting for display faces (Playfair limited to used glyphs)
- Efficient CSS Grid for symmetrical layouts
- No heavy JavaScript frameworks
- Optimized for projection and large displays
- Print stylesheet for program generation
- Fast loading for online ticket sales
- Progressive enhancement for legacy browsers

### Brand Alignment

- Establishes symphonic orchestra credibility through:
- Concert hall architectural grandeur
- Classical music typography traditions
- Patron society sophistication
- Cultural institution gravitas
- Musical notation aesthetic references
- Historical tradition respect
- Artistic excellence communication
- Donor cultivation elegance

### Use Cases

- Symphony orchestras and philharmonic societies
- Opera companies and concert venues
- Classical music festivals and series
- Conservatory and music school concerts
- Chamber music ensembles
- Conductor and soloist management
- Season subscription platforms
- Donor and patron relationship management
- Concert hall seat selection and ticketing
- Repertoire and program planning
- Artist booking and contract management
- Cultural institution dashboards

### Competitive Differentiation

- Unlike typical arts organization websites, this design:
- Achieves true concert hall grandeur digitally
- Uses authentic classical music typography (Playfair tradition)
- Balances patron sophistication with accessibility
- References architectural acoustics in spatial design
- Communicates cultural authority through restraint
- Honors musical notation aesthetics
- Serves both patrons and general public effectively

### Scalability

- Component system supports:
- Multiple concert series and seasons
- Diverse repertoire cataloging (symphonies, concertos, chamber works)
- Conductor and soloist profiles
- Donor tier management (circle levels)
- Seat and subscription management
- Program note generation and publishing
- Educational initiative content
- Community engagement features
- Archive and recording library
- Volunteer and docent coordination

## Not synced

Built from `style-248-symphonic-orchestra.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--touch-min`, `--focus-ring`, `--focus-offset`.
