export default function Videos({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">
        {lang === "es" ? "Videos" : "Videos"}
      </h1>
      <p>
        {lang === "es"
          ? "Sermones y enseñanzas en video."
          : "Sermons and video teachings."}
      </p>
    </section>
  );
}
