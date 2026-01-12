"use client";

import { useState } from "react";



/* =========================
   CONSTANTS
========================= */
const PAYPAL_EMAIL = "klfministries7@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/18768700508?text=Hello%20KLF%20Ministries,%20I%20would%20like%20to%20connect.";

/* =========================
   MAIN PAGE
========================= */
export default function HomePage() {
  const [page, setPage] = useState("home");
  const [customAmount, setCustomAmount] = useState("");

  const donateLink = (amount) =>
    `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=USD`;

  const handleCustomDonate = () => {
    if (!customAmount) return;
    window.open(donateLink(customAmount), "_blank");
  };

  const NavButton = ({ label, value }) => (
    <button
      onClick={() => setPage(value)}
      className={`px-4 py-2 rounded-lg font-medium ${
        page === value ? "bg-blue-900 text-white" : "bg-gray-200"
      }`}
    >
      {label}
    </button>
  );

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      {/* HEADER */}
      <header className="text-center mb-10">
        <img
          src="/klf-logo.png"
          alt="KLF Ministries Logo"
          className="mx-auto w-40 mb-4"
        />
        <h1 className="text-4xl font-bold text-blue-900">
          KLF Ministries & Publications
        </h1>
        <p className="italic text-gray-700 mt-2 mb-5">
          “God uses rescued people to rescue people”
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <NavButton label="Home" value="home" />
          <NavButton label="About" value="about" />
          <NavButton label="Speaking" value="speaking" />
          <NavButton label="Books" value="books" />
          <NavButton label="Videos" value="videos" />
          <NavButton label="Contact" value="contact" />
        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {/* DONATE */}
          <div className="bg-white p-6 rounded-xl shadow text-center space-y-4">
            <h2 className="text-lg font-semibold">💙 Support the Ministry</h2>

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
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-lg font-semibold">📚 Books</h2>
            <p className="mb-3">Faith-centered resources</p>
            <button
              onClick={() => setPage("books")}
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              View Books
            </button>
          </div>

          {/* VIDEOS */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-lg font-semibold">🎥 Videos</h2>
            <p className="mb-3">Sermons & teaching</p>
            <button
              onClick={() => setPage("videos")}
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Watch Videos
            </button>
          </div>
        </section>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <p>
            Kiwayne Ferron is a pastor, speaker, and author committed to sharing
            the gospel of Jesus Christ with clarity, urgency, and hope through
            preaching, teaching, and writing.
          </p>
        </section>
      )}

      {/* SPEAKING */}
      {page === "speaking" && (
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
            width="100%"
            height="800"
          />
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="max-w-md mx-auto bg-white p-6 rounded-xl shadow text-center space-y-4">
          <p>
            📧{" "}
            <a
              href="mailto:klfministries7@gmail.com"
              className="text-blue-700 underline"
            >
              klfministries7@gmail.com
            </a>
          </p>
          <p>📞 +1 876 870 0508</p>
          <a
            href="https://instagram.com/kiwayne27"
            target="_blank"
            className="text-pink-600 font-medium"
          >
            Instagram
          </a>
        </section>
      )}

      {/* FOOTER */}
      <footer className="text-center mt-12 text-sm text-gray-600">
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

