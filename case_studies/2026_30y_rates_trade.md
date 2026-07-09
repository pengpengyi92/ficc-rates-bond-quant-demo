# 2026 30Y Long-Duration Rates Trade Case Study

This case study simulates a long-duration China government bond position using
approximate yield levels from March 2026 to early July 2026.

It is a public-safe educational simulation, not a real trade record.

## Scenario

```text
Position Notional: 10 billion RMB
Trade Direction: Long 30Y China government bond
Period: around 2026-03-20 to 2026-07-09
```

Reference yield levels:

| Date / Period | 10Y CGB Yield | 30Y CGB Yield |
|---|---:|---:|
| Around 2026-03-20 | 1.83% | 2.38% |
| Around 2026-07-09 | 1.7376% | 2.2515% |

Approximate yield changes:

| Maturity | Yield Change |
|---|---:|
| 10Y | about -9.2bp |
| 30Y | about -12.9bp |

## Method

Assumption:

```text
30Y modified duration: 19
Yield change: -12.85bp = -0.001285
Notional: 10 billion RMB
```

Use the first-order duration approximation:

```text
Price Change ~= -Modified Duration x Yield Change
PnL ~= Notional x Price Change
```

Approximate result:

```text
Price Change ~= -19 x (-0.001285)
Price Change ~= 2.4415%
PnL ~= 10,000,000,000 x 0.024415
PnL ~= 244.15 million RMB
```

## Interpretation

The 30Y bond has much higher duration. A yield decline that looks small in basis
points can create a large price and P&L movement when the position notional is
large.

This case is useful for understanding:

- long-duration exposure
- rate-down environments
- why ultra-long government bonds are highly sensitive
- how duration converts yield moves into approximate price moves
- why duration management matters in FICC rates portfolios

## Limits

This simplified simulation ignores:

- convexity adjustment
- carry and roll-down
- repo funding
- transaction costs
- liquidity and execution
- futures or swap hedges
- mark-to-market conventions

The purpose is to build intuition, not to reconstruct a production-grade trading
book.
