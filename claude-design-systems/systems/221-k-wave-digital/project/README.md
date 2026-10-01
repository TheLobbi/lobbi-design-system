K-Wave Digital Collective captures the explosive energy of Korean pop culture, blending the neon-soaked streets of Seoul's Gangnam district with the playful aesthetics of K-pop fandom. This design system creates an experience that feels like stepping into a karaoke room in Hongdae at midnight - vibrant, youthful, and unapologetically fun. Every element sparkles with the enthusiasm of fans creating content, sharing love for their idols, and building community.

**Blend:** Korean Pop Culture 55% + Neon City 30% + Cute Aesthetics 15%  
**Temperature:** 7/10 (warm) · **Formality:** 4/10 · **Tags:** creative, media  
**Perfect for:** K-Pop Fandom, Korean Culture, Digital Entertainment

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “K-Wave Digital Collective”, “🏆 Top Fans This Week”, “✨ Join the Collective!”, “🎉 Quick Actions”.
- Buttons are short verb phrases in Title Case: “View All”, “My Rank”, “💖 Join the Family!”, “✨ Preview Profile”.
- Navigation uses single nouns: “🏠 Home”, “🎤 Idols”, “📸 Gallery”, “💬 Chat”, “🎁 Rewards”, “👤 Profile”.
- The reference page uses emoji as inline glyphs (⭐ ✨ 💖 🎵 🏠 🎤); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `pop-pink`, `seoul-neon-blue`, `idol-purple`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Noto Sans KR", sans-serif
- `body` — Quicksand, sans-serif

Faces are hosted on Google Fonts (Noto Sans KR, Quicksand); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Quicksand:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Noto Sans KR: Google's font for Korean language provides authentic connection
- to the culture. Even in English-only contexts, its proportions carry Korean
- design sensibility. Used for headings and emphasis to ground the design in
- its cultural roots.

- Quicksand: A friendly, rounded sans-serif that embodies the "cute" factor.
- Its soft terminals feel approachable and young without being childish. Perfect
- for body text where readability must coexist with playfulness.

## Spacing, shape and elevation

- Spacing steps: `space-6` 6px, `space-7-5` 7.5px, `space-10` 10px, `space-16` 16px, `space-20` 20px, `space-24` 24px. Pad cards and sections from these steps only.
- Corners: `radius-16` 16px, `radius-20` 20px, `radius-25` 25px, `radius-full` 50%.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- 8px base unit (standard)
- Generous padding (24-32px) creates breathing room for exuberant content
- 24px gaps between cards feel spacious and modern
- 48px section spacing creates clear content blocks

## States and motion

- Hover: Scale up (1.05) + glow increase creates excitement
- Active: Quick press animation (scale 0.98) for tactile feedback
- Transitions: 200-300ms for energetic but not jarring feel
- Loading: Gradient shimmer animation for content loading states
- Success: Confetti-like sparkle burst on achievements

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Despite vibrant colors, text maintains 4.5:1 contrast minimum
- Gradients never used for text backgrounds (text is white/black)
- Animations respect prefers-reduced-motion
- Touch targets are 44px minimum for mobile-first audience
- Color is never the only indicator (icons accompany color coding)
- Focus states use multiple cues (outline + glow + scale)

## Further guidance

### K-Wave Digital Collective - Design System

- Style ID: 221

### Primary Palette

- K-Pop Pink (#ff6b9d): The signature color of K-pop fandom - energetic,
- youthful, and confident without being overly feminine. This pink appears in
- lightsticks, album packaging, and stage lighting. Psychologically, it triggers
- excitement and social connection, perfect for community platforms.

- Seoul Neon Blue (#00d4ff): Electric cyan that recalls the neon signs of
- Seoul's entertainment districts. This blue feels futuristic and energetic
- rather than corporate. It provides contrast to the warm pinks while maintaining
- high energy.

- Idol Purple (#c084fc): The bridge between pink and blue, purple represents
- the magical/mystical aspects of idol culture. It's the color of stage lights
- during ballad performances and the gradient background of fan edits.

- Starlight White (#ffffff): Pure white for text and highlights creates the
- sparkle effect. In K-pop aesthetics, white represents the "flash" of cameras,
- the glow of lightsticks, and the spotlight on stage.

### Secondary Palette

- Deep Purple Background (#2d1b4e): A rich purple-black that makes neon colors
- pop without the harshness of pure black. This is the "backstage" color.

- Gradient Rose (#ff1744 to #f50057): Used for call-to-action buttons, this
- energetic gradient mimics the excitement of a comeback announcement.

- Electric Lime (#d4ff00): Sparingly used accent for notifications and badges,
- adding a third dimension to the pink/blue duality.

### Gradient Strategy

- Gradients are everywhere in K-Wave - they're the signature of K-pop visuals:
- Pink-to-purple: Warm energy flows
- Blue-to-purple: Cool mystical vibes
- Multi-color: Full rainbow for celebrations and achievements
- All gradients use 135deg angle for consistent directionality

### Typography Scale

- Hero: 36px/44px (Bold, gradient text for main titles)
- Title: 28px/36px (Section headers with personality)
- Body: 16px/26px (Higher line-height for easy reading of fan content)
- Small: 14px/22px (Metadata, labels)
- Tiny: 12px/18px (Badges, counts)

### Type Styling

- Headings use -1px letter-spacing for tighter, punchier feel
- Body text uses default spacing for readability
- All-caps used sparingly for badges and labels
- Gradient text on major headings creates that "holographic card" effect

### Buttons

- Gradient Fills: Primary buttons use pink-to-rose gradients with glow effects
- on hover. This mimics the "shine" of holographic photocards.

- Rounded Shapes: 20px border-radius creates pill-shaped buttons that feel
- friendly and tappable. No sharp edges in K-pop aesthetics!

- Hover Sparkle: Transform scale(1.05) + increased glow makes buttons feel
- reactive and alive, like they're responding to your love.

- Icon Integration: Stars, hearts, and sparkles appear inline with text to
- add visual interest and emotional warmth.

### Badges

- Fan Tier System: Badge colors indicate fan level (casual, dedicated, super
- fan). Each tier gets progressively more vibrant colors and glow effects.

- Notification Dots: Pulsing gradient dots for new content - the dopamine hit
- of new content from your favorite group.

- Achievement Stars: Star icons and counts show user engagement, gamifying
- participation like collecting photocards.

## Not synced

Built from `style-221-k-wave-digital.html`. No component bundle: the reference page's markup is not packaged as live components.
