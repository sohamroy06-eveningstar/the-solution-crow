"use client";
import {
  Globe,
  Layers,
  Smartphone,
  Cloud,
  ArrowRightLeft,
  Brain,
  BarChart,
  Cpu,
  GitBranch,
} from "lucide-react";


const Card = ({ icon: Icon, title, active }) => (
  <div
    className={`flex items-center gap-4 px-6 py-4 w-[280px] rounded-xl border
    ${
      active
        ? "bg-white/10 border-white/20 glow-red"
        : "bg-black border-white/10"
    }`}
  >
    <Icon className="text-[var(--color-primary)]" />
    <span className="font-semibold">{title}</span>
  </div>
);

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="flex justify-center mb-6">
        <span className="bg-[var(--color-primary)] px-6 py-2 rounded-full font-semibold">
          Transform Your Idea into Reality
        </span>
      </div>

     <h2 className="text-center text-3xl font-semibold mb-14">
  In-Demand{" "}
  <span className="relative inline-block text-white">
    Services
    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[var(--color-primary)]"></span>
  </span>
</h2>


      <div className="flex flex-col items-center gap-6">
        <div className="flex justify-center gap-6 flex-wrap">
          <Card icon={Globe} title="Website Development" active />
          <Card icon={Layers} title="Webapp Development" />
          <Card icon={Smartphone} title="Mobile application development" />
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <Card icon={Cloud} title="Cloud hosting" />
          <Card icon={ArrowRightLeft} title="Cloud migration" />
          <Card icon={Brain} title="ML and AI" />
          <Card icon={BarChart} title="Data analysis" />
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <Card icon={Cpu} title="Software consultancy" />
          <Card icon={GitBranch} title="Devops services" />
          <Card icon={Layers} title="Cross platform integration" />
        </div>
      </div>
    </section>
  );
}
