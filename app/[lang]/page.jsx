"use client";

import { useState } from "react";

const PAYPAL_EMAIL = "kiwayne26@gmail.com";

export default function Home({ params }) {
  const lang = params.lang === "es" ? "es" : "en";
  const [showDonate, setShowDonate] = useState(false);

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
            ? "Un ministerio cristiano dedicado a predicar, enseñar y equipar al pueblo de Dios."
            : "A Christian ministry dedicated to preaching, teaching, and equipping God’s people."}
        </p>

        <button onClick={() => setShowDonate(true)} className="btn-primary">
          {lang === "es" ? "Donar" : "Donate"}
        </button>
      </section>

      {/* HOME CARDS */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6">
        <div className="card text-center">
          <h2 className="text-lg font-semibold">📚 {lang === "es" ? "Libros" : "Books"}</h2>
          <p className="mb-3">Faith-centered resources</p>
          <a href={`/${lang}/books`} className="text-blue-700 underline">
            View Books
          </a>
        </div>

        <div className="card text-center">
          <h2 className="text-lg font-semibold">🎥 Videos</h2>
          <p className="mb-3">Sermons & Bible teaching</p>
          <a href={`/${lang}/videos`} className="text-blue-700 underline">
            Watch Videos
          </a>
        </div>

        <div className="card text-center">
          <h2 className="text-lg font-semibold">🎤 {lang === "es" ? "Predicación" : "Speaking"}</h2>
          <p className="mb-3">Invite KLF Ministries</p>
          <a href={`/${lang}/speaking`} className="text-blue-700 underline">
            Learn More
          </a>
        </div>
      </section>

      {/* DONATE MODAL */}
      {showDonate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowDonate(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              {lang === "es" ? "Apoyar el Ministerio" : "Support the Ministry"}
            </h2>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[10, 25, 50, 100, 200, 500, 1000].map((amt) => (
                <a
                  key={amt}
                  href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amt}&currency_code=USD`}
                  target="_blank"
                  className="border rounded py-2 text-center hover:bg-gray-100"
                >
                  ${amt}
                </a>
              ))}
            </div>

            <a
              href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD`}
              target="_blank"
              className="btn-primary block text-center mb-4"
            >
              {lang === "es" ? "Donar por PayPal" : "Donate via PayPal"}
            </a>

            <div className="border-t pt-4 text-sm text-center">
              <p className="mb-2 font-medium">
                {lang === "es"
                  ? "¿Prefiere transferencia bancaria?"
                  : "Prefer bank transfer?"}
              </p>

              <a
                href={`mailto:klfministries7@gmail.com?subject=Bank%20Transfer%20Request`}
                className="text-blue-700 underline"
              >
                {lang === "es"
                  ? "Solicitar detalles bancarios"
                  : "Request bank details"}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
