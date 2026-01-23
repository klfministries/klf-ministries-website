export default function Videos({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 space-y-12">
      
      {/* PAGE HEADER */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-900">
          {lang === "es" ? "Videos" : "Videos"}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {lang === "es"
            ? "Sermones, enseñanzas y mensajes de esperanza en video."
            : "Sermons, teachings, and messages of hope in video."}
        </p>
      </div>

      {/* VIDEO EMBED GRID */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Video Embed 1 */}
        <div className="space-y-3">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/L54wdBN2Gxs"
              title="Sermon 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Sermon: L54wdBN2Gxs
          </h3>
        </div>

        {/* Video Embed 2 */}
        <div className="space-y-3">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/3_ykhmlzfkU"
              title="Sermon 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Sermon: 3_ykhmlzfkU
          </h3>
        </div>

        {/* Video Embed 3 */}
        <div className="space-y-3">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/hcESqntx_WA"
              title="Sermon 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Sermon: hcESqntx_WA
          </h3>
        </div>

        {/* Video Embed 4 */}
        <div className="space-y-3">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/0tgGtVI1Pac"
              title="Sermon 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Sermon: 0tgGtVI1Pac
          </h3>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center pt-8">
        <p className="text-gray-600 mb-4">
          {lang === "es"
            ? "Gracias por ver nuestros mensajes. Más mensajes están disponibles en nuestro canal de YouTube."
            : "Thank you for watching our messages. More sermons are available on our YouTube channel."}
        </p>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          {lang === "es"
            ? "Visitar Canal de YouTube"
            : "Visit YouTube Channel"}
        </a>
      </div>
    </section>
  );
}
