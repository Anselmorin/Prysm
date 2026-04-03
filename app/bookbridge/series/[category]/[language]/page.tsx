import Link from "next/link";
import { CATEGORIES, LANGUAGES, futureSeries, type Category, type Language } from "../../../data";
import { allSeries as storySeriesList } from "../../../stories/data";

export function generateStaticParams() {
  const params: { category: string; language: string }[] = [];
  for (const cat of CATEGORIES) {
    for (const lang of LANGUAGES) {
      params.push({ category: cat.id, language: lang.id });
    }
  }
  return params;
}

export default async function SeriesPage({ params }: { params: Promise<{ category: string; language: string }> }) {
  const { category, language } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  const lang = LANGUAGES.find((l) => l.id === language);

  if (!cat || !lang) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--prysm-muted)]">Series not found.</p>
      </div>
    );
  }

  const isFuture = category === "future";
  const series = isFuture ? futureSeries[language as Language] : null;

  // Find bilingual story series for this category + language
  const storySeries = storySeriesList.filter(
    (s) => s.category === category && s.language === language
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 bg-purple-600 pointer-events-none" />

      <nav className="relative z-10 flex items-center gap-4 px-6 py-5 max-w-3xl mx-auto">
        <Link href="/bookbridge/library" className="text-sm text-[var(--prysm-muted)] hover:text-white transition-colors">
          ← Library
        </Link>
      </nav>

      <section className="relative z-10 max-w-3xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{cat.icon}</span>
            <span className="text-3xl">{lang.flag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-2">
            {series ? series.title : `${cat.label} — ${lang.label}`}
          </h1>
          <p className="text-sm text-[var(--prysm-muted)] leading-relaxed max-w-xl">
            {series
              ? series.description
              : `The ${cat.label} series in ${lang.label} is being crafted. Check back soon!`}
          </p>
        </div>

        {/* Bilingual story series */}
        {storySeries.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">📖 Interactive Stories</h2>
            <div className="grid gap-4">
              {storySeries.map((s) =>
                s.episodes.map((ep) => (
                  <Link
                    key={`${s.id}-${ep.id}`}
                    href={`/bookbridge/story/${s.id}/${ep.id}`}
                    className="rounded-xl border border-[var(--prysm-border)] bg-[var(--prysm-surface)] p-5 hover:border-purple-500/50 transition-colors block"
                  >
                    <h3 className="font-semibold text-lg mb-1">{ep.title}</h3>
                    <p className="text-sm text-[var(--prysm-muted)] mb-3">{ep.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {ep.vocab.slice(0, 5).map((v) => (
                        <span
                          key={v.word}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {v.word}
                        </span>
                      ))}
                      {ep.vocab.length > 5 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
                          +{ep.vocab.length - 5} more
                        </span>
                      )}
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        )}

        {/* Chapter-based series (Future category) */}
        {series ? (
          <div className="grid gap-6">
            <h2 className="text-xl font-bold">📚 Structured Lessons</h2>
            {series.chapters.map((ch) => (
              <div
                key={ch.number}
                className="rounded-xl border border-[var(--prysm-border)] bg-[var(--prysm-surface)] p-5"
              >
                <h3 className="font-semibold text-lg mb-3">
                  <span className="text-purple-400 mr-2">Chapter {ch.number}</span>
                  {ch.title}
                </h3>
                <ul className="grid gap-2">
                  {ch.lessons.map((lesson, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[var(--prysm-bg)] border border-[var(--prysm-border)]"
                    >
                      <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-medium shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : storySeries.length === 0 ? (
          <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-12 text-center">
            <div className="text-5xl mb-4">🚧</div>
            <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
            <p className="text-sm text-[var(--prysm-muted)]">
              This series is currently being developed. Check back soon for content!
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
}
