import YouTubeLatest from "@/app/components/YouTubeLatest";
import Link from "next/link";

export default function VideosPage({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="bg-[#f7f4ee] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* PAGE TITLE */}
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {lang === "es" ? "Videos" : "Videos"}
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === "es"
              ? "Mensajes recientes del canal de YouTube."
              : "Recent messages from our YouTube channel."}
          </p>
        </div>

        {/* ===== AUTOMATIC YOUTUBE FEED ===== */}
        <YouTubeLatest />

        {/* ===== BUTTON TO CHANNEL ===== */}
        <div className="pt-10">
          <Link
            href="https://www.youtube.com/@kiwayneferron3703"
            target="_blank"
            className="inline-block bg-blue-900 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-blue-800 transition"
          >
            {lang === "es"
              ? "Visitar Canal de YouTube"
              : "Visit YouTube Channel"}
          </Link>
        </div>
      </div>
    </section>
  );
}
