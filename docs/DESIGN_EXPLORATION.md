# The One Day — Design Exploration

**Status:** Discovery draft · 2026-11-03  
**Accepted Principles Reference:** [`docs/DECISIONS.md`](./DECISIONS.md) (D-011 to D-019)  
**Reference Research:** [`docs/DESIGN_REFERENCE_RESEARCH.md`](./DESIGN_REFERENCE_RESEARCH.md)

---

## Identity

**THE ONE DAY — EST. 2026**

> _It was always going to be one day._  
> _Today is that day._  
> _A little bit of code. A little bit of art. A little bit of everything I've wanted to explore._

Supporting line: **One line. One pose. One photograph. One problem solved. One day at a time.**

The site should feel like a personal record of beginning, practising, building, and exploring—not a generic developer template or motivational landing page.

---

## Visual directions to explore

### A — The Living Journal

- Warm paper/off-white surfaces, ink-like typography, and restrained earthy accents.
- Handwritten annotations, dates, scanned artwork, and personal photographs.
- Sketchbook and field-journal cues, used selectively.
- Risk: can become scrapbook-like or reduce professional clarity.

### B — The Editorial Gallery

- Strong typography, generous whitespace, asymmetric but disciplined grids.
- Curated imagery and exhibition/catalogue-like presentation.
- Mature, composed, and polished.
- Risk: may feel too art-directed or impersonal without authentic material.

### C — The Experimenter's Log

- Modular layouts, dates, numbered entries, monospaced labels, and technical diagrams.
- Useful for engineering case studies and progress records.
- Risk: can resemble a dashboard or productivity tracker.

---

## Working recommendation (provisional)

Use **A — The Living Journal** as the emotional foundation, borrow the typographic discipline of **B — The Editorial Gallery**, and use selected structural elements from **C — The Experimenter's Log** for technical case studies and The One Log.

---

## Accepted design & architectural principles

Per [`docs/DECISIONS.md`](./DECISIONS.md):

1. **Content-First Design (D-011):** Layouts adapt to authentic assets (sketches, yoga photos, project timelines) rather than forcing content into rigid template slots.
2. **Editorial Consistency with Controlled Chapter-Level Variation (D-012):** Cohesive paper-tone surfaces and typography across all sections, with subtle layout shifts tailored to specific pillars (e.g., technical tables for The Engineer vs. organic galleries for The Artist).
3. **Design Tokens (D-013):** Strict central tokens for colors, typography scales, spacing units, and border radiuses. Zero arbitrary inline hex codes or magic values.
4. **Composition Over Inheritance (D-014):** Build UI using small, focused, composable React component primitives.
5. **Server Components by Default (D-015):** Next.js App Router RSC by default; client components (`"use client"`) isolated to interactive leaf nodes (D-016).
6. **Accessibility and Performance (D-017):** WCAG 2.1 AA compliance, visible `:focus-visible` indicators, and strict `prefers-reduced-motion` compliance.
7. **Feature-Oriented Organization (D-018):** Group components and logic by domain feature (e.g., `features/engineer/`, `features/journal/`).
8. **Minimal Dependencies (D-019):** No heavy UI libraries, CSS-in-JS runtimes, animation engines, or databases without explicit justification.

---

## Homepage copy candidate

**THE ONE DAY**  
**EST. 2026**

**It was always going to be one day. Today is that day.**

A little bit of code. A little bit of art. A little bit of everything I've wanted to explore.

SCROLL TO EXPLORE

---

## Six conceptual pillars

1. **The Engineer** — “I build things that work.”
2. **The Artist** — “One line at a time.”
3. **The Practice** — “One movement at a time.”
4. **The Explorer** — “The world through my lens.”
5. **The Reader** — “Lost in another world.”
6. **The Journey** — “Still becoming.”

These represent a conceptual structure, not a commitment to six equal-sized navigation destinations.

---

## Design constraints

- Professional information must be discoverable within seconds.
- Prefer authentic personal photographs and artwork over generic stock imagery.
- Keep animation restrained and purposeful; strictly respect `prefers-reduced-motion`.
- Prioritise readability, responsive behaviour, accessibility, performance, and SEO.
- Avoid excessive gradients, glassmorphism, parallax, and decorative complexity.
- Do not use copyrighted manga panels or anime screenshots as a substitute for original content.

---

## Open design questions

- Single scrolling page, multi-page site, or hybrid?
- Which visual direction best fits the actual resume and available assets once received?
- Which sections deserve dedicated routes vs. modal/in-page overlays?
- What is the precise token palette (primary paper tone, ink color, accent tints)?
