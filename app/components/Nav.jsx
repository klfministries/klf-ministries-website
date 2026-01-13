"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labels = {
  en: {
    home: "Home",
    about: "About",
    books: "Books",
    videos: "Videos",
    contact: "Contact",
    speaking: "Speaking",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    books: "Libros",
    videos: "Videos",
    contact: "Contacto",
    speaking: "Predicación",
  },
};

export default function Nav({ lang = "en" }) {
  const pathname = usePathname();

  const links = [
    { href: `/${lang}`, key: "home" },
    { href: `/${lang}/about`, key: "about" },
    { href: `/${lang}/speaking`, key: "speaking" },
    { href: `/${lang}/books`, key: "books" },
    { href: `/${lang}/videos`, key: "videos" },
    { href: `/${lang}/contact`, key: "contact" },
  ];

  return (
    <nav className="flex justify-center gap-3 flex-wrap">
      {links.map(({ href, key }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-blue-900 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {labels[lang][key]}
          </Link>
        );
      })}
    </nav>
  );
}
