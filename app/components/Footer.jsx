import Link from "next/link";

export default function Footer({ lang = "en" }) {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-gray-600 space-y-4">

        {/* LINKS */}
        <div className="flex justify-center gap-6 flex-wrap">
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
