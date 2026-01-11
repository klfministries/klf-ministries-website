"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* HEADER */}
      <header className="text-center mb-10">
        <div className="flex flex-col items-center gap-4 mb-2">
          <div className="w-24 h-24 rounded-full border-2 border-black flex items-center justify-center text-center font-bold">
            <span>
              KLF <br /> 📖 ✝ 🔥
            </span>
          </div>

          <h1 className="text-4xl font-bold">
            KLF Ministries & Publications
          </h1>

          <p className="italic text-gray-700">
            “God uses rescued people to rescue people”
          </p>
        </div>

        <p className="text-lg text-gray-600 mb-6">
          Books • Videos • Faith-Based Resources
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
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">📚 Books</h2>
              <p className="mb-4 text-gray-600">
                Purchase inspiring books that strengthen faith and purpose.
              </p>
              <Button
                className="w-full"
                onClick={() => setPage("books")}
              >
                View Books
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">🎥 Videos</h2>
              <p className="mb-4 text-gray-600">
                Watch sermons, teachings, and inspirational messages.
              </p>
              <Button
                className="w-full"
                onClick={() => setPage("videos")}
              >
                Watch Videos
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">📝 Resources</h2>
              <p className="mb-4 text-gray-600">
                Devotionals, study guides, and downloadable content.
              </p>
              <Button className="w-full">Explore Resources</Button>
            </CardContent>
          </Card>
        </section>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <section className="bg-white p-8 rounded-2xl shadow mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <p className="text-gray-700 leading-relaxed">
            Kiwayne Ferron is a pastor, speaker, and author committed to sharing
            the gospel of Jesus Christ with clarity, urgency, and hope. His
            ministry emphasizes spiritual preparation, discipleship, and
            faithful living in anticipation of Christ’s soon return. He lives
            by the philosophy, “To live is Christ; I know no other way.” His
            guiding mantra is this: God uses rescued people to rescue people.
          </p>
        </section>
      )}

      {/* SPEAKING */}
      {page === "speaking" && (
        <section className="bg-white p-8 rounded-2xl shadow mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Speaking Engagements</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Church Revivals & Camp Meetings</li>
            <li>Special Preaching Assignment</li>
            <li>Bible Study</li>
            <li>End-Time Prophecy Series</li>
            <li>Leadership & Stewardship Training</li>
          </ul>
          <a href="mailto:info@klfministries.org">
            <Button>Request a Booking</Button>
          </a>
        </section>
      )}

      {/* BOOKS */}
      {page === "books" && (
        <section className="bg-white p-8 rounded-2xl shadow mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Books</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Book Title Here
              </h3>
              <p className="text-gray-600 mb-3">
                Short description of the book goes here.
              </p>
              <a
                href="#"
                className="inline-block bg-black text-white px-4 py-2 rounded-lg"
              >
                Buy Now
              </a>
            </div>
          </div>
        </section>
      )}

      {/* VIDEOS */}
      {page === "videos" && (
        <section className="bg-white p-8 rounded-2xl shadow mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Videos</h2>

          <p className="text-gray-700 mb-4">
            Watch sermons, teachings, and inspirational messages.
          </p>

          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
              title="KLF Ministries Video"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="bg-white p-8 rounded-2xl shadow mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Contact / Prayer Request
          </h2>
          <p className="text-gray-700 mb-4">
            For questions, invitations, or prayer requests, please reach out.
          </p>

          <form
            action="mailto:info@klfministries.org"
            method="POST"
            encType="text/plain"
            className="grid gap-4"
          >
            <input
              name="name"
              className="border p-3 rounded-lg"
              placeholder="Your Name"
            />
            <input
              name="email"
              className="border p-3 rounded-lg"
              placeholder="Your Email"
            />
            <textarea
              name="message"
              className="border p-3 rounded-lg"
              rows="4"
              placeholder="Your Message or Prayer Request"
            ></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </section>
      )}

      {/* FOOTER */}
      <footer className="text-center text-gray-500">
        <p>© {new Date().getFullYear()} KLF Ministries. All rights reserved.</p>
      </footer>
    </div>
  );
}
