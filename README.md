# NFC digital profile

Static Next.js 15 profile for NFC tags and QR codes.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Optional: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` (defaults to `http://localhost:3000` for metadata).

## Quality checks

```bash
npm run ci
```

Produces a static site in `out/`. Preview it:

```bash
npm run preview:static
```

(`npm start` is for non-export Node servers only; this project uses static export.)

## Deploy to GitHub Pages

1. Create a repository under [AkarshaJain](https://github.com/AkarshaJain) (e.g. `nfc-profile`).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Push this repo to the `main` (or `master`) branch. The workflow in `.github/workflows/deploy-pages.yml` will build and publish the `out/` folder.

The workflow sets:

- **Project site** (`https://akarshajain.github.io/<repo-name>/`): `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` automatically.
- **User site** (repo name exactly `<username>.github.io`): site URL with no base path.

Encode **the live profile URL** (copy from the browser after deploy) on your NFC tag.

### QR and vCard URLs

The QR code and “Save contact” vCard use **`window.location`** so they always match the URL you’re viewing (local, preview, or GitHub Pages) without rebuilding.

### Git identity (optional)

```bash
git config user.name "AkarshaJain"
git config user.email "akarshajain888@gmail.com"
```

## Content

Edit `src/lib/profile.ts`. Put `profile.png` and your résumé PDF in `public/`.
