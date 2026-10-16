1990s Grunge: 90s Grunge 55% + Alternative Rock 25% + Distressed Texture 20%.

**Blend:** 90s Grunge 55% + Alternative Rock 25% + Distressed Texture 20%  
**Temperature:** 4/10 (cool) · **Formality:** 2/10 · **Tags:** creative, media  
**Perfect for:** Alternative Brands, Music Labels, Edgy Services

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “1990s Grunge Dashboard”, “Alternative Zine Project”, “Indie Music Platform”, “DIY Workshop Series”.
- Buttons are short verb phrases in Title Case: “Submit Project”, “Clear Form”, “Primary Action”, “Secondary Action”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Team”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-primary`, `color-secondary`, `color-accent`, `color-light`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Permanent Marker", cursive
- `body` — "Roboto Condensed", sans-serif

Faces are hosted on Google Fonts (Permanent Marker, Roboto Condensed); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Condensed:wght@400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-1` 0.5rem, `space-2` 1rem, `space-3` 1.5rem, `space-4` 2rem, `space-6` 3rem, `space-8` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 2px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

- Color System:
- ├─ Primary: #E8C547 (Dirty Yellow) - Energy, rebellion, visibility
- ├─ Secondary: #2D5016 (Forest Green) - Nature, alternative values
- ├─ Accent: #CC5500 (Burnt Orange) - Warmth, creativity
- ├─ Base Dark: #1A1A1A (Near Black) - Grounding, contrast
- Base Light: #F5F1E8 (Off-White) - Aged paper, nostalgia

- Typography System:
- ├─ Display: Permanent Marker (Headers)
- │  ├─ Weight: 400 (inherently bold/irregular)
- │  ├─ Usage: H1-H3, key statements
- │  ├─ Personality: Hand-drawn, authentic, imperfect
- │  └─ Cultural Reference: Graffiti, protest signs, DIY posters
- Body: Roboto Condensed (Content)
- ├─ Weights: 400 (regular), 700 (bold)
- ├─ Usage: Paragraphs, UI text, data
- ├─ Rationale: Condensed = information density
- Contrast: Machine precision vs. hand-drawn headers

- Spacing & Rhythm:
- ├─ Base Unit: 8px
- ├─ Scale: 0.5x, 1x, 1.5x, 2x, 3x, 4x, 6x
- ├─ Layout Philosophy: Intentional chaos within structure
- Asymmetric Margins: Deliberate imbalance for DIY feel

- Component Design Principles:
- ├─ Cards: Torn edges via clip-path, layered shadows
- ├─ Buttons: Hand-stamped appearance, irregular borders
- ├─ Forms: Typewriter-style inputs, stamped labels
- ├─ Tables: Striped like photocopied documents
- Navigation: Sticker/patch aesthetic

- ACCESSIBILITY COMPLIANCE

- WCAG 2.1 AA Standards:
- ├─ Color Contrast Ratios:
- │  ├─ Dirty Yellow on Black: 8.2:1 (AAA)
- │  ├─ Off-White on Forest Green: 7.1:1 (AAA)
- │  ├─ Black on Off-White: 15.8:1 (AAA)
- │  └─ Burnt Orange on Black: 5.8:1 (AA Large)
- ├─ Focus Indicators:
- │  ├─ 3px solid outlines
- │  ├─ High contrast colors
- │  └─ Offset for visibility on textured backgrounds
- ├─ Touch Targets: Minimum 44x44px
- Screen Reader Support:
- ├─ Semantic HTML5 elements
- ├─ ARIA labels for decorative distortions
- Alt text for texture backgrounds

- Responsive Breakpoints:
- ├─ Mobile: 320px-767px (single column, larger touch targets)
- ├─ Tablet: 768px-1023px (2-column grids)
- Desktop: 1024px+ (full multi-column layouts)

- CULTURAL & BUSINESS CONTEXT

- Target Industries:
- ├─ Creative Agencies: Authentic, anti-corporate brand identity
- ├─ Media Companies: Editorial edge, cultural commentary
- ├─ Music Venues: Concert/festival atmosphere
- ├─ Alternative Retail: Vintage, second-hand, sustainable brands
- Youth Organizations: Rebellious energy, DIY ethos

- User Psychology:
- ├─ Temperature: 4/10 (Cool, detached, authentic)
- ├─ Formality: 2/10 (Deliberately casual, anti-establishment)
- ├─ Emotional Response: Nostalgia, rebellion, authenticity
- Trust Signals: Raw honesty over corporate polish

- Brand Personality:
- ├─ Voice: Unapologetic, direct, slightly cynical
- ├─ Values: Authenticity, independence, creativity
- ├─ Differentiation: Anti-mainstream aesthetic
- Community: Insider culture, shared nostalgia

- TECHNICAL IMPLEMENTATION

- CSS Architecture:
- ├─ Custom Properties: All colors, spacing, typography
- ├─ Utility Classes: Minimal, component-focused
- ├─ Layout System: CSS Grid for asymmetry, Flexbox for components
- Performance: System fonts fallback, minimal decorative elements

- Browser Compatibility:
- ├─ Modern Browsers: Full feature support (clip-path, grid)
- ├─ Graceful Degradation: Standard borders if clip-path unsupported
- Progressive Enhancement: Texture overlays as enhancements

- Interaction Design:
- ├─ Hover States: Brightness shifts, "smudged" effect
- ├─ Active States: "Pressed stamp" depression
- ├─ Focus States: Bold outlines, high visibility
- Transitions: Quick (150-200ms), snappy feel

- USAGE GUIDELINES

- When to Use:
- ├─ Brand identity emphasizing authenticity over polish
- ├─ Creative/media sectors with alternative audience
- ├─ Nostalgia marketing for Gen X/Elder Millennial demographics
- Anti-corporate positioning statements

- When NOT to Use:
- ├─ Financial services (too informal)
- ├─ Healthcare (lacks professionalism)
- ├─ Enterprise B2B (insufficient gravitas)
- Luxury brands (wrong kind of exclusivity)

- Customization Notes:
- ├─ Color swap: Maintain high contrast ratios
- ├─ Typography: Keep hand-drawn + condensed pairing
- ├─ Texture intensity: Adjustable via opacity
- Border distortion: Scale clip-path polygon points

## States and motion

Timing values: `--transition-fast` 150ms ease, `--transition-base` 200ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-success` 3.4:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-primary` 1.5:1, `color-light` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Not synced

Built from `style-181-1990s-grunge.html`. No component bundle: the reference page's markup is not packaged as live components.
