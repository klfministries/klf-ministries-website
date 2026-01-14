export default function Contact({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-3xl mx-auto text-center py-20 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        {lang === "es" ? "Contacto" : "Contact"}
      </h1>

      <div className="space-y-5 text-lg">
        <p>
          📧{" "}
          <a
            href="mailto:klfministries7@gmail.com"
            className="text-blue-700 underline"
          >
            klfministries7@gmail.com
          </a>
        </p>

        <p>📞 +1 (876) 870-0508</p>

        <p>
          📸{" "}
          <a
            href="https://instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline"
          >
            Instagram
          </a>
        </p>
      </div>
    </section>
  );
}
