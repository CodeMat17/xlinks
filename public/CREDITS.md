# Image credits

| File | Source | Licence |
| --- | --- | --- |
| `hero-graduate.jpg` | [Pexels photo 10554201](https://www.pexels.com/photo/smiling-woman-in-glasses-in-graduation-gown-sitting-with-bookcase-in-background-10554201/) by Josiah Matthew | [Pexels License](https://www.pexels.com/license/) — free for commercial use, no attribution required (credited here as good practice) |
| `team_with_vpresident.jpg` | Xlinks (own photograph) | © Xlinks Educational and Travel Consult |
| `xlinks_logo.webp`, `xlinks_logo.jpg`, `xlinks_fav_logo.png` | Xlinks brand assets | © Xlinks Educational and Travel Consult |
| `xlinks_video.mp4` | Xlinks (own footage) | © Xlinks Educational and Travel Consult |

## News article images

Articles in `app/news/data.ts` each reference a `photoUrl` under
`/images/news/`. Those files are **not** in the repository, so
`components/ArticleCover.tsx` draws an on-brand generated cover instead.

To use a real photo for an article, drop a file at exactly the `photoUrl`
path given in `data.ts` — for example `public/images/news/study-uk-2025.jpg`.
The cover component detects it at build time and switches over automatically;
no code change is needed.
