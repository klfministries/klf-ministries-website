import "../globals.css";
import Nav from "../components/Nav";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
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
            className="mx-auto w-32 mb-4"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            KLF Ministries & Publications
          </h1>

          <p className="italic text-gray-600 mt-2">
            “God uses rescued people to rescue people”
          </p>

          {/* NAVIGATION */}
          <Nav lang={lang} />
        </header>

        {/* PAGE CONTENT */}
        <main className="min-h-screen px-6">{children}</main>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-500 py-10">
          © {new Date().getFullYear()} KLF Ministries. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
