"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ lang }) {
  const pathname = usePathname();
  const base = `/${lang}`;

  const linkClass = (path) =>
    `px-4 py-2 rounded ${
      pathname === `${base}${path}`
        ? "bg-blue-900 text-white"
        : "bg-gray-200 hover:bg-gray-300"
    }`;

  return (
    <nav className="flex flex-wrap justify-center gap-2 mt-6">
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
        {lang === "es" ? "Videos" : "Videos"}
      </Link>
      <Link href={`${base}/contact`} className={linkClass("/contact")}>
        {lang === "es" ? "Contacto" : "Contact"}
      </Link>
    </nav>
  );
}
