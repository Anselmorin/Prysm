import Link from "next/link";
import { books, getBook, coverUrl, CATEGORIES, LANGUAGES, getCategoryIcon, getCategoryLabel } from "../../data";

export function generateStaticParams() {
  return books.map((b) => ({ id: b.id }));
}

export default async function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = getBook(id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Book not found</p>
          <Link href="/bookbridge/library" className="text-purple-400 hover:underline">← Back to Library</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 bg-purple-600 pointer-events-none" />

      <nav className="relative z-10 flex items-center gap-4 px-6 py-5 max-w-4xl mx-auto">
        <Link href="/bookbridge/library" className="text-sm text-[var(--prysm-muted)] hover:text-white transition-colors">
          ← Library
        </Link>
      </nav>

      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          {/* Cover */}
          <div className="w-48 sm:w-56 shrink-0 mx-auto sm:mx-0">
            <div className="aspect-[2/3] rounded-xl overflow-hidden border border-[var(--prysm-border)] bg-[var(--prysm-surface)]">
              <img src={coverUrl(book.isbn, "L")} alt={book.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl font-black">{book.title}</h1>
            <p className="text-lg text-[var(--prysm-muted)]">by {book.author}</p>
            <div className="flex gap-2 flex-wrap">
              {book.categories.map((c) => (
                <span key={c} className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {getCategoryIcon(c)} {getCategoryLabel(c)}
                </span>
              ))}
            </div>
            <p className="text-sm text-[var(--prysm-muted)] leading-relaxed mt-2">{book.description}</p>
          </div>
        </div>

        {/* Learning Series */}
        <h2 className="text-2xl font-bold mb-2">Your Learning Series</h2>
        <p className="text-sm text-[var(--prysm-muted)] mb-8">
          Based on this book&apos;s themes, here are the language series available to you.
        </p>

        <div className="grid gap-6">
          {book.categories.map((cat) => {
            const catInfo = CATEGORIES.find((c) => c.id === cat)!;
            return (
              <div key={cat} className="rounded-xl border border-[var(--prysm-border)] bg-[var(--prysm-surface)] p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {catInfo.icon} {catInfo.label} Series
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {LANGUAGES.map((lang) => (
                    <Link
                      key={lang.id}
                      href={`/bookbridge/series/${cat}/${lang.id}`}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/15 transition-colors"
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
