# Johan Chereau — Portfolio

Bilingual personal portfolio built from scratch around a product-first presentation: selected work, case studies, professional experience, web/mobile/software capabilities and contact.

## Stack

- Astro 7, static-first
- TypeScript
- Tailwind CSS 4 through the Vite plugin
- MDX + Astro Content Collections
- React renderer used only at build time for `tech-stack-icons` SVG components — no client-side React hydration
- Tech Stack Icons for the technology/design marks
- Explicit `/fr/` and `/en/` routes
- Sitemap, `robots.txt`, `llms.txt`, canonical URLs and `hreflang`
- JSON-LD structured data for the person, website and project pages

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

Production build:

```bash
npm run build
npm run preview
```

## Contact form

Copy `.env.example` to `.env` and provide a Web3Forms access key:

```bash
PUBLIC_WEB3FORMS_KEY=your_key
```

If the key is absent, the form falls back to a `mailto:` message targeting `contact@johan-chereau.com` rather than exposing a form key in the repository.

## Projects & i18n

Case studies live in:

```text
src/content/projects/
├── fr/
│   ├── ctcr-trainer.mdx
│   └── cosmify.mdx
└── en/
    ├── ctcr-trainer.mdx
    └── cosmify.mdx
```

Each entry has a `projectId` used for its public URL. **Do not rename this field to `slug`.** Astro's `glob()` content loader treats frontmatter `slug` as the content entry ID; using the same slug for FR and EN therefore creates a duplicate ID. The localized files instead keep unique collection IDs (`fr/...`, `en/...`) while deliberately sharing the same `projectId` route segment.

Current featured work:

- **CTCR Trainer** — EdTech / web application
- **Cosmify** — desktop product

The project detail design intentionally keeps the portfolio-native CSS product mockups and adds a separate gallery of real product captures. The transparent WebP masters live under `public/projects/<projectId>/`, so the portfolio can compose them on its own dark/light surfaces without baking a marketing background into the image.

Project metadata also owns external links (`links.github` and optional `links.live`), which are rendered as primary actions in the case-study hero and reused in structured data.

## Experience

The homepage highlights three complementary software/product contexts:

- **SNCF** — autonomous development of internal mechanical sizing tools for railway axles, directly with end users;
- **Dotscreen** — maintenance and evolution of RTBF Auvio across Smart TV, PS4, PS5 and Web as part of a team;
- **Dawan** — collaborative product design for an internal process-mapping solution, including research, wireframes, Figma prototypes and drag-and-drop editor concepts.

The Auvio scale badge references a RTBF 2022 publication documenting more than four million active accounts.

## SEO & discoverability

The project includes:

- localized titles and descriptions;
- canonical URLs and FR/EN `hreflang` links;
- OpenGraph and Twitter metadata;
- project-specific 1200×630 social cards;
- sitemap generation;
- `robots.txt`;
- `llms.txt` + `llms-full.txt` with canonical project/context links;
- Person, WebSite, WebPage, SoftwareApplication and BreadcrumbList structured data;
- semantic HTML and a no-index 404 page.

## Accessibility & performance

- static HTML by default;
- no app-wide hydration and no client React runtime for the icon grid;
- keyboard focus states and skip link;
- subtle IntersectionObserver reveal motion with a no-JS/reduced-motion safe fallback;
- accessible form labels and decorative mockups kept out of the accessibility tree;
- responsive layouts from mobile to large desktop;
- local brand assets for Johan, SNCF, Dotscreen and Dawan;
- SVG + PNG favicons, Apple touch icon and web app manifest;
- dark and light themes with dedicated accent contrast.

## Design direction

Dark-first, technical and slightly spatial, with a restrained iridescent accent. The current hero intentionally uses the SVG logo without Three.js because it already works well visually; a 3D variant can be tested later as an optional enhancement rather than a dependency of the design.
