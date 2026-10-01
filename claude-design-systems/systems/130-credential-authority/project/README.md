Professional Credentialing with Swiss Precision. Inspired by: AAMC (Medical), NCEES (Engineering), ABET Accreditation, Professional Licensing Boards 4-WAY EXPERIMENTAL BLEND: 1. Professional Society (35%): Traditional authority, institutional trust, formal credentialing 2. Swiss Typography (25%): Grid precision, typographic hierarchy, minimalist clarity 3. Credentialing (20%): Verification systems, certification badges, compliance tracking 4. Skeleton UI (20%): Loading states, progressive disclosure, modern efficiency.

**Blend:** Professional Society 35% + Swiss Typography 25% + Credentialing 20% + Skeleton UI 20%  
**Temperature:** 3/10 (cool) · **Formality:** 9/10 · **Tags:** professional, association  
**Perfect for:** Certification Bodies, Professional Credentials, Standards Orgs

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “CredentialPro Authority”, “Active Professional Credentials”, “Credential Verification Database”.
- Buttons are short verb phrases in Title Case: “Apply for Credential”, “View Details”, “View Details”, “View Details”.
- The reference page uses emoji as inline glyphs (🎓 📜 ⭐ 🏥 ⏳ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `authority-white`, `credential-navy`, `verification-green`, `gold-badge`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`red-alert`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --authority-white: #fafbfc     → Clean institutional background, professional clarity
- --credential-navy: #0c4a6e      → Deep authority, professional trust, institutional stability
- --verification-green: #059669   → Verified status, approved credentials, active certifications
- --swiss-black: #1e293b          → Primary text, maximum hierarchy, Swiss precision
- --slate-50: #f8fafc             → Card backgrounds, subtle elevation
- --slate-100: #f1f5f9            → Skeleton loading states, progressive disclosure
- --slate-200: #e2e8f0            → Borders, grid lines, structural precision
- --slate-400: #94a3b8            → Secondary text, metadata, supporting information
- --slate-600: #475569            → Tertiary text, subtle emphasis
- --gold-badge: #ca8a04           → Premium certifications, advanced credentials

## Typography

- `display` — "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- `body` — "IBM Plex Mono", "Courier New", monospace

Faces are hosted on Google Fonts (IBM Plex Mono, IBM Plex Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `heading-4`), always with the letter-spacing given.

### Type rationale

- IBM Plex Sans: Headings, UI labels, professional body (Swiss-inspired precision)
- IBM Plex Mono: Credential IDs, certification numbers, data fields (technical authority)
- Font sizes: Strict hierarchy (14px base → 32px institutional headers)
- Line heights: Swiss precision (1.5 for body, 1.2 for headings)
- Letter spacing: Tight (-0.5px headers, 0.5px uppercase labels)

## Spacing, shape and elevation

- Spacing steps: `space-1` 8px, `space-2` 16px, `space-3` 24px, `space-4` 32px, `space-5` 40px, `space-6` 48px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 6px, `radius-lg` 8px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- SWISS PRECISION GRID
- Strict 8px grid system (Swiss design methodology)
- Card spacing: 16px gaps for organized density
- Padding: 24px standard module, 32px elevated sections
- Minimal ornamentation, maximum information clarity
- Skeleton loading: 200ms stagger for perceived performance

## States and motion

- Hover: Subtle 1px border shift for precision feedback
- Loading: Skeleton shimmer (Swiss gray palette, 1.5s loop)
- Verified: Green checkmark + border pulse animation
- Expired: Red border + warning icon
- Pending: Amber border + processing indicator
- Focus: 2px navy outline for keyboard navigation

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 200ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `verification-green` 3.6:1, `gold-badge` 2.8:1, `amber-pending` 2.1:1, `category-tag-bg` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 Level AA contrast ratios (minimum 7:1 for navy on white)
- Color + icon + text redundancy for verification states
- Keyboard navigation with visible focus indicators
- Screen reader announcements for credential status changes
- Reduced motion support for skeleton animations

## Component inventory

The reference page composes these patterns from the tokens above:

1. Credential Cards: Certification status, expiration tracking, verification badges
2. Swiss Grid Layout: 4-column precision system, mathematical spacing
3. Verification Table: Detailed credential database with filter controls
4. Skeleton States: Loading placeholders for async data, shimmer animations
5. Authority Badges: Color-coded certification levels, compliance indicators
6. Progressive Forms: Multi-step credential applications, validation states

## Further guidance

### Temperature

- Cold Institutional (3/10)
- Highly formal and authoritative
- Minimal emotional warmth
- Professional credibility prioritized
- Trust through precision and clarity

### Formality

- Very High Authority (9/10)
- Maximum professional rigor
- Institutional-grade presentation
- Zero casual elements
- Credibility through Swiss precision

### Performance Optimizations

- Single embedded stylesheet (zero external requests)
- CSS custom properties for theme consistency
- GPU-accelerated skeleton animations (transform/opacity)
- Progressive loading with skeleton states
- Semantic HTML for institutional SEO

### Brand Positioning

- Professional credentialing leader
- Regulatory compliance authority
- Institutional trust foundation
- Swiss precision methodology

### Competitive Differentiation

- More modern than ABET (skeleton UI, progressive design)
- More precise than general LMS platforms (Swiss grid system)
- More efficient than legacy credential systems (skeleton loading)
- More authoritative than startup platforms (professional society aesthetics)

## Not synced

Built from `style-130-credential-authority.html`. No component bundle: the reference page's markup is not packaged as live components.
