export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function HomePage({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  const text = {
    en: {
      welcome: "Welcome to KLF Ministries",
      mission:
        "Faith-based Christian resources inspiring prepared and faithful living.",
      support: "Support the Ministry",
      books: "Books",
      booksText: "Faith-centered resources for spiritual growth.",
      videos: "Videos",
      videosText: "Sermons and Bible teaching.",
      speaking: "Speaking Invitations",
      speakingText:
        "Invite Pastor Kiwayne Ferron for preaching, seminars, and revival services.",
    },
    es: {
      welcome: "Bienvenidos a KLF Ministries",
      mission:
        "Recursos cristianos basados en la fe que inspiran una vida fiel y preparada.",
      support: "Apoya el Ministerio",
      books: "Libros",
      booksText: "Recursos centrados en la fe para el crecimiento espiritual.",
      videos: "Videos",
      videosText: "Sermones y enseñanza bíblica.",
      speaking: "Invitaciones para Predicar",
      speakingText:
        "Invite al Pastor Kiwayne Ferron para predicación, seminarios y campañas.",
    },
  };

  return (
    <section className="max-w-6xl mx-auto py-16 space-y-16">
      {/* INTRO */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900">
          {text[lang].welcome}
        </h2>
        <p className="text-gray-600 mt-4">{text[lang].mission}</p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* SUPPORT */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold mb-4">
            💙 {text[lang].support}
          </h3>
          <a
            href="https://www.paypal.com/donate/?business=klfministries7@gmail.com"
            target="_blank"
            className="inline-block bg-blue-900 text-white px-6 py-2 rounded"
          >
            Donate via PayPal
          </a>
        </div>

        {/* BOOKS */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold mb-2">
            📚 {text[lang].books}
          </h3>
          <p className="mb-4">{text[lang].booksText}</p>
          <a
            href={`/${lang}/books`}
            className="text-blue-700 underline"
          >
            View Books
          </a>
        </div>

        {/* VIDEOS */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold mb-2">
            🎥 {text[lang].videos}
          </h3>
          <p className="mb-4">{text[lang].videosText}</p>
          <a
            href={`/${lang}/videos`}
            className="text-blue-700 underline"
          >
            Watch Videos
          </a>
        </div>
      </div>

      {/* SPEAKING */}
      <div className="bg-gray-50 p-10 rounded-xl text-center">
        <h3 className="text-2xl font-semibold text-blue-900">
          {text[lang].speaking}
        </h3>
        <p className="text-gray-600 mt-4 mb-6">
          {text[lang].speakingText}
        </p>
        <a
          href={`/${lang}/speaking`}
          className="inline-block bg-blue-900 text-white px-6 py-2 rounded"
        >
          Contact for Speaking
        </a>
      </div>
    </section>
  );
}
