export const dynamic = "force-dynamic";

import "../globals.css";
import Nav from "../components/Nav";
import Analytics from "../components/Analytics";
import ScrollProgress from "../components/ScrollProgress";
import DonationModal from "../components/DonationModal";
import Link from "next/link";
import Image from "next/image";
import WhatsAppFloat from "../components/WhatsAppFloat";

/* ================= STATIC PARAMS ================= */
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

/* ================= SEO + SOCIAL METADATA ================= */
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

  const baseUrl = "https://klfministries.org";

  return {
    title: seo[lang].title,
    description: seo[lang].description,

    metadataBase: new URL(baseUrl),

    // ===== FAVICON + SITE ICONS =====
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },

    // ===== OPEN GRAPH (WhatsApp, Facebook, iMessage, etc.) =====
    openGraph: {
      type: "website",
      url: `${baseUrl}/${lang}`,
      title: seo[lang].title,
      description: seo[lang].description,
      siteName: "KLF Ministries",
      images: [
        {
          url: `${baseUrl}/og-image.png`,   // 🔴 FORCE ABSOLUTE URL
          width: 1200,
          height: 1200,
          alt: "KLF Ministries",
        },
      ],
    },

    // ===== TWITTER / X =====
    twitter: {
      card: "summary_large_image",
      title: seo[lang].title,
      description: seo[lang].description,
      images: [`${baseUrl}/og-image.png`], // 🔴 FORCE ABSOLUTE URL
    },
  };
}

/* ================= LANG LAYOUT ================= */
export default function LangLayout({ children, params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <html lang={lang}>
      <head>
        {/* ===== GOOGLE ORGANIZATION LOGO FOR SEARCH RESULTS ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KLF Ministries",
              url: "https://klfministries.org",
              logo: "https://klfministries.org/favicon.png",
            }),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-transparent text-gray-900">
        {/* GLOBAL UI */}
        <ScrollProgress />
        <Analytics />
        <DonationModal />

        {/* NAV */}
        <Nav lang={lang} />

        {/* Spacer for fixed nav */}
        <div className="h-24" />

        {/* HEADER */}
        <header className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-6 pt-4 pb-4 text-center">
            <Image
              src="/images/klf-logo-gold.png"
              alt="KLF Ministries"
              width={140}
              height={140}
              className="mx-auto mb-2 w-24 sm:w-28 md:w-32 h-auto"
              priority
            />

            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
              KLF Ministries & Publications
            </h1>

            <p className="italic text-gray-600 mt-1 text-sm sm:text-base">
              “God uses rescued people to rescue people”
            </p>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow w-full bg-transparent">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t">
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

        {/* ===== WHATSAPP FLOAT (CLIENT COMPONENT) ===== */}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
