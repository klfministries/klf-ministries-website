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
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 to-blue-900 text-white pt-10 pb-28">
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

        {/* OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24 text-center">

        {/* HEADLINE — MOBILE OPTIMIZED */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            text-2xl 
            sm:text-4xl 
            md:text-6xl 
            font-bold 
            leading-tight 
            text-white
          "
        >
          {lang === "es" ? "Preparados para Vivir," : "Prepared to Live,"}
          <span className="block text-yellow-300 mt-3">
            {lang === "es" ? "Listos para Su Regreso" : "Ready for His Return"}
          </span>
        </motion.h1>

        {/* SUBTEXT — MOBILE OPTIMIZED */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            mx-auto 
            mt-6 
            max-w-2xl 
            text-sm 
            sm:text-base 
            md:text-lg 
            text-blue-50
          "
        >
          {lang === "es"
            ? "Un ministerio cristiano que ayuda al pueblo de Dios a vivir fielmente, crecer espiritualmente y prepararse para el pronto regreso de Cristo."
            : "A Christ-centered ministry helping God’s people live faithfully, grow spiritually, and prepare for Christ’s soon return."}
        </motion.p>

        {/* CTA BUTTONS — MOBILE STACKING IMPROVED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
            mt-10 
            flex 
            flex-col 
            sm:flex-row 
            items-center 
            justify-center 
            gap-4
          "
        >
          {/* PRIMARY CTA */}
          <Link
            href={`/${lang}/devotionals`}
            className="
              w-full 
              sm:w-auto
              rounded-2xl 
              bg-yellow-400 
              px-10 
              py-5 
              text-base 
              sm:text-lg 
              font-semibold 
              text-blue-900 
              shadow-xl 
              hover:bg-yellow-300 
              hover:scale-105 
              transition 
              transform
            "
          >
            {lang === "es"
              ? "Leer Devocional de Hoy"
              : "Read Today’s Devotional"}
          </Link>

          {/* SECONDARY CTA */}
          <Button
            size="lg"
            type="button"
            onClick={handleSupportClick}
            className="
              w-full 
              sm:w-auto
              rounded-2xl 
              border 
              border-white 
              bg-transparent 
              px-10 
              py-5 
              text-base 
              sm:text-lg 
              font-semibold 
              text-white 
              shadow-lg 
              hover:bg-white 
              hover:text-blue-900 
              transition
            "
          >
            {lang === "es" ? "Apoyar la Misión" : "Support the Mission"}
          </Button>

          {/* TERTIARY CTA */}
          <Link
            href={`/${lang}/subscribe`}
            className="
              w-full 
              sm:w-auto
              rounded-2xl 
              bg-white/90 
              px-10 
              py-5 
              text-base 
              sm:text-lg 
              font-semibold 
              text-blue-900 
              shadow 
              hover:bg-white 
              transition
            "
          >
            {lang === "es"
              ? "Suscribirse a Devocionales"
              : "Get Weekly Devotionals"}
          </Link>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-xs sm:text-sm italic text-blue-200"
        >
          {lang === "es"
            ? "“Dios usa a los rescatados para rescatar a otros.” — Mateo 10:8"
            : "“God uses rescued people to rescue others.” — Matthew 10:8"}
        </motion.p>
      </div>
    </section>
  );
}
