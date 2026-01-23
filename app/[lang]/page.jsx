"use client";

import Hero from "../components/Hero";
import MobileSubscribeBar from "../components/MobileSubscribeBar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= FEATURED DEVOTIONAL ================= */
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
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % devotionals[lang].length),
      7000
    );
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-10"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT — IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/devotional-placeholder.jpg"
            alt="Open Bible devotional"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            {lang === "es" ? "Devocional Destacado" : "Featured Devotional"}
          </h2>

          <div className="w-16 h-1 bg-yellow-400 mx-auto md:mx-0 my-4 rounded" />

          <p className="italic text-gray-600 mb-4">
            {devotionals[lang][index].verse}
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {devotionals[lang][index].text}
          </p>

          <Link
            href={`/${lang}/devotionals`}
            className="inline-block font-medium text-blue-800 hover:underline"
          >
            {lang === "es"
              ? "Leer más devocionales →"
              : "Read more devotionals →"}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= ROTATING TESTIMONIES ================= */
function RotatingTestimonies({ lang }) {
  const testimonies = {
    en: [
      {
        text:
          "This ministry reminded me that faithfulness in small things still matters to God.",
        author: "Listener",
      },
      {
        text:
          "The messages helped me reconnect with Scripture and trust God more deeply.",
        author: "Weekly Devotional Reader",
      },
      {
        text:
          "I found encouragement, clarity, and renewed hope through this ministry.",
        author: "Online Viewer",
      },
    ],
    es: [
      {
        text:
          "Este ministerio me recordó que la fidelidad en las cosas pequeñas todavía importa a Dios.",
        author: "Oyente",
      },
      {
        text:
          "Los mensajes me ayudaron a reconectarme con la Palabra de Dios.",
        author: "Lector Devocional",
      },
      {
        text:
          "Encontré ánimo, claridad y una esperanza renovada.",
        author: "Visitante",
      },
    ],
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonies[lang].length),
      7000
    );
    return () => clearInterval(timer);
  }, [lang]);

  const current = testimonies[lang][index];

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-blue-900"
      >
        {lang === "es" ? "Testimonios" : "Testimonies"}
      </motion.h2>

      <p className="max-w-xl mx-auto text-gray-600 mb-14">
        {lang === "es"
          ? "Dios sigue obrando a través de vidas transformadas."
          : "God continues to work through transformed lives."}
      </p>

      <motion.blockquote
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-12 text-lg italic text-gray-700"
      >
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-blue-200">
          “
        </span>

        {current.text}

        <div className="mt-8 font-medium text-blue-900 not-italic">
          — {current.author}
        </div>
      </motion.blockquote>

      <Link
        href={`/${lang}/testimonials`}
        className="inline-block mt-14 px-10 py-4 rounded-2xl border border-blue-900 text-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition"
      >
        {lang === "es" ? "Enviar un Testimonio" : "Submit a Testimony"}
      </Link>
    </div>
  );
}

/* ================= HOME PAGE ================= */
export default function Home({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <>
      <Hero lang={lang} />
      <div className="pt-10" />

      {/* FEATURED DEVOTIONAL — WITH IMAGE */}
      <section className="bg-gray-50 py-24 px-6">
        <FeaturedDevotional lang={lang} />
      </section>

      {/* TESTIMONIES */}
      <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-b from-white via-blue-50 to-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,58,138,0.08),transparent_60%)]"
        />
        <RotatingTestimonies lang={lang} />
      </section>

      {/* SUPPORT THE MISSION */}
      <section
        id="support"
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          {lang === "es" ? "Apoye la Obra" : "Support the Mission"}
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100 mb-4">
          {lang === "es"
            ? "Tu apoyo permite compartir esperanza, oración y la Palabra de Dios alrededor del mundo."
            : "Your support helps share hope, prayer, and God’s Word around the world."}
        </p>

        <p className="italic text-blue-200 max-w-2xl mx-auto mb-8">
          {lang === "es"
            ? "“Cada uno dé como propuso en su corazón: no con tristeza ni por necesidad, porque Dios ama al dador alegre.” — 2 Corintios 9:7"
            : "“Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.” — 2 Corinthians 9:7"}
        </p>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("donation:open"))}
          className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          {lang === "es" ? "Dar Ahora" : "Give Now"}
        </button>
      </section>

      <MobileSubscribeBar lang={lang} />
    </>
  );
}
