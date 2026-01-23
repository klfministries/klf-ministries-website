export default function Books({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  const books = [
    {
      id: 1,
      title:
        "The Stewardship Controversy: A Deeper Look Into Biblical Stewardship",
      subtitle:
        "Revealing Christ-centered stewardship through the Great Controversy",
      description:
        "An in-depth biblical study that examines the principles of stewardship, addressing common misconceptions and presenting a clear, scriptural understanding of how believers are called to manage God’s gifts. It reveals Stewardship through the lens of the “Great Controversy.”",
      price: "USD 18.99",
      format: lang === "es" ? "Tapa blanda (Paperback)" : "Paperback",
      image: "/books/stewardship-controversy.jpg",
      mockup: "/books/stewardship-mockup.jpg",
      emailLink:
        "mailto:klfministries7@gmail.com?subject=Book Order Request&body=Hello,%0A%0AI would like to purchase the book 'The Stewardship Controversy'.%0A%0APlease send me the bank payment details and shipping information.%0A%0AThank you.",
      amazonLink: "https://www.amazon.com/dp/9769769029",
    },
    {
      id: 2,
      title: "Stewardship: The 5 Ts",
      subtitle: "A call to live differently",
      description:
        "A practical and inspiring guide that explores the five key areas of Christian stewardship—Time, Talent, Treasure, Temple, and Territory—helping believers live a balanced and faithful life. Whether you are a church leader, a new believer, or a seasoned disciple longing to live with deeper purpose, Stewardship: The Five Ts will awaken your conscience, strengthen your faith, and equip you to live as a good and faithful steward in preparation for eternity. This is not just a book to read—it is a call to live differently.",
      price: "USD 18.99",
      format: lang === "es" ? "Tapa blanda (Paperback)" : "Paperback",
      image: "/books/stewardship-5ts.jpg",
      mockup: "/books/stewardship-5ts-mockup.jpg", // optional
      emailLink:
        "mailto:klfministries7@gmail.com?subject=Book Order Request&body=Hello,%0A%0AI would like to purchase the book 'Stewardship: The 5 Ts'.%0A%0APlease send me the bank payment details and shipping information.%0A%0AThank you.",
      amazonLink: "https://www.amazon.com/dp/9769769010",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 md:py-20 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        {lang === "es" ? "Libros" : "Books"}
      </h1>

      <p className="text-center mb-10 max-w-2xl mx-auto">
        {lang === "es"
          ? "Recursos escritos para el crecimiento espiritual."
          : "Written resources for spiritual growth."}
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 text-center max-w-sm mx-auto relative"
          >
            {/* Paperback Badge */}
            <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Paperback Edition
            </span>

            {/* Main Book Cover */}
            <img
              src={book.image}
              alt={book.title}
              className="w-full max-h-96 object-contain mb-4"
            />

            {/* Mockup Image (optional) */}
            {book.mockup && (
              <img
                src={book.mockup}
                alt={`${book.title} mockup`}
                className="w-full max-h-80 object-contain mb-6"
              />
            )}

            <h2 className="text-xl font-semibold mb-1">
              {book.title}
            </h2>

            {/* Subtitle / Tagline */}
            <p className="text-sm italic text-gray-500 mb-3">
              {book.subtitle}
            </p>

            {/* Description (left-aligned for readability) */}
            <p className="text-sm text-gray-600 text-left mb-4 leading-relaxed">
              {book.description}
            </p>

            {/* Format */}
            <p className="text-sm text-gray-500 mb-1">
              {book.format}
            </p>

            {/* Shipping Note */}
            <p className="text-sm text-gray-500 mb-3">
              {lang === "es"
                ? "Envío a todo el mundo vía Amazon"
                : "Ships worldwide via Amazon"}
            </p>

            {/* Price */}
            <p className="text-gray-800 font-semibold mb-5">
              {book.price}
            </p>

            {/* Purchase Options */}
            <div className="space-y-3">
              {/* Primary Button: Amazon */}
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-black font-semibold"
              >
                {lang === "es" ? "Comprar en Amazon" : "Buy on Amazon"}
              </a>

              {/* Secondary Button: Bank Payment */}
              <a
                href={book.emailLink}
                className="block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 font-semibold"
              >
                {lang === "es"
                  ? "Solicitar pago bancario"
                  : "Request Bank Payment"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
