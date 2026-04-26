# Synergy AI Landing

[![Deploy to GitHub Pages](https://github.com/silkking/landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/silkking/landing/actions/workflows/deploy.yml)

Landing page built with Next.js + TypeScript + Tailwind.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Files added for deployment

- `.github/workflows/deploy.yml`: builds and deploys `out` to GitHub Pages
- `next.config.ts`: static export mode and GitHub Pages path handling

### One-time GitHub setup

1. Go to your repository settings.
2. Open **Pages**.
3. Set **Source** to **GitHub Actions**.

After that, each push to `main` triggers deployment.

## Production build (static export)

```bash
npm run build
```

The static site is generated in the `out/` folder.
