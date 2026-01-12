"use client";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* HEADER */}
      <header style={{ textAlign: "center", padding: "40px 20px" }}>
        <img
          src="/logo.png"
          alt="KLF Ministries Logo"
          style={{ width: "160px", marginBottom: "20px" }}
        />
        <h1>KLF Ministries & Publications</h1>
        <p><em>“God uses rescued people to rescue people”</em></p>

        {/* NAV */}
        <nav style={{ marginTop: "20px" }}>
          {["Home", "About", "Speaking", "Books", "Videos", "Contact", "Donate"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  margin: "0 6px",
                  padding: "8px 14px",
                  background: item === "Donate" ? "#16a34a" : "#e5e7eb",
                  color: item === "Donate" ? "#fff" : "#000",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      {/* ABOUT */}
      <section id="about" style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>About the Author</h2>
        <img
          src="/author.jpg"
          alt="Kiwayne Ferron"
          style={{ width: "200px", float: "right", marginLeft: "20px", borderRadius: "8px" }}
        />
        <p>
          Kiwayne Ferron is a pastor, speaker, and author committed to sharing the
          gospel of Jesus Christ with clarity, urgency, and hope. His ministry
          emphasizes spiritual preparation, discipleship, and faithful living in
          anticipation of Christ’s soon return.
        </p>
        <p>
          He lives by the philosophy, <strong>“To live is Christ; I know no other way.”</strong>
          His guiding mantra is this: <strong>God uses rescued people to rescue people.</strong>
        </p>
        <div style={{ clear: "both" }} />
      </section>

      {/* SPEAKING */}
      <section id="speaking" style={{ padding: "40px 20px", background: "#f9fafb" }}>
        <h2 style={{ textAlign: "center" }}>Speaking Engagements</h2>
        <ul style={{ maxWidth: "600px", margin: "20px auto" }}>
          <li>Church Revivals & Camp Meetings</li>
          <li>Special Preaching Assignments</li>
          <li>Bible Study Series</li>
          <li>End-Time Prophecy Series</li>
          <li>Leadership & Stewardship Training</li>
        </ul>

        {/* GOOGLE FORM EMBED */}
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
            width="100%"
            height="650"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Support the Ministry</h2>
        <p>Select an amount to give:</p>

        {[10, 25, 50, 100, 200, 500, 1000].map((amount) => (
          <form
            key={amount}
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
            style={{ display: "inline-block", margin: "6px" }}
          >
            <input type="hidden" name="business" value="klfministries7@gmail.com" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="amount" value={amount} />
            <button
              type="submit"
              style={{
                padding: "10px 16px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Donate ${amount}
            </button>
          </form>
        ))}

        <p style={{ marginTop: "15px" }}>
          <a
            href="https://www.paypal.com/donate/?business=klfministries7@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Make a recurring donation →
          </a>
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "40px 20px", background: "#f9fafb" }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:klfministries7@gmail.com">klfministries7@gmail.com</a></p>
        <p>
          Instagram:{" "}
          <a href="https://instagram.com/kiwayne27" target="_blank" rel="noreferrer">
            @kiwayne27
          </a>
        </p>
        <p>
          <a
            href="https://wa.me/18768700508"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 14px",
              background: "#25D366",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            WhatsApp
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>
        <p>© {new Date().getFullYear()} KLF Ministries. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </p>
      </footer>
    </main>
  );
}
