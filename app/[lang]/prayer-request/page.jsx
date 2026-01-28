"use client";

import { useState, useEffect } from "react";

export default function PrayerRequest({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [error, setError] = useState(null);

  const backgrounds = [
    "/images/prayer-bg-1.jpg",
    "/images/prayer-bg-2.jpg",
    "/images/prayer-bg-3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((i) => (i + 1) % backgrounds.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "Submit a Prayer Request",
      intro:
        "You are not alone. Whatever you are facing, God cares deeply about it—and so do we. Please share your prayer request below. Our ministry will pray with you and for you.",
      successTitle: "We Have Received Your Prayer",
      successMessage:
        "Thank you for trusting us with your prayer request. You are not alone, and our ministry is lifting you up in prayer.",
      prayer:
        "May the Lord surround you with His peace, strengthen your heart, and remind you that He walks with you each day.",
      name: "Your Name (optional)",
      email: "Your Email (optional)",
      message: "Your Prayer Request",
      button: "Send Prayer Request",
      sending: "Sending...",
      privacy:
        "Your prayer request is confidential. It will only be seen by our ministry team and will never be shared publicly without your permission.",
      scripture:
        "“Cast all your anxiety on Him because He cares for you.” — 1 Peter 5:7",
      error:
        "There was an error sending your request. Please try again in a moment.",
      back: "Return to Home",
      trust: "We treat every request with care and confidentiality.",
    },
    es: {
      title: "Enviar una Petición de Oración",
      intro:
        "No estás solo. Dios se interesa profundamente por lo que estás enfrentando, y nosotros también. Comparte tu petición de oración y estaremos orando contigo.",
      successTitle: "Hemos Recibido Tu Petición",
      successMessage:
        "Gracias por confiar en nosotros con su petición de oración. No está solo y nuestro ministerio está orando por usted.",
      prayer:
        "Oramos para que el Señor le rodee con Su paz, fortalezca su corazón y le recuerde que Él camina con usted cada día.",
      name: "Tu Nombre (opcional)",
      email: "Tu Correo Electrónico (opcional)",
      message: "Tu Petición de Oración",
      button: "Enviar Petición",
      sending: "Enviando...",
      privacy:
        "Su petición de oración es confidencial. Solo será vista por el equipo del ministerio y no se compartirá públicamente sin su permiso.",
      scripture:
        "“Echando toda vuestra ansiedad sobre Él, porque Él tiene cuidado de vosotros.” — 1 Pedro 5:7",
      error:
        "Hubo un error al enviar su petición. Por favor intente nuevamente.",
      back: "Volver al Inicio",
      trust: "Tratamos cada petición con cuidado y total confidencialidad.",
    },
  };

  const t = content[lang];

  const EXEC_URL =
    "https://script.google.com/macros/s/AKfycbxyeSxfqgK2hkuz7qePggLXOMBS9TEnkYGfM2xe-Q7jbGefU_TR1YxUQ8c0RDRi0-QE/exec";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.target;

    // Honeypot spam protection
    if (form.website.value) {
      setLoading(false);
      return;
    }

    const payload = {
      name: form.name.value || "",
      email: form.email.value || "",
      message: form.message.value || "",
      language: lang,
    };

    try {
      await fetch(EXEC_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Network error:", err);
      setError(t.error);
    }

    setLoading(false);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 -z-10">
        {backgrounds.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Prayer background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <section className="relative max-w-3xl w-full mx-auto py-24 px-6 text-center">
        {!submitted ? (
          <>
            <h1 className="text-3xl font-bold text-white mb-6">
              {t.title}
            </h1>

            <p className="text-gray-100 mb-10 leading-relaxed">
              {t.intro}
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-8 space-y-6 text-left border border-blue-100"
            >
              <input
                type="text"
                name="name"
                placeholder={t.name}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-800"
              />

              <input
                type="email"
                name="email"
                placeholder={t.email}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-800"
              />

              {/* Honeypot */}
              <input type="text" name="website" className="hidden" />

              <textarea
                name="message"
                rows="6"
                required
                placeholder={t.message}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-800"
              ></textarea>

              {error && (
                <p className="text-sm text-red-600 text-center">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 text-white py-3 rounded-md font-semibold hover:bg-blue-900 transition disabled:opacity-60"
              >
                {loading ? t.sending : t.button}
              </button>

              {/* TRUST NOTE */}
              <p className="text-sm text-gray-500 text-center mt-2">
                🔒 {t.trust}
              </p>

              <p className="text-xs text-gray-400 text-center">
                {t.privacy}
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-white mb-6">
              {t.successTitle}
            </h2>

            <p className="text-lg text-gray-100 mb-6">
              {t.successMessage}
            </p>

            <p className="italic text-gray-200 mb-6">
              {t.scripture}
            </p>

            <p className="text-gray-100 leading-relaxed mb-8">
              {t.prayer}
            </p>

            <a
              href={`/${lang}`}
              className="inline-block text-blue-300 underline hover:text-blue-200"
            >
              {t.back}
            </a>
          </>
        )}
      </section>
    </div>
  );
}
