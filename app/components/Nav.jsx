"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ lang }) {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const labels = {
    en: {
      home: "Home",
      about: "About",
      speaking: "Speaking",
      books: "Books",
      videos: "Videos",
      contact: "Contact",
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      speaking: "Predicación",
      books: "Libros",
      videos: "Videos",
      contact: "Contacto",
    },
  };

  const t = labels[lang] || labels.en;

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg ${
      isActive(path)
        ? "bg-blue-900 text-white"
        : "bg-gray-200 hover:bg-gray-300"
    }`;

  return (
    <nav className="flex justify-center gap-3 flex-wrap my-6">
      <Link href={`/${lang}`} className={linkClass(`/${lang}`)}>
        {t.home}
      </Link>

      <Link href={`/${lang}/about`} className={linkClass(`/${lang}/about`)}>
        {t.about}
      </Link>

      <Link
        href={`/${lang}/speaking`}
        className={linkClass(`/${lang}/speaking`)}
      >
        {t.speaking}
      </Link>

      <Link href={`/${lang}/books`} className={linkClass(`/${lang}/books`)}>
        {t.books}
      </Link>

      <Link href={`/${lang}/videos`} className={linkClass(`/${lang}/videos`)}>
        {t.videos}
      </Link>

      <Link href={`/${lang}/contact`} className={linkClass(`/${lang}/contact`)}>
        {t.contact}
      </Link>
    </nav>
  );
}
