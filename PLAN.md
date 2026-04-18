# WhiskyPick v2 — Implementation Plan

## Tech Stack

| Concern | Choice | Rationale |
|---|---|---|
| SSR framework | **Vike** (vite-plugin-ssr) | SSR without a meta-framework; has a first-class Cloudflare adapter; Vite-native |
| UI | React + Tailwind + shadcn/ui | As specified |
| Language | TypeScript throughout | Data is already typed |
| Hosting | Cloudflare Pages | Free tier, global CDN, static + edge SSR via Workers |
| Data | `.ts` files imported directly | No DB needed; build-time data |
| Images | `/public/images/whiskies/` | Served as static assets by Cloudflare Pages |

---

## Project Structure

```
whiskypick/
├── public/
│   └── images/
│       └── whiskies/          ← downloaded bottle images
├── src/
│   ├── data/
│   │   ├── whiskies.ts
│   │   └── users.ts
│   ├── utils/
│   │   └── ratings.ts         ← score calc, sorting, filtering helpers
│   ├── components/
│   │   ├── layout/
│   │   │   └── NavBar.tsx     ← includes light/dark mode toggle
│   │   ├── whisky/
│   │   │   ├── WhiskyCard.tsx
│   │   │   ├── WhiskyGrid.tsx
│   │   │   └── RatingsChart.tsx
│   │   └── user/
│   │       └── UserCard.tsx
│   └── pages/
│       ├── index.tsx           ← homepage
│       ├── whiskies/
│       │   ├── index.tsx       ← full directory
│       │   └── @id.tsx         ← detail page
│       └── users/
│           ├── index.tsx       ← user directory
│           └── @id.tsx         ← user profile
├── vite.config.ts
└── wrangler.toml               ← Cloudflare Pages config
```

---

## Theming

Use CSS custom properties with Tailwind's `darkMode: 'class'` strategy. Retheming is a one-line CSS change.

**`tailwind.config.ts`**
```ts
theme: {
  extend: {
    colors: {
      primary: 'hsl(var(--color-primary))',
      'primary-foreground': 'hsl(var(--color-primary-foreground))',
    },
  },
}
```

**`globals.css`**
```css
:root {
  --color-primary: 45 100% 50%;       /* swap this one line to recolor everything */
  --color-primary-foreground: 0 0% 0%;
}

.dark {
  --color-primary: 45 100% 50%;
  --color-primary-foreground: 0 0% 0%;
  /* background, foreground, card colors flipped here */
}
```

All components use `bg-primary`, `text-primary`, `border-primary` — never a literal color name.

**Light/Dark Mode Toggle**
- Sun/moon icon in NavBar (shadcn `<Button variant="ghost">`)
- Toggles `dark` class on `<html>`
- Persists preference to `localStorage`
- Inline script in `<head>` reads `localStorage` before first paint to avoid flash of wrong theme

---

## Data & Scoring

**Score formula:** `avg(ratings) / 5 * 100` → percentage displayed on cards.

**Age:** `age: 0` means NAS (no age statement). Display `"NAS"` on detail page; omit age on cards.

**Category taxonomy** (derived from the `type` field):

| `type` value | Display label |
|---|---|
| `Bourbon` | Top Bourbons |
| `Irish Whisky` | Top Irish Whiskies |
| `Rye` | Top Rye Whiskies |
| `Scotch` | Top Scotches |
| `Whisky` | Top Single Malts |

**Sorting options** (needed on directory page): score (default), age, name, price.

---

## Pages & Routes

### `/` — Homepage
- Sticky NavBar: logo left, Home / Directory / Users icons + dark mode toggle right
- One horizontal section per category, each showing top 5 by score
- "See All" button at the bottom of each section → `/whiskies?type=bourbon`
- 5-column responsive grid (collapse to 2–3 on mobile)

### `/whiskies` — Full Directory
- Same 5-col grid, all whiskies
- Pagination (simpler than infinite scroll with SSR)
- Sort controls: score / age / name / price
- Optional filter by type

### `/whiskies/:id` — Detail Page
- Circular hero image for bottle
- Metadata: brand, name, category, origin, age (or "NAS"), MSRP
- Aggregate score (large, prominent)
- Bar chart: each rater's score vs. the average (horizontal bars, shadcn `<Progress>` or thin custom chart)
- Link back to category section

### `/users` — User Directory
- Simple grid of `UserCard` (name + avatar placeholder)
- Search/filter by name

### `/users/:id` — User Profile
- Header: name, stats (how many whiskies rated, average score given)
- Grid of whiskies they've rated, sorted by their personal score
- Reuses `WhiskyCard` component

---

## Key Components

**`WhiskyCard`** — used everywhere
- Score badge (primary color, high-contrast, left side)
- Bottle thumbnail (top-left)
- Brand (bold) + Name (subheading)
- Links to `/whiskies/:id`

**`RatingsChart`** — detail page only
- Maps `ratings` object → sorted list of `{ user, score }` pairs
- Horizontal bar per rater, aggregate line overlaid

---

## Deployment

1. `vike` + `@cloudflare/workers-types` for SSR on the edge
2. `wrangler` for local dev (`wrangler pages dev`)
3. Deploy: `wrangler pages deploy dist/` or connect GitHub repo to Cloudflare Pages for CI
4. Static images served from `/public` — Cloudflare CDN handles caching

---

## Build Order

1. Scaffold Vike + Tailwind + shadcn setup
2. Configure theming (CSS custom properties, dark mode)
3. Import data files, implement `ratings.ts` helpers
4. `WhiskyCard` + `WhiskyGrid` components
5. Homepage (categories + top-5 sections)
6. `/whiskies` directory with sort/filter
7. `/whiskies/:id` detail + `RatingsChart`
8. `/users` + `/users/:id`
9. Cloudflare Pages config + deploy
