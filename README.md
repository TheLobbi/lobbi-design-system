# Lobbi Design System

A static gallery of 255 visual styles for association-management products. Browse by category or use case, compare styles, save favorites and collections in your browser, and export CSS variables, Tailwind configuration, or JSON tokens.

[Open the gallery](https://markus41.github.io/lobbi-design-system) or open [`index.html`](index.html) locally. A static HTTP server is needed for fetched data; clipboard export requires HTTPS or localhost. There is no build step.

## Maintaining the gallery

- [`AGENTS.md`](AGENTS.md): source ownership, compatibility contracts, and validation.
- [`index.html`](index.html): gallery metadata and interactions.
- [`data/`](data/): related styles, palettes, and use-case mappings.
- [`scripts/`](scripts/): generators that update checked-in pages and data.
- [Related-style maintenance](scripts/SIMILAR-STYLES-README.md).

Each `style-*.html` file is a standalone example. Preserve its distinct aesthetic and existing navigation when making changes. Favorites and collections live in browser local storage; there is no account service or cross-device sync.

## License

Proprietary — The Lobbi. Contact the team for licensing or customization.
