"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { ScenarioResult } from "../lib/bondMath";

type MaturityComparisonChartProps = {
  rows: ScenarioResult[];
};

export function MaturityComparisonChart({ rows }: MaturityComparisonChartProps) {
  const data = rows.map((row) => ({
    maturity: `${row.maturity}Y`,
    duration: Number(row.modifiedDuration.toFixed(3)),
    convexity: Number(row.convexity.toFixed(3))
  }));

  return (
    <section className="card chart-card">
      <div>
        <p className="eyebrow">Risk Sensitivity</p>
        <h2>Duration and convexity by maturity</h2>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 12, right: 18, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dbe4f0" />
          <XAxis dataKey="maturity" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="duration"
            stroke="#1f5da8"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="convexity"
            stroke="#b8801f"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
