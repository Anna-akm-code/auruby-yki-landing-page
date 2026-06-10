import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Allow every crawler — including AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended, etc.). We explicitly do NOT disallow any user agent.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
