---
name: responsive-accessibility
description: Step-by-step procedures to audit and enforce responsive design, mobile-first breakpoints, WCAG 2.1 AA accessibility, keyboard navigation, and prefers-reduced-motion for The One Day. Use when building or auditing interactive UI components and responsive page layouts.
---

# Responsive Accessibility Skill — The One Day

Use this procedure when authoring or auditing components to ensure universal accessibility (WCAG 2.1 AA) and resilient responsive design across all viewports.

---

## Procedure

### Step 1: Mobile-First Breakpoint Architecture

1. Define styles mobile-first (base styles apply to small viewports, progressively enhanced via `sm:`, `md:`, `lg:`, `xl:` media queries).
2. Validate against core device widths:
   - Mobile: 360px – 480px (touch targets at least 44x44px, single-column reading).
   - Tablet: 768px – 1024px (flexible multi-column transitions, touch/pointer adaptability).
   - Desktop: 1280px+ (asymmetric editorial grid, balanced whitespace, capped max-widths).
3. Ensure no horizontal scrolling or clipped text occurs at any viewport width.

### Step 2: Semantic HTML & Landmark Architecture

1. Structure every page with appropriate landmark regions:
   - `<header>` with top-level site identity and navigation.
   - `<nav aria-label="...">` with explicit purpose labels when multiple navigation bars exist.
   - `<main id="main-content">` containing the primary document content.
   - `<article>` for self-contained journal entries or case studies.
   - `<section>` with explicit heading tags (`<h2>`, `<h3>`) maintaining logical hierarchical levels (no skipping heading levels).
   - `<footer>` for colophon, copyright, and global links.

### Step 3: Keyboard Navigation & Focus Indicators

1. Verify all interactive elements (`<a>`, `<button>`, inputs) are navigable using the `Tab` and `Shift+Tab` keys.
2. Ensure every interactive element has a visible, high-contrast focus indicator using `:focus-visible` (never `outline: none` without an alternative).
3. Provide a hidden "Skip to main content" link as the first focusable element on each page.
4. If modal dialogs, slide-overs, or menus are introduced:
   - Trap focus inside the dialog when open.
   - Return focus to the trigger element when closed.
   - Enable dismissal via the `Escape` key.

### Step 4: Color Contrast & Typography Readability

1. Test all text color combinations against WCAG 2.1 AA ratios:
   - Normal text (< 18pt or < 14pt bold): minimum 4.5:1 contrast against surface.
   - Large text (≥ 18pt or ≥ 14pt bold): minimum 3.0:1 contrast against surface.
   - Non-text UI components and graphical objects: minimum 3.0:1 contrast.
2. Maintain comfortable reading line-lengths (45 to 75 characters per line).

### Step 5: Images & Media Alternatives

1. Every informative image (sketch scans, photographs, architecture diagrams) must have a descriptive, meaningful `alt` attribute.
2. Decorative illustrations, borders, or icons must be explicitly marked with `aria-hidden="true"`.
3. Do not convey information using color alone (e.g., status indicators should include both text labels and color cues).

### Step 6: Motion Preferences

1. Test interfaces with `prefers-reduced-motion: reduce`.
2. Ensure transitions are replaced with immediate or cross-fade state changes so users with vestibular motion disorders experience no parallax or zooming.
