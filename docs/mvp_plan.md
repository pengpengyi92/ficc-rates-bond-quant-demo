# MVP Plan: Rates Bond Quant

## MVP Definition

The MVP is complete when the repo can:

```text
1. price a fixed coupon bond
2. calculate Macaulay duration
3. calculate modified duration
4. calculate convexity
5. create rate-cut / rate-hike scenarios
6. estimate price change and PnL
7. compare 1Y / 3Y / 5Y / 10Y / 30Y bonds
8. generate a markdown report
9. pass unit tests
```

## Current MVP Status

Done:

```text
bond_math.py
pnl.py
scenarios.py
portfolio.py
demos/run_demo.py
tests/test_bond_math.py
tests/test_scenarios_and_pnl.py
notes/ficc_rates_intro.md
notes/duration_convexity.md
outputs/sample_rates_bond_quant_report.md
```

## Run Demo

```powershell
$env:PYTHONPATH = "src"
py demos/run_demo.py
```

## Run Tests

```powershell
$env:PYTHONPATH = "src"
py -m unittest discover -s tests
```

## Next Improvements

### 1. CSV Demo Inputs

Add:

```text
examples/sample_bond_terms.csv
examples/sample_rate_scenarios.csv
```

### 2. DV01

Add:

```text
dv01 = price impact for 1bp yield move
```

### 3. Yield Curve Scenarios

Add:

```text
parallel shift
steepener
flattener
butterfly
```

### 4. Portfolio Aggregation

Add:

```text
portfolio market value
weighted duration
portfolio DV01
scenario PnL
```

### 5. Architecture Diagram

Add a public-safe diagram under:

```text
assets/
```
