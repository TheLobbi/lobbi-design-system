Enterprise Security Operations Center (SOC). Inspired by: CrowdStrike Falcon, Palo Alto Networks Cortex, Splunk Enterprise Security.

**Blend:** Cybersecurity 80% + Dark Trust 20%  
**Temperature:** 2/10 (cool) · **Formality:** 9/10 · **Tags:** tech, professional  
**Perfect for:** Security Firms, Cybersecurity, IT Security Services

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “CyberShield Enterprise”, “THREAT INTELLIGENCE DASHBOARD REAL-TIME”, “SECURITY OPERATIONS CENTER”, “Critical Threats”.
- The reference page uses emoji as inline glyphs (🛡 ⚠ 🔍 ✅ 💚 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `matrix-green`, `shield-blue`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`alert-red`, `warning-amber`, `info-cyan`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --security-dark: #0f0f0f     → Base vigilance, operational darkness
- --matrix-green: #22c55e       → Active monitoring, system health, GO status
- --alert-red: #ef4444          → Critical threats, incidents, STOP status
- --shield-blue: #3b82f6        → Protection active, defenses operational
- --warning-amber: #f59e0b      → Medium severity, attention required
- --slate-surface: #1a1a1a      → Card backgrounds, elevated surfaces
- --border-tactical: #2a2a2a    → Subtle divisions, tactical separations
- --text-primary: #e5e5e5       → High-contrast operational text
- --text-secondary: #a3a3a3     → Supporting information, metadata
- --text-mono: #d4d4d4          → Technical data, code, hashes

## Typography

- `display` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- `body` — "Fira Code", "Courier New", monospace

Faces are hosted on Google Fonts (Fira Code, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-2`, `heading-3`, `heading-4`, `label`), always with the letter-spacing given.

### Type rationale

- Fira Code: Technical data, IP addresses, hashes, threat IDs (monospace precision)
- Inter: UI labels, headings, body text (clean readability)
- Font sizes: Tactical hierarchy (12px data → 32px critical alerts)

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md` 12px, `space-lg` 16px, `space-xl` 24px, `space-2xl` 32px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 6px, `radius-lg` 8px.
- Elevation: `shadow-card`, `shadow-elevated`, lowest first for resting cards, higher for hover and overlays.

- SOC-OPTIMIZED
- Dense information architecture for maximum situational awareness
- 12px base spacing unit (compact operational grid)
- Tight card spacing (16px gaps) for dashboard efficiency
- Minimal whitespace to maximize data visibility

## States and motion

- Hover: Subtle 2px border glow (#3b82f6) for focused elements
- Active Threats: Pulsing red borders for critical incidents
- Resolved: Muted green borders for cleared events
- Scanning: Animated blue shimmer for active processes

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 200ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 15.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `text-muted` 4.0:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 Level AA contrast ratios (minimum 7:1 for critical alerts)
- Color + icon redundancy for status communication
- Keyboard navigation for all interactive elements
- Screen reader announcements for threat updates

## Component inventory

The reference page composes these patterns from the tokens above:

1. Threat Cards: Real-time threat intelligence with severity indicators
2. Incident Timeline: Chronological event tracking with status badges
3. Vulnerability Scores: CVE ratings with CVSS metrics
4. Compliance Status: Regulatory framework adherence monitoring
5. Data Table: Dense operational logs with monospace precision

## Further guidance

### Temperature

- Cold Vigilant (2/10)
- Clinical precision over warmth
- Machine-readable aesthetic
- Zero emotional softness
- Pure operational focus

### Formality

- Very High Secure (9/10)
- Enterprise-grade professional
- Military precision in presentation
- Zero casual elements
- Maximum trust signaling

### Performance Optimizations

- Single embedded stylesheet (zero external requests)
- CSS custom properties for theme consistency
- GPU-accelerated animations (transform/opacity only)
- Semantic HTML for accessibility and SEO

### Brand Positioning

- Enterprise security leader
- Fortune 500 trusted platform
- 24/7 SOC operational reliability
- Zero-trust architecture visualization

### Competitive Differentiation

- Denser than Splunk (more data per viewport)
- Cleaner than IBM QRadar (better visual hierarchy)
- More technical than Microsoft Sentinel (SOC-first design)
- Professional warmth balance (20% trust softening)

## Not synced

Built from `style-50-cybersecurity.html`. No component bundle: the reference page's markup is not packaged as live components.
