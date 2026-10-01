Luxury Wellness Retreats. Inspiration: Canyon Ranch, SHA Wellness Clinic, Six Senses Core Principle: Serenity + Healing + Transformation through Visual Calm COLOR PSYCHOLOGY & THERAPEUTIC INTENT PRIMARY PALETTE (Healing Foundation): ├─ Sage Green (#9caf88) → Renewal, balance, natural healing ├─ Warm Cream (#fdf6e3) → Purity, tranquility, safe sanctuary ├─ Soft Lavender (#e6e6fa) → Calm, spiritual wellness, restoration └─ Earth Brown (#8b7355) → Grounding, stability, organic connection SUPPORTING TONES (Therapeutic Accents): ├─ Deep Sage (#7a9470) → Focus states, mindfulness depth ├─ Cloud White (#fafafa) → Breathable space, mental clarity ├─ Mist Gray (#e8ede8) → Gentle boundaries, soft structure └─ Warm Sand (#f5f0e8) → Comfort, nurturing warmth.

**Blend:** Spa Wellness 80% + Zen Minimalism 20%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** hospitality  
**Perfect for:** Spas, Wellness Centers, Retreat Centers

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Welcome back, Sophia”, “Wellness Statistics”, “Recommended for You”, “Himalayan Salt Stone Massage”.
- Buttons are short verb phrases in Title Case: “Book Session”, “Book Now”, “Book Now”, “Book Now”.
- Navigation uses single nouns: “Dashboard”, “Treatments”, “Schedule”, “Wellness Plan”.
- The reference page uses emoji as inline glyphs (🌿 🧘 💆 🌸 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `cream`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Cormorant Garamond", serif
- `body` — Lato, sans-serif

Faces are hosted on Google Fonts (Lato, Cormorant Garamond); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600&family=Cormorant+Garamond:wght@300;400&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 32px, `space-lg` 48px, `space-xl` 64px, `space-xxl` 96px. Pad cards and sections from these steps only.
- Corners: `radius-3` 3px, `radius-12` 12px, `radius-16` 16px, `radius-20` 20px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-smooth` cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 5.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `sage-deep` 3.1:1, `earth-brown` 4.2:1, `text-tertiary` 3.1:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `sage-primary` 2.2:1, `treatment-image-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- CONTRAST RATIOS (WCAG AA Minimum):
- ├─ Sage on Cream: 4.8:1 (AAA for large text)
- ├─ Earth Brown on Cream: 6.2:1 (AAA compliant)
- ├─ Body text: #4a4a4a on cream (~~12:1~~ - exceptional) — **measured 8.2:1**
- Interactive elements: 4.5:1 minimum guaranteed

## Further guidance

### Wellness Temperature

- Warm Nurturing (7/10)
- Evokes: Heated stones, herbal teas, sunset meditation, gentle embrace

- TYPOGRAPHIC HIERARCHY (Elevated Calm)

### Primary

- Lato (Light 300, Regular 400, Semibold 600)
- ├─ Rationale: Clean, approachable, calming geometric forms
- ├─ Weights: Predominantly light (300) for serenity
- Usage: UI elements, body text, data labels

### Accent

- Cormorant Garamond (Light 300, Regular 400)
- ├─ Rationale: Elegant serif for luxury positioning
- ├─ Usage: Headlines, treatment names, inspirational quotes
- Formality: Elevated without pretension (6/10)

### Scale & Rhythm

- ├─ H1: 42px/1.2 (Cormorant) - Transformative statements
- ├─ H2: 32px/1.3 (Cormorant) - Section presence
- ├─ H3: 20px/1.4 (Lato 600) - Component headers
- ├─ Body: 16px/1.7 (Lato 300) - Breathing line height for calm
- Small: 14px/1.6 (Lato 300) - Supporting details

- ZEN SPACING PHILOSOPHY (20% Minimalist Influence)

### Principle

- Ma (間) - Negative Space as Active Design Element
- SPATIAL RHYTHM (8px base unit):
- ├─ Micro (8px)    → Inline elements, tight groupings
- ├─ Small (16px)   → Related content breathing room
- ├─ Medium (32px)  → Component internal spacing
- ├─ Large (48px)   → Section separation, visual pause
- ├─ XL (64px)      → Major transitions, contemplative breaks
- XXL (96px)     → Full breathing space, zen moments

### Golden Ratio Application

- 1.618 for card dimensions and spacing harmony

### Container Strategy

- ├─ Max-width: 1400px (prevents overwhelming scale)
- ├─ Side margins: 48px minimum (generous breathing room)
- Mobile: 24px (maintains airiness on small screens)

### Wellness Score Cards

- ├─ Purpose: Track holistic health metrics with positive reinforcement
- ├─ Design: Soft shadows (0 4px 16px rgba(0,0,0,0.06)), rounded 16px
- ├─ Icons: Organic shapes suggesting natural elements
- ├─ Progression: Circular meters with sage green fills
- Micro-interactions: Gentle scale on hover (1.02), no jarring effects

## Not synced

Built from `style-37-spa-wellness.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-accent`.
