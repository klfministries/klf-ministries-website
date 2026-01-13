"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/books", label: "Books" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-3 flex-wrap">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              isActive
                ? "bg-blue-900 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
