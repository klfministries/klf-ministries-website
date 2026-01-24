"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function Hero({ lang = "en" }) {
  /* ================= PARALLAX BACKGROUND ================= */
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 400], ["0%", "12%"]);

  /* ================= SUPPORT HANDLER ================= */
  const handleSupportClick = () => {
    window.dispatchEvent(new Event("donation:open"));
  };

  return (
    <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center">
      {/* PARALLAX BACKGROUND IMAGE */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}   // MUST match /public/hero.jpg
        />

        {/* SOFT DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-24 text-center w-full">

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            text-3xl 
            sm:text-4xl 
            md:text-6xl 
            font-extrabold 
            leading-tight 
            tracking-tight
            text-white
          "
        >
          {lang === "es" ? "Preparados para Vivir," : "Prepared to Live,"}
          <span className="block text-yellow-300 mt-4">
            {lang === "es" ? "Listos para Su Regreso" : "Ready for His Return"}
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="
            mx-auto 
            mt-8 
            max-w-3xl 
            text-base 
            sm:text-lg 
            md:text-xl 
            leading-relaxed
            text-blue-50
          "
        >
          {lang === "es"
            ? "Un ministerio cristiano que ayuda al pueblo de Dios a vivir fielmente, crecer espiritualmente y prepararse para el pronto regreso de Cristo."
            : "A Christ-centered ministry helping God’s people live faithfully, grow spiritually, and prepare for Christ’s soon return."}
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="
            mt-14 
            flex 
            flex-col 
            sm:flex-row 
            items-center 
            justify-center 
            gap-5
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
              px-12 
              py-5 
              text-lg 
              font-bold 
              text-blue-900 
              shadow-2xl 
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
              border-2 
              border-white 
              bg-transparent 
              px-12 
              py-5 
              text-lg 
              font-semibold 
              text-white 
              shadow-xl 
              hover:bg-white 
              hover:text-blue-900 
              transition
            "
          >
            {lang === "es" ? "Apoyar la Misión" : "Support the Mission"}
          </Button>
        </motion.div>

        {/* TERTIARY CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <Link
            href={`/${lang}/subscribe`}
            className="
              text-sm 
              sm:text-base 
              text-blue-100 
              underline 
              hover:text-white 
              transition
            "
          >
            {lang === "es"
              ? "Suscribirse a Devocionales Semanales"
              : "Get Weekly Devotionals"}
          </Link>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 text-xs sm:text-sm italic text-blue-200"
        >
          {lang === "es"
            ? "“Dios usa a los rescatados para rescatar a otros.” — Mateo 10:8"
            : "“God uses rescued people to rescue others.” — Matthew 10:8"}
        </motion.p>
      </div>
    </section>
  );
}
