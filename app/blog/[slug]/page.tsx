import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Auruby`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      siteName: SITE_NAME,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: ["Anna Akimova"],
    },
  };
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: { "@id": `${SITE_URL}/#anna` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <main>
      <Nav />

      <section className="px-6 pt-16 pb-20 sm:pt-20">
        <div className="mx-auto max-w-[700px]">
          <FadeIn>
            <h1 className="font-display text-[32px] font-semibold text-anthracite sm:text-[40px]">
              {post.title}
            </h1>
            <p className="mt-3 font-sans text-[14px] text-anthracite-muted">
              {formatDate(post.date)}
              {post.updated !== post.date &&
                ` · updated ${formatDate(post.updated)}`}
              {" · "}
              {post.readingTime}
            </p>
            <p className="mt-1 font-sans text-[14px] text-anthracite-muted">
              By Anna Akimova
            </p>

            <div className="prose prose-auruby mt-10">
              <MDXRemote source={post.content} />
            </div>
          </FadeIn>

          <a
            href="/blog"
            className="mt-12 inline-block font-sans text-[15px] text-purple underline underline-offset-2 transition hover:text-purple-deep"
          >
            ← Back to blog
          </a>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
    </main>
  );
}
