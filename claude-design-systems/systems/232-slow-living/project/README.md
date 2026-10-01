This design system embodies the anti-hustle movement, prioritizing mindfulness, intentionality, and connection with nature. Every element is crafted to slow down the user, encourage contemplation, and create a sense of breathing room in digital space.

**Blend:** Anti-Hustle Minimal 55% + Mindfulness Calm 30% + Nature Retreat 15%  
**Temperature:** 7/10 (warm) · **Formality:** 4/10 · **Tags:** hospitality, creative  
**Perfect for:** Wellness Retreats, Slow Living Movement, Mindfulness Brands

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “Welcome to Your Slow Living Dashboard”, “Recent Activities”, “Daily Meditation”, “Nature Connect”.
- Buttons are short verb phrases in Title Case: “View All”, “Start Session”, “Explore”, “Join”.
- Navigation uses single nouns: “Dashboard”, “Community”, “Mindfulness”, “Resources”, “Settings”.
- The reference page uses emoji as inline glyphs (🌿 🧘 🌳 📖 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `sage-green`, `breath-blue`, `soft-cream`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Sage Green (#84cc16): Growth, renewal, balance - represents the
- natural world and sustainable living. Used for primary actions that
- align with slow living values.
- Breath Blue (#bae6fd): Tranquility, clarity, spaciousness - evokes
- the feeling of open sky and deep breathing. Used for informational
- elements and secondary backgrounds.
- Stone Gray (#78716c): Grounding, stability, timelessness - connects
- to earth and permanence. Used for text and subtle borders.
- Soft Cream (#fefce8): Warmth, gentleness, paper-like quality -
- provides restful backgrounds that reduce eye strain.

## Typography

- `display` — "Libre Baskerville", serif
- `body` — "Public Sans", sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, Public Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Libre Baskerville (Serif): Used for headings and contemplative text.
- The classic serif design encourages slower, more thoughtful reading.
- Its traditional forms connect to heritage and timeless values.
- Public Sans (Sans-serif): Used for UI elements and body text.
- Clean and accessible, it provides clarity without visual noise.
- The geometric forms balance the traditional serif.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2.5rem, `space-xl` 4rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.5rem, `radius-md` 1rem, `radius-lg` 1.5rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- Cards: Elevated with subtle shadows, generous padding creates
- individual "breathing zones" for content
- Buttons: Soft, rounded corners with gentle transitions resist
- the urgency of sharp, instant interactions
- Tables: Spacious rows with hover states that unfold slowly
- Forms: Large input fields with ample touch targets and breathing room

## States and motion

- Transitions: 400-600ms (slower than typical 200-300ms) to encourage
- mindful interaction rather than rushed clicking
- Hover states: Gentle elevation and color shifts, never jarring
- Loading states: Breathing animations rather than spinners
- Feedback: Soft, affirmative rather than urgent or demanding

Timing values: `--transition-slow` all 600ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` all 400ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `sage-green-dark` 2.8:1, `stone-gray` 4.4:1, `stone-gray-light` 2.3:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AAA contrast ratios maintained for all text
- Focus states use visible outlines with sage green
- Generous touch targets (minimum 44x44px) for all interactive elements
- Animation respects prefers-reduced-motion
- Semantic HTML structure for screen readers
- Clear visual hierarchy through size and weight, not just color

## Component inventory

The reference page composes these patterns from the tokens above:

- Cards: Elevated with subtle shadows, generous padding creates
- individual "breathing zones" for content
- Buttons: Soft, rounded corners with gentle transitions resist
- the urgency of sharp, instant interactions
- Tables: Spacious rows with hover states that unfold slowly
- Forms: Large input fields with ample touch targets and breathing room

## Further guidance

### Slow Living Society - Design System

- Style ID: 232

### Temperature Rating

- (Warm Calm)
- The design leans toward warmth through sage greens and cream tones,
- creating an inviting, nurturing environment while maintaining the
- coolness needed for professional use.

### Formality Rating

- (Relaxed)
- Informal enough to feel approachable and human, but structured enough
- to support productivity. The design doesn't demand perfection or
- urgency, allowing users to work at their own pace.

### Responsive Strategy

- Mobile-first approach with generous padding at all breakpoints
- Single-column layouts prioritized to reduce cognitive load
- Navigation collapses to simple, accessible menu
- Tables stack vertically on mobile with clear labeling

## Not synced

Built from `style-232-slow-living.html`. No component bundle: the reference page's markup is not packaged as live components.
