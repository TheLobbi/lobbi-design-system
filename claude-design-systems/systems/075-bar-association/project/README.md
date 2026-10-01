Bar Association: Bar Association 80% + Legal Authority 20%.

**Blend:** Bar Association 80% + Legal Authority 20%  
**Temperature:** 3/10 (cool) · **Formality:** 10/10 · **Tags:** association, professional  
**Perfect for:** Bar Associations, Legal Societies, Attorney Networks

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “State Bar Association”, “Your Compliance Dashboard”, “Annual Meeting & Elections”, “CLE Programs & Compliance”.
- Buttons are short verb phrases in Title Case: “My Account”, “Sign Out”, “Register Now”, “Browse Catalog”.
- Navigation uses single nouns: “Dashboard”, “CLE Programs”, “Ethics Opinions”, “Member Directory”, “Committees”, “Resources”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `deep-navy`, `scales-gold`, `parchment-white`, `burgundy`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Judicial Black (#0d0d0d): Authority, finality, legal tradition
- Deep Navy (#0f172a): Institutional trust, professional dignity
- Scales Gold (#c9a227): Justice symbolism, honor, achievement
- Parchment White (#faf9f6): Historical documents, legal precedent
- Burgundy (#7c2d12): Important notices, ethical emphasis

## Typography

- `display` — "Libre Caslon Text", Georgia, serif
- `body` — "Source Serif Pro", "Times New Roman", serif

Faces are hosted on Google Fonts (Libre Caslon Text, Source Serif Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

### Type rationale

- Libre Caslon Text: Colonial-era legal tradition, formality
- Source Serif Pro: Modern document clarity, readability
- Small caps: Legal citations, case law, formal designations

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-6` 6px, `radius-12` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `scales-gold` 2.2:1, `parchment-white` 1.0:1, `category-tag-bg` 1.1:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliance for legal documents
- High contrast for document review
- Screen reader optimization for case citations
- Keyboard navigation for form completion

## Further guidance

### Design Strategy

- Blend: 80% Bar Association + 20% Legal Authority
- Temperature: 3/10 (cool, authoritative)
- Formality: 10/10 (maximum institutional gravitas)
- Target: State bar associations, legal societies, attorney networks

### Functional Elements

- CLE (Continuing Legal Education) compliance tracking
- Ethics status monitoring and guidance access
- Pro bono hours contribution tracking
- Practice area directory and specialization
- Court admission status and multi-jurisdiction tracking
- Disciplinary notices (subtle but present)
- Committee/section membership management

### Institutional Features

- Annual meeting and election information
- Member directory with practice areas
- Ethics opinions database access
- Professional development calendar
- Compliance dashboard with automated tracking

### Design References

- American Bar Association (ABA) portal design
- State bar association member systems
- Law library catalog systems
- Court filing systems (PACER aesthetic)
- Traditional legal letterhead and briefs

### Target Users

- Licensed attorneys (primary)
- Judges and magistrates
- Legal administrators
- Bar association staff
- Committee members and section leaders

### Compliance Considerations

- ABA Model Rules integration
- State-specific CLE requirements
- MCLE (Mandatory Continuing Legal Education) tracking
- Client trust account compliance
- Professional liability insurance verification

### Innovation Balance

- Traditional: 85% (institutional continuity)
- Modern: 15% (usability enhancements)
- Maintain legal profession's conservative aesthetic
- Subtle improvements without disrupting familiarity

## Not synced

Built from `style-75-bar-association.html`. No component bundle: the reference page's markup is not packaged as live components.
