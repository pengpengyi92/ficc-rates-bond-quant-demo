"""Calculation endpoints for rates bond scenario analysis."""

from __future__ import annotations

from fastapi import APIRouter

from ficc_rates_bond_quant.portfolio import compare_maturities
from ficc_rates_bond_quant.scenarios import parallel_shift

from ..schemas import CalculateRequest, CalculateResponse, CalculateResult


router = APIRouter(prefix="/api", tags=["calculation"])


@router.post("/calculate", response_model=CalculateResponse)
def calculate(request: CalculateRequest) -> CalculateResponse:
    """Calculate duration, convexity, price impact, and PnL by maturity."""

    scenario = parallel_shift(request.yield_change_bps)
    rows = compare_maturities(
        maturities=request.maturities,
        coupon_rate=request.coupon_rate,
        yield_to_maturity=request.yield_to_maturity,
        notional_face_value=request.notional,
        scenario=scenario,
    )

    results = [
        CalculateResult(
            maturity=float(row["maturity_years"]),
            price=float(row["price"]),
            duration=float(row["macaulay_duration"]),
            modified_duration=float(row["modified_duration"]),
            convexity=float(row["convexity"]),
            price_change_pct=float(row["relative_change"]),
            pnl=float(row["pnl"]),
        )
        for row in rows
    ]

    return CalculateResponse(
        scenario=scenario.name,
        notional=request.notional,
        yield_change_bps=request.yield_change_bps,
        results=results,
    )
