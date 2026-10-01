# Related-style maintenance

The gallery's style tags and filenames live in [`index.html`](../index.html). [`generate-data-files.js`](generate-data-files.js) derives the JSON mapping in [`data/similar-styles.json`](../data/similar-styles.json).

[`add-similar-styles.js`](add-similar-styles.js) inserts related-style bars into HTML pages and skips pages already carrying its marker. [`add-collapsible-similar-styles.js`](add-collapsible-similar-styles.js) updates that older markup. Read their matching and insertion logic before running them; the checked-in HTML is the shipped product.

After changing tags or adding a style, review derived data and links on the affected pages. Check keyboard focus and whether the related-style bar overlaps page content at mobile widths. The scripts' ID ranges and existing-page markers determine coverage; a successful exit does not prove that every style was updated.
