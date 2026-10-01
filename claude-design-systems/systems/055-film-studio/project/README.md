Major film studio aesthetic inspired by A24, Searchlight Pictures, and prestige production houses. Cinematic storytelling through visual drama, widescreen ratios, and poster-quality presentation. This design embodies the intersection of art and commerce in modern filmmaking.

**Blend:** Film Studio 80% + Cinematic Drama 20%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** media, creative  
**Perfect for:** Film Studios, Production Companies, Entertainment

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Production Dashboard”, “Current Productions”, “The Wanderer's Echo”, “Midnight Sonata”.
- Buttons are short verb phrases in Title Case: “Details”, “Details”, “Details”.
- Navigation uses single nouns: “Productions”, “Development”, “Distribution”, “Talent”, “Festivals”.
- The reference page uses emoji as inline glyphs (🎬 🏆 🎭 🌍 📅 ⏱); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `film-gold`, `red-carpet`, `phase-production-bg`, `phase-post-production-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- → Cinema Black (#0c0c0c): Deep theatrical darkness, screening room ambiance
- → Screen White (#fafafa): Projection surface purity, high-key lighting
- → Film Gold (#c9a227): Oscar prestige, golden hour warmth, awards season
- → Red Carpet (#9f1239): Premiere glamour, dramatic accents, spotlight moments

- Temperature: Warm Dramatic (6/10) - Golden hour cinematography meets theatre warmth
- Formality: High Entertainment (7/10) - Sophisticated yet accessible storytelling

## Typography

- `display` — "Playfair Display", serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Playfair Display, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- → Playfair Display: Serif elegance for film titles, dramatic headlines, poster text
- → Inter: Modern sans-serif for production details, clean legibility in data
- → Hierarchy mirrors film credits: Title cards → Cast → Crew information flow

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.875rem, `space-md` 1.25rem, `space-lg` 2rem, `space-xl` 3rem, `space-2xl` 4.5rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 6px.

- → Widescreen Ratios: 21:9 aspect ratio influence, cinematic letterbox thinking
- → Poster Presentation: Vertical cards with dramatic imagery prominence
- → Grid Systems: Film strip organization, contact sheet layouts
- → Generous Spacing: Premium breathing room between story elements

## States and motion

- → Fade In/Out: Cinematic transitions mimicking film dissolves
- → Hover Spotlights: Theatrical lighting effects highlighting active elements
- → Smooth Scrolling: Dolly camera movement metaphor through content
- → Dramatic Reveals: Information layers appearing like opening credits

Timing values: `--transition-smooth` all 0.4s cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 18.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ✓ WCAG 2.1 AA Compliant: High contrast ratios (Cinema Black vs Screen White: 19.2:1)
- ✓ Semantic HTML5: Article/section structure mirrors screenplay formatting
- ✓ Keyboard Navigation: Full tab-through for film catalog browsing
- ✓ Screen Reader Optimization: ARIA labels describe visual storytelling elements
- ✓ Focus Indicators: Gold outline (2px) provides clear spotlight on active elements

## Component inventory

The reference page composes these patterns from the tokens above:

- ✦ Film Cards: Poster-style presentation with gradient overlays, theatrical lighting
- ✦ Production Schedules: Timeline views with phase markers, shoot day organization
- ✦ Cast Profiles: Headshot displays with role information, billing hierarchy
- ✦ Screening Events: Premiere scheduling with venue details, red carpet timing
- ✦ Stats Display: Box office metrics, production budgets, festival selections

## Further guidance

### Visual Influences

- A24 Films: Distinctive branding, artistic film presentation, indie sophistication
- Searchlight Pictures: Classic Hollywood meets modern prestige, Oscar-worthy design
- Criterion Collection: Curated film presentation, archival quality aesthetics
- Film Festival Programs: Cannes, Sundance, TIFF visual language
- Movie Theater Design: Lobby displays, concession aesthetics, screening ambiance

### Production Notes

- This design system supports film production dashboards, studio management platforms,
- distribution analytics, talent booking systems, and festival submission portals.
- Optimized for executive producers, creative directors, and distribution teams who
- need sophisticated tools that match the artistry of their product.

- Performance: Minimal animations (respects prefers-reduced-motion), optimized for
- large film libraries with lazy-loading considerations. Typography choices balance
- dramatic presentation with operational readability across production workflows.

### Brand Temperature

- Warm, inviting, prestigious - like entering a luxury cinema

### Market Positioning

- High-end entertainment industry, prestige filmmaking

### Emotional Resonance

- Anticipation, artistry, storytelling excellence
- ╔══════════════════════════════════════════════════════════════════════════════╗
- ║ Component Architect: Strategic film industry UI establishing sustainable      ║
- ║ patterns for entertainment platforms at enterprise scale. Every element       ║
- ║ supports storytelling excellence and operational efficiency in production.    ║
- ╚══════════════════════════════════════════════════════════════════════════════╝

## Not synced

Built from `style-55-film-studio.html`. No component bundle: the reference page's markup is not packaged as live components.
