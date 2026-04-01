import Link from "next/link";
import { CATEGORIES } from "./data";

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
          Pick a book you love. We&apos;ll match you to a language learning series inspired by its themes.
        </p>
        <p className="text-sm text-[var(--prysm-muted)] leading-relaxed mb-10 max-w-md">
          Browse our library of popular books, choose one that excites you, and unlock curated language courses in Spanish, French, Italian, or Japanese — all themed around what you already enjoy reading.
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
        <p className="text-center text-[var(--prysm-muted)] text-sm mb-10 max-w-md mx-auto">
          Interactive bilingual stories for immersive language learning.
        </p>
        <div className="grid gap-6 max-w-2xl mx-auto">
          <Link 
            href="/bookbridge/story/la-estacion/arrival"
            className="group bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-xl p-6 hover:border-purple-400 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚀</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                  La Estación
                </h3>
                <p className="text-[var(--prysm-muted)] text-sm mb-3 leading-relaxed">
                  A thrilling sci-fi series about Captain Mara Chen's mysterious discovery on Station Orion-7. 
                  Learn Spanish through gradually increasing bilingual text.
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">Sci-Fi</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">Spanish</span>
                  <span className="text-[var(--prysm-muted)]">Episode 1: Arrival</span>
                </div>
              </div>
              <div className="text-[var(--prysm-muted)] group-hover:text-purple-400 transition-colors">
                →
              </div>
            </div>
          </Link>
          <Link 
            href="/bookbridge/story/uchuu-station/hakken"
            className="group bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-xl p-6 hover:border-purple-400 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🤖</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                  うちゅうステーション (Space Station)
                </h3>
                <p className="text-[var(--prysm-muted)] text-sm mb-3 leading-relaxed">
                  Engineer Kenji Nakamura discovers a mysterious AI signal on Mars that leads to dangerous robots and a friendly AI named Arisa. 
                  Learn Japanese through hiragana, katakana, and engaging sci-fi adventure.
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">Sci-Fi</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">Japanese</span>
                  <span className="text-[var(--prysm-muted)]">Episode 1: Discovery</span>
                </div>
              </div>
              <div className="text-[var(--prysm-muted)] group-hover:text-purple-400 transition-colors">
                →
              </div>
            </div>
          </Link>
          
          <Link 
            href="/bookbridge/story/la-stazione/underground"
            className="group bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-xl p-6 hover:border-purple-400 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🔬</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                  La Stazione
                </h3>
                <p className="text-[var(--prysm-muted)] text-sm mb-3 leading-relaxed">
                  A haunting sci-fi mystery about Dr. Elena Rossi's disturbing discovery beneath Mars' surface.
                  Learn Italian through an engaging bilingual narrative.
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">Sci-Fi</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">Italian</span>
                  <span className="text-[var(--prysm-muted)]">Episode 1: Underground</span>
                </div>
              </div>
              <div className="text-[var(--prysm-muted)] group-hover:text-purple-400 transition-colors">
                →
              </div>
            </div>
          </Link>
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
