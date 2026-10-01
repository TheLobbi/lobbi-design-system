Alumni Association: Alumni Association 80% + Heritage Pride 20%.

**Blend:** Alumni Association 80% + Heritage Pride 20%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** association, academic  
**Perfect for:** Alumni Associations, University Networks, Graduate Groups

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Lobbi Alumni Network”, “Welcome Back, Class of 1995!”, “Annual Fund Campaign 2025”, “Homecoming Weekend 2025”.
- Navigation uses single nouns: “Dashboard”, “Events”, “Directory”, “Giving”, “Mentorship”, “Career Network”.
- The reference page uses emoji as inline glyphs (👥 ⭐ 💎 🎉 🥇 🥈); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `crimson`, `gold`, `cream`, `navy`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Primary: Deep crimson (#990000) - school spirit and tradition
- Secondary: Warm gold (#d4a843) - achievement and excellence
- Background: Cream (#fdfbf7) - warmth and nostalgia
- Text: Dark brown (#2d2926) - classic readability
- Accent: Navy (#1a365d) - trustworthiness

## Typography

- `display` — "Playfair Display", serif
- `body` — "Open Sans", sans-serif

Faces are hosted on Google Fonts (Playfair Display, Open Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Headings: Playfair Display (serif) - prestige and tradition
- Body: Open Sans (sans-serif) - modern readability
- Class year styling with decorative numerals

## Spacing, shape and elevation

- Spacing steps: `space-4-8` 4.8px, `space-8` 8px, `space-12-8` 12.8px, `space-16` 16px, `space-24` 24px, `space-32` 32px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px, `radius-15` 15px.
- Elevation: `shadow-1`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Pride, nostalgia, community, achievement, connection, tradition

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `stat-change-bg` 4.2:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `gold` 2.1:1, `gold-light` 1.6:1, `gold-dark` 2.9:1, `white` 1.0:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

## Further guidance

### Design Psychology

- Temperature: 6/10 (warm, nostalgic but modern)
- Formality: 7/10 (proud but approachable)
- Target: University alumni groups, school associations, class reunions

### Unique Features

- Class year reunion countdown timers
- Donation progress thermometer with visual appeal
- Regional chapter map visualization
- Notable alumni spotlight carousel
- Homecoming event emphasis
- Mentorship matching interface
- Career networking connections
- Class giving competition leaderboard

### Use Cases

- University alumni relations
- High school reunions
- Professional school networks
- Fraternity/sorority chapters
- Military academy alumni

## Not synced

Built from `style-74-alumni-association.html`. No component bundle: the reference page's markup is not packaged as live components.
