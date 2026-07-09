# FastAPI Backend

This folder exposes the Python quant engine as a small educational API.

## Run

From the repository root:

```powershell
py -m pip install -e ".[web]"
$env:PYTHONPATH = "src"
py -m uvicorn backend.app:app --reload
```

Open:

```text
http://127.0.0.1:8000/docs
```

## Endpoints

- `POST /api/calculate`: calculate duration, convexity, price impact, and P&L.
- `GET /api/scenarios`: list common educational rate-shock scenarios.
