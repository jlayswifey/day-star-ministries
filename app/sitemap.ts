import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://day-star-ministries.vercel.app";
  const routes = ["","/im-new","/watch","/connect","/ministries","/events","/prayer","/stories","/community-care","/skills-service","/across-borders","/give"];
  return routes.map(route => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
