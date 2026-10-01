Pharmaceutical: Pharmaceutical 80% + Scientific Precision 20%.

**Blend:** Pharmaceutical 80% + Scientific Precision 20%  
**Temperature:** 3/10 (cool) · **Formality:** 9/10 · **Tags:** professional, tech  
**Perfect for:** Pharma Companies, Drug Manufacturers, Medical Research

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “PharmaCorp Research Portal”, “Oncology Compound PC-427”, “Cardiovascular Agent CV-892”, “Neurological Drug ND-341”.
- Buttons are short verb phrases in Title Case: “Export Data”, “Generate Report”.
- The reference page uses emoji as inline glyphs (📊 👥 ⚠); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `trial-phase-bg`, `badge-icon-bg`, `progress-fill-bg`, `btn-secondary-bg`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

## Typography

- `display` — "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif

Faces are hosted on Google Fonts (Open Sans); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`heading-3`, `label`, `button`), always with the letter-spacing given.

## Spacing, shape and elevation

- Spacing steps: `space-4` 4px, `space-6` 6px, `space-8` 8px, `space-12` 12px, `space-16` 16px, `space-24` 24px. Pad cards and sections from these steps only.
- Corners: `radius-3` 3px, `radius-6` 6px, `radius-12` 12px, `radius-full` 50%.
- Elevation: `shadow-1`, `shadow-2`, `shadow-3`, lowest first for resting cards, higher for hover and overlays.

- Trial Data Cards:
- Phase indicators (I/II/III/IV) with color coding
- Patient enrollment progress (real-time)
- Primary endpoint status with statistical significance
- Regulatory milestone tracking (IND, NDA, BLA submissions)

- Compliance Indicators:
- GCP compliance status (green = compliant, red = deviation)
- Audit trail completeness (21 CFR Part 11 validation)
- IRB approval status with expiration warnings
- Data integrity scores with trending

- Molecule Visualizations:
- 2D structural formulas (SVG, scalable)
- Compound identifier metadata (CAS, IUPAC, SMILES)
- Patent status indicators
- Safety profile summaries

- Research Timelines:
- Gantt-style trial progression
- Critical path milestones (database lock, unblinding)
- Regulatory submission deadlines
- Manufacturing readiness gates

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.8:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.

- WCAG 2.1 Level AAA:
- Color contrast ratios >7:1 for all text
- Keyboard navigation for all interactive elements
- Screen reader optimization with ARIA labels
- Focus indicators meet pharmaceutical documentation standards

- 21 CFR Part 11 Alignment:
- Audit trail metadata visible in UI
- Version control indicators on all data
- User authentication status always visible
- Change history accessible from context menus

- GxP Compliance:
- Validated system status indicators
- Data integrity monitoring dashboards
- Deviation tracking workflows
- CAPA (Corrective/Preventive Action) integration

## Component inventory

The reference page composes these patterns from the tokens above:

- Trial Data Cards:
- Phase indicators (I/II/III/IV) with color coding
- Patient enrollment progress (real-time)
- Primary endpoint status with statistical significance
- Regulatory milestone tracking (IND, NDA, BLA submissions)

- Compliance Indicators:
- GCP compliance status (green = compliant, red = deviation)
- Audit trail completeness (21 CFR Part 11 validation)
- IRB approval status with expiration warnings
- Data integrity scores with trending

- Molecule Visualizations:
- 2D structural formulas (SVG, scalable)
- Compound identifier metadata (CAS, IUPAC, SMILES)
- Patent status indicators
- Safety profile summaries

- Research Timelines:
- Gantt-style trial progression
- Critical path milestones (database lock, unblinding)
- Regulatory submission deadlines
- Manufacturing readiness gates

## Further guidance

### Strategic Foundation

- This design system establishes enterprise-grade pharmaceutical interfaces for
- regulatory-compliant research environments. Inspired by leading global pharma
- corporations (Pfizer, Johnson & Johnson, Novartis), this architecture supports
- clinical trial management, drug development pipelines, and regulatory reporting
- while maintaining scientific rigor and trust.

