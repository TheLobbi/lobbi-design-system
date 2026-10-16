This interface celebrates audio as the primary interaction modality. Sound waves become visual metaphors, waveforms guide the eye, and pulsing animations suggest listening states. The design balances dynamic audio energy with calm minimal backgrounds, creating a zen-like space where voice takes center stage.

**Blend:** Audio Visualization 55% + Sound Wave Aesthetics 30% + Calm Minimal 15%  
**Temperature:** 6/10 (warm) · **Formality:** 6/10 · **Tags:** tech, creative  
**Perfect for:** Voice AI, Audio Platforms, Sound Technology

## Content fundamentals

- Write for members and staff of the organization: direct, professional but warm.
- Headings name the thing plainly: “Voice-First Dashboard”, “Voice Features”, “Live Transcription”, “Voice Commands”.
- Buttons are short verb phrases in Title Case: “🎙 Start Recording”, “📁 Upload File”, “Cancel”.
- Navigation uses single nouns: “Listen”, “Record”, “Transcripts”, “Settings”.
- The reference page uses emoji as inline glyphs (🎙 🎤 🎯 ⚡ 📁 🔊); keep them functional, never decorative.

## Color

- Set the page on `page-bg` with body text in `page-text`. The theme is light.
- Identity colours: `color-wave-blue`, `color-voice-purple`, `color-deep-navy`, `color-pulse-cyan`. Lead with the first; use the rest for accents and emphasis.
- Each token's note says where the reference page uses it and, for text colours, its contrast on `page-bg`. Keep body text at 4.5:1 or better.

### Palette rationale

