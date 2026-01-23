export default function sitemap() {
  const baseUrl = "https://klfministries.org";

  const routes = [
    "",
    "/about",
    "/books",
    "/videos",
    "/contact",
  ];

  const languages = ["en", "es"];

  const pages = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      pages.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
          },
        },
      });
    });
  });

  return pages;
}
