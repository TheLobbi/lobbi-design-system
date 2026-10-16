Combines the authoritative presence of national realtor associations with the premium service excellence of high-end property management. Creates a professional yet welcoming environment that emphasizes credentials, achievements, and member success.

**Blend:** Realtors Association 80% + Property Excellence 20%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** association, professional  
**Perfect for:** Realtor Associations, Real Estate Boards, Agent Networks

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Metropolitan Realtors Association”, “Professional Designations & Certifications”, “Local Market Statistics”, “Compliance Tracker”.
- The reference page uses emoji as inline glyphs (👥 🏆 📊 📚 ⭐ 💎); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `deep-red`, `warm-gold`, `navy`, `compliance-status-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Deep Red (#c41230): Brand recognition, professional authority,
- passion for real estate, action-oriented
- Warm Gold (#d4a843): Achievement, excellence, designations,
- premium service, value recognition
- Navy (#1e3a5f): Trust, stability, ethics, compliance
- Charcoal (#333333): Professional clarity, readability
- Warm Gray (#f5f4f0): Comfortable backgrounds, approachable

## Typography

- `display` — Montserrat, sans-serif
- `body` — "Open Sans", sans-serif

Faces are hosted on Google Fonts (Montserrat, Open Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Montserrat: Modern professional sans-serif for headings
- Strong letterforms convey authority
- Clean geometry projects competence
- Excellent for branding and section headers
- Open Sans: Friendly humanist sans-serif for body text
- High readability for extensive content
- Approachable and professional
- Optimal for data displays and tables

## Spacing, shape and elevation

- Spacing steps: `space-3` 3px, `space-5` 5px, `space-15` 15px, `space-20` 20px, `space-25` 25px, `space-30` 30px. Pad cards and sections from these steps only.
- Corners: `radius-4` 4px, `radius-8` 8px, `radius-10` 10px, `radius-12` 12px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 12.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `status-badge-bg` 1.0:1, `compliance-status-bg` 2.7:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Temperature

- (Warm & Welcoming)
- Warm red and gold palette creates approachable professionalism
- Friendly sans-serif typography balances authority with accessibility
- Inviting imagery and positive reinforcement throughout

### Formality

- (Professional but Personable)
- Maintains association credibility and standards
- Professional designation displays and compliance tracking
- Conversational tone in member communications
- Balance of institutional authority with personal service

### Design Elements

- ✓ MLS access status indicator
- ✓ Designation badge displays (CRS, ABR, GRI, SRES, etc.)
- ✓ Market statistics dashboard
- ✓ Lockbox/showing system integration
- ✓ Ethics and standards compliance tracking
- ✓ CE (Continuing Education) progress monitoring
- ✓ RPAC contribution status
- ✓ Member achievement recognition
- ✓ Transaction volume metrics
- ✓ Annual awards and recognition programs

### Target Audience

- Real estate boards and local associations
- MLS organizations and cooperatives
- State realtor associations
- Designated members (CRS, ABR, GRI holders)
- Broker/owners managing association compliance
- Association staff coordinating member services

### Competitive Positioning

- Differentiates from generic real estate dashboards by emphasizing
- professional credentials, association membership benefits, and
- continuous professional development. Creates pride in designation
- achievement and association affiliation.

### Ux Priorities

1. Quick access to MLS and lockbox systems
2. At-a-glance compliance status (CE, ethics, dues)
3. Clear designation and achievement tracking
4. Market statistics for professional competence
5. Easy navigation to education and resources

### Conversion Goals

- Increase designation program enrollment
- Boost RPAC political advocacy contributions
- Improve CE course completion rates
- Drive annual event attendance
- Enhance member engagement and retention

### Trust Signals

- → NAR-style branding and color scheme
- → Prominent display of professional designations
- → Code of Ethics compliance indicators
- → Market statistics and professional data
- → Awards and recognition programs
- → Educational achievement tracking

## Not synced

Built from `style-77-realtors-association.html`. No component bundle: the reference page's markup is not packaged as live components.
