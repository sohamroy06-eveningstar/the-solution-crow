import Link from "next/link";

export default function PortfolioCard({ project }) {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        bg-gradient-to-br from-[#0c0c0c] via-black to-black
        border border-[#940200]/30
        p-7
        transition-all duration-300
        hover:-translate-y-2
        hover:border-[#940200]
        hover:shadow-[0_0_60px_rgba(148,2,0,0.45)]
      "
    >
      
      {/* glow overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-[#940200]/10 via-transparent to-transparent" />

      {/* content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.map((tech, i) => (
            <span
              key={i}
              className="
                text-[11px]
                px-3 py-1
                rounded-full
                border border-[#940200]/40
                text-[#ffb3b3]
                bg-[#940200]/10
              "
            >
              {tech}
            </span>
          ))}
        </div>

     {/* actions */}
<div className="flex gap-5 text-sm">
  {project.is_details_present && (
    <Link
      href={`/portfolio/${project.id}`}
      className="font-medium text-[#ff6b6b] hover:underline"
    >
      View Details →
    </Link>
  )}
</div>

      </div>
    </div>
  );
}
