"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer({ lang = "en" }) {
  const pathname = usePathname();
  const router = useRouter();
  const base = `/${lang}`;

  const handleSupportClick = () => {
    if (pathname === base) {
      document
        .getElementById("support")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`${base}#support`);
    }
  };

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-gray-600 space-y-4">

        {/* TAGLINE */}
        <p className="text-xs text-gray-500">
          {lang === "es"
            ? "Un ministerio cristiano centrado en Cristo"
            : "A Christ-centered, faith-based ministry"}
        </p>

        {/* LINKS */}
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleSupportClick}
            className="text-blue-800 hover:underline underline-offset-4"
          >
            {lang === "es" ? "Apoyar la Misión" : "Support the Mission"}
          </button>

          <Link
            href={`/${lang}/privacy-policy`}
            className="hover:text-blue-900 underline underline-offset-4"
          >
            {lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
          </Link>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} KLF Ministries. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
