export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      
      {/* HERO SECTION */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#111", color: "#fff" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          KLF Ministries
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          Proclaiming the Gospel • Equipping Believers • Engaging the Mission
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>About the Ministry</h2>
        <p>
          KLF Ministries exists to uplift Christ through preaching, teaching,
          discipleship, and mission-focused outreach. Our mission is rooted in
          worship, prayer, Bible study, and active service.
        </p>
      </section>

      {/* SPEAKING ENGAGEMENT FORM */}
      <section style={{ padding: "60px 20px", background: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Speaking Engagement Requests
        </h2>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
            width="100%"
            height="750"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* DONATE */}
      <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>Support the Ministry</h2>
        <p>Your generosity helps advance the work of the Gospel.</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
          {["$10", "$25", "$50", "$100", "$200", "$500", "$1000"].map((amount) => (
            <button
              key={amount}
              style={{
                padding: "12px 20px",
                fontSize: "16px",
                cursor: "pointer",
                borderRadius: "6px",
                border: "1px solid #333",
                background: "#fff"
              }}
            >
              {amount}
            </button>
          ))}
        </div>

        <p style={{ marginTop: "15px", fontSize: "14px", color: "#555" }}>
          Recurring donations help sustain long-term ministry impact.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", background: "#111", color: "#fff", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Email: klfministries7@gmail.com</p>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "18px", textDecoration: "none" }}
        >
          Follow on Instagram
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>
        © {new Date().getFullYear()} KLF Ministries. All rights reserved.
      </footer>

    </main>
  );
}
