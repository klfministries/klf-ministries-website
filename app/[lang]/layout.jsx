import Nav from "../components/Nav";

export default function LangLayout({ children, params }) {
  const lang = params.lang;

  return (
    <html lang={lang}>
      <body>
        <Nav lang={lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
