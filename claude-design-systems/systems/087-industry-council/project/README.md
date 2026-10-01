"Form follows function in service of influence".

**Blend:** Industry Council 80% + Sector Leadership 20%  
**Temperature:** 4/10 (cool) · **Formality:** 9/10 · **Tags:** association, professional  
**Perfect for:** Industry Councils, Sector Leadership, Business Forums

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Industry Council Dashboard”, “2026 Annual Policy Summit”, “Active Policy Positions”, “Working Groups”.
- Buttons are short verb phrases in Title Case: “Member Portal”, “Policy Action Center”.
- The reference page uses emoji as inline glyphs (📊 📅 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `slate-bg`, `text-primary`, `strategic-blue`, `status-active-text`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`, `warning-amber`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Executive Charcoal (#1c1917): Gravitas, authority, permanence
- Platinum Silver (#94a3b8): Industry neutrality, professionalism
- Pure White (#ffffff): Clarity, transparency, institutional trust
- Strategic Blue (#2563eb): Action, policy, decisive leadership

## Typography

- `display` — "DM Sans", sans-serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (DM Sans, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-4`, `label`), always with the letter-spacing given.

### Type rationale

- DM Sans (headings): Executive modern, geometric precision
- Inter (body): Maximum readability for policy documents
- Bold numerics: Impact metrics demand attention

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-6` 6px, `space-16` 16px, `space-20` 20px, `space-30` 30px, `space-40` 40px. Pad cards and sections from these steps only.
- Corners: `radius-3` 3px, `radius-4` 4px, `radius-6` 6px, `radius-8` 8px.

## States and motion

- Confidence > Warmth | Competence > Approachability
- Trust through proven track record, not personality

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 17.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

## Further guidance

### Design Dna

- Blend: Industry Council (80%) + Sector Leadership (20%)
- Temperature: 4/10 (authoritative, policy-focused)
- Formality: 9/10 (high-level executive presence)
- Target: Industry councils, sector associations, business roundtables

### Design Principles

1. Authority First: Every element conveys institutional weight
2. Data Centricity: Numbers drive narrative (347 members, $2.4T)
3. Policy Architecture: Clear hierarchy of positions/initiatives
4. Executive Accessibility: Dense information, pristine organization
5. Government Interface: Design speaks to policymaker audience

### Unique Elements

- Policy position tracker with status indicators
- Economic impact metrics prominently featured
- Working group dashboard with progress tracking
- White paper library with research categorization
- Member company engagement leaderboard
- Government relations activity feed

## Not synced

Built from `style-87-industry-council.html`. No component bundle: the reference page's markup is not packaged as live components.
