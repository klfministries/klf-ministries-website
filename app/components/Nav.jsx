"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex justify-center gap-3 flex-wrap">
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

      {/* MOBILE TOGGLE */}
      <div className="md:hidden text-center">
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-900 text-white px-4 py-2 rounded"
        >
          Menu
        </button>

        {open && (
          <div className="mt-4 flex flex-col gap-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="bg-gray-200 py-2 rounded"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
