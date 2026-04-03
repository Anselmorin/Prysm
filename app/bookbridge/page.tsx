import Link from "next/link";
import { CATEGORIES, LANGUAGES } from "./data";
import { allSeries } from "./stories/data";

export default function BookBridgePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 bg-purple-600 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 bg-violet-500 pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-sm text-[var(--prysm-muted)] hover:text-white transition-colors">
          ← Prysm
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-20 max-w-3xl mx-auto">
        <div className="text-7xl mb-6">📖</div>
        <h1 className="text-5xl sm:text-6xl font-black mb-3">
          <span className="prism-text">BookBridge</span>
        </h1>
        <p className="text-xs tracking-[0.4em] text-purple-400/70 uppercase mb-6">
          Literature-Powered Learning
        </p>
        <p className="text-xl text-[var(--prysm-muted)] mb-4 max-w-lg">
          Choose your favorite book from our library.
        </p>
        <p className="text-sm text-[var(--prysm-muted)] leading-relaxed mb-10 max-w-md">
          We&apos;ll match it to a category, then drop you into interactive bilingual stories themed around what you already love reading — in Spanish, French, Italian, or Japanese.
        </p>
        <Link
          href="/bookbridge/library"
          className="px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-base transition-colors shadow-lg shadow-purple-600/25"
        >
          Browse Library →
        </Link>
      </section>

      {/* How it works */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-center text-2xl font-bold mb-3">How It Works</h2>
        <p className="text-center text-[var(--prysm-muted)] text-sm mb-12 max-w-md mx-auto">
          Three simple steps from book lover to language learner.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { step: "1", icon: "📚", title: "Pick a Book", desc: "Browse our curated library and choose a book you love." },
            { step: "2", icon: "🔗", title: "Get Matched", desc: "We match your book's themes to a learning category." },
            { step: "3", icon: "🌍", title: "Learn a Language", desc: "Dive into a themed series in your chosen language." },
          ].map((s) => (
            <div key={s.step} className="flex flex-col items-center">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-[var(--prysm-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-center text-2xl font-bold mb-3">Stories</h2>
        <p className="text-center text-[var(--prysm-muted)] text-sm mb-3 max-w-md mx-auto">
          {allSeries.length} interactive bilingual stories across {CATEGORIES.length} categories and {LANGUAGES.length} languages.
        </p>
        <p className="text-center text-[var(--prysm-muted)] text-xs mb-10 max-w-md mx-auto">
          Pick a category below to start learning.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {CATEGORIES.map((cat) => {
            const count = allSeries.filter(s => s.category === cat.id).length;
            return (
              <div key={cat.id} className="rounded-xl border border-[var(--prysm-border)] bg-[var(--prysm-surface)] p-4 text-center">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{cat.label}</h3>
                <p className="text-xs text-[var(--prysm-muted)] mb-3">{count} stories</p>
                <div className="flex flex-wrap justify-center gap-1">
                  {LANGUAGES.map((lang) => {
                    const has = allSeries.some(s => s.category === cat.id && s.language === lang.id);
                    return has ? (
                      <Link
                        key={lang.id}
                        href={`/bookbridge/series/${cat.id}/${lang.id}`}
                        className="text-lg hover:scale-110 transition-transform"
                        title={lang.label}
                      >
                        {lang.flag}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-center text-2xl font-bold mb-3">Categories</h2>
        <p className="text-center text-[var(--prysm-muted)] text-sm mb-10 max-w-md mx-auto">
          Every book maps to one or more learning categories.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center gap-2 p-5 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-colors"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-sm font-medium">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 pb-8 text-center text-xs text-[var(--prysm-muted)]">
        A subsidiary of <span className="text-white/60">OnlineMars LLC</span>
      </footer>
    </div>
  );
}
