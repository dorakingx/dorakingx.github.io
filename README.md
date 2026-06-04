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

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The static export is written to `out/`.

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

Featured project content lives in `data/projects.ts`.

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
  tags: ["AI", "Writing Tool"],
  liveUrl: "https://example.com"
}
```

## Updating Skills

Skill groups live in `data/skills.ts`.
