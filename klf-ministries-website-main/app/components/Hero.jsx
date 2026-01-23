"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function Hero({ lang = "en" }) {
  /* ================= PARALLAX BACKGROUND ================= */
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 400], ["0%", "10%"]);

  /* ================= SUPPORT HANDLER ================= */
  const handleSupportClick = () => {
    window.dispatchEvent(new Event("donation:open"));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 to-blue-900 text-white pt-10 pb-24">
      {/* PARALLAX BACKGROUND IMAGE */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bible-light.jpg')" }}
        />

        {/* SUBTLE DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center">
        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
        >
          {lang === "es" ? "Preparados para Vivir," : "Prepared to Live,"}
          <span className="block text-blue-200 mt-2">
            {lang === "es" ? "Listos para Su Regreso" : "Ready for His Return"}
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-blue-50"
        >
          {lang === "es"
            ? "Un ministerio cristiano que ayuda al pueblo de Dios a vivir fielmente, crecer espiritualmente y prepararse para el pronto regreso de Cristo."
            : "A Christ-centered ministry helping God’s people live faithfully, grow spiritually, and prepare for Christ’s soon return."}
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* SUPPORT — GLOBAL MODAL */}
          <Button
            size="lg"
            type="button"
            onClick={handleSupportClick}
            className="animate-soft-pulse rounded-2xl bg-yellow-400 px-10 py-6 text-lg font-semibold text-blue-900 shadow-xl hover:bg-yellow-300 transition"
          >
            {lang === "es" ? "Apoyar la Misión" : "Support the Mission"}
          </Button>

          {/* SUBSCRIBE */}
          <Link
            href={`/${lang}/subscribe`}
            className="rounded-2xl bg-white px-10 py-6 text-lg font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition"
          >
            {lang === "es"
              ? "Suscribirse a Devocionales"
              : "Subscribe for Devotionals"}
          </Link>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-sm italic text-blue-200"
        >
          {lang === "es"
            ? "“Dios usa a los rescatados para rescatar a otros.” — Mateo 10:8"
            : "“God uses rescued people to rescue others.” — Matthew 10:8"}
        </motion.p>
      </div>
    </section>
  );
}
