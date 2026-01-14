"use client";

import { useState, useEffect } from "react";

const PAYPAL_EMAIL = "kiwayne26@gmail.com";

/* ================= FEATURED DEVOTIONAL ROTATOR ================= */
function FeaturedDevotional({ lang }) {
  const devotionals = {
    en: [
      {
        verse: "Matthew 25:21",
        text:
          "Faithfulness is proven in unseen moments. God rewards obedience more than recognition.",
      },
      {
        verse: "Luke 19:13",
        text:
          "Prepared people live differently. Christ calls us to active, faithful service.",
      },
      {
        verse: "Matthew 10:8",
        text:
          "God uses rescued people to rescue others. Your testimony has purpose.",
      },
    ],
    es: [
      {
        verse: "Mateo 25:21",
        text:
          "La fidelidad se demuestra en lo secreto. Dios recompensa la obediencia.",
      },
      {
        verse: "Lucas 19:13",
        text:
          "Las personas preparadas viven diferente. Cristo llama a servir fielmente.",
      },
      {
        verse: "Mateo 10:8",
        text:
          "Dios usa a los rescatados para rescatar a otros. Tu testimonio tiene propósito.",
      },
    ],
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % devotionals[lang].length);
    }, 7000);
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <div className="max-w-3xl mx-auto text-center card p-8">
      <h2 className="text-2xl font-bold mb-3">
        {lang === "es" ? "Devocional Destacado" : "Featured Devotional"}
      </h2>

      <p className="italic text-gray-700 mb-4">
        {devotionals[lang][index].verse}
      </p>

      <p className="text-gray-700 mb-6">
        {devotionals[lang][index].text}
      </p>

      <a href={`/${lang}/devotionals`} className="text-blue-700 underline">
        {lang === "es" ? "Leer más devocionales" : "Read more devotionals"}
      </a>
    </div>
  );
}

/* ================= HOME PAGE ================= */
export default function Home({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";
  const [showDonate, setShowDonate] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          {lang === "es"
            ? "Preparados para Vivir, Listos para Su Regreso"
            : "Prepared to Live, Ready for His Return"}
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          {lang === "es"
            ? "Un ministerio cristiano dedicado a predicar, enseñar y equipar al pueblo de Dios para una vida fiel."
            : "A Christian ministry dedicated to preaching, teaching, and equipping God’s people for faithful living."}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button onClick={() => setShowDonate(true)} className="btn-primary">
            {lang === "es" ? "Apoyar el Ministerio" : "Support the Mission"}
          </button>

          <a
            href={`/${lang}/devotionals`}
            className="px-5 py-3 rounded border border-blue-900 text-blue-900 hover:bg-blue-50"
          >
            {lang === "es" ? "Palabra de Hoy" : "Today’s Word"}
          </a>
        </div>
      </section>

      {/* ================= FEATURED DEVOTIONAL ================= */}
      <section className="bg-white py-16 px-6">
        <FeaturedDevotional lang={lang} />
      </section>

      {/* ================= MINISTRY PATHS ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">📖 Devotionals</h3>
            <p className="mb-4">
              {lang === "es"
                ? "Ánimo bíblico para la vida diaria."
                : "Biblical encouragement for daily living."}
            </p>
            <a href={`/${lang}/devotionals`} className="text-blue-700 underline">
              {lang === "es" ? "Leer" : "Read"}
            </a>
          </div>

          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">🎥 Videos</h3>
            <p className="mb-4">
              {lang === "es"
                ? "Enseñanza clara y centrada en Cristo."
                : "Clear, Christ-centered teaching."}
            </p>
            <a href={`/${lang}/videos`} className="text-blue-700 underline">
              {lang === "es" ? "Ver" : "Watch"}
            </a>
          </div>

          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">🤝 Support</h3>
            <p className="mb-4">
              {lang === "es"
                ? "Sea parte de lo que Dios está haciendo."
                : "Be part of what God is doing."}
            </p>
            <button
              onClick={() => setShowDonate(true)}
              className="text-blue-700 underline"
            >
              {lang === "es" ? "Apoyar" : "Give"}
            </button>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS + CTA (STEP 4A) ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">
            {lang === "es" ? "Testimonios" : "Testimonies"}
          </h2>

          <blockquote className="italic text-gray-700 mb-6">
            “This ministry reminded me that faithfulness in small things still
            matters to God.”
            <div className="mt-2 font-medium">— Listener</div>
          </blockquote>

          <blockquote className="italic text-gray-700 mb-10">
            “Each devotional strengthens my walk with Christ.”
            <div className="mt-2 font-medium">— Subscriber</div>
          </blockquote>

          {/* SUBMIT TESTIMONY CTA */}
          <a
            href={`/${lang}/testimonials`}
            className="inline-block px-6 py-3 border border-blue-900 text-blue-900 rounded hover:bg-blue-50"
          >
            {lang === "es" ? "Enviar un Testimonio" : "Submit a Testimony"}
          </a>
        </div>
      </section>

      {/* ================= DONATION MODAL ================= */}
      {showDonate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowDonate(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              {lang === "es" ? "Apoyar el Ministerio" : "Support the Ministry"}
            </h2>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[10, 25, 50, 100, 200, 500, 1000].map((amt) => (
                <a
                  key={amt}
                  href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amt}&currency_code=USD`}
                  target="_blank"
                  className="border rounded py-2 text-center hover:bg-gray-100"
                >
                  ${amt}
                </a>
              ))}
            </div>

            <a
              href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD`}
              target="_blank"
              className="btn-primary block text-center mb-4"
            >
              {lang === "es" ? "Donar por PayPal" : "Donate via PayPal"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
