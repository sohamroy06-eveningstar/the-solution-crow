import Link from "next/link";
import { projects } from "@/data/constants";
import PortfolioCard from "@/Components/PortfolioCard";

export default function PortfolioPage() {
  return (
    <main className="bg-black min-h-screen">

      {/* ===== PAGE HEADER ===== */}
      <section
        className="
          max-w-7xl mx-auto px-6
          pt-0 pb-16
          -mt-[64px]   /* ✅ FIX: removes navbar gap (desktop + mobile) */
        "
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-left">
          Portfolio
        </h1>

        {/* underline */}
        <div className="mt-4 h-[3px] w-32 rounded-full bg-[#940200]" />

        <p className="mt-6 text-gray-400 max-w-2xl text-sm md:text-base">
          A selection of enterprise-grade projects showcasing scalable systems,
          cloud architecture, and real-world production impact.
        </p>
      </section>

      {/* ===== PROJECTS GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </main>
  );
}
