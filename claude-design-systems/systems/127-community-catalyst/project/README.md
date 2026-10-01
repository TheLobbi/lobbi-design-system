CULTIVATING BELONGING TOGETHER. Core Principle: "Everyone belongs, everyone contributes" Mission Statement Reflected in Design:.

**Blend:** Membership Collective 35% + Cottagecore 25% + Japandi 20% + Soft Pastel 20%  
**Temperature:** 8/10 (warm) · **Formality:** 5/10 · **Tags:** creative, association, hospitality  
**Perfect for:** Community Groups, Grassroots Orgs, Local Initiatives

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Neighborhood Together”, “Our Growing Community”, “Community Happenings”, “Sunday Morning Coffee Club”.
- Buttons are short verb phrases in Title Case: “Join Us”, “Join the Community!”, “Learn More”.
- Navigation uses single nouns: “Home”, “Events”, “Members”, “Resources”.
- The reference page uses emoji as inline glyphs (🏡 👥 🎉 🤝 💚 ☕); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `soft-white`, `community-coral`, `natural-wood`, `peach-soft`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --soft-white: #fff7ed       → Warm welcome, open arms
- --community-coral: #f97316  → Active participation, vibrant energy
- --natural-wood: #92400e     → Grounded roots, stable foundation
- --peach-soft: #fed7aa       → Gentle warmth, approachable
- --sage-muted: #a3b18a       → Growing together, organic
- --linen-beige: #faf4ed      → Natural fiber, handmade quality
- --clay-terracotta: #c2410c  → Earthy craft, pottery circles
- --blush-pink: #ffe4e6       → Caring community, nurture

## Typography

- `display` — -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, "Helvetica Neue", sans-serif

Faces are hosted on Google Fonts (Inter, Roboto); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap">
```

The reference page names Inter, Roboto without loading them, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.

### Type rationale

- Friendly sans-serif: Approachable, readable, modern
- Generous sizing: Accessible to all ages
- Warm spacing: Comfortable breathing room
- Conversational tone: Natural, human voice

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-sm` 8px, `radius-md` 16px, `radius-lg` 24px, `radius-xl` 32px, `radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-fast` 200ms ease-out, `--transition-base` 300ms ease-out, `--transition-slow` 500ms ease-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 4.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- These fall under 3:1 on `page-bg`: `linen-beige` 1.0:1, `community-coral` 2.6:1, `peach-soft` 1.3:1, `blush-pink` 1.1:1, `sage-muted` 2.1:1, `category-tag-bg` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Primary (35%) - Membership Collective Principles

- Community-first mindset: Members as co-creators, not customers
- Belonging cultivation: Inclusive spaces, welcoming atmosphere
- Peer-to-peer connection: Horizontal networks, equal voices
- Shared ownership: Collective governance, member participation
- Local roots: Neighborhood ties, place-based identity
- Grassroots energy: Bottom-up organizing, volunteer power
- Circle leadership: Collaborative decision-making, rotating roles

### Secondary (25%) - Cottagecore Aesthetics

- Pastoral warmth: Rural charm, countryside comfort
- Handcrafted feel: Artisanal touches, human-made quality
- Natural materials: Wood, linen, earthenware textures
- Garden abundance: Floral motifs, harvest imagery
- Cozy domesticity: Home-like comfort, nesting instinct
- Slow living: Intentional pace, mindful simplicity
- Folk traditions: Heritage crafts, timeless practices

### Tertiary (20%) - Japandi Minimalism

- Wabi-sabi acceptance: Beauty in imperfection, natural wear
- Functional simplicity: Purpose-driven design, no excess
- Natural harmony: Balance between human and nature
- Neutral palette: Muted earth tones, calm backgrounds
- Scandinavian warmth: Hygge coziness, light wood
- Japanese precision: Clean lines, thoughtful spacing
- Mindful restraint: Less is more, carefully curated

### Quaternary (20%) - Soft Pastel Warmth

- Gentle hues: Blush pinks, soft peaches, warm creams
- Optimistic lightness: Hopeful energy, cheerful tone
- Feminine softness: Nurturing palette, approachable feel
- Watercolor quality: Soft edges, dreamy transitions
- Playful accessibility: Friendly, non-threatening
- Sunset glow: Warm light, golden hour ambiance
- Comfort psychology: Soothing, stress-reducing colors

### Temperature

- (Very warm and welcoming)

### Formality

- (Casual professionalism, approachable)

### Compatibility Matrix

- Membership Collective × Cottagecore: 94% SYNERGY
- Shared values: Community, handmade, local, authentic
- Mutual reinforcement: Grassroots meets pastoral charm
- Visual harmony: Both favor warm, accessible aesthetics
- Tension point: Modern organizing vs. nostalgic ruralism
- Resolution: Contemporary community with artisanal warmth

- Membership Collective × Japandi: 86% SYNERGY
- Shared values: Simplicity, functionality, mindfulness
- Mutual reinforcement: Clean structure meets warm community
- Visual harmony: Both favor uncluttered, purposeful design
- Tension point: Collective energy vs. minimalist calm
- Resolution: Lively community within serene framework

- Cottagecore × Japandi: 82% SYNERGY
- Shared values: Natural materials, craft quality, simplicity
- Challenge: Rustic abundance vs. minimal restraint
- Resolution: Curated coziness, purposeful comfort
- Integration: Natural wood, linen textures, earth tones

- Soft Pastel × All Blends: 88% SYNERGY
- Enhancement: Adds warmth and approachability to all
- Challenge: Can feel too sweet without grounding
- Resolution: Pastel accents on neutral earth-tone foundation
- Integration: Coral buttons, peach highlights, blush cards

## Not synced

Built from `style-127-community-catalyst.html`. No component bundle: the reference page's markup is not packaged as live components.
