# Version Log

This project uses milestone versions. Small changes are tracked in Git commit
history, while this file records visible project capability milestones.

## V0.8 - Rates Bond Quant Rename and FICC Quant Lab Roadmap

Date: 2026-07-17

Status: Current

Completed:

- renamed the public project from `FICC Rates Bond Quant` to `Rates Bond Quant`
- prepared the GitHub repository rename to `pengpengyi92/rates-bond-quant`
- changed the Python distribution name to `rates-bond-quant`
- changed the frontend package name to `rates-bond-quant-frontend`
- retained the `ficc_rates_bond_quant` Python import path for compatibility
- documented the FICC Quant Lab module roadmap and repository creation gates
- retained the existing Cloudflare Pages hostname as a stable public URL

## V0.7 - Cloudflare Pages Deployment Ready

Date: 2026-07-10

Status: Current

Completed:

- configured Next.js static export for Cloudflare Pages
- added `npm run build:cloudflare`
- added Node 20 runtime marker through `frontend/.nvmrc`
- added Cloudflare Pages deployment guide
- added README deployment settings

Deployment settings:

```text
Root directory: frontend
Build command: npm run build:cloudflare
Build output directory: out
NODE_VERSION: 20
```

## V0.6 - Real Market Case Studies

Date: 2026-07-10

Status: Completed

Completed:

- 2026 China government bond YTD case study
- 2026 30Y long-duration rates trade case study
- large-notional position simulation framework
- project log for meaningful milestone updates
- README case-study section

Key insight:

```text
Yield move size matters, but duration-adjusted exposure matters more.
```

Planned follow-up:

- real-market notebook implementation
- P&L by maturity visualization
- historical yield curve chart
- dashboard integration for real-market cases

## V0.5 - Interactive Web Dashboard

Date: 2026-07-10

Status: Completed

Completed:

- FastAPI backend scaffold
- TypeScript / Next.js frontend scaffold
- interactive bond P&L dashboard
- maturity comparison chart
- duration and convexity visualization
- teaching image asset for the web dashboard
- README web demo section

## V0.4 - TypeScript Frontend

Date: 2026-07-10

Completed:

- frontend project structure
- dashboard page
- input panel
- result table
- P&L chart component
- maturity comparison chart component
- frontend bond math mirror for immediate local interaction

## V0.3 - FastAPI Backend

Date: 2026-07-10

Completed:

- FastAPI app entrypoint
- Pydantic request and response schemas
- `POST /api/calculate`
- `GET /api/scenarios`
- backend README and dependency list

## V0.2 - Core Quant Engine

Date: 2026-07-10

Completed:

- fixed-coupon bond cash-flow generation
- bond pricing
- Macaulay duration
- modified duration
- convexity
- parallel yield-shock scenarios
- position P&L estimation
- multi-maturity comparison
- unit tests

## V0.1 - Initial Public-Safe Project

Date: 2026-07-10

Completed:

- repository structure
- public-safe boundary
- README
- notes and system design documents
- demo script and notebook scaffold
- sample output report
- MIT License
- project icon

## V1.0 - First Stable Public Release

Status: Planned

Target criteria:

- complete documentation
- tested backend API
- verified frontend build
- stable public demo workflow
- public-safe example data only
- no proprietary or employer-specific materials
