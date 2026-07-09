# Large-Notional Position Simulation Framework

This note defines a reusable framework for simulating large-notional rates bond
P&L with public-safe assumptions.

The examples in this repository currently use 10 billion RMB as the default
notional. The same framework can be scaled to 100 billion RMB to understand how
duration risk grows with position size.

## Core Formula

For a first-order approximation:

```text
Price Change ~= -Modified Duration x Yield Change
PnL ~= Notional x Price Change
```

With convexity:

```text
Price Change ~= -Modified Duration x Yield Change
              + 0.5 x Convexity x Yield Change^2
```

## Example Scaling

If a 10 billion RMB position has approximate P&L of 96 million RMB, then a 100
billion RMB position under the same assumptions has approximate P&L of:

```text
96 million RMB x 10 = 960 million RMB
```

This is linear scaling under the simplified first-order assumption.

## Why This Matters

Large-notional fixed-income portfolios can have very large mark-to-market
sensitivity even when yield movements are small.

The key risk drivers are:

- notional size
- modified duration
- yield movement
- curve point exposure
- convexity for larger moves
- execution and liquidity constraints

## Public-Safe Boundary

This framework is educational.

It does not include:

- real positions
- proprietary trade records
- client information
- internal risk limits
- live trade recommendations

The point is to understand the mechanics of duration-adjusted exposure.
