"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const PAYPAL_EMAIL = "kiwayne26@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/18768700508?text=Hello%20KLF%20Ministries,%20I%20would%20like%20to%20connect.";

export default function AuthorWebsite() {
  const [page, setPage] = useState("home");

  const NavButton = ({ label, value }) => (
    <button
      onClick={() => setPage(value)}
      className={`px-4 py-2 rounded-lg ${
        page === value ? "bg-black text-white" : "bg-gray-200"
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
          "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.95)), url('/faith-mission-bg.jpg')",
      }}
    >
      {/* HEADER */}
      <header className="text-center mb-10">
        <img src="/klf-logo.png" className="mx-auto mb-4 w-40" />
        <h1 className="text-4xl font-bold">KLF Ministries & Publications</h1>
        <p className="italic text-gray-700 mb-4">
          “God uses rescued people to rescue people”
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <NavButton label="Home" value="home" />
          <NavButton label="About" value="about" />
          <NavButton label="Speaking" value="speaking" />
          <NavButton label="Books" value="books" />
          <NavButton label="Videos" value="videos" />
          <NavButton label="Contact" value="contact" />
          <NavButton label="Terms" value="terms" />
          <NavButton label="Privacy" value="privacy" />
        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold mb-3">🙏 One-Time Donation</h2>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[10, 25, 50, 100, 200, 500].map((amt) => (
                  <a key={amt} href={oneTimeLink(amt)} target="_blank" className="border rounded py-2">
                    ${amt}
                  </a>
                ))}
                <a href={oneTimeLink(1000)} target="_blank" className="border rounded py-2 col-span-3">
                  $1000
                </a>
              </div>

              <h3 className="font-semibold mb-2 text-green-700">
                💝 Become a Monthly Partner
              </h3>

              <div className="grid grid-cols-3 gap-2">
                {[10, 25, 50, 100, 200, 500].map((amt) => (
                  <a key={amt} href={monthlyLink(amt)} target="_blank" className="border rounded py-2 text-green-700">
                    ${amt}/mo
                  </a>
                ))}
                <a href={monthlyLink(1000)} target="_blank" className="border rounded py-2 col-span-3 text-green-700">
                  $1000/month
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold mb-2">📚 Books</h2>
              <Button onClick={() => setPage("books")}>View Books</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold mb-2">🎥 Videos</h2>
              <Button onClick={() => setPage("videos")}>Watch Videos</Button>
            </CardContent>
          </Card>
        </section>
      )}

      {/* ABOUT (WITH PHOTO) */}
      {page === "about" && (
        <section className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/author.jpg"
              alt="Kiwayne Ferron"
              className="w-full max-w-sm mx-auto rounded-xl shadow"
            />

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

      {/* FOOTER */}
      <footer className="text-center mt-12 text-sm text-gray-600">
        © {new Date().getFullYear()} KLF Ministries. All rights reserved.
      </footer>

      {/* WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}
