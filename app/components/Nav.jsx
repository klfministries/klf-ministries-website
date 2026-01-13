"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ lang }) {
  const pathname = usePathname();

  const linkClass = (href) =>
    pathname === href
      ? "bg-blue-800 text-white px-4 py-2 rounded"
      : "bg-gray-200 px-4 py-2 rounded";

  return (
    <nav className="flex flex-wrap justify-center gap-3 py-6">
      <Link href={`/${lang}`} className={linkClass(`/${lang}`)}>
        {lang === "es" ? "Inicio" : "Home"}
      </Link>

      <Link href={`/${lang}/about`} className={linkClass(`/${lang}/about`)}>
        {lang === "es" ? "Acerca de" : "About"}
      </Link>

      <Link
        href={`/${lang}/speaking`}
        className={linkClass(`/${lang}/speaking`)}
      >
        {lang === "es" ? "Predicación" : "Speaking"}
      </Link>

      <Link href={`/${lang}/books`} className={linkClass(`/${lang}/books`)}>
        {lang === "es" ? "Libros" : "Books"}
      </Link>

      <Link href={`/${lang}/videos`} className={linkClass(`/${lang}/videos`)}>
        {lang === "es" ? "Videos" : "Videos"}
      </Link>

      <Link href={`/${lang}/contact`} className={linkClass(`/${lang}/contact`)}>
        {lang === "es" ? "Contacto" : "Contact"}
      </Link>
    </nav>
  );
}
