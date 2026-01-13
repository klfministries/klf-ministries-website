import "./globals.css";
import Analytics from "./components/Analytics";

export const metadata = {
  title: "KLF Ministries & Publications",
  description:
    "Faith-based Christian books, sermons, and teaching resources inspiring faithful and prepared Christian living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
