"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PAYPAL_EMAIL = "klfministries7@gmail.com";

export default function ResourcesClient({
  lang,
  initialResources,
  currentType,
  currentCategory,
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [ownedSlugs, setOwnedSlugs] = useState([]);

  /* ================= LOAD MY DOWNLOADS ================= */
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("myDownloads") || "[]");
      setOwnedSlugs(stored);
    } catch {
      setOwnedSlugs([]);
    }
  }, []);

  /* ================= NORMALIZE CATEGORY ================= */
  const getCategory = (item) => {
    if (item.category) return item.category;
    return "discipleship"; // safe default
  };

  /* ================= FILTERING (FIXED) ================= */
  const filtered = initialResources
    .filter((item) => {
      // 🔎 Search filter
      const text = `${item.title} ${item.description}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());

      // 🧭 TYPE filter (robust + supports "download")
      const matchesType =
        currentType === undefined ||
        currentType === "" ||
        currentType === "all"
          ? true
          : currentType === "download"
            ? !!item.file
            : item.type === currentType;

      // 🧭 CATEGORY filter (robust)
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

      {/* ===== TYPE FILTER ===== */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["all", "article", "lesson", "download"].map((type) => (
          <Link
            key={type}
            href={makeTypeHref(type)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentType === type ||
              (!currentType && type === "all")
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {type === "all"
              ? "All"
              : type === "article"
              ? "Articles"
              : type === "lesson"
              ? "Lesson Studies"
              : "Downloads"}
          </Link>
        ))}
      </div>

      {/* ===== CATEGORY FILTER ===== */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          "all",
          "prophecy",
          "discipleship",
          "typology",
          "stewardship",
          "leadership",
        ].map((cat) => (
          <Link
            key={cat}
            href={makeCategoryHref(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentCategory === cat ||
              (!currentCategory && cat === "all")
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat === "all"
              ? "All Categories"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
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
        {filtered.map((item) => {
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
              {/* ===== BADGES ===== */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {/* Type badge */}
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  {item.type}
                </span>

                {/* Category badge */}
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>

                {/* Price badge */}
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

              {/* ===== ACTIONS ===== */}
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

      {/* ===== EMPTY STATE ===== */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          No resources found in this category.
        </p>
      )}
    </section>
  );
}
