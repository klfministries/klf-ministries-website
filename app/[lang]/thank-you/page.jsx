export default function ThankYou({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-3xl mx-auto text-center py-24 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        {lang === "es"
          ? "¡Gracias por su generosidad!"
          : "Thank You for Your Generosity!"}
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        {lang === "es"
          ? "Su apoyo ayuda a compartir el mensaje de Cristo y fortalecer a otros en la fe."
          : "Your support helps share Christ-centered teaching and strengthen others in faith."}
      </p>

      <blockquote className="italic text-gray-700 mb-8">
        “Each of you should give what you have decided in your heart to give… for God loves a cheerful giver.”
        <br />
        <span className="block mt-2 font-medium">
          — 2 Corinthians 9:7
        </span>
      </blockquote>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href={`/${lang}`}
          className="px-6 py-3 rounded bg-blue-900 text-white hover:bg-blue-800"
        >
          {lang === "es" ? "Volver al Inicio" : "Return Home"}
        </a>

        <a
          href={`/${lang}/devotionals`}
          className="px-6 py-3 rounded border border-blue-900 text-blue-900 hover:bg-blue-50"
        >
          {lang === "es" ? "Leer Devocionales" : "Read Devotionals"}
        </a>
      </div>
    </section>
  );
}
