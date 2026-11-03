# The One Day — Git and GitHub Governance

**Status:** Confirmed Architecture Standard · Updated 2026-11-03  
**Accepted Decision:** [`docs/DECISIONS.md`](./DECISIONS.md) (`D-020`)  
**Workspace Rule:** [`.agents/rules/git-workflow.md`](../.agents/rules/git-workflow.md)  
**Repository State:** Initial commit pushed to `main` on GitHub (`origin: git@github.com:Ajay-Kr/the-one-day.git`)

---

## 1. Overview & Objective

To ensure high technical quality, reproducibility, and safety during development of **The One Day**, this document defines the governance rules, branch strategy, commit conventions, tooling architecture, CI design, and GitHub branch protection standards.

Even in solo development, strict automation and branch governance:
- Protect `main` from broken builds and runtime regressions.
- Ensure all commits tell a clean, searchable story.
- Enforce automated quality gates before any code merges.
- Prevent accidental leakage of personal credentials or unverified claims.

The initial repository documentation, agent configuration, and baseline governance files have already been committed and pushed to `main` on GitHub (`87e5fcd`). All future changes must follow the pull request workflow documented below.

---

## 2. Branch Strategy

### The Trunk (`main`)
- `main` is the production-ready trunk.
- Every commit on `main` must pass all linting, type checking, testing, and production build checks.
- Direct pushes to `main` are restricted. All changes merge into `main` via reviewed Pull Requests.

### Short-Lived Task Branches
- Every task begins on a dedicated, short-lived branch cut from the latest `main`.
- Branch naming follows this strict prefix taxonomy:

| Branch Prefix | Purpose | Example |
| :--- | :--- | :--- |
| `feat/` | New feature or user-facing capability | `feat/portfolio-hero` |
| `fix/` | Bug fix or defect remediation | `fix/mobile-nav-contrast` |
| `refactor/` | Code reorganization without functional changes | `refactor/token-structure` |
| `chore/` | Tooling, configuration, or hygiene | `chore/update-git-governance` |
| `docs/` | Documentation additions or revisions | `docs/design-reference-research` |
| `test/` | Adding or correcting test suites | `test/case-study-parser` |

Branches must be deleted after merging to keep the repository clean.

---

## 3. Commit Message & PR Title Conventions (Conventional Commits)

All commits and Pull Request titles in this repository must strictly adhere to the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/) specification.

### Format
```text
type(optional-scope): description

[optional body]

[optional footer(s)]
```

### Allowed Types
- `feat`: A new user-facing feature or capability.
- `fix`: A bug fix or defect remediation.
- `docs`: Documentation changes only.
- `style`: Changes that do not affect code logic (whitespace, formatting, semicolons).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `build`: Changes that affect the build system or external dependencies.
- `ci`: Changes to CI configuration files and scripts.
- `chore`: Maintenance, repository hygiene, or auxiliary tasks.
- `revert`: Reverts a previous commit.

### Style Rules
- Type and scope must be lowercase.
- Description must be concise, imperative, and present tense (e.g., `add editorial typography tokens`, NOT `added` or `adds`).
- No trailing period in the description or PR title.
- Breaking changes must include `!` before the colon (e.g., `feat(api)!: migrate endpoint`) or a `BREAKING CHANGE:` footer.

### PR Title Validation vs. Local Commit Validation
A two-layer enforcement mechanism ensures that commit history remains pristine:

1. **Pull Request Title Validation (Automated GitHub Workflow):**
   - Active immediately via [`.github/workflows/pr-title.yml`](../.github/workflows/pr-title.yml).
   - Powered by `amannn/action-semantic-pull-request` running on `pull_request_target`.
   - Validates that the PR title conforms strictly to Conventional Commits.
   - When squash-merging on GitHub, the validated PR title becomes the squash commit headline on `main`. This guarantees an unbroken, pristine semantic history on `main` regardless of individual branch commits.
2. **Local Commit-Message Validation (Developer Toolchain):**
   - Enforced on the developer's local machine via Commitlint and Husky (`commit-msg` hook) once the npm toolchain is installed in Phase 2.
   - Ensures individual commits on task branches remain clean during development.

