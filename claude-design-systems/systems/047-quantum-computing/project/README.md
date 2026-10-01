Quantum Technology Platforms. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━.

**Blend:** Quantum Computing 75% + Abstract Science 25%  
**Temperature:** 2/10 (cool) · **Formality:** 8/10 · **Tags:** tech, academic  
**Perfect for:** Quantum Computing, Advanced Research, Tech Labs

## Content fundamentals

- Write for members and staff of the organization: direct, formal and composed.
- Headings name the thing plainly: “Quantum Computing Platform”, “Quantum Circuit Builder”, “Algorithm Performance”, “Coherence Time Distribution”.
- Buttons are short verb phrases in Title Case: “Filter”, “Export”.
- The reference page uses emoji as inline glyphs (🌡 👤 ⚛ ⏱ 📊 ©); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is dark.
- Identity colours: `page-surface`, `quantum-blue`, `entanglement-purple`, `cold-white`. Lead with the first; use the rest for accents and emphasis.
- Status colours (`success-green`, `error-red`, `warning-amber`) always travel with a word or icon; never signal state by hue alone.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Deep Space (#0c0c1d)      → Void of quantum realm, infinite possibility space
- Quantum Blue (#4f46e5)     → Primary qubit state, coherent superposition
- Entanglement Purple (#a855f7) → Quantum entanglement, non-local correlation
- Cold White (#f0f9ff)       → Absolute zero environment, cryogenic precision
- Decoherence Red (#ef4444)  → Error states, quantum noise, phase collapse
- Success Green (#10b981)    → Successful gate operations, high fidelity

## Typography

- `display` — "Space Grotesk", Inter, -apple-system, BlinkMacSystemFont, sans-serif

Faces are hosted on Google Fonts (Space Grotesk, Inter); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap">
```

The reference page names Inter without loading it, so it shows a fallback face; the last link above loads the intended face.

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- ━━━━━━━━━━━━━━━━━━━━━━━━━━
- Space Grotesk: Futuristic technical font suggesting advanced computation
- Monospaced elements: Quantum state notation, circuit parameters
- Weight hierarchy: 300 (data), 400 (body), 500 (labels), 600 (headers), 700 (emphasis)
- Mathematical precision: Exact spacing for formula representation

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 32px, `space-xl` 48px, `space-2xl` 64px. Pad cards and sections from these steps only.
- Corners: `radius-6` 6px, `radius-8` 8px, `radius-12` 12px, `radius-16` 16px.
- Elevation: `shadow-quantum`, `shadow-entangle`, `glow-quantum`, `glow-entangle`, lowest first for resting cards, higher for hover and overlays.

- ━━━━━━━━━━━━━━━━━━━━━━━━
- Grid system: 4-column mathematical layout (fibonacci-inspired: 8, 13, 21, 34px)
- Quantum spacing: Powers of 2 (8px, 16px, 32px, 64px) for systematic rhythm
- Negative space: Abundant to represent quantum vacuum, reduce visual noise
- Abstract patterns: Subtle qubit lattice grid, particle motion simulation

## States and motion

- ━━━━━━━━━━━━━━━━━━━━━━━━
- Subtle state transitions: Smooth 200ms transforms (quantum smooth evolution)
- Glow effects: Representing quantum coherence and superposition states
- Particle animations: CSS-based quantum noise simulation in background
- Hover elevations: Minimal (2px-4px) suggesting quantum precision

Timing values: `--transition-smooth` all 200ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- Inline SVG line icons on a 24×24 viewBox, 2px stroke, drawn in `currentColor` so they take the text colour around them.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 16.9:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `quantum-blue-light` 4.3:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ARIA labels on all quantum visualizations
- Semantic HTML5 structure
- Keyboard navigation for all interactive elements
- Screen reader descriptions for complex visualizations
- High contrast mode support for data visualization

## Component inventory

The reference page composes these patterns from the tokens above:

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ├─ Header: System status, quantum processor availability, user context
- ├─ Stats Grid: 4 KPI cards (Active Qubits, Coherence Time, Gate Fidelity, Jobs Queued)
- ├─ Content Section: 3 cards (Circuit Builder, Algorithm Performance, Error Mitigation)
- ├─ Data Table: Quantum job execution log with state transitions
- Footer: System info, documentation links, academic citations

## Further guidance

### Quantum Visual Elements

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Qubit Visualizers: Bloch sphere representations, state probability bars
2. Circuit Diagrams: Quantum gate sequences with wire connections
3. Coherence Metrics: Time-decay curves, fidelity indicators
4. Entanglement Graphs: Connected node networks showing quantum correlation
5. Algorithm Cards: Performance metrics for quantum algorithms (VQE, QAOA, Grover)

### Temperature & Formality

- ━━━━━━━━━━━━━━━━━━━━━━━━━━
- Temperature: 2/10 (Very Cool/Abstract) - Cryogenic aesthetic, minimal warmth
- Formality: 8/10 (High Academic) - Research-grade precision, scientific rigor
- Accessibility: WCAG AA compliant with 4.5:1 contrast ratios minimum

### Performance Optimization

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- CSS-only animations (no JavaScript dependencies)
- Minimal DOM complexity for fast rendering
- GPU-accelerated transforms (translate3d, opacity)
- System font fallbacks if Space Grotesk fails to load

### Real-World Applications

- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- → IBM Quantum Experience dashboard
- → Google Quantum AI control interfaces
- → Academic quantum computing research platforms
- → Quantum algorithm development environments
- → Cryogenic system monitoring dashboards

### Emotional Resonance

- ━━━━━━━━━━━━━━━━━━━━━━━
- Evokes: Frontier science exploration, computational breakthrough anticipation,
- mathematical elegance, abstract complexity mastery, academic excellence

## Not synced

Built from `style-47-quantum-computing.html`. No component bundle: the reference page's markup is not packaged as live components.
