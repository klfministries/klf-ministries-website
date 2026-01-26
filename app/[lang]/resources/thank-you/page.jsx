import fs from "fs";
import path from "path";
import Link from "next/link";

export default function ThankYouPage({ searchParams, params }) {
  const { lang } = params;

  const singleSlug = searchParams.item;      // for single purchase
  const bundleSlugs = searchParams.items;    // for bundle purchase (comma-separated)

  // Load downloads from public/downloads
  const downloadsDir = path.join(process.cwd(), "public", "downloads");
  let files = [];

  if (fs.existsSync(downloadsDir)) {
    files = fs.readdirSync(downloadsDir);
  }

  let unlockedFiles = [];

  // ===== SINGLE ITEM MODE =====
  if (singleSlug) {
    const matched = files.find((file) =>
      file.startsWith(singleSlug)
    );

    if (matched) {
      unlockedFiles = [matched];
    }
  }

  // ===== BUNDLE MODE =====
  if (bundleSlugs) {
    const slugsArray = bundleSlugs.split(",");

    unlockedFiles = slugsArray
      .map((slug) =>
        files.find((file) => file.startsWith(slug))
      )
      .filter(Boolean); // remove missing files
  }

  // ===== NOTHING FOUND =====
  if (unlockedFiles.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Thank You</h1>
        <p className="text-gray-600">
          Your payment was received, but we could not locate your file(s).
          <br />
          Please contact us for assistance.
        </p>

        <Link
          href={`/${lang}/contact`}
          className="inline-block mt-6 text-blue-700 underline"
        >
          Contact Support
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* Success Card */}
      <div className="bg-white border rounded-2xl shadow-lg p-10 text-center">
        {/* Check Icon */}
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
          ✅
        </div>

        <h1 className="text-3xl font-bold mb-3 text-blue-900">
          Purchase Successful
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for supporting KLF Ministries.  
          Your payment has been received and your resource{unlockedFiles.length > 1 ? "s are" : " is"} now unlocked.
        </p>

        {/* ===== UNLOCKED FILES LIST ===== */}
        <div className="bg-gray-50 border rounded-xl p-6 mb-8 text-left max-w-xl mx-auto space-y-4">
          {unlockedFiles.map((file) => {
            const displayName = file
              .replace(/\.[^/.]+$/, "")
              .replace(/-/g, " ");

            const downloadUrl = `/downloads/${file}`;

            return (
              <div key={file} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">Resource</p>
                  <p className="font-semibold text-gray-800 capitalize">
                    {displayName}
                  </p>
                </div>

                <a
                  href={downloadUrl}
                  className="rounded-lg bg-blue-900 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-800 transition"
                  download
                >
                  Download ↓
                </a>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <p className="mt-4 text-sm text-gray-500">
          If a download does not start automatically,  
          right-click the button and choose “Save link as…”
        </p>

        {/* Receipt & Contact */}
        <div className="mt-10 border-t pt-8 text-sm text-gray-600 space-y-3">
          <p>
            🧾 A receipt has been sent to your PayPal email address.
          </p>

          <p>
            📩 Need help? Contact us at{" "}
            <a
              href="mailto:klfministries7@gmail.com"
              className="text-blue-700 underline"
            >
              klfministries7@gmail.com
            </a>
          </p>

          <p className="text-xs text-gray-400">
            KLF Ministries & Publications — Thank you for supporting the mission.
          </p>
        </div>

        {/* Back to Resources */}
        <div className="mt-10">
          <Link
            href={`/${lang}/resources`}
            className="text-blue-700 underline hover:text-blue-900 transition"
          >
            ← Back to Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
