import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaSalesforce,
} from "react-icons/fa";
import {
  SiSvelte,
  SiDjango,
  SiFlask,
  SiExpress,
  SiKubernetes,
  SiGooglecloud,
  SiFlutter,
  SiOpenai,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const Row = ({ label, items }) => (
  <div className="flex flex-wrap items-center gap-3">
    {/* LEFT LABEL */}
    <div className="min-w-[110px] flex items-center gap-2 text-sm text-white/70">
      <span>{label}</span>
      <span>→</span>
    </div>

    {/* PILLS */}
    {items.map(({ name, icon: Icon, color }, i) => (
      <div
        key={i}
        className="
          flex items-center gap-2
          px-4 py-2 rounded-lg
          bg-[#2a2233]/80
          border border-white/10
          text-sm font-medium text-white
        "
      >
        {Icon && (
          <Icon
            className="text-[16px]"
            style={{ color }}
          />
        )}
        <span>{name}</span>
      </div>
    ))}
  </div>
);

export default function TechStack() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">
            We Create applications using below{" "}
            <span className="relative inline-block">
              Technologies
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#940200]" />
            </span>
          </h2>
        </div>

        {/* CONTAINER (BACKGROUND IMAGE INSIDE BORDER) */}
        <div
          className="
            rounded-3xl
            border border-white/15
            p-8 space-y-6
            bg-no-repeat bg-center bg-cover
          "
          style={{ backgroundImage: "url('/techstack-bg.png')" }}
        >

          <Row
            label="Frontend"
            items={[
              { name: "React", icon: FaReact, color: "#61DAFB" },
              { name: "Angular", icon: FaAngular, color: "#DD0031" },
              { name: "SvelteKit", icon: SiSvelte, color: "#FF3E00" },
            ]}
          />

          <Row
            label="Backend"
            items={[
              { name: "Python", icon: FaPython, color: "#3776AB" },
              { name: "Django", icon: SiDjango, color: "#0C4B33" },
              { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
              { name: "Node Js", icon: FaNodeJs, color: "#339933" },
              { name: "Express", icon: SiExpress, color: "#FFFFFF" },
            ]}
          />

          <Row
            label="Cloud"
            items={[
              { name: "Devops", icon: FaDocker, color: "#2496ED" },
              { name: "AWS", icon: FaAws, color: "#FF9900" },
              { name: "Azure", icon: TbBrandAzure, color: "#0078D4" },
              { name: "Docker", icon: FaDocker, color: "#2496ED" },
              { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
              { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
            ]}
          />

          <Row
            label="Mobile"
            items={[
              { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            ]}
          />

          <Row
            label="AI/ML"
            items={[
              { name: "Qwen 3" },
              { name: "LLaMA 4" },
              { name: "OpenAI", icon: SiOpenai, color: "#FFFFFF" },
              { name: "Gemini" },
              { name: "Kimi K2" },
            ]}
          />

          <Row
            label="CRM"
            items={[
              { name: "Salesforce", icon: FaSalesforce, color: "#00A1E0" },
            ]}
          />

        </div>
      </div>
    </section>
  );
}
