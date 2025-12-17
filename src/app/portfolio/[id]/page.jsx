import { projects } from "@/data/constants";
import { notFound } from "next/navigation";
import ImageGallery from "@/Components/ImageGallery";
import BackToPortfolio from "@/Components/BackToPortfolio";

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 pt-0 pb-16">
      <BackToPortfolio />

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block space-y-10">
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <p className="text-gray-400">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {project.overview && <ImageGallery overview={project.overview} />}

        {project.yt_url?.map((url) => (
          <iframe
            key={url}
            src={url}
            className="w-full aspect-video rounded-xl"
            allowFullScreen
          />
        ))}
      </div>

      {/* ================= MOBILE ONLY ================= */}
      <div className="md:hidden space-y-10">
        {project.overview?.map((img, i) => (
          <div key={i} className="space-y-6">
            {/* IMAGE */}
            <ImageGallery overview={[img]} />

            {/* DESCRIPTION */}
            <p className="text-gray-400">{project.description}</p>

            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white" />
          </div>
        ))}

        {/* VIDEOS AT END (MOBILE) */}
        {project.yt_url?.map((url) => (
          <iframe
            key={url}
            src={url}
            className="w-full aspect-video rounded-xl"
            allowFullScreen
          />
        ))}
      </div>
    </main>
  );
}
