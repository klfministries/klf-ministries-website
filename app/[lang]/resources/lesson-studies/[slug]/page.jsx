import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

/* ---------- Generate static params for all lesson studies ---------- */
export async function generateStaticParams() {
  const lessonsDir = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "lesson-studies"
  );

  const files = fs.readdirSync(lessonsDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

/* ---------- SEO Metadata per Lesson Study ---------- */
export async function generateMetadata({ params }) {
  const { slug } = params;

  const filePath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "lesson-studies",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return {
      title: "Lesson Study Not Found | KLF Ministries",
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: `${data.title} | KLF Ministries`,
    description: data.description || "",
  };
}

/* ---------- Lesson Study Page ---------- */
export default async function LessonStudyPage({ params }) {
  const { slug, lang } = params;

  const filePath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "lesson-studies",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* ===== Breadcrumbs ===== */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href={`/${lang}`} className="hover:underline">
          Home
        </Link>
        <span className="mx-2">→</span>

        <Link href={`/${lang}/resources`} className="hover:underline">
          Resources
        </Link>
        <span className="mx-2">→</span>

        <Link
          href={`/${lang}/resources?type=lesson`}
          className="hover:underline"
        >
          Lesson Studies
        </Link>
        <span className="mx-2">→</span>

        <span className="text-gray-700 font-medium">
          {data.title}
        </span>
      </nav>

      {/* ===== Title ===== */}
      <h1 className="text-3xl font-bold mb-2">
        {data.title}
      </h1>

      {/* ===== Meta Row (Category + Date) ===== */}
      <div className="flex gap-3 items-center mb-8">
        {data.category && (
          <Link
            href={`/${lang}/resources/category/${data.category}`}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 capitalize hover:bg-gray-200 transition"
          >
            {data.category}
          </Link>
        )}

        {data.date && (
          <span className="text-sm text-gray-500">
            {data.date}
          </span>
        )}
      </div>

      {/* ===== Lesson Content ===== */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* ===== Back to Lesson Studies ===== */}
      <div className="mt-12 border-t pt-6">
        <Link
          href={`/${lang}/resources?type=lesson`}
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to Lesson Studies
        </Link>
      </div>
    </article>
  );
}
