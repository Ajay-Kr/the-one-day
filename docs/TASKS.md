# The One Day — Backlog

**Status:** Discovery backlog updated · 2026-11-03  
**Legend:** `[ ]` Not started · `[~]` In progress · `[x]` Complete

---

## P0 — Foundation & Discovery Blockers

### T-000 — Configure Google Antigravity instructions, skills, workflows & design reference research
- **Objective:** Establish maintainable agent instructions, workspace rules, skills, workflows, and comparative reference research before application development.
- **Approach:** Create `AGENTS.md`, modular rules (`.agents/rules/`), skills (`.agents/skills/`), and workflows (`.agents/workflows/`). Produce `docs/DESIGN_REFERENCE_RESEARCH.md` and document accepted design/architecture principles (D-011 to D-019).
- **Acceptance criteria:** Rules, skills, and workflows have valid frontmatter and discoverable structure; reference research covers all three benchmark repos; accepted principles are recorded; no unverified claims or premature Next.js code.
- **Status:** `[x]` Complete

### T-000b — Establish Git and GitHub governance & repository hygiene
- **Objective:** Prepare the repository for disciplined, solo development with Google Antigravity and GitHub before application code is initialized.
- **Approach:** Initialize local Git repository on `main`; create `.gitignore` (isolating `.env*` while preserving `.env.example`), `.editorconfig`, and `.github/pull_request_template.md`; configure `.agents/rules/git-workflow.md`; document branch taxonomy, Conventional Commits, developer toolchain plan (Husky, lint-staged, Commitlint, ESLint, Prettier), proposed CI workflow, and GitHub branch protection checklist in `docs/GIT_GOVERNANCE.md`.
- **Acceptance criteria:** Conventional Commits enforced; branch prefixes documented; secret protection verified; agent Git permissions explicit (no unapproved commits, pushes, or history rewriting); no premature npm dependencies or commits.
- **Status:** `[x]` Complete

### T-001 — Collect current resume
- **Objective:** Establish accurate professional content.
- **Approach:** Review the latest resume and extract timeline, skills, projects, outcomes, and evidence.
- **Dependencies:** User uploads resume.
- **Acceptance criteria:** Professional facts are verified; unsupported claims are flagged; candidate case studies are identified.
- **Testing:** Cross-check every published claim against the resume or user confirmation.
- **Status:** `[ ]`

### T-002 — Collect creative assets
- **Objective:** Understand the real visual material available.
- **Approach:** Gather old sketches, paintings, calligraphy, origami/paper art, yoga photographs, and personal photography.
- **Dependencies:** User uploads available assets.
- **Acceptance criteria:** Assets are inventoried; context, approximate dates, and public-display restrictions are recorded where known.
- **Testing:** Check image quality, orientation, duplicates, privacy, and suitability for public display.
- **Status:** `[ ]`

### T-003 — Confirm narrative and audience priorities
- **Objective:** Balance professional credibility with personal storytelling.
- **Approach:** Define primary audiences and the first-screen message.
- **Dependencies:** Resume review.
- **Acceptance criteria:** A visitor can understand what the owner does professionally and what The One Day represents within seconds.
- **Testing:** Quick comprehension review using the proposed homepage narrative.
- **Status:** `[ ]`

### T-004 — Select visual direction & define token palette
- **Objective:** Finalize coherent design language and design tokens.
- **Approach:** Integrate The Living Journal emotional warmth with Editorial Gallery typographic discipline and Experimenter's Log structural elements using actual content.
- **Dependencies:** T-001, T-002.
- **Acceptance criteria:** Color tokens, typography scales, spacing units, image treatments, and interaction states are documented.
- **Testing:** Desktop and mobile concept review.
- **Status:** `[ ]`

### T-005 — Decide information architecture and MVP
- **Objective:** Define launch scope and route structure.
- **Approach:** Evaluate single-page, multi-page, and hybrid structures for desktop and mobile.
- **Dependencies:** T-001 to T-004.
- **Acceptance criteria:** Routes, navigation, MVP components, and deferred features are agreed.
- **Testing:** Validate recruiter journey and personal-exploration journey.
- **Status:** `[ ]`

---

## P1 — Product and Design

### T-006 — Define functional and non-functional requirements
- **Objective:** Convert discovery into buildable requirements.
- **Approach:** Specify content needs, accessibility (WCAG 2.1 AA), responsiveness, SEO, performance budgets, privacy, and contact behavior.
- **Dependencies:** T-005.
- **Acceptance criteria:** Requirements are prioritised and testable.
- **Status:** `[ ]`

