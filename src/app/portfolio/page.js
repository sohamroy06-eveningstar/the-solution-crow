import Link from "next/link";
import { projects } from "@/data/constants";
import PortfolioCard from "@/Components/PortfolioCard";
export default function PortfolioPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      
      <h1 className="text-4xl font-bold bg-[#940200] rounded-full align-middle items-center text-center">Portfolio</h1>

      {/* PROJECTS */}
      <section className="grid md:grid-cols-3 gap-8">
        {projects.map(project => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </section>

      {/* SKILLS */}
     

      {/* EXPERIENCE */}
      

    </main>
  );
}
