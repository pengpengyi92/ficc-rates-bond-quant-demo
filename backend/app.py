"""FastAPI application for the FICC rates bond quant web demo."""

from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes.calculate import router as calculate_router
from .routes.scenarios import router as scenarios_router


app = FastAPI(
    title="FICC Rates Bond Quant Demo API",
    description="Educational API for bond duration, convexity, scenario, and PnL analysis.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(calculate_router)
app.include_router(scenarios_router)


@app.get("/")
def read_root() -> dict[str, str]:
    """Health-check endpoint."""

    return {
        "project": "FICC Rates Bond Quant Demo",
        "status": "ok",
        "docs": "/docs",
    }
