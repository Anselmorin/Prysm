"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { books, CATEGORIES, bookCoverUrl, coverUrl, getCategoryIcon, type Category } from "../data";

interface OLBook {
  key: string;
  title: string;
  author_name?: string[];
  isbn?: string[];
  cover_edition_key?: string;
  cover_i?: number;
  subject?: string[];
  first_publish_year?: number;
}

const CATEGORY_KEYWORDS: Record<Category, string[]> = {
  "sci-fi": [
    "science fiction", "sci-fi", "space", "aliens", "dystopia", "robots", "cyberpunk",
    "time travel", "extraterrestrial", "galactic", "starship", "android", "clone",
    "mutation", "parallel universe", "post-apocalyptic", "space opera", "alien",
    "interstellar", "futuristic", "fantasy", "supernatural", "magic", "wizards",
    "dragons", "mythical", "paranormal",
  ],
  sports: [
    "sports", "athletics", "football", "basketball", "baseball", "soccer", "tennis",
    "swimming", "hockey", "rugby", "cricket", "golf", "boxing", "wrestling",
    "martial arts", "olympics", "racing", "surfing", "skateboarding", "climbing",
    "running", "marathon", "fitness", "gym", "training", "coach", "athlete",
    "championship", "tournament",
  ],
  tech: [
    "technology", "computers", "programming", "engineering", "invention", "software",
    "hardware", "coding", "internet", "startup", "silicon valley", "hacking",
    "artificial intelligence", "machine learning", "data", "innovation", "electronics",
    "digital", "web", "app", "science", "physics", "chemistry", "biology", "math",
    "mathematics", "robotics", "automation", "cryptocurrency", "blockchain",
  ],
  future: [
    "future", "dystopia", "utopia", "futurism", "cyberpunk", "post-apocalyptic",
    "2050", "2100", "tomorrow", "next generation", "singularity", "transhumanism",
    "virtual reality", "augmented reality", "simulation", "apocalypse", "rebuild",
    "new world", "civilization",
  ],
  creative: [
    "art", "creativity", "design", "writing", "music", "painting", "drawing",
    "sculpture", "photography", "film", "cinema", "animation", "graphic",
    "illustration", "craft", "diy", "maker", "fashion", "architecture", "theater",
    "poetry", "dance", "storytelling", "imagination", "inspiration",
    "creative writing", "fiction writing",
  ],
};

const FICTION_INDICATORS = [
  "fiction", "novel", "stories", "tale", "narrative", "literary fiction",
  "juvenile fiction", "young adult fiction",
];
const NONFICTION_INDICATORS = [
  "nonfiction", "non-fiction", "biography", "history", "reference", "textbook",
  "self-help", "guide", "manual", "handbook", "essay", "memoir", "journalism",
];

function scoreCategories(texts: string[]): Record<Category, number> {
  const lower = texts.map((s) => s.toLowerCase());
  const scores: Record<Category, number> = {
    "sci-fi": 0, sports: 0, tech: 0, future: 0, creative: 0,
  };
  const isYA = lower.some((s) => s.includes("juvenile fiction") || s.includes("young adult"));

  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS) as [Category, string[]][]) {
    for (const kw of keywords) {
      for (const s of lower) {
        if (s.includes(kw)) {
          scores[cat] += isYA ? 2 : 1;
        }
      }
    }
  }
  return scores;
}

function detectCategories(subjects: string[], title?: string, author?: string): Category[] {
  // Primary: match on subjects
  let scores = scoreCategories(subjects);
  let matched = (Object.entries(scores) as [Category, number][])
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([c]) => c);

  if (matched.length > 0) return matched;

  // Secondary: try title + author
  if (title || author) {
    const fallbackTexts = [title ?? "", author ?? ""];
    scores = scoreCategories(fallbackTexts);
    matched = (Object.entries(scores) as [Category, number][])
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
      .map(([c]) => c);
    if (matched.length > 0) return matched;
  }

  // Tertiary: fiction/nonfiction heuristic
  const lower = subjects.map((s) => s.toLowerCase());
  const isFiction = lower.some((s) => FICTION_INDICATORS.some((f) => s.includes(f)));
  const isNonfiction = lower.some((s) => NONFICTION_INDICATORS.some((f) => s.includes(f)));

  if (isFiction) return ["sci-fi"]; // fiction leans sci-fi/creative
  if (isNonfiction) return ["tech"]; // nonfiction leans tech

  return []; // truly unknown — caller defaults to "general"
}

