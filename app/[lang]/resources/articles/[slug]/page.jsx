import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

/* ---------- Generate static params for all articles ---------- */
export async function generateStaticParams() {
  const articlesDir = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "articles"
  );

  const files = fs.readdirSync(articlesDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

/* ---------- SEO Metadata per Article ---------- */
export async function generateMetadata({ params }) {
  const { slug } = params;

  const filePath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "articles",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return {
      title: "Article Not Found | KLF Ministries",
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: `${data.title} | KLF Ministries`,
    description: data.description || "",
  };
}

/* ---------- Article Page ---------- */
export default async function ArticlePage({ params }) {
  const { slug, lang } = params;

  const filePath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "articles",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
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
          href={`/${lang}/resources?type=article`}
          className="hover:underline"
        >
          Articles
        </Link>
        <span className="mx-2">→</span>

        <span className="text-gray-700 font-medium">
          {data.title}
        </span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
        {data.title}
      </h1>

      {/* Meta */}
      <div className="flex gap-3 items-center mb-8">
        {data.category && (
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 capitalize">
            {data.category}
          </span>
        )}

        {data.date && (
          <span className="text-sm text-gray-500">
            {data.date}
          </span>
        )}
      </div>

      {/* Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
