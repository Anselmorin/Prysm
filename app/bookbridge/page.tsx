import Link from "next/link";

export default function BookBridgePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15 bg-purple-600 pointer-events-none" />

      <div className="text-center relative z-10 max-w-lg">
        <div className="text-6xl mb-6">📖</div>
        <h1 className="text-4xl sm:text-5xl font-black mb-3">
          <span className="prism-text">BookBridge</span>
        </h1>
        <p className="text-xs tracking-[0.4em] text-purple-400/70 uppercase mb-6">
          Literature-Powered Learning
        </p>
        <p className="text-lg text-[var(--prysm-muted)] mb-4">
          Pick a book. Learn a language.
        </p>
        <p className="text-sm text-[var(--prysm-muted)] leading-relaxed mb-10">
          BookBridge lets you learn a new language through the stories you already love.
          Real literature, intelligent translation, and contextual learning — all woven together.
        </p>

        <div className="inline-block px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold tracking-wider">
          COMING SOON
        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm text-[var(--prysm-muted)] hover:text-white transition-colors">
            ← Back to Prysm
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-6 text-center text-xs text-[var(--prysm-muted)]">
        A subsidiary of <span className="text-white/60">OnlineMars LLC</span>
      </footer>
    </div>
  );
}
