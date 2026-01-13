export default function Contact({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">
        {lang === "es" ? "Contacto" : "Contact"}
      </h1>
      <p>
        {lang === "es"
          ? "Póngase en contacto con nosotros."
          : "Get in touch with us."}
      </p>
    </section>
  );
}
