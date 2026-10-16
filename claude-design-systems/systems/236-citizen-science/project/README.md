This design celebrates the democratization of scientific discovery. It bridges the gap between professional research and amateur curiosity, creating an inclusive environment where everyone can contribute to meaningful scientific work. The interface balances scientific rigor with accessible friendliness.

**Blend:** Amateur Research 55% + Community Discovery 30% + Data Collection 15%  
**Temperature:** 6/10 (warm) · **Formality:** 5/10 · **Tags:** academic, association  
**Perfect for:** Citizen Science, Community Research, Amateur Scientists

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Citizen Science Hub”, “Recent Observations”, “Submit Observation”, “Your Progress”.
- Buttons are short verb phrases in Title Case: “Join Research”, “View All”, “Submit Observation”, “Browse All Projects”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “My Observations”, “Data Sets”, “Community”, “Learn”.
- The reference page uses emoji as inline glyphs (🔬 🔍 🌿 📊 ⭐ ⏱); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `discovery-purple`, `discovery-purple-light`, `nature-green`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Discovery Purple (#7c3aed): Wonder of exploration, innovation in research
- Nature Green (#16a34a): Environmental science, biological observation
- Research Blue (#0284c7): Scientific inquiry, data-driven insights
- Lab Coat White (#ffffff): Clean methodology, transparent processes

## Typography

- `display` — Karla, sans-serif
- `fira-sans` — "Fira Sans", sans-serif

Faces are hosted on Google Fonts (Karla, Fira Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700&family=Fira+Sans:wght@300;400;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`, `button`), always with the letter-spacing given.

### Type rationale

- Karla: Friendly, approachable sans-serif for welcoming science communication
- Fira Sans: Technical clarity for data displays and scientific information

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- Data collection forms with progressive guidance
- Contribution badges celebrating participation milestones
- Research progress bars showing collective impact
- Interactive observation cards with scientific templates
- Community leaderboards fostering friendly competition

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `nature-green` 3.2:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `lab-white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG AA contrast on all color combinations
- Large touch targets for field data entry
- Clear form validation with helpful error messages
- Voice-over friendly data entry workflows
- Keyboard navigation for all interactive elements

## Component inventory

The reference page composes these patterns from the tokens above:

- Data collection forms with progressive guidance
- Contribution badges celebrating participation milestones
- Research progress bars showing collective impact
- Interactive observation cards with scientific templates
- Community leaderboards fostering friendly competition

## Further guidance

### Temperature

- (Balanced Inquiry)
- Warm enough to be inviting, cool enough to maintain scientific credibility

### Formality

- (Accessible Science)
- Professional research methods presented in an approachable, non-intimidating way

## Not synced

Built from `style-236-citizen-science.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-friendly`, `--font-data`.
