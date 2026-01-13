"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ lang }) {
  const pathname = usePathname();
  const base = `/${lang}`;
  const switchLang = lang === "en" ? "es" : "en";
  const switchedPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  const linkClass = (path) =>
    `px-5 py-3 rounded text-sm md:text-base ${
      pathname === `${base}${path}`
        ? "bg-blue-900 text-white"
        : "bg-gray-200 hover:bg-gray-300"
    }`;

  return (
    <div className="flex flex-col items-center gap-5 mt-6">
      {/* NAV LINKS */}
      <nav className="flex flex-wrap justify-center gap-3 px-4">
        <Link href={base} className={linkClass("")}>
          {lang === "es" ? "Inicio" : "Home"}
        </Link>
        <Link href={`${base}/about`} className={linkClass("/about")}>
          {lang === "es" ? "Acerca de" : "About"}
        </Link>
        <Link href={`${base}/speaking`} className={linkClass("/speaking")}>
          {lang === "es" ? "Predicación" : "Speaking"}
        </Link>
        <Link href={`${base}/books`} className={linkClass("/books")}>
          {lang === "es" ? "Libros" : "Books"}
        </Link>
        <Link href={`${base}/videos`} className={linkClass("/videos")}>
          Videos
        </Link>
        <Link href={`${base}/contact`} className={linkClass("/contact")}>
          {lang === "es" ? "Contacto" : "Contact"}
        </Link>
      </nav>

      {/* LANGUAGE SWITCHER BADGE */}
      <Link
        href={switchedPath}
        className="text-sm px-4 py-2 border rounded-full hover:bg-gray-100"
      >
        {lang === "en" ? "ES 🇪🇸" : "EN 🇺🇸"}
      </Link>
    </div>
  );
}
