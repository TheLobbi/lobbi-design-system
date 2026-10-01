Every interaction matters. This system focuses on meaningful feedback through carefully crafted micro-interactions that delight users while maintaining clarity and purpose. Small details create big impacts, making interfaces feel responsive, intelligent, and human.

**Blend:** Micro-interactions 55% + Feedback Design 25% + Delight Details 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 6/10 · **Tags:** tech, professional  
**Perfect for:** UX Design, Tech Products, Interactive Services

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Delightfully Responsive”, “Instant Feedback”, “Meaningful Details”, “Delightful Moments”.
- Buttons are short verb phrases in Title Case: “Submit Feedback”, “Save Draft”, “Clear Form”, “Primary Action”.
- Navigation uses single nouns: “Dashboard”, “Projects”, “Reports”, “Settings”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-gray-900`, `color-blue`, `color-green`, `color-orange`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Base: Clean White (#FFFFFF) - Clarity and focus
- Primary: Vibrant Blue (#3B82F6) - Action and trust
- Success: Fresh Green (#10B981) - Positive feedback
- Warning: Warm Orange (#F59E0B) - Caution
- Error: Bold Red (#EF4444) - Alert
- Neutral: Modern Gray (#6B7280) - Supporting text
- Philosophy: State-based colors for instant recognition

## Typography

- `display` — Manrope, sans-serif
- `body` — Inter, sans-serif

Faces are hosted on Google Fonts (Manrope, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Manrope - Rounded, friendly, professional
- Body: Inter - Crystal clear, optimal for UI
- Labels: Manrope Medium - Emphasis without aggression
- Scale: 16px base, 1.2 ratio for subtle hierarchy

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.25rem, `space-sm` 0.5rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem, `space-3xl` 4rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 0.5rem.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

1. Instant: Feedback within 100ms
2. Purposeful: Every animation communicates
3. Subtle: Never distracting, always enhancing
4. Consistent: Predictable timing and easing
5. Delightful: Small surprises that bring joy

Timing values: `--transition-instant` 0.1s, `--transition-fast` 0.15s, `--transition-base` 0.2s, `--ease-out` cubic-bezier(0.33, 1, 0.68, 1), `--ease-bounce` cubic-bezier(0.68, -0.55, 0.265, 1.55).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-blue` 3.5:1, `color-green-dark` 3.6:1, `color-orange-dark` 3.0:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- All feedback has multiple channels (color + icon + text)
- Focus states extremely clear for keyboard navigation
- Motion can be disabled without losing functionality
- Touch targets 44px minimum for mobile
- Error messages programmatically associated with inputs

## Further guidance

### Style Identity

- Name: Micro-Interaction Rich
- ID: 196
- Category: Motion & Animation
- Temperature: 5/10 (Balanced feedback)
- Formality: 6/10 (Professional with personality)
- Tags: tech, professional

### Interaction Patterns

- Hover: Color shift, scale, shadow increase
- Click: Quick scale down then up (press feedback)
- Focus: Thick outline with color glow
- Success: Green checkmark animation
- Error: Red shake animation with icon
- Loading: Spinner with progress indication

### Responsive Strategy

- Mobile: Touch-optimized interactions, larger targets
- Tablet: Balanced touch/mouse interactions
- Desktop: Rich hover states, cursor changes
- Breakpoints: 768px, 1024px
- Input-method aware (touch vs mouse)

### Technical Implementation

- CSS transitions for instant feedback
- Transform-based animations for performance
- Custom properties for state management
- Pseudo-elements for decorative feedback
- Active/focus/hover states on all interactives

### Use Cases

- SaaS applications
- Dashboard interfaces
- Form-heavy applications
- E-commerce platforms
- Productivity tools
- Admin panels

## Not synced

Built from `style-196-micro-interaction-rich.html`. No component bundle: the reference page's markup is not packaged as live components.
