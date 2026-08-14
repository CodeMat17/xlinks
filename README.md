# Xlinks Educational and Travel Consult

Marketing site for a study-abroad and travel consultancy in Port Harcourt,
Nigeria. Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Set `RESEND_API_KEY` in `.env.local` for the contact form. Without it the API
route returns a 503 and the form tells the visitor to use WhatsApp or phone
instead of failing silently.

## How the code is organised

| Path | What lives there |
| --- | --- |
| `lib/site.ts` | Single source of truth for the address, phone, email, socials, destination list and service list. **Change contact details here only** — metadata, JSON-LD, footer, contact page and WhatsApp links all read from it. |
| `app/globals.css` | The design system: colour ramps, semantic tokens, fluid type scale, elevation, and the `.btn-*` / `.card` / `.shell` / `.section` component classes. |
| `components/PageHero.tsx` | Shared header for every non-home page. Renders the visible breadcrumb and its `BreadcrumbList` JSON-LD from one array. |
| `components/ArticleCover.tsx` | Article artwork. Uses a real photo when the file exists, otherwise draws a generated cover. See `public/CREDITS.md`. |
| `app/news/data.ts` | All article content. Adding an entry automatically adds the route, the sitemap URL and the structured data. |

## Design system

Three ramps, used deliberately:

- **`brand-*` (emerald)** — identity. Headings, links, icon chips, surfaces.
- **`support-*` (teal)** — supporting tints inside gradients and glows.
- **`accent-*` (amber)** — reserved for the single most important action on a
  screen. This is the only warm colour on the site, which is what makes the
  primary button impossible to miss. It also ties back to the gold in the
  Xlinks logo mark. **Do not use it for decoration.**

Semantic text tokens (`text-ink`, `text-ink-muted`, `text-ink-subtle`) and
surface tokens (`bg-canvas`, `bg-surface`, `bg-surface-raised`) handle light
and dark mode automatically. Prefer them over raw Tailwind greys — every
token pairing is verified at WCAG AA or better in both themes.

Typography: **Plus Jakarta Sans** for headings and UI (`font-display`),
**Nunito** for body copy. Both are variable fonts loaded through `next/font`,
so they are self-hosted, subset, and metric-matched to their fallbacks.

## Conventions worth keeping

- **Server components by default.** Only `Navbar`, `Contact` and `ShareButton`
  are client components. Everything else renders to static HTML, which is why
  the site ships no animation library.
- **Reveal-on-scroll is CSS**, via the `.reveal` class and
  `animation-timeline: view()`. It degrades to "always visible" where
  unsupported and is disabled entirely under `prefers-reduced-motion`.
- **Every claim on the site should be one you can evidence.** Specific
  performance statistics were deliberately removed during the rebuild — see
  the comment at the top of `components/VisaProcessingContent.tsx`.
- **Testimonials are not marked up as `schema.org/Review`.** Self-serving
  review markup that cannot be independently verified risks a manual penalty.

## Deployment

Netlify, via `@netlify/plugin-nextjs` (`netlify.toml`). Security headers,
CSP and image formats are configured in `next.config.ts`.