---

## 4. Repository Hygiene, Templates & Secret Protection

### Files in Place
- [`.gitignore`](../.gitignore): Excludes operating system artifacts (`.DS_Store`), dependencies (`node_modules`), Next.js build output (`.next/`, `out/`), and temporary logs.
- **Environment Isolation:** `.gitignore` enforces `.env*` exclusion while explicitly permitting `.env.example` (`!.env.example`).
- [`.editorconfig`](../.editorconfig): Standardizes 2-space indentation, UTF-8 charset, LF line endings, and trailing newline trimming across all development environments.
- [`.github/pull_request_template.md`](../.github/pull_request_template.md): Standardized PR template with clear separation between automated checks and human declarations.
- [`.github/ISSUE_TEMPLATE/bug_report.md`](../.github/ISSUE_TEMPLATE/bug_report.md): Streamlined bug reporting form with device, viewport, and reproduction steps.
- [`.github/ISSUE_TEMPLATE/feature_request.md`](../.github/ISSUE_TEMPLATE/feature_request.md): Feature proposal template aligned with The One Day's pillars and core philosophy.
- [`.github/workflows/pr-title.yml`](../.github/workflows/pr-title.yml): Lightweight, dependency-free PR title semantic validation workflow.

### PR Checklist vs. Automated Enforcement
To ensure clarity during development and code review, verification duties are split into two complementary layers:

| Layer | Responsibility | Enforced By | Scope |
| :--- | :--- | :--- | :--- |
| **Automated Checks** | Deterministic code validation | GitHub Actions (`pr-title.yml`, future `ci.yml`) | PR title syntax, TypeScript compilation, linting, unit tests, production build |
| **Human Declarations** | Qualitative & ethical standards | Author & Reviewer checklist sign-off in PR template | Content integrity (no fabricated stories/metrics), real mobile/tablet responsive testing, WCAG 2.1 AA keyboard/contrast audits, reduced-motion compliance, secret exclusion, documentation synchronization |

### Strict Non-Ignored Elements
The following directories and files must **never** be ignored by `.gitignore`:
- `AGENTS.md` and `README.md`
- `.agents/` (workspace rules, skills, workflows)
- `docs/` (all project documentation)
- `.github/` (issue templates, PR template, workflows)
- Lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`)

---

## 5. Development Toolchain Plan

To automate code quality locally before pushing, the following tools will be installed **after** the Next.js application is initialized (preventing orphan dependencies in Phase 0):

```text
Developer Workflow Pipeline:
git commit -> Commitlint (verify format) -> lint-staged (Prettier + ESLint) -> Staged Commit
git push   -> Pre-push Hook (Typecheck + Unit Tests + Production Build) -> Remote
```

### 1. Husky (`^9.x`)
- Manages Git hooks in `.husky/`.
- Hooks configured:
  - `commit-msg`: Runs `npx --no -- commitlint --edit "$1"` to enforce Conventional Commits.
  - `pre-commit`: Runs `npx lint-staged` to format and lint staged files.
  - `pre-push`: Runs `npm run type-check && npm test` to prevent pushing broken code.

### 2. lint-staged (`^15.x`)
- Restricts linting and formatting strictly to staged files for sub-second execution.
- Planned configuration in `package.json` or `.lintstagedrc.json`:
  ```json
  {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css,scss,yml,yaml}": [
      "prettier --write"
    ]
  }
  ```

### 3. Commitlint (`@commitlint/cli`, `@commitlint/config-conventional`)
- Validates that commit messages match our allowed types and format.
- Planned configuration in `.commitlintrc.json`:
  ```json
  {
    "extends": ["@commitlint/config-conventional"],
    "rules": {
      "type-enum": [
        2,
        "always",
        [
          "feat", "fix", "docs", "style", "refactor",
          "perf", "test", "build", "ci", "chore", "revert"
        ]
      ],
      "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]]
    }
  }
  ```

### 4. Prettier & ESLint
- **Prettier:** Enforces consistent editorial formatting (2 spaces, single quotes or standard JSX quotes, trailing commas).
- **ESLint:** Configured with `next/core-web-vitals`, `@typescript-eslint/recommended`, and `eslint-plugin-jsx-a11y` for strict accessibility validation during development.

---

## 6. Continuous Integration (CI) Architecture

Continuous integration is rolled out in two deliberate stages to prevent CI pipeline failures:

### Stage 1: PR Title Semantic Validation (Active Immediately)
- Configured in [`.github/workflows/pr-title.yml`](../.github/workflows/pr-title.yml).
- Requires zero package dependencies or build scripts.
- Runs on `pull_request_target` with minimal `pull-requests: read` permission.
- Verifies PR titles against Conventional Commits before any merge can proceed.

### Stage 2: Application CI (Deferred until Next.js Initialization)
- The full application CI pipeline (`.github/workflows/ci.yml`) is intentionally deferred until Task `T-009` (Initialize Next.js application).
- Creating it earlier would cause immediate CI failures because `package.json`, `npm run lint`, `npm run type-check`, and `npm run build` do not yet exist.

#### Proposed Stage 2 Workflow Definition (`.github/workflows/ci.yml`)

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    name: Build, Lint & Verify
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Check code formatting (Prettier)
        run: npx prettier --check .

      - name: Lint code & accessibility (ESLint)
        run: npm run lint

      - name: TypeScript type check
        run: npm run type-check

      - name: Run automated tests
        run: npm test --if-present

      - name: Production build audit
        run: npm run build
        env:
          NEXT_TELEMETRY_DISABLED: 1
```

