# Claude Design Systems

The Lobbi library of **Claude Design System** artifacts.

**Start here: `lobbi/project/`, the Lobbi Design System.** One system holds all
the styles as `styles/<id>.json` and has a live **Style Switcher** preview: pick any style and a
sample member dashboard re-themes in its colours, type, radii and spacing.
Build it with `npm run ds:lobbi` (default style: 9, Dark Academia). The per-style systems below
are its sources. There is one system per
style in this repository (`style-*.html`, 255 today). Each one is a
`project/` folder in the shape the claude.ai Design System type reads, so
Claude (chat, Claude Code, Cowork) can build on-brand UI from it.

```
claude-design-systems/
├── registry.json            # every system: number, name, folder, artifact URL
├── systems/
│   └── 001-byzantine-luxury/project/
│       ├── design-system.json        # index (title, namespace, lastChange)
│       ├── tokens.json               # colours (+ dark theme), type, spacing, radius, shadow…
│       ├── README.md                 # brand book: content, colour, type, states, a11y
│       └── components/Cover/preview.html
└── scripts/
    ├── extract.mjs        # render each style page headless, read what it defines
    ├── build.mjs          # raw extraction → project/ files + registry.json
    ├── validate.mjs       # check every system against the type's token grammar
    └── render-check.mjs   # screenshot every cover in each theme (build/covers/)
```

## Using a system

- **In claude.ai / Claude Code:** open the artifact URL from `registry.json`
  and ask Claude to "use the *Byzantine Luxury* design system". Agents should
  read `project/README.md` first, then `project/tokens.json`.
- **In code:** `tokens.json` is plain data. Colours are
  `color.tokens[] {name, value, usage}`. `value` is a string, or
  `{light, dark}` for themed styles; `{other}` is an alias. Type styles are
  in `type.groups[].styles[]`.

## What each system contains

| Part | Source |
| --- | --- |
| Colour tokens | the style's `:root` custom properties (raw value kept, `var()` → alias), dark-theme overrides, colours named in its design-doc comment, and colours the page paints directly. Each token gets a usage note from the doc comment and the selectors that use it, plus contrast on the page ground. |
| `page-bg`, `page-text` | the rendered body ground and ink (gradient grounds take their first stop) |
| Type | computed styles of the page's real headings, body, labels and buttons; families from its Google Fonts link |
| Spacing / radius / shadow | the style's variables, else the values the page renders most |
| README | the style's "Ultrathink" design doc and gallery metadata, rewritten as usage rules |
| Cover | palette blocks + one pattern chosen from the style's character, name in its display face |

Not included: live React components, because the style pages are static
HTML/CSS. Every README ends with a "Not synced" note listing variables that
had no token form (`calc()`, `clamp()`, gradients).

## Rebuilding

```bash
npm install                     # playwright (uses the system Chromium if CHROMIUM_PATH is set)
npm run ds:extract              # → claude-design-systems/build/raw/*.json
npm run ds:build                # → systems/*/project, registry.json
npm run ds:validate             # grammar check; exits 1 on any error
npm run ds:covers               # optional: screenshots in build/covers/
```

Pass style numbers to scope a run, e.g. `node claude-design-systems/scripts/build.mjs 1 150`.

## Publishing

Each system is published to its own artifact made from the Design System type
(`registry.json` → `type`). After a rebuild, republish only the changed
files to the same `artifact` URL: `root` = the system folder, `file_path` = its
`project/design-system.json`, and `files` = the other changed `project/…`
paths. A new style gets a new artifact: create it from the type with the
style's name as title, publish its folder, and record the URL in
`registry.json`.

`registry.json` → `status` tracks each system: `published`, `created-empty`
(the artifact exists, so publish its files to that URL without creating another),
or `pending` (no artifact yet). Artifact publishing is capped at 200 a day
per account (resets 00:00 UTC), so a full run spans more than one day.
