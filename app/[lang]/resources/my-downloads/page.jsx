"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import resources from "../downloads.json";

export default function MyDownloadsPage({ params }) {
  const { lang } = params;
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    try {
      // Read purchased slugs from localStorage
      const stored = JSON.parse(
        localStorage.getItem("myDownloads") || "[]"
      );

      setDownloads(stored); // array of slugs
    } catch (e) {
      setDownloads([]);
    }
  }, []);

  // Match purchased slugs to real resources from JSON
  const ownedResources = resources.filter((item) =>
    downloads.includes(item.slug)
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Downloads
      </h1>

      {ownedResources.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>You have not purchased any resources yet.</p>

          <Link
            href={`/${lang}/resources`}
            className="inline-block mt-6 text-blue-700 underline"
          >
            Browse Resources →
          </Link>
        </div>
      ) : (
        <div className="bg-white border rounded-xl shadow p-6 space-y-6">
          {ownedResources.map((item) => (
            <div
              key={item.slug}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4 last:border-b-0"
            >
              <div>
                <p className="font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400">
                  Purchased in this browser
                </p>
              </div>

              <a
                href={`/downloads/${item.file}`}
                className="inline-block rounded-lg bg-blue-900 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-800 transition"
                download
              >
                Download ↓
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Back link */}
      <div className="mt-10 text-center">
        <Link
          href={`/${lang}/resources`}
          className="text-blue-700 underline hover:text-blue-900 transition"
        >
          ← Back to Resources
        </Link>
      </div>
    </section>
  );
}
