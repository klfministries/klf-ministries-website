"use client";

import { useEffect } from "react";

export default function ClientSaver({ slugs }) {
  useEffect(() => {
    try {
      const existing = JSON.parse(
        localStorage.getItem("my-downloads") || "[]"
      );

      const newOnes = slugs.map((slug) => ({
        file: slug,
        date: new Date().toISOString(),
      }));

      const merged = [
        ...existing,
        ...newOnes.filter(
          (n) => !existing.some((e) => e.file === n.file)
        ),
      ];

      localStorage.setItem("my-downloads", JSON.stringify(merged));
    } catch (e) {
      console.error("Failed to save to My Downloads");
    }
  }, [slugs]);

  return null;
}
