---
name: design-system
description: Create or revise a style in the Lobbi static design gallery, including its metadata, navigation, and export controls.
---

# Gallery style maintenance

Read the root [repository contracts](../../../AGENTS.md). Use `index.html` and the chosen `style-*.html` page as the style and token sources; this repository has no separate token package.

For a new style, select an unused numeric ID and add its filename and metadata to the gallery. Match the existing metadata fields, including blend percentages, `temp`/`formality` on a 1–10 scale, tags, preview, and `perfectFor`. Preserve existing IDs because browser collections store them.

Use an existing page for navigation and export structure, while giving the new page its own typography, palette, and layout. Include representative components such as navigation, metrics, cards, tables, forms, buttons, and badges as appropriate to the style. Keep readable contrast, visible focus, touch access, and reduced-motion behavior.

Review `scripts/generate-data-files.js` for derived JSON and `scripts/generate-thumbnails.js` for previews. Older generators have hard-coded style limits; inspect their coverage before running them. Verify the resulting links, data, and thumbnail, then check the page at mobile and desktop widths and exercise its token export.
