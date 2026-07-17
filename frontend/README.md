# TypeScript Frontend

This folder contains the interactive web dashboard for Rates Bond Quant.

## Run

```powershell
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build For Cloudflare Pages

```powershell
npm install
npm run build:cloudflare
```

Cloudflare Pages settings:

```text
Root directory: frontend
Build command: npm run build:cloudflare
Build output directory: out
Environment variable: NODE_VERSION = 20
```

## Scope

The frontend provides a local interactive dashboard for:

- 10 billion RMB default notional scenario
- configurable yield shock
- P&L by maturity chart
- duration and convexity comparison chart
- educational explanation of rate sensitivity

The frontend calculation mirrors the Python engine for immediate local interaction. The
FastAPI backend remains the API layer for full-stack integration.
