Epic Adventure Interface: This design system captures the essence of classic fantasy RPGs, combining the aesthetic appeal of medieval manuscripts with modern game UI conventions. The system evokes a sense of quest, discovery, and character progression through ornate borders, parchment textures, and hierarchical information display.

**Blend:** Fantasy RPG 55% + Medieval UI 25% + Quest Interface 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 5/10 · **Tags:** creative, tech  
**Perfect for:** Gaming Companies, RPG Studios, Fantasy Brands

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “⚔️ RPG Fantasy Quest System ⚔️”, “📜 Active Quests”, “The Dragon's Awakening”, “Lost Treasure of Eldoria”.
- Buttons are short verb phrases in Title Case: “💾 Save Character”, “🔄 Reset Stats”, “❌ Cancel”.
- Navigation uses single nouns: “Quests”, “Inventory”, “Character”, “Guild”, “Map”.
- The reference page uses emoji as inline glyphs (⚔ ❤ ✨ 🛡 📜 ⭐); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `color-purple`, `color-green`, `color-gold`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — MedievalSharp, serif
- `body` — Merriweather, serif

Faces are hosted on Google Fonts (MedievalSharp, Merriweather); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Merriweather:wght@300;400;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: MedievalSharp - Gothic aesthetic, fantasy immersion
- Body: Merriweather - Readable serif, traditional book feel
- Hierarchy: Clear differentiation between quest titles, descriptions, stats

- EXPERIENTIAL METRICS

- Temperature: 5/10 (Balanced - Epic yet approachable)
- Formality: 5/10 (Semi-formal - Adventure narrative with structure)
- Energy: 6/10 (Moderate-high - Exciting without overwhelming)
- Playfulness: 7/10 (High - Fantasy escapism and character immersion)

- ACCESSIBILITY STANDARDS

- WCAG 2.1 AA Compliance:
- Minimum contrast ratio 4.5:1 for normal text
- Minimum contrast ratio 3:1 for large text
- Focus indicators on all interactive elements
- Semantic HTML for screen readers
- Responsive touch targets (min 44x44px)

- USE CASES

- Fantasy RPG game interfaces
- Quest management systems
- Character progression dashboards
- Medieval-themed applications
- Creative portfolio sites
- Gaming community platforms

- INTERACTION PATTERNS

- Hover states reveal additional item information
- Click interactions feel substantial with visual feedback
- Progress bars animate on value changes
- Notifications slide in like quest updates
- Cards flip or expand for detailed views

- TECHNICAL NOTES

- Custom properties for easy theme adjustments
- CSS Grid for inventory-style layouts
- Flexbox for responsive stat displays
- Transform effects for interactive depth
- Box-shadow layering for parchment effect

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-ornate`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 0.2s ease, `--transition-medium` 0.3s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-parchment` 1.1:1, `color-gold` 1.7:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Not synced

Built from `style-197-rpg-fantasy.html`. No component bundle: the reference page's markup is not packaged as live components.
