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
function RotatingTestimonials({ lang }) {
  const testimonials = {
    en: [
      {
        text:
          "This ministry reminded me that faithfulness in small things still matters to God.",
        author: "Listener",
      },
      {
        text:
          "Each devotional strengthens my walk with Christ and keeps me spiritually focused.",
        author: "Subscriber",
      },
    ],
    es: [
      {
        text:
          "Este ministerio me recordó que la fidelidad en lo pequeño todavía importa a Dios.",
        author: "Oyente",
      },
      {
        text:
          "Cada devocional fortalece mi caminar con Cristo y me mantiene enfocado.",
        author: "Suscriptor",
      },
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
    <blockquote className="italic text-gray-700 text-lg transition-all">
      “{testimonials[lang][index].text}”
      <div className="mt-4 font-medium">
        — {testimonials[lang][index].author}
      </div>
    </blockquote>
  );
}
export default function Home({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";
  const [showDonate, setShowDonate] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="fade-in max-w-5xl mx-auto text-center py-20 px-6">
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
      <section className="fade-in bg-white py-16 px-6">
        <FeaturedDevotional lang={lang} />
      </section>
{/* ================= TESTIMONIALS + CTA ================= */}
<section className="fade-in bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold mb-10">
      {lang === "es" ? "Testimonios" : "Testimonies"}
    </h2>

    <RotatingTestimonials lang={lang} />

    <div className="mt-10">
      <a
        href={`/${lang}/testimonials`}
        className="inline-block px-6 py-3 border border-blue-900 text-blue-900 rounded hover:bg-blue-50"
      >
        {lang === "es" ? "Enviar un Testimonio" : "Submit a Testimony"}
      </a>
    </div>
  </div>
</section>

      {/* ================= SUPPORT CTA ================= */}
      <section className="fade-in bg-blue-900 text-white py-20 px-6 text-center">
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

            {/* MONTHLY TOGGLE */}
            <div className="flex justify-center gap-3 mb-4">
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-4 py-1 rounded border ${
                  !isMonthly ? "bg-blue-900 text-white" : "bg-gray-100"
                }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-4 py-1 rounded border ${
                  isMonthly ? "bg-blue-900 text-white" : "bg-gray-100"
                }`}
              >
                Monthly
              </button>
            </div>

            {/* CURRENCY TOGGLE */}
            <div className="flex justify-center gap-2 mb-4">
              {["USD", "JMD"].map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-4 py-1 rounded border ${
                    currency === cur
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* SUGGESTED AMOUNTS */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[10, 25, 50, 100, 200, 500, 1000].map((amt) => (
                <a
                  key={amt}
                  href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amt}&currency_code=${currency}&return=https://klfministries.org/${lang}/thank-you`}
                  target="_blank"
                  className="border rounded py-2 text-center hover:bg-gray-100"
                >
                  {currency} {amt}
                </a>
              ))}
            </div>

            {/* CUSTOM AMOUNT */}
            <input
              type="number"
              placeholder={
                lang === "es" ? "Monto personalizado" : "Custom amount"
              }
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4"
            />

            <a
              href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${customAmount}&currency_code=${currency}&return=https://klfministries.org/${lang}/thank-you`}
              target="_blank"
              className="btn-primary block text-center mb-4"
            >
              {lang === "es" ? "Donar por PayPal" : "Donate via PayPal"}
            </a>

            {/* BANK TRANSFER */}
            <div className="border-t pt-4 text-sm text-center">
              <p className="mb-2 font-medium">
                {lang === "es"
                  ? "¿Prefiere transferencia o depósito bancario?"
                  : "Prefer bank transfer or direct deposit?"}
              </p>

              <a
                href={`mailto:${PAYPAL_EMAIL}?subject=Bank%20Transfer%20Request`}
                className="text-blue-700 underline"
              >
                {lang === "es"
                  ? "Solicitar detalles bancarios"
                  : "Request bank details"}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
