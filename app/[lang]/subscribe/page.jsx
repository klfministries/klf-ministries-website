"use client";

export default function SubscribePage({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="min-h-screen bg-gray-50 px-6 pt-32 pb-24 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {lang === "es"
          ? "Devocionales Semanales por Correo"
          : "Weekly Devotionals by Email"}
      </h1>

      <p className="max-w-xl mx-auto mb-10 text-gray-700">
        {lang === "es"
          ? "Reciba reflexiones bíblicas, ánimo espiritual y llamados a vivir fielmente mientras nos preparamos para el pronto regreso de Cristo."
          : "Receive biblical reflections, spiritual encouragement, and calls to faithful living as we prepare for Christ’s soon return."}
      </p>

      <div className="max-w-xl mx-auto rounded-xl overflow-hidden shadow-sm bg-white">
        <iframe
          src="https://klfministries.substack.com/embed"
          width="100%"
          height="320"
          style={{ border: "1px solid #e5e7eb", background: "white" }}
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </section>
  );
}
