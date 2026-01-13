import "../globals.css";
import Nav from "../components/Nav";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function LangLayout({ children, params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <html lang={lang}>
      <body>
        <Nav lang={lang} />
        <main className="min-h-screen">{children}</main>

        <footer className="text-center text-sm text-gray-500 py-10">
          © {new Date().getFullYear()} KLF Ministries. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
