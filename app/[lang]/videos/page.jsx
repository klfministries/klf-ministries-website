"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Head from "next/head";

const PAGE_SIZE = 6;

/* ========= CATEGORY RULES ========= */
const CATEGORY_RULES = [
  { label: "All", value: "all", match: () => true },
  { label: "Sermons", value: "sermon", match: (t) => t.includes("kiwayne") },
  { label: "Youth", value: "youth", match: (t) => t.includes("youth") },
  {
    label: "Marriage",
    value: "marriage",
    match: (t) =>
      t.includes("marriage") || t.includes("man") || t.includes("love"),
  },
  {
    label: "Prophecy",
    value: "prophecy",
    match: (t) =>
      t.includes("prophecy") ||
      t.includes("end") ||
      t.includes("daniel") ||
      t.includes("revelation"),
  },
];

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function VideosPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const category = searchParams.get("category") || "all";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const query = searchParams.get("q") || "";

  /* ================= LOAD VIDEOS ================= */
  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        setVideos(data.videos || []);
      } catch (err) {
        console.error("Failed to load videos", err);
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  }, []);

  /* ================= FEATURED ================= */
  const featured = useMemo(() => {
    if (videos.length === 0) return null;
    return [...videos].sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    )[0];
  }, [videos]);

  /* ================= FILTER ================= */
  const filtered = useMemo(() => {
    let list = videos;

    if (category !== "all") {
      const rule = CATEGORY_RULES.find((c) => c.value === category);
      if (rule) {
        list = list.filter((v) =>
          rule.match(v.title.toLowerCase())
        );
      }
    }

    if (query) {
      const q = query.toLowerCase();
      list = list.filter((v) =>
        v.title.toLowerCase().includes(q)
      );
    }

    return list;
  }, [videos, category, query]);

  /* ================= COUNTS ================= */
  const counts = useMemo(() => {
    const map = {};
    CATEGORY_RULES.forEach((cat) => {
      map[cat.value] =
        cat.value === "all"
          ? videos.length
          : videos.filter((v) =>
              cat.match(v.title.toLowerCase())
            ).length;
    });
    return map;
  }, [videos]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const currentVideos = filtered.slice(start, start + PAGE_SIZE);

  const setParam = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all" || value === "1") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    if (key !== "page") params.delete("page");
    router.push(`?${params.toString()}`);
  };

  const highlight = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-20 px-6 text-center text-gray-600">
        Loading videos...
      </div>
    );
  }

  return (
    <>
      {/* ===== SEO ===== */}
      <Head>
        <title>Videos | KLF Ministries</title>
        <meta
          name="description"
          content="Watch sermons and Bible messages from Pastor Kiwayne Ferron on the KLF Ministries YouTube channel."
        />
      </Head>

      <div className="max-w-6xl mx-auto pt-20 pb-24 px-6 space-y-14">
        {/* ===== TITLE ===== */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-900">
            Latest Messages on YouTube
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse sermons, Bible studies, and messages to encourage faithful and prepared living.
          </p>
        </div>

        {/* ===== FEATURED ===== */}
        {featured && (
          <div className="bg-white border rounded-2xl shadow flex flex-col md:flex-row gap-6 p-6">
            <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${featured.id}`}
                title={featured.title}
                allowFullScreen
              />
            </div>

            <div className="space-y-4">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                Latest Sermon
              </span>

              <h2 className="text-2xl font-bold text-blue-900">
                {featured.title}
              </h2>

              <p className="text-sm text-gray-500">
                {formatDate(featured.publishedAt)}
              </p>

              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>
        )}

        {/* ===== SEARCH ===== */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search video titles..."
            value={query}
            onChange={(e) => setParam("q", e.target.value)}
            className="w-full sm:w-96 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* ===== FILTERS ===== */}
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORY_RULES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setParam("category", cat.value)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                category === cat.value
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 border hover:bg-blue-50"
              }`}
            >
              {cat.label} ({counts[cat.value] || 0})
            </button>
          ))}
        </div>

        {/* ===== VIDEO GRID ===== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* DATE BADGE */}
                <span className="absolute top-2 left-2 bg-white/90 text-xs px-2 py-1 rounded">
                  {formatDate(video.publishedAt)}
                </span>

                {/* PLAY OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-white rounded-full p-4 text-xl">
                    ▶
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-blue-900 line-clamp-2">
                  {highlight(video.title)}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ===== PAGINATION ===== */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 flex-wrap pt-6">
            <button
              onClick={() => setParam("page", String(page - 1))}
              disabled={page === 1}
              className="px-3 py-2 rounded border disabled:opacity-40"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setParam("page", String(p))}
                  className={`px-3 py-2 rounded border ${
                    p === page
                      ? "bg-blue-900 text-white"
                      : "bg-white hover:bg-blue-50"
                  }`}
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => setParam("page", String(page + 1))}
              disabled={page === totalPages}
              className="px-3 py-2 rounded border disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {/* ===== MODAL PLAYER ===== */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                title={selectedVideo.title}
                allowFullScreen
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-500 mb-4">
                {formatDate(selectedVideo.publishedAt)}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Watch on YouTube →
                </a>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="ml-auto text-gray-600 hover:text-black"
                >
                  Close ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
