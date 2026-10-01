International Relations & Protocol Excellence. Inspired by: United Nations assemblies, G20 summits, diplomatic protocols, international treaties, flag ceremonies, multilateral negotiations, global governance forums, peace accords, state department communications, embassy functions, consular design.

**Blend:** International Relations 55% + Protocol Excellence 30% + Global Governance 15%  
**Temperature:** 4/10 (cool) · **Formality:** 10/10 · **Tags:** professional, premium  
**Perfect for:** Diplomatic Corps, International Forums, Global Summits

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Global Diplomatic Summit Forum”, “78th General Assembly”, “Today's Agenda”, “Opening Plenary Session”.
- Buttons are short verb phrases in Title Case: “Submit Credentials”, “Save Draft”, “View Protocol Guide”, “Access Documents”.
- Navigation uses single nouns: “Agenda”, “Delegations”, “Documents”, “Resolutions”, “Press”, “Protocols”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `un-blue`, `diplomatic-gold`, `treaty-navy`, `charter-cream`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- --un-blue: #009edb          → United Nations authority, international cooperation, peace
- --diplomatic-gold: #c9a227  → Treaties, official seals, diplomatic credentials, excellence
- --summit-white: #ffffff     → Neutrality, transparency, clean governance, document clarity
- --treaty-navy: #1e3a8a      → Formal authority, stability, diplomatic gravitas
- --peace-blue: #0369a1       → Security Council, peacekeeping, international security
- --consensus-gray: #64748b   → Neutral mediation, balanced diplomacy, impartial facilitation
- --delegation-slate: #334155 → Formal attire, diplomatic corps, professional restraint
- --charter-cream: #fef9ef    → Historical documents, founding charters, treaty parchment
- --alliance-green: #16a34a   → Agreement reached, cooperation, sustainable development goals
- --protocol-red: #dc2626     → Important notices, security alerts, high-level priority
- --sovereignty-purple: #7c3aed → Sovereign dignity, royal delegations, heads of state
- --border-silver: #cbd5e1    → Neutral boundaries, separation, diplomatic barriers

## Typography

- `display` — "Libre Baskerville", serif
- `body` — Inter, sans-serif
- `source-sans-pro` — "Source Sans Pro", sans-serif

Faces are hosted on Google Fonts (Libre Baskerville, Inter, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Libre Baskerville: Official statements, treaty language - diplomatic gravitas
- Inter: Modern interface, agenda items - international standard readability
- Source Sans Pro: Body text, communiqués - professional clarity across languages
- Letter-spacing: 0.02-0.03em for official terminology (diplomatic precision)
- Line-height: 1.75 for multilingual readability (crucial for translation accuracy)
- Font scale: 0.875rem (annotations) → 3.5rem (summit titles)
- Multilingual support: Font stack optimized for Latin, Cyrillic, Arabic, CJK

## Spacing, shape and elevation

- Spacing steps: `space-7-6` 7.6px, `space-8` 8px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px, `radius-6` 6px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

- Base unit: 0.5rem (8px) - International standard grid
- Card padding: 2rem - Diplomatic spacing reflecting formal protocols
- Section gaps: 3.5rem - Protocol divisions between agenda items
- Border radius: 6px - Modern yet formal (balances tradition with progress)
- Symmetrical layouts: Reflects diplomatic balance and equality among nations
- Flag display: Proper protocols for flag arrangement and precedence

## States and motion

- Hover: 3px elevation with UN blue glow (engagement readiness)
- Active: Deeper treaty navy with gold border (agreement state)
- Focus: Diplomatic gold border (4px) for accessibility
- Transition: 0.3s ease - Professional, measured diplomatic pace
- Disabled: 0.5 opacity (negotiations suspended)
- Loading: Progress indicators (deliberations in progress)

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 10.0:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours fall short of 4.5:1: `un-blue` 2.9:1, `diplomatic-gold` 2.3:1, `summit-white` 1.0:1, `alliance-green` 3.2:1. Use them only for large text (24px+) or on the fills their notes name, whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AAA compliance (international standard)
- UN blue on white: 9.8:1 contrast ratio — **measured 3.0:1** (not for body text)
- Treaty navy on charter cream: 10.2:1 contrast ratio
- Diplomatic gold on treaty navy: 7.6:1 contrast ratio — **measured 4.3:1** (not for body text)
- Focus indicators: 4px visible borders meeting international standards
- Multilingual screen reader support
- Right-to-left (RTL) language support ready
- Keyboard navigation: Full accessibility for all delegates
- Color-blind safe palette (red/green alternatives provided)

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: UN-style logo, summit title, host nation information, session date
2. Navigation: Agenda items, delegations, documents, press center, protocols
3. Stats Grid: Participating nations, delegates, sessions, resolutions adopted
4. Delegation Table: Nation listings, representatives, contact information
5. Buttons: Primary (UN blue), Secondary (diplomatic gold), Tertiary (neutral)
6. Forms: Delegation registration, credential submission, resolution drafting
7. Badges: Nation membership status, delegation roles, document classifications
8. Agenda Cards: Session topics, speakers, time allocations, voting records
9. Footer: Hosting organization, summit outcomes, final communiqué

## Further guidance

### Temperature

- (Formal Neutral)
- Cool blue palette reflects diplomatic objectivity
- Warm gold provides ceremonial warmth and prestige
- White dominance creates clean, transparent atmosphere
- Overall effect: Professional, impartial, internationally neutral

### Formality

- (Maximum - Diplomatic Protocol)
- Highest formality reflecting international diplomatic standards
- Protocol precision in every design element
- Appropriate for: UN summits, G20/G7 meetings, peace conferences,
- international treaty organizations, diplomatic missions, foreign ministries,
- multilateral institutions, heads of state forums

### Brand Positioning

- Target: Diplomatic corps, international organizations, foreign ministries
- Competitive: More formal than NGOs, equal to UN/World Bank standards
- Trust signals: Protocol adherence, international legitimacy, neutral facilitation
- Emotional resonance: Global unity, peaceful cooperation, mutual respect

### Design Patterns

- Flag iconography: Proper display protocols, alphabetical arrangement, equal sizing
- Protocol hierarchy: Seating arrangements, speaking order, document precedence
- Summit agenda: Chronological session layouts, speaking time allocations
- Document classification: Official, confidential, public distribution markings
- Translation support: Multilingual content displays, interpretation indicators
- Voting systems: Roll call displays, consensus indicators, veto notifications
- Security clearance: Delegate credentials, access levels, restricted areas

### Diplomatic Protocols

- Precedence order: Alphabetical by nation (English), rotational chair
- Flag display: UN flag prominent, host nation, alphabetical arrangement
- Name plates: Official nation names, no informal abbreviations
- Time zones: All times in UTC, local time in parentheses
- Document numbering: Official UN-style reference system
- Translation: Six official languages support (EN, FR, ES, RU, AR, ZH)
- Credential formats: ISO diplomatic credential standards

### Security & Confidentiality

- Document classifications: Public, Restricted, Confidential, Secret
- Access control: Delegation-specific content visibility
- Secure communications: Encrypted diplomatic channels
- Privacy protocols: Closed sessions, off-record discussions
- Press protocols: Embargo times, authorized statements only

## Not synced

Built from `style-252-diplomatic-summit.html`. No component bundle: the reference page's markup is not packaged as live components.
