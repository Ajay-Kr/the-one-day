---
description: Implement an approved feature or component for The One Day following strict TypeScript, Server Components by default, and design token rules.
---

# Implement Feature Workflow

Use this workflow to implement an approved feature, component, or bug fix with discipline, precision, and adherence to project standards.

---

## Steps

1. **Pre-Implementation Check**
   - Review the agreed requirements, acceptance criteria, and relevant documentation.
   - Verify existing code patterns and directory structure.
   - Ensure authentic assets or data structures are in place.

2. **Execute Focused Changes**
   - Make minimal, targeted modifications. Avoid unrelated refactoring or scope creep.
   - Strictly adhere to [`.agents/rules/frontend-standards.md`](../rules/frontend-standards.md):
     - TypeScript with strict typing (no `any`).
     - Default to React Server Components; place `"use client"` only at interactive leaf nodes.
     - Use central design tokens for colors, spacing, and typography.
     - Favor composition over inheritance.
     - Feature-oriented component organization.

3. **Incorporate Accessibility & Responsiveness**
   - Use semantic HTML tags (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`).
   - Implement keyboard navigation, visible focus indicators (`:focus-visible`), and touch targets (≥ 44px on mobile).
   - Test responsive layout from mobile (360px) to desktop (1280px+).
   - Ensure `@media (prefers-reduced-motion: reduce)` is respected.

4. **Run Project Validation**
   - Invoke the validation procedure from [`.agents/skills/project-validation/SKILL.md`](../skills/project-validation/SKILL.md):
     - TypeScript typecheck (`tsc --noEmit`).
     - Linting audit (`npm run lint`).
     - Production build verification (`npm run build`).

5. **Report & Document**
   - Summarize what was implemented, files created/modified, and validation results.
   - Note any open questions or follow-up items.
