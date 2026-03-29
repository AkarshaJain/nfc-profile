# nfc-profile

My digital profile page — built so people can tap an NFC tag or scan a QR code and land here without installing an app. Stack is **Next.js 15** + TypeScript + Tailwind; it exports to static HTML so I can host it on **GitHub Pages**.

Repo: [github.com/AkarshaJain/nfc-profile](https://github.com/AkarshaJain/nfc-profile)

---

### Run it locally

```bash
npm install
npm run dev
```

Then open [localhost:3000](http://localhost:3000). If you care about OG preview URLs matching your machine, copy `.env.example` → `.env.local` and tweak `NEXT_PUBLIC_SITE_URL` (I use `http://localhost:3000` for dev).

### Before pushing / sanity check

```bash
npm run ci
```

That runs lint + build and drops everything into `out/`. To poke at the static output:

```bash
npm run preview:static
```

Note: I’m using static export, so `npm start` isn’t really the path I use for this project.

---

### GitHub Pages

I wired up Actions so a push to `main` builds and deploys. On the repo: **Settings → Pages → Source: GitHub Actions** (if it isn’t already).

Live site (once the workflow is green): **https://akarshajain.github.io/nfc-profile/**

For my NFC sticker I encoded whatever URL the browser shows after deploy — that’s the one that has to match.

QR + the “Save contact” vCard both key off the **current page URL** in the browser, so they stay in sync whether I’m on localhost, a preview, or the real Pages URL without me redoing env vars every time.

---

### Editing my info

All the copy and links live in **`src/lib/profile.ts`**. Photo and résumé PDFs go in **`public/`** (I’m using `profile.png` + the ML résumé PDF).

---

— Akarsha
