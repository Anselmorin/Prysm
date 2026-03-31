import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "N·L·E — Neural Language Encoder",
  description: "Learn any language in 30 minutes with RSVP + binaural beats. By Online Mars LLC.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function NLELayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="scanline grid-bg min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--nle-border)] bg-[var(--nle-bg)]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/nle" className="flex items-center gap-2">
            <img src="/nle-logo.png" alt="NLE" className="h-8 rounded" />
          </a>
          <div className="flex items-center gap-4 text-sm">
            <a href="/nle/learn" className="text-[var(--nle-muted)] hover:text-blue-400 transition-colors">Learn</a>
            <a href="/nle/dashboard" className="text-[var(--nle-muted)] hover:text-blue-400 transition-colors">Dashboard</a>
            <a href="/nle/safety" className="text-[var(--nle-muted)] hover:text-blue-400 transition-colors">Safety</a>
            <a href="/nle/about" className="text-[var(--nle-muted)] hover:text-blue-400 transition-colors">About</a>
            <a href="/" className="text-[var(--nle-muted)] hover:text-purple-400 transition-colors text-xs border border-[var(--nle-border)] px-2 py-1 rounded">← Prysm</a>
          </div>
        </div>
      </nav>
      <main className="pt-14">{children}</main>
    </div>
  );
}
