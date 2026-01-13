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
    },
    es: {
      support: "Apoya el Ministerio",
      donate: "Donar por PayPal",
      suggested: "Donaciones Sugeridas",
      bank: "Depósito Directo / Transferencia Bancaria",
      books: "Libros",
      videos: "Videos",
    },
  };

  return (
    <>
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          {lang === "es"
            ? "Preparados para Vivir, Listos para Su Regreso"
            : "Prepared to Live, Ready for His Return"}
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          {lang === "es"
            ? "Un ministerio cristiano dedicado a predicar, enseñar y equipar al pueblo de Dios para una vida fiel y activa."
            : "A Christian ministry dedicated to preaching, teaching, and equipping God’s people for faithful and active living."}
        </p>

        <a href={`/${lang}/about`} className="btn-primary inline-block">
          {lang === "es" ? "Conozca el Ministerio" : "Learn About the Ministry"}
        </a>
      </section>

      {/* HOME CARDS */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6">
        {/* DONATIONS */}
        <div className="card p-6 text-center space-y-4">
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
            className="btn-primary block text-center"
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
        <div className="card p-6 text-center">
          <h2 className="text-lg font-semibold">📚 {t[lang].books}</h2>
          <p className="mb-3">Faith-centered resources</p>
          <a href={`/${lang}/books`} className="text-blue-700 underline">
            View Books
          </a>
        </div>

        {/* VIDEOS */}
        <div className="card p-6 text-center">
          <h2 className="text-lg font-semibold">🎥 {t[lang].videos}</h2>
          <p className="mb-3">Sermons & teaching</p>
          <a href={`/${lang}/videos`} className="text-blue-700 underline">
            Watch Videos
          </a>
        </div>
      </section>

      {/* TESTIMONIALS (STEP 2.1) */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">
          {lang === "es" ? "Testimonios" : "Testimonials"}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <p className="italic">
              “This ministry has helped me grow spiritually and remain focused on Christ.”
            </p>
            <p className="mt-4 font-semibold">— Church Member</p>
          </div>

          <div className="card p-6">
            <p className="italic">
              “Clear, biblical, and practical messages that challenge you to live faithfully.”
            </p>
            <p className="mt-4 font-semibold">— Online Listener</p>
          </div>

          <div className="card p-6">
            <p className="italic">
              “A ministry that truly prepares people for the times we are living in.”
            </p>
            <p className="mt-4 font-semibold">— Conference Attendee</p>
          </div>
        </div>
      </section>
    </>
  );
}
