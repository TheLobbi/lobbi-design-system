Credit Union League: Credit Union 80% + Member-Owned Trust 20%.

**Blend:** Credit Union 80% + Member-Owned Trust 20%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** association, professional  
**Perfect for:** Credit Unions, Member-Owned Banks, Financial Cooperatives

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Credit Union League”, “League Dashboard”, “Top Performing Credit Unions”, “Annual Convention 2025”.
- Buttons are short verb phrases in Title Case: “Become a Member CU”, “Learn About Membership”.
- Navigation uses single nouns: “Dashboard”, “Member Credit Unions”, “Annual Convention”, “Shared Services”, “Compliance”, “Resources”.
- The reference page uses emoji as inline glyphs (🔔 🏦 👥 💰 🤝 📅); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `trust-blue`, `growth-green`, `warm-orange`, `deep-navy`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`, `warning-amber`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Typography

- `display` — Nunito, sans-serif
- `body` — "Open Sans", sans-serif

Faces are hosted on Google Fonts (Nunito, Open Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.5rem, `radius-md` 0.75rem, `radius-lg` 1rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `growth-green` 3.5:1, `warm-orange` 3.3:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `white` 1.1:1, `medium-gray` 2.4:1, `success-green` 2.4:1, `warning-amber` 2.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- WCAG 2.1 AA compliant color contrast
- Semantic HTML5 structure
- Clear data visualization
- Plain language financial terms
- Responsive grid layout

## Further guidance

### Psychological Temperature

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Warm and welcoming while maintaining financial credibility
- Community warmth: Approachable language, people-first metrics
- Trust signals: Professional layout, data transparency
- Cooperative spirit: Shared success indicators, member testimonials

### Formality Index

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Professional but member-centric
- Financial professionalism: Clear data, compliance focus
- Member accessibility: Plain language, inclusive design
- Democratic governance: Transparent decision-making

### Target Audience

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Credit union leagues and associations
- Cooperative financial institutions
- Member-owned banking networks
- Financial inclusion advocates
- Community development financial institutions (CDFIs)

### Primary

- Trust Blue (#2563eb)
- → Reliability, stability, member confidence
- → Used for: Headers, primary CTAs, key metrics

### Secondary

- Growth Green (#059669)
- → Prosperity, financial health, sustainable growth
- → Used for: Positive metrics, growth indicators, success stories

### Background

- Soft Blue Tint (#f0f9ff)
- → Clean, calm, approachable environment
- → Used for: Page background, card backgrounds

### Text

- Deep Navy (#1e3a5f)
- → Authority, readability, professionalism
- → Used for: Body text, data labels

### Accent

- Warm Orange (#ea580c)
- → Member benefits, community impact, engagement
- → Used for: Highlights, alerts, special programs

## Not synced

Built from `style-79-credit-union.html`. No component bundle: the reference page's markup is not packaged as live components.
