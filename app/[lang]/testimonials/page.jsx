"use client";

export default function Testimonials({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      {/* ================= PUBLIC TESTIMONIALS ================= */}
      <h1 className="text-3xl font-bold text-blue-900 mb-10 text-center">
        {lang === "es" ? "Testimonios" : "Testimonies"}
      </h1>

      <div className="space-y-10 mb-16">
        <blockquote className="italic text-gray-700 text-center">
          “This ministry reminded me that faithfulness in small things still
          matters to God.”
          <div className="mt-2 font-medium">— Listener</div>
        </blockquote>

        <blockquote className="italic text-gray-700 text-center">
          “Each devotional strengthens my walk with Christ and keeps me focused
          on what truly matters.”
          <div className="mt-2 font-medium">— Subscriber</div>
        </blockquote>

        <blockquote className="italic text-gray-700 text-center">
          “The messages are biblical, timely, and deeply encouraging.”
          <div className="mt-2 font-medium">— Viewer</div>
        </blockquote>
      </div>

      {/* ================= SUBMIT TESTIMONIAL ================= */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          {lang === "es" ? "Enviar Testimonio" : "Submit a Testimony"}
        </h2>

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

          {/* hidden metadata */}
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
      </div>
    </section>
  );
}
