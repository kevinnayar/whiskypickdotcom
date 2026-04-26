# WhiskyPick

Community whisky ratings site. Built with React + Vike (SSR), Tailwind CSS, and deployed on Cloudflare Pages.

## Stack

- **Framework:** [Vike](https://vike.dev) (React SSR, pre-rendered)
- **Styling:** Custom CSS
- **Hosting:** Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Builds to `dist/client/` — 104 pre-rendered HTML pages (73 whiskies, 28 users, 3 index pages).

## Data

All data lives in `src/data/`:

- `whiskies.ts` — whisky entries with ratings per user
- `users.ts` — user id → display name map

Bottle images in `public/images/whiskies/`, user avatars in `public/images/users/`.

## Theming

To change the primary color, edit the `--primary` variable in `src/styles/globals.css`.
