"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const DONATE_LINK =
  "https://www.paypal.com/donate/?business=kiwayne26@gmail.com&no_recurring=0&item_name=Support+KLF+Ministries&currency_code=USD&return=https://klfministries.org/?thankyou=donation";

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
      {/* THANK YOU MESSAGE */}
      {thankYou && (
        <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-lg mb-8 text-center max-w-2xl mx-auto">
          {thankYou === "book" && (
            <>
              <p className="mb-4">
                🙏 <strong>Thank you for your purchase!</strong><br />
                Please enter your email below to receive your thank-you message.
              </p>

              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <script>
                      (function(w,d,e,u,f,l,n){
                        w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);};
                        l=d.createElement(e);l.async=1;l.src=u;
                        n=d.getElementsByTagName(e)[0];n.parentNode.insertBefore(l,n);
                      })
                      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                      ml('account', '2031646');
                    </script>
                    <div class="ml-embedded" data-form="KsWnut"></div>
                  `,
                }}
              />
            </>
          )}

          {thankYou === "donation" && (
            <p>
              💝 <strong>Thank you for your donation!</strong><br />
              Your generosity supports the mission of KLF Ministries.
            </p>
          )}
        </div>
      )}

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
          <a
            href={DONATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-green-600 text-white"
          >
            Donate
          </a>
        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <section className="grid md:grid-cols-3 gap-6 mb-12">
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

          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="font-semibold mb-2">🙏 Support</h2>
              <a
                href={DONATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded"
              >
                Donate
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

      {/* SPEAKING + APPOINTMENT FORM */}
      {page === "speaking" && (
        <section className="bg-white p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Speaking Engagements</h2>

          <ul className="list-disc pl-6 mb-8">
            <li>Church Revivals & Camp Meetings</li>
            <li>Special Preaching Assignments</li>
            <li>Bible Study</li>
            <li>End-Time Prophecy Series</li>
            <li>Leadership & Stewardship Training</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">
            Request a Speaking Engagement
          </h3>

          <form
            action="mailto:klfministries7@gmail.com?subject=Speaking%20Engagement%20Request"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <input type="text" name="Name" placeholder="Your Name" required className="w-full border p-2 rounded" />
            <input type="email" name="Email" placeholder="Your Email" required className="w-full border p-2 rounded" />
            <input type="tel" name="Phone" placeholder="Phone Number" className="w-full border p-2 rounded" />
            <input type="text" name="Organization" placeholder="Church / Organization" className="w-full border p-2 rounded" />
            <input type="text" name="Event Type" placeholder="Type of Event" className="w-full border p-2 rounded" />
            <input type="date" name="Preferred Date" className="w-full border p-2 rounded" />
            <textarea name="Message" placeholder="Tell us about your event" rows="4" className="w-full border p-2 rounded"></textarea>

            <button type="submit" className="bg-black text-white px-6 py-2 rounded">
              Submit Request
            </button>
          </form>
        </section>
      )}

      {/* BOOKS */}
      {page === "books" && (
        <section className="bg-white p-8 rounded-xl max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Books</h2>
          <p className="mb-2">KLF Ministries Book</p>
          <p className="mb-4 font-semibold">$15.00 USD</p>
          <a href={BOOK_BUY_LINK} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded">
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
        <section className="bg-white p-8 rounded-xl max-w-md mx-auto text-center space-y-2">
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
          <p>📸 @kiwayne27</p>
        </section>
      )}

      {/* WHATSAPP BUTTON */}
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
