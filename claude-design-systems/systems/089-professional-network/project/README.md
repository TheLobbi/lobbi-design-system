Professional Network: Professional Network 80% + Career Excellence 20%.

**Blend:** Professional Network 80% + Career Excellence 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** association, professional  
**Perfect for:** Professional Networks, Career Organizations, Industry Forums

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Alexandra Martinez”, “Your Professional Network Dashboard”, “🎉 National Conference 2025”, “Opening Keynote: Future of Professional Networking”.
- Buttons are short verb phrases in Title Case: “View Schedule →”, “RSVP Now”, “RSVP Now”, “RSVP Now”.
- The reference page uses emoji as inline glyphs (👥 ↗ 🤝 📅 🎯 🎉); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `navy-900`, `teal-600`, `teal-100`, `orange-600`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Ambitious Navy (#0f172a): Professional growth, authority, trust
- Success Teal (#0d9488): Opportunity, innovation, forward momentum
- Momentum Orange (#ea580c): Engagement, action, networking energy
- Clean White: Clarity, professionalism, space for connections
- Deep Slate (#334155): Sophistication, reliability

## Typography

- `display` — "Plus Jakarta Sans", sans-serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Plus Jakarta Sans, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Plus Jakarta Sans: Contemporary, approachable professionalism
- Inter: Clean networking clarity, excellent readability
- Dynamic hierarchy for quick scanning

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 0.75rem, `spacing-md` 1rem, `spacing-lg` 1.5rem, `spacing-xl` 2rem, `spacing-2xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.375rem, `radius-md` 0.5rem, `radius-lg` 0.75rem, `radius-xl` 1rem, `radius-2xl` 1.5rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `teal-600` 3.7:1, `teal-500` 2.4:1, `teal-100` 1.1:1, `orange-600` 3.5:1, `white` 1.0:1, `gray-200` 1.2:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Style

- 89 - Professional Network + Career Excellence

### Networking Elements

1. Connection Metrics: Real-time relationship tracking
2. Event Calendar: Opportunity visibility
3. Mentorship Matching: Career development focus
4. Member Spotlight: Community recognition
5. Industry Insights: Knowledge sharing
6. Chapter Hubs: Geographic networking
7. Resource Library: Professional development

### Ux Principles

- Immediate network value visibility
- Clear call-to-action for engagement
- Social proof through member activity
- Progress tracking for career growth
- Easy event discovery and RSVP
- Peer connection opportunities

### Conversion Goals

- Increase event attendance (+40%)
- Drive mentorship participation (+60%)
- Boost member connections (+75%)
- Enhance resource engagement (+50%)

## Not synced

Built from `style-89-professional-network.html`. No component bundle: the reference page's markup is not packaged as live components.
