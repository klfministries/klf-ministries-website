export const metadata = {
  title: "Sermons & Teaching Videos | KLF Ministries",
  description:
    "Watch sermons, Bible teachings, and inspirational Christian videos by Pastor Kiwayne Ferron through KLF Ministries.",
};

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Sermons & Teaching Videos
        </h1>

        <p className="text-gray-700 mb-10 max-w-3xl">
          These messages are shared to encourage faith, deepen understanding of
          Scripture, and call believers to faithful and active Christian living.
        </p>

        {/* VIDEO GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* VIDEO CARD */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
              Video Placeholder
            </div>
            <h2 className="font-semibold text-lg mb-2">
              Sermon Title Coming Soon
            </h2>
            <p className="text-sm text-gray-600">
              A Bible-based message focused on faith, preparation, and hope.
            </p>
          </div>

          {/* DUPLICATE PLACEHOLDER */}
          <div className="bg-white rounded-xl shadow-md p-4 opacity-60">
            <div className="aspect-video bg-gray-200 rounded mb-4"></div>
            <p className="text-gray-500 italic text-center">
              More videos coming soon
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
