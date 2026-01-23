export default function About({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    // 🌍 IMPORTANT: No bg-white here — let global layout background show
    <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-start bg-transparent">
      {/* LEFT COLUMN: MAIN IMAGE + GALLERY */}
      <div className="space-y-8">
        {/* MAIN AUTHOR IMAGE */}
        <img
          src="/author.jpg"
          alt="Pastor Kiwayne Ferron"
          className="rounded-2xl shadow-xl w-full object-cover"
        />

        {/* GALLERY TITLE */}
        <h3 className="text-sm uppercase tracking-wide font-semibold text-gray-500 mt-6">
          In Ministry and Life
        </h3>

        {/* IMAGES GALLERY */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="/images/about-1a.jpeg"
            alt="Pastor Kiwayne Ferron and wife"
            className="rounded-xl shadow-md w-full object-cover max-h-[500px]"
          />

          <img
            src="/images/about-2a.jpeg"
            alt="Pastor Kiwayne Ferron and wife"
            className="rounded-xl shadow-md w-full object-cover max-h-[500px]"
          />

          <img
            src="/images/about-3a.jpeg"
            alt="Pastor Kiwayne Ferron and wife"
            className="rounded-xl shadow-md w-full object-cover max-h-[520px] col-span-2"
          />
        </div>
      </div>

      {/* RIGHT COLUMN: ABOUT CONTENT */}
      <div>
        <h1 className="text-4xl font-bold mb-8 text-blue-900">
          {lang === "es"
            ? "Acerca de KLF Ministries y Publicaciones"
            : "About KLF Ministries and Publications"}
        </h1>

        {/* TEXT BLOCK — keep on cream background */}
        <section className="space-y-6 text-gray-700 leading-relaxed text-lg">
          {lang === "es" ? (
            <>
              <p>
                El <strong>pastor Kiwayne Ferron</strong> es pastor, autor y
                conferencista, comprometido a predicar el evangelio de
                Jesucristo con claridad, urgencia y esperanza. Nació y se
                crió en el distrito de Arcadia, ubicado en la hermosa,
                fértil y maravillosa parroquia de St. Thomas, Jamaica.
              </p>

              <p>
                Está casado con la <strong>Trudy-Ann Moore Ferron</strong>,
                una cantante dotada cuyo ministerio y apoyo constante
                fortalecen su llamado. El pastor Ferron es un estudiante
                dedicado de las Escrituras, un amante de la Palabra de Dios,
                un siervo de Dios y un amigo de la humanidad. Su vida y
                ministerio reflejan una profunda pasión por compartir a
                Cristo tanto en palabra como en acción.
              </p>

              <p>
                El pastor Ferron sirve como pastor en la{" "}
                <strong>
                  Conferencia del Este de Jamaica de los Adventistas del
                  Séptimo Día
                </strong>
                . Dotado de diversos dones, ministra con autenticidad,
                compasión y profundidad espiritual. Vive según la filosofía
                guía:{" "}
                <em>“To-live-is-Christ; I-know-no-other-way”</em>, y lleva
                el lema:{" "}
                <strong>“Rescued people, rescue people”</strong>, creyendo
                que aquellos transformados por la gracia están llamados a
                extender esa gracia a otros.
              </p>

              <p>
                <strong>KLF Ministries and Publications</strong> existe para
                alcanzar corazones con el mensaje transformador del
                evangelio e inspirar a los creyentes a vivir plenamente
                comprometidos con el Señor. A través de devocionales, apoyo
                en oración, testimonios, sermones y recursos basados en la
                fe, el ministerio busca fomentar el crecimiento espiritual,
                fortalecer la fe y cultivar una caminata vibrante con
                Cristo.
              </p>

              <p>
                Se invita a los visitantes a participar en sermones
                edificantes, compartir peticiones de oración, leer y enviar
                testimonios, y acceder a libros y otros recursos diseñados
                para equipar, inspirar y capacitar a las personas para una
                vida cristiana fiel y un servicio comprometido.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Pastor Kiwayne Ferron</strong> is a pastor, author,
                and speaker committed to preaching the gospel of Jesus
                Christ with clarity, urgency, and hope. He was born and
                raised in the district of Arcadia, nestled in the
                beautiful, fertile, and wonderful parish of St. Thomas,
                Jamaica.
              </p>

              <p>
                He is married to the{" "}
                <strong>Trudy-Ann Moore Ferron</strong>, a gifted singer
                whose ministry and unwavering support strengthen his
                calling. Pastor Ferron is a devoted student of Scripture, a
                lover of the Word of God, a servant of God, and a friend to
                humanity. His life and ministry reflect a deep passion for
                sharing Christ in both word and deed.
              </p>

              <p>
                Pastor Ferron serves as a pastor in the{" "}
                <strong>
                  East Jamaica Conference of Seventh-day Adventists
                </strong>
                . Endowed with diverse gifts, he ministers with
                authenticity, compassion, and spiritual depth. He lives by
                the guiding philosophy,{" "}
                <em>“To-live-is-Christ; I-know-no-other-way”</em>, and
                carries the mantra,{" "}
                <strong>“Rescued people, rescue people”</strong>, believing
                that those transformed by grace are called to extend that
                grace to others.
              </p>

              <p>
                <strong>KLF Ministries and Publications</strong> exists to
                reach hearts with the life-changing message of the gospel
                and to inspire believers to live fully committed to the
                Lord. Through devotionals, prayer support, testimonies,
                sermons, and faith-based resources, the ministry seeks to
                encourage spiritual growth, strengthen faith, and cultivate
                a vibrant walk with Christ.
              </p>

              <p>
                Visitors are invited to engage with uplifting sermons,
                share prayer requests, read and submit testimonies, and
                access books and other resources designed to equip,
                inspire, and empower individuals for faithful Christian
                living and service.
              </p>
            </>
          )}
        </section>
      </div>
    </section>
  );
}
