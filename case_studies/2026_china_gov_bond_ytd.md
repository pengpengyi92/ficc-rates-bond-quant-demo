# 2026 China Government Bond YTD Case Study

This case study uses approximate 2026 China government bond yield moves to
simulate large-notional fixed-income P&L.

It is a public-safe educational simulation. It does not use proprietary data,
client positions, employer materials, or live trading instructions.

## Scenario

```text
Position Notional: 10 billion RMB
Trade Direction: Long government bonds
Period: 2026 YTD to early July 2026
Maturities: 2Y / 5Y / 10Y
```

Approximate observed yield changes:

| Maturity | Yield Change |
|---|---:|
| 2Y | -13.8bp |
| 5Y | -18.6bp |
| 10Y | -11.3bp |

Assumed modified duration:

| Maturity | Modified Duration |
|---|---:|
| 2Y | 1.9 |
| 5Y | 4.6 |
| 10Y | 8.5 |

## Method

Use the first-order duration approximation:

```text
Price Change ~= -Modified Duration x Yield Change
PnL ~= Notional x Price Change
```

Yield change is expressed in decimal form. For example, `-13.8bp = -0.00138`.

## Approximate Simulation Result

| Maturity | Modified Duration | Yield Change | Price Change | Approx. P&L |
|---|---:|---:|---:|---:|
| 2Y | 1.9 | -13.8bp | 0.2622% | 26.22 million RMB |
| 5Y | 4.6 | -18.6bp | 0.8556% | 85.56 million RMB |
| 10Y | 8.5 | -11.3bp | 0.9605% | 96.05 million RMB |

## Interpretation

The 5Y yield declined more than the 10Y yield, but the 10Y simulated P&L is
higher because its duration assumption is much larger.

Key takeaway:

```text
Yield move size matters, but duration-adjusted exposure matters more.
```

## Limits

This is a simplified educational simulation.

It ignores:

- carry and roll-down
- coupon accrual
- transaction costs
- repo funding
- bid-ask spread
- convexity adjustment
- curve shape changes beyond the selected maturity points
- real portfolio execution constraints

The purpose is to connect duration theory with a realistic market-move example.
