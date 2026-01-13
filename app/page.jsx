"use client";

import Link from "next/link";
import { useState } from "react";

/* =========================
   CONSTANTS
========================= */
const PAYPAL_EMAIL = "klfministries7@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/18768700508?text=Hello%20KLF%20Ministries,%20I%20would%20like%20to%20connect.";

export default function HomePage() {
  const [customAmount, setCustomAmount] = useState("");

  const donateLink = (amount) =>
    `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=USD`;

  const handleCustomDonate = () => {
    if (!customAmount) return;
    window.open(donateLink(customAmount), "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      {/* HEADER */}
      <header className="text-center mb-12">
        <img
          src="/klf-logo.png"
          alt="KLF Ministries Logo"
          className="mx-auto w-40 mb-4"
        />

        <h1 className="text-4xl font-bold text-blue-900">
          KLF Ministries & Publications
        </h1>

        <p className="italic text-gray-700 mt-2 mb-6">
          “God uses rescued people to rescue people”
        </p>

        {/* NAVIGATION */}
        <nav className="flex justify-center gap-3 flex-wrap">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg font-medium bg-blue-900 text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-lg font-medium bg-gray-200"
          >
            About
          </Link>
          <Link
            href="/books"
            className="px-4 py-2 rounded-lg font-medium bg-gray-200"
          >
            Books
          </Link>
          <Link
            href="/videos"
            className="px-4 py-2 rounded-lg font-medium bg-gray-200"
          >
            Videos
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg font-medium bg-gray-200"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* HOME CONTENT */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* DONATE */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center space-y-4">
          <h2 className="text-lg font-semibold text-blue-900">
            💙 Support the Ministry
          </h2>

          <p className="text-sm font-medium text-gray-600">
            Suggested Donations
          </p>

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

          <button
            onClick={handleCustomDonate}
            className="w-full bg-blue-900 text-white py-2 rounded"
          >
            Donate via PayPal
          </button>

          <div className="border-t pt-4 text-sm text-left">
            <h3 className="font-semibold mb-2">
              🏦 Direct Deposit / Bank Transfer
            </h3>
            <p>
              <strong>Account Name:</strong> KLF Ministries<br />
              <strong>Bank:</strong> Your Bank Name<br />
              <strong>Account #:</strong> 123456789
            </p>
          </div>
        </div>

        {/* BOOKS */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-lg font-semibold mb-2">📚 Books</h2>
          <p className="mb-4 text-gray-600">
            Faith-centered resources for spiritual growth
          </p>
          <Link
            href="/books"
            className="inline-block bg-blue-900 text-white px-4 py-2 rounded"
          >
            View Books
          </Link>
        </div>

        {/* VIDEOS */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-lg font-semibold mb-2">🎥 Videos</h2>
          <p className="mb-4 text-gray-600">
            Sermons and Bible teaching
          </p>
          <Link
            href="/videos"
            className="inline-block bg-blue-900 text-white px-4 py-2 rounded"
          >
            Watch Videos
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} KLF Ministries. All rights reserved.
      </footer>

      {/* WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </main>
  );
}
