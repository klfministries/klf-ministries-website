export default function Devotionals({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  const devotionals = {
    en: [
      {
        title: "Faithfulness When No One Is Watching",
        verse: "Matthew 25:21",
        body:
          "Faithfulness is proven in unseen moments. God values obedience more than applause. When you remain faithful in prayer, integrity, and service—even when no one notices—heaven takes note.",
      },
      {
        title: "Prepared People Live Differently",
        verse: "Luke 19:13",
        body:
          "Preparation for Christ’s return is active, not passive. Jesus calls us to serve faithfully, steward wisely, and live with eternity in view.",
      },
      {
        title: "God Uses Rescued People",
        verse: "Matthew 10:8",
        body:
          "God never rescues us so we remain silent. Your testimony, experiences, and growth are tools in His hands to bless others.",
      },
    ],
    es: [
      {
        title: "Fidelidad Cuando Nadie Está Mirando",
        verse: "Mateo 25:21",
        body:
          "La fidelidad se demuestra en lo secreto. Dios valora la obediencia más que el reconocimiento. Cuando permaneces fiel, el cielo toma nota.",
      },
      {
        title: "Las Personas Preparadas Viven Diferente",
        verse: "Lucas 19:13",
        body:
          "La preparación para el regreso de Cristo es activa. Jesús nos llama a servir fielmente y a vivir con la eternidad en mente.",
      },
      {
        title: "Dios Usa a los Rescatados",
        verse: "Mateo 10:8",
        body:
          "Dios no nos rescata para que guardemos silencio. Nuestra historia se convierte en una herramienta para bendecir a otros.",
      },
    ],
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-10 text-center">
        {lang === "es" ? "Devocionales" : "Devotionals"}
      </h1>

      <div className="space-y-10">
        {devotionals[lang].map((d, i) => (
          <div key={i} className="card p-6">
            <h2 className="text-xl font-semibold mb-2">{d.title}</h2>
            <p className="italic text-gray-600 mb-3">{d.verse}</p>
            <p className="text-gray-700">{d.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
