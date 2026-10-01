This interface embodies the intersection of biology and technology, where human identity becomes data. Fingerprint patterns, scan lines, and verification badges create an aesthetic of precision, security, and trust. The design balances the cold efficiency of security systems with organic patterns that remind users of the human element being protected.

**Blend:** Security Tech 55% + Organic Patterns 30% + Minimal Clean 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** tech, professional  
**Perfect for:** Security Firms, Identity Verification, Biometric Tech

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Identity Verification Network”, “VERIFICATION METHODS”, “Fingerprint Recognition”, “Facial Recognition”.
- Buttons are short verb phrases in Title Case: “✓ Start Verification”, “◉ Test Scan”, “Cancel”.
- Navigation uses single nouns: “Dashboard”, “Scans”, “Verification”, “✓ Secure”.
- The reference page uses emoji as inline glyphs (⚡ ⚠ 🔒 ⏳ ✔ ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-secure-green`, `color-deep-navy`, `color-tech-blue`, `color-off-white`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-alert-amber`, `badge-error-bg`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Secure Green (#00d084): Trust, verification, approved status, safety signal
- Alert Amber (#ffb020): Caution, pending status, attention required, warning
- Deep Navy (#0a1628): Security depth, encrypted data, professional authority
- Fingerprint Gray (#6b7280): Neutral biometric data, scan information
- Tech Blue (#0ea5e9): Digital systems, cold technology, data processing
- Pure White (#ffffff): Clean interface, clear information, transparency
- Carbon Black (#1f2937): Strong security, data protection, authority

## Typography

- `display` — "IBM Plex Mono", "Courier New", monospace
- `body` — Inter, system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (IBM Plex Mono, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- IBM Plex Mono (Data/Technical):
- Monospace suggesting data and code precision
- Clear distinction between characters for IDs
- Technical authority for security information
- Excellent for biometric data display

- Inter (UI/Interface):
- Modern, neutral, highly legible
- Professional corporate aesthetic
- Warm enough to be approachable
- Perfect for security without intimidation

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 6px, `border-radius-md` 12px, `border-radius-lg` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

1. Header: Secure navigation with verification status
2. Security Stats: Encrypted data cards with scan patterns
3. Identity Cards: Biometric profiles with fingerprint backgrounds
4. Verification Table: Authentication logs with scan lines
5. Access Form: Secure inputs with encryption indicators
6. Action Buttons: High-security CTAs with lock icons
7. Status Badges: Verification indicators with colors
8. Footer: Grid-based with security compliance info

## States and motion

- Hover states reveal security details
- Scan line animations on verification
- Fingerprint reveals on card hover
- Pulse effects for active scans
- Smooth authentication transitions
- Feedback for every security action

Timing values: `--transition-fast` 150ms ease, `--transition-base` 300ms ease, `--transition-slow` 500ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-secure-green` 1.9:1, `color-tech-blue` 2.6:1, `color-white` 1.0:1, `color-scan-green` 1.2:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AAA compliant contrast ratios
- Color-blind friendly status indicators
- Icon + text for all status indicators
- Clear focus states for keyboard navigation
- Screen reader compatible structure
- High contrast mode support
- Touch targets minimum 44x44px
- Clear error messages and warnings

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Secure navigation with verification status
2. Security Stats: Encrypted data cards with scan patterns
3. Identity Cards: Biometric profiles with fingerprint backgrounds
4. Verification Table: Authentication logs with scan lines
5. Access Form: Secure inputs with encryption indicators
6. Action Buttons: High-security CTAs with lock icons
7. Status Badges: Verification indicators with colors
8. Footer: Grid-based with security compliance info

## Further guidance

### Spatial Hierarchy

- 8px base unit for technical precision
- Fibonacci-inspired spacing for organic balance
- Clear visual hierarchy for security priorities
- Systematic grid for data organization
- Breathing room around biometric elements
- Precise alignment for professional authority

### Emotional Temperature

- Balanced Professional (5/10):
- Warm enough to be approachable
- Cool enough to signal security
- Green provides reassurance
- Navy maintains professionalism
- Overall: Trustworthy and secure

### Formality Level

- High Security (8/10):
- Professional corporate interface
- Serious security implications
- Authoritative visual language
- Compliance-focused design
- Clear, unambiguous communication

### Performance Optimization

- SVG for fingerprint patterns
- CSS animations for scan lines
- Efficient gradient calculations
- Minimal external dependencies
- Optimized biometric pattern rendering
- Fast form validation feedback
- Lightweight icon system

### Brand Alignment

- Establishes security credibility through:
- Professional color scheme
- Technical typography choices
- Biometric visual metaphors
- Clear verification indicators
- Authority and trustworthiness

### Use Cases

- Identity verification platforms
- Biometric authentication systems
- Security access control
- Digital identity management
- KYC (Know Your Customer) interfaces
- Two-factor authentication apps
- Border control systems
- Secure login dashboards

### Competitive Differentiation

- Unlike standard security interfaces, this design:
- Balances technical precision with organic patterns
- Uses biometric aesthetics as functional elements
- Creates trust through visual language
- Maintains humanity in security systems
- Clarifies complex security data

### Scalability

- Component system supports:
- Multiple verification levels
- Various biometric types
- Different security tiers
- Customizable scan patterns
- Modular authentication flows
- Reusable verification components

## Not synced

Built from `style-212-biometric-identity.html`. No component bundle: the reference page's markup is not packaged as live components.
