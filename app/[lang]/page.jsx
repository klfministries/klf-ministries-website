"use client";

import { useState } from "react";

const PAYPAL_EMAIL = "kiwayne26@gmail.com";

export default function Home({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  const [showDonate, setShowDonate] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [recurring, setRecurring] = useState(false);

  const amounts =
    currency === "USD"
      ? [10, 25, 50, 100, 200, 500, 1000]
      : [1500, 3000, 5000, 10000, 20000];

  const paypalLink = (amount) =>
    `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=${currency}${
      recurring ? "&interval=M" : ""
    }`;

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

        <button onClick={() => setShowDonate(true)} className="btn-primary">
          {lang === "es" ? "Donar" : "Donate"}
        </button>
      </section>

      {/* DONATE MODAL */}
      {showDonate && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setShowDonate(false)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDonate(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              aria-label="Close donation window"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              {lang === "es" ? "Apoyar el Ministerio" : "Support the Ministry"}
            </h2>

            {/* TOGGLES */}
            <div className="flex justify-between items-center mb-4 gap-3">
              {/* RECURRING */}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={recurring}
                  onChange={() => setRecurring(!recurring)}
                />
                {lang === "es" ? "Donación mensual" : "Monthly donation"}
              </label>

              {/* CURRENCY */}
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="border px-2 py-1 rounded text-sm"
              >
                <option value="USD">USD</option>
                <option value="JMD">JMD</option>
              </select>
            </div>

            {/* SUGGESTED AMOUNTS */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {amounts.map((amt) => (
                <a
                  key={amt}
                  href={paypalLink(amt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded py-2 text-center hover:bg-gray-100"
                >
                  {currency} {amt}
                </a>
              ))}
            </div>

            {/* CUSTOM AMOUNT */}
            <div className="mb-4">
              <input
                type="number"
                min="1"
                placeholder={
                  lang === "es"
                    ? `Monto personalizado (${currency})`
                    : `Custom amount (${currency})`
                }
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {customAmount && (
              <a
                href={paypalLink(customAmount)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center mb-4"
              >
                {lang === "es"
                  ? "Donar monto personalizado"
                  : "Donate Custom Amount"}
              </a>
            )}

            {/* BANK TRANSFER */}
            <div className="border-t pt-4 text-sm text-center">
              <p className="mb-2 font-medium">
                {lang === "es"
                  ? "¿Prefiere transferencia o depósito bancario?"
                  : "Prefer bank transfer or direct deposit?"}
              </p>

              <a
                href={`mailto:${PAYPAL_EMAIL}?subject=Bank%20Transfer%20Donation&body=Hello%20KLF%20Ministries,%0A%0AI%20would%20like%20to%20make%20a%20donation%20via%20direct%20transfer.%20Please%20send%20me%20the%20bank%20details.%0A%0AThank%20you.`}
                className="text-blue-700 underline"
              >
                {lang === "es"
                  ? "Solicitar detalles bancarios por correo"
                  : "Request bank details by email"}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
