---
description: Conduct a comprehensive UI, responsive design, accessibility, and code quality review of a component or page on The One Day.
---

# Review UI Workflow

Use this workflow to perform a structured audit of visual styling, responsive adaptability, accessibility, and code cleanliness for any UI page or component.

---

## Steps

1. **Visual & Editorial Alignment Audit**
   - Check aesthetic harmony against **The Living Journal** direction: warm paper-like surfaces, refined typography, and thoughtful whitespace.
   - Verify design token consistency: Are all colors, margins, paddings, and font sizes using defined tokens?
   - Ensure the design feels editorial and personal, avoiding generic developer portfolio or SaaS clichés.

2. **Responsive Layout Inspection**
   - **Mobile (360px – 480px):** Single-column layout, touch target sizes ≥ 44x44px, no horizontal scroll, readable font sizes.
   - **Tablet (768px – 1024px):** Proportional grid adjustments, readable line lengths.
   - **Desktop (1280px+):** Asymmetric layout balance, container max-widths, deliberate negative space.

3. **Accessibility Audit (WCAG 2.1 AA)**
   - **Landmarks:** Presence of `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`.
   - **Keyboard Navigation:** Tab order is logical, and all interactive controls have prominent `:focus-visible` outlines.
   - **Contrast:** Minimum 4.5:1 text-to-background contrast ratio (3:1 for large text).
   - **Media:** Descriptive `alt` text for images; `aria-hidden="true"` on decorative icons.
   - **Screen Reader Support:** Appropriate ARIA attributes (`aria-expanded`, `aria-label`) where semantic HTML alone is insufficient.

4. **Performance & Motion Check**
   - Verify that animations are subtle and disable gracefully when `prefers-reduced-motion: reduce` is enabled.
   - Ensure images utilize Next.js Image component optimization with defined aspect ratios and responsive sizing.
   - Verify zero unnecessary client-side JavaScript bundle bloat.

5. **Deliver Findings & Remediation Plan**
   - Categorize findings into:
     - **Critical (P0):** Accessibility failures, broken layouts, or severe contrast issues.
     - **Improvement (P1):** Token alignment, spacing polish, typography tuning.
     - **Nice-to-Have (P2):** Minor aesthetic polish or subtle enhancement.
