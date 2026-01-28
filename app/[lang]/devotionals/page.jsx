"use client";

import { useState } from "react";

/* ========= helper to highlight search terms ========= */
function highlight(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={i}
        className="bg-yellow-200 px-1 rounded text-blue-900"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function Devotionals({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";
  const [query, setQuery] = useState("");

  const devotionals = {
    en: [
      {
        title: "Faithfulness When No One Is Watching",
        verse: "Matthew 25:21",
        body:
          "Faithfulness is proven in unseen moments. God values obedience more than applause.",
        featured: true,
      },
      {
        title: "Prepared People Live Differently",
        verse: "Luke 19:13",
        body:
          "Preparation for Christ’s return is active, not passive.",
        featured: true,
      },
      {
        title: "God Uses Rescued People",
        verse: "Matthew 10:8",
        body:
          "God never rescues us so we remain silent.",
        featured: true,
      },
      {
        title: "Faith When You Can’t See",
        verse: "2 Corinthians 5:7",
        body:
          "Faith moves forward even when clarity is missing.",
      },
      {
        title: "God Is Working in the Waiting",
        verse: "Psalm 27:14",
        body:
          "Waiting is not wasted time.",
      },
    ],

    es: [
      {
        title: "Fidelidad Cuando Nadie Está Mirando",
        verse: "Mateo 25:21",
        body:
          "La fidelidad se demuestra en lo secreto.",
        featured: true,
      },
      {
        title: "Las Personas Preparadas Viven Diferente",
        verse: "Lucas 19:13",
        body:
          "La preparación para el regreso de Cristo es activa.",
        featured: true,
      },
      {
        title: "Dios Usa a los Rescatados",
        verse: "Mateo 10:8",
        body:
          "Dios no nos rescata para que guardemos silencio.",
        featured: true,
      },
      {
        title: "Fe Cuando No Puedes Ver",
        verse: "2 Corintios 5:7",
        body:
          "La fe avanza incluso cuando falta claridad.",
      },
      {
        title: "Dios Está Obrando en la Espera",
        verse: "Salmos 27:14",
        body:
          "Esperar no es tiempo perdido.",
      },
    ],
  };

  const list = devotionals[lang];
  const mostRead = list.filter((d) => d.featured);

  const filtered = list.filter((d) =>
    `${d.title} ${d.verse} ${d.body}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="bg-transparent">

      {/* ================= HEADER + SEARCH ================= */}
      <section className="max-w-4xl mx-auto pt-20 pb-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          {lang === "es" ? "Devocionales" : "Devotionals"}
        </h1>

        <p className="text-gray-700 mb-6">
          {lang === "es"
            ? "Reflexiones bíblicas para fortalecer su fe."
            : "Biblical reflections to strengthen your faith."}
        </p>

        {/* WHAT YOU’LL RECEIVE */}
        <ul className="mb-8 space-y-2 text-gray-700">
          <li>📖 {lang === "es" ? "Reflexiones bíblicas semanales" : "Weekly Bible-based reflections"}</li>
          <li>🙏 {lang === "es" ? "Ánimo espiritual para la vida diaria" : "Spiritual encouragement for daily living"}</li>
          <li>⏳ {lang === "es" ? "Esperanza centrada en el regreso de Cristo" : "Hope centered on Christ’s return"}</li>
        </ul>
      </section>

      {/* ================= SCRIPTURE BANNER IMAGE ================= */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/devotional-banner.jpg"
            alt="Scripture reflection"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
            <div className="text-white max-w-3xl">
              <p className="text-xl sm:text-2xl italic leading-relaxed">
                {lang === "es"
                  ? "“Lámpara es a mis pies tu palabra, y lumbrera a mi camino.”"
                  : "“Your word is a lamp to my feet and a light to my path.”"}
              </p>
              <p className="mt-4 text-sm sm:text-base opacity-90">
                — Psalm 119:105
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-14 text-center">
        <input
          type="text"
          placeholder={
            lang === "es"
              ? "Buscar devocional…"
              : "Search devotionals…"
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md mx-auto border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-900"
        />
      </section>

      {/* ================= MOST READ ================= */}
      {!query && (
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-xl font-bold mb-6 text-center">
            {lang === "es" ? "Más Leídos" : "Most Read"}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {mostRead.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow overflow-hidden transition hover:shadow-lg"
              >
                {/* IMAGE */}
                <img
                  src={`/images/devotionals/featured-${i + 1}.jpg`}
                  alt={d.title}
                  className="w-full h-40 object-cover"
                />

                {/* CONTENT */}
                <div className="p-6 border-l-4 border-yellow-400">
                  <h3 className="font-semibold mb-1 text-lg">
                    {d.title}
                  </h3>
                  <p className="italic text-gray-600 text-sm mb-2">
                    {d.verse}
                  </p>
                  <p className="text-gray-700">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= SEARCH RESULTS ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            {lang === "es"
              ? "No se encontraron resultados."
              : "No results found."}
          </p>
        ) : (
          <div className="space-y-8">
            {filtered.map((d, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow transition hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {highlight(d.title, query)}
                </h2>
                <p className="italic text-gray-600 mb-3">
                  {highlight(d.verse, query)}
                </p>
                <p className="text-gray-700">
                  {highlight(d.body, query)}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= ARCHIVE CTA ================= */}
      <section className="bg-transparent py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {lang === "es"
            ? "Archivo Completo de Devocionales"
            : "Complete Devotional Archive"}
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          {lang === "es"
            ? "Todos los devocionales están disponibles en nuestro archivo."
            : "All devotionals are available in our full archive."}
        </p>

        <a
          href="https://klfministries.substack.com"
          target="_blank"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition"
        >
          {lang === "es"
            ? "Ver Archivo Completo"
            : "View Full Archive"}
        </a>
      </section>
    </div>
  );
}
