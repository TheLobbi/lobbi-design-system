This interface represents the next generation of AI-augmented experiences where intelligent assistance is seamlessly integrated into every interaction. The design prioritizes conversational patterns, adaptive layouts, and context-aware interfaces that respond to user intent rather than explicit commands.

**Blend:** AI-First Design 55% + Conversational UI 25% + Adaptive Layout 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 6/10 · **Tags:** tech, professional  
**Perfect for:** AI Companies, ML Services, Intelligent Platforms

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “AI-Powered Dashboard”, “Smart Recommendations”, “Optimize Your Workflow”, “Review Pending Approvals”.
- Buttons are short verb phrases in Title Case: “✨ Create with AI”, “⚡ Quick Add”, “Cancel”.
- Navigation uses single nouns: “Dashboard”, “Insights”, “Analytics”, “Settings”.
- The reference page uses emoji as inline glyphs (🤖 ✨ ⚡ 🎯 🎓 💡); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-soft-purple`, `color-extra-light-purple`, `color-text-dark`, `color-gradient-end`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Soft Purple (#8b5cf6): AI intelligence, innovation, forward-thinking
- Deep Purple (#6d28d9): Premium AI features, advanced capabilities
- Clean White (#ffffff): Clarity, simplicity, conversational ease
- Light Gray (#f9fafb): Subtle backgrounds, reduced cognitive load
- Gradient Highlights (#a78bfa to #ec4899): AI magic moments, smart features

## Typography

- `display` — "Plus Jakarta Sans", system-ui, -apple-system, sans-serif
- `body` — Inter, system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Plus Jakarta Sans, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Plus Jakarta Sans (Headings):
- Modern geometric forms suggesting computational intelligence
- Friendly approachability for conversational interfaces
- Strong weights establishing hierarchy without harshness
- Excellent screen readability at all sizes

- Inter (Body):
- Technical precision with warm undertones
- Optimal for conversational content and data
- Excellent legibility supporting extended reading
- Wide character support for international audiences

## Spacing, shape and elevation

- Spacing steps: `spacing-unit` 20px, `spacing-sm` 20px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 8px, `border-radius-md` 12px, `border-radius-lg` 16px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-purple`, lowest first for resting cards, higher for hover and overlays.

1. Header: Smart navigation with AI-powered search
2. Stats Grid: Real-time metrics with intelligent insights
3. Conversation Cards: Message-style content presentation
4. Smart Table: Adaptive data display with AI sorting
5. Intelligent Form: Auto-complete and predictive inputs
6. Action Buttons: Context-aware button states
7. Status Badges: Dynamic status with AI recommendations
8. Footer: Conversational footer with smart links

## States and motion

- Smooth transitions suggesting intelligent processing
- Hover states revealing AI-powered actions
- Micro-interactions confirming intelligent responses
- Context-aware focus states adapting to user intent
- Conversational feedback replacing system notifications

Timing values: `--transition-fast` 150ms ease-in-out, `--transition-base` 200ms ease-in-out, `--transition-slow` 300ms ease-in-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-soft-purple` 4.1:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-white` 1.0:1, `color-medium-gray` 2.4:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant contrast ratios (4.5:1 minimum)
- Semantic HTML supporting screen readers and AI assistants
- Keyboard navigation with intelligent shortcuts
- Focus indicators adapting to interaction context
- Sufficient touch targets (44x44px minimum)
- AI-powered accessibility features (auto-captions, smart navigation)

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Smart navigation with AI-powered search
2. Stats Grid: Real-time metrics with intelligent insights
3. Conversation Cards: Message-style content presentation
4. Smart Table: Adaptive data display with AI sorting
5. Intelligent Form: Auto-complete and predictive inputs
6. Action Buttons: Context-aware button states
7. Status Badges: Dynamic status with AI recommendations
8. Footer: Conversational footer with smart links

## Further guidance

### Spatial Hierarchy

- 20px base spacing unit (comfortable conversational rhythm)
- Fluid grid system adapting to content and context
- Generous whitespace creating breathing room
- Card-based organization supporting modular AI features

### Emotional Temperature

- Warm Intelligent (5/10):
- Friendly color palette encouraging interaction
- Approachable conversational patterns
- Smart features presented accessibly
- Balance between technical capability and human warmth

### Formality Level

- Professional Conversational (6/10):
- Professional competence with friendly tone
- Clear communication without stuffiness
- Smart assistance without condescension
- Business context with human touch

### Performance Optimization

- Optimized Google Fonts loading with preconnect
- Embedded CSS reducing HTTP requests
- CSS Grid with efficient calculations
- Minimal DOM for fast AI-powered updates
- Progressive enhancement supporting AI features

### Brand Alignment

- Establishes modern AI credibility through:
- Contemporary design language signaling innovation
- Conversational patterns building user trust
- Intelligent features demonstrating capability
- Professional polish suggesting reliability

### Use Cases

- AI-powered productivity applications
- Intelligent customer service platforms
- Smart business intelligence dashboards
- Conversational analytics tools
- AI-augmented collaboration software
- Predictive workflow management systems

### Competitive Differentiation

- Unlike traditional interfaces, this design:
- Prioritizes AI assistance over manual controls
- Uses conversational patterns over rigid forms
- Adapts to user context rather than fixed layouts
- Suggests intelligent actions proactively
- Balances technical capability with human accessibility

### Scalability

- Component system supports:
- Additional AI-powered features without complexity
- Dynamic content personalization maintaining consistency
- Responsive breakpoints preserving conversational flow
- Theme variations for different use cases
- Modular AI components for custom experiences

## Not synced

Built from `style-206-ai-native-interface.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--spacing-xs`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`.
