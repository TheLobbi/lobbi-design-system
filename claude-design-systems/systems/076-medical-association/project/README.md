Medical Association: Medical Association 80% + Healthcare Authority 20%.

**Blend:** Medical Association 80% + Healthcare Authority 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** association, professional  
**Perfect for:** Medical Associations, Physician Groups, Healthcare Networks

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “State Medical Association”, “Member Dashboard”, “Annual Scientific Meeting 2026”, “CME & Certification Programs”.
- Buttons are short verb phrases in Title Case: “Find CME Courses →”, “Application Guidelines”.
- Navigation uses single nouns: “Dashboard”, “CME & Certification”, “Advocacy & Policy”, “Resources”, “Events”, “Membership”.
- The reference page uses emoji as inline glyphs (⚕ 👥 📚 📋 ⚠ ℹ); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `primary-blue`, `primary-blue-light`, `soft-gray`, `healing-green`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`warning-amber`, `info-blue`, `alert-info-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ├─ Medical Blue (#0369a1): Trust, care, medical professionalism
- ├─ Clinical White (#ffffff): Cleanliness, precision, clarity
- ├─ Soft Gray (#f8fafc): Comfortable clinical environment
- ├─ Deep Navy (#0c4a6e): Authority, expertise, stability
- ├─ Healing Green (#059669): Positive outcomes, growth, certification
- Clinical Red (#dc2626): Urgent attention, critical alerts

## Typography

- `display` — "Nunito Sans", sans-serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Nunito Sans, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ├─ Nunito Sans: Modern medical sans-serif for headings
- │  └─ Approachable yet professional medical communication
- ├─ Inter: Clinical clarity for body text
- │  └─ High readability for complex medical information
- Monospace: Medical codes, credentials, certification numbers

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 0.375rem, `radius-md` 0.5rem, `radius-lg` 0.75rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- ├─ Status Indicators: Visual certification/compliance badges
- ├─ Progress Tracking: CME completion visualization
- ├─ Alert System: Renewal deadlines, policy changes
- Credential Verification: Professional standing confirmation

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 7.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `clinical-white` 1.0:1, `healing-green` 3.6:1, `warning-amber` 2.1:1, `info-blue` 3.5:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Component inventory

The reference page composes these patterns from the tokens above:

- ├─ CME Credits Tracking: Real-time continuing education monitoring
- ├─ Board Certification Dashboard: Status and renewal tracking
- ├─ Practice Statistics: Data visualization for member insights
- ├─ Legislative Updates: Healthcare policy advocacy
- ├─ Specialty Sections: Sub-organization membership
- ├─ Patient Safety Resources: Clinical quality improvement
- Research Grants: Professional advancement opportunities

## Further guidance

### Design Genetics

- ├─ Medical Association DNA (80%):
- │  ├─ Professional credentials tracking
- │  ├─ CME (Continuing Medical Education) dashboard
- │  ├─ Specialty section organization
- │  ├─ Scientific meeting coordination
- │  └─ Peer network emphasis
- ├─ Healthcare Authority DNA (20%):
- │  ├─ Board certification standards
- │  ├─ Policy and advocacy leadership
- │  ├─ Quality and safety oversight
- │  └─ Regulatory compliance monitoring

### Design Parameters

- ├─ Temperature: 4/10 (Clinical Precision with Care)
- │  └─ Balanced between warm empathy and scientific rigor
- ├─ Formality: 9/10 (Professional Medical Standards)
- │  └─ Maintains highest professional credibility
- ├─ Target Audience: State medical associations, specialty societies, physician networks
- Use Case: Member engagement, credential tracking, professional development

### Lobbi Integration Context

- ├─ Primary Metrics:
- │  ├─ Active Physicians: 8,456 (membership scale)
- │  ├─ Board Certified: 7,892 (93.3% certification rate)
- │  ├─ CME Hours Completed: 156,780 (professional development)
- │  └─ Policy Initiatives: 12 (advocacy engagement)
- ├─ Featured Sections:
- │  ├─ Annual Scientific Meeting (conference coordination)
- │  ├─ CME & Certification Programs (professional development)
- │  └─ Healthcare Policy Updates (advocacy engagement)
- Data Tables: Member certification status tracking

### Design Differentiation

- This style balances the collegial nature of a professional association with
- the authoritative standards of a healthcare regulatory body. It emphasizes
- peer collaboration while maintaining rigorous professional standards.

### Version

- 1.0.0

### Created

- 2025-12-09

### Framework

- Standalone HTML/CSS

## Not synced

Built from `style-76-medical-association.html`. No component bundle: the reference page's markup is not packaged as live components.
