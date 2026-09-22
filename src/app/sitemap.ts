import type { MetadataRoute } from "next";
import { research, projects } from "@/data/site";

const base = "https://tealcarbon.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/research", "/projects", "/impact", "/map", "/about", "/contact"];
  const dynamic = [
    ...research.map((r) => `/research/${r.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
  ];

  return [...staticRoutes, ...dynamic].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
