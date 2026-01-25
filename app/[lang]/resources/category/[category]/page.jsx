import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

/* ---------- Load all resources by category ---------- */
function getResourcesByCategory(category) {
  const baseDir = path.join(process.cwd(), "app", "[lang]", "resources");
  const results = [];

  const sections = [
    { type: "article", dir: "articles" },
    { type: "lesson", dir: "lesson-studies" },
  ];

  for (const section of sections) {
    const sectionDir = path.join(baseDir, section.dir);

    if (!fs.existsSync(sectionDir)) continue;

    const files = fs.readdirSync(sectionDir).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(".md", "");
      const filePath = path.join(sectionDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      if ((data.category || "general") === category) {
        results.push({
          type: section.type,
          slug,
          title: data.title,
          description: data.description || "",
          date: data.date || "",
          category: data.category || "general",
        });
      }
    }
  }

  // Newest first
  results.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date) - new Date(a.date);
  });

  return results;
}

/* ---------- Category Page ---------- */
export default function CategoryPage({ params }) {
  const { lang, category } = params;
  const resources = getResourcesByCategory(category);

  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href={`/${lang}`} className="hover:underline">
          Home
        </Link>
        <span className="mx-2">→</span>

        <Link href={`/${lang}/resources`} className="hover:underline">
          Resources
        </Link>
        <span className="mx-2">→</span>

        <span className="text-gray-700 font-medium">
          {categoryLabel}
        </span>
      </nav>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">
          {categoryLabel}
        </h1>
        <p className="text-gray-600">
          Resources in the “{categoryLabel}” category.
        </p>
      </div>

      {/* Grid */}
      {resources.length === 0 ? (
        <p className="text-center text-gray-500">
          No resources found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item) => {
            const href =
              item.type === "article"
                ? `/${lang}/resources/articles/${item.slug}`
                : `/${lang}/resources/lesson-studies/${item.slug}`;

            return (
              <div
                key={`${item.type}-${item.slug}`}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Badges */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.type === "article"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.type === "article" ? "Article" : "Lesson Study"}
                  </span>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 capitalize">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>

                {item.date && (
                  <p className="text-xs text-gray-400 mb-3">
                    {item.date}
                  </p>
                )}

                <Link
                  href={href}
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  Read →
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
