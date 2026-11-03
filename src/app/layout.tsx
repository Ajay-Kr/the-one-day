import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "The One Day — EST. 2026",
  description:
    "A personal journal and portfolio documenting software engineering, creative arts, yoga practice rebuilding, and personal photography.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-paper-100 text-ink-900 font-sans antialiased selection:bg-accent-indigo selection:text-paper-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink-900 focus:text-paper-50 focus:rounded focus:shadow-card focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
