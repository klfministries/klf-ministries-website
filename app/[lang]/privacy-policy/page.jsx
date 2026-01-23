export default function PrivacyPolicy({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">
        {lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
      </h1>

      <p className="text-gray-700 leading-relaxed">
        {lang === "es"
          ? "KLF Ministries respeta su privacidad. No compartimos información personal con terceros sin su consentimiento."
          : "KLF Ministries respects your privacy. We do not share personal information with third parties without your consent."}
      </p>
    </section>
  );
}
