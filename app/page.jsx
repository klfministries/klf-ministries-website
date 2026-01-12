// 🚨 TEST CHANGE — SHOULD APPEAR ON SITE

"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const PAYPAL_EMAIL = "klfministries7@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/18768700508?text=Hello%20KLF%20Ministries,%20I%20would%20like%20to%20connect.";

export default function KLFMinistries() {
  const [page, setPage] = useState("home");

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

  const oneTimeLink = (amount) =>
    `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&amount=${amount}&currency_code=USD`;

  const monthlyLink = (amount) =>
    `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=${PAYPAL_EMAIL}&a3=${amount}&p3=1&t3=M&src=1&sra=1&currency_code=USD`;

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url('/faith-mission-bg.jpg')",
      }}
    >
      {/* HEADER */}
      <header className="text-center mb-10">
        <img
          src="/klf-logo.png"
          alt="KLF Ministries Logo"
          className="mx-auto mb-4 w-40"
        />

     <h1 className="text-4xl font-bold text-blue-900">
  🚨 TEST — KLF Ministries & Publications
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
          <NavButton label="Privacy" value="privacy" />
          <NavButton label="Terms" value="terms" />
        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* DONATIONS */}
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold text-lg mb-3">
                🙏 Support the Ministry
              </h2>

              <p className="mb-2 font-medium">One-Time Gift</p>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[10, 25, 50, 100, 200, 500].map((amt) => (
                  <a
                    key={amt}
                    href={oneTimeLink(amt)}
                    target="_blank"
                    className="border rounded py-2 hover:bg-gray-100"
                  >
                    ${amt}
                  </a>
                ))}
                <a
                  href={oneTimeLink(1000)}
                  target="_blank"
                  className="border rounded py-2 col-span-3 hover:bg-gray-100"
                >
                  $1000
                </a>
              </div>

              <p className="mb-2 font-medium text-green-700">
                Monthly Ministry Partner
              </p>

              <div className="grid grid-cols-3 gap-2">
                {[10, 25, 50, 100, 200, 500].map((amt) => (
                  <a
                    key={amt}
                    href={monthlyLink(amt)}
                    target="_blank"
                    className="border rounded py-2 text-green-700 hover:bg-green-50"
                  >
                    ${amt}/mo
                  </a>
                ))}
                <a
                  href={monthlyLink(1000)}
                  target="_blank"
                  className="border rounded py-2 col-span-3 text-green-700 hover:bg-green-50"
                >
                  $1000/mo
                </a>
              </div>
            </CardContent>
          </Card>

          {/* BOOKS */}
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold text-lg mb-2">📚 Books</h2>
              <p className="mb-3">Faith-centered resources for spiritual growth</p>
              <Button onClick={() => setPage("books")}>View Books</Button>
            </CardContent>
          </Card>

          {/* VIDEOS */}
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold text-lg mb-2">🎥 Videos</h2>
              <p className="mb-3">Messages, teaching, and sermons</p>
              <Button onClick={() => setPage("videos")}>Watch Videos</Button>
            </CardContent>
          </Card>
        </section>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <section className="bg-white p-8 rounded-xl max-w-4xl mx-auto animate-fade">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <img
                src="/author.jpg"
                alt="Kiwayne Ferron"
                className="w-full max-w-sm mx-auto rounded-xl shadow-lg mb-3"
                loading="lazy"
              />
              <p className="font-semibold text-lg">Kiwayne Ferron</p>
              <p className="text-sm text-gray-600">
                Pastor • Speaker • Author
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">About the Author</h2>
              <p>
                Kiwayne Ferron is a pastor, speaker, and author committed to
                sharing the gospel of Jesus Christ with clarity, urgency, and
                hope. His ministry emphasizes spiritual preparation,
                discipleship, and faithful living in anticipation of Christ’s
                soon return. He lives by the philosophy, “To live is Christ; I
                know no other way.” His guiding mantra is this: God uses rescued
                people to rescue people.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SPEAKING */}
      {page === "speaking" && (
        <section className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Speaking Engagements</h2>
          <p className="mb-6">
            To request a speaking engagement, please complete the form below.
          </p>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
          >
            Loading…
          </iframe>
        </section>
      )}

      {/* BOOKS PAGE */}
      {page === "books" && (
        <section className="bg-white p-8 rounded-xl max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Books</h2>
          <p className="mb-2">KLF Ministries Publication</p>
          <p className="mb-4 font-semibold">$15 USD</p>
          <a
            href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${PAYPAL_EMAIL}&item_name=KLF+Ministries+Book&amount=15&currency_code=USD`}
            target="_blank"
            className="bg-blue-900 text-white px-5 py-2 rounded"
          >
            Buy Now
          </a>
        </section>
      )}

      {/* VIDEOS */}
      {page === "videos" && (
        <section className="bg-white p-8 rounded-xl max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Videos</h2>
          <p>Video content coming soon.</p>
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="bg-white p-8 rounded-xl max-w-md mx-auto text-center space-y-3">
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
            className="flex justify-center items-center gap-2 text-blue-700 hover:text-yellow-600"
          >
            <span>Instagram</span>
          </a>
        </section>
      )}

      {/* PRIVACY */}
      {page === "privacy" && (
        <section className="bg-white p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p>
            KLF Ministries respects your privacy. Information submitted through
            forms, donations, or email subscriptions is used solely for ministry
            purposes and is never sold or shared.
          </p>
        </section>
      )}

      {/* TERMS */}
      {page === "terms" && (
        <section className="bg-white p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
          <p>
            All content on this website is the property of KLF Ministries.
            Unauthorized reproduction or distribution without permission is
            prohibited.
          </p>
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

      {/* FADE ANIMATION */}
      <style jsx>{`
        .animate-fade {
          animation: fade 0.8s ease-in-out;
        }
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}


