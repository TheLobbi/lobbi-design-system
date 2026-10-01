This design system embodies the decentralized, community-driven ethos of Web3 and blockchain technology. It balances the technical sophistication of cryptocurrency with the luxury and exclusivity of NFT culture, while maintaining accessibility and inclusivity for community governance. The aesthetic is modern, bold, and slightly futuristic without being cold.

**Blend:** Web3/NFT Aesthetics 55% + Blockchain Patterns 30% + Crypto Luxury 15%  
**Temperature:** 5/10 (balanced) · **Formality:** 5/10 · **Tags:** tech, association  
**Perfect for:** DAOs, NFT Communities, Web3 Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Decentralized Community Governance”, “Active Proposals”, “Featured NFTs”, “Your Holdings”.
- Buttons are short verb phrases in Title Case: “👛 Connect Wallet”, “Create Proposal”, “Cast Your Vote”, “Cast Your Vote”.
- Navigation uses single nouns: “Dashboard”, “Governance”, “Treasury”, “NFTs”, “Community”.
- The reference page uses emoji as inline glyphs (👛 🏛 🪙 👥 🗳 💎); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `purple-eth`, `purple-light`, `gold-btc`, `blue-chain`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Ethereum Purple (#627eea): Innovation, smart contracts, DeFi, trust
- Bitcoin Gold (#f7931a): Value, wealth, scarcity, pioneering spirit
- Blockchain Blue (#0d47a1): Security, stability, deep tech, foundations
- Token Silver (#e0e0e0): Neutrality, balance, multiple tokens, utility

## Typography

- `display` — "Space Grotesk", system-ui, -apple-system, sans-serif
- `body` — Sora, system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (Space Grotesk, Sora); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Space Grotesk (Primary): Modern, geometric, slightly futuristic. Perfect
- for Web3 interfaces. Used for headings, UI elements, and emphasis.
- Sora (Secondary): Contemporary Japanese-inspired sans-serif that adds
- sophistication and global appeal. Used for body text and descriptions.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 6px, `radius-md` 12px, `radius-lg` 16px, `radius-xl` 24px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

- Card-based layouts for NFTs and tokens
- Grid systems with hexagonal patterns (blockchain reference)
- 16px spacing grid for consistency
- Rounded corners (12px) for modern, friendly feel
- Gradient overlays for premium aesthetic
- Wallet connection UI components
- Governance voting interfaces

## States and motion

Timing values: `--transition-fast` 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 9.2:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG AA contrast ratios maintained (4.5:1 minimum)
- Focus states with 3px outlines in brand colors
- Semantic HTML for screen readers
- Keyboard navigation throughout
- Color-blind friendly palette combinations
- Status indicators use icons + color + text
- Transaction states clearly communicated

## Component inventory

The reference page composes these patterns from the tokens above:

- Card-based layouts for NFTs and tokens
- Grid systems with hexagonal patterns (blockchain reference)
- 16px spacing grid for consistency
- Rounded corners (12px) for modern, friendly feel
- Gradient overlays for premium aesthetic
- Wallet connection UI components
- Governance voting interfaces

## Further guidance

### Tokenized Community Dao Design System

- Style ID: 219

### Temperature & Formality

- Temperature: 5/10 (Balanced) - Neither cold nor warm, professional yet
- approachable, technical yet human
- Formality: 5/10 - Community-focused but credible, casual yet organized,
- democratic governance with structure

## Not synced

Built from `style-219-tokenized-community.html`. No component bundle: the reference page's markup is not packaged as live components.
