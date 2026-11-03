---
name: frontend-design
description: Procedures and guidelines for designing and implementing UI components, layout grids, typography hierarchies, and design token integration for The One Day. Use when creating, modifying, or reviewing visual components and page layouts.
---

# Frontend Design Skill — The One Day

Use this procedure when developing, styling, or refining UI components and page layouts for The One Day. The design language fuses **The Living Journal** (warm paper textures, thoughtful typography) with **Editorial Gallery** discipline and **Experimenter's Log** structural clarity.

---

## Procedure

### Step 1: Content & Typographic Hierarchy
1. Review the content before writing markup. Ensure visual hierarchy naturally emphasizes readability.
2. Apply typographic roles consistently:
   - **Editorial Headlines:** Expressive serif or high-character editorial font for prominent titles and philosophy quotes.
   - **Body Text:** Highly legible sans-serif or refined transitional serif optimized for sustained reading (line length 45–75 characters, line height 1.6–1.7).
   - **Metadata & Labels:** Monospaced or clean small-caps styling for dates, tags, technical annotations, and status markers.

### Step 2: Design Token Application
1. Reference central design tokens for all visual attributes:
   - **Color:** Warm surface backgrounds (paper/stone/light canvas), deep ink-like text, muted borders, and restrained accents.
   - **Spacing:** Proportional spacing units (e.g., 4px baseline: 4, 8, 12, 16, 24, 32, 48, 64, 96px).
   - **Borders & Shadows:** Delicate borders (1px subtle rules), tactile rounded corners, and soft, natural shadows rather than sharp synthetic drop-shadows.
2. Never inject arbitrary inline styles or unmapped hex codes into components.

### Step 3: Component Composition & Layout
1. Default to **React Server Components**. Extract interactivity into minimal, client-only leaves using `"use client"`.
2. Construct layouts using compositional primitives:
   - Use container wrappers with maximum readable widths (e.g., `max-w-4xl` for articles, `max-w-6xl` for galleries).
   - Use asymmetric grids and intentional whitespace to give sections an editorial, human feel.
   - Separate chapter pillars with clear visual breathing room.

### Step 4: Motion & Micro-interactions
1. Limit motion to purposeful feedback: subtle link hovers, gentle disclosure accordions, and restrained page transitions.
2. Implement transitions using CSS transforms and opacity (`duration-150` to `duration-250` ease-out).
3. Always wrap motion styles with `@media (prefers-reduced-motion: reduce)` to disable non-essential animations.

### Step 5: Verification
1. Verify that the UI looks intentional and editorial, not like a generic dashboard or template.
2. Verify token adherence and responsive scaling across mobile, tablet, and desktop viewports.

