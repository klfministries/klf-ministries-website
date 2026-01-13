export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function LangHome({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  const content = {
    en: {
      title: "Welcome to KLF Ministries",
      subtitle:
        "Faith-based Christian resources inspiring prepared and faithful living.",
    },
    es: {
      title: "Bienvenidos a KLF Ministries",
      subtitle:
        "Recursos cristianos basados en la fe que inspiran una vida fiel y preparada.",
    },
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        {content[lang].title}
      </h1>
      <p className="text-lg text-gray-700 mb-12">
        {content[lang].subtitle}
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            💙 {lang === "en" ? "Support the Ministry" : "Apoya el Ministerio"}
          </h2>
          <p>
            {lang === "en"
              ? "Partner with us through faithful giving."
              : "Colabora con nosotros mediante donaciones fieles."}
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            📚 {lang === "en" ? "Books" : "Libros"}
          </h2>
          <p>
            {lang === "en"
              ? "Faith-centered resources for spiritual growth."
              : "Recursos cristianos para el crecimiento espiritual."}
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            🎥 {lang === "en" ? "Videos" : "Videos"}
          </h2>
          <p>
            {lang === "en"
              ? "Sermons and Bible teaching."
              : "Sermones y enseñanza bíblica."}
          </p>
        </div>
      </div>
    </section>
  );
}
