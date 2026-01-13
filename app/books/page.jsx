export const metadata = {
  title: "Christian Books | KLF Ministries",
  description:
    "Explore faith-centered Christian books by Pastor Kiwayne Ferron designed to inspire spiritual growth, stewardship, and preparedness.",
};

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Books & Publications
        </h1>

        <p className="text-gray-700 mb-10 max-w-3xl">
          These faith-centered resources are written to encourage spiritual
          growth, faithful living, and readiness for Christ’s return.
        </p>

        {/* BOOK GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* BOOK CARD */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <img
              src="/book-placeholder.jpg"
              alt="Book cover"
              className="mx-auto mb-4 rounded-lg"
            />
            <h2 className="font-semibold text-lg mb-2">
              Book Title Coming Soon
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              A faith-based resource designed to strengthen your walk with God.
            </p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>

          {/* DUPLICATE CARD FOR FUTURE BOOKS */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center opacity-60">
            <div className="h-48 bg-gray-200 rounded mb-4"></div>
            <p className="text-gray-500 italic">More books coming soon</p>
          </div>
        </div>
      </section>
    </main>
  );
}
