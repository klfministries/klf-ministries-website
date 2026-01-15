"use client";

export default function SubmitTestimonial({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        {lang === "es" ? "Enviar Testimonio" : "Submit a Testimony"}
      </h1>

      <p className="text-gray-700 text-center mb-10">
        {lang === "es"
          ? "Comparta cómo este ministerio ha sido una bendición para su vida."
          : "Share how this ministry has been a blessing to your life."}
      </p>

      <form
        action="https://formspree.io/f/xqeeabao"
        method="POST"
        className="card p-6 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder={
            lang === "es"
              ? "Su nombre (opcional)"
              : "Your name (optional)"
          }
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          name="message"
          rows="5"
          required
          placeholder={
            lang === "es"
              ? "Escriba su testimonio aquí..."
              : "Write your testimony here..."
          }
          className="w-full border px-3 py-2 rounded"
        />

        {/* language + page info (hidden) */}
        <input type="hidden" name="language" value={lang} />
        <input type="hidden" name="source" value="Website Testimonial Form" />

        <button type="submit" className="btn-primary w-full">
          {lang === "es" ? "Enviar Testimonio" : "Submit Testimony"}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-6 text-center">
        {lang === "es"
          ? "Los testimonios pueden ser editados para claridad antes de publicarse."
          : "Testimonies may be edited for clarity before publication."}
      </p>
    </section>
  );
}
