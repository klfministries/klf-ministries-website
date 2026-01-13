export default function About({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 items-center">
      <img
        src="/author.jpg"
        alt="Kiwayne Ferron"
        className="rounded-xl shadow"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">
          {lang === "es" ? "Acerca del Autor" : "About the Author"}
        </h1>
        <p className="text-gray-700 leading-relaxed">
          {lang === "es"
            ? "Kiwayne Ferron es pastor, autor y conferencista comprometido con predicar el evangelio de Jesucristo con claridad, urgencia y esperanza."
            : "Kiwayne Ferron is a pastor, author, and speaker committed to preaching the gospel of Jesus Christ with clarity, urgency, and hope."}
        </p>
      </div>
    </section>
  );
}
