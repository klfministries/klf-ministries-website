"use client";

export default function TestimonialSubmit({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        {lang === "es" ? "Enviar Testimonio" : "Submit a Testimony"}
      </h1>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="card p-6 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder={lang === "es" ? "Su nombre" : "Your name"}
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          name="message"
          required
          rows="5"
          placeholder={
            lang === "es"
              ? "Comparta cómo este ministerio le ha bendecido"
              : "Share how this ministry has blessed you"
          }
          className="w-full border px-3 py-2 rounded"
        />

        <button type="submit" className="btn-primary w-full">
          {lang === "es" ? "Enviar Testimonio" : "Submit Testimony"}
        </button>
      </form>
    </section>
  );
}
