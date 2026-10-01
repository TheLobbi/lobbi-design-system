The Zero Trust Security Alliance design embodies the principle of "never trust, always verify." This system creates a fortress-like interface where every element communicates security, vigilance, and military-grade precision. The design treats the dashboard as a command center where security professionals monitor threats, verify identities, and respond to incidents with split-second accuracy.

**Blend:** Fortress Security 55% + Military Precision 30% + Alert Systems 15%  
**Temperature:** 3/10 (cool) · **Formality:** 9/10 · **Tags:** tech, professional  
**Perfect for:** Cybersecurity, Defense Tech, Security Operations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Recent Security Events”, “Grant Security Clearance”, “Emergency Actions”, “Threat Level Indicators”.
- Buttons are short verb phrases in Title Case: “Export Log”, “Filters”, “Investigate”, “Review”.
- Navigation uses single nouns: “Dashboard”, “Threats”, “Access Control”, “Audit Logs”, “Settings”.
- The reference page uses emoji as inline glyphs (🛡 ⚠ 🚫 ⏱ 🔴 🟠); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `secure-navy`, `verified-green`, `data-blue`, `button-secondary-text`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`alert-red`, `warning-amber`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — Inter, sans-serif
- `jetbrains-mono` — "JetBrains Mono", monospace

Faces are hosted on Google Fonts (JetBrains Mono, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- JetBrains Mono: Selected for all security data, logs, hashes, IP addresses,
- and numerical information. Monospace fonts prevent misreading critical
- characters (0 vs O, 1 vs l) which could have severe security implications.
- The fixed-width also creates visual rhythm in data tables.

- Inter: Used for UI labels, navigation, and descriptive text. Its excellent
- legibility at small sizes and neutral character makes it perfect for
- interface chrome that should fade into the background.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-10` 10px, `space-12` 12px, `space-16` 16px, `space-24` 24px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px, `radius-full` 50%.

- 8px base unit for all spacing, creating mathematical precision throughout.
- Sections: 48px vertical spacing (6 units)
- Cards: 24px padding (3 units)
- Elements: 16px gaps (2 units)
- Tight: 8px (1 unit)

## States and motion

- Hover: Subtle background lightening (5-10%) for feedback without distraction
- Active: Slight press effect (1px translate) for tactile response
- Transitions: 150ms easing for professional speed without sluggishness
- Loading states: Pulse animations on security scans to show system activity

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG AAA contrast ratios on all text (7:1 minimum)
- Color coding always paired with text labels and icons (never color alone)
- Monospace fonts prevent character confusion for dyslexic users
- Large touch targets (44px minimum) for mobile incident response
- Focus indicators with 3px outlines for keyboard navigation
- Reduced motion respected in all animations
- Semantic HTML for screen reader compatibility

## Further guidance

### Zero Trust Security Alliance - Design System

- Style ID: 220

### Primary Palette

- Secure Navy (#0f172a): The foundational color representing the impenetrable
- fortress. This deep slate creates a serious, no-nonsense environment that
- minimizes eye strain during extended monitoring sessions. Psychologically,
- it signals depth, stability, and unwavering protection.

- Alert Red (#dc2626): Reserved exclusively for critical threats and urgent
- actions. This red is calibrated to trigger immediate attention without
- desensitizing users through overuse. Appears in <5% of interface elements.

- Verified Green (#16a34a): Represents authenticated, safe, and verified states.
- The green is darker than typical success colors to maintain the serious tone
- while still providing positive reinforcement.

- Shield Silver (#94a3b8): Used for borders, inactive states, and secondary
- elements. This metallic-inspired gray suggests armor plating and reinforced
- systems.

### Secondary Palette

- Warning Amber (#f59e0b): For elevated threats requiring attention but not
- immediate action. Creates a clear three-tier alert system (red/amber/green).

- Data Blue (#3b82f6): For informational elements, links, and non-critical
- interactive components.

- Deep Slate (#1e293b): Secondary background for cards and panels, providing
- subtle depth while maintaining the fortress aesthetic.

### Typography Scale

- Hero: 32px/40px (Page titles, critical alerts)
- Title: 24px/32px (Section headers)
- Body: 16px/24px (Standard content)
- Data: 14px/20px (Tables, logs, metrics)
- Small: 12px/16px (Labels, metadata)

### Buttons

- Primary (Red): Reserved for destructive or critical actions (Revoke Access,
- Block IP, Emergency Lockdown). The red signals "think twice before clicking."

- Secondary (Slate): Standard actions that are safe and reversible.

- Success (Green): Confirmations, approvals, and verification actions.

- All buttons use 8px padding, 6px border-radius for a slightly tactical feel,
- and bold weight for command-like authority.

### Badges

- Threat Level Indicators: Color-coded with icons (shield for secure, alert
- triangle for threats). Small size (12px text) with 4px padding to appear
- as metadata rather than primary content.

- Status Pills: Rounded capsules for user/system states (Active, Suspended,
- Verified). 16px padding horizontal for thumb-friendly touch targets.

### Tables

- Striped rows (alternating background) to reduce line-scanning errors in
- dense data sets. This is critical in security logs where missing one entry
- could mean missing a breach.

- Monospace for data columns, sans-serif for headers. Ample row height (44px)
- prevents misclicks on mobile devices during incident response.

- Hover states with subtle background shift to indicate interactivity without
- breaking the serious tone.

### Forms

- Dark input fields with light borders create inset appearance, suggesting
- data is being securely deposited into a vault.

- Focus states use alert blue (#3b82f6) to guide attention without alarm.

- Required fields marked with red asterisk - a universal convention that needs
- no explanation during high-stress incident response.

## Not synced

Built from `style-220-zero-trust.html`. No component bundle: the reference page's markup is not packaged as live components.
