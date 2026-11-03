---
name: project-validation
description: Systematic verification protocol to run type checking, linting, build audits, performance assessments, and asset checks for The One Day. Use before completing any code changes or committing features.
---

# Project Validation Skill — The One Day

Use this procedure systematically before completing tasks, opening pull requests, or committing code to maintain high technical rigour and avoid regressions.

---

## Procedure

### Step 1: Type Checking

1. Run strict TypeScript validation:
   ```bash
   pnpm run type-check # or pnpm exec tsc --noEmit
   ```
2. Verify:
   - Zero type errors.
   - No implicit or explicit `any` types introduced.
   - All component props, API parameters, and data models have explicit interfaces.

### Step 2: Linting & Code Formatting

1. Run the project linter:
   ```bash
   pnpm run lint
   ```
2. Check and format code:
   ```bash
   pnpm run format:check # or pnpm run format:write
   ```
3. Fix all lint errors and warnings before proceeding. Ensure imports are organized and unused variables/dependencies are removed.

### Step 3: Production Build Verification

1. Run the production build command:
   ```bash
   pnpm run build
   ```
2. Verify:
   - The build succeeds without fatal errors or unhandled promises.
   - Next.js static generation succeeds for all static routes.
   - Dynamic and client components bundle cleanly without server-side leaks.

### Step 4: Asset & Route Integrity Check

1. Validate that all referenced media paths (images, fonts, favicons) resolve to valid files.
2. Check internal anchor links and navigation routes to prevent 404 dead ends.
3. Verify that authentic user assets have proper metadata (caption, year, dimensions) and no broken image tags are rendered.

### Step 5: Performance & Bundle Audit

1. Inspect the production build output for bundle size regressions:
   - Identify any unexpectedly large client-side bundles.
   - Verify that external dependencies are not needlessly included in client bundles.
2. Ensure image assets use modern formats (`webp`, `avif`) with explicit aspect ratios to prevent Cumulative Layout Shift (CLS).

### Step 6: Reporting Validation Results

1. Document the exact checks executed in the task completion report.
2. If any check could not be executed (for example, if dependencies or scripts are not yet installed in Phase 0), explicitly state why and what command should be run once the application setup is initialized.
