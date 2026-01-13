export default function About({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  const content = {
    en: {
      title: "About KLF Ministries",
      text: "KLF Ministries exists to preach, teach, and equip believers for faithful Christian living.",
    },
    es: {
      title: "Acerca de KLF Ministries",
      text: "KLF Ministries existe para predicar, enseñar y equipar a los creyentes para una vida cristiana fiel.",
    },
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">{content[lang].title}</h1>
      <p>{content[lang].text}</p>
    </section>
  );
}
