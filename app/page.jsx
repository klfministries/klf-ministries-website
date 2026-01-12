"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const PAYPAL_EMAIL = "klfministries7@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/18768700508?text=Hello%20KLF%20Ministries,%20I%20would%20like%20to%20connect.";

export default function KLFMinistries() {
  const [page, setPage] = useState("home");
  const [customAmount, setCustomAmount] = useState("");

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

  const donateLink = (amount) =>
    `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=USD`;

  const handleCustomDonate = () => {
    if (!customAmount) return;
    window.open(donateLink(customAmount), "_blank");
  };

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('/faith-mission-bg.jpg')",
      }}
    >
      {/* HEADER */}
      <header className="text-center mb-10">
        <img src="/klf-logo.png" alt="KLF Logo" className="mx-auto w-40 mb-4" />
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
        <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* DONATE */}
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <h2 className="font-semibold text-lg">
                💙 Support the Ministry
              </h2>

              <p className="text-sm text-gray-600 font-medium">
                Suggested Donations
              </p>

              <div className="grid grid-cols-3 gap-2">
                {[10, 25, 50, 100, 200, 500, 1000].map((amt) => (
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
                placeholder="Enter custom amount (USD)"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="border rounded w-full p-2"
              />

              <Button
                onClick={handleCustomDonate}
                className="w-full bg-blue-900"
              >
                💳 Donate via PayPal
              </Button>

              {/* DIRECT DEPOSIT */}
              <div className="border-t pt-4 text-left text-sm">
                <h3 className="font-semibold mb-2">
                  🏦 Direct Deposit / Bank Transfer
                </h3>
                <p>
                  If you prefer to give via direct deposit, please use the
                  banking details below:
                </p>
                <p className="mt-2">
                  <strong>Bank:</strong> Example Bank Jamaica<br />
                  <strong>Account Name:</strong> KLF Ministries<br />
                  <strong>Account Number:</strong> 123456789<br />
                  <strong>Branch:</strong> Kingston
                </p>
                <p className="mt-2 italic text-gray-600">
                  Please include your name as the reference.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* BOOKS */}
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold text-lg mb-2">📚 Books</h2>
              <p className="mb-3">Faith-centered resources</p>
              <Button onClick={() => setPage("books")}>View Books</Button>
            </CardContent>
          </Card>

          {/* VIDEOS */}
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold text-lg mb-2">🎥 Videos</h2>
              <p className="mb-3">Sermons & teaching</p>
              <Button onClick={() => setPage("videos")}>Watch Videos</Button>
            </CardContent>
          </Card>
        </section>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <section className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/author.jpg"
              alt="Kiwayne Ferron"
              className="rounded-xl shadow"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">About the Author</h2>
              <p className="leading-relaxed">
                Kiwayne Ferron is a pastor, speaker, and author committed to
                sharing the gospel of Jesus Christ with clarity, urgency, and
                hope. Through KLF Ministries & Publications, his mission is to
                equip believers, inspire faith, and call people to active
                discipleship.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SPEAKING */}
      {page === "speaking" && (
        <section className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
            width="100%"
            height="800"
          />
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="bg-white p-8 rounded-xl max-w-md mx-auto text-center space-y-4">
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
            className="flex justify-center items-center gap-2 text-pink-600"
          >
            <img src="/instagram.svg" alt="Instagram" className="w-5" />
            <span>Instagram</span>
          </a>
        </section>
      )}

      {/* FOOTER */}
      <footer className="text-center mt-12 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} KLF Ministries. All rights reserved.</p>
      </footer>

      {/* WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}
