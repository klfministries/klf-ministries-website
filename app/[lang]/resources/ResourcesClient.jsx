"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

const PAYPAL_EMAIL = "klfministries7@gmail.com";
const PAGE_SIZE = 6; // how many cards per page

export default function ResourcesClient({
  lang,
  initialResources,
  currentType,
  currentCategory,
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [ownedSlugs, setOwnedSlugs] = useState([]);
  const [page, setPage] = useState(1);

  /* ================= LOAD MY DOWNLOADS ================= */
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("myDownloads") || "[]");
      setOwnedSlugs(stored);
    } catch {
      setOwnedSlugs([]);
    }
  }, []);

  /* ================= RESET PAGE WHEN FILTERS CHANGE ================= */
  useEffect(() => {
    setPage(1);
  }, [query, currentType, currentCategory, sort]);

  /* ================= NORMALIZE CATEGORY ================= */
  const getCategory = (item) => {
    if (item.category) return item.category;
    return "discipleship";
  };

  /* ================= BASE FILTER (no pagination yet) ================= */
  const baseFiltered = useMemo(() => {
    return initialResources
      .filter((item) => {
        // 🔎 Search
        const text = `${item.title} ${item.description}`.toLowerCase();
        const matchesQuery = text.includes(query.toLowerCase());

        // 🧭 Type
        const matchesType =
          currentType === undefined ||
          currentType === "" ||
          currentType === "all"
            ? true
            : currentType === "download"
              ? !!item.file
              : item.type === currentType;

        // 🧭 Category
        const category = getCategory(item);
        const matchesCategory =
          currentCategory === undefined ||
          currentCategory === "" ||
          currentCategory === "all"
            ? true
            : category === currentCategory;

        return matchesQuery && matchesType && matchesCategory;
      })
      .sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return sort === "newest"
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      });
  }, [initialResources, query, currentType, currentCategory, sort]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(baseFiltered.length / PAGE_SIZE);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return baseFiltered.slice(start, end);
  }, [baseFiltered, page]);

  /* ================= COUNTS FOR FILTERS ================= */
  const counts = useMemo(() => {
    const result = {
      all: initialResources.length,
      article: 0,
      lesson: 0,
      download: 0,
      prophecy: 0,
      discipleship: 0,
      typology: 0,
      stewardship: 0,
      leadership: 0,
    };

    initialResources.forEach((item) => {
      // type counts
      if (item.type === "article") result.article++;
      if (item.type === "lesson") result.lesson++;
      if (item.file) result.download++;

      // category counts
      const cat = getCategory(item);
      if (result[cat] !== undefined) {
        result[cat]++;
      }
    });

    return result;
  }, [initialResources]);

  /* ================= TYPE LINKS ================= */
  const makeTypeHref = (type) =>
    type === "all"
      ? `/${lang}/resources`
      : `/${lang}/resources?type=${type}`;

  /* ================= CATEGORY LINKS ================= */
  const makeCategoryHref = (category) => {
    const base =
      currentType === undefined ||
      currentType === "" ||
      currentType === "all"
        ? `/${lang}/resources`
        : `/${lang}/resources?type=${currentType}`;

    return category === "all"
      ? base
      : `${base}${base.includes("?") ? "&" : "?"}category=${category}`;
  };

  /* ================= PAYPAL LINK ================= */
  const buildPaypalLink = (item) => {
    const description = encodeURIComponent(`${item.title} (${item.type})`);

    const baseUrl =
      typeof window !== "undefined" ? window.location.origin : "";

    const returnUrl = `${baseUrl}/${lang}/resources/thank-you?item=${item.slug}`;

    return `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD&amount=${item.price}&item_name=${description}&return=${encodeURIComponent(
      returnUrl
    )}`;
  };

  /* ================= RENDER ================= */
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 pb-28">
      {/* ===== TOP BAR ===== */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Resources</h1>

        <Link
          href={`/${lang}/resources/my-downloads`}
          className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-gray-100"
        >
          My Downloads
        </Link>
      </div>

      <p className="text-gray-600 mb-8">
        Teaching materials for spiritual growth and discipleship.
      </p>

      {/* ===== TYPE FILTER (WITH COUNTS) ===== */}
      <div className="flex flex-wrap gap-3 mb-6">
        {[
          { key: "all", label: "All", count: counts.all },
          { key: "article", label: "Articles", count: counts.article },
          { key: "lesson", label: "Lesson Studies", count: counts.lesson },
          { key: "download", label: "Downloads", count: counts.download },
        ].map((t) => (
          <Link
            key={t.key}
            href={makeTypeHref(t.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentType === t.key ||
              (!currentType && t.key === "all")
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {t.label} ({t.count})
          </Link>
        ))}
      </div>

      {/* ===== CATEGORY FILTER (WITH COUNTS) ===== */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { key: "all", label: "All Categories", count: counts.all },
          { key: "prophecy", label: "Prophecy", count: counts.prophecy },
          { key: "discipleship", label: "Discipleship", count: counts.discipleship },
          { key: "typology", label: "Typology", count: counts.typology },
          { key: "stewardship", label: "Stewardship", count: counts.stewardship },
          { key: "leadership", label: "Leadership", count: counts.leadership },
        ].map((c) => (
          <Link
            key={c.key}
            href={makeCategoryHref(c.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentCategory === c.key ||
              (!currentCategory && c.key === "all")
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {c.label} ({c.count})
          </Link>
        ))}
      </div>

      {/* ===== SEARCH + SORT ===== */}
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
          className="px-3 py-2 border rounded-lg text-sm"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* ===== CARDS GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginated.map((item) => {
          const isPaidItem = item.isPremium === true;
          const isOwned = ownedSlugs.includes(item.slug);
          const category = getCategory(item);

          const viewHref = `/${lang}/resources/${item.slug}`;
          const paypalLink = isPaidItem ? buildPaypalLink(item) : null;

          return (
            <div
              key={`${item.type}-${item.slug}`}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* BADGES */}
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  {item.type}
                </span>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>

                {isPaidItem ? (
                  isOwned ? (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                      Purchased
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                      ${item.price} USD
                    </span>
                  )
                ) : (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                    FREE
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              <p className="text-sm text-gray-600 mb-4">
                {item.description}
              </p>

              {item.date && (
                <p className="text-xs text-gray-400 mb-3">{item.date}</p>
              )}

              {!isPaidItem ? (
                <Link
                  href={viewHref}
                  className="inline-block rounded-lg bg-green-700 text-white px-5 py-2 text-sm font-semibold hover:bg-green-600 transition"
                >
                  View Resource →
                </Link>
              ) : isOwned ? (
                <Link
                  href={viewHref}
                  className="inline-block rounded-lg bg-green-700 text-white px-5 py-2 text-sm font-semibold hover:bg-green-600 transition"
                >
                  Download →
                </Link>
              ) : (
                <a
                  href={paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-blue-900 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-800 transition"
                >
                  Buy for ${item.price} →
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== PAGINATION CONTROLS ===== */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className={`px-4 py-2 rounded-lg border ${
              page === 1
                ? "text-gray-400 border-gray-200"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            ← Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className={`px-4 py-2 rounded-lg border ${
              page === totalPages
                ? "text-gray-400 border-gray-200"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Next →
          </button>
        </div>
      )}

      {/* ===== EMPTY STATE ===== */}
      {baseFiltered.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          No resources found in this category.
        </p>
      )}
    </section>
  );
}
