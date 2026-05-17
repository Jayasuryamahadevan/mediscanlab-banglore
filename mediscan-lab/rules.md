# rules.md — Mediscan Lab Redesign Documentation Rules

## Core Principle

**Deep research first. Execution next.**
No architecture or completion claims without written scope, constraints, and measurable success.

## Global Rules

1. Never hide uncertainty: use `TBD` + explicit assumptions.
2. `goal.md` defines scope; `architecture.md` must not exceed it.
3. Every round ends with an update to `current_state.md`.
4. If scope changes, log it in `current_state.md` and update `goal.md` same round.
5. Keep docs concise: bullets > paragraphs, decisions > description.

## Research Checklist (must complete before execution)

- [x] Identify target user(s) and job-to-be-done.
- [x] Define must-haves and non-goals.
- [x] Specify success criteria (testable/measurable).
- [x] List constraints (platform, time, budget, privacy, dependencies).
- [x] Enumerate risks, open questions, and assumptions.

## Update Rules Per File

### goal.md

- Must include: intent, scope, non-goals, success criteria, constraints, assumptions.
- If any of these change → update immediately.

### architecture.md

- Must explain: components, flows, data model minimum, security, reliability, testing, deployment.
- Every tech choice needs a 1-line rationale.

### current_state.md

- Must reflect only what is actually done.
- Must contain: completed work, decision changes, evidence, risks, next actions.
- No “done” without proof (test, demo, merge, metric).

## Quality Gate (before calling a round complete)

- No contradictions across the three files.
- Architecture matches scope + constraints.
- Current state matches reality + includes evidence.
- Open questions and risks are explicitly listed.