---

## 7. GitHub Main Branch Protection Settings Checklist

The repository on GitHub is public. The repository owner should configure the following branch protection settings manually via GitHub's web interface (**Settings > Branches > Add branch ruleset** or **Branch protection rule** for `main`):

### Immediate Protection Settings (Ready Now)
- [ ] **Branch name pattern:** Set to `main`.
- [ ] **Require a pull request before merging:**
  - Check *Require a pull request before merging*.
  - Set *Required approvals* to `0` (for solo development) or `1` if collaborating.
  - Check *Dismiss stale pull request approvals when new commits are pushed*.
- [ ] **Require status checks to pass before merging:**
  - Check *Require status checks to pass before merging*.
  - Check *Require branches to be up to date before merging*.
  - **Status Check to require now:** `Validate PR Title` (the job name defined in `.github/workflows/pr-title.yml`). *Note: In GitHub's search box, search for `Validate PR Title` after opening your first pull request.*
- [ ] **Require conversation resolution before merging:**
  - Check *Require conversation resolution before merging*. Ensures no unanswered questions or review comments remain open.
- [ ] **Do not allow bypassing the above settings:**
  - Check *Do not allow bypassing the above settings* (enforces rules even for the repo owner, preventing accidental direct pushes).
- [ ] **Restrict deletions and force pushes:**
  - Check *Lock branch* / Ensure *Allow force pushes* is **unchecked** (disabled).
  - Ensure *Allow deletions* is **unchecked** (disabled).
- [ ] **Pull Request Merge Method:**
  - In **Settings > General > Pull Requests**:
    - [x] Allow squash merging (recommended for clean task-based history on `main`).
    - [x] Default commit message: Set to *Pull request title and description* or *Pull request title*.
    - [x] Automatically delete head branches (cleans up short-lived task branches upon merge).

### Future Protection Settings (After Next.js Setup)
- [ ] Once the application CI workflow (`ci.yml`) is activated in Task `T-009`, add the second required status check: `Build, Lint & Verify` (job ID `validate`).

---

## 8. Agent Permissions & Boundaries

Antigravity operates under strict constraints regarding repository history:
1. **Never commit without explicit instruction:** The agent must never call `git commit` unless the user explicitly requests a commit.
2. **Never push or modify remotes:** The agent must never execute `git push`, change remote URLs, or alter remote branches.
3. **Never rewrite history:** The agent must never use `git rebase -i`, `git commit --amend`, `git reset --hard`, or force pushes.
4. **Never bypass hooks:** The agent must never append `--no-verify` to bypass Git hooks.
5. **PR Compliance:** When drafting pull requests, the agent must strictly follow Conventional Commits for the PR title and complete `.github/pull_request_template.md`.
