Premium healthcare systems demand exceptional trust, clarity, and accessibility. This design establishes clinical excellence through clean interfaces that prioritize patient safety, data transparency, and professional credibility. Inspired by Mayo Clinic and Cleveland Clinic digital experiences. BLEND COMPOSITION Medical Premium (75%): Clean Technology (25%): COLOR PSYCHOLOGY & ACCESSIBILITY Medical Blue (#0ea5e9): Pure White (#ffffff): Soft Green (#10b981): Warm Gray (#f3f4f6):.

**Blend:** Medical Premium 75% + Clean Technology 25%  
**Temperature:** 4/10 (cool) · **Formality:** 8/10 · **Tags:** professional, tech  
**Perfect for:** Medical Practices, Healthcare Networks, Clinical Services

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Sarah Anderson”, “Upcoming Appointments”, “Dr. Katherine Lee, MD”, “Dr. James Chen, DO”.
- Navigation uses single nouns: “Dashboard”, “Appointments”, “Health Records”, “Messages”, “Providers”, “Billing”.
- The reference page uses emoji as inline glyphs (♥ 📅 ✉ ★ 🕐 📋); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `trustworthy-medical-blue`, `soft-green`, `patient-details-text`, `stat-icon-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

### Type rationale

- Font Family: Source Sans Pro (Humanist Sans-Serif)
- Designed by Paul D. Hunt for Adobe
- Excellent readability for medical data and long-form content
- Humanist characteristics convey approachability
- Wide range of weights supports clear hierarchy

- Weight Hierarchy:
- 700 Bold: Section headers, critical alerts
- 600 Semi-Bold: Card titles, provider names
- 400 Regular: Body text, data values, descriptions
- 300 Light: Supporting text, metadata, timestamps

- Accessibility Considerations:
- Minimum 16px base font size for body text — **the reference page sets running text at 14px**
- 1.6 line-height for comfortable reading
- Adequate letter-spacing for clarity
- Clear contrast ratios meeting WCAG AA standards

- SPACING & LAYOUT PRINCIPLES

- 8px Base Grid System:
- 8px: Tight spacing (icon padding, inline elements)
- 16px: Standard spacing (component padding)
- 24px: Section spacing (card gaps, list items)
- 32px: Major spacing (section separation)
- 48px: Hero spacing (header padding, major sections)

- Whitespace Strategy:
- Generous whitespace prevents information overwhelm
- Clean margins reduce anxiety around medical data
- Organized layouts support quick scanning and comprehension
- Calm visual rhythm promotes patient comfort

- COMPONENT ARCHITECTURE

- Health Metrics Cards:
- Display vital signs, test results, health scores
- Color-coded status indicators (green=healthy, blue=normal, amber=attention)
- Large readable values with contextual units
- Trend indicators showing improvement/decline

- Appointment Cards:
- Provider photo, credentials, specialty
- Date, time, location with visual hierarchy
- Action buttons (confirm, reschedule, message)
- Status badges (upcoming, completed, cancelled)

- Provider Profiles:
- Professional headshots maintaining dignity
- Credentials prominently displayed (MD, PhD, Board Certifications)
- Specialty and department information
- Patient ratings and availability

- Status Indicators:
- Color-coded badges for appointment states
- Lab result statuses (pending, complete, critical)
- Medication adherence tracking
- Health goal progress visualization

- Data Tables:
- Clean borders, adequate row height (48px minimum)
- Sortable columns for appointment history, lab results
- Responsive on mobile (stack or horizontal scroll)
- Zebra striping optional (subtle if used)

- INTERACTION PATTERNS

- Hover States:
- Subtle elevation on cards (shadow deepening)
- Color shifts on buttons (blue darkening)
- Underlines on text links for clarity

- Focus States:
- Keyboard navigation support for accessibility
- Clear focus rings (2px solid medical blue)
- Tab order follows logical reading flow

- Loading States:
- Skeleton screens for health data loading
- Pulse animations during API calls
- Clear loading indicators for critical actions

- TRUST & CREDENTIALING SIGNALS

- Board certifications displayed prominently
- Medical facility accreditations in footer
- Privacy badges (HIPAA compliant messaging)
- Secure connection indicators
- Provider credentials (MD, DO, PhD, RN, etc.)
- Years of experience, patient reviews

- ACCESSIBILITY COMPLIANCE

- WCAG 2.1 Level AA Standards:
- Color contrast ratios exceed 4.5:1 for text
- All interactive elements keyboard accessible
- ARIA labels for screen reader support
- Form inputs with proper labeling
- Error messages clearly associated with fields
- Skip navigation links for main content

- Medical-Specific Accessibility:
- Large touch targets (minimum 44x44px)
- Clear medication names avoiding confusion
- Allergy warnings prominently displayed
- Critical alerts with multiple sensory indicators

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-10` 10px, `radius-12` 12px, `radius-full` 50%.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- COOL TRUSTWORTHY (4/10)
- Cool blue tones establish medical authority and calm professionalism.
- Not cold or sterile, but reassuring and competent. Patients feel confident
- their health is in expert hands while remaining comfortable and informed.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.3:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `trustworthy-medical-blue` 2.5:1, `soft-green` 2.3:1, `pure-white` 1.1:1, `patient-details-text-2` 4.4:1, `logo-bg` 3.7:1, `provider-avatar-bg` 4.1:1, `stat-icon-text` 2.0:1, `status-badge-text` 3.4:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

## Further guidance

### Formality Level

- HIGH PROFESSIONAL (8/10)
- Clinical precision balanced with human warmth. Professional without being
- intimidating. Language is clear, data is transparent, interactions are
- respectful of patient dignity and medical seriousness.

### Responsive Design Strategy

- Desktop (1200px+): 4-column stats grid, side-by-side cards, full table
- Tablet (768px-1199px): 2-column stats grid, stacked cards, scrollable table
- Mobile (320px-767px): 1-column layout, stacked cards, simplified table

- Touch-Friendly Considerations:
- Minimum 44px tap targets for mobile
- Adequate spacing between interactive elements
- Swipe gestures for appointment navigation
- Bottom-sheet modals for forms on mobile

- PERFORMANCE & OPTIMIZATION

- Efficient CSS with minimal specificity
- System fonts fallback if web fonts fail
- Lazy loading for provider images
- Debounced search inputs
- Optimized SVG icons (<5KB total)

- SECURITY & PRIVACY CONSIDERATIONS

- Patient data encrypted in transit and at rest
- Session timeout warnings
- Multi-factor authentication support
- Audit logs for medical record access
- HIPAA compliance messaging in footer
- Privacy policy easily accessible

- USE CASES & SCENARIOS

- Patient Dashboard:
- View upcoming appointments and provider details
- Check vital signs and lab results
- Message healthcare team
- Request prescription refills
- Access medical records and billing

- Provider Dashboard:
- Patient schedule and appointment management
- Clinical notes and charting
- Lab result review and communication
- Care team coordination
- Patient education resource sharing

- BRAND ALIGNMENT

- Suitable for:
- Hospital systems and medical centers
- Specialty clinics (cardiology, oncology, orthopedics)
- Telehealth platforms
- Patient portal applications
- Healthcare SaaS products
- Medical research institutions

- Conveys:
- Clinical excellence and expertise
- Patient-centered care philosophy
- Technological advancement in healthcare
- Trustworthiness and transparency
- Professional credibility

### Implementation Complete

- MEDICAL PREMIUM HEALTHCARE DASHBOARD

## Not synced

Built from `style-28-medical-premium.html`. No component bundle: the reference page's markup is not packaged as live components.