### T-007 — Create wireframes and responsive layouts
- **Objective:** Validate page hierarchy before implementation.
- **Approach:** Wireframe homepage, Engineer, selected creative content, About, and Contact across mobile and desktop.
- **Dependencies:** T-004, T-005.
- **Acceptance criteria:** Desktop and mobile layouts reviewed.
- **Status:** `[ ]`

### T-008 — Define design system and component inventory
- **Objective:** Establish reusable visual rules and component primitives.
- **Approach:** Define type scale, colours, spacing, grid, image ratios, interaction states, and feature components.
- **Dependencies:** T-007.
- **Acceptance criteria:** Tokens and component inventory documented in code and design docs.
- **Status:** `[ ]`

---

## P2 — MVP Implementation

### T-009 — Initialize Next.js App Router application
- **Objective:** Initialize clean Next.js App Router foundation following accepted architectural decisions.
- **Approach:** Set up Next.js with TypeScript strict mode, Tailwind CSS, design tokens, and feature-oriented folder structure. No database, CMS, or external UI runtimes.
- **Dependencies:** T-005, T-006, T-008.
- **Acceptance criteria:** Next.js App Router builds cleanly; Server Components by default; type checking and linting pass.
- **Status:** `[ ]`

### T-010 — Build homepage and navigation
- **Objective:** Deliver the first coherent public experience.
- **Dependencies:** T-007 to T-009.
- **Acceptance criteria:** Responsive, accessible homepage with clear paths to professional content and creative chapters.
- **Testing:** Keyboard, mobile, browser, and performance checks.
- **Status:** `[ ]`

### T-011 — Build professional portfolio
- **Objective:** Present experience, skills, and selected engineering projects.
- **Dependencies:** T-001, T-009.
- **Acceptance criteria:** Verified resume content, structured case studies, and contact path.
- **Testing:** Fact-check and responsive review.
- **Status:** `[ ]`

### T-012 — Add curated personal sections
- **Objective:** Present authentic art, yoga practice, and photography.
- **Dependencies:** T-002, T-004, T-009.
- **Acceptance criteria:** Selected assets have captions/context and appropriate image optimisation.
- **Testing:** Image loading, accessibility text, privacy, and responsive gallery review.
- **Status:** `[ ]`

### T-013 — Add About and Contact
- **Objective:** Make the personal story and contact options clear.
- **Dependencies:** T-003, T-009.
- **Acceptance criteria:** Accurate About content and working contact method.
- **Testing:** Form/link validation and security review.
- **Status:** `[ ]`

### T-014 — SEO, accessibility and performance pass
- **Objective:** Prepare the MVP for public discovery and use.
- **Dependencies:** T-010 to T-013.
- **Acceptance criteria:** Metadata, semantic structure, accessible interactions, and optimised media.
- **Testing:** Lighthouse, WCAG 2.1 AA keyboard/screen-reader audit, and Core Web Vitals checks.
- **Status:** `[ ]`

---

## P3 — Production and Post-Launch

### T-015 — Deploy MVP with CI/CD
- **Objective:** Publish a maintainable first release.
- **Approach:** Select hosting, configure domain/HTTPS, and configure automated build/deploy.
- **Dependencies:** T-014.
- **Acceptance criteria:** Public deployment, documented rollback, and repeatable deployment.
- **Testing:** Production smoke test.
- **Status:** `[ ]`

### T-016 — Define The One Log content model
- **Objective:** Decide how small attempts are recorded and presented.
- **Approach:** Start with manually authored entries; evaluate database/CMS only when justified.
- **Dependencies:** MVP launch and content cadence.
- **Acceptance criteria:** Entries can be added without daily-pressure mechanics or streaks.
- **Status:** `[ ]`

### T-017 — Build personal reading archive
- **Objective:** Present books, anime, and manga as a personal archive.
- **Approach:** Original commentary, titles, metadata, and links; avoid unlicensed panels/screenshots.
- **Dependencies:** Content curation.
- **Acceptance criteria:** Clear personal framing and copyright-conscious presentation.
- **Status:** `[ ]`

### T-018 — Advanced infrastructure experiments
- **Objective:** Learn system design through justified experiments.
- **Approach:** Evaluate caching, object storage/CDN, serverless, load balancing, observability, IaC, and Kubernetes individually.
- **Dependencies:** A demonstrated need or explicit learning experiment.
- **Acceptance criteria:** Each experiment has a problem statement, alternatives, trade-offs, and cleanup plan.
- **Status:** `[ ]`

---

## Current Next Actions
1. User shares latest resume.
2. User shares available sketches, yoga photographs, and personal photography.
3. Review assets and professional content.
4. Confirm visual token palette, information architecture, and route structure.
