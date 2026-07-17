# Rates Bond Quant Report

This report uses synthetic educational assumptions.

Common setup:

- coupon rate: 2.5%
- yield-to-maturity: 2.5%
- notional face value per bond: 1,000,000,000
- maturities: 1Y, 3Y, 5Y, 10Y, 30Y

## Scenario: 10bp rate cut

| Bond | Scenario | Price | Mod Duration | Convexity | Price Change | PnL |
|---|---:|---:|---:|---:|---:|---:|
| 1Y bond | 10bp rate cut | 100.0000 | 0.9816 | 1.4511 | 0.0982 | 982,283.26 |
| 3Y bond | 10bp rate cut | 100.0000 | 2.8730 | 9.8286 | 0.2878 | 2,877,919.25 |
| 5Y bond | 10bp rate cut | 100.0000 | 4.6728 | 24.9101 | 0.4685 | 4,685,217.98 |
| 10Y bond | 10bp rate cut | 100.0000 | 8.7997 | 87.6696 | 0.8843 | 8,843,492.86 |
| 30Y bond | 10bp rate cut | 100.0000 | 21.0173 | 556.4827 | 2.1296 | 21,295,537.24 |

## Scenario: 10bp rate hike

| Bond | Scenario | Price | Mod Duration | Convexity | Price Change | PnL |
|---|---:|---:|---:|---:|---:|---:|
| 1Y bond | 10bp rate hike | 100.0000 | 0.9816 | 1.4511 | -0.0981 | -980,832.11 |
| 3Y bond | 10bp rate hike | 100.0000 | 2.8730 | 9.8286 | -0.2868 | -2,868,090.67 |
| 5Y bond | 10bp rate hike | 100.0000 | 4.6728 | 24.9101 | -0.4660 | -4,660,307.93 |
| 10Y bond | 10bp rate hike | 100.0000 | 8.7997 | 87.6696 | -0.8756 | -8,755,823.27 |
| 30Y bond | 10bp rate hike | 100.0000 | 21.0173 | 556.4827 | -2.0739 | -20,739,054.55 |

## Scenario: 50bp rate cut

| Bond | Scenario | Price | Mod Duration | Convexity | Price Change | PnL |
|---|---:|---:|---:|---:|---:|---:|
| 1Y bond | 50bp rate cut | 100.0000 | 0.9816 | 1.4511 | 0.4926 | 4,925,927.81 |
| 3Y bond | 50bp rate cut | 100.0000 | 2.8730 | 9.8286 | 1.4488 | 14,487,881.98 |
| 5Y bond | 50bp rate cut | 100.0000 | 4.6728 | 24.9101 | 2.3675 | 23,675,190.43 |
| 10Y bond | 50bp rate cut | 100.0000 | 8.7997 | 87.6696 | 4.5094 | 45,094,160.27 |
| 30Y bond | 50bp rate cut | 100.0000 | 21.0173 | 556.4827 | 11.2043 | 112,042,513.09 |

## Scenario: 50bp rate hike

| Bond | Scenario | Price | Mod Duration | Convexity | Price Change | PnL |
|---|---:|---:|---:|---:|---:|---:|
| 1Y bond | 50bp rate hike | 100.0000 | 0.9816 | 1.4511 | -0.4890 | -4,889,649.09 |
| 3Y bond | 50bp rate hike | 100.0000 | 2.8730 | 9.8286 | -1.4242 | -14,242,167.62 |
| 5Y bond | 50bp rate hike | 100.0000 | 4.6728 | 24.9101 | -2.3052 | -23,052,439.11 |
| 10Y bond | 50bp rate hike | 100.0000 | 8.7997 | 87.6696 | -4.2902 | -42,902,420.40 |
| 30Y bond | 50bp rate hike | 100.0000 | 21.0173 | 556.4827 | -9.8130 | -98,130,445.89 |

## Interpretation

- Rate cuts increase bond prices in this simplified setup.
- Rate hikes decrease bond prices in this simplified setup.
- Longer maturities show larger duration and convexity exposure.
- This is an educational approximation, not a live trading signal.
