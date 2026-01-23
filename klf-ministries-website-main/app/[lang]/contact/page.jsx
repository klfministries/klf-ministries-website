export default function Contact({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-3xl mx-auto text-center py-20 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        {lang === "es" ? "Contacto" : "Contact"}
      </h1>

      <div className="space-y-5 text-lg">
        {/* EMAIL */}
        <p>
          📧{" "}
          <a
            href="mailto:klfministries7@gmail.com"
            className="text-blue-700 underline"
          >
            klfministries7@gmail.com
          </a>
        </p>

        {/* PHONE */}
        <p>📞 +1 (876) 870-0508</p>

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/YOUR_INSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-pink-600 hover:underline"
        >
          {/* Instagram SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>

          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
