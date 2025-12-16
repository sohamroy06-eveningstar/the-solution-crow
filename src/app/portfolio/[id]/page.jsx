import { projects } from "@/data/constants";
import { notFound } from "next/navigation";
import ImageGallery from "@/Components/ImageGallery";
import BackToPortfolio from "@/Components/BackToPortfolio";


export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = projects.find(p => p.id === Number(id));
  if (!project) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">

      {/* back button */}

      <BackToPortfolio/>

      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-gray-400">{project.description}</p>

      {/* TECHNOLOGIES */}
      <div className="flex flex-wrap gap-2">
        {project.technologies?.map(t => (
          <span key={t} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>

      {/* IMAGE GALLERY */}
      {project.overview && <ImageGallery overview={project.overview} />}
      

      {/* YOUTUBE */}
      {project.yt_url?.map(url => (
        <iframe
          key={url}
          src={url}
          className="w-full aspect-video rounded-xl"
          allowFullScreen
        />
      ))}

    </main>
  );
}
