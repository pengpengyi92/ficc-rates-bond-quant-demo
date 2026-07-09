# 🚀 FICC Rates Bond Quant Demo

<p align="center">
  <img src="assets/ficc-rates-bond-quant-icon.png" alt="FICC Rates Bond Quant Demo project icon" width="360">
</p>

FICC Rates Bond Quant Demo is an educational Python project for fixed-income
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
ficc-rates-bond-quant-demo/
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

## ✨ What The Demo Shows

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
I built an educational FICC rates bond quant demo that implements bond pricing,
duration, convexity, rate-shock scenarios, PnL estimation, and multi-maturity
comparison in Python.
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

### 2026-07-10

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

## 📌 Project Status

- Status: Active Development
- Version: V0.1
- Last Update: 2026-07-10

## 📜 License

This project is released under the MIT License.

Please retain the original copyright notice and license when redistributing or
modifying the code. See the `LICENSE` file for details.
