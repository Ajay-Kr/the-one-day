# The One Day — Agent Instructions

## 1. Project identity

The One Day is a personal journal and portfolio documenting engineering, creative pursuits (sketching, calligraphy, origami, paper art), yoga practice rebuilding, personal photography, and learning.

It is not a conventional developer portfolio with hobby sections added as decoration.

The website should feel thoughtful, editorial, personal, and technically credible.

Read `docs/PROJECT_CONTEXT.md` before proposing or making significant changes.

## 2. Source of truth

The authoritative project documentation lives in `docs/`:

- `docs/PROJECT_CONTEXT.md`: project purpose, identity, pillars, audience, and core philosophy.
- `docs/DESIGN_EXPLORATION.md`: visual direction, palette, typography, and layout decisions.
- `docs/DESIGN_REFERENCE_RESEARCH.md`: comparative analysis of reference portfolio repositories.
- `docs/DECISIONS.md`: accepted decisions, architectural standards, and their rationale.
- `docs/GIT_GOVERNANCE.md`: branch standards, Conventional Commits, toolchain, CI design, and GitHub protection checklist.
- `docs/TASKS.md`: prioritized backlog and implementation tasks.
- `docs/PROJECT_STATUS.md`: current progress, pending inputs, and known issues.
- `docs/PROJECT_MASTER_PROMPT.md`: broader project brief and long-term vision.

Do not silently override an accepted decision. If a decision needs changing, explain why and propose an update in `docs/DECISIONS.md`.

## 3. Customizations architecture

This repository uses the Google Antigravity customization system:

- **Workspace Rules** (`.agents/rules/`):
  - `product-principles.md`: Core philosophy, audience balance, and authenticity (`always_on`).
  - `frontend-standards.md`: Architecture standards, Server Components, design tokens, and accessibility (`glob`).
  - `content-integrity.md`: Strict prohibition against fabricating stories, metrics, or achievements (`always_on`).
  - `git-workflow.md`: Conventional Commits, branch taxonomy, secret protection, and agent restrictions (`always_on`).
- **Skills** (`.agents/skills/`):
  - `frontend-design`: UI components, typography, layout grids, and design tokens.
  - `responsive-accessibility`: Mobile-first responsiveness, WCAG 2.1 AA, keyboard navigation, and reduced motion.
  - `project-validation`: Type check, lint, build verification, asset validation, and code health.
  - `case-study-authoring`: Engineering case studies, problem-solving narratives, and authentic logs.
- **Workflows** (`.agents/workflows/`):
  - `plan-feature.md`: Feature scoping, trade-off analysis, and acceptance criteria.
  - `implement-feature.md`: Focused implementation following engineering standards.
  - `review-ui.md`: Visual, responsive, accessibility, and code quality review.
  - `update-project-docs.md`: Synchronizing decisions, tasks, and project status.

## 4. Product principles

- Preserve the balance of professional identity and personal exploration.
- Engineering work must be easy to discover within seconds.
- Prefer real user content over generic stock imagery.
- Avoid generic portfolio templates, excessive glassmorphism, and visual gimmicks.
- Prioritise responsive design, accessibility, and performance.
- Keep the MVP small enough to launch; defer premature backend/CMS infrastructure.

## 5. Engineering principles

- Use TypeScript and strict typing throughout.
- Prefer simple, maintainable solutions over unnecessary abstractions.
- Adopt React Server Components by default; use Client Components only where user interaction requires them.
- Use semantic HTML, design tokens, and modular composition over rigid inheritance.
- Avoid adding dependencies without a clear, justified reason.
- Do not introduce a database, CMS, authentication, or backend service unless an accepted requirement justifies it.
- Keep components focused and feature-oriented.
- Handle loading, empty, and error states deliberately.
- Optimise images, fonts, and animations; strictly respect `prefers-reduced-motion`.
- Do not use animation as a substitute for usable interactions.

## 6. Working process

Before implementation:

1. Understand the relevant project documentation.
2. Inspect the existing code and conventions.
3. Identify the files likely to change.
4. Explain significant design or architectural trade-offs.
5. Ask before making decisions that materially change scope.

During implementation:

1. Make focused changes.
2. Avoid unrelated refactoring.
3. Keep accessibility and responsive behaviour in mind.
4. Do not fabricate personal stories, photographs, project metrics, or professional achievements.

After implementation:

1. Run relevant lint, type-check, and build commands.
2. Report what changed.
3. Report validation results and any checks not run.
4. Update documentation when a decision, task, or project status changes.
5. Follow Conventional Commits for PR titles and commit messages (`type(optional-scope): description`), and complete `.github/pull_request_template.md` truthfully.

## 7. Collaboration

Act as a thoughtful engineering partner, not an unquestioning code generator.

Challenge unnecessary complexity and scope creep.
Explain important decisions in practical terms.
Do not claim something works without validating it.
Do not overwrite user-authored content without permission.
