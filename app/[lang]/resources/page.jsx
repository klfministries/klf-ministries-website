import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ResourcesClient from "./ResourcesClient";

/* ---------- Load all resources on the server ---------- */
function getAllResources() {
  const baseDir = path.join(process.cwd(), "app", "[lang]", "resources");

  const results = [];

  /* ===== Articles ===== */
  const articlesDir = path.join(baseDir, "articles");
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
        title: data.title,
        description: data.description || "",
        date: data.date || "",
        category: data.category || "general",
      });
    }
  }

  /* ===== Lesson Studies ===== */
  const lessonsDir = path.join(baseDir, "lesson-studies");
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
        title: data.title,
        description: data.description || "",
        date: data.date || "",
        category: data.category || "general",
      });
    }
  }

  /* ===== Downloads ===== */
  const downloadsDir = path.join(baseDir, "downloads");
  if (fs.existsSync(downloadsDir)) {
    const files = fs.readdirSync(downloadsDir);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();

      if ([".pdf", ".ppt", ".pptx"].includes(ext)) {
        const slug = file.replace(ext, "");

        results.push({
          type: "download",
          slug,
          file,
          title: slug.replace(/-/g, " "),
          description: "Downloadable resource",
          date: "",
          category: "downloads",
        });
      }
    }
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
  let filtered = type === "all"
    ? allResources
    : allResources.filter((item) => item.type === type);

  // Filter by category
  if (category !== "all") {
    filtered = filtered.filter(
      (item) => item.category === category
    );
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
