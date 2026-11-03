---
trigger: always_on
---

# Git and Repository Workflow — The One Day

## 1. Branch Conventions
- **Stable Trunk:** The `main` branch must always remain deployable and buildable.
- **Short-Lived Task Branches:** All development occurs on focused, short-lived task branches branched from `main`. Do not work directly on `main`.
- **Branch Prefix Taxonomy:**
  - `feat/`: New feature or user-facing capability (e.g., `feat/case-study-template`)
  - `fix/`: Bug fix or defect remediation (e.g., `fix/nav-mobile-overflow`)
  - `refactor/`: Code reorganization without functional or visual changes
  - `chore/`: Tooling, build config, dependency, or repository hygiene
  - `docs/`: Documentation additions or updates
  - `test/`: Test additions or corrections

## 2. Commit Message Conventions
Follow the **Conventional Commits** specification:

`type(optional-scope): description`

- **Allowed Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- **Casing & Style:** Use lowercase for type and scope. Use imperative present tense in description (e.g., `add responsive navigation`, not `added` or `adds`).
- **Precision:** Keep descriptions concise, specific, and informative. Avoid vague commit messages like `updates`, `changes`, or `fixes`.
- **Breaking Changes:** Explicitly document breaking changes with `BREAKING CHANGE:` in the commit footer or a `!` after the type/scope (e.g., `feat(api)!: migrate payload format`).

## 3. Secret Protection
- **No Credentials:** Never commit API keys, tokens, certificates, credentials, private keys, or `.env` files containing secrets.
- **Environment Exclusions:** Ensure `.env*` files remain strictly excluded by `.gitignore` (only sanitized `.env.example` may be tracked).
- **Inspection:** Before staging files, inspect `git status` and diffs to confirm no credential leakage. If a secret is staged or committed locally, stop immediately, alert the user, and rotate the secret.

## 4. Pre-Commit Validation
Before creating any commit:
1. Inspect staged changes (`git diff --staged`) to ensure no unrelated, machine-generated, or secret files are included.
2. Run code formatting and lint checks.
3. Validate that commit messages adhere strictly to Conventional Commits.

## 5. Pre-Push Validation
Before pushing any branch to the remote:
1. Run strict TypeScript validation (`npm run type-check`).
2. Run automated test suites (`npm test`).
3. Run a production build (`npm run build`) to ensure zero bundling or build errors.
4. Never push failing code to the remote.

## 6. Pull Request Expectations
- Every PR must address a single, coherent objective linked to a task in `docs/TASKS.md`.
- Fill out `.github/pull_request_template.md` completely.
- Include visual proof (screenshots or video) for all UI changes on both mobile and desktop viewports.
- All CI checks and conversation threads must be resolved before merging into `main`.

## 7. Agent Permissions & Guardrails
- **No Unprompted Commits:** Never run `git commit` without explicit user instruction.
- **No Unprompted Remote Operations:** Never push (`git push`), pull, fetch, merge, or alter remotes without explicit user instruction.
- **No Branch Destruction:** Never delete branches, force-push (`--force`), or bypass review gates.
- **No History Rewriting:** Never amend (`--amend`), rebase interactively (`rebase -i`), or reset (`git reset --hard`) existing repository history.
- **No Hook Bypassing:** Never bypass Git hooks (`--no-verify`) or CI checks to conceal failures.
