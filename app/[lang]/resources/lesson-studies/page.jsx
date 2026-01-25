import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ResourcesClient from "../ResourcesClient";

export default function LessonsPage({ params }) {
  const { lang } = params;

  const baseDir = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "resources",
    "lesson-studies"
  );

  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith(".md"));

  const results = files.map((file) => {
    const slug = file.replace(".md", "");
    const filePath = path.join(baseDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      type: "lesson",
      slug,
      title: data.title,
      description: data.description || "",
      date: data.date || "",
      category: data.category || "general",
    };
  });

  return (
    <ResourcesClient
      lang={lang}
      initialResources={results}
      currentType="lesson"
    />
  );
}
