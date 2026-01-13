import "./globals.css";
import Link from "next/link";

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

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

            {/* NAV */}
            <nav className="flex justify-center gap-3 flex-wrap">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/speaking">Speaking</NavLink>
              <NavLink href="/books">Books</NavLink>
              <NavLink href="/videos">Videos</NavLink>
              <NavLink href="/contact">Contact</NavLink>
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
