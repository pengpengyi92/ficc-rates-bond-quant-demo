"""Educational FICC rates bond quant project."""

from .bond_math import (
    bond_cashflows,
    bond_price,
    convexity,
    macaulay_duration,
    modified_duration,
)
from .pnl import estimate_position_pnl, estimate_price_change
from .portfolio import BondPosition, analyze_position, compare_maturities
from .scenarios import RateScenario, rate_cut, rate_hike

__all__ = [
    "BondPosition",
    "RateScenario",
    "analyze_position",
    "bond_cashflows",
    "bond_price",
    "compare_maturities",
    "convexity",
    "estimate_position_pnl",
    "estimate_price_change",
    "macaulay_duration",
    "modified_duration",
    "rate_cut",
    "rate_hike",
]

__version__ = "0.6.0"
