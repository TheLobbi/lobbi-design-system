Veterans Organization: Veterans Organization 80% + Service Honor 20%.

**Blend:** Veterans Organization 80% + Service Honor 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** association, premium  
**Perfect for:** Veterans Groups, Military Associations, Service Organizations

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Veterans of Foreign Wars”, “Service Branch Breakdown All Branches”, “Memorial Day Ceremonies 8 Events Planned”, “Benefits & Assistance Programs $2.4M Assisted YTD”.
- Buttons are short verb phrases in Title Case: “View Full Calendar”, “RSVP for Events”, “Apply for Benefits”, “Volunteer as Advocate”.
- The reference page uses emoji as inline glyphs (★ ⚠ 👥 🎖 🤝 💰); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `patriot-navy`, `honor-gold`, `cream-white`, `courage-red`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Patriot Navy (#0c1445): Service, duty, commitment
- Honor Gold (#b8860b): Valor, achievement, recognition
- Cream White (#fdfbf7): Peace, purity, new beginnings
- Deep Navy (#1a1a2e): Authority, respect, tradition
- Courage Red (#991b1b): Sacrifice, bravery, important notices

## Typography

- `display` — "Playfair Display", serif
- `body` — "Source Sans Pro", sans-serif

Faces are hosted on Google Fonts (Playfair Display, Source Sans Pro); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Source+Sans+Pro:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- Playfair Display: Traditional serif conveying honor and heritage
- Source Sans Pro: Clear, accessible body text for all veterans
- Military formatting: Ranks, dates, and service records

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 1rem, `space-md` 1.5rem, `space-lg` 2rem, `space-xl` 3rem. Pad cards and sections from these steps only.
- Corners: `border-radius` 4px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, lowest first for resting cards, higher for hover and overlays.

## States and motion

- Respect for service and sacrifice
- Community and camaraderie
- Dignity without ostentation
- Clear communication for all ages
- Pride in service and country

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- High contrast for aging eyes
- Clear, readable typography
- Logical information architecture
- Intuitive navigation for all skill levels

## Further guidance

### Design Dna

- Blend: Veterans Organization (80%) + Service Honor (20%)
- Temperature: 5/10 (Dignified, Respectful)
- Formality: 8/10 (Ceremonial Professionalism)
- Target: VFW, American Legion, Military Associations, Veteran Service Orgs

### Visual Hierarchy

1. Honor and memorial elements - highest priority
2. Active service and community engagement
3. Benefits and assistance programs
4. Administrative and organizational info

### Design Principles

- "Service before self" - community impact first
- "Honor the fallen, serve the living" - memorial + benefits
- "Leave no veteran behind" - comprehensive assistance
- "Strength in unity" - organizational cohesion

## Not synced

Built from `style-84-veterans-org.html`. No component bundle: the reference page's markup is not packaged as live components.
