import "./globals.css";
import Link from "next/link";
import Script from "next/script";

/* =========================
   SITE METADATA
========================= */
export const metadata = {
  title: "KLF Ministries | Christian Books, Sermons & Faith-Based Teaching",
  description:
    "Faith-based Christian books, sermons, and teaching resources by Pastor Kiwayne Ferron.",
  authors: [{ name: "Kiwayne Ferron" }],
  alternates: {
    canonical: "https://klfministries.org",
  },
  openGraph: {
    title: "KLF Ministries | Christian Books & Sermons",
    description:
      "Explore Christian books, sermons, and teaching resources by Pastor Kiwayne Ferron.",
    url: "https://klfministries.org",
    siteName: "KLF Ministries",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KLF Ministries",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GOOGLE ANALYTICS (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RY05JQHSR1', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className="bg-gray-50">
        {/* HEADER */}
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

            {/* NAVIGATION */}
            <nav className="flex justify-center gap-3 flex-wrap">
              <Link href="/" className="px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                About
              </Link>
              <Link href="/speaking" className="px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                Speaking
              </Link>
              <Link href="/books" className="px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                Books
              </Link>
              <Link href="/videos" className="px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                Videos
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-600 py-10">
          © {new Date().getFullYear()} KLF Ministries. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
