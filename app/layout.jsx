import "./globals.css";

export const metadata = {
  title: "KLF Ministries & Publications",
  description:
    "Faith-based Christian books, sermons, and teaching resources inspiring faithful and prepared Christian living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