- Sound Wave Blue (#4a90d9): Trust, calm, audio technology, vocal clarity
- Voice Purple (#7c3aed): Creative expression, speech synthesis, warmth
- Silence White (#fafafa): Clean background, quiet moments, blank canvas
- Echo Gray (#9ca3af): Neutral mid-tones, supporting information, subtle
- Deep Navy (#1e293b): Depth, audio space, professional grounding
- Pulse Cyan (#06b6d4): Active listening, real-time feedback, energy
- Whisper Pink (#f472b6): Friendly interaction, approachable voice tech

## Typography

- `display` — Recursive, "DM Sans", sans-serif
- `body` — "DM Sans", system-ui, -apple-system, sans-serif

Faces are hosted on Google Fonts (DM Sans, Recursive); load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Recursive:wght@300;400;500;600;700&display=swap">
```

- Set titles in `display`, sections in `heading-2` and running text in `body`.
- Uppercase is reserved for small labels (`label`), always with the letter-spacing given.

### Type rationale

- DM Sans (Primary UI):
- Clean, modern geometric sans-serif
- Excellent readability at all sizes
- Friendly without being casual
- Perfect for voice-first interfaces
- Warm, approachable personality

- Recursive (Dynamic Elements):
- Variable font with expressive range
- Suggests adaptability like voice modulation
- Playful for interactive elements
- Technical enough for audio metrics
- Unique character for brand distinction

## Spacing, shape and elevation

- Spacing steps: `space-xs` 8px, `space-sm` 16px, `space-md` 24px, `space-lg` 40px, `space-xl` 64px. Pad cards and sections from these steps only.
- Corners: `border-radius-sm` 8px, `border-radius-md` 16px, `border-radius-lg` 24px, `border-radius-full` 9999px.
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-glow`, lowest first for resting cards, higher for hover and overlays.

1. Header: Waveform navigation with listening state
2. Audio Stats: Sound metrics with frequency visualization
3. Voice Cards: Interactive cards with waveform backgrounds
4. Transcript Table: Conversation logs with audio playback
5. Recording Form: Voice input fields with level meters
6. Action Buttons: Pulsing CTAs with sound wave effects
7. Status Badges: Audio state indicators with animations
8. Footer: Equalizer-style footer with harmonic spacing

## States and motion

- Pulse animations during voice activity
- Waveform reveals on hover
- Recording indicators with red pulses
- Playback progress with wave animation
- Volume controls with visual feedback
- Speaking state changes interface

Timing values: `--transition-fast` 150ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-base` 300ms cubic-bezier(0.4, 0, 0.2, 1), `--transition-slow` 500ms cubic-bezier(0.4, 0, 0.2, 1).

- Honour `prefers-reduced-motion`: drop lifts and transitions to instant state changes.

## Iconography

- The reference page uses no icon set; when icons are needed, use a single-weight line set at text size in `currentColor`.
- No logo ships with this style: set the organization name in the `display` style.

## Accessibility

- `page-text` on `page-bg` measures 13.7:1.
- Every interactive element shows a visible focus state at 3:1 or better against its surface.
- Measured on `page-bg`, these text colours reach 3:1 but not 4.5:1: `color-wave-blue` 3.1:1. Use them on `page-bg` only for large text (24px+, or bold 19px+), whatever the design notes below claim.
- These fall under 3:1 on `page-bg`: `color-echo-gray` 2.4:1, `color-whisper-pink` 2.5:1, `color-soft-white` 1.1:1. Never set text in them on `page-bg`, at any size; use them as text only on a fill whose measured pairing meets 4.5:1 (3:1 for large text).

From the style's design notes (ratios checked against the tokens; a **bold** measurement replaces a claim that does not hold):

- WCAG 2.1 AA compliant color contrast
- Text alternatives for audio content
- Visual indicators for sound states
- Keyboard shortcuts for voice controls
- Screen reader announcements for recordings
- Captions and transcripts available
- Visual feedback for audio events
- Clear focus indicators throughout

## Component inventory

The reference page composes these patterns from the tokens above:

1. Header: Waveform navigation with listening state
2. Audio Stats: Sound metrics with frequency visualization
3. Voice Cards: Interactive cards with waveform backgrounds
4. Transcript Table: Conversation logs with audio playback
5. Recording Form: Voice input fields with level meters
6. Action Buttons: Pulsing CTAs with sound wave effects
7. Status Badges: Audio state indicators with animations
8. Footer: Equalizer-style footer with harmonic spacing

## Further guidance

### Spatial Hierarchy

- 16px base unit for rhythmic consistency
- Golden ratio (1.618) in proportions
- Vertical rhythm matching audio beats
- Wave-like spacing patterns
- Generous padding for calm feeling
- Audio-inspired asymmetric balance

### Emotional Temperature

- Warm Technology (6/10):
- Purple adds warmth to blue base
- Pink accents create friendliness
- White backgrounds feel open, calm
- Overall: Approachable, human-centered
- Balanced between tech and comfort

### Formality Level

- Casually Professional (6/10):
- Clean but not corporate
- Playful audio visualizations
- Friendly voice metaphors
- Professional data presentation
- Accessible to all users

### Performance Optimization

- CSS animations for waveforms
- SVG for scalable audio graphics
- Efficient canvas for real-time viz
- Minimal DOM manipulation
- Optimized audio buffer handling
- Lightweight animation libraries
- Fast Web Audio API integration

### Brand Alignment

- Establishes voice-first credibility through:
- Audio visualization as core design element
- Waveform metaphors throughout
- Sound-inspired color palette
- Voice interaction clarity
- Modern audio technology aesthetic

### Use Cases

- Voice assistant dashboards
- Podcast creation platforms
- Audio transcription services
- Voice messaging apps
- Speech recognition interfaces
- Audio editing software
- Voice commerce platforms
- Conversational AI interfaces

### Competitive Differentiation

- Unlike standard voice interfaces, this design:
- Makes audio visualization primary, not secondary
- Balances energy with calm minimal design
- Uses voice metaphors as functional elements
- Creates zen space for audio focus
- Humanizes voice technology

### Scalability

- Component system supports:
- Multiple audio visualization types
- Various voice interaction states
- Different recording modes
- Customizable waveform colors
- Modular audio components
- Reusable sound wave patterns

## Not synced

Built from `style-213-voice-interface.html`. No component bundle: the reference page's markup is not packaged as live components.
