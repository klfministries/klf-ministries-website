export default function AboutPage({ params }) {
  const { lang } = params;

  const content = {
    en: {
      title: "About KLF Ministries",
      text:
        "KLF Ministries is a Christian ministry dedicated to preaching, teaching, and publishing Christ-centered resources.",
    },
    es: {
      title: "Acerca de KLF Ministries",
      text:
        "KLF Ministries es un ministerio cristiano dedicado a predicar, enseñar y publicar recursos centrados en Cristo.",
    },
  };

  const t = content[lang] || content.en;

  return (
    <section className="max-w-4xl mx-auto py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="text-lg text-gray-700">{t.text}</p>
    </section>
  );
}
