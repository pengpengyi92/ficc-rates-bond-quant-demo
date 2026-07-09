# 🚀 FICC Rates Bond Quant

<p align="center">
  <img src="assets/ficc-rates-bond-quant-icon.png" alt="FICC Rates Bond Quant project icon" width="360">
</p>

FICC Rates Bond Quant is an educational Python project for fixed-income
interest-rate bond analytics. It now includes a Python quant engine, a FastAPI
backend API, and a TypeScript / Next.js frontend dashboard.

It focuses on the core mechanics of rates-bond quant work:

```text
bond cash flows
-> bond pricing
-> Macaulay duration
-> modified duration
-> convexity
-> rate-cut / rate-hike scenario
-> PnL estimation
-> multi-maturity comparison
```

This is a public-safe GitHub project. It uses simplified examples and synthetic
inputs to demonstrate the mechanics, not proprietary trading views.

The project also includes real-market case studies using approximate 2026 China
government bond yield movements to simulate large-notional interest-rate bond
scenarios.

## 🎯 Why This Project Exists

Interest-rate bonds are one of the most important areas in FICC. Before talking
about strategy, portfolio construction, or AI research agents, we need a clean
understanding of:

- 📊 how coupon bond prices are computed
- 📉 why bond prices move opposite to yields
- 📈 why duration approximates first-order rate sensitivity
- 📐 why convexity matters for larger rate moves
- ⏳ why long-maturity bonds are more sensitive to rate changes
- 💰 how portfolio PnL responds to rate-cut and rate-hike scenarios

This repo turns those ideas into a small, runnable Python demo.

## 📂 Repository Structure

