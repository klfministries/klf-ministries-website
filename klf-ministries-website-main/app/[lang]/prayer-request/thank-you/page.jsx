export default function PrayerThankYou({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        {lang === "es"
          ? "Hemos Recibido Tu Petición"
          : "Your Prayer Request Has Been Received"}
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        {lang === "es"
          ? "Gracias por compartir su petición. No está solo. Nuestro ministerio está orando por usted."
          : "Thank you for sharing your prayer request. You are not alone. Our ministry is praying for you."}
      </p>

      <p className="italic text-gray-600 mb-10">
        {lang === "es"
          ? "“Echando toda vuestra ansiedad sobre Él, porque Él tiene cuidado de vosotros.” — 1 Pedro 5:7"
          : "“Cast all your anxiety on Him because He cares for you.” — 1 Peter 5:7"}
      </p>

      <a
        href={`/${lang}`}
        className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
      >
        {lang === "es" ? "Volver al Inicio" : "Return Home"}
      </a>
    </section>
  );
}
