import { blogs } from "@/data/blog";
import { notFound } from "next/navigation";
import BackToBlog from "@/Components/BackToBlog";

/* ================= SEO ================= */
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ MUST AWAIT

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

/* ================= PAGE ================= */
export default async function BlogDetails({ params }) {
  const { slug } = await params; // ✅ MUST AWAIT

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 pt-0 pb-16">
      <BackToBlog />

      <article className="space-y-8">
        <h1 className="text-4xl font-bold">
          {blog.title}
        </h1>

        <h4 className="text-gray-400">
          {blog.description}
        </h4>

        <div className="prose prose-invert max-w-none">
          {blog.content
            .trim()
            .split("\n")
            .map((para, i) => (
              <h5 key={i}>{para}</h5>
            ))}
        </div>
      </article>
    </main>
  );
}
