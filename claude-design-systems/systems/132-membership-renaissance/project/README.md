"Artistic Membership Organizations Celebrating Beauty and Community" Target Organizations: Design Intent: This style embraces the beauty of collective membership while celebrating artistic refinement. It's for associations that value aesthetics as much as function, where gathering spaces feel like curated galleries and member portals evoke exclusive cultural salons. The Renaissance reference isn't historical pastiche but rather a rebirth of elegant, art-forward association design that honors beauty, nature, and refined community. COLOR PSYCHOLOGY & SEMANTICS.

**Blend:** Membership Collective 25% + Art Nouveau 25% + Floral Garden 20% + Watercolor 15% + Editorial Minimalism 15%  
**Temperature:** 7/10 (warm) · **Formality:** 6/10 · **Tags:** creative, premium, association  
**Perfect for:** Creative Collectives, Member Organizations, Artistic Guilds

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Renaissance Circle”, “Welcome, Eleanor”, “Featured Members”, “Upcoming Events”.
- Buttons are short verb phrases in Title Case: “Submit Application”, “Save as Draft”.
- Navigation uses single nouns: “Dashboard”, “Members”, “Events”, “Gallery”.
- The reference page uses emoji as inline glyphs (🌸 📅 📚 🎨 💬 🌟); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `gold-renaissance`, `rose-floral`, `terracotta`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Soft gradient washes
- Bleeding edge effects (subtle)
- Hand-painted quality
- Layered transparency
- Artistic imperfection
- Brushstroke textures
- Organic color blending

## Typography

- `display` — "Cormorant Garamond", Georgia, serif
- `body` — Montserrat, -apple-system, sans-serif

Faces are hosted on Google Fonts (Cormorant Garamond, Montserrat); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 20px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 12px, `radius-lg` 20px, `radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

- SALON-STYLE BREATHING ROOM
- 20px base spacing unit (luxurious, not cramped)
- 32px card gaps (gallery-style separation)
- 48px section margins (editorial breathing room)
- Max-width: 1200px (refined, focused content)
- Padding-rich cards (24px+) for comfortable reading

## States and motion

Timing values: `--transition-base` 250ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 400ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.4:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `soft-gray` 3.5:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `gold-renaissance` 2.3:1, `category-tag-bg` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Primary (25%) - Membership Collective Aesthetic

- Exclusive community spaces (Soho House, The Wing, NeueHouse)
- Sophisticated member portals with refined elegance
- Cultural gathering aesthetics
- Membership hierarchy visualization (tiers, levels, status)
- Community-focused design language
- Prestige without ostentation
- Warm professional networking atmosphere

### Secondary (25%) - Art Nouveau Revival

- Organic flowing curves and natural forms
- Botanical ornamental elements
- Whiplash curves and asymmetric grace
- Nature-inspired decorative borders
- Elegant typography with flourishes
- Peacock feather motifs (status, beauty)
- Stained glass gradient effects

### Tertiary (20%) - Floral Garden Romanticism

- Delicate floral accents and borders
- Soft petal-like shapes
- Garden party sophistication
- Rose, peony, and lily inspirations
- Natural bloom color palette
- Organic growth patterns
- Fresh, vibrant, living aesthetic

### Quinary (15%) - Editorial Minimalism

- Clean typography hierarchy
- Generous whitespace
- Magazine-quality layouts
- Sophisticated readability
- High-contrast text treatments
- Structured content flow
- Professional polish

### Compatibility Matrix (1-10 Scale)

- ┌────────────────────┬──────┬──────┬──────┬──────┬──────┐
- │                    │ Memb │ Nouv │ Flor │ Wate │ Edit │
- ├────────────────────┼──────┼──────┼──────┼──────┼──────┤
- │ Membership Collect │ 10.0 │  8.5 │  9.0 │  7.5 │  9.0 │
- │ Art Nouveau        │  8.5 │ 10.0 │  9.5 │  8.0 │  6.5 │
- │ Floral Garden      │  9.0 │  9.5 │ 10.0 │  9.0 │  7.0 │
- │ Watercolor         │  7.5 │  8.0 │  9.0 │ 10.0 │  7.5 │
- │ Editorial Minimal  │  9.0 │  6.5 │  7.0 │  7.5 │ 10.0 │
- ┴──────┴──────┴──────┴──────┴──────┘

### Average Compatibility

- 8.2/10 (Excellent Harmony)

### Tension Points

- Art Nouveau ornamentation vs Editorial simplicity (6.5/10)

### Resolution

- Ornament used sparingly as accent, not dominant pattern
- Watercolor softness vs Membership formality (7.5/10)

## Not synced

Built from `style-132-membership-renaissance.html`. No component bundle: the reference page's markup is not packaged as live components.
