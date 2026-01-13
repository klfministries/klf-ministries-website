export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function LangHome({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  const content = {
    en: {
      title: "Welcome to KLF Ministries",
      text:
        "Faith-based Christian resources inspiring prepared and faithful living.",
    },
    es: {
      title: "Bienvenidos a KLF Ministries",
      text:
        "Recursos cristianos basados en la fe que inspiran una vida fiel y preparada.",
    },
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        {content[lang].title}
      </h1>
      <p className="text-gray-700">{content[lang].text}</p>
    </section>
  );
}
