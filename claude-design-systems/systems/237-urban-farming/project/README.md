This design celebrates the intersection of technology and nature in urban agriculture. It embodies the sustainable food movement, combining modern agricultural innovation with organic, earth-connected aesthetics. The interface promotes community engagement in local food production.

**Blend:** Agriculture Tech 55% + City Green Spaces 30% + Sustainable Food 15%  
**Temperature:** 7/10 (warm) · **Formality:** 5/10 · **Tags:** association, creative  
**Perfect for:** Urban Agriculture, Community Gardens, Food Sustainability

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Urban Farming Collective”, “Active Crops”, “Growth Tracker”, “Plant New Crop”.
- Buttons are short verb phrases in Title Case: “Join Collective”, “View All Plots”, “Record Planting”, “Download Calendar”.
- Navigation uses single nouns: “Dashboard”, “My Plots”, “Community Gardens”, “Harvest Calendar”, “Resources”, “Market”.
- The reference page uses emoji as inline glyphs (🌾 🌱 🥕 ⚖ 👥 🍅); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `growth-green`, `growth-green-light`, `harvest-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Growth Green (#15803d): Vitality of plants, sustainable agriculture
- Harvest Gold (#eab308): Abundance, ripe crops, golden sunlight
- Urban Gray (#6b7280): City infrastructure, modern concrete spaces
- Soil Brown (#92400e): Earth connection, organic matter, natural roots

## Typography

- `display` — "Albert Sans", sans-serif
- `literata` — "Literata", sans-serif

Faces are hosted on Google Fonts (Albert Sans, Literata); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;600;700&family=Literata:wght@300;400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `button`), always with the letter-spacing given.

### Type rationale

- Albert Sans: Modern, clean sans-serif for contemporary farming technology
- Literata: Organic, readable serif for educational content and storytelling

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 10px, `radius-lg` 14px, `radius-xl` 18px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Plant growth trackers with visual progress indicators
- Harvest calendars showing seasonal availability
- Community garden maps with plot assignments
- Weather-integrated planting schedules
- Yield tracking and sharing dashboards

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `harvest-gold` 1.9:1, `harvest-gold-light` 1.6:1, `earth-beige` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AA contrast for outdoor readability
- Large touch targets for gloved hands and field use
- Clear icons and labels for multilingual communities
- High visibility colors for various lighting conditions
- Mobile-first design for on-site garden management

## Component inventory

The reference page composes these patterns from the tokens above:

- Plant growth trackers with visual progress indicators
- Harvest calendars showing seasonal availability
- Community garden maps with plot assignments
- Weather-integrated planting schedules
- Yield tracking and sharing dashboards

## Further guidance

### Temperature

- (Natural Warm)
- Warm and inviting like sunlight on plants, with earthy organic undertones

### Formality

- (Community Accessible)
- Professional agricultural knowledge presented in an approachable,
- community-oriented manner

## Not synced

Built from `style-237-urban-farming.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-modern`, `--font-organic`.
