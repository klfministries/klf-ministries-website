"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav({ lang = "en" }) {
  const pathname = usePathname();
  const base = `/${lang}`;
  const switchLang = lang === "en" ? "es" : "en";
  const switchedPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* SHRINK ON SCROLL */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* SUPPORT CLICK → GLOBAL MODAL */
  const handleSupportClick = () => {
    window.dispatchEvent(new Event("donation:open"));
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b h-14"
          : "bg-white h-20"
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        {/* LOGO */}
        <div className="relative flex items-center">
          <Link href={base} aria-label="Home">
            <Image
              src="/images/klf-logo.png"
              alt="KLF Ministries"
              width={scrolled ? 48 : 72}
              height={scrolled ? 48 : 72}
              className="transition-all duration-300"
              priority
            />
          </Link>

          {/* 👉 HOME INDICATOR (DESKTOP ONLY) */}
          <div className="hidden lg:flex absolute -left-24 top-1/2 -translate-y-1/2 items-center gap-2 pointer-events-none">
            {/* Home text (normal font) */}
            <span className="text-sm font-medium text-black">
              Home
            </span>

            {/* Moving arrow */}
            <motion.span
              className="text-xl text-black"
              animate={{ x: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">
          {[
            ["about", "About"],
            ["speaking", "Speaking"],
            ["books", "Books"],
            ["subscribe", "Weekly Devotional"],
            ["videos", "Videos"],
            ["prayer-request", "Prayer"],
            ["contact", "Contact"],
          ].map(([path, label]) => (
            <Link
              key={path}
              href={`${base}/${path}`}
              className="px-4 py-2 text-gray-700 hover:text-blue-900"
            >
              {label}
            </Link>
          ))}

          {/* SUPPORT BUTTON */}
          <button
            type="button"
            onClick={handleSupportClick}
            className="ml-4 rounded-xl bg-yellow-400 px-5 py-2 text-sm font-semibold text-blue-900 hover:bg-yellow-300 transition"
          >
            {lang === "es" ? "Apoyar" : "Support"}
          </button>

          {/* LANGUAGE */}
          <Link
            href={switchedPath}
            className="ml-3 text-xs text-gray-500 hover:text-blue-900"
          >
            {lang === "en" ? "ES 🇪🇸" : "EN 🇺🇸"}
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4">
          <button
            onClick={handleSupportClick}
            className="block w-full rounded-xl bg-yellow-400 px-5 py-3 text-center font-semibold text-blue-900"
          >
            {lang === "es" ? "Apoyar" : "Support"}
          </button>
        </div>
      )}
    </motion.header>
  );
}
