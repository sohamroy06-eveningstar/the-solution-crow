import PortfolioCard from "./PortfolioCard";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Website Development",
    image: "/portfolio/ecommerce.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    image: "/portfolio/saas.jpg",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Application",
    image: "/portfolio/mobile.jpg",
  },
  {
    title: "Cloud Migration System",
    category: "Cloud & DevOps",
    image: "/portfolio/cloud.jpg",
  },
  {
    title: "AI Analytics Tool",
    category: "AI & Data",
    image: "/portfolio/ai.jpg",
  },
  {
    title: "Corporate Website",
    category: "Website Development",
    image: "/portfolio/corporate.jpg",
  },
];

export default function PortfolioGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <PortfolioCard key={index} project={project} />
      ))}
    </div>
  );
}
