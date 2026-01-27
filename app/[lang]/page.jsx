"use client";

import Hero from "../components/Hero";
import MobileSubscribeBar from "../components/MobileSubscribeBar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import YouTubeLatest from "../components/YouTubeLatest"; // 🔴 ADD THIS

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
      className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/featured-devotional.jpg"
            alt="Open Bible during morning devotion"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* TEXT */}
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
      {/* HERO */}
      <Hero lang={lang} />

      {/* ================= FEATURED DEVOTIONAL ================= */}
      <section className="bg-[#f7f4ee] py-28 px-6">
        <FeaturedDevotional lang={lang} />
      </section>

      {/* ================= LATEST DEVOTIONALS GRID ================= */}
      <section className="py-28 px-6 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            {lang === "es" ? "Últimos Devocionales" : "Latest Devotionals"}
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: lang === "es" ? "Caminando en la Luz" : "Walking in the Light",
                excerpt: lang === "es"
                  ? "Dios llama a sus hijos a caminar fielmente, aun cuando el camino no es claro."
                  : "God calls His children to walk faithfully, even when the path is not clear.",
                image: "/dev1.jpg",
              },
              {
                title: lang === "es" ? "El Poder de la Oración" : "The Power of Prayer",
                excerpt: lang === "es"
                  ? "La oración conecta el corazón humano con el poder infinito de Dios."
                  : "Prayer connects the human heart with the infinite power of God.",
                image: "/dev2.jpg",
              },
              {
                title: lang === "es" ? "Esperanza en Cristo" : "Hope in Christ",
                excerpt: lang === "es"
                  ? "En medio de la incertidumbre, Cristo sigue siendo nuestra esperanza segura."
                  : "In the midst of uncertainty, Christ remains our sure hope.",
                image: "/dev3.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <Link
                    href={`/${lang}/devotionals`}
                    className="mt-auto text-blue-800 font-medium hover:underline"
                  >
                    {lang === "es" ? "Leer más →" : "Read More →"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            {lang === "es" ? "Nuestra Misión" : "Our Mission"}
          </h2>

          <p className="max-w-2xl mx-auto text-gray-700 mb-10">
            {lang === "es"
              ? "Proclamar el evangelio eterno y preparar un pueblo para la venida de Jesucristo."
              : "Proclaiming the everlasting gospel and preparing a people for the coming of Jesus Christ."}
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/mission.jpg"
              alt="Open Bible with cross"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= LATEST YOUTUBE VIDEOS ================= */}
      <section className="py-28 px-6 bg-[#f7f4ee]">
        <YouTubeLatest />
      </section>

      {/* ================= TESTIMONIES ================= */}
      <section className="relative overflow-hidden py-28 px-6 text-center bg-[#f1f5f9]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,58,138,0.06),transparent_65%)]"
        />
        <RotatingTestimonies lang={lang} />
      </section>

      {/* ================= SUPPORT THE MISSION ================= */}
      <section
        id="support"
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-28 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          {lang === "es" ? "Apoye la Obra" : "Support the Mission"}
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100 mb-4">
          {lang === "es"
            ? "Tu apoyo permite compartir esperanza, oración y la Palabra de Dios alrededor del mundo."
            : "Your support helps share hope, prayer, and God’s Word around the world."}
        </p>

        <p className="italic text-blue-200 max-w-2xl mx-auto mb-10">
          {lang === "es"
            ? "“Cada uno dé como propuso en su corazón: no con tristeza ni por necesidad, porque Dios ama al dador alegre.” — 2 Corintios 9:7"
            : "“Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.” — 2 Corinthians 9:7"}
        </p>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("donation:open"))}
          className="bg-white text-blue-900 px-12 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          {lang === "es" ? "Dar Ahora" : "Give Now"}
        </button>
      </section>

      <MobileSubscribeBar lang={lang} />
    </>
  );
}
