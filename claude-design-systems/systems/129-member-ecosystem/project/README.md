Living Network of Professional Relationships. Inspired by: LinkedIn, Mighty Networks, Circle.so, Professional Membership Platforms 5-WAY EXPERIMENTAL BLEND: 1. Professional Network (30%): LinkedIn-inspired connection visualization, member profiles 2. Bento Box UI (25%): Apple-style grid layouts, modular card organization 3. Organic Modern (20%): Soft curves, natural spacing, approachable aesthetics 4. Aurora UI (15%): Gradient accents, ethereal lighting effects, depth 5. Micro-interaction Design (10%): Hover states, smooth animations, delightful feedback.

**Blend:** Professional Network 30% + Bento Box UI 25% + Organic Modern 20% + Aurora UI 15% + Micro-interaction 10%  
**Temperature:** 5/10 (balanced) · **Formality:** 7/10 · **Tags:** tech, association  
**Perfect for:** Member Platforms, Professional Networks, Community Tech

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “MemberConnect”, “Your Network Ecosystem”, “Active Community Leaders”, “Member Directory”.
- Buttons are short verb phrases in Title Case: “View Profile”, “View Profile”, “View Profile”, “View Profile”.
- Navigation uses single nouns: “Dashboard”, “Directory”, “Events”, “Resources”, “Profile”.
- The reference page uses emoji as inline glyphs (🌐 👥 📈 ⭐ 🎯 👩); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `ecosystem-white`, `network-blue`, `connection-green`, `warm-amber`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --ecosystem-white: #f8fafc     → Clean canvas, breathable space, open platform
- --network-blue: #0891b2         → Trust, connectivity, professional networking
- --connection-green: #059669     → Growth, active engagement, thriving community
- --aurora-purple: #8b5cf6        → Premium features, VIP status, exclusivity
- --warm-amber: #f59e0b           → Attention, events, opportunities
- --slate-50: #f8fafc             → Card backgrounds, elevated surfaces
- --slate-100: #f1f5f9            → Subtle backgrounds, nested containers
- --slate-200: #e2e8f0            → Borders, dividers, structural elements
- --slate-700: #334155            → Primary text, strong hierarchy
- --slate-500: #64748b            → Secondary text, supporting information

## Typography

- `display` — "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Inter, Plus Jakarta Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`, `label`), always with the letter-spacing given.

### Type rationale

- Plus Jakarta Sans: Headings, member names, prominent UI (modern warmth)
- Inter: Body text, metadata, UI labels (clean readability)
- Font sizes: Organic hierarchy (14px base → 28px hero titles)
- Line heights: Generous 1.6 for approachability

## Spacing, shape and elevation

- Spacing steps: `space-xs` 4px, `space-sm` 8px, `space-md` 12px, `space-lg` 16px, `space-xl` 20px, `space-2xl` 24px, `space-3xl` 32px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 12px, `radius-lg` 16px, `radius-xl` 20px, `radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

- BREATHABLE ECOSYSTEM
- Generous whitespace for organic flow (16px base unit)
- Card spacing: 20px gaps for visual breathing room
- Padding: 20-24px internal card padding
- Bento grid: Asymmetric layouts with intentional negative space

## States and motion

- Hover: 4px upward lift + subtle shadow expansion
- Active: Gentle scale (0.98) for tactile press feedback
- Focus: 2px aurora gradient ring for accessibility
- Loading: Skeleton shimmer with organic timing
- Success: Green pulse animation for confirmations

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 400ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `network-blue` 3.5:1, `connection-green` 3.6:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `slate-400` 2.5:1, `header-bg` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 Level AA contrast ratios (minimum 4.5:1 for body text)
- Color + icon redundancy for status communication
- Keyboard navigation with visible focus states
- Screen reader-friendly semantic HTML
- Reduced motion support for animations

## Component inventory

The reference page composes these patterns from the tokens above:

1. Member Connection Cards: Profile avatars, engagement metrics, quick actions
2. Bento Stats Grid: Asymmetric modular layout with varying card sizes
3. Engagement Timeline: Activity feed with member interactions
4. Directory Table: Searchable member database with filtering
5. Aurora Gradients: Subtle background effects for depth and premium feel
6. Micro-interactions: Hover lifts, smooth transitions, tactile feedback

## Further guidance

### Temperature

- Warm Professional (5/10)
- Balanced between corporate and approachable
- Organic curves add human touch
- Aurora gradients provide visual warmth
- Not overly casual, maintains professional credibility

### Formality

- Professional Polished (7/10)
- Sophisticated but not stuffy
- Premium aesthetics without intimidation
- Approachable for diverse member demographics
- Corporate-grade while remaining inviting

### Performance Optimizations

- Single embedded stylesheet (zero external requests)
- CSS custom properties for theme consistency
- GPU-accelerated animations (transform/opacity only)
- Lazy-load aurora gradients for performance
- Semantic HTML for accessibility and SEO

### Brand Positioning

- Modern professional membership platform
- Human-centered community building
- Premium but accessible networking
- Living ecosystem, not static directory

### Competitive Differentiation

- Warmer than LinkedIn (organic curves, aurora depth)
- More structured than Circle.so (bento grid organization)
- More premium than Mighty Networks (aurora gradients, micro-interactions)
- More approachable than traditional associations (5/10 temperature balance)

## Not synced

Built from `style-129-member-ecosystem.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--aurora-blue`, `--aurora-green`, `--aurora-purple`, `--aurora-multi`.
