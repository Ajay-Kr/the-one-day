# The One Day — Decision Register

**Last updated:** 2026-11-03

This register distinguishes confirmed project principles and accepted architectural standards from recommendations that still require owner approval.

---

## Confirmed product principles

### D-001 — Project identity
- **Decision:** Use the name **The One Day**, established 2026.
- **Rationale:** The name expresses the decision to stop postponing meaningful interests and begin through small, consistent actions.
- **Status:** Accepted.

### D-002 — Authenticity over artificial expertise
- **Decision:** Present the owner as a software engineer with multiple interests, not as an expert in every interest.
- **Rationale:** The portfolio should document genuine exploration and growth.
- **Status:** Accepted.

### D-003 — Professional identity remains easy to discover
- **Decision:** Engineering experience, projects, skills, and contact details must be quickly accessible within seconds.
- **Rationale:** The site is first and foremost a credible professional portfolio.
- **Status:** Accepted.

### D-004 — Progress without streak pressure
- **Decision:** Any journal/progress feature (e.g., The One Log) must avoid guilt-inducing missed-day indicators, mandatory daily publishing, and artificial streak mechanics.
- **Rationale:** The feature should encourage returning, not punish absence.
- **Status:** Accepted.

### D-005 — Avoid premature infrastructure
- **Decision:** Do not add technologies solely to demonstrate them; keep the architecture modular and avoid premature databases, CMSs, microservices, or authentication.
- **Rationale:** The public product and learning goals should complement, not compete with, each other.
- **Status:** Accepted.

### D-006 — Copyright-conscious reading archive
- **Decision:** The Reader section should use original commentary, book/manga titles, and external links rather than relying on unlicensed manga panels or anime broadcast screenshots.
- **Rationale:** Preserve a personal archive without unnecessary copyright risk.
- **Status:** Accepted.

---

## Accepted architectural and design principles

### D-011 — Content-first design
- **Decision:** Design layouts, typographic scales, and component containers to accommodate authentic owner content, rather than forcing content into generic template grids.
- **Rationale:** Authentic sketches, yoga photographs, and project timelines vary in aspect ratio, length, and detail. Layouts must serve the content.
- **Status:** Accepted.

### D-012 — Editorial consistency with controlled chapter-level variation
- **Decision:** Maintain a cohesive editorial foundation (warm paper surfaces, ink-like typography, generous whitespace) across the site, while allowing subtle, disciplined styling shifts tailored to each pillar (e.g., structured technical tables for The Engineer vs. organic gallery arrangements for The Artist).
- **Rationale:** Unifies the diverse facets of the portfolio into a single, cohesive journal while respecting the distinct visual nature of each discipline.
- **Status:** Accepted.

### D-013 — Design tokens
- **Decision:** Define and enforce centralized design tokens for colors, typography scales, spacing units, border radii, and elevation shadows.
- **Rationale:** Prevents styling fragmentation, eliminates arbitrary magic numbers, and ensures consistent visual rhythm and theme maintainability.
- **Status:** Accepted.

### D-014 — Composition over inheritance
- **Decision:** Build the UI using small, focused, composable React component primitives rather than monolithic components or complex inheritance hierarchies.
- **Rationale:** Encourages code reuse, simplifies testing, makes refactoring safe, and aligns with modern React standards.
- **Status:** Accepted.

### D-015 — Server Components by default
- **Decision:** In Next.js App Router, implement all components as React Server Components (RSC) by default.
- **Rationale:** Minimizes client JavaScript bundle size, improves initial page load speed, enhances SEO, and delivers fast First Contentful Paint (FCP).
- **Status:** Accepted.

### D-016 — Client Components only where interaction requires them
- **Decision:** Restrict `"use client"` directives exclusively to leaf-node components requiring state, browser event listeners, or client-only APIs (such as mobile menu toggles or copy-to-clipboard buttons).
- **Rationale:** Prevents unnecessary client hydration boundaries from creeping into layout and static content layers.
- **Status:** Accepted.

### D-017 — Accessibility and performance as design requirements
- **Decision:** Treat WCAG 2.1 AA accessibility and Core Web Vitals performance as non-negotiable architectural requirements, not post-launch polish.
- **Rationale:** Accessible semantic markup, keyboard focus states, contrast ratios, and `prefers-reduced-motion` compliance guarantee an inclusive, high-quality engineering benchmark.
- **Status:** Accepted.

### D-018 — Feature-oriented component organisation
- **Decision:** Organize components, utilities, and types into feature-based directories (e.g., `features/engineer/`, `features/journal/`, `features/shared/`) rather than flat, monolithic category directories.
- **Rationale:** Keeps related domain logic colocated, clarifies boundaries between site chapters, and simplifies long-term maintenance.
- **Status:** Accepted.

### D-019 — Minimal dependencies and no unnecessary backend infrastructure
- **Decision:** Rely on modern standard web technologies (TypeScript, Next.js, Tailwind CSS) and avoid adding external component libraries, CSS-in-JS runtimes, heavy animation engines, databases, or CMS services without explicit justification.
- **Rationale:** Reduces supply-chain complexity, eliminates runtime bloat, and keeps the codebase simple and maintainable.
- **Status:** Accepted.

### D-020 — Git and GitHub governance
- **Decision:** Enforce Conventional Commits (`type(optional-scope): description`), branch prefix taxonomy (`feat/`, `fix/`, `refactor/`, `chore/`, `docs/`, `test/`), short-lived branches merging into a protected `main` trunk via Pull Requests, strict secret isolation (`.env*` excluded except `.env.example`), and automated pre-commit / CI verification.
- **Rationale:** Protects the production trunk from regressions, maintains an auditable history, prevents credential leaks, and creates a disciplined workflow for solo and agent-assisted development.
- **Status:** Accepted.

---

## Provisional recommendations (requiring owner confirmation)

### D-007 — Visual direction
- **Recommendation:** **The Living Journal** as the emotional foundation, borrowed typographic discipline from **The Editorial Gallery**, and structural clarity from **The Experimenter's Log** for technical case studies.
- **Status:** Proposed — awaiting asset review and owner confirmation.

### D-008 — Information architecture & routing
- **Recommendation:** Dual-track homepage: immediate recruiter/engineer discoverability plus chapter gateways for creative pillars; explore hybrid single-page + detail route structure.
- **Status:** Proposed.

### D-009 — The One Log data model
- **Recommendation:** Static typed JSON/TypeScript data records initially; defer database integration until real update cadence demands it.
- **Status:** Proposed.

### D-010 — MVP scope
- **Recommendation:** Homepage, Engineer portfolio with case studies, About, Contact, curated authentic creative material (sketches, yoga photos, photography), responsive design, accessibility, and static deployment.
- **Status:** Proposed — confirm after asset discovery.

---

## Decision protocol
For each material technical decision, record the context, alternatives, trade-offs, learning value, and status. Do not silently change accepted decisions; explain new evidence and propose updates.
