import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ResourceViewPage({ params }) {
  const { lang, slug } = params;

  /* ================= 1. CHECK DOWNLOADS.JSON ================= */
  const downloadsPath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "downloads.json"
  );

  const downloads = JSON.parse(fs.readFileSync(downloadsPath, "utf-8"));
  const downloadItem = downloads.find((d) => d.slug === slug);

  if (downloadItem) {
    const isPaid = downloadItem.isPremium === true;
    const isPdf = downloadItem.file.toLowerCase().endsWith(".pdf");
    const category = downloadItem.category;

    return (
      <section className="max-w-4xl mx-auto px-6 py-20">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={`/${lang}`}>Home</Link> →{" "}
          <Link href={`/${lang}/resources`}>Resources</Link> →{" "}
          <span>{downloadItem.title}</span>
        </nav>

        <h1 className="text-3xl font-bold mb-3">
          {downloadItem.title}
        </h1>

        {/* ===== CATEGORY BADGE ===== */}
        {category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </div>
        )}

        <p className="text-gray-600 mb-6">
          {downloadItem.description}
        </p>

        {isPaid ? (
          /* ================= PAID RESOURCE ================= */
          <div className="border rounded-xl p-8 bg-yellow-50 text-center">
            <h2 className="text-xl font-semibold mb-2">
              Premium Resource
            </h2>

            <p className="mb-4 text-gray-700">
              Price: <strong>${downloadItem.price} USD</strong>
            </p>

            <p className="mb-6">
              Please purchase this resource from the Resources page.
            </p>

            <Link
              href={`/${lang}/resources`}
              className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Back to Resources →
            </Link>
          </div>
        ) : (
          /* ================= FREE RESOURCE ================= */
          <>
            {isPdf ? (
              // PREVIEW ONLY FOR PDF FILES
              <div className="border rounded-xl overflow-hidden mb-6">
                <iframe
                  src={`/downloads/${downloadItem.file}`}
                  className="w-full h-[80vh]"
                  title={downloadItem.title}
                />
              </div>
            ) : (
              // NO PREVIEW FOR PPT / PPTX
              <div className="border rounded-xl p-8 bg-gray-50 text-center mb-6">
                <p className="text-gray-700 mb-4">
                  This file is a PowerPoint presentation and cannot be previewed in the browser.
                </p>
                <p className="text-sm text-gray-500">
                  Click the button below to download the file.
                </p>
              </div>
            )}

            <a
              href={`/downloads/${downloadItem.file}`}
              download
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Download →
            </a>
          </>
        )}
      </section>
    );
  }

  /* ================= 2. CHECK ARTICLES ================= */
  const articlesPath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "articles",
    `${slug}.md`
  );

  if (fs.existsSync(articlesPath)) {
    const file = fs.readFileSync(articlesPath, "utf-8");
    const { data, content } = matter(file);

    return (
      <section className="max-w-3xl mx-auto px-6 py-20 prose">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={`/${lang}`}>Home</Link> →{" "}
          <Link href={`/${lang}/resources`}>Resources</Link> →{" "}
          <span>{data.title}</span>
        </nav>

        <h1>{data.title}</h1>

        {/* ===== CATEGORY BADGE FOR ARTICLES ===== */}
        {data.category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
              {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
            </span>
          </div>
        )}

        {data.date && (
          <p className="text-sm text-gray-400">{data.date}</p>
        )}

        <article
          dangerouslySetInnerHTML={{
            __html: content.replace(/\n/g, "<br />"),
          }}
        />
      </section>
    );
  }

  /* ================= 3. CHECK LESSON STUDIES ================= */
  const lessonsPath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "lesson-studies",
    `${slug}.md`
  );

  if (fs.existsSync(lessonsPath)) {
    const file = fs.readFileSync(lessonsPath, "utf-8");
    const { data, content } = matter(file);

    return (
      <section className="max-w-3xl mx-auto px-6 py-20 prose">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={`/${lang}`}>Home</Link> →{" "}
          <Link href={`/${lang}/resources`}>Resources</Link> →{" "}
          <span>{data.title}</span>
        </nav>

        <h1>{data.title}</h1>

        {/* ===== CATEGORY BADGE FOR LESSON STUDIES ===== */}
        {data.category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
              {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
            </span>
          </div>
        )}

        {data.date && (
          <p className="text-sm text-gray-400">{data.date}</p>
        )}

        <article
          dangerouslySetInnerHTML={{
            __html: content.replace(/\n/g, "<br />"),
          }}
        />
      </section>
    );
  }

  /* ================= 4. NOTHING FOUND ================= */
  notFound();
}
