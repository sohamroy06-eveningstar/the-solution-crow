import Link from "next/link";

export default function PortfolioCard({ project }) {
  return (
    <div
      className="
        group relative
        rounded-xl
        border border-[#940200]/40
        p-6
        bg-black
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-[#940200]
        hover:from-[#940200]/40
       
        hover:shadow-[0_0_45px_rgba(148,2,0,0.65)]
      "
    >
      {/* SOFT RED AMBIENT GLOW (always visible) */}
      <div
        className="
          absolute inset-0 rounded-xl
          bg-[#940200]/20
          blur-xl
          opacity-60
          -z-10
        "
      />

      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="text-gray-200 mt-2">
        {project.description}
      </p>

      {/* TECHNOLOGIES */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies?.map((tech, i) => (
          <span
            key={i}
            className="
              text-xs px-3 py-1 rounded-full
              bg-black/40
              border border-[#940200]/40
              text-white/90
              transition-all
              group-hover:bg-[#940200]/30
              group-hover:border-[#940200]
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* LINKS */}
      <div className="mt-4 flex gap-4 text-sm">
        <Link
          href={`/portfolio/${project.id}`}
          className="text-white font-medium hover:underline"
        >
          View Details →
        </Link>

        {project.yt_url?.length > 0 && (
          <a
            href={project.yt_url[0]}
            target="_blank"
            className="text-gray-300 hover:text-white hover:underline"
          >
            Watch Demo
          </a>
        )}
      </div>
    </div>
  );
}
