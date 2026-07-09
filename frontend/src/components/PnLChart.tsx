"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { ScenarioResult } from "../lib/bondMath";

type PnLChartProps = {
  rows: ScenarioResult[];
};

export function PnLChart({ rows }: PnLChartProps) {
  const data = rows.map((row) => ({
    maturity: `${row.maturity}Y`,
    pnl: Number((row.pnl / 100_000_000).toFixed(3))
  }));

  return (
    <section className="card chart-card">
      <div>
        <p className="eyebrow">P&L Chart</p>
        <h2>Estimated P&L by maturity</h2>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 12, right: 18, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dbe4f0" />
          <XAxis dataKey="maturity" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            label={{ value: "100m RMB", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => [`${value} x 100m RMB`, "P&L"]} />
          <Bar dataKey="pnl" fill="#0b2b52" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
