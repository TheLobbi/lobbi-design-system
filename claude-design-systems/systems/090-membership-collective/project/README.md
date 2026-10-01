This design merges the exclusive-yet-inclusive aesthetic of modern membership collectives (Soho House, The Wing, Summit) with the purpose-driven warmth of community-first platforms (Mighty Networks, Circle). Creates spaces where belonging meets impact.

**Blend:** Membership Collective 80% + Shared Purpose 20%  
**Temperature:** 7/10 (warm) · **Formality:** 5/10 · **Tags:** association, creative  
**Perfect for:** Membership Clubs, Social Collectives, Community Hubs

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Lobbi Collective”, “Welcome back to the Collective! 👋”, “Annual Members Summit 2025”, “Collective Impact: The Future We Build Together”.
- Buttons are short verb phrases in Title Case: “Invite Friends”, “Share Your Story”.
- The reference page uses emoji as inline glyphs (⭐ 👋 👥 🔥 📚 💬); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `community-indigo`, `warmth-coral`, `soft-lavender`, `gray`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Community Indigo (#4f46e5): Trust, connection, collective intelligence
- Warmth Coral (#f472b6): Belonging, creativity, vibrant relationships
- Soft Lavender (#faf5ff): Calm sanctuary, premium comfort, inclusive space
- Deep Purple-Gray (#1e1b4b): Sophisticated authority, grounded wisdom
- Energy Yellow (#facc15): Highlights, celebration, joyful moments

## Typography

- `display` — "Space Grotesk", sans-serif
- `body` — "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Space Grotesk, DM Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Space Grotesk: Modern geometric sans-serif balancing tech-forward with human warmth
- Wider letterforms create open, welcoming feeling
- Perfect for community-focused headings and member names
- DM Sans: Friendly, accessible body text with excellent readability
- Low-contrast design reduces reading fatigue in content-heavy interfaces
- Humanist proportions create approachable, conversational tone

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-8` 8px, `space-16` 16px, `space-20` 20px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-8` 8px, `radius-10` 10px, `radius-12` 12px, `radius-20` 20px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Soft, rounded corners create welcoming containment
- Generous whitespace respects member attention and cognitive load
- Hover states emphasize connection opportunities
- Badge systems celebrate participation and contribution
- Activity feeds maintain community pulse visibility

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG AAA contrast ratios on all text
- Clear visual hierarchy reduces cognitive load
- Icon + text labels for all actions
- Status indicators use color + shape + text
- Generous tap targets (min 44x44px)
- Focus states clearly visible

## Further guidance

### Design Attributes

- Temperature: 7/10 (warm, inclusive, welcoming while maintaining aspirational quality)
- Formality: 5/10 (accessible modern professionalism with friendly approachability)
- Sophistication: 8/10 (curated aesthetic without pretension)
- Energy: 6/10 (active community engagement balanced with calm spaces)

### Ui Patterns

- Member-first information architecture (people before products)
- Live engagement signals (active members, recent activity, real-time updates)
- Tiered access visualization (clear benefits without exclusionary messaging)
- Community-generated content prominence
- Horizontal collaboration spaces (discussions, events, projects)
- Ambient belonging cues (member count, shared achievements, collective milestones)

### Ideal Use Cases

- Modern membership organizations (professional, creative, lifestyle)
- Digital community platforms (creators, learners, enthusiasts)
- Passion-based collectives (art, culture, impact, innovation)
- Subscription communities with exclusive content/experiences
- Professional networks with social dimensions
- Ambassador/advocate programs
- Online-to-offline hybrid communities

### Responsive Behavior

- Mobile-first card layouts
- Collapsible navigation for community sections
- Touch-optimized member interaction points
- Stackable metric dashboards
- Readable typography at all sizes (min 16px body)

### Departure From Traditional Dashboard Design

- People-centric vs. data-centric layout
- Community activity elevated above admin metrics
- Storytelling through member highlights vs. raw analytics
- Collaborative spaces more prominent than control panels
- Celebration moments (badges, achievements) integrated throughout

### Emotional Resonance

- The design should evoke:
- "I belong here" (inclusive signals, welcoming language)
- "My people are here" (visible member activity, familiar faces)
- "This is curated for me" (personalized content, relevant recommendations)
- "I'm part of something meaningful" (shared purpose, collective impact)
- "I want to contribute" (clear participation pathways, recognition systems)

### Design Tensions Resolved

- Exclusive yet Inclusive: Premium experience accessible to committed members
- Professional yet Friendly: Serious purpose with warm human connection
- Structured yet Spontaneous: Clear frameworks enabling organic interaction
- Individual yet Collective: Personal value within community context

## Not synced

Built from `style-90-membership-collective.html`. No component bundle: the reference page's markup is not packaged as live components.
