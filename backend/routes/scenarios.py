"""Scenario preset endpoints."""

from __future__ import annotations

from fastapi import APIRouter

from ..schemas import ScenarioPreset


router = APIRouter(prefix="/api", tags=["scenarios"])


@router.get("/scenarios", response_model=list[ScenarioPreset])
def list_scenarios() -> list[ScenarioPreset]:
    """Return common educational rate-shock scenarios."""

    return [
        ScenarioPreset(
            name="10bp rate cut",
            yield_change_bps=-10,
            description="Mild parallel rate cut. Bond prices usually rise.",
        ),
        ScenarioPreset(
            name="25bp rate cut",
            yield_change_bps=-25,
            description="Central-bank-style parallel easing scenario.",
        ),
        ScenarioPreset(
            name="50bp rate cut",
            yield_change_bps=-50,
            description="Larger easing scenario where convexity becomes more visible.",
        ),
        ScenarioPreset(
            name="10bp rate hike",
            yield_change_bps=10,
            description="Mild parallel rate hike. Bond prices usually fall.",
        ),
        ScenarioPreset(
            name="50bp rate hike",
            yield_change_bps=50,
            description="Stress scenario for long-duration bond exposure.",
        ),
    ]
