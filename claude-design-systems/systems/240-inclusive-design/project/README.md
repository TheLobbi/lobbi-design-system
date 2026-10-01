This interface exemplifies universal accessibility, proving that inclusive design creates better experiences for everyone. Every element meets WCAG AAA standards while maintaining visual appeal through thoughtful color, typography, and spacing. The design demonstrates that accessibility and aesthetics aren't competing goals but complementary principles that, when unified, create truly human-centered digital experiences adaptable to diverse human abilities and needs.

**Blend:** Universal Accessibility 55% + Human-Centered 30% + Adaptive Interfaces 15%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** professional, association  
**Perfect for:** Accessibility Organizations, Inclusive Design, Universal Design

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Inclusive Design Alliance”, “Accessibility Statistics”, “Core Programs”, “Accessibility Auditing”.
- Buttons are short verb phrases in Title Case: “✓ Request Audit”, “ℹ️ Learn More”.
- Navigation uses single nouns: “Principles”, “Resources”, “Community”, “Standards”.
- The reference page uses emoji as inline glyphs (♿ 📋 ⭐ 🎓 📚 🌐); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-access-blue`, `color-warm-orange`, `color-deep-black`, `color-soft-teal`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success-green`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Accessibility Blue (#0066cc): Trust, digital inclusion, WCAG compliant
- Success Green (#059669): Positive feedback, clear confirmation, AAA contrast
- Warm Orange (#ea580c): Attention without alarm, accessible energy
- Neutral Gray (#6b7280): Professional balance, subtle backgrounds
- Pure White (#ffffff): Maximum contrast foundation
- Deep Black (#111827): Ultimate readability, AAA text
- Soft Teal (#14b8a6): Friendly action, distinctive yet calm

## Typography

- `display` — Inter, system-ui, sans-serif
- `body` — "Atkinson Hyperlegible", -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Atkinson Hyperlegible, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Inter:wght@300;400;500;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

### Type rationale

- Atkinson Hyperlegible (Primary):
- Designed by Braille Institute for low vision users
- Enhanced character differentiation (critical for accessibility)
- Superior legibility at all sizes and weights
- Reduces reading fatigue for all users
- Perfect for maximum readability requirements

- Inter (Secondary):
- Excellent screen rendering at all sizes
- Clear, neutral, highly legible
- Variable font supporting fine-tuning
- Professional without being cold
- Wide language support

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 4px, `border-radius-md` 8px, `border-radius-lg` 12px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

1. Header: High contrast with clear navigation hierarchy
2. Access Stats: Bold cards with AAA contrast ratios throughout
3. Inclusive Cards: Generous padding, clear content structure
4. Data Table: Maximum readability with clear alternating rows
5. Accessible Form: Explicit labels, helpful hints, error guidance
6. Action Buttons: Large touch targets, icon+text always, clear states
7. Status Badges: Never rely on color alone, use icons+text
8. Footer: Organized links with accessibility statement

## States and motion

- 4px thick focus indicators with AAA contrast
- Hover states clearly distinguishable
- Disabled states semantically marked
- Loading states with screen reader announcements
- Error recovery with helpful guidance
- Undo options for destructive actions
- Time-independent interactions

Timing values: `--transition-base` 250ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.1:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `color-success-green` 3.4:1, `color-neutral-gray` 4.4:1, `color-light-gray` 1.0:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AAA compliant (7:1 contrast for normal text, 4.5:1 for large)
- Minimum 18px body text for AAA large text threshold
- Touch targets 56x56px minimum (exceeds 44px AA requirement)
- Focus indicators 4px thick with 3:1 contrast minimum
- Full keyboard navigation with skip links
- Semantic HTML5 landmarks throughout
- ARIA labels where needed, not overused
- Alt text for all meaningful images
- Forms with explicit labels and fieldset legends
- Error identification and suggestion
- Reduced motion media query support
- Color never sole indicator of information
- Consistent, predictable interactions
- Clear page structure for screen readers
- Zoom support to 200% without horizontal scrolling

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: High contrast with clear navigation hierarchy
2. Access Stats: Bold cards with AAA contrast ratios throughout
3. Inclusive Cards: Generous padding, clear content structure
4. Data Table: Maximum readability with clear alternating rows
5. Accessible Form: Explicit labels, helpful hints, error guidance
6. Action Buttons: Large touch targets, icon+text always, clear states
7. Status Badges: Never rely on color alone, use icons+text
8. Footer: Organized links with accessibility statement

## Further guidance

### Spatial Hierarchy

- 16px base unit with generous spacing
- Minimum 44px touch targets (WCAG 2.5.5 Level AA)
- Clear visual grouping through whitespace
- Consistent spacing patterns reducing cognitive load
- Breathing room preventing overwhelm
- Logical reading order for screen readers

### Emotional Temperature

- Balanced Welcoming (6/10):
- Professional blues create trust
- Warm accents (orange, teal) add friendliness
- Clean whites provide visual rest
- Overall: Accessible, confident, inclusive

### Formality Level

- Professional Approachable (6/10):
- Serious about accessibility mission
- Approachable through clear communication
- Professional without being intimidating
- Suitable for enterprise and community use

### Performance Optimization

- Minimal DOM complexity for assistive tech
- Fast font loading with font-display: swap
- Efficient CSS with minimal specificity
- No layout shifts during load
- Optimized for slow connections
- Progressive enhancement strategy
- Graceful degradation always

### Brand Alignment

- Establishes inclusive design credibility through:
- Living the principles in the interface itself
- AAA compliance demonstrating commitment
- Multiple accessibility features showing expertise
- Clear, empathetic communication
- Inclusive imagery and language

### Use Cases

- Accessibility consulting firms
- Inclusive design agencies
- Universal design organizations
- Government digital services
- Educational accessibility programs
- Corporate diversity and inclusion teams
- Non-profit advocacy organizations
- Accessible technology platforms

### Competitive Differentiation

- Unlike typical "accessible" sites, this design:
- Achieves AAA compliance while maintaining visual appeal
- Provides multiple contrast and display modes
- Uses scientifically validated accessible typography
- Demonstrates accessibility as design excellence
- Shows inclusive design enhances experience for everyone

### Scalability

- Component system supports:
- Theme switching (light, dark, high contrast)
- Font family alternatives (including OpenDyslexic option)
- Text sizing controls (system level)
- Spacing adjustment modes
- Motion preference controls
- Modular, reusable components
- Consistent accessibility patterns

## Not synced

Built from `style-240-inclusive-design.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--touch-min`, `--focus-ring`, `--focus-offset`.
