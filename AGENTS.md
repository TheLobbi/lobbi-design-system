# Lobbi Design System

This is a static HTML/CSS/JavaScript gallery. The style pages are shipped examples, not generated documentation to prune.

- `index.html` owns style IDs, filenames, tags, blends, temperature, formality, and use cases. Keep IDs and filenames stable: navigation, JSON data, thumbnails, and browser favorites/collections depend on them.
- Each `style-*.html` page owns its CSS variables and token-export controls. Preserve the gallery return link, related-style links, responsive layout, keyboard access, visible focus, and reduced-motion support when changing a page.
- `scripts/generate-data-files.js` derives JSON in `data/` from the gallery. Review its output when metadata changes; several older page generators and the thumbnail generator cover only the first 210 styles.
- The site has no framework or build step. The Pages workflow uploads the repository root; `vercel.json` holds separate static-host configuration.
- `scripts/` and root JavaScript utilities rewrite checked-in HTML. Read a generator before using it and review the resulting page diff. Use `bun install` only when its dependencies are needed.

For a changed JavaScript utility, run `node --check path/to/script.js`. For page changes, verify a representative style and the gallery at mobile and desktop widths, including search, favorites/collections, comparison, and CSS/Tailwind/JSON export. Clipboard export requires HTTPS or localhost.

The optional .claude/skills/design-system procedure and matching command are separate from the gallery runtime. Read them only for agent-assisted style maintenance.
