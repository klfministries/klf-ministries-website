const PAYPAL_EMAIL = "klfministries7@gmail.com";

export default function Home({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
      {/* DONATE */}
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-lg font-semibold mb-4">
          💙 {lang === "es" ? "Apoya el Ministerio" : "Support the Ministry"}
        </h2>

        <a
          href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD`}
          target="_blank"
          className="bg-blue-900 text-white px-6 py-2 rounded"
        >
          Donate via PayPal
        </a>
      </div>

      {/* BOOKS */}
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-lg font-semibold mb-2">📚 Books</h2>
        <p>Faith-centered resources</p>
      </div>

      {/* VIDEOS */}
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-lg font-semibold mb-2">🎥 Videos</h2>
        <p>Sermons & teaching</p>
      </div>
    </section>
  );
}
