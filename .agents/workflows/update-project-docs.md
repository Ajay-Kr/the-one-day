---
description: Update project tracking documents, backlog tasks, decision register, and project status for The One Day to maintain repository source of truth.
---

# Update Project Docs Workflow

Use this workflow to keep project documentation strictly aligned with recent implementation, architectural decisions, and backlog updates.

---

## Steps

1. **Review Recent Changes & Decisions**
   - Identify what code, configuration, or architectural choices were made.
   - Determine if any material technical decisions require logging in [`docs/DECISIONS.md`](../docs/DECISIONS.md).

2. **Update Decision Register (`docs/DECISIONS.md`)**
   - Record newly accepted or proposed architectural decisions with:
     - Decision ID and title.
     - Context and problem statement.
     - Decision and rationale.
     - Alternatives considered and trade-offs.
     - Status (`Accepted`, `Proposed`, or `Deferred`).
   - Never silently change an existing accepted decision; document the motivation for changes.

3. **Update Backlog (`docs/TASKS.md`)**
   - Mark completed tasks with `[x]` and document outcomes.
   - Mark active tasks with `[~]` and note current blockers.
   - Add new backlog items identified during implementation with clear acceptance criteria.

4. **Update Project Status (`docs/PROJECT_STATUS.md`)**
   - Update the "Last updated" date and current phase summary.
   - Synchronize the "Completed", "In progress", and "Pending" lists.
   - Update the immediate "Next action" item.

5. **Verify Coherence & Report**
   - Ensure [`README.md`](../README.md) and [`AGENTS.md`](../AGENTS.md) remain synchronized with updated documentation links.
   - Report a concise summary of documentation updates made.
