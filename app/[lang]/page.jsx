"use client";

import { useState } from "react";

const PAYPAL_EMAIL = "kiwayne26@gmail.com";

export default function Home({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  const [showDonate, setShowDonate] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = currency === "USD"
    ? [10, 25, 50, 100, 200, 500, 1000]
    : [1000, 2500, 5000, 10000, 20000];

  const buildPaypalLink = (amount) => {
    return `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=${currency}${
      monthly ? "&recurring=1" : ""
    }`;
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
            ? "Un ministerio cristiano dedicado a predicar y equipar al pueblo de Dios."
            : "A Christian ministry dedicated to preaching and equipping God’s people."}
        </p>

        <button onClick={() => setShowDonate(true)} className="btn-primary">
          {lang === "es" ? "Donar" : "Donate"}
        </button>
      </section>

      {/* DONATE MODAL */}
      {showDonate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowDonate(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              {lang === "es" ? "Apoyar el Ministerio" : "Support the Ministry"}
            </h2>

            {/* CURRENCY TOGGLE */}
            <div className="flex justify-center gap-3 mb-4">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1 rounded ${
                  currency === "USD"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200"
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency("JMD")}
                className={`px-3 py-1 rounded ${
                  currency === "JMD"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200"
                }`}
              >
                JMD
              </button>
            </div>

            {/* MONTHLY TOGGLE */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={monthly}
                onChange={() => setMonthly(!monthly)}
              />
              <span className="text-sm">
                {lang === "es"
                  ? "Donación mensual"
                  : "Make this a monthly donation"}
              </span>
            </div>

            {/* PRESET AMOUNTS */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {presetAmounts.map((amt) => (
                <a
                  key={amt}
                  href={buildPaypalLink(amt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded py-2 text-center hover:bg-gray-100"
                >
                  {currency === "USD" ? `$${amt}` : `J$${amt}`}
                </a>
              ))}
            </div>

            {/* CUSTOM AMOUNT */}
            <input
              type="number"
              placeholder={
                lang === "es"
                  ? "Monto personalizado"
                  : "Custom amount"
              }
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <a
              href={buildPaypalLink(customAmount || 0)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center mb-4"
            >
              {monthly
                ? lang === "es"
                  ? "Donar mensualmente"
                  : "Donate Monthly"
                : lang === "es"
                ? "Donar ahora"
                : "Donate Now"}
            </a>

            {/* BANK TRANSFER */}
            <div className="border-t pt-4 text-sm text-center">
              <p className="mb-2 font-medium">
                {lang === "es"
                  ? "¿Prefiere transferencia bancaria?"
                  : "Prefer bank transfer or direct deposit?"}
              </p>

              <a
                href="mailto:klfministries7@gmail.com?subject=Bank%20Transfer%20Donation"
                className="text-blue-700 underline"
              >
                {lang === "es"
                  ? "Solicitar detalles bancarios"
                  : "Request bank details by email"}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
