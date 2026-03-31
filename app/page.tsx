import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 prism-gradient" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 bg-purple-600" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10 bg-blue-600" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-12 py-6">
        <span className="text-lg font-bold tracking-wider prism-text">PRYSM</span>
        <div className="flex items-center gap-6 text-sm text-[var(--prysm-muted)]">
          <Link href="/nle" className="hover:text-white transition-colors">NLE</Link>
          <Link href="/bookbridge" className="hover:text-white transition-colors">BookBridge</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-3xl">
          {/* Prism visual element */}
          <div className="float mb-8 flex justify-center">
            <div className="relative">
              {/* Triangle prism shape */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <linearGradient id="prismFill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(121, 40, 202, 0.3)" />
                      <stop offset="50%" stopColor="rgba(0, 112, 243, 0.2)" />
                      <stop offset="100%" stopColor="rgba(0, 201, 255, 0.3)" />
                    </linearGradient>
                    <linearGradient id="prismStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff0080" />
                      <stop offset="25%" stopColor="#7928ca" />
                      <stop offset="50%" stopColor="#0070f3" />
                      <stop offset="75%" stopColor="#00c9ff" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50,8 92,85 8,85"
                    fill="url(#prismFill)"
                    stroke="url(#prismStroke)"
                    strokeWidth="1.5"
                  />
                </svg>
                {/* Light beam entering */}
                <div className="absolute top-1/2 -left-16 w-16 h-[2px] bg-white/40" style={{ transform: 'translateY(-8px) rotate(-10deg)' }} />
                {/* Refracted beams exiting */}
                <div className="absolute top-[30%] -right-20 w-20 h-[1.5px] bg-red-400/50" style={{ transform: 'rotate(-15deg)' }} />
                <div className="absolute top-[40%] -right-24 w-24 h-[1.5px] bg-yellow-400/50" style={{ transform: 'rotate(-5deg)' }} />
                <div className="absolute top-[50%] -right-24 w-24 h-[1.5px] bg-green-400/50" style={{ transform: 'rotate(2deg)' }} />
                <div className="absolute top-[58%] -right-20 w-20 h-[1.5px] bg-blue-400/50" style={{ transform: 'rotate(10deg)' }} />
                <div className="absolute top-[66%] -right-16 w-16 h-[1.5px] bg-purple-400/50" style={{ transform: 'rotate(18deg)' }} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="fade-in-up text-6xl sm:text-8xl font-black tracking-tight mb-4">
            <span className="prism-text">Prysm</span>
          </h1>

          {/* Tagline */}
          <p className="fade-in-up-delay-1 text-xl sm:text-2xl text-[var(--prysm-muted)] font-medium mb-8">
            Pick a book. Learn a language.
          </p>

          {/* Description */}
          <p className="fade-in-up-delay-2 text-sm sm:text-base text-[var(--prysm-muted)] max-w-xl mx-auto leading-relaxed mb-12">
            One beam of light enters a prism and refracts into a spectrum.
            One desire to learn enters Prysm and unlocks an entire language.
            We build tools that accelerate how humans acquire languages — from neural encoding to literature-based immersion.
          </p>

          {/* Subsidiary cards */}
          <div className="fade-in-up-delay-3 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
            {/* NLE Card */}
            <Link href="/nle" className="group">
              <div className="shimmer-border rounded-2xl bg-[var(--prysm-surface)] border border-[var(--prysm-border)] p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-[#10102a]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    N·L·E
                  </h3>
                </div>
                <p className="text-xs tracking-[0.3em] text-blue-400/70 uppercase mb-2">
                  Neural Language Encoder
                </p>
                <p className="text-sm text-[var(--prysm-muted)]">
                  Accelerated vocabulary acquisition through RSVP + binaural beats. Learn 200 words in 30 minutes.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-blue-400 font-medium">
                  <span>Try it</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* BookBridge Card */}
            <Link href="/bookbridge" className="group">
              <div className="shimmer-border rounded-2xl bg-[var(--prysm-surface)] border border-[var(--prysm-border)] p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-[#10102a]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📖</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    BookBridge
                  </h3>
                </div>
                <p className="text-xs tracking-[0.3em] text-purple-400/70 uppercase mb-2">
                  Literature-Powered Learning
                </p>
                <p className="text-sm text-[var(--prysm-muted)]">
                  Learn a language through the books you love. Real stories, real immersion, real progress.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-purple-400/60 font-medium">
                  <span>Coming Soon</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-8 px-6">
        <div className="w-16 h-[1px] mx-auto mb-4 bg-gradient-to-r from-transparent via-[var(--prysm-border)] to-transparent" />
        <p className="text-xs text-[var(--prysm-muted)]">
          A subsidiary of <span className="text-white/60">OnlineMars LLC</span>
        </p>
        <p className="text-xs text-[var(--prysm-muted)] mt-1">
          Created by <span className="text-white/60">Ansel Morin</span>
        </p>
      </footer>
    </div>
  );
}
