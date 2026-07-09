"""Pydantic schemas for the FICC rates bond quant API."""

from __future__ import annotations

from pydantic import BaseModel, Field


class CalculateRequest(BaseModel):
    """Request body for multi-maturity rate-shock calculation."""

    notional: float = Field(
        default=10_000_000_000.0,
        gt=0,
        description="Face-value notional of the bond position.",
    )
    yield_change_bps: float = Field(
        default=-10.0,
        description="Parallel yield change in basis points. Negative means rate cut.",
    )
    maturities: list[float] = Field(
        default_factory=lambda: [1, 3, 5, 10, 30],
        description="Bond maturities in years.",
    )
    coupon_rate: float = Field(default=0.025, ge=0, description="Annual coupon rate.")
    yield_to_maturity: float = Field(
        default=0.025,
        gt=-1,
        description="Initial annual yield to maturity.",
    )


class CalculateResult(BaseModel):
    """One maturity result row."""

    maturity: float
    price: float
    duration: float
    modified_duration: float
    convexity: float
    price_change_pct: float
    pnl: float


class CalculateResponse(BaseModel):
    """Response body for the calculation endpoint."""

    scenario: str
    notional: float
    yield_change_bps: float
    results: list[CalculateResult]


class ScenarioPreset(BaseModel):
    """A predefined rate-shock scenario."""

    name: str
    yield_change_bps: float
    description: str
