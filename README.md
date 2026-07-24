# Doraking Portfolio

A focused personal developer and research portfolio for Doraking / [@dorakingx](https://github.com/dorakingx).

This project is intended for the GitHub Pages user-site repository:

```text
dorakingx.github.io
```

Because this is a GitHub Pages user site, the published URL is:

```text
https://dorakingx.github.io/
```

The site is built with Next.js, TypeScript, Tailwind CSS, and static export. It has no backend, database, or paid external service dependency.

## Language Support

The portfolio is available in English and Japanese as separate static routes.

| Language | URL |
|----------|-----|
| English  | `/en/` |
| Japanese | `/ja/` |

The root URL (`/`) is a lightweight redirect page. It checks `localStorage` for a previously saved preference first:

- If `portfolio-language` is set to `en`, it redirects to `/en/`.
- If `portfolio-language` is set to `ja`, it redirects to `/ja/`.
- If no preference is saved, the browser language (`navigator.language`) is checked. A browser language starting with `ja` redirects to `/ja/`; all others redirect to `/en/`. The detected language is saved to `localStorage` before redirecting.

`window.location.replace()` is used for all redirects so the root URL is not added to browser history.

A language switcher in the site header lets users switch between English and Japanese at any time. The selection is saved to `localStorage` under the key `portfolio-language` and the user is taken to the equivalent section in the chosen language (e.g. `/en/#projects` → `/ja/#projects`).

To clear the saved preference and trigger browser-language detection again:

```js
localStorage.removeItem("portfolio-language")
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The dev server serves:

- `http://localhost:3000/` — language redirect page
- `http://localhost:3000/en/` — English portfolio
- `http://localhost:3000/ja/` — Japanese portfolio

## Production Build

```bash
npm run build
```

The static export is written to `out/`. The following files are generated:

- `out/index.html` — language redirect
- `out/en/index.html` — English portfolio
- `out/ja/index.html` — Japanese portfolio

## GitHub Pages Setup

1. Create a GitHub repository named `dorakingx.github.io`.
2. Push this project to that repository.
3. Go to Settings > Pages.
4. Set Source to GitHub Actions.
5. Push to `main` to deploy.

The included workflow builds the static Next.js export and deploys `out/` to GitHub Pages.

## Repository Name

Use `dorakingx.github.io` for this portfolio website. Do not use a repository simply named `dorakingx` for the website; that repository is better suited for the GitHub profile README.

## Updating Projects

Selected Projects uses an explicit allowlist. It never discovers or displays every public repository automatically.

The display order and repository allowlist live in:

```text
data/selected-repositories.ts
```

The initial selection is:

- `novelpilot`
- `qisquiz`
- `musiq`
- `AlphaQuoridor`

Human-authored portfolio content lives in:

```text
data/project-curation.ts
```

This file preserves:

- English and Japanese descriptions
- custom display names and tags
- custom icons/favicons
- optional live website URL overrides

GitHub API metadata is generated into:

```text
data/github-projects.generated.ts
```

The generated fields are repository name, owner, GitHub URL, GitHub description,
homepage URL, primary language, topics, star count, and last-updated timestamp.
Do not edit the generated file manually.

### Add a selected repository

1. Add the exact repository name to `selectedRepositoryNames` in
   `data/selected-repositories.ts`.
2. Add the matching English/Japanese curation entry to
   `data/project-curation.ts`.
3. Run:

```bash
npm run sync:github-projects
```

The sync script includes the repository only when it is public, owned by
`dorakingx`, and is not a fork, archived repository, or template.

### Remove a selected repository

1. Remove its name from `data/selected-repositories.ts`.
2. Remove its curation entry from `data/project-curation.ts`.
3. Run `npm run sync:github-projects`.

### Website buttons

The GitHub Repository button is always displayed. Visit Website is displayed
only when GitHub provides a valid HTTP(S) homepage or the curation entry provides
a valid `liveUrlOverride`.

### Automated metadata updates

`.github/workflows/sync-selected-repositories.yml` runs weekly and supports
manual dispatch. When generated metadata changes, it updates the dedicated
`automation/sync-selected-repositories` branch and opens a pull request. It
does not commit directly to `main`, create empty pull requests, or add newly
discovered repositories to the allowlist.

## Updating Skills

Skill groups live in `data/skills.ts`. Each group has an English `name` and a Japanese `nameJa`.

## Updating Translations

All other UI text (hero, about, section headers, contact links, etc.) lives in `data/translations.ts`, organised by locale (`en` / `ja`).
