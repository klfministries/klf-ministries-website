import fs from "fs";
import path from "path";
import Link from "next/link";

/* ---------- Load all downloads ---------- */
function getAllDownloads() {
  const downloadsDir = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "downloads"
  );

  const results = [];

  if (fs.existsSync(downloadsDir)) {
    const files = fs.readdirSync(downloadsDir);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();

      if ([".pdf", ".ppt", ".pptx", ".docx", ".zip"].includes(ext)) {
        const slug = file.replace(ext, "");

        // 💰 Pricing rules
        const isPremium = [".pdf", ".ppt", ".pptx"].includes(ext);
        const price = isPremium ? 5 : 3;

        results.push({
          file,
          slug,
          title: slug.replace(/-/g, " "),
          description: isPremium
            ? "Premium teaching resource"
            : "Downloadable resource",
          ext,
          price,
        });
      }
    }
  }

  return results;
}

/* ---------- Downloads Page ---------- */
export default function DownloadsPage({ params }) {
  const { lang } = params;
  const downloads = getAllDownloads();

  // ✅ Your real PayPal donation base (from DonationModal)
  const PAYPAL_EMAIL = "klfministries7@gmail.com";

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Downloads</h1>
        <p className="text-gray-600">
          Premium PDF & PowerPoint resources to support the ministry.
        </p>
      </div>

      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-8 text-center">
        <Link href={`/${lang}`} className="hover:underline">
          Home
        </Link>
        <span className="mx-2">→</span>

        <Link href={`/${lang}/resources`} className="hover:underline">
          Resources
        </Link>
        <span className="mx-2">→</span>

        <span className="text-gray-700 font-medium">Downloads</span>
      </nav>

      {/* Grid */}
      {downloads.length === 0 ? (
        <p className="text-center text-gray-500">
          No downloads available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item) => {
            // 🧾 Build PayPal payment link (same system as your DonationModal)
            const returnUrl =
              typeof window !== "undefined"
                ? `${window.location.origin}/${lang}/resources/downloads?payment=success`
                : "";

            const paypalLink = `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD&amount=${item.price}&item_name=${encodeURIComponent(
              item.title
            )}&return=${encodeURIComponent(returnUrl)}`;

            return (
              <div
                key={item.file}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Price Badge */}
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                    item.price === 5
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  ${item.price} USD
                </span>

                <h3 className="text-lg font-semibold mb-2 capitalize">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">
                  {item.description}
                </p>

                {/* Pay Button */}
                <a
                  href={paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Pay ${item.price} via PayPal
                </a>

                <p className="text-xs text-gray-500 mt-3">
                  After payment, please email your PayPal receipt to{" "}
                  <span className="font-medium">
                    klfministries7@gmail.com
                  </span>{" "}
                  to receive your download.
                </p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
