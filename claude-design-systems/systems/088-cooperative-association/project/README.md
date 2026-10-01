Cooperative Association: Cooperative Model 80% + Member Ownership 20%.

**Blend:** Cooperative Model 80% + Member Ownership 20%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** association  
**Perfect for:** Cooperatives, Member-Owned Orgs, Collective Groups

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “LOBBI Cooperative Network”, “2024 Patronage Dividend Allocation”, “Collective Community Impact”.
- Buttons are short verb phrases in Title Case: “Member Portal”, “Cast Your Vote”, “View Candidates”, “Cast Your Vote”.
- The reference page uses emoji as inline glyphs (🤝 🏪 👥 💰 🌾 💵); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `coop-green-primary`, `coop-green-light`, `harvest-gold`, `harvest-gold-light`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Cooperative Green (#15803d): Growth, sustainability, prosperity
- Harvest Gold (#ca8a04): Abundance, value creation, reward
- Natural Cream (#fefce8): Warmth, organic, earthiness
- Forest Brown (#422006): Stability, groundedness, tradition
- Community Blue (#0284c7): Connection, trust, collaboration

## Typography

- `display` — Cabin, sans-serif
- `body` — "Source Sans Pro", sans-serif

Faces are hosted on Google Fonts (Cabin, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap">
```

- Set titles in `display` and running text in `body`.

### Type rationale

- Cabin: Democratic strength, accessibility, clarity
- Source Sans Pro: Universal readability, inclusive design
- Member-first language: "Your co-op", "Our members", "Together"

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-10` 10px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px, `radius-full` 50%.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Emphasize member voice and participation
- Highlight collective achievements
- Promote democratic engagement
- Celebrate local and community connections
- Transparent financial and governance information

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `community-blue` 4.0:1, `bg-secondary` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Target Audience

- Agricultural cooperatives
- Retail cooperatives
- Worker-owned businesses
- Mutual aid organizations
- Credit unions
- Community-owned enterprises

### Key Design Elements

1. Patronage dividend tracker (member returns)
2. Member voting dashboard (democratic governance)
3. Annual meeting countdown (engagement)
4. Board election status (participation)
5. Local sourcing metrics (community support)
6. Community impact statistics (shared value)
7. Member education resources (capacity building)
8. Cooperative principles display (values alignment)

### Information Hierarchy

1. Member benefits and returns (patronage dividends)
2. Democratic participation opportunities
3. Collective impact metrics
4. Individual member engagement
5. Educational and development resources

### Emotional Resonance

- Belonging and ownership
- Shared prosperity
- Democratic empowerment
- Community pride
- Sustainable growth

## Not synced

Built from `style-88-cooperative.html`. No component bundle: the reference page's markup is not packaged as live components.
