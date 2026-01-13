import "../globals.css";
import Nav from "../components/Nav";

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
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: seo[lang].title,
      description: seo[lang].description,
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default function LangLayout({ children, params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <html lang={lang}>
      <body>
        <header className="text-center py-10">
          <img
            src="/klf-logo.png"
            alt="KLF Ministries Logo"
            className="mx-auto mb-4 w-32"
          />
          <h1 className="text-3xl font-bold text-blue-900">
            KLF Ministries & Publications
          </h1>
          <p className="italic text-gray-600 mt-1">
            “God uses rescued people to rescue people”
          </p>

          <Nav lang={lang} />
        </header>

        <main>{children}</main>

        <footer className="text-center text-sm text-gray-600 py-10">
          © {new Date().getFullYear()} KLF Ministries. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
