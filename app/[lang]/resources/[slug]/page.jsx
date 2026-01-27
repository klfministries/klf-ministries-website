import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";

// 🔐 Only this slug is paid
const PAID_SLUG = "how-to-study-bible-prophecy";

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
    const isPaid = slug === PAID_SLUG;

    return (
      <section className="max-w-4xl mx-auto px-6 py-20">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={`/${lang}`}>Home</Link> →{" "}
          <Link href={`/${lang}/resources`}>Resources</Link> →{" "}
          <span>{downloadItem.title}</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">{downloadItem.title}</h1>
        <p className="text-gray-600 mb-6">{downloadItem.description}</p>

        {isPaid ? (
          <div className="border rounded-xl p-8 bg-yellow-50 text-center">
            <h2 className="text-xl font-semibold mb-4">
              Premium Resource
            </h2>
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
          <>
            <div className="border rounded-xl overflow-hidden mb-6">
              <iframe
                src={`/downloads/${downloadItem.file}`}
                className="w-full h-[80vh]"
                title={downloadItem.title}
              />
            </div>

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
        {data.date && <p className="text-sm text-gray-400">{data.date}</p>}

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
        {data.date && <p className="text-sm text-gray-400">{data.date}</p>}

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
