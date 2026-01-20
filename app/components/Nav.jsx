"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav({ lang = "en" }) {
  const pathname = usePathname();
  const base = `/${lang}`;
  const switchLang = lang === "en" ? "es" : "en";
  const switchedPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path) =>
    `nav-link px-5 py-2 text-[15px] font-medium transition ${
      pathname === `${base}${path}`
        ? "text-blue-900 font-semibold"
        : "text-gray-700 hover:text-blue-900"
    }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO (PNG RESTORED) */}
          <Link
            href={base}
            title="KLF Ministries"
            className="flex items-center"
          >
            <Image
              src="/images/klf-logo.png"
              alt="KLF Ministries"
              width={scrolled ? 64 : 80}
              height={scrolled ? 64 : 80}
              className="transition-all duration-300 animate-logo-glow"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href={`${base}/about`} className={linkClass("/about")}>
              {lang === "es" ? "Acerca de" : "About"}
            </Link>

            <Link href={`${base}/speaking`} className={linkClass("/speaking")}>
              {lang === "es" ? "Predicación" : "Speaking"}
            </Link>

            <Link href={`${base}/books`} className={linkClass("/books")}>
              {lang === "es" ? "Libros" : "Books"}
            </Link>

            <Link
              href={`${base}/subscribe`}
              className={`${linkClass("/subscribe")} text-blue-700`}
            >
              {lang === "es" ? "Devocional Semanal" : "Weekly Devotional"}
            </Link>

            <Link href={`${base}/videos`} className={linkClass("/videos")}>
              Videos
            </Link>

            <Link
              href={`${base}/prayer-request`}
              className={linkClass("/prayer-request")}
            >
              {lang === "es" ? "Oración" : "Prayer"}
            </Link>

            <Link href={`${base}/contact`} className={linkClass("/contact")}>
              {lang === "es" ? "Contacto" : "Contact"}
            </Link>

            {/* SUPPORT CTA */}
            <Link
              href={`/${lang}#support`}
              className="ml-3 rounded-xl bg-yellow-400 px-5 py-2 text-sm font-semibold text-blue-900 hover:bg-yellow-300 transition animate-soft-pulse"
            >
              {lang === "es" ? "Apoyar" : "Support"}
            </Link>

            {/* LANGUAGE SWITCH */}
            <Link
              href={switchedPath}
              className="ml-3 text-xs font-medium text-gray-500 hover:text-blue-900"
            >
              {lang === "en" ? "ES 🇪🇸" : "EN 🇺🇸"}
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t bg-white px-6 py-6 space-y-3">
          <Link href={base} className={linkClass("")}>
            Home
          </Link>
          <Link href={`${base}/about`} className={linkClass("/about")}>
            About
          </Link>
          <Link href={`${base}/speaking`} className={linkClass("/speaking")}>
            Speaking
          </Link>
          <Link href={`${base}/books`} className={linkClass("/books")}>
            Books
          </Link>
          <Link href={`${base}/subscribe`} className={linkClass("/subscribe")}>
            Weekly Devotional
          </Link>
          <Link href={`${base}/videos`} className={linkClass("/videos")}>
            Videos
          </Link>
          <Link
            href={`${base}/prayer-request`}
            className={linkClass("/prayer-request")}
          >
            Prayer
          </Link>
          <Link href={`${base}/contact`} className={linkClass("/contact")}>
            Contact
          </Link>

          <Link
            href={`/${lang}#support`}
            className="block mt-4 rounded-xl bg-yellow-400 px-5 py-3 text-center font-semibold text-blue-900"
          >
            Support
          </Link>

          <Link
            href={switchedPath}
            className="block text-center text-sm underline text-gray-600"
          >
            {lang === "en" ? "ES 🇪🇸" : "EN 🇺🇸"}
          </Link>
        </div>
      )}
    </header>
  );
}
