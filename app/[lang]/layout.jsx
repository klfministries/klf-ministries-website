import "../globals.css";
import Nav from "../components/Nav";
import Analytics from "../components/Analytics";
import ScrollProgress from "../components/ScrollProgress";
import DonationModal from "../components/DonationModal";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  const seo = {
    en: {
      title: "KLF Ministries | Faith-Based Christian Resources",
      description:
        "KLF Ministries provides faith-based Christian books, sermons, and resources to inspire faithful and prepared living.",
    },
    es: {
      title: "KLF Ministries | Recursos Cristianos Basados en la Fe",
      description:
        "KLF Ministries ofrece libros, sermones y recursos cristianos para inspirar una vida fiel y preparada.",
    },
  };

  return {
    title: seo[lang].title,
    description: seo[lang].description,
  };
}

export default function LangLayout({ children, params }) {
  const lang = params.lang === "es" ? "es" : "en";

  /**
   * 🚨 ADMIN ROUTE SAFETY
   * Admin pages bypass public UI
   */
  const isAdminRoute =
    children?.props?.segment === "admin" ||
    children?.props?.segment?.startsWith("admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      {/* GLOBAL UI — SAFE LOCATION */}
      <ScrollProgress />
      <Analytics />
      <DonationModal />

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <Image
            src="/images/klf-logo.svg"
            alt="KLF Ministries"
            width={120}
            height={120}
            className="mx-auto mb-4"
            priority
          />

          <h1 className="text-3xl font-bold text-blue-900">
            KLF Ministries & Publications
          </h1>

          <p className="italic text-gray-600 mt-1">
            “God uses rescued people to rescue people”
          </p>
        </div>

        <Nav lang={lang} />
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow w-full bg-gray-50 text-gray-900">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center space-y-4">
          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <Link
              href={`/${lang}/privacy-policy`}
              className="hover:text-blue-900 underline underline-offset-4"
            >
              {lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
            </Link>

            <Link
              href={`/${lang}/terms-of-service`}
              className="hover:text-blue-900 underline underline-offset-4"
            >
              {lang === "es" ? "Términos de Servicio" : "Terms of Service"}
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} KLF Ministries. All rights reserved.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/18768700508"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition z-50"
      >
        WhatsApp
      </a>
    </>
  );
}
