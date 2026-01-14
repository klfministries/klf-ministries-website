"use client";

import { useState, useEffect } from "react";

const PAYPAL_EMAIL = "kiwayne26@gmail.com";

/* ================= TESTIMONIAL ROTATOR ================= */
function RotatingTestimonials({ lang }) {
  const testimonials = {
    en: [
      "This ministry reminded me that faithfulness in small things still matters to God.",
      "Each devotional speaks directly to real life and strengthens my walk with Christ.",
      "The messages are timely, biblical, and deeply encouraging.",
    ],
    es: [
      "Este ministerio me recordó que la fidelidad en las cosas pequeñas todavía importa para Dios.",
      "Cada devocional fortalece mi caminar con Cristo.",
      "Los mensajes son oportunos, bíblicos y alentadores.",
    ],
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials[lang].length);
    }, 6000);
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-10">
        {lang === "es" ? "Testimonios" : "Testimonies"}
      </h2>

      <blockquote className="italic text-gray-700 text-lg transition-all duration-500">
        “{testimonials[lang][index]}”
      </blockquote>

      <p className="mt-4 font-medium text-gray-600">
        — {lang === "es" ? "Participante" : "Listener"}
      </p>
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

      {/* ================= TODAY’S WORD ================= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center card p-8">
          <h2 className="text-2xl font-bold mb-3">
            {lang === "es" ? "Palabra para Hoy" : "Today’s Word"}
          </h2>

          <p className="italic text-gray-700 mb-4">
            “Well done, good and faithful servant.” — Matthew 25:21
          </p>

          <p className="text-gray-700 mb-6">
            {lang === "es"
              ? "Dios valora la fidelidad silenciosa. Cuando permanecemos firmes aun cuando nadie ve, el cielo toma nota."
              : "God values quiet faithfulness. When we remain faithful even when no one sees, heaven takes notice."}
          </p>

          <a
            href={`/${lang}/devotionals`}
            className="text-blue-700 underline"
          >
            {lang === "es"
              ? "Leer más devocionales"
              : "Read more devotionals"}
          </a>
        </div>
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

      {/* ================= TESTIMONIALS (STEP 2) ================= */}
      <section className="bg-white py-20 px-6">
        <RotatingTestimonials lang={lang} />
      </section>

      {/* ================= SUPPORT CTA ================= */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {lang === "es" ? "Apoye la Misión" : "Support the Mission"}
        </h2>

        <p className="max-w-2xl mx-auto mb-8">
          {lang === "es"
            ? "Su generosidad ayuda a compartir recursos cristianos fieles y centrados en Cristo."
            : "Your generosity helps share faithful, Christ-centered resources with others."}
        </p>

        <button
          onClick={() => setShowDonate(true)}
          className="bg-white text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-100"
        >
          {lang === "es" ? "Dar Ahora" : "Give Now"}
        </button>
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
