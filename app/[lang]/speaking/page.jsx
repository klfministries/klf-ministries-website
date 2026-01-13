export default function Speaking({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">
        {lang === "es" ? "Predicación" : "Speaking"}
      </h1>
      <p>
        {lang === "es"
          ? "Mensajes bíblicos y predicación cristiana."
          : "Biblical preaching and Christian messages."}
      </p>
    </section>
  );
}
