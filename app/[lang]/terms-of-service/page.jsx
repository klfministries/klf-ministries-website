export default function TermsOfService({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">
        {lang === "es" ? "Términos de Servicio" : "Terms of Service"}
      </h1>

      <p className="text-gray-700 leading-relaxed">
        {lang === "es"
          ? "Al utilizar este sitio web, usted acepta estos términos. El contenido se proporciona únicamente con fines informativos y espirituales."
          : "By using this website, you agree to these terms. All content is provided for informational and spiritual purposes only."}
      </p>
    </section>
  );
}