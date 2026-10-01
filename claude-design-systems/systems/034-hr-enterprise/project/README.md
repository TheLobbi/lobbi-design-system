Enterprise HR platforms that put people at the center. Inspired by Workday, SAP SuccessFactors, and modern people operations tools. Professional yet approachable, organized yet warm, empowering employees and HR teams alike.

**Blend:** HR Enterprise 70% + People First 30%  
**Temperature:** 6/10 (warm) · **Formality:** 7/10 · **Tags:** professional, tech  
**Perfect for:** HR Consulting, Talent Management, Workforce Solutions

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “People Hub”, “People Operations Dashboard”, “Team Overview”, “Team Directory”.
- Buttons are short verb phrases in Title Case: “View All Teams →”, “View”, “Message”, “View”.
- Navigation uses single nouns: “Dashboard”, “Team”, “Performance”, “Development”, “Analytics”.
- The reference page uses emoji as inline glyphs (💜 👥 📚 🎯 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-primary`, `color-primary-light`, `color-secondary`, `color-secondary-light`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`color-success`, `color-warning`, `color-error`, `color-info`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Faces are hosted on Google Fonts (Nunito Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 0.5rem, `space-sm` 0.75rem, `space-md` 1rem, `space-lg` 1.5rem, `space-xl` 2rem, `space-2xl` 3rem. Pad cards and sections from these steps only.
- Corners: `radius-sm` 4px, `radius-md` 8px, `radius-lg` 12px, `radius-xl` 16px, `radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, lowest first for resting cards, higher for hover and overlays.

1. Employee Engagement Cards
- ├─ Visual indicators: Progress rings, trend arrows, status badges
- ├─ Contextual colors: Green (positive), amber (needs attention), red (critical)
- ├─ Actionable insights: Clear next steps, not just data
- Human language: "Team wellbeing" not "Employee satisfaction index"

2. Performance Dashboards
- ├─ Goal tracking with visual progress
- ├─ Peer recognition highlights
- ├─ Development opportunities surfaced
- Manager coaching prompts

3. Org Chart Elements
- ├─ Avatar-first design (people, not titles)
- ├─ Team structure visualization
- ├─ Direct report connections
- Department health indicators

4. Data Tables
- ├─ Scannable: Alternating row backgrounds
- ├─ Sortable: Clear column headers with icons
- ├─ Contextual: Status badges, trend indicators
- Actionable: Quick action buttons per row

## States and motion

- ├─ Hover: Lift effect (translateY + shadow) for cards
- ├─ Active: Subtle scale (0.98) for buttons
- ├─ Focus: 3px purple outline for accessibility
- ├─ Loading: Shimmer effects for async content
- Transitions: 200ms for snappy responsiveness

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 200ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 300ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 14.6:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- ├─ Color contrast: 4.5:1 minimum for text
- ├─ Focus indicators: Visible on all interactive elements
- ├─ Semantic HTML: Proper heading hierarchy, landmarks
- ├─ ARIA labels: Screen reader context for icons
- Keyboard navigation: Full tab order, logical flow

## Component inventory

The reference page composes these patterns from the tokens above:

1. Employee Engagement Cards
- ├─ Visual indicators: Progress rings, trend arrows, status badges
- ├─ Contextual colors: Green (positive), amber (needs attention), red (critical)
- ├─ Actionable insights: Clear next steps, not just data
- Human language: "Team wellbeing" not "Employee satisfaction index"

2. Performance Dashboards
- ├─ Goal tracking with visual progress
- ├─ Peer recognition highlights
- ├─ Development opportunities surfaced
- Manager coaching prompts

3. Org Chart Elements
- ├─ Avatar-first design (people, not titles)
- ├─ Team structure visualization
- ├─ Direct report connections
- Department health indicators

4. Data Tables
- ├─ Scannable: Alternating row backgrounds
- ├─ Sortable: Clear column headers with icons
- ├─ Contextual: Status badges, trend indicators
- Actionable: Quick action buttons per row

## Further guidance

### Hr-Specific Design Decisions

1. People-Centric Language:
- ❌ "Human Resources" → ✅ "People Operations"
- ❌ "Headcount" → ✅ "Team Size"
- ❌ "Employee ID" → ✅ "Team Member"
- ❌ "Utilization Rate" → ✅ "Capacity & Wellbeing"

2. Empowerment Focus:
- ├─ Highlight growth opportunities over performance gaps
- ├─ Celebrate achievements with visual prominence
- ├─ Frame feedback as development, not criticism
- Show career pathways, not just current roles

3. Privacy & Trust:
- ├─ Sensitive data (salary, reviews) with lock icons
- ├─ Clear data ownership indicators
- ├─ Transparent usage policies
- Easy opt-out controls

4. Organizational Health:
- ├─ Team engagement scores with context
- ├─ Diversity metrics with inclusive language
- ├─ Wellbeing indicators (burnout risk, work-life balance)
- Culture pulse surveys

### Emotional Design

- Temperature: 6/10 (Warm People-Focused)
- ├─ Warm color palette (purple/blue vs cold navy/gray)
- ├─ Rounded corners (8px) for approachability
- ├─ Friendly typography (Nunito Sans rounded terminals)
- ├─ Avatar-first design (humanizes data)
- ├─ Positive framing (opportunities vs problems)
- Celebratory micro-animations (achievement badges)

- Formality: 7/10 (Professional Accessible)
- ├─ Corporate structure with human warmth
- ├─ Data-driven but not cold/clinical
- ├─ Professional language but conversational
- ├─ Enterprise features (reporting, analytics)
- Approachable interactions (not intimidating)

### Competitive Differentiation

- vs Workday:
- ├─ Warmer color palette (purple vs blue-dominant)
- ├─ More generous spacing (less density)
- Simplified navigation (less overwhelming)

- vs SAP SuccessFactors:
- ├─ Modern card-based layout (vs table-heavy)
- ├─ Consumer-grade polish (vs enterprise utilitarian)
- Mobile-first responsive design

- vs BambooHR:
- ├─ More sophisticated analytics (enterprise-grade)
- ├─ Scalable for large organizations (1000+ employees)
- Advanced reporting capabilities

### Performance Optimizations

- ├─ Single-file deployment (no external CSS)
- ├─ System font fallbacks (fast load)
- ├─ CSS containment for paint optimization
- ├─ Will-change hints for animated elements
- Minimal DOM depth (accessibility + speed)

### Use Cases

- ├─ HR Manager: Team performance overview, engagement tracking
- ├─ Employee: Self-service profile, goal tracking, development
- ├─ Executive: Organizational health dashboard, diversity metrics
- ├─ Recruiter: Candidate pipeline, hiring analytics
- Manager: Direct report management, 1-on-1 tracking

### Scalability

- ├─ Component-based structure (easy to extend)
- ├─ CSS custom properties (theme switching)
- ├─ Modular sections (reusable patterns)
- Design system foundation (consistent styling)

### Success Metrics

- ├─ User Satisfaction: NPS >40 (enterprise HR benchmark)
- ├─ Task Completion: <3 clicks to common actions
- ├─ Engagement: 70%+ daily active usage
- ├─ Accessibility: WCAG 2.1 AA compliance
- Performance: <2s initial load, <200ms interactions

### Design Principles Applied

1. People First: Every design decision centers employee experience
2. Clarity Over Complexity: Simplify without losing functionality
3. Empowerment Through Data: Information that drives action
4. Trust Through Transparency: Clear, honest communication
5. Warmth Meets Professionalism: Human connection in enterprise context

- Design Temperature: 🔥🔥🔥🔥🔥🔥⚪⚪⚪⚪ (6/10 - Warm People-Focused)
- Formality Level:    👔👔👔👔👔👔👔⚪⚪⚪ (7/10 - Professional Accessible)

## Not synced

Built from `style-34-hr-enterprise.html`. No component bundle: the reference page's markup is not packaged as live components.
