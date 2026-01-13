"use client";

const PAYPAL_EMAIL = "klfministries7@gmail.com";

export default function Home({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  const t = {
    en: {
      support: "Support the Ministry",
      donate: "Donate via PayPal",
      suggested: "Suggested Donations",
      bank: "Direct Deposit / Bank Transfer",
      books: "Books",
      videos: "Videos",
      speaking: "Speaking Invitations",
    },
    es: {
      support: "Apoya el Ministerio",
      donate: "Donar por PayPal",
      suggested: "Donaciones Sugeridas",
      bank: "Depósito Directo / Transferencia Bancaria",
      books: "Libros",
      videos: "Videos",
      speaking: "Invitaciones para Predicar",
    },
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
      {/* DONATIONS */}
      <div className="bg-white p-6 rounded-xl shadow text-center space-y-4">
        <h2 className="text-lg font-semibold">💙 {t[lang].support}</h2>

        <p className="text-sm font-medium text-gray-600">
          {t[lang].suggested}
        </p>

        <div className="grid grid-cols-3 gap-2">
          {[10, 25, 50, 100, 200, 500].map((amt) => (
            <a
              key={amt}
              href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amt}&currency_code=USD`}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded py-2 hover:bg-gray-100"
              data-event="donate"
            >
              ${amt}
            </a>
          ))}
        </div>

        <a
          href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD`}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-900 text-white py-2 rounded font-medium"
          data-event="donate"
        >
          {t[lang].donate}
        </a>

        <div className="border-t pt-4 text-sm text-left">
          <h3 className="font-semibold mb-2">🏦 {t[lang].bank}</h3>
          <p>
            <strong>Account Name:</strong> KLF Ministries<br />
            <strong>Bank:</strong> Your Bank Name<br />
            <strong>Account #:</strong> 123456789
          </p>
        </div>
      </div>

      {/* BOOKS */}
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-lg font-semibold">📚 {t[lang].books}</h2>
        <p className="mb-3">Faith-centered resources</p>
        <a href={`/${lang}/books`} className="text-blue-700 underline">
          View Books
        </a>
      </div>

      {/* VIDEOS */}
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-lg font-semibold">🎥 {t[lang].videos}</h2>
        <p className="mb-3">Sermons & teaching</p>
        <a href={`/${lang}/videos`} className="text-blue-700 underline">
          Watch Videos
        </a>
      </div>
    </section>
  );
}
