import { ScenarioResult, formatMoney } from "../lib/bondMath";

type ResultTableProps = {
  rows: ScenarioResult[];
};

export function ResultTable({ rows }: ResultTableProps) {
  return (
    <section className="card table-card">
      <div>
        <p className="eyebrow">Scenario Table</p>
        <h2>Duration, convexity, and estimated P&L</h2>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Maturity</th>
              <th>Price</th>
              <th>Macaulay Duration</th>
              <th>Modified Duration</th>
              <th>Convexity</th>
              <th>Price Change</th>
              <th>Estimated P&L</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.maturity}>
                <td>{row.maturity}Y</td>
                <td>{row.price.toFixed(3)}</td>
                <td>{row.macaulayDuration.toFixed(3)}</td>
                <td>{row.modifiedDuration.toFixed(3)}</td>
                <td>{row.convexity.toFixed(3)}</td>
                <td>{(row.priceChangePct * 100).toFixed(4)}%</td>
                <td className={row.pnl >= 0 ? "positive" : "negative"}>{formatMoney(row.pnl)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
