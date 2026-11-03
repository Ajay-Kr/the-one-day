# The One Day

> _“It was always going to be one day. Today is that day.”_  
> _One line. One pose. One photograph. One problem solved. One day at a time._

**The One Day** is a personal journal and portfolio documenting software engineering, creative pursuits (sketching, calligraphy, origami, paper art), yoga practice rebuilding, personal photography, and curated reading reflections.

It is designed to feel thoughtful, editorial, authentic, and technically credible—balancing professional full-stack engineering capability with genuine creative exploration.

---

## Repository Structure

```text
.
├── .commitlintrc.json                 # Conventional Commits rules configuration
├── .editorconfig                      # Universal code style & whitespace configuration
├── .gitignore                         # Build, OS, log, and secret exclusion patterns
├── .github/                           # GitHub repository templates & CI workflows
│   ├── ISSUE_TEMPLATE/                # GitHub issue templates
│   │   ├── bug_report.md              # Defect and visual glitch report template
│   │   └── feature_request.md         # Feature proposal aligned with creative pillars
│   ├── pull_request_template.md       # PR checklist distinguishing automated & human checks
│   └── workflows/                     # GitHub Actions workflows
│       ├── ci.yml                     # Continuous integration (install, lint, typecheck, build)
│       └── pr-title.yml               # Conventional Commit PR title semantic validation
├── .husky/                            # Git hook automation (commit-msg, pre-commit, pre-push)
├── .lintstagedrc.json                 # Staged files linter & formatter configuration
├── .nvmrc                             # Node.js runtime version pinned to 24
├── .prettierignore                    # Prettier ignored paths
├── .prettierrc.json                   # Prettier formatting rules
├── AGENTS.md                          # Primary agent operating instructions and source of truth
├── README.md                          # Project overview, workflow, and navigation
├── eslint.config.mjs                  # ESLint flat configuration (Next.js + TypeScript strict)
├── next.config.ts                     # Next.js configuration
├── package.json                       # Project dependencies, scripts, and package manager config
├── pnpm-lock.yaml                     # Deterministic pnpm dependency lockfile
├── postcss.config.mjs                 # PostCSS configuration with Tailwind CSS & Autoprefixer
├── tailwind.config.ts                 # Tailwind configuration with Living Journal design tokens
├── tsconfig.json                      # Strict TypeScript compiler configuration with @/* alias
├── .agents/                           # Google Antigravity IDE configuration
│   ├── rules/                         # Workspace rules with trigger conditions
│   │   ├── content-integrity.md       # Prohibition against content fabrication
│   │   ├── frontend-standards.md      # Code standards, Server Components, design tokens
│   │   ├── git-workflow.md            # Conventional Commits, branch taxonomy, agent guardrails
│   │   └── product-principles.md      # Product philosophy, audience balance, authenticity
│   ├── skills/                        # Multi-step repeatable procedures (progressive disclosure)
│   │   ├── frontend-design/           # UI design tokens, editorial layout, typography
│   │   ├── responsive-accessibility/  # Breakpoints, WCAG AA, keyboard navigation, reduced motion
│   │   ├── project-validation/        # Typecheck, linting, build, asset audits
│   │   └── case-study-authoring/      # Engineering case studies and authentic logs
│   └── workflows/                     # Manual invocation slash workflows
│       ├── plan-feature.md            # /plan-feature
│       ├── implement-feature.md       # /implement-feature
│       ├── review-ui.md               # /review-ui
│       └── update-project-docs.md     # /update-project-docs
├── docs/                              # Project documentation (authoritative sources)
│   ├── DECISIONS.md                   # Decision register (confirmed principles & accepted architecture)
│   ├── DESIGN_EXPLORATION.md          # Visual direction, typography, design constraints
│   ├── DESIGN_REFERENCE_RESEARCH.md   # Comparative research on reference portfolios
│   ├── GIT_GOVERNANCE.md              # Branch taxonomy, Conventional Commits, toolchain & CI plan
│   ├── PROJECT_CONTEXT.md             # Project purpose, identity, pillars, MVP scope
│   ├── PROJECT_MASTER_PROMPT.md       # Full master brief and long-term project vision
│   ├── PROJECT_STATUS.md              # Current milestone progress, pending items, next actions
│   └── TASKS.md                       # Prioritized backlog and implementation tasks
└── src/                               # Application source code
    ├── app/                           # Next.js App Router (layouts, pages, globals.css)
    ├── components/                    # Shared presentation components
    │   ├── layout/                    # Header, footer, container primitives
    │   ├── ui/                        # Reusable design token primitives
    │   └── sections/                  # Broad multi-component section wrappers
    ├── features/                      # Feature-oriented domain modules
    │   ├── engineering/               # The Engineer pillar (case studies, tech stack)
    │   ├── creative/                  # The Artist & The Practice pillars (art, yoga)
    │   ├── reading/                   # The Reader pillar (books, manga archive)
    │   └── journey/                   # The One Log & progress journal
    ├── content/                       # Static structured content & MDX
    │   ├── projects/                  # Verified project data
    │   └── journal/                   # Personal reflections & entries
    └── lib/                           # Shared utilities and helpers
```

---

## Getting Started

### Prerequisites

- **Node.js:** `>= 24.0.0` (v24 LTS recommended)
- **pnpm:** `>= 10.0.0` (`corepack enable` or `brew install pnpm`)

### Installation

Clone the repository and install dependencies using the committed lockfile:

```bash
pnpm install
```

Husky Git hooks (`commit-msg`, `pre-commit`, `pre-push`) are automatically registered upon installation.

### Local Development

Start the Next.js local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Validation & Quality Gates

Run the local validation suite to verify code quality before committing:

```bash
# Type check strictly with TypeScript
pnpm run type-check

# Lint with ESLint
pnpm run lint

# Check code formatting with Prettier
pnpm run format:check

# Format files with Prettier
pnpm run format:write

# Execute production build audit
pnpm run build
```

---

## Project Status

**Current Phase:** Phase 1 — Foundation Initialised / Awaiting Assets.

- Technical foundation initialised with Next.js 15 (App Router), React 19, TypeScript strict mode, and Tailwind CSS.
- Living Journal design tokens (paper ground, charcoal ink, chapter accents) active in `src/app/globals.css` and `tailwind.config.ts`.
- Developer tooling (Husky, lint-staged, Commitlint, Prettier, ESLint) and GitHub Actions CI pipelines (`ci.yml`, `pr-title.yml`) configured and validated.
- **Pending inputs:** Owner resume, authentic sketches/artwork, yoga/asana photographs, and personal photography.

For full project background and conventions, consult [`AGENTS.md`](./AGENTS.md) and [`docs/PROJECT_CONTEXT.md`](./docs/PROJECT_CONTEXT.md).
