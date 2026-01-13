"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ lang }) {
  const pathname = usePathname();

  const switchLang = lang === "en" ? "es" : "en";
  const switchedPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  const links = {
    en: [
      { href: "/about", label: "About" },
      { href: "/books", label: "Books" },
      { href: "/speaking", label: "Speaking" },
      { href: "/videos", label: "Videos" },
      { href: "/contact", label: "Contact" },
    ],
    es: [
      { href: "/about", label: "Acerca de" },
      { href: "/books", label: "Libros" },
      { href: "/speaking", label: "Predicación" },
      { href: "/videos", label: "Videos" },
      { href: "/contact", label: "Contacto" },
    ],
  };

  return (
    <nav className="flex flex-wrap items-center justify-center gap-3 mt-6">
      {links[lang].map((link) => (
        <Link
          key={link.href}
          href={`/${lang}${link.href}`}
          className={`px-4 py-2 rounded-lg ${
            pathname === `/${lang}${link.href}`
              ? "bg-blue-900 text-white"
              : "bg-gray-200"
          }`}
        >
          {link.label}
        </Link>
      ))}

      {/* Language toggle */}
      <Link
        href={switchedPath}
        className="ml-4 px-4 py-2 rounded-lg border border-gray-400"
      >
        {lang === "en" ? "ES" : "EN"}
      </Link>
    </nav>
  );
}
