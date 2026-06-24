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

Featured project content lives in `data/projects.ts`. Each project has both an English (`description`) and Japanese (`descriptionJa`) description.

Keep the portfolio focused on these four repositories unless the site strategy changes:

- `novelpilot`
- `qisquiz`
- `musiq`
- `AlphaQuoridor`

To add a live demo later, add a `liveUrl` field to a project:

```ts
{
  name: "NovelPilot",
  repositoryName: "novelpilot",
  description: "...",
  descriptionJa: "...",
  tags: ["AI", "Writing Tool"],
  liveUrl: "https://example.com"
}
```

## Updating Skills

Skill groups live in `data/skills.ts`. Each group has an English `name` and a Japanese `nameJa`.

## Updating Translations

All other UI text (hero, about, section headers, contact links, etc.) lives in `data/translations.ts`, organised by locale (`en` / `ja`).

