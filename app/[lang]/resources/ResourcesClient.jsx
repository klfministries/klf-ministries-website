"use client";

import { useState } from "react";

const PAYPAL_EMAIL = "klfministries7@gmail.com"; // your PayPal email

export default function ResourcesClient({
  lang,
  initialResources,
  currentType,
  currentCategory,
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [bundle, setBundle] = useState([]); // 🛒 selected bundle items

  // ================= FILTERING =================

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

  // ================= CATEGORIES =================

  const detectedCategories = Array.from(
    new Set(
      initialResources
        .map((item) => item.category)
        .filter(
          (cat) =>
            Boolean(cat) &&
            cat !== "downloads" // remove Downloads from category filter
        )
    )
  );

  const extraCategories = ["typology", "stewardship"];

  const finalCategories = Array.from(
    new Set([...detectedCategories, ...extraCategories])
  );

  // ================= PAYPAL LINKS =================

  // Individual purchase
  const buildPaypalLink = (item) => {
    const amount = item.price;
    const description = encodeURIComponent(
      `${item.title} (${item.type})`
    );

    const baseUrl =
      typeof window !== "undefined" ? window.location.origin : "";

    const returnUrl = `${baseUrl}/${lang}/resources/thank-you?item=${item.slug}`;

    return `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD&amount=${amount}&item_name=${description}&return=${encodeURIComponent(
      returnUrl
    )}`;
  };

  // Bundle purchase (3 for $7)
  const buildBundlePaypalLink = (items) => {
    const slugs = items.map((i) => i.slug).join(",");

    const baseUrl =
      typeof window !== "undefined" ? window.location.origin : "";

    const returnUrl = `${baseUrl}/${lang}/resources/thank-you?bundle=3&items=${slugs}`;

    return `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD&amount=7&item_name=3%20Resource%20Bundle&return=${encodeURIComponent(
      returnUrl
    )}`;
  };

  // ================= BUNDLE LOGIC =================

  const toggleBundle = (item) => {
    setBundle((prev) => {
      const exists = prev.find((x) => x.slug === item.slug);

      // Remove if already selected
      if (exists) {
        return prev.filter((x) => x.slug !== item.slug);
      }

      // Limit to 3
      if (prev.length >= 3) {
        alert("You can only select 3 items for the bundle.");
        return prev;
      }

      // Add
      return [...prev, item];
    });
  };

  // ================= RENDER =================

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

      {/* ===== Category Filters ===== */}
      {finalCategories.length > 0 && (
        <div className="flex gap-2 justify-center flex-wrap mb-8">
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

          {finalCategories.map((cat) => (
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
            const paypalLink = buildPaypalLink(item);
            const inBundle = bundle.some((x) => x.slug === item.slug);

            return (
              <div
                key={`${item.type}-${item.slug}`}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Badges */}
                <div className="flex gap-2 mb-4 flex-wrap">
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

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                    ${item.price} USD
                  </span>
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

                {/* ===== ACTIONS ===== */}
                {item.type === "download" && (
                  <label className="flex items-center gap-2 text-sm mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inBundle}
                      onChange={() => toggleBundle(item)}
                    />
                    Add to bundle
                  </label>
                )}

                {/* Single Purchase */}
                <a
                  href={paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-blue-900 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-800 transition"
                >
                  Buy for ${item.price} →
                </a>
              </div>
            );
          })}
        </div>
      )}

      {/* ===== FIXED BUNDLE BAR ===== */}
      {bundle.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between z-50">
          <p className="font-medium">
            Bundle selected: {bundle.length} / 3
          </p>

          {bundle.length === 3 ? (
            <a
              href={buildBundlePaypalLink(bundle)}
              className="rounded-lg bg-green-700 text-white px-6 py-3 font-semibold text-center"
            >
              Buy Bundle for $7 →
            </a>
          ) : (
            <p className="text-sm text-gray-500">
              Select {3 - bundle.length} more to continue
            </p>
          )}
        </div>
      )}
    </section>
  );
}
