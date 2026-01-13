export const metadata = {
  title: "Sermons & Teaching Videos | KLF Ministries",
  description:
    "Watch sermons and Bible teaching videos by Pastor Kiwayne Ferron.",
};

export default function VideosPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Sermons & Teaching Videos
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <iframe
          className="w-full aspect-video rounded-xl shadow"
          src="https://www.youtube.com/embed/UCvCY6bafvUHVBCoqSOdBrcA"
          allowFullScreen
        />

        <iframe
          className="w-full aspect-video rounded-xl shadow"
          src="https://www.youtube.com/embed/UCvCY6bafvUHVBCoqSOdBrcA"
          allowFullScreen
        />
      </div>
    </main>
  );
}
