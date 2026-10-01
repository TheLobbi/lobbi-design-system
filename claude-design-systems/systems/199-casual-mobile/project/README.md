Friendly Progression Platform: This design system embraces the joy and accessibility of casual mobile gaming. It creates a welcoming environment where users feel encouraged to engage, progress, and celebrate achievements. The aesthetic combines playful energy with clear information hierarchy, making complex systems feel approachable and rewarding.

**Blend:** Mobile Game UI 55% + Casual Gaming 25% + Achievement System 20%  
**Temperature:** 8/10 (warm) · **Formality:** 2/10 · **Tags:** creative, tech  
**Perfect for:** Mobile Games, Casual Gaming, App Studios

## Content fundamentals

- Write for members and staff of the organization: direct, relaxed and conversational.
- Headings name the thing plainly: “🎮 Fun Game Hub 🎮”, “🎯 Daily Challenges”, “Win 5 Matches”, “Collect 100 Gems”.
- Buttons are short verb phrases in Title Case: “💾 Save Changes”, “✅ Verify Account”, “🔄 Reset”.
- Navigation uses single nouns: “Play”, “Shop”, “Rewards”, “Friends”, “Profile”.
- The reference page uses emoji as inline glyphs (🎮 🪙 ⭐ 🔥 💎 🎯); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-yellow`, `color-blue`, `color-blue-light`, `color-pink`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Fredoka One", cursive
- `body` — Nunito, sans-serif

Faces are hosted on Google Fonts (Fredoka One, Nunito); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@300;400;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.

### Type rationale

- Headings: Fredoka One - Round, friendly, game-like character
- Body: Nunito - Highly readable, warm, approachable
- Weight Variation: Multiple weights for clear hierarchy without harshness

- EXPERIENTIAL METRICS

- Temperature: 8/10 (Warm - Friendly, inviting, energetic)
- Formality: 2/10 (Casual - Playful, relaxed, fun)
- Energy: 9/10 (Very High - Exciting, dynamic, engaging)
- Accessibility: 9/10 (High - Clear, intuitive, inclusive)

- ACCESSIBILITY STANDARDS

- WCAG 2.1 AA Compliance:
- Large touch targets (minimum 48x48px for mobile)
- High contrast despite bright colors (tested against backgrounds)
- Clear focus states with multiple indicators
- Simple language and clear iconography
- Reduced motion options respected

- USE CASES

- Mobile casual game interfaces
- Kids and family-friendly apps
- Gamification systems
- Educational platforms
- Fitness and habit-tracking apps
- Social casual games
- Reward and loyalty programs

- INTERACTION PATTERNS

- Buttons "bounce" on interaction
- Achievement unlocks with celebration animations
- Progress bars fill with satisfying motion
- Coins and rewards "pop" when earned
- Cards lift and tilt slightly on hover
- Success states trigger confetti or sparkles

- TECHNICAL NOTES

- CSS transforms for playful animations
- Gradient backgrounds for depth and energy
- Border-radius creates friendly, approachable shapes
- Box-shadows create "floating" elevation
- Transition timing creates bounce effects
- Mobile-first responsive approach

## Spacing, shape and elevation

- Spacing steps: `spacing-xs` 0.5rem, `spacing-sm` 1rem, `spacing-md` 1.5rem, `spacing-lg` 2rem, `spacing-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 12px, `radius-md` 20px, `radius-lg` 30px, `radius-full` 50px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-colored`, lowest first for resting cards, higher for hover and overlays.

## States and motion

Timing values: `--transition-bounce` cubic-bezier(0.68, -0.55, 0.265, 1.55), `--transition-smooth` 0.3s ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Not synced

Built from `style-199-casual-mobile.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--gradient-primary`, `--gradient-success`, `--gradient-warning`, `--gradient-sky`, `--gradient-sunset`.
