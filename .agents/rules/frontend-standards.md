---
trigger: glob
globs: "*.{ts,tsx,js,jsx,css,scss,html}"
description: "Frontend architecture standards, React Server Components, design tokens, responsive layout, accessibility, and component composition."
---

# Frontend Standards — The One Day

## 1. Architectural Principles

- **Content-First Design:** Component layouts, typographic rhythm, and spacing adapt to authentic content, not vice versa.
- **Server Components by Default:** In Next.js App Router, all components are React Server Components unless client state, browser events, or browser APIs are strictly required.
- **Selective Client Components:** Mark components with `"use client"` only at the leaf nodes that require client-side interactivity.
- **Composition Over Inheritance:** Assemble interfaces via modular, composable component primitives rather than monolithic components or complex inheritance trees.
- **Feature-Oriented Organization:** Group components, types, and helpers by feature or domain chapter (e.g., `features/engineer/`, `features/journal/`, `features/shared/`) rather than flat monolithic directories.
- **Minimal Dependencies:** Avoid external UI libraries, animation engines, or utility packages unless vanilla HTML/CSS/Tailwind primitives cannot cleanly solve the problem.

## 2. Design System & Editorial Discipline

- **Design Tokens:** Strictly use defined design tokens for typography, spacing, color scales, elevations, and border radiuses. Do not introduce arbitrary magic numbers or one-off arbitrary hex codes.
- **Editorial Consistency with Controlled Chapter Variation:** Maintain a coherent editorial baseline (Living Journal warm surfaces, typography, restrained margins) across the entire site, while permitting subtle accent and layout shifts tailored to specific pillars (e.g., structured technical tables for The Engineer vs. gallery layouts for The Artist).
- **Restrained Motion:** Use CSS transitions for subtle hover states and disclosures. Respect `prefers-reduced-motion: reduce` unconditionally by disabling or drastically simplifying motion.

## 3. TypeScript & Code Standards

- **Strict Typing:** All code must be strictly typed (`strict: true`). Explicitly define interfaces and types for all props, data entities, and function returns.
- **No `any`:** `any` is forbidden. Use `unknown`, generic parameters, or explicit union types.
- **Immutable & Pure Patterns:** Prefer immutability and pure rendering functions. Avoid side-effects outside explicit React lifecycle primitives.

## 4. Accessibility & Performance

- **Accessibility as a Core Requirement:** Achieve WCAG 2.1 AA compliance across all pages.
  - Use semantic HTML landmarks (`<main>`, `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`).
  - Ensure interactive elements are keyboard focusable with high-visibility `:focus-visible` outlines.
  - Provide meaningful `alt` text for all informative images and mark purely decorative elements with `aria-hidden="true"`.
  - Maintain color contrast ratios of at least 4.5:1 for normal text and 3:1 for large text.
- **Performance Budgets:**
  - Zero unnecessary runtime JavaScript.
  - Leverage modern Next.js Image optimization (proper `sizes`, responsive srcset, AVIF/WebP formats).
  - Eliminate layout shifts (CLS < 0.1) by reserving space for dynamic media.
