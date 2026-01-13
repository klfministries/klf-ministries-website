export default function Books({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">
        {lang === "es" ? "Libros" : "Books"}
      </h1>
      <p>
        {lang === "es"
          ? "Recursos escritos para el crecimiento espiritual."
          : "Written resources for spiritual growth."}
      </p>
    </section>
  );
}
