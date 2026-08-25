import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Auruby",
  description:
    "Notes on learning Finnish, preparing for YKI keskitaso and learning languages — by Anna Akimova.",
  alternates: { canonical: "/finnish/blog" },
  openGraph: {
    title: "Blog — Auruby",
    description:
      "Notes on learning Finnish, preparing for YKI keskitaso and learning languages — by Anna Akimova.",
    type: "website",
    url: "/finnish/blog",
    siteName: "Auruby",
  },
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Nav />

      <section className="px-6 pt-16 pb-20 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="font-display text-[34px] font-semibold text-anthracite sm:text-[42px]">
              Blog
            </h1>
            <p className="mt-4 font-sans text-[16px] leading-relaxed text-anthracite-soft">
              Notes on learning Finnish, preparing for YKI keskitaso, and
              teaching languages.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-10">
            {posts.map((post) => (
              <FadeIn as="article" key={post.slug}>
                <a href={`/finnish/blog/${post.slug}`} className="group block">
                  <h2 className="font-display text-[22px] font-semibold text-anthracite transition group-hover:text-purple sm:text-[24px]">
                    {post.title}
                  </h2>
                  <p className="mt-1 font-sans text-[14px] text-anthracite-muted">
                    {formatDate(post.date)} · {post.readingTime}
                  </p>
                  <p className="mt-3 font-sans text-[16px] leading-relaxed text-anthracite-soft">
                    {post.description}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
