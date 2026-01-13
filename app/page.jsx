"use client";

import { useState } from "react";

const PAYPAL_EMAIL = "klfministries7@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/18768700508?text=Hello%20KLF%20Ministries,%20I%20would%20like%20to%20connect.";

export default function HomePage() {
  const [customAmount, setCustomAmount] = useState("");

  const donateLink = (amount) =>
    `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=USD`;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      {/* DONATE */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4 text-center">
        <h2 className="text-lg font-semibold text-blue-900">
          💙 Support the Ministry
        </h2>

        <div className="grid grid-cols-3 gap-2">
          {[10, 25, 50, 100, 200, 500].map((amt) => (
            <a
              key={amt}
              href={donateLink(amt)}
              target="_blank"
              className="border rounded py-2 hover:bg-gray-100"
            >
              ${amt}
            </a>
          ))}
        </div>

        <input
          type="number"
          placeholder="Custom amount (USD)"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="border rounded w-full p-2"
        />

        <a
          href={donateLink(customAmount)}
          target="_blank"
          className="block bg-blue-900 text-white py-2 rounded"
        >
          Donate via PayPal
        </a>
      </div>

      {/* BOOKS */}
      <div className="bg-white p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-lg font-semibold mb-2">📚 Books</h2>
        <p className="mb-4 text-gray-600">
          Faith-centered resources for spiritual growth
        </p>
        <a href="/books" className="text-blue-900 font-medium underline">
          View Books
        </a>
      </div>

      {/* VIDEOS */}
      <div className="bg-white p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-lg font-semibold mb-2">🎥 Videos</h2>
        <p className="mb-4 text-gray-600">
          Sermons and Bible teaching
        </p>
        <a href="/videos" className="text-blue-900 font-medium underline">
          Watch Videos
        </a>
      </div>

      {/* WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </section>
  );
}
