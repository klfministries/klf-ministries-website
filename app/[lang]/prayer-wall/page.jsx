"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "../../../lib/supabaseClient";

export default function PrayerWall({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";
  const [prayers, setPrayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const text = {
    en: {
      title: "Prayer Wall",
      subtitle:
        "These prayers are shared anonymously. We stand together in faith.",
      empty: "No prayers have been shared yet.",
      loading: "Loading prayers…",
    },
    es: {
      title: "Muro de Oración",
      subtitle:
        "Estas oraciones se comparten de forma anónima. Caminamos juntos en fe.",
      empty: "Aún no se han compartido oraciones.",
      loading: "Cargando oraciones…",
    },
  };

  useEffect(() => {
    async function fetchPrayers() {
      try {
        const supabase = getSupabaseClient();

        const { data, error } = await supabase
          .from("prayer_wall")
          .select("id, message, created_at")
          .eq("approved", true)
          .order("created_at", { ascending: false });

        if (!error) {
          setPrayers(data || []);
        }
      } catch (err) {
        console.error("Prayer Wall error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrayers();
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">
        {text[lang].title}
      </h1>

      <p className="text-center text-gray-600 mb-10">
        {text[lang].subtitle}
      </p>

      {loading ? (
        <p className="text-center text-gray-500">
          {text[lang].loading}
        </p>
      ) : prayers.length === 0 ? (
        <p className="text-center italic text-gray-500">
          {text[lang].empty}
        </p>
      ) : (
        <div className="space-y-6">
          {prayers.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow rounded-lg p-6 border-l-4 border-blue-800"
            >
              <p className="text-gray-700 leading-relaxed">
                {p.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
