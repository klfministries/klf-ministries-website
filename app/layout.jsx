import "./globals.css";

export const metadata = {
  title: "KLF Ministries | Christian Books, Sermons & Faith-Based Teaching",
  description:
    "Faith-based Christian books, sermons, and teaching resources by Pastor Kiwayne Ferron. Inspiring believers to live prepared, faithful, and active Christian lives.",
  authors: [{ name: "Kiwayne Ferron" }],
  alternates: {
    canonical: "https://klfministries.org",
  },
  openGraph: {
    title: "KLF Ministries | Christian Books & Sermons",
    description:
      "Explore faith-based Christian books, sermons, and teaching resources by Pastor Kiwayne Ferron.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
