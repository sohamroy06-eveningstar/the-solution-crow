import Link from "next/link";
import { blogs } from "@/data/blog";

export const metadata = {
  title: "Blog | Solution Crow",
  description: "Articles on web development, SEO, and technology",
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-0 pb-24 -mt-[64px]">

      {/* BLOG TITLE */}
      <h1 className="text-4xl font-bold mb-12 inline-block relative">
        Blog
        <span
          className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#940200]"
          aria-hidden="true"
        />
      </h1>

      {/* BLOG GRID */}
      <div className="grid gap-10 md:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="
              group
              border border-white/10
              rounded-xl
              p-6
              bg-black/60
              transition-all duration-300
              hover:border-[#940200]
              hover:shadow-[0_0_60px_rgba(148,2,0,0.45)]
            "
          >
            <h2 className="text-xl font-semibold mb-3 transition group-hover:text-[#940200]">
              {blog.title}
            </h2>

            <h4 className="text-white mb-6">
              {blog.description}
            </h4>

            <Link
              href={`/blog/${blog.slug}`}
              className="
                inline-flex items-center gap-1
                text-[#940200]
                font-semibold
                transition
                group-hover:gap-2
              "
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
