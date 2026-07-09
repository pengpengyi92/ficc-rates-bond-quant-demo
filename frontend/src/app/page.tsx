"use client";

import { useMemo, useState } from "react";

import { InputPanel } from "../components/InputPanel";
import { MaturityComparisonChart } from "../components/MaturityComparisonChart";
import { PnLChart } from "../components/PnLChart";
import { ResultTable } from "../components/ResultTable";
import { calculateScenario, formatMoney } from "../lib/bondMath";

const maturities = [1, 3, 5, 10, 30];

export default function HomePage() {
  const [notional, setNotional] = useState(10_000_000_000);
  const [yieldChangeBps, setYieldChangeBps] = useState(-10);
  const [couponRate, setCouponRate] = useState(0.025);
  const [yieldToMaturity, setYieldToMaturity] = useState(0.025);

  const rows = useMemo(
    () =>
      calculateScenario({
        notional,
        yieldChangeBps,
        couponRate,
        yieldToMaturity,
        maturities
      }),
    [notional, yieldChangeBps, couponRate, yieldToMaturity]
  );

  const totalPnl = rows.reduce((sum, row) => sum + row.pnl, 0);
  const longBond = rows[rows.length - 1];

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="pill">FICC • Rates • Bond Quant</p>
          <h1>Interactive interest-rate bond P&L dashboard</h1>
          <p>
            Explore how duration, convexity, yield changes, and maturity shape the estimated
            P&L of a fixed-income rates bond position.
          </p>
          <div className="hero-actions">
            <a
              href="https://github.com/pengpengyi92/ficc-rates-bond-quant"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            <a className="secondary" href="#dashboard">
              Try Scenario
            </a>
          </div>
        </div>
        <div className="hero-image-card">
          <img src="/ficc-teaching-dashboard.png" alt="FICC teaching dashboard with Xiao G Cat" />
        </div>
      </section>

      <section className="metrics">
        <div className="metric-card">
          <span>Position Notional</span>
          <strong>{formatMoney(notional)}</strong>
        </div>
        <div className="metric-card">
          <span>Yield Change</span>
          <strong>
            {yieldChangeBps > 0 ? "+" : ""}
            {yieldChangeBps} bps
          </strong>
        </div>
        <div className="metric-card">
          <span>Total Estimated P&L</span>
          <strong className={totalPnl >= 0 ? "positive" : "negative"}>{formatMoney(totalPnl)}</strong>
        </div>
        <div className="metric-card">
          <span>30Y Modified Duration</span>
          <strong>{longBond.modifiedDuration.toFixed(2)}</strong>
        </div>
      </section>

      <section id="dashboard" className="dashboard-grid">
        <InputPanel
          notional={notional}
          yieldChangeBps={yieldChangeBps}
          couponRate={couponRate}
          yieldToMaturity={yieldToMaturity}
          onNotionalChange={setNotional}
          onYieldChangeBpsChange={setYieldChangeBps}
          onCouponRateChange={setCouponRate}
          onYieldToMaturityChange={setYieldToMaturity}
        />
        <div className="charts-grid">
          <PnLChart rows={rows} />
          <MaturityComparisonChart rows={rows} />
        </div>
      </section>

      <ResultTable rows={rows} />

      <section className="education-grid">
        <article className="card">
          <p className="eyebrow">Fixed Income Logic</p>
          <h2>Why price rises when yield falls</h2>
          <p>
            A bond price is the discounted value of future cash flows. When yield falls, the
            discount rate is lower, so the present value of future coupons and principal rises.
          </p>
        </article>
        <article className="card">
          <p className="eyebrow">Duration</p>
          <h2>Why long maturity is more sensitive</h2>
          <p>
            Longer maturity bonds place more value in distant cash flows. Their present value is
            more exposed to yield changes, so modified duration usually rises with maturity.
          </p>
        </article>
        <article className="card">
          <p className="eyebrow">Convexity</p>
          <h2>Why the curve is not a straight line</h2>
          <p>
            Duration is a first-order approximation. Convexity adds second-order curvature and
            becomes more important when the yield shock is larger.
          </p>
        </article>
      </section>
    </main>
  );
}
