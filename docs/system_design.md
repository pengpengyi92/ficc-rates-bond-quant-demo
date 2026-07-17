# System Design: Rates Bond Quant

## 1. Goal

Build an educational, public-safe Python project for fixed-income interest-rate
bond analytics.

The system should demonstrate:

```text
cash flows
-> bond price
-> Macaulay duration
-> modified duration
-> convexity
-> rate-shock scenario
-> price-change approximation
-> position PnL
-> multi-maturity comparison
```

This project is designed for GitHub portfolio display. It is not a trading
system and does not contain private market views.

## 2. Scope

Covered:

```text
interest-rate bonds
fixed coupon bonds
yield-to-maturity discounting
Macaulay duration
modified duration
convexity
rate-cut / rate-hike scenarios
position PnL estimation
multi-maturity comparison
```

Not covered:

```text
credit bonds
default risk
derivatives
swaps
options
high-frequency trading
real portfolio optimization
live trading
```

## 3. Architecture

```text
                     +--------------------+
                     | bond terms          |
                     | coupon / ytm / mat  |
                     +----------+---------+
                                |
                                v
                     +--------------------+
                     | bond_math.py        |
                     | price/duration/conv |
                     +----------+---------+
                                |
                                v
+------------------+  +--------------------+  +----------------------+
| scenarios.py     |->| pnl.py             |->| portfolio.py          |
| rate cut / hike  |  | dP/P and position  |  | multi-maturity compare|
+------------------+  +--------------------+  +----------+-----------+
                                                       |
                                                       v
                                             +----------------------+
                                             | demos/run_demo.py    |
                                             | markdown report      |
                                             +----------------------+
```

## 4. Module Design

### 4.1 bond_math.py

Purpose:

```text
Implement deterministic bond math.
```

Core functions:

```text
bond_cashflows
bond_price
macaulay_duration
modified_duration
convexity
```

Design choices:

- face value defaults to 100
- coupon rate is annual
- yield-to-maturity is annual
- coupon frequency defaults to semiannual
- flat yield curve assumption for MVP

### 4.2 scenarios.py

Purpose:

```text
Represent parallel yield-shift scenarios.
```

Core functions:

```text
rate_cut(bp)
rate_hike(bp)
parallel_shift(bp)
```

MVP scenarios:

```text
10bp rate cut
10bp rate hike
50bp rate cut
50bp rate hike
```

### 4.3 pnl.py

Purpose:

```text
Estimate price change and position PnL from duration and convexity.
```

Formula:

```text
dP / P ~= -D_mod * dy + 0.5 * Convexity * dy^2
```

Position PnL:

```text
units = notional_face_value / face_value
pnl = units * price_change
```

### 4.4 portfolio.py

Purpose:

```text
Compare rate sensitivity across maturities.
```

Core object:

```text
BondPosition
```

Core functions:

```text
analyze_position
compare_maturities
```

Default comparison:

```text
1Y / 3Y / 5Y / 10Y / 30Y
coupon = 2.5%
ytm = 2.5%
notional face value = 1,000,000,000
```

### 4.5 demos/run_demo.py

Purpose:

```text
Run the full demo and generate a markdown report.
```

Output:

```text
outputs/sample_rates_bond_quant_report.md
```

## 5. Data Contract

### 5.1 BondPosition

```text
name
maturity_years
coupon_rate
yield_to_maturity
notional_face_value
face_value
frequency
```

### 5.2 RateScenario

```text
name
yield_change
description
bp
```

### 5.3 Position Analysis Row

```text
name
scenario
maturity_years
price
Macaulay duration
modified duration
convexity
relative price change
price change
new price
market value
pnl
pnl bps of market value
```

## 6. Public-Safe Design

The demo uses synthetic assumptions:

```text
coupon rate = 2.5%
yield-to-maturity = 2.5%
maturities = 1Y, 3Y, 5Y, 10Y, 30Y
notional = illustrative
```

No private data is required.

## 7. Test Design

Unit tests cover:

- zero-coupon price formula
- zero-coupon Macaulay duration
- modified duration formula
- convexity positivity
- rate cut increases price
- rate hike decreases price
- longer maturity has higher duration

Run:

```powershell
$env:PYTHONPATH = "src"
py -m unittest discover -s tests
```

## 8. Demo Design

Run:

```powershell
$env:PYTHONPATH = "src"
py demos/run_demo.py
```

Expected result:

```text
markdown table for 10bp / 50bp cut and hike scenarios
output report written to outputs/sample_rates_bond_quant_report.md
```

## 9. Future Extensions

### v1.1: CSV Inputs

```text
examples/sample_bond_terms.csv
examples/sample_rate_scenarios.csv
```

### v1.2: Yield Curve Shocks

```text
parallel shift
steepener
flattener
butterfly
```

### v1.3: Portfolio Layer

```text
multiple positions
weighted duration
portfolio DV01
scenario PnL table
```

### v1.4: Research Report Layer

```text
markdown memo
human-review checklist
public-safe disclaimer
```

## 10. Interview Narrative

Chinese:

```text
我做了一个 public-safe 的 FICC rates bond quant project，用 Python 实现固定利率债的现金流、定价、Macaulay duration、modified duration、convexity，以及降息/加息情景下的价格变化和组合 PnL 估算。这个项目不是交易系统，而是展示我对利率债定价、久期凸性和利率敏感性的基础理解，以及把金融概念工程化成可运行代码、测试和报告的能力。
```

English:

```text
I built a public-safe FICC rates bond quant project in Python. It implements fixed
coupon bond cash flows, pricing, Macaulay duration, modified duration,
convexity, rate-cut and rate-hike scenarios, price-change approximation, and
portfolio PnL estimation. It is not a trading system; it demonstrates my
understanding of rates-bond mechanics and my ability to convert finance concepts
into runnable code, tests, and reports.
```
