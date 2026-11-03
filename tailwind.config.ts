import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "var(--color-paper-50)",
          100: "var(--color-paper-100)",
          200: "var(--color-paper-200)",
          300: "var(--color-paper-300)",
          400: "var(--color-paper-400)",
        },
        ink: {
          900: "var(--color-ink-900)",
          700: "var(--color-ink-700)",
          500: "var(--color-ink-500)",
          300: "var(--color-ink-300)",
          100: "var(--color-ink-100)",
        },
        accent: {
          terracotta: "var(--color-accent-terracotta)",
          indigo: "var(--color-accent-indigo)",
          sage: "var(--color-accent-sage)",
          ochre: "var(--color-accent-ochre)",
        },
      },
      fontFamily: {
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        reading: "68ch",
        "prose-narrow": "48rem",
        "prose-wide": "72rem",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(26, 25, 24, 0.05), 0 1px 2px -1px rgba(26, 25, 24, 0.05)",
        card: "0 4px 6px -1px rgba(26, 25, 24, 0.06), 0 2px 4px -2px rgba(26, 25, 24, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
