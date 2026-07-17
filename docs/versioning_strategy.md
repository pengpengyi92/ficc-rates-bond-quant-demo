# Repository Naming and Versioning Strategy

## Repository Name

Current project name:

```text
Rates Bond Quant
```

Repository slug:

```text
rates-bond-quant
```

The word `Demo` should not be used in the repository name or project title.
It can still be used for runnable examples, notebooks, screenshots, or web demo
sections.

## Versioning Rhythm

Use milestone versions only.

Recommended milestones:

- `V0.1`: initial public-safe project
- `V0.2`: core quant engine
- `V0.3`: FastAPI backend
- `V0.4`: TypeScript frontend
- `V0.5`: interactive dashboard
- `V1.0`: first stable public release

## README Update Rhythm

README Project Updates should record only major milestones.

Small changes should stay in:

- Git commit history
- Issues
- Pull Requests

Practical rhythm:

- multiple commits per development session
- one README update when meaningful progress is completed
- one version log entry per milestone
- one version bump only when a visible project capability is completed

This keeps the repository concise, professional, and easy to follow.