### Core Design Tokens

- Color Palette (Clinical Authority):
- Primary:   #0369a1 (Clinical Blue) - Trust, medical precision, authority
- Success:   #16a34a (Approval Green) - FDA approval, positive outcomes
- Neutral:   #6b7280 (Research Gray) - Scientific objectivity
- White:     #ffffff (Laboratory White) - Sterile, clean, precise
- Accent:    #0284c7 (Active Compound) - Interactive elements
- Warning:   #ea580c (Safety Alert) - Adverse events, critical flags

- Typography (Medical-Grade Readability):
- Family:    Open Sans - Pharmaceutical industry standard
- Hierarchy: 32px (H1) → 24px (H2) → 18px (H3) → 14px (Body)
- Weight:    700 (Headers), 600 (Emphasis), 400 (Body)
- Rationale: Meets WCAG AAA compliance for clinical documentation

- Spatial System (Regulatory Structure):
- Base Unit: 8px grid system (aligns with ISO standards)
- Spacing:   16px → 24px → 32px → 48px (clinical organization)
- Layout:    Structured containers for audit trail clarity

### Pharmaceutical Ux Principles

1. Regulatory Compliance First
- All data displays include audit metadata (timestamps, versions)
- Clear visual hierarchy for critical safety information
- Accessibility compliance exceeds FDA digital health guidelines

2. Scientific Precision
- Exact numerical displays (no rounding in critical metrics)
- Standardized units of measurement (SI units, IUPAC notation)
- Version-controlled data with change tracking indicators

3. Trust Through Transparency
- Every metric includes methodology context
- Clear distinction between preliminary and validated data
- Visible approval workflows and stakeholder signatures

4. Clinical Efficiency
- Dashboard prioritizes time-critical trial monitoring
- Quick access to safety signals and adverse events
- Streamlined regulatory submission workflows

### Industry Benchmark Analysis

- Pfizer Digital Health:
- ✓ Clinical blue primary color
- ✓ Clear trial phase indicators
- ✓ Patient-centric safety monitoring

- Johnson & Johnson:
- ✓ Multi-therapeutic area organization
- ✓ Enterprise-wide data standards
- ✓ Regulatory submission workflows

- Novartis Clinical Operations:
- ✓ Real-time trial monitoring dashboards
- ✓ Adaptive trial design support
- ✓ Patient recruitment analytics

### Temperature & Formality Scoring

- Temperature: 3/10 (Cool Clinical)
- Objective scientific language
- Minimal emotional design elements
- Focus on data accuracy over aesthetics
- Professional distance appropriate for life sciences

- Formality: 9/10 (Enterprise Regulatory)
- Standardized nomenclature (ICH guidelines)
- Hierarchical information architecture
- Audit-ready documentation style
- C-suite and regulatory authority audience

### Performance Optimization

- SVG molecule structures (scalable, accessible)
- CSS Grid for dashboard layout (no framework bloat)
- System fonts fallback (Open Sans → system-ui)
- Minimal JavaScript (progressive enhancement)
- Optimized for enterprise browsers (Chrome, Edge, Firefox ESR)

### Future Enhancement Roadmap

- Phase 2: Real-time safety signal detection visualization
- Phase 3: AI-powered protocol deviation prediction
- Phase 4: Integrated eCRF (Electronic Case Report Form) workflows
- Phase 5: Regulatory submission package automation

### Measurement & Validation

- Success Metrics:
- Time to critical safety signal identification: <30 seconds
- Regulatory submission preparation time: -40% vs. legacy systems
- User error rate in data entry: <0.1%
- Audit readiness score: >95%

- This design system positions pharmaceutical enterprises to accelerate drug
- development cycles while maintaining the highest standards of scientific
- integrity and regulatory compliance.

## Not synced

Built from `style-30-pharmaceutical.html`. No component bundle: the reference page's markup is not packaged as live components.
