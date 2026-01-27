"use client";

import { useEffect, useState } from "react";

export default function YouTubeLatest() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error("Failed to load YouTube videos", err);
      }
    }

    fetchVideos();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
        Latest Messages on YouTube
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => {
          const vid = video.id.videoId;
          const snippet = video.snippet;

          return (
            <div
              key={vid}
              className="border rounded-xl shadow hover:shadow-md transition overflow-hidden bg-white"
            >
              <iframe
                src={`https://www.youtube.com/embed/${vid}`}
                title={snippet.title}
                className="w-full aspect-video"
                allowFullScreen
              />

              <div className="p-4">
                <h3 className="font-semibold text-sm line-clamp-2">
                  {snippet.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(snippet.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
