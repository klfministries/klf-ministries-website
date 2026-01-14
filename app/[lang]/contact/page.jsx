export const dynamic = "force-static";

export default function ContactPage({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-3xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        {lang === "es" ? "Contacto" : "Contact"}
      </h1>

      <div className="space-y-4 text-lg">
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
            href="https://instagram.com/klfministries"
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
