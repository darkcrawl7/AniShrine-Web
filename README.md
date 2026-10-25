# AniShrine Website

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Where to put your files
- Logos: `public/anishrine_wordmark.png` and `public/anishrine_emblem.png` (already copied from your uploads).
- APK download link and release info: `src/config.ts`. Leave `APK_DOWNLOAD_URL` empty to show "Coming soon".
- Feature status (Available / In development): `src/sections/Features.tsx`.
- Privacy policy text: `src/pages/PrivacyPage.tsx`. Set `PRIVACY_DRAFT` to `false` in `config.ts` only after review.

## Run locally
```bash
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).

## Build
```bash
npm run build      # type-checks, then builds to dist/
npm run preview    # serves dist/ locally
```

## Free deployment (Cloudflare Pages)
1. Push this folder to a free GitHub repository.
2. In Cloudflare, go to Workers & Pages → Create → Pages → Connect to Git, and pick the repo.
3. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Cloudflare gives you a free `*.pages.dev` subdomain over HTTPS.

Do not assume a custom domain. Google Play Protect warnings are not removed by having a website.
