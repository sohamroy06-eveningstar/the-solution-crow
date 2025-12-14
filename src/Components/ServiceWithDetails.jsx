"use client";

import { useState } from "react";
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

/* ---------------- DATA ---------------- */

const services = [
  {
    id: "website",
    title: "Website Development",
    short: "Website Development",
    icon: Globe,
    description: [
      "We create websites that are not just visually stunning, but strategically built to drive conversions and engagement.",
      "Every design we craft is responsive, SEO-friendly, and optimized for speed.",
      "Your website isn’t just your online identity — it’s your digital growth engine.",
    ],
    cta: "Get Your Website Now",
  },
  {
    id: "webapp",
    title: "Webapp Development",
    short: "Webapp Development",
    icon: Layers,
    description: [
      "We build scalable web applications with modern architectures and clean UX.",
      "Optimized for performance, security, and long-term growth.",
    ],
    cta: "Build Your Web App",
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    short: "Mobile application development",
    icon: Smartphone,
    description: [
      "High-performance mobile apps for Android and iOS platforms.",
      "Built with scalability, speed, and seamless user experience in mind.",
    ],
    cta: "Launch Your App",
  },
  {
    id: "cloud",
    title: "Cloud Hosting",
    short: "Cloud hosting",
    icon: Cloud,
    description: [
      "Secure, scalable, and cost-effective cloud hosting solutions.",
      "High availability with enterprise-grade infrastructure.",
    ],
    cta: "Host on Cloud",
  },
  {
    id: "migration",
    title: "Cloud Migration",
    short: "Cloud migration",
    icon: ArrowRightLeft,
    description: [
      "Seamless migration of applications and data to the cloud.",
      "Zero downtime and optimized cost strategy.",
    ],
    cta: "Migrate Now",
  },
  {
    id: "ai",
    title: "ML and AI",
    short: "ML and AI",
    icon: Brain,
    description: [
      "AI-powered solutions to automate, predict, and optimize.",
      "Data-driven intelligence for business growth.",
    ],
    cta: "Explore AI Solutions",
  },
  {
    id: "data",
    title: "Data Analysis",
    short: "Data analysis",
    icon: BarChart,
    description: [
      "Turn raw data into actionable insights.",
      "Advanced analytics for smarter decisions.",
    ],
    cta: "Analyze Data",
  },
  {
    id: "consulting",
    title: "Software Consultancy",
    short: "Software consultancy",
    icon: Cpu,
    description: [
      "Expert guidance for architecture, scalability, and tech decisions.",
    ],
    cta: "Consult Experts",
  },
  {
    id: "devops",
    title: "Devops Services",
    short: "Devops services",
    icon: GitBranch,
    description: [
      "CI/CD pipelines, automation, and infrastructure optimization.",
    ],
    cta: "Optimize DevOps",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function ServicesWithDetails() {
  const [active, setActive] = useState(services[0]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

{/* Heading */}
  <div className="flex justify-center mb-6">
        <span className="bg-[#940200] px-6 py-2 rounded-full font-semibold">
          Transform Your Idea into Reality
        </span>
      </div>
       <h2 className="text-center text-3xl font-semibold mb-14">
  In-Demand{" "}
  <span className="relative inline-block text-white">
    Services
    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#940200]"></span>
  </span>
</h2>


        {/* ---------- SERVICES GRID ---------- */}
        <div className="flex flex-col gap-6 mb-24">

          {/* ROW 1 */}
          <div className="flex justify-center gap-6 flex-wrap">
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                active={active.id === service.id}
                onClick={() => setActive(service)}
              />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex justify-center gap-6 flex-wrap">
            {services.slice(3, 7).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                active={active.id === service.id}
                onClick={() => setActive(service)}
              />
            ))}
          </div>

          {/* ROW 3 */}
          <div className="flex justify-center gap-6 flex-wrap">
            {services.slice(7).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                active={active.id === service.id}
                onClick={() => setActive(service)}
              />
            ))}
          </div>
        </div>
   {/* ---------- DYNAMIC DETAILS (BACKGROUND IMAGE – EXACT MATCH) ---------- */}
<section
  className="
    relative overflow-hidden
    py-24 md:py-32
    bg-black
  "
  aria-labelledby="service-title"
>
  {/* BACKGROUND IMAGE (LEFT) */}
  <div
    className="
      absolute inset-0
      bg-no-repeat bg-left bg-contain
    "
    style={{
      backgroundImage: "url('/crow-bg.png')",
      backgroundPosition: "left center",
    }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* RED GRADIENT (RIGHT SIDE) */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-l
      from-[#940200]/40
      via-transparent
      to-transparent
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* EMPTY LEFT (IMAGE SPACE) */}
    <div />

    {/* RIGHT TEXT */}
    <div className="max-w-xl text-center md:text-left">
      <h2
        id="service-title"
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        {active.title}
      </h2>

      <div className="space-y-4 text-white/70 text-sm md:text-base">
        {active.description.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
        <button className="bg-[#940200] px-6 py-3 rounded font-semibold">
          {active.cta}
        </button>

        <span className="text-[#940200] font-bold">
          ★ 4.8
        </span>
      </div>
    </div>

  </div>
</section>




        </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function ServiceCard({ service, active, onClick }) {
  const Icon = service.icon;

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-4 px-6 py-4 w-[280px]
        rounded-xl border text-left
        transition-all duration-300
        ${
          active
            ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(225,6,0,0.25)]"
            : "bg-black border-white/10 hover:border-white/30"
        }
      `}
    >
      <Icon className="text-[#940200]" />
      <span className="font-semibold">{service.short}</span>
    </button>
  );
}
