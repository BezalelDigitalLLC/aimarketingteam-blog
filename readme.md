# AI Marketing Team Blog

Guides and tutorials for modern digital marketing — auto-published from client work by the AI Marketing Team agent system.

## Setup

```bash
npm install
npm run dev       # Local dev server
npm run build     # Production build
npm run preview   # Preview production build
```

## Configuration

Edit `blog.config.json` to customize author info, agency branding, and site metadata.

## Publishing

Articles are published automatically by the AI Marketing Team agents via the publish script:

```bash
npx tsx ~/AIMarketingTeam/scripts/publish.ts \
  --type guide \
  --source ./path/to/article.md \
  --title "Article Title" \
  --tags tag1,tag2 \
  --category analytics \
  --description "Short description" \
  --agent agent-name \
  --campaign campaign-name
```

## Deployment

Deploys automatically to GitHub Pages on push to `main` via GitHub Actions.

Custom domain: `docs.bezaleldigital.com`
