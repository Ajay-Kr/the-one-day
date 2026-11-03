export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-prose-narrow flex-col items-center justify-center px-6 py-24 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
        The One Day — EST. 2026
      </span>
      <h1 className="mt-4 font-editorial text-4xl font-normal tracking-tight text-ink-900 sm:text-5xl">
        It was always going to be one day.
      </h1>
      <p className="mt-3 font-editorial text-2xl italic text-ink-700">Today is that day.</p>
      <div className="mt-8 rounded-md border border-paper-300 bg-paper-50 px-4 py-3 font-mono text-xs text-ink-500">
        Technical foundation initialized. Application shell ready.
      </div>
    </div>
  );
}
