import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Single-page landing site — one canonical URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
