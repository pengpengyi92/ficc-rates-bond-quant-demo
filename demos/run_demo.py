"""Run the Rates Bond Quant demo."""

from __future__ import annotations

from pathlib import Path

from ficc_rates_bond_quant import compare_maturities, rate_cut, rate_hike


def _format_money(value: float) -> str:
    return f"{value:,.2f}"


def render_table(rows: list[dict[str, float | str]]) -> str:
    header = (
        "| Bond | Scenario | Price | Mod Duration | Convexity | "
        "Price Change | PnL |\n"
        "|---|---:|---:|---:|---:|---:|---:|"
    )
    lines = [header]
    for row in rows:
        formatted_pnl = _format_money(float(row["pnl"]))
        lines.append(
            "| {name} | {scenario} | {price:.4f} | {modified_duration:.4f} | "
            "{convexity:.4f} | {price_change:.4f} | {pnl} |".format(
                name=row["name"],
                scenario=row["scenario"],
                price=float(row["price"]),
                modified_duration=float(row["modified_duration"]),
                convexity=float(row["convexity"]),
                price_change=float(row["price_change"]),
                pnl=formatted_pnl,
            )
        )
    return "\n".join(lines)


def build_report() -> str:
    scenarios = [rate_cut(10), rate_hike(10), rate_cut(50), rate_hike(50)]
    sections = [
        "# Rates Bond Quant Report",
        "",
        "This report uses synthetic educational assumptions.",
        "",
        "Common setup:",
        "",
        "- coupon rate: 2.5%",
        "- yield-to-maturity: 2.5%",
        "- notional face value per bond: 1,000,000,000",
        "- maturities: 1Y, 3Y, 5Y, 10Y, 30Y",
        "",
    ]
    for scenario in scenarios:
        rows = compare_maturities(scenario=scenario)
        sections.extend([f"## Scenario: {scenario.name}", "", render_table(rows), ""])
    sections.extend(
        [
            "## Interpretation",
            "",
            "- Rate cuts increase bond prices in this simplified setup.",
            "- Rate hikes decrease bond prices in this simplified setup.",
            "- Longer maturities show larger duration and convexity exposure.",
            "- This is an educational approximation, not a live trading signal.",
            "",
        ]
    )
    return "\n".join(sections)


def main() -> None:
    report = build_report()
    output_path = Path("outputs/sample_rates_bond_quant_report.md")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(report, encoding="utf-8")
    print(report)
    print(f"\nReport written to {output_path}")


if __name__ == "__main__":
    main()
