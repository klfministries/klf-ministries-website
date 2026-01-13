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
      <body className="bg-white text-gray-900">
        {/* HEADER */}
        <header className="text-center py-10 border-b">
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
        <main className="min-h-screen px-6">{children}</main>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-600 py-10 border-t mt-12">
  {/* EMAIL SIGNUP */}
  <div className="max-w-md mx-auto mb-6">
    <p className="font-medium mb-2">
      {lang === "es"
        ? "Reciba actualizaciones del ministerio"
        : "Receive ministry updates"}
    </p>

    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="flex gap-2 justify-center"
    >
      <input
        type="email"
        name="email"
        required
        placeholder={lang === "es" ? "Su correo electrónico" : "Your email"}
        className="flex-1 border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-900 text-white px-4 py-2 rounded"
      >
        {lang === "es" ? "Suscribirse" : "Subscribe"}
      </button>
    </form>

    <p className="text-xs text-gray-500 mt-2">
      {lang === "es"
        ? "Respetamos su privacidad. No enviamos spam."
        : "We respect your privacy. No spam."}
    </p>
  </div>

  © {new Date().getFullYear()} KLF Ministries. All rights reserved.
</footer>


        {/* WHATSAPP FLOATING BUTTON (STEP 7) */}
        <a
          href="https://wa.me/18768700508"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}
