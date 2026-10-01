Terminal nostalgia meets phosphor glow in this homage to early computing's command-line aesthetic. Every element evokes the intimate relationship between programmer and machine, where blinking cursors and amber screens illuminated countless late-night hacking sessions. This is the raw, unfiltered aesthetic of computing before GUI abstractions. BLEND ANALYSIS (Total: 100%) 1. EARLY COMPUTING (55%) - Primary Foundation 2. TERMINAL INTERFACE (25%) - Interaction Layer 3. AMBER CRT (20%) - Visual Signature PSYCHOLOGICAL IMPACT Emotional Response: Technical nostalgia, hacker pride, focused concentration, intimate human-machine connection. Evokes memories of learning to code, late-night debugging sessions, and the satisfaction of mastering arcane command-line tools. Cognitive Load: Low to Medium - Monospace fonts and clear hierarchy create scannable information architecture, but the technical aesthetic may feel unfamiliar to non-technical users. User Expectation: Technical products, developer tools, hacker culture, retro gaming, cyber security, programming education, tech nostalgia. Trust Signals: The authentic terminal aesthetic signals technical competence and deep engineering knowledge. The "no-frills" approach suggests focus on substance over superficial polish. COLOR PSYCHOLOGY & IMPLEMENTATION.

**Blend:** Early Computing 55% + Terminal Interface 25% + Amber CRT 20%  
**Temperature:** 3/10 (cool) · **Formality:** 6/10 · **Tags:** tech, creative  
**Perfect for:** Tech Retro, Computing History, Developer Tools

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “root@localhost:~#”, “System Status”, “Active Projects”, “Terminal Emulator”.
- Buttons are short verb phrases in Title Case: “Run”, “Fork”, “Execute”, “README”.
- Navigation uses single nouns: “home”, “docs”, “projects”, “tools”, “about”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `color-amber-phosphor`, `color-green-phosphor`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-error-red`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Fira Code", monospace
- `body` — "IBM Plex Mono", monospace

Faces are hosted on Google Fonts (Fira Code, IBM Plex Mono); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Fira Code
- Rationale: Modern monospace with programming ligatures, maintains
- terminal aesthetic while offering contemporary readability. Fixed-width
- characters create authentic command-line feel.
- Hierarchy: 700 weight for primary headings, 500 for subheadings
- Character: Technical, precise, programmer-friendly, modern retro
- Usage: Headings, navigation, command prompts, code snippets

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 3rem, `space-xl` 6rem, `grid-gap` 1.5rem. Pad cards and sections from these steps only.
- Corners: `radius-full` 50%.
- Elevation: `glow-amber`, `glow-amber-intense`, `glow-green`, lowest first for resting cards, higher for hover and overlays.

- Character-cell based (8px base unit)
- Inspired by terminal character cells (typically 8x16 pixels)
- All spacing in 8px increments mimics character grid
- Fixed-width layout reinforces monospace aesthetic
- Creates authentic terminal-style alignment

## States and motion

- Brightness increase (phosphor intensification)
- Subtle glow effect (CRT bloom)
- No scale or transform (maintains grid alignment)
- 200ms transitions (snappy, responsive)

Timing values: `--transition-fast` 200ms ease-out, `--transition-base` 300ms ease-out.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- Amber on Black: 12.8:1 (AAA) - Optimal readability
- Green on Black: 15.3:1 (AAA) - High visibility
- Dim Amber on Black: 8.2:1 (AA) - Secondary content
- White on Black: 21:1 (AAA) - Maximum contrast

## Component inventory

The reference page composes these patterns from the tokens above:

- Micro: 8px - Single character cell
- Small: 16px - Double cell, tight grouping
- Medium: 24px - Triple cell, standard separation
- Large: 48px - Section breaks
- XLarge: 96px - Major divisions

## Further guidance

### Primary Palette

- Terminal Black (#0D0D0D): Deep void, CRT screen darkness, focus
- Amber Phosphor (#FFAA00): Warm glow, primary text, nostalgia
- Green Phosphor (#00FF41): Alternative terminal, success states, active
- Screen Glow (#1A1A1A): Subtle depth, card backgrounds, layering

### Supporting Palette

- Dim Amber (#CC8800): Secondary text, less emphasis
- Bright Amber (#FFCC33): Highlights, focus states, warnings
- Error Red (#FF3333): System errors, alerts, critical states
- Cursor White (#FFFFFF): Blinking cursor, maximum contrast points

### Body Font

- IBM Plex Mono
- Rationale: IBM's open-source monospace with excellent readability and
- historical connection to early PC computing. Slightly more humanist
- than pure terminal fonts.
- Hierarchy: 600 weight for emphasis, 500 for strong, 400 for body
- Character: Professional, technical, highly readable, warm monospace
- Usage: Body text, data tables, forms, detailed content

### Pairing Logic

- Both fonts are monospace, maintaining the terminal aesthetic throughout.
- Fira Code's modern ligatures provide contemporary polish for headings
- while IBM Plex Mono's humanist touches ensure comfortable reading for
- longer text blocks. The pairing feels technical without sacrificing
- usability.

- SPATIAL RELATIONSHIPS

### Elevation System

- Screen layers: Subtle brightness differences vs. shadows
- Glow effects: Phosphor bloom instead of drop shadows
- Scanlines: Texture adds depth without traditional elevation
- Borders: ASCII-style characters and solid lines

- INTERACTION PATTERNS

### Focus States

- Solid amber border (keyboard navigation)
- Inverted colors (terminal selection style)
- High contrast maintained
- Screen reader friendly

### Active States

- Inverted foreground/background
- Brief flash effect (like terminal echo)
- Immediate visual feedback
- No delay or lag

### Loading States

- Blinking cursor animation
- Progress bars with ASCII art
- Typewriter text reveal effects
- Spinning slash animation (|/-\)

- RESPONSIVE BEHAVIOR

## Not synced

Built from `style-186-retro-computing.html`. No component bundle: the reference page's markup is not packaged as live components. Variables not representable as tokens (calc/clamp/gradients/font stacks): `--font-size-base`, `--border-style`.
