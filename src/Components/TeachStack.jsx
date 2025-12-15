import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaAndroid,
  FaHubspot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiFastapi,
  SiGo,
  SiDigitalocean,
  SiGooglecloud,
  SiHeroku,
  SiFlutter,
  SiOpenai,
  SiTerraform,
  SiAnsible,
  SiKubernetes,
  SiJenkins,
  SiPostman,
  SiSelenium,
  SiElasticsearch,
  SiApache,
  SiSentry,
} from "react-icons/si";

/* ---------------- ROW ---------------- */

const Row = ({ label, items }) => (
  <div className="flex items-start gap-3">
    {/* LABEL */}
    <div className="min-w-[120px] shrink-0 flex items-center gap-2 text-sm text-white/70">
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </div>

    {/* PILLS WRAPPER (RESPONSIVE FIX) */}
    <div className="flex flex-wrap gap-3">
      {items.map(({ name, icon: Icon, color }, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-[#2a2233]/80 border border-white/10
                     text-sm font-medium text-white"
        >
          <Icon className="text-[16px]" style={{ color }} aria-hidden="true" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ---------------- MAIN ---------------- */

export default function TechStack() {
  return (
    <section
      className="py-24 px-6"
      aria-labelledby="techstack-title"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <header className="text-center mb-8">
          <h2
            id="techstack-title"
            className="text-3xl font-semibold text-white"
          >
            We Create applications using below{" "}
            <span className="relative inline-block">
              Technologies
              <span
                className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#940200]"
                aria-hidden="true"
              />
            </span>
          </h2>
        </header>

        {/* CONTAINER */}
        <div
          className="rounded-3xl border border-white/15 p-8 space-y-6
                     bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/techstack-bg.png')" }}
        >

          <Row
            label="Frontend"
            items={[
              { name: "React", icon: FaReact, color: "#61DAFB" },
              { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
              { name: "HTML", icon: FaHtml5, color: "#E34F26" },
              { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
              { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            ]}
          />

          <Row
            label="Backend"
            items={[
              { name: "Django", icon: SiDjango, color: "#0C4B33" },
              { name: "FastAPI", icon: SiFastapi, color: "#009688" },
              { name: "Go", icon: SiGo, color: "#00ADD8" },
            ]}
          />

          <Row
            label="Cloud"
            items={[
              { name: "AWS", icon: FaAws, color: "#FF9900" },
              { name: "DigitalOcean", icon: SiDigitalocean, color: "#0080FF" },
              { name: "Bluehost", icon: FaAws, color: "#009AFF" },
              { name: "Heroku", icon: SiHeroku, color: "#430098" },
              { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
            ]}
          />

          <Row
            label="DevOps"
            items={[
              { name: "Docker", icon: FaDocker, color: "#2496ED" },
              { name: "CI/CD", icon: SiJenkins, color: "#D24939" },
              { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
              { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
              { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
              { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
              { name: "GitLab", icon: FaGitlab, color: "#FC6D26" },
              { name: "Bitbucket", icon: FaBitbucket, color: "#2684FF" },
              { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
            ]}
          />

          <Row
            label="Mobile"
            items={[
              { name: "Flutter", icon: SiFlutter, color: "#02569B" },
              { name: "Android Native", icon: FaAndroid, color: "#3DDC84" },
            ]}
          />

          <Row
            label="AI / ML"
            items={[
              { name: "Ollama", icon: SiOpenai, color: "#FFFFFF" },
              { name: "OpenAI", icon: SiOpenai, color: "#FFFFFF" },
              { name: "Cloud AI", icon: SiGooglecloud, color: "#4285F4" },
              { name: "Gemini", icon: SiGooglecloud, color: "#4285F4" },
              { name: "CrowLM", icon: SiOpenai, color: "#940200" },
            ]}
          />

          <Row
            label="CRM"
            items={[
              { name: "HubSpot", icon: FaHubspot, color: "#FF7A59" },
              { name: "Crow CRM", icon: FaHubspot, color: "#940200" },
            ]}
          />

          <Row
            label="Testing"
            items={[
              { name: "Postman", icon: SiPostman, color: "#FF6C37" },
              { name: "BrowserStack", icon: SiGooglecloud, color: "#F7A600" },
              { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
            ]}
          />

          <Row
            label="Others"
            items={[
              { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
              { name: "Apache Solr", icon: SiApache, color: "#D22128" },
              { name: "Sentry", icon: SiSentry, color: "#362D59" },
            ]}
          />

        </div>
      </div>
    </section>
  );
}
