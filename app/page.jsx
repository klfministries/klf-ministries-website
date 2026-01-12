"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const DONATE_LINK =
  "https://www.paypal.com/donate/?business=kiwayne26@gmail.com&currency_code=USD";

const BOOK_BUY_LINK =
  "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=kiwayne26@gmail.com&item_name=KLF+Ministries+Book&amount=15.00&currency_code=USD&return=https://klfministries.org/?thankyou=book";

const WHATSAPP_LINK =
  "https://wa.me/18768700508?text=Hello%20KLF%20Ministries,%20I%20would%20like%20to%20connect.";

export default function AuthorWebsite() {
  const [page, setPage] = useState("home");
  const [thankYou, setThankYou] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const thanks = params.get("thankyou");
    if (thanks) setThankYou(thanks);
  }, []);

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

  return (
    <div
      className="min-h-screen p-6 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.95)), url('/faith-mission-bg.jpg')",
      }}
    >
      {/* HEADER */}
      <header className="text-center mb-10">
        <img
          src="/klf-logo.png"
          alt="KLF Ministries Logo"
          className="mx-auto mb-4 w-40 h-auto"
        />

        <h1 className="text-4xl font-bold mb-2">
          KLF Ministries & Publications
        </h1>

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
        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {/* BOOKS */}
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold mb-2">📚 Books</h2>
              <Button onClick={() => setPage("books")}>View Books</Button>
            </CardContent>
          </Card>

          {/* VIDEOS */}
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold mb-2">🎥 Videos</h2>
              <Button onClick={() => setPage("videos")}>Watch Videos</Button>
            </CardContent>
          </Card>

          {/* DONATE */}
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold mb-4">🙏 Support the Ministry</h2>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  10, 25, 50, 100, 200, 500
                ].map((amount) => (
                  <a
                    key={amount}
                    href={`https://www.paypal.com/donate/?business=kiwayne26@gmail.com&amount=${amount}&currency_code=USD`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    ${amount}
                  </a>
                ))}

                <a
                  href="https://www.paypal.com/donate/?business=kiwayne26@gmail.com&amount=1000&currency_code=USD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border rounded hover:bg-gray-100 col-span-3"
                >
                  $1000
                </a>
              </div>

              <a
                href={DONATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded"
              >
                Donate (Custom Amount)
              </a>
            </CardContent>
          </Card>
        </section>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <section className="bg-white p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <p>
            Kiwayne Ferron is a pastor, speaker, and author committed to sharing
            the gospel of Jesus Christ with clarity, urgency, and hope. His
            ministry emphasizes spiritual preparation, discipleship, and
            faithful living in anticipation of Christ’s soon return.
          </p>
        </section>
      )}

      {/* SPEAKING */}
      {page === "speaking" && (
        <section className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Speaking Engagements</h2>

          <p className="mb-6">
            To request a speaking engagement with KLF Ministries, please
            complete the form below.
          </p>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </section>
      )}

      {/* BOOKS */}
      {page === "books" && (
        <section className="bg-white p-8 rounded-xl max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Books</h2>
          <p className="mb-2">KLF Ministries Book</p>
          <p className="mb-4 font-semibold">$15.00 USD</p>
          <a
            href={BOOK_BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Buy Now
          </a>
        </section>
      )}

      {/* VIDEOS */}
      {page === "videos" && (
        <section className="bg-white p-8 rounded-xl max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Videos</h2>
          <p>Coming soon.</p>
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="bg-white p-8 rounded-xl max-w-md mx-auto text-center space-y-3">
          <p>
            📧{" "}
            <a
              href="mailto:klfministries7@gmail.com?subject=KLF%20Ministries%20Inquiry"
              className="text-blue-600 underline"
            >
              klfministries7@gmail.com
            </a>
          </p>

          <p>📞 +1 876 870 0508</p>

          <p className="flex justify-center">
            <a
              href="https://instagram.com/kiwayne27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700 hover:text-yellow-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.9 2.25a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
              </svg>
              @kiwayne27
            </a>
          </p>
        </section>
      )}

      {/* WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}
