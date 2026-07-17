# FICC Quant Lab Roadmap

## Purpose

FICC Quant Lab is a workspace for small, defensible, public-safe quantitative
finance repositories. Each repository should implement one clear FICC domain
problem with code, tests, documentation, examples, and an explicit model-risk
boundary.

The Lab is a portfolio architecture, not a claim that every FICC market has
already been implemented.

## Repository Map

| Repository | Status | Core question |
|---|---|---|
| `rates-bond-quant` | Active, V0.8 | How do cash flows, yields, duration, convexity, and rate shocks determine bond value and P&L? |
| `credit-bond-quant` | Planned | How do risk-free rates, credit spreads, default probability, recovery, and migration scenarios affect credit-bond value and risk? |
| `fx-quant` | Planned | How do spot, forward points, interest-rate differentials, carry, and FX shocks determine forward value and P&L? |

## Shared Engineering Contract

Every public repository should contain:

```text
domain package
tests
examples
docs
configuration
CI
version log
public-safe boundary
minimal runnable interface
```

Every repository should support this delivery loop:

```text
Issue
-> implementation
-> unit and integration tests
-> review
-> version bump
-> changelog
-> release
-> deployment or runnable artifact
-> feedback
-> next Issue
```

## Repository Creation Gate

Do not create a public repository from a title alone. A new repository becomes
public only when it has:

1. one implemented end-to-end calculation,
2. at least three meaningful tests,
3. one runnable example,
4. a scope and non-scope statement,
5. a public-safe data policy,
6. a short architecture document,
7. a first release target.

Until those conditions are met, the idea stays in this roadmap.

## Rates Bond Quant

Current scope:

- fixed-coupon cash flows and pricing,
- Macaulay and modified duration,
- convexity,
- parallel rate shocks,
- position P&L,
- maturity comparison,
- FastAPI interface,
- Next.js dashboard,
- Cloudflare Pages deployment.

V1.0 gate:

- add DV01 / PVBP,
- add yield-curve representation,
- add key-rate or non-parallel curve scenarios,
- strengthen API and integration tests,
- add CI and release automation,
- verify installation and README quick start from a clean environment.

## Credit Bond Quant

First vertical slice:

```text
risk-free discount curve
+ credit spread
+ default probability
+ recovery assumption
-> credit-bond price
-> spread duration / CS01
-> scenario P&L
```

The first public version should use synthetic or openly licensed inputs and
must not imply production credit underwriting or live investment advice.

## FX Quant

First vertical slice:

```text
spot FX
+ domestic and foreign rates
-> forward points
-> outright forward
-> carry
-> rate and FX scenario P&L
```

The first public version should state settlement conventions, quote direction,
day-count assumptions, and the limits of covered-interest-parity examples.

## Portfolio Narrative

Defensible description:

> FICC Quant Lab is a growing collection of public-safe quantitative finance
> repositories. Rates Bond Quant is the first implemented module; Credit and FX
> remain roadmap items until they meet the same code, test, documentation, and
> release standards.

Do not claim:

```text
complete multi-asset trading platform
production pricing library
live portfolio management system
validated investment strategy
```
