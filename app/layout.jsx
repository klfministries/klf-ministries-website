import "./globals.css";

export const metadata = {
  title: "KLF Ministries & Publications",
  description:
    "Faith-based Christian books, sermons, and teaching resources inspiring faithful and prepared Christian living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 🌟 THIS IS THE ONLY BODY IN THE APP */}
      <body className="antialiased min-h-screen bg-[#f7f4ee] text-gray-900">
        {children}
      </body>
    </html>
  );
}
