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
  };
}

export default function LangLayout({ children, params }) {
  const lang = params.lang === "es" ? "es" : "en";

  /**
   * 🚨 KEY FIX:
   * Detect admin routes and DO NOT render public layout
   */
  const isAdminRoute =
    children?.props?.segment === "admin" ||
    children?.props?.segment?.startsWith("admin");

  if (isAdminRoute) {
    // ADMIN PAGES — NO HEADER / NO NAV / NO FOOTER
    return (
      <html lang={lang}>
        <body className="bg-gray-100 min-h-screen">
          {children}
        </body>
      </html>
    );
  }

  // 🌍 PUBLIC SITE
  return (
    <html lang={lang}>
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="text-center py-10 border-b bg-white">
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

        {/* PAGE CONTENT */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-10 border-t">
          © {new Date().getFullYear()} KLF Ministries. All rights reserved.
        </footer>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/18768700508"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}
