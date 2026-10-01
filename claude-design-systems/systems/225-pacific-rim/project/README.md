Pacific Rim: Pan-Asian Fusion 55% + Ocean Commerce 30% + Tech Innovation 15%.

**Blend:** Pan-Asian Fusion 55% + Ocean Commerce 30% + Tech Innovation 15%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** professional, association  
**Perfect for:** Pacific Trade, Asian Business Networks, International Commerce

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Connected by Ocean, Powered by Innovation”, “Alliance Statistics”, “Strategic Initiatives”, “Initiative Proposal”.
- Buttons are short verb phrases in Title Case: “Submit Proposal”, “Save Draft”, “Preview”, “Reset”.
- Navigation uses single nouns: “Dashboard”, “Trade”, “Innovation”, “Members”, “Contact”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `page-surface`, `rising-sun-coral`, `jade-green`, `wave-white`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Pacific Blue (#0077b6): Ocean depth, trust, stability
- Psychology: Vast possibilities, international waters, reliability
- Usage: Headers, primary structures, navigation
- Cultural: Universal maritime color, Pacific Ocean identity

- Rising Sun Coral (#f97316): Energy, innovation, optimism
- Psychology: Dawn of new era, warmth, enthusiasm
- Usage: Accent color, CTAs, highlights, success states
- Cultural: Asian sunrise symbolism, tropical vibrance

- Jade Green (#10b981): Growth, prosperity, harmony
- Psychology: Balance, nature, sustainable progress
- Usage: Positive indicators, eco-friendly elements
- Cultural: Precious stone across Asian cultures, feng shui

- Wave White (#f8fafc): Clarity, cleanliness, space
- Psychology: Fresh start, openness, simplicity
- Usage: Backgrounds, breathing room, content areas
- Cultural: Japanese minimalism, clean slate

## Typography

- `display` — "Zen Kaku Gothic New", sans-serif
- `body` — "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Zen Kaku Gothic New, Plus Jakarta Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Zen Kaku Gothic New
- Purpose: Pan-Asian sensibility with modern clarity
- Psychology: Calm, balanced, culturally inclusive
- Usage: Headings, emphasis, cultural context elements
- Weights: 300 (light), 400 (regular), 500 (medium), 700 (bold), 900 (black)
- Rationale: Japanese font family designed for excellent CJK character support
- Character: Clean, geometric, harmonious proportions

## Spacing, shape and elevation

- Spacing steps: `space-6-4` 6.4px, `space-8` 8px, `space-14` 14px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-12` 12px, `radius-full` 9999px.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Hover: Gentle lift (translateY -2px) + soft shadow
- Active: Press down (translateY 0) + inner shadow
- Focus: 3px solid outline in coral or blue
- Disabled: 40% opacity + grayscale filter
- Loading: Shimmer effect (wave pattern animation)

- ACCESSIBILITY NOTES (WCAG 2.1 AAA TARGET)

- COLOR CONTRAST (Exceeding standards):
- Body text: Minimum 7:1 contrast ratio (AAA)
- Large text: Minimum 4.5:1 contrast ratio (AAA)
- UI elements: Minimum 3:1 contrast ratio (AA)
- Pacific Blue #0077b6 on white: ~~8.1:1~~ (AAA) — **measured 4.5:1**
- Deep Navy #0c4a6e on white: ~~10.2:1~~ (AAA) — **measured 8.8:1**
- Jade Green #10b981 on white: ~~5.8:1~~ (AA large text, AAA small text) — **measured 2.3:1** (not for body text)

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 8.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `rising-sun-coral` 2.6:1, `jade-green` 2.3:1, `wave-white` 1.0:1, `lotus-pink` 3.3:1, `footer-section-text` 1.3:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- Font sizes larger than typical Western sites (CJK readability)
- Line-height generous for complex scripts
- Character spacing optimized for readability
- Direction support: LTR and RTL layouts
- Language attribute properly set for screen readers

## Further guidance

### Organization

- Pacific Rim Alliance

### Theme

- Pan-Asian Fusion meets Ocean Commerce and Tech Innovation
- BLEND COMPOSITION (ULTRATHINK)

1. PAN-ASIAN FUSION (55%)
- Japanese minimalism: Ma (negative space), Wabi-sabi (imperfect beauty)
- Chinese balance: Yin-yang harmony, feng shui principles
- Korean dynamism: Bold colors, modern aesthetics
- Southeast Asian vibrancy: Tropical colors, organic patterns
- Calligraphic influences: Brush stroke elements, flowing lines
- Architectural inspiration: Pagoda layers, torii gates, modern skylines

2. OCEAN COMMERCE (30%)
- Wave patterns: Dynamic flowing lines, ripple effects
- Maritime blue gradients: Deep ocean to sky
- Shipping container aesthetics: Modular grid systems
- Port infrastructure: Organized, efficient layouts
- Trade wind metaphors: Directional movement, flow
- Coral reef colors: Vibrant accents from Pacific ecosystems

3. TECH INNOVATION (15%)
- Silicon Valley influence: Clean, modern interfaces
- Smart city concepts: Data visualization, IoT aesthetics
- Digital-first design: Responsive, adaptive components
- Futuristic elements: Subtle neon accents, glows
- Innovation labs: Experimental, cutting-edge details
- Startup energy: Fast-paced, dynamic interactions

- COLOR PSYCHOLOGY & PALETTE

### Supporting Colors

- Deep Navy (#0c4a6e): Authority, ocean depths, nighttime harbor
- Sky Blue (#38bdf8): Daylight, optimism, open sky
- Cherry Blossom (#fb7185): Cultural celebration, seasonal beauty
- Bamboo (#059669): Flexibility, resilience, growth
- Lotus Pink (#ec4899): Purity, enlightenment, elegance

### Accent Colors

- Tech Cyan (#06b6d4): Digital innovation, future-forward
- Gold Prosperity (#fbbf24): Wealth, success, celebration
- Midnight Indigo (#1e293b): Premium, sophisticated depth

### Gradient Compositions

- Ocean Sunrise: Linear from #0077b6 to #f97316 (horizon effect)
- Wave Flow: Radial from #38bdf8 to #0c4a6e (ripple effect)
- Tech Fusion: Linear from #06b6d4 to #10b981 (innovation blend)

### Secondary Font

- Plus Jakarta Sans
- Purpose: Contemporary international business communication
- Psychology: Professional, friendly, globally accessible
- Usage: Body text, data, forms, navigation, UI elements
- Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)
- Rationale: Named after Jakarta (Pacific Rim city), designed for multilingual web
- Character: Open, readable, slightly rounded for approachability

- TYPE SCALE (Modular 1.250 - Major Third):
- Hero: 3.815rem (61px) - Landing page statements
- H1: 3.052rem (49px) - Page titles
- H2: 2.441rem (39px) - Major sections
- H3: 1.953rem (31px) - Subsections
- H4: 1.563rem (25px) - Minor headings
- Body Large: 1.25rem (20px) - Introductions, emphasis
- Body: 1rem (16px) - Standard content
- Small: 0.8rem (13px) - Supporting text, captions
- Tiny: 0.64rem (10px) - Labels, metadata

### Line Height

- Display: 1.1 - Tight for impact
- Headings: 1.3 - Balanced elegance
- Body: 1.65 - Comfortable for long reading
- CJK Text: 1.75 - Extra space for complex characters

### Multilingual Considerations

- Supports Latin, CJK (Chinese, Japanese, Korean), Thai, Vietnamese
- Fallback fonts include system defaults for each script
- Line-height adjusted for different writing systems
- Adequate spacing for diacritical marks and tone indicators

- TEMPERATURE & FORMALITY RATINGS

## Not synced

Built from `style-225-pacific-rim.html`. No component bundle: the reference page's markup is not packaged as live components.
