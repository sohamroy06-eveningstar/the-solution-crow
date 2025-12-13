import PortfolioGrid from "@/Components/PortfolioGrid";

export const metadata = {
  title: "Portfolio | Solution Crow",
  description:
    "Explore our portfolio of websites, web apps, cloud solutions, and AI projects.",
};

export default function PortfolioPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold mb-16">
          Our{" "}
          <span className="relative inline-block">
            Portfolio
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-white"></span>
          </span>
        </h1>

        {/* Grid */}
        <PortfolioGrid />
      </div>
    </section>
  );
}
