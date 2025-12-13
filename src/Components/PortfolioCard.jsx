export default function PortfolioCard({ project }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-white/10 bg-black">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-white/60 mb-2">
          {project.category}
        </p>

        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
