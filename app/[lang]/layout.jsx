import "../globals.css";
import Nav from "../components/Nav";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function LangLayout({ children, params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <html lang={lang}>
      <body className="bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-6 text-center">
            <img
              src="/klf-logo.png"
              alt="KLF Ministries Logo"
              className="mx-auto w-36 mb-3"
            />

            <h1 className="text-3xl font-bold text-blue-900">
              KLF Ministries & Publications
            </h1>

            <p className="italic text-gray-600 mt-1 mb-4">
              “God uses rescued people to rescue people”
            </p>

            <Nav lang={lang} />
          </div>
        </header>

        <main>{children}</main>

        <footer className="text-center text-sm text-gray-600 py-10">
