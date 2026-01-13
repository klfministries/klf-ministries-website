export const metadata = {
  title: "Christian Books | KLF Ministries",
  description:
    "Explore faith-centered Christian books by Pastor Kiwayne Ferron.",
};

export default function BooksPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Books & Publications
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src="/book-placeholder.jpg"
            alt="Book cover"
            className="mx-auto mb-4"
          />
          <h2 className="font-semibold mb-2">Book Title</h2>
          <p className="text-sm text-gray-600 mb-4">
            A faith-centered resource for spiritual growth.
          </p>
          <a
            href="#"
            className="bg-blue-900 text-white px-4 py-2 rounded inline-block"
          >
            Buy / Download
          </a>
        </div>
      </div>
    </main>
  );
}
