"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResourcesClient({
  lang,
  initialResources,
  currentType,
  currentCategory,
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest"); // newest | oldest

  // Filter by search + sort by date
  const filtered = initialResources
    .filter((item) => {
      const text = `${item.title} ${item.description}`.toLowerCase();
      return text.includes(query.toLowerCase());
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return sort === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });

  const makeTypeHref = (type) =>
    type === "all"
      ? `/${lang}/resources`
      : `/${lang}/resources?type=${type}`;

  const makeCategoryHref = (category) => {
    const base =
      currentType === "all"
        ? `/${lang}/resources`
        : `/${lang}/resources?type=${currentType}`;

    return category === "all"
      ? base
      : `${base}${base.includes("?") ? "&" : "?"}category=${category}`;
  };

  // Collect unique categories for filter buttons
  const categories = Array.from(
    new Set(
      initialResources
        .map((item) => item.category)
        .filter(Boolean)
    )
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Resources</h1>
        <p className="text-gray-600">
          Teaching materials for spiritual growth and discipleship.
        </p>
      </div>

      {/* ===== Type Filters ===== */}
      <div className="flex gap-2 justify-center flex-wrap mb-6">
        {[
          { key: "all", label: "All" },
          { key: "article", label: "Articles" },
          { key: "lesson", label: "Lesson Studies" },
          { key: "download", label: "Downloads" },
        ].map((btn) => (
          <a
            key={btn.key}
            href={makeTypeHref(btn.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              currentType === btn.key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {btn.label}
          </a>
        ))}
      </div>

      {/* ===== Category Filters (Buttons) ===== */}
      {categories.length > 0 && (
        <div className="flex gap-2 justify-center flex-wrap mb-8">
          {/* All Categories */}
          <a
            href={makeCategoryHref("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              currentCategory === "all"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Categories
          </a>

          {categories.map((cat) => (
            <a
              key={cat}
              href={makeCategoryHref(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition ${
                currentCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </a>
          ))}
        </div>
      )}

      {/* ===== Search + Sort ===== */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between mb-10">
        <input
          type="text"
          placeholder="Search resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* ===== Cards Grid ===== */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">
          No resources match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => {
            let href = "#";

            if (item.type === "article") {
              href = `/${lang}/resources/articles/${item.slug}`;
            } else if (item.type === "lesson") {
              href = `/${lang}/resources/lesson-studies/${item.slug}`;
            } else if (item.type === "download") {
              href = `/${lang}/resources/downloads/${item.file}`;
            }

            return (
              <div
                key={`${item.type}-${item.slug}`}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* ===== Badges ===== */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {/* Type Badge */}
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.type === "article"
                        ? "bg-blue-100 text-blue-700"
                        : item.type === "lesson"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {item.type === "article"
                      ? "Article"
                      : item.type === "lesson"
                      ? "Lesson Study"
                      : "Download"}
                  </span>

                  {/* ✅ CLICKABLE CATEGORY BADGE */}
                  {item.category && (
                    <Link
                      href={`/${lang}/resources/category/${item.category}`}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 capitalize hover:bg-gray-200 transition"
                    >
                      {item.category}
                    </Link>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>

                {/* Date */}
                {item.date && (
                  <p className="text-xs text-gray-400 mb-3">
                    {item.date}
                  </p>
                )}

                {/* Action */}
                {item.type === "download" ? (
                  <a
                    href={href}
                    className="inline-block text-purple-600 font-medium hover:underline"
                    download
                  >
                    Download ↓
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="inline-block text-blue-600 font-medium hover:underline"
                  >
                    Read →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