function getCoverUrl(book: OLBook): string {
  if (book.cover_i) return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  if (book.cover_edition_key) return `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`;
  if (book.isbn?.[0]) return `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
  return "";
}

function buildDetailUrl(book: OLBook): string {
  const cats = detectCategories(book.subject ?? [], book.title, book.author_name?.[0]);
  const params = new URLSearchParams({
    title: book.title,
    author: book.author_name?.[0] ?? "Unknown",
    isbn: book.isbn?.[0] ?? "",
    cover: getCoverUrl(book),
    categories: (cats.length ? cats : ["general" as Category]).join(","),
    subjects: (book.subject ?? []).slice(0, 5).join(","),
    year: String(book.first_publish_year ?? ""),
    olkey: book.key,
  });
  // Use OL key as id, e.g. "ol-OL123W"
  const id = "ol-" + book.key.replace("/works/", "");
  return `/bookbridge/book/${id}?${params.toString()}`;
}

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Category | "all">("all");
  const [results, setResults] = useState<OLBook[]>([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      setSearched(false);
      setSearching(false);
      return;
    }
    setSearching(true);
    setSearched(true);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=20`);
      const data = await res.json();
      setResults(data.docs ?? []);
    } catch {
      setResults([]);
    } finally {
      setSearching(false);
    }
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!search.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    timerRef.current = setTimeout(() => doSearch(search), 300);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [search, doSearch]);

  const [showCount, setShowCount] = useState(50);

  const setFilterAndReset = (f: Category | "all") => {
    setFilter(f);
    setShowCount(50);
  };

  const filtered = books.filter((b) => {
    const matchCat = filter === "all" || b.categories.includes(filter);
    return matchCat;
  });

  const filteredResults = filter === "all"
    ? results
    : results.filter((r) => {
        const cats = detectCategories(r.subject ?? [], r.title, r.author_name?.[0]);
        return cats.includes(filter);
      });

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 bg-purple-600 pointer-events-none" />

      <nav className="relative z-10 flex items-center gap-4 px-6 py-5 max-w-6xl mx-auto">
        <Link href="/bookbridge" className="text-sm text-[var(--prysm-muted)] hover:text-white transition-colors">
          ← BookBridge
        </Link>
        <span className="text-[var(--prysm-border)]">|</span>
        <h1 className="text-lg font-bold">Library</h1>
      </nav>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-8">
        {/* Search & Filter */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search millions of books on Open Library..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-[var(--prysm-surface)] border border-[var(--prysm-border)] text-[var(--prysm-text)] placeholder:text-[var(--prysm-muted)] text-base focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
            />
            {searching && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
              </div>
            )}
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilterAndReset("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === "all"
                  ? "bg-purple-600 text-white"
                  : "bg-[var(--prysm-surface)] border border-[var(--prysm-border)] text-[var(--prysm-muted)] hover:text-white"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterAndReset(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filter === cat.id
                    ? "bg-purple-600 text-white"
                    : "bg-[var(--prysm-surface)] border border-[var(--prysm-border)] text-[var(--prysm-muted)] hover:text-white"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        {searched && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">
              {searching ? "Searching..." : `Search Results (${filteredResults.length})`}
            </h2>
            {!searching && filteredResults.length === 0 && (
              <p className="text-center text-[var(--prysm-muted)] py-12 bg-[var(--prysm-surface)] rounded-xl border border-[var(--prysm-border)]">
                No books found. Try a different search term.
              </p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {filteredResults.map((book) => {
                const cats = detectCategories(book.subject ?? [], book.title, book.author_name?.[0]);
                const cover = getCoverUrl(book);
                return (
                  <Link
                    key={book.key}
                    href={buildDetailUrl(book)}
                    className="group flex flex-col rounded-xl border border-[var(--prysm-border)] bg-[var(--prysm-surface)] overflow-hidden hover:border-purple-500/40 transition-colors"
                  >
                    <div className="aspect-[2/3] bg-[var(--prysm-bg)] relative overflow-hidden">
                      {cover ? (
                        <img
                          src={cover}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[var(--prysm-muted)] text-xs p-2 text-center">
                          No Cover
                        </div>
                      )}
                    </div>
                    <div className="p-3 flex flex-col gap-1.5 flex-1">
                      <h3 className="text-sm font-semibold leading-tight line-clamp-2">{book.title}</h3>
                      <p className="text-xs text-[var(--prysm-muted)]">{book.author_name?.[0] ?? "Unknown"}</p>
                      <div className="flex gap-1 flex-wrap mt-auto pt-2">
                        {(book.subject ?? []).slice(0, 3).map((s) => (
                          <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 line-clamp-1">
                            {s}
                          </span>
                        ))}
                        {cats.length > 0 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-medium">
                            {getCategoryIcon(cats[0])} {cats[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Featured Books */}
        <h2 className="text-xl font-bold mb-4">📚 Featured Books ({filtered.length})</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filtered.slice(0, showCount).map((book) => {
            const cover = bookCoverUrl(book, "M");
            return (
              <Link
                key={book.id}
                href={`/bookbridge/book/${book.id}`}
                className="group flex flex-col rounded-xl border border-[var(--prysm-border)] bg-[var(--prysm-surface)] overflow-hidden hover:border-purple-500/40 transition-colors"
              >
                <div className="aspect-[2/3] bg-[var(--prysm-bg)] relative overflow-hidden">
                  {cover ? (
                    <img
                      src={cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--prysm-muted)] text-xs p-2 text-center">No Cover</div>
                  )}
                </div>
                <div className="p-3 flex flex-col gap-1.5 flex-1">
                  <h3 className="text-sm font-semibold leading-tight line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-[var(--prysm-muted)]">{book.author}</p>
                  <div className="flex gap-1 flex-wrap mt-auto pt-2">
                    {book.categories.map((c) => (
                      <span key={c} className="text-xs px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400">
                        {getCategoryIcon(c)} {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {showCount < filtered.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowCount((c) => c + 50)}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
            >
              Show More ({filtered.length - showCount} remaining)
            </button>
          </div>
        )}

        {filtered.length === 0 && !searched && (
          <p className="text-center text-[var(--prysm-muted)] py-20">No books found.</p>
        )}
      </section>
    </div>
  );
}
