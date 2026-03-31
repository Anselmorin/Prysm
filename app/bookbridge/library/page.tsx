"use client";

import Link from "next/link";
import { useState } from "react";
import { books, CATEGORIES, coverUrl, getCategoryIcon, type Category } from "../data";

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Category | "all">("all");

  const filtered = books.filter((b) => {
    const matchSearch =
      !search ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchCat = filter === "all" || b.categories.includes(filter);
    return matchSearch && matchCat;
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
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search books or authors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-lg bg-[var(--prysm-surface)] border border-[var(--prysm-border)] text-[var(--prysm-text)] placeholder:text-[var(--prysm-muted)] text-sm focus:outline-none focus:border-purple-500/50"
          />
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter("all")}
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
                onClick={() => setFilter(cat.id)}
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

        {/* Book Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filtered.map((book) => (
            <Link
              key={book.id}
              href={`/bookbridge/book/${book.id}`}
              className="group flex flex-col rounded-xl border border-[var(--prysm-border)] bg-[var(--prysm-surface)] overflow-hidden hover:border-purple-500/40 transition-colors"
            >
              <div className="aspect-[2/3] bg-[var(--prysm-bg)] relative overflow-hidden">
                <img
                  src={coverUrl(book.isbn)}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
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
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--prysm-muted)] py-20">No books found.</p>
        )}
      </section>
    </div>
  );
}
