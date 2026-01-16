"use client";

export default function PrayerRequest({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  const content = {
    en: {
      title: "Submit a Prayer Request",
      intro:
        "You are not alone. Whatever you are facing, God cares deeply about it—and so do we. Please share your prayer request below. Our ministry will pray with you and for you.",
      name: "Your Name (optional)",
      email: "Your Email (optional)",
      message: "Your Prayer Request",
      button: "Send Prayer Request",
      footer:
        "“Cast all your anxiety on Him because He cares for you.” — 1 Peter 5:7",
      privacy:
        "Your prayer request is confidential. It will only be seen by our ministry team and will never be shared publicly without your permission.",
    },
    es: {
      title: "Enviar una Petición de Oración",
      intro:
        "No estás solo. Dios se interesa profundamente por lo que estás enfrentando, y nosotros también. Comparte tu petición de oración y estaremos orando contigo.",
      name: "Tu Nombre (opcional)",
      email: "Tu Correo Electrónico (opcional)",
      message: "Tu Petición de Oración",
      button: "Enviar Petición",
      footer:
        "“Echando toda vuestra ansiedad sobre Él, porque Él tiene cuidado de vosotros.” — 1 Pedro 5:7",
      privacy:
        "Su petición de oración es confidencial. Solo será vista por el equipo del ministerio y no se compartirá públicamente sin su permiso.",
    },
  };

  const t = content[lang];

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
        {t.title}
      </h1>

      <p className="text-center text-gray-700 mb-10 leading-relaxed">
        {t.intro}
      </p>

      <form
        action="https://formspree.io/f/xlgggdll"
        method="POST"
        className="bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* ✅ FORMSpree redirect (correct field name) */}
        <input
          type="hidden"
          name="_next"
          value={`/${lang}/prayer-request/thank-you`}
        />

        <input
          type="text"
          name="name"
          placeholder={t.name}
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder={t.email}
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          rows="6"
          required
          placeholder={t.message}
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 rounded-md font-semibold hover:bg-blue-900 transition"
        >
          {t.button}
        </button>

        {/* 🔒 CONFIDENTIALITY NOTICE */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          🔒 {t.privacy}
        </p>
      </form>

      <p className="text-center italic text-gray-600 mt-8">
        {t.footer}
      </p>
    </section>
  );
}
