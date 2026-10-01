# ByteSpace – React

React + Vite rebuild of the "ByteSpace New Check website" Figma file.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Routes
| Path | Screen |
| --- | --- |
| `/` | Home |
| `/login`, `/register` | Auth |
| `/search` | Course search (filters, tabs, pagination) |
| `/course/:id`, `/course/:id/lessons`, `/course/:id/reviews` | Course detail tabs |
| `/creator` | Creator profile |
| `*` | 404 |

## Structure
- `src/styles/tokens.css` – colors, fonts, radii extracted from Figma
- `src/data/index.js` – all copy, images and mock data
- `src/components/` – Header, Footer, CourseCard, Shape3D, etc.
- `src/pages/` – one file per screen
- `public/images/` – images exported from the Figma file (webp)

## Notes
- Fonts load from Google Fonts (Poppins) and Fontshare (Satoshi, Clash Display).
- Partner logos are placeholders; Module 3 description is placeholder text (not in the design).
- Login/Register have no backend – they validate and redirect.
