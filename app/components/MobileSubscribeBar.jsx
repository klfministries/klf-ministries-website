"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileSubscribeBar({ lang }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("subscribeDismissed");
    if (stored) setDismissed(true);

    const onScroll = () => {
      if (window.scrollY > 400 && !stored) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || pathname.includes("/subscribe")) return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 sm:hidden transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-4 mb-4 bg-blue-900 text-white rounded-xl shadow-lg flex items-center justify-between px-4 py-3 animate-pulse">
        <span className="text-sm font-medium">
          {lang === "es"
            ? "Recibe el devocional semanal"
            : "Get the weekly devotional"}
        </span>

        <div className="flex items-center gap-3">
          <Link
            href={`/${lang}/subscribe`}
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-semibold text-sm"
          >
            Subscribe
          </Link>
          <button
            onClick={() => {
              localStorage.setItem("subscribeDismissed", "true");
              setDismissed(true);
            }}
            className="text-white/80 text-lg"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