```text
ficc-rates-bond-quant/
|-- README.md
|-- pyproject.toml
|-- LICENSE
|-- backend/
|   |-- app.py
|   |-- schemas.py
|   `-- routes/
|-- frontend/
|   |-- package.json
|   |-- next.config.js
|   `-- src/
|-- case_studies/
|-- logs/
|-- src/ficc_rates_bond_quant/
|   |-- __init__.py
|   |-- bond_math.py
|   |-- pnl.py
|   |-- scenarios.py
|   `-- portfolio.py
|-- tests/
|-- demos/
|-- notes/
|-- assets/
|   |-- ficc-rates-bond-quant-icon.png
|   `-- ficc-teaching-dashboard.png
|-- docs/
`-- outputs/
```

## 🚀 Quick Start

Run the demo:

```powershell
$env:PYTHONPATH = "src"
py demos/run_demo.py
```

Run tests:

```powershell
$env:PYTHONPATH = "src"
py -m unittest discover -s tests
```

Run the FastAPI backend:

```powershell
py -m pip install -e ".[web]"
$env:PYTHONPATH = "src"
py -m uvicorn backend.app:app --reload
```

Run the TypeScript frontend:

```powershell
cd frontend
npm install
npm run dev
```

## 🌐 Interactive Web Demo

The web demo turns the quant engine into a product-like educational dashboard.

<p align="center">
  <img src="assets/ficc-teaching-dashboard.png" alt="FICC web demo teaching dashboard" width="760">
</p>

The dashboard includes:

- 💰 a 10 billion RMB default notional scenario
- 📉 configurable yield-shock scenarios
- 📊 estimated P&L by maturity
- 📈 duration comparison chart
- 📐 convexity comparison chart
- 📚 educational explanations for duration, convexity, and rate sensitivity

## 📊 Real Market Case Studies

The case studies connect duration and convexity concepts with realistic China
government bond yield movements.

Current case studies:

- 📈 `case_studies/2026_china_gov_bond_ytd.md`
- ⏳ `case_studies/2026_30y_rates_trade.md`
- 💰 `case_studies/100bn_position_simulation.md`

These cases are public-safe historical simulations. They do not contain real
positions, proprietary trading records, client information, or live trade
recommendations.

## ✨ What The Project Shows

The demo compares 1Y, 3Y, 5Y, 10Y, and 30Y coupon bonds under:

```text
10bp rate cut
10bp rate hike
50bp rate cut
50bp rate hike
```

It estimates:

- 📊 price
- 📈 Macaulay duration
- 📉 modified duration
- 📐 convexity
- 💵 estimated price change
- 💰 estimated portfolio PnL
- 🌐 interactive dashboard output

## 📖 Example Interpretation

A long-duration bond has higher interest-rate sensitivity.

For the same rate cut:

```text
30Y bond price impact > 10Y bond price impact > 1Y bond price impact
```

A rate cut usually increases bond prices, while a rate hike usually decreases
bond prices.

Convexity improves the approximation when the yield move becomes larger.

## 📚 Educational Scope

This project covers:

- 🏦 interest-rate bonds
- 💵 cash-flow discounting
- 📊 bond pricing
- 📈 Macaulay duration
- 📉 modified duration
- 📐 convexity
- 🧪 yield-change scenario analysis
- 💰 portfolio PnL estimation
- 🧭 multi-maturity comparison
- 🌐 web-based educational visualization

It does not cover:

```text
credit bonds
default risk
derivatives
swaps
options
high-frequency trading
live trading
real portfolio optimization
```

## 🛡️ Public-Safe Boundary

This repo does not include:

- proprietary bank materials
- internal research documents
- client information
- real trading positions
- private market views
- live trading instructions

## 🧭 Positioning

This is a research-engineering project, not a trading system.

Defensible claim:

```text
I built an educational FICC rates bond quant project that implements bond
pricing, duration, convexity, rate-shock scenarios, PnL estimation, and
multi-maturity comparison in Python.
```

Do not claim:

```text
production rates trading system
live bond portfolio optimizer
bank internal research engine
validated real-money strategy
```

## 📝 Notes

See:

- `notes/ficc_rates_intro.md`
- `notes/duration_convexity.md`
- `docs/system_design.md`
- `docs/public_private_boundary.md`
- `docs/versioning_strategy.md`
- `case_studies/2026_china_gov_bond_ytd.md`
- `case_studies/2026_30y_rates_trade.md`
- `case_studies/100bn_position_simulation.md`
- `logs/project_log.md`
- `VERSION_LOG.md`

## 🤝 Contributing

Contributions are welcome.

You can contribute by:

- 🐞 opening Issues for bugs, questions, or suggested improvements
- 🔧 submitting Pull Requests for fixes, examples, documentation, or tests
- 📚 improving educational explanations around fixed income, FICC, rates, duration,
  convexity, and scenario analysis
- 💡 adding public-safe examples that do not rely on proprietary market data,
  employer materials, client information, or live trading instructions

Pull Requests will be reviewed carefully and merged when they align with the
educational and public-safe scope of this project.

## ⭐ Support

⭐ If this project helps you learn quantitative fixed income, FICC, or
interest-rate bond analytics, please consider giving the repository a Star.

## 🚀 Project Updates

README updates record only major milestones. Smaller changes are tracked in Git
commit history. See `VERSION_LOG.md` for the full milestone version log.

### V0.6 - 2026-07-10

Completed:

- 📊 real market case study framework
- 📈 2026 China government bond YTD case
- ⏳ 2026 30Y long-duration rates trade case
- 💰 large-notional position simulation framework
- 📝 project log for meaningful milestone updates

### V0.5 - 2026-07-10

Completed:

- 📂 initial repository structure
- 📖 public-safe README
- 📦 core Python package under `src/ficc_rates_bond_quant/`
- 📊 bond pricing implementation
- 📈 Macaulay duration and modified duration
- 📐 convexity calculation
- 🧪 yield-shock scenario analysis
- 💰 simple portfolio PnL estimation
- 🧪 unit tests
- 🚀 runnable demo script
- 📓 demo notebook scaffold
- 📝 educational notes
- 🏗️ system design V1.0
- 🌐 FastAPI backend scaffold
- 🖥️ TypeScript / Next.js frontend dashboard
- 📊 web charts and scenario table
- 🖼️ teaching dashboard image asset
- 🤝 contributing and support sections
- 📜 MIT License

## 📦 Versioning Strategy

- Use milestone versions only.
- Keep small changes in Git commit history.
- Update README once per meaningful development day.
- Bump the version when a visible project capability is completed.

## 🗺️ Coming Soon

Planned additions:

- 📈 yield curve visualization
- 💵 DV01 / PVBP calculation
- 🔑 key rate duration
- 🧪 yield curve shift scenarios
- 🧭 multi-factor interest-rate analysis
- 📊 backtesting examples
- 🛡️ treasury futures hedging examples
- ⚙️ performance optimization
- 📚 more educational examples
- 🚀 deployment to Vercel or GitHub Pages
- 📓 real-market notebook implementation
- 📊 P&L by maturity visualization
- 📈 historical yield curve chart
- 🌐 dashboard integration for real-market cases

## 📌 Project Status

- Status: Active Development
- Version: V0.6
- Last Update: 2026-07-10

## 📜 License

This project is released under the MIT License.

Please retain the original copyright notice and license when redistributing or
modifying the code. See the `LICENSE` file for details.
