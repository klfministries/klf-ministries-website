import "./globals.css";

export const metadata = {
  title: "KLF Ministries",
  description: "God uses rescued people to rescue people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
