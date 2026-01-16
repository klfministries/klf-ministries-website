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

      {
        title: "Faith When You Can’t See",
        verse: "2 Corinthians 5:7",
        body:
          "Faith moves forward even when clarity is missing. Trusting God means believing He is guiding you, even when the road ahead is unseen.",
      },
      {
        title: "God Is Working in the Waiting",
        verse: "Psalm 27:14",
        body:
          "Waiting is not wasted time. God often uses seasons of delay to shape our hearts and strengthen our dependence on Him.",
      },
      {
        title: "Grace for Today",
        verse: "2 Corinthians 12:9",
        body:
          "God gives grace daily—not all at once. Each moment comes with the strength you need to endure and overcome.",
      },
      {
        title: "The Power of a Quiet Prayer",
        verse: "Psalm 145:18",
        body:
          "Some prayers are whispered, yet heaven hears them clearly. God responds to sincerity, not volume.",
      },
      {
        title: "When God Redirects Your Plans",
        verse: "Proverbs 16:9",
        body:
          "God’s redirection is not rejection. Sometimes a closed door is divine protection leading to a better path.",
      },
      {
        title: "Strength in Weakness",
        verse: "2 Corinthians 12:10",
        body:
          "Our weakness creates space for God’s power. When we surrender control, His strength becomes visible.",
      },
      {
        title: "Peace Beyond Understanding",
        verse: "Philippians 4:7",
        body:
          "God’s peace doesn’t remove storms—it anchors your heart while the storm passes.",
      },
      {
        title: "Trusting God’s Timing",
        verse: "Ecclesiastes 3:1",
        body:
          "God’s timing is always purposeful. What feels delayed is often perfectly planned.",
      },
      {
        title: "Obedience Before Understanding",
        verse: "Proverbs 3:5",
        body:
          "God often asks for obedience before explanation. Trust grows when we follow Him without full clarity.",
      },
      {
        title: "God Sees Hidden Faithfulness",
        verse: "Matthew 6:6",
        body:
          "What is done in secret is honored by God. Quiet obedience carries eternal reward.",
      },
      {
        title: "Hope That Anchors the Soul",
        verse: "Hebrews 6:19",
        body:
          "Hope in Christ steadies us when circumstances feel unstable. He is our unmovable anchor.",
      },
      {
        title: "God Is Near the Brokenhearted",
        verse: "Psalm 34:18",
        body:
          "God draws close when hearts are wounded. His presence brings comfort and healing.",
      },
      {
        title: "A Fresh Start in Christ",
        verse: "2 Corinthians 5:17",
        body:
          "In Christ, your past no longer defines you. God’s mercy makes all things new.",
      },
      {
        title: "Walking Humbly with God",
        verse: "Micah 6:8",
        body:
          "Humility keeps our hearts aligned with God’s will and sensitive to His voice.",
      },
      {
        title: "Faithfulness in Small Things",
        verse: "Luke 16:10",
        body:
          "God trusts those who are faithful in the little things. Small obedience leads to greater responsibility.",
      },
      {
        title: "God’s Word Never Fails",
        verse: "Isaiah 40:8",
        body:
          "God’s Word stands firm when everything else fades. It remains our sure foundation.",
      },
      {
        title: "Let God Carry the Burden",
        verse: "Psalm 55:22",
        body:
          "You were never meant to carry life’s weight alone. God invites you to place every burden in His hands.",
      },
      {
        title: "Light in the Darkness",
        verse: "John 1:5",
        body:
          "No darkness can overcome the light of Christ. His presence brings hope and clarity.",
      },
      {
        title: "A Heart Anchored in Christ",
        verse: "Colossians 1:27",
        body:
          "Christ within us is our confidence. Our strength flows from His abiding presence.",
      },
      {
        title: "Finish the Race Faithfully",
        verse: "2 Timothy 4:7",
        body:
          "The goal of faith is not speed but endurance. Faithfulness until the end honors God.",
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

      {
        title: "Fe Cuando No Puedes Ver",
        verse: "2 Corintios 5:7",
        body:
          "La fe avanza incluso cuando falta claridad. Confiar en Dios es creer que Él guía tus pasos aunque el camino no sea visible.",
      },
      {
        title: "Dios Está Obrando en la Espera",
        verse: "Salmos 27:14",
        body:
          "Esperar no es tiempo perdido. Dios usa las temporadas de espera para formar nuestro carácter y fortalecer nuestra fe.",
      },
      {
        title: "Gracia Para Hoy",
        verse: "2 Corintios 12:9",
        body:
          "Dios concede gracia cada día. Cada momento viene acompañado de la fuerza necesaria para seguir adelante.",
      },
      {
        title: "El Poder de una Oración Silenciosa",
        verse: "Salmos 145:18",
        body:
          "Algunas oraciones son susurradas, pero el cielo las escucha claramente. Dios responde a la sinceridad del corazón.",
      },
      {
        title: "Cuando Dios Redirige Tus Planes",
        verse: "Proverbios 16:9",
        body:
          "La redirección de Dios no es rechazo. Muchas veces una puerta cerrada es protección divina.",
      },
      {
        title: "Fuerza en la Debilidad",
        verse: "2 Corintios 12:10",
        body:
          "Nuestra debilidad abre espacio para el poder de Dios. Cuando nos rendimos, Su fuerza se manifiesta.",
      },
      {
        title: "Paz que Sobrepasa Todo Entendimiento",
        verse: "Filipenses 4:7",
        body:
          "La paz de Dios no elimina las tormentas, pero guarda el corazón en medio de ellas.",
      },
      {
        title: "Confiando en el Tiempo de Dios",
        verse: "Eclesiastés 3:1",
        body:
          "El tiempo de Dios es perfecto. Lo que parece tardanza es parte de Su plan.",
      },
      {
        title: "Obediencia Antes de Comprender",
        verse: "Proverbios 3:5",
        body:
          "Dios muchas veces pide obediencia antes de dar explicación. La fe crece al confiar plenamente en Él.",
      },
      {
        title: "Dios Ve la Fidelidad Oculta",
        verse: "Mateo 6:6",
        body:
          "Lo que se hace en secreto es visto por Dios. La obediencia silenciosa tiene recompensa eterna.",
      },
      {
        title: "Esperanza que Ancla el Alma",
        verse: "Hebreos 6:19",
        body:
          "La esperanza en Cristo nos mantiene firmes cuando todo a nuestro alrededor parece inestable.",
      },
      {
        title: "Dios Está Cerca del Quebrantado",
        verse: "Salmos 34:18",
        body:
          "Dios se acerca cuando el corazón está herido. Su presencia trae consuelo y sanidad.",
      },
      {
        title: "Un Nuevo Comienzo en Cristo",
        verse: "2 Corintios 5:17",
        body:
          "En Cristo somos hechos nuevos. Su misericordia nos da la oportunidad de comenzar otra vez.",
      },
      {
        title: "Caminar Humildemente con Dios",
        verse: "Miqueas 6:8",
        body:
          "La humildad mantiene nuestro corazón alineado con la voluntad de Dios.",
      },
      {
        title: "Fidelidad en lo Pequeño",
        verse: "Lucas 16:10",
        body:
          "Dios honra a quienes son fieles en las pequeñas cosas. La obediencia diaria prepara para mayores responsabilidades.",
      },
      {
        title: "La Palabra de Dios Nunca Falla",
        verse: "Isaías 40:8",
        body:
          "La Palabra de Dios permanece para siempre. Es nuestra base firme en un mundo cambiante.",
      },
      {
        title: "Deja que Dios Lleve la Carga",
        verse: "Salmos 55:22",
        body:
          "No fuiste creado para cargar solo. Dios te invita a entregar cada peso en Sus manos.",
      },
      {
        title: "Luz en la Oscuridad",
        verse: "Juan 1:5",
        body:
          "La oscuridad no puede vencer la luz de Cristo. Su presencia trae esperanza.",
      },
      {
        title: "Un Corazón Anclado en Cristo",
        verse: "Colosenses 1:27",
        body:
          "Cristo en nosotros es nuestra seguridad. De Él proviene nuestra fortaleza.",
      },
      {
        title: "Terminar la Carrera con Fidelidad",
        verse: "2 Timoteo 4:7",
        body:
          "Lo importante no es cómo comenzamos, sino cómo perseveramos fielmente hasta el final.",
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
