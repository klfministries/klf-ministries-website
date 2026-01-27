import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ResourcesClient from "./ResourcesClient";
import downloads from "./downloads.json";

/* ---------- Load all resources on the server ---------- */
function getAllResources() {
  const results = [];

  /* ===== Articles (.md) ===== */
  const articlesDir = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "articles"
  );

  if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(".md", "");
      const filePath = path.join(articlesDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      results.push({
        type: "article",
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || "",
        date: data.date || "",
        category: data.category || "general",
        price: 3,
      });
    }
  }

  /* ===== Lesson Studies (.md) ===== */
  const lessonsDir = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "lesson-studies"
  );

  if (fs.existsSync(lessonsDir)) {
    const files = fs.readdirSync(lessonsDir).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(".md", "");
      const filePath = path.join(lessonsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      results.push({
        type: "lesson",
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || "",
        date: data.date || "",
        category: data.category || "general",
        price: 3,
      });
    }
  }

  /* ===== Downloads (from downloads.json) ===== */
  for (const item of downloads) {
    results.push({
      type: "download",
      slug: item.slug,
      file: item.file,
      title: item.title,
      description: item.description,
      date: item.date || "",
      category: "downloads",
      price: item.price || 5,
      isPremium: item.isPremium,
    });
  }

  /* ===== Sort newest first ===== */
  results.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date) - new Date(a.date);
  });

  return results;
}

/* ---------- Server Page ---------- */
export default function ResourcesPage({ searchParams, params }) {
  const { lang } = params;

  const type = searchParams.type || "all";
  const category = searchParams.category || "all";

  const allResources = getAllResources();

  // Filter by type
  let filtered =
    type === "all"
      ? allResources
      : allResources.filter((item) => item.type === type);

  // Filter by category
  if (category !== "all") {
    filtered = filtered.filter((item) => item.category === category);
  }

  return (
    <ResourcesClient
      lang={lang}
      initialResources={filtered}
      currentType={type}
      currentCategory={category}
    />
  );
}
