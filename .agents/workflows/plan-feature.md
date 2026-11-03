---
description: Plan a feature for The One Day by clarifying requirements, evaluating architectural trade-offs, and establishing acceptance criteria before code is written.
---

# Plan Feature Workflow

Use this workflow to structure and validate the plan for a new feature or significant component before writing implementation code.

---

## Steps

1. **Understand Project Context & Constraints**
   - Read [`docs/PROJECT_CONTEXT.md`](../docs/PROJECT_CONTEXT.md) and [`docs/DECISIONS.md`](../docs/DECISIONS.md).
   - Verify whether the feature belongs to the MVP or a post-launch phase.
   - Confirm that the feature adheres to the core philosophy: stop waiting, begin through small actions, and avoid streak-pressure mechanics.

2. **Analyze Requirements & User Journeys**
   - Identify who benefits: recruiters looking for engineering credibility, or visitors exploring creative pursuits.
   - Detail the primary user interaction and content flow.
   - Identify what authentic assets (resume, sketches, photos) or data inputs are required.

3. **Evaluate Architecture & Trade-Offs**
   - Determine component boundaries: Can this be implemented as a React Server Component? Does it strictly need `"use client"`?
   - Identify design tokens to be used (typography, spacing, color surfaces).
   - Check dependencies: Can this be built cleanly with existing primitives without adding third-party packages?
   - Document any architectural decisions or trade-offs that need entry into [`docs/DECISIONS.md`](../docs/DECISIONS.md).

4. **Define Acceptance Criteria & Validation Plan**
   - Specify concrete, testable acceptance criteria (visual appearance, responsive behavior, keyboard accessibility, performance).
   - Outline validation steps (TypeScript check, linting, build test).

5. **Review & Confirm with User**
   - Present the concise plan, highlighting key decisions, potential trade-offs, and questions.
   - Await user approval before commencing implementation.

