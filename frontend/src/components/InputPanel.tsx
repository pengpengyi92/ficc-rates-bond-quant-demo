"use client";

type InputPanelProps = {
  notional: number;
  yieldChangeBps: number;
  couponRate: number;
  yieldToMaturity: number;
  onNotionalChange: (value: number) => void;
  onYieldChangeBpsChange: (value: number) => void;
  onCouponRateChange: (value: number) => void;
  onYieldToMaturityChange: (value: number) => void;
};

const scenarioOptions = [-50, -25, -10, 10, 25, 50];

export function InputPanel({
  notional,
  yieldChangeBps,
  couponRate,
  yieldToMaturity,
  onNotionalChange,
  onYieldChangeBpsChange,
  onCouponRateChange,
  onYieldToMaturityChange
}: InputPanelProps) {
  return (
    <section className="card input-panel">
      <div>
        <p className="eyebrow">Scenario Input</p>
        <h2>Configure the rate shock</h2>
      </div>

      <label>
        Position Notional
        <input
          type="number"
          value={notional}
          min={1000000}
          step={100000000}
          onChange={(event) => onNotionalChange(Number(event.target.value))}
        />
        <span>Default: 10 billion RMB face-value position</span>
      </label>

      <label>
        Yield Change
        <select
          value={yieldChangeBps}
          onChange={(event) => onYieldChangeBpsChange(Number(event.target.value))}
        >
          {scenarioOptions.map((bp) => (
            <option key={bp} value={bp}>
              {bp > 0 ? "+" : ""}
              {bp} bps
            </option>
          ))}
        </select>
        <span>Negative means rate cut. Positive means rate hike.</span>
      </label>

      <label>
        Coupon Rate
        <input
          type="number"
          value={(couponRate * 100).toFixed(2)}
          min={0}
          step={0.05}
          onChange={(event) => onCouponRateChange(Number(event.target.value) / 100)}
        />
        <span>Annual coupon rate, expressed as percent.</span>
      </label>

      <label>
        Initial Yield to Maturity
        <input
          type="number"
          value={(yieldToMaturity * 100).toFixed(2)}
          min={0}
          step={0.05}
          onChange={(event) => onYieldToMaturityChange(Number(event.target.value) / 100)}
        />
        <span>Flat initial YTM assumption, expressed as percent.</span>
      </label>
    </section>
  );
}
