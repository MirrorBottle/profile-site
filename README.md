# Bayu Setiawan · Portfolio v3

A dark-only English/Japanese portfolio built with Next.js, TypeScript, Tailwind CSS, shadcn/ui primitives, and Magic UI's dock and blur-fade components. Local repository work; no hosting configuration was changed.

## Local development

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Use the language toggle, or link directly to `/?lang=ja` or `/?lang=en`. The selected language is remembered locally when browser storage is available. The document language changes with the content.

```sh
npm run typecheck
npm run verify:portfolio
npm run build
```

## Content

- `src/data/resume.tsx`: profile, employment, education, credentials, skills, contact links, and CV path.
- `src/data/projects.ts`: bilingual descriptions, featured selection, galleries, and additional projects.
- `src/data/legacy-projects.json`: 26 original v2 project records.
- `src/components/portfolio.tsx`: English/Japanese interface copy and homepage sections.
- `src/app/globals.css`: dark palette and shared styles.

The collection contains 33 entries: the original 26, six additional confirmed projects, and the KSP image archive. Six projects are featured. The full collection supports text search, category filters, and progressive loading. Project dialogs support keyboard dismissal and screenshot viewing. Blog routes and sample posts were removed.

## Preserved assets

99 images and PDF files were copied without modification from the locally available `origin/main` and `origin/v2` Git snapshots into `public/legacy/main` and `public/legacy/v2`. Existing v3 assets remain in place. Template-era images are retained as source material but are not presented as Bayu's projects.

`src/data/asset-manifest.json` records each source ref, commit, path, destination, byte count, and SHA-256 checksum. `npm run verify:portfolio` checks those checksums, bilingual project records, image paths, featured IDs, and the CV PDF. The import script can reproduce the migration while those Git refs remain available:

```sh
node scripts/import-legacy-assets.mjs
```

## Content still to refine

- The downloadable CV is the existing v2 PDF, labeled as the previous version. It has not been rewritten to match the 2026 profile.
- KSP has only an image and a minimal archive description; its full identity remains unconfirmed.
- Additional projects with no documented stack or dates intentionally omit those fields. Screenshot timestamps are not treated as project dates.
- Historical external project URLs are preserved from v2 and may no longer be available. No source-code link is inferred from a screenshot.
- Japanese translations are draft portfolio copy for review. Names and technical terms remain in their original form where appropriate.

## Verification for this implementation

Production build and TypeScript checks pass. The asset/catalog verifier passes for all 99 migrated files and 33 project records. The local homepage and CV respond with HTTP 200. A desktop screenshot showed the English homepage rendering. Automated browser interaction was unavailable, so mobile layout, language persistence, archive controls, and dialog keyboard behavior still need an interactive review.

## Credits

Based on Dillion Verma's Magic UI portfolio template. Original MIT license retained in `LICENSE`.
