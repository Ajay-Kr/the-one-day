# The One Day

> *“It was always going to be one day. Today is that day.”*  
> *One line. One pose. One photograph. One problem solved. One day at a time.*

**The One Day** is a personal journal and portfolio documenting software engineering, creative pursuits (sketching, calligraphy, origami, paper art), yoga practice rebuilding, personal photography, and curated reading reflections.

It is designed to feel thoughtful, editorial, authentic, and technically credible—balancing professional full-stack engineering capability with genuine creative exploration.

---

## Repository Structure

```text
.
├── .editorconfig                      # Universal code style & whitespace configuration
├── .gitignore                         # Build, OS, log, and secret exclusion patterns
├── .github/                           # GitHub repository templates & CI workflows
│   ├── ISSUE_TEMPLATE/                # GitHub issue templates
│   │   ├── bug_report.md              # Defect and visual glitch report template
│   │   └── feature_request.md         # Feature proposal aligned with creative pillars
│   ├── pull_request_template.md       # PR checklist distinguishing automated & human checks
│   └── workflows/                     # GitHub Actions continuous integration
│       └── pr-title.yml               # Conventional Commit PR title semantic validation
├── AGENTS.md                          # Primary agent operating instructions and source of truth
├── README.md                          # Project overview and navigation
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
└── docs/                              # Project documentation (authoritative sources)
    ├── DECISIONS.md                   # Decision register (confirmed principles & accepted architecture)
    ├── DESIGN_EXPLORATION.md          # Visual direction, typography, design constraints
    ├── DESIGN_REFERENCE_RESEARCH.md   # Comparative research on reference portfolios
    ├── GIT_GOVERNANCE.md              # Branch taxonomy, Conventional Commits, toolchain & CI plan
    ├── PROJECT_CONTEXT.md             # Project purpose, identity, pillars, MVP scope
    ├── PROJECT_MASTER_PROMPT.md       # Full master brief and long-term project vision
    ├── PROJECT_STATUS.md              # Current milestone progress, pending items, next actions
    └── TASKS.md                       # Prioritized backlog and implementation tasks
```

---

## Project Status

**Current Phase:** Phase 0 — Discovery / Setup.

- Agent instruction architecture, workspace rules, skills, and workflows are configured for Google Antigravity.
- Foundational architectural decisions and design reference research are documented.
- **Pending inputs:** Owner resume, authentic sketches/artwork, yoga/asana photographs, and personal photography.
- No frontend code or dependencies have been installed yet.

For full project background and conventions, consult [`AGENTS.md`](./AGENTS.md) and [`docs/PROJECT_CONTEXT.md`](./docs/PROJECT_CONTEXT.md).
