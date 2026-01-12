"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const PAYPAL_EMAIL = "kiwayne26@gmail.com";
const CONTACT_EMAIL = "klfministries7@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/18768700508?text=Hello%20KLF%20Ministries,%20I%20would%20like%20bank%20transfer%20details.";

export default function Page() {
  const [page, setPage] = useState("home");
  const [showDonate, setShowDonate] = useState(false);

  const paypalLink = (amount) =>
    `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=USD`;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* HEADER */}
      <header className="text-center mb-10">
        <img src="/klf-logo.png" className="mx-auto w-40 mb-4" />
        <h1 className="text-4xl font-bold text-blue-900">
          KLF Ministries & Publications
        </h1>
        <p className="italic text-gray-600 mt-2">
          “God uses rescued people to rescue people”
        </p>

        <div className="flex justify-center gap-3 flex-wrap mt-6">
          {["home", "about", "speaking", "books", "videos", "contact"].map(
            (p) => (
              <button
                key={p}
                onClick={() => {
                  setPage(p);
                  setShowDonate(false);
                }}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-blue-900 hover:text-white"
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            )
          )}
        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {/* DONATE */}
          <Card>
            <CardContent className="p-6 text-center">
              <Button onClick={() => setShowDonate(!showDonate)}>
                💙 Donate
              </Button>

              {showDonate && (
                <>
                  <h3 className="mt-4 font-semibold">
                    Suggested Donations
                  </h3>

                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {[10, 25, 50, 100, 200, 500, 1000].map((amt) => (
                      <a
                        key={amt}
                        href={paypalLink(amt)}
                        target="_blank"
                        className="border rounded py-2 hover:bg-gray-100"
                      >
                        ${amt}
                      </a>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <a
                    href={`https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}`}
                    target="_blank"
                    className="block mt-3 underline text-blue-700"
                  >
                    Enter Custom Amount
                  </a>

                  {/* Direct Deposit */}
                  <div className="mt-4 text-sm border p-3 rounded">
                    <p className="font-medium mb-2">
                      🏦 Direct Deposit / Bank Transfer
                    </p>
                    <p>
                      For security, bank details are shared privately.
                    </p>
                    <p className="mt-2">
                      📧{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="underline text-blue-700"
                      >
                        Email Us
                      </a>
                    </p>
                    <p>
                      💬{" "}
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        className="underline text-green-700"
                      >
                        WhatsApp Us
                      </a>
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card><CardContent className="p-6 text-center">📚 Books</CardContent></Card>
          <Card><CardContent className="p-6 text-center">🎥 Videos</CardContent></Card>
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="bg-white p-8 rounded max-w-md mx-auto text-center">
          <p>
            📧{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline text-blue-700"
            >
              {CONTACT_EMAIL}
            </a>
          </p>

          <p className="mt-4 flex justify-center items-center gap-2">
            <img
              src="/instagram.png"
              alt="Instagram"
              className="w-6 h-6"
            />
            <a
              href="https://instagram.com/kiwayne27"
              target="_blank"
              className="text-blue-700 underline"
            >
              Instagram
            </a>
          </p>
        </section>
      )}

      {/* PRIVACY */}
      {page === "privacy" && (
        <section className="bg-white p-8 rounded max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p>
            Information submitted to KLF Ministries is used solely for ministry
            purposes and is never sold or shared.
          </p>
        </section>
      )}

      {/* TERMS */}
      {page === "terms" && (
        <section className="bg-white p-8 rounded max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
          <p>
            All content on this site is property of KLF Ministries and may not be
            reproduced without permission.
          </p>
        </section>
      )}

      {/* FOOTER */}
      <footer className="text-center mt-12 text-sm text-gray-600">
        <button
          onClick={() => setPage("privacy")}
          className="underline mx-2"
        >
          Privacy Policy
        </button>
        |
        <button
          onClick={() => setPage("terms")}
          className="underline mx-2"
        >
          Terms & Conditions
        </button>
        <div className="mt-2">
          © {new Date().getFullYear()} KLF Ministries
        </div>
      </footer>
    </div>
  );
}
