# Cloudflare Pages Deployment

This project is prepared for Cloudflare Pages as a static Next.js export.

## Recommended Cloudflare Pages Settings

When creating a Pages project from GitHub, use:

```text
Repository: pengpengyi92/rates-bond-quant
Production branch: master
Root directory: frontend
Framework preset: Next.js
Build command: npm run build:cloudflare
Build output directory: out
```

Environment variables:

```text
NODE_VERSION = 20
```

## Why Static Export

The frontend is an educational dashboard that runs entirely in the browser.
It does not require server-side rendering or server actions.

Using Next.js static export keeps the deployment simple:

```text
Next.js source
-> npm run build:cloudflare
-> static export in out/
-> Cloudflare Pages CDN
```

## Local Build

From the repository root:

```powershell
cd frontend
npm install
npm run build:cloudflare
```

The static output is generated in:

```text
frontend/out/
```

## Cloudflare Dashboard Steps

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Create application.
4. Choose Pages.
5. Connect to Git.
6. Select `pengpengyi92/rates-bond-quant`.
7. Use the build settings above.
8. Save and deploy.

Cloudflare will provide a public `*.pages.dev` URL after the first successful
deployment.

The current production hostname remains:

```text
https://ficc-rates-bond-quant.pages.dev
```

The legacy hostname is intentionally retained so existing public links do not
break after the GitHub repository rename.

## Notes

- The FastAPI backend is not deployed on Cloudflare Pages in this setup.
- The frontend mirrors the quant logic locally for immediate interaction.
- A future version can deploy the backend separately through Cloudflare Workers,
  a Python hosting provider, or a container service.
