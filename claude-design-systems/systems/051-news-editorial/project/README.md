Premium News Publication. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ This design establishes journalistic authority through editorial hierarchy, newspaper-style typography, and information architecture that prioritizes scannable, objective content presentation. Drawing from premium news publications like NYT and Financial Times, every element emphasizes credibility, clarity, and professional editorial standards.

**Blend:** News Editorial 80% + Broadsheet Classic 20%  
**Temperature:** 5/10 (balanced) · **Formality:** 8/10 · **Tags:** media, professional  
**Perfect for:** News Organizations, Publications, Media Companies

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Business Intelligence Daily”, “Key Performance Indicators”, “Featured Analysis”, “Quarterly Performance Exceeds Market Expectations Across All Segments”.
- Navigation uses single nouns: “Subscribe”, “Sign In”, “Dashboard”, “Analytics”, “Reports”, “Markets”.
- The reference page uses emoji as inline glyphs (©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `paper-white`, `link-blue`, `breaking-red`, `verified-green`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Journalistic Neutrality Palette
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Primary Editorial Colors:
- ├─ Paper White:      #faf9f6  • Background foundation, print heritage
- ├─ Ink Black:        #1a1a1a  • Primary text, editorial authority
- ├─ Graphite:         #4a4a4a  • Secondary text, bylines
- ├─ Slate:            #6b6b6b  • Tertiary text, captions
- Border Gray:      #d4d3d0  • Subtle dividers, newspaper rules

- Accent Colors:
- ├─ Link Blue:        #0066cc  • Interactive elements, citations
- ├─ Breaking Red:     #c41e3a  • Urgent alerts, breaking news
- ├─ FT Pink:          #fff1e5  • Highlight backgrounds, premium content
- Verified Green:   #2d7a3e  • Success states, fact-checked indicators

## Typography

- `display` — Newsreader, Georgia, serif
- `body` — Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Newsreader, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-2`, `body`, `label`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 12px, `space-md` 16px, `space-lg` 24px, `space-xl` 32px, `space-2xl` 48px, `gutter` 24px. Pad cards and sections from these steps only.
- Corners: `radius-2` 2px.

- Column-Based Grid Architecture
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Newspaper Grid:
- ├─ Base Unit:        16px     • Foundation for vertical rhythm
- ├─ Column Gutter:    24px     • Content separation
- ├─ Section Margin:   48px     • Major section breaks
- ├─ Rule Width:       1px      • Traditional newspaper dividers
- Max Width:        1440px   • Optimal reading experience

- Component Spacing:
- ├─ Article Gap:      32px     • Story separation
- ├─ Card Padding:     24px     • Content breathing room
- ├─ Byline Offset:    12px     • Attribution spacing
- Table Row:        16px     • Data readability

## States and motion

- Professional Engagement
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Link Behavior:
- ├─ Default:          Link blue, underline on hover
- ├─ Visited:          Purple tint, reading history
- ├─ Active:           Darker shade, immediate feedback
- Focus:            Blue outline, keyboard accessibility

- Card Interactions:
- ├─ Hover:            FT pink background, box shadow elevation
- ├─ Transition:       150ms ease, smooth state changes
- ├─ Active:           Slight scale reduction, tactile feedback
- Focus:            Visible outline, WCAG compliance

Timing values: `--transition-fast` 150ms ease, `--transition-medium` 250ms ease.

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.5:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- Journalistic Integrity
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- WCAG 2.1 Level AA Compliance:
- ├─ Color Contrast:   7:1 minimum (ink black on paper white)
- ├─ Focus Indicators: 2px blue outline, 4px offset
- ├─ Keyboard Nav:     Full tab order, skip links
- ├─ Screen Readers:   Semantic HTML5, ARIA labels
- ├─ Text Resize:      Supports 200% zoom without breaking
- Motion:           Respects prefers-reduced-motion

## Component inventory

The reference page composes these patterns from the tokens above:

- Editorial Building Blocks
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Article Cards:
- ├─ Structure:        Headline + Deck + Byline + Timestamp
- ├─ Background:       Paper white with subtle border
- ├─ Hover:            FT pink tint, elevated importance
- Typography:       Newsreader serif for editorial voice

- Breaking News Banner:
- ├─ Position:         Fixed top, persistent visibility
- ├─ Treatment:        Breaking red background, urgent typography
- ├─ Animation:        Subtle slide-in, respects user attention
- Dismissible:      Optional close, user control

- Section Headers:
- ├─ Typography:       All-caps Inter, editorial authority
- ├─ Decoration:       Bottom border rule, traditional styling
- ├─ Spacing:          Generous margins, clear hierarchy
- Navigation:       Inline links, scannable structure

- Data Tables:
- ├─ Typography:       Inter for data clarity
- ├─ Borders:          Horizontal rules only, clean separation
- ├─ Alignment:        Numbers right-aligned, text left-aligned
- Hover:            Subtle row highlight, enhanced readability

## Further guidance

### Visual Hierarchy

- Editorial Priority System
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Typography Scale (Editorial Hierarchy):
- ├─ Breaking News:    18px/1.4 • Inter Medium • Urgent announcements
- ├─ Section Headers:  14px/1.3 • Inter SemiBold • Category navigation
- ├─ Headline:         32px/1.2 • Newsreader Bold • Primary story
- ├─ Subheadline:      24px/1.3 • Newsreader SemiBold • Secondary stories
- ├─ Deck:             18px/1.5 • Newsreader Regular • Article summaries
- ├─ Byline:           14px/1.4 • Inter Medium • Attribution
- ├─ Body Copy:        16px/1.6 • Newsreader Regular • Article content
- ├─ Caption:          14px/1.5 • Inter Regular • Supporting details
- Timestamp:        13px/1.4 • Inter Regular • Publication metadata

### Responsive Strategy

- Multi-Device Editorial
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Breakpoints:
- ├─ Desktop:          1440px+  • Multi-column layout
- ├─ Tablet:           768px    • Two-column grid
- ├─ Mobile:           320px    • Single column, optimized touch

- Typography Scaling:
- ├─ Desktop:          Base 16px, generous line-height
- ├─ Tablet:           Base 16px, adjusted spacing
- Mobile:           Base 15px, optimized for small screens

### Brand Temperature

- Neutral Objective (5/10)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Establishes professional credibility through:
- ├─ Restrained color palette (paper, ink, minimal accents)
- ├─ Editorial typography hierarchy (Newsreader serif authority)
- ├─ Traditional newspaper spacing (column grids, rules)
- ├─ Objective information presentation (fact-focused layout)
- Timeless design patterns (print publication heritage)

### Formality Level

- High Journalistic (8/10)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Professional authority through:
- ├─ Serif typography (editorial credibility)
- ├─ Structured information architecture (journalistic standards)
- ├─ Byline and timestamp prominence (attribution transparency)
- ├─ Subtle, purposeful interactions (serious engagement)
- Premium publication aesthetics (NYT, FT heritage)

- PERFORMANCE OPTIMIZATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- ├─ Font Loading:     Preconnect to Google Fonts, swap strategy
- ├─ CSS Structure:    Mobile-first, progressive enhancement
- ├─ Animations:       GPU-accelerated transforms only
- ├─ Repaints:         Minimized through compositing layers
- Bundle Size:      Single HTML file, ~15KB gzipped

- IMPLEMENTATION NOTES
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- This design establishes dashboard credibility through newspaper-style editorial
- patterns. The blend of premium news publication aesthetics (NYT, Financial Times)
- with modern business intelligence creates a professional environment that
- prioritizes information hierarchy, scannable content, and journalistic integrity.

- Every component emphasizes clarity, objectivity, and editorial authority—
- ensuring users trust the data presentation while maintaining engagement through
- thoughtful information architecture and traditional newspaper design patterns.

## Not synced

Built from `style-51-news-editorial.html`. No component bundle: the reference page's markup is not packaged as live components.
