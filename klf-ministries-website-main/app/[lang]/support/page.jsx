export default function SupportPage({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="min-h-screen bg-blue-50 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          {lang === "es" ? "Apoya la Misión" : "Support the Mission"}
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          {lang === "es"
            ? "Tu apoyo ayuda a KLF Ministries a compartir esperanza, oración y la Palabra de Dios con personas y familias alrededor del mundo. A través de recursos, devocionales y ministerio de oración, buscamos señalar corazones a Cristo."
            : "Your support helps KLF Ministries share hope, prayer, and God’s Word with individuals and families around the world. Through resources, devotionals, and prayer ministry, we seek to point hearts to Christ."}
        </p>

        <div className="bg-white rounded-2xl shadow p-8 text-left space-y-6 fade-up fade-delay-1">
          <h2 className="text-2xl font-semibold text-blue-900">
            {lang === "es" ? "Cómo Apoyar" : "Ways to Support"}
          </h2>

          <p className="text-gray-700">
            {lang === "es"
              ? "Puedes apoyar esta misión de varias maneras:"
              : "You can support this mission in several ways:"}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              {lang === "es"
                ? "Orando fielmente por el ministerio y las personas que servimos"
                : "Praying faithfully for the ministry and those we serve"}
            </li>
            <li>
              {lang === "es"
                ? "Compartiendo nuestros recursos con otros"
                : "Sharing our resources with others"}
            </li>
            <li>
              {lang === "es"
                ? "Contribuyendo financieramente para apoyar el alcance del ministerio"
                : "Giving financially to support ministry outreach"}
            </li>
          </ul>

          <div className="border-t pt-6 text-center">
            <p className="text-gray-600 mb-4">
              {lang === "es"
                ? "Para apoyo financiero, por favor contáctanos directamente:"
                : "For financial support, please contact us directly:"}
            </p>

            <p className="font-medium text-blue-900">
              📧 klfministries7@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
