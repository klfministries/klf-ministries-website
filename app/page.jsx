"use client";

import { useState } from "react";

const PAYPAL_EMAIL = "kiwayne26@gmail.com";

export default function Page() {
  const [page, setPage] = useState("home");
  const [showDonate, setShowDonate] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const oneTimeLink = (amount) =>
    `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=USD`;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* HEADER */}
      <header className="text-center mb-10">
        <img src="/klf-logo.png" alt="KLF Logo" className="mx-auto w-36 mb-4" />

        <h1 className="text-4xl font-bold text-blue-900">
          KLF Ministries & Publications
        </h1>

        <p className="italic text-gray-600 mt-2">
          “God uses rescued people to rescue people”
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["home","about","speaking","books","videos","contact"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-2 rounded-lg font-medium ${
                page === p ? "bg-blue-900 text-white" : "bg-gray-200"
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}

          <button
            onClick={() => setShowDonate(true)}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
          >
            💝 Donate
          </button>
        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <section className="max-w-3xl mx-auto text-center bg-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to KLF Ministries
          </h2>
          <p>
            A ministry committed to preaching Christ, preparing God’s people,
            and rescuing souls for the Kingdom.
          </p>
        </section>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/author.jpg"
              alt="Kiwayne Ferron"
              className="rounded-xl shadow-lg"
            />

            <div>
              <h2 className="text-2xl font-bold mb-3">About the Author</h2>
              <p className="mb-3">
                Kiwayne Ferron is a pastor, speaker, and author dedicated to
                sharing the gospel of Jesus Christ with urgency and clarity.
              </p>
              <p>
                His ministry emphasizes preparation for Christ’s soon return,
                discipleship, and faithful living.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SPEAKING */}
      {page === "speaking" && (
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Speaking Engagements</h2>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
            width="100%"
            height="700"
          />
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="max-w-md mx-auto bg-white p-8 rounded-xl text-center space-y-4">
          <p>
            📧{" "}
            <a href="mailto:klfministries7@gmail.com" className="text-blue-700">
              klfministries7@gmail.com
            </a>
          </p>

          <p>📞 +1 (876) 870-0508</p>

          <a
            href="https://instagram.com/kiwayne27"
            target="_blank"
            className="flex justify-center items-center gap-2 text-blue-700"
          >
            <img src="/Instagram-Icon.png" className="w-6" />
            Instagram
          </a>
        </section>
      )}

      {/* DONATION MODAL */}
      {showDonate && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">
              Suggested Donations
            </h2>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[10,25,50,100,200,500,1000].map((amt) => (
                <a
                  key={amt}
                  href={oneTimeLink(amt)}
                  target="_blank"
                  className="border rounded py-2 text-center"
                >
                  ${amt}
                </a>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom Amount (USD)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-3"
            />

            {customAmount && (
              <a
                href={oneTimeLink(customAmount)}
                target="_blank"
                className="block bg-blue-900 text-white text-center py-2 rounded mb-4"
              >
                Donate ${customAmount}
              </a>
            )}

            <hr className="my-4" />

            <h3 className="font-semibold mb-2">Direct Deposit</h3>
            <p className="text-sm">
              Bank: (Your Bank Name)<br />
              Account Name: KLF Ministries<br />
              Account Number: XXXXXXXX<br />
              Routing Number: XXXXXXXX
            </p>

            <button
              onClick={() => setShowDonate(false)}
              className="mt-5 w-full bg-gray-300 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-600 mt-12 space-x-4">
        <span>© {new Date().getFullYear()} KLF Ministries</span>
        <button onClick={() => setPage("privacy")} className="underline">
          Privacy Policy
        </button>
        <button onClick={() => setPage("terms")} className="underline">
          Terms & Conditions
        </button>
      </footer>

      {/* PRIVACY */}
      {page === "privacy" && (
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl mt-6">
          <h2 className="text-xl font-bold mb-3">Privacy Policy</h2>
          <p>
            KLF Ministries respects your privacy. Information is used solely for
            ministry purposes and is never sold or shared.
          </p>
        </section>
      )}

      {/* TERMS */}
      {page === "terms" && (
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl mt-6">
          <h2 className="text-xl font-bold mb-3">Terms & Conditions</h2>
          <p>
            All content is the property of KLF Ministries. Unauthorized use is
            prohibited.
          </p>
        </section>
      )}
    </div>
  );
}
