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

  const links = [
    ["about", "About"],
    ["speaking", "Speaking"],
    ["books", "Books"],
    ["subscribe", "Weekly Devotional"],
    ["videos", "Videos"],
    ["prayer-request", "Prayer"],
    ["contact", "Contact"],
  ];

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
      <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        {/* LOGO */}
        <Link href={base} aria-label="Home" className="flex items-center gap-2">
          <Image
            src="/images/klf-logo.png"
            alt="KLF Ministries"
            width={scrolled ? 48 : 64}
            height={scrolled ? 48 : 64}
            className="transition-all duration-300"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">
          {links.map(([path, label]) => (
            <Link
              key={path}
              href={`${base}/${path}`}
              className="px-4 py-2 text-gray-700 hover:text-blue-900 font-medium"
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
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU — FULL RESTORED NAV */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4 shadow-md">
          {links.map(([path, label]) => (
            <Link
              key={path}
              href={`${base}/${path}`}
              onClick={() => setOpen(false)}
              className="block text-gray-800 text-lg font-medium py-2 border-b"
            >
              {label}
            </Link>
          ))}

          {/* SUPPORT BUTTON */}
          <button
            onClick={handleSupportClick}
            className="block w-full mt-4 rounded-xl bg-yellow-400 px-5 py-3 text-center font-semibold text-blue-900"
          >
            {lang === "es" ? "Apoyar" : "Support"}
          </button>

          {/* LANGUAGE SWITCH */}
          <Link
            href={switchedPath}
            onClick={() => setOpen(false)}
            className="block text-center text-sm text-gray-600 mt-3"
          >
            {lang === "en" ? "Español 🇪🇸" : "English 🇺🇸"}
          </Link>
        </div>
      )}
    </motion.header>
  );
}
