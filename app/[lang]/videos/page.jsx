"use client";

import { useEffect, useState } from "react";

const PAGE_SIZE = 6;

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Sermons", value: "sermon" },
  { label: "Youth", value: "youth" },
  { label: "Marriage", value: "marriage" },
  { label: "Prophecy", value: "prophecy" },
];

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        setVideos(data.videos || []);
        setFiltered(data.videos || []);
      } catch (err) {
        console.error("Failed to load videos", err);
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  }, []);

  // 🔹 Filter by category (simple keyword-based)
  useEffect(() => {
    if (category === "all") {
      setFiltered(videos);
    } else {
      const f = videos.filter((v) =>
        v.title.toLowerCase().includes(category)
      );
      setFiltered(f);
    }
    setCurrentPage(1); // reset to page 1 when filter changes
  }, [category, videos]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentVideos = filtered.slice(start, end);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-20 px-6 text-center text-gray-600">
        Loading videos...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 space-y-10">
      {/* PAGE TITLE */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-900">
          Latest Messages on YouTube
        </h1>
        <p className="text-gray-600">
          Browse recent sermons and messages from Pastor Kiwayne Ferron.
        </p>
      </div>

      {/* 🔹 CATEGORY FILTERS */}
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`px-5 py-2 rounded-full border transition ${
              category === cat.value
                ? "bg-blue-900 text-white"
                : "bg-white text-blue-900 hover:bg-blue-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 🔹 VIDEOS GRID */}
      <div className="grid gap-8 md:grid-cols-3">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-blue-900 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(video.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 PAGINATION CONTROLS */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded border disabled:opacity-40"
          >
            ← Previous
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded border disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
