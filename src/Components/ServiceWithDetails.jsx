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
  Megaphone,
  X,
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
    short: "Mobile Application Development",
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
    short: "Cloud Hosting",
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
    short: "Cloud Migration",
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
    short: "Data Analysis",
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
    short: "Software Consultancy",
    icon: Cpu,
    description: [
      "Expert guidance for architecture, scalability, and tech decisions.",
    ],
    cta: "Consult Experts",
  },
  {
    id: "devops",
    title: "Devops Services",
    short: "Devops Services",
    icon: GitBranch,
    description: [
      "CI/CD pipelines, automation, and infrastructure optimization.",
    ],
    cta: "Optimize DevOps",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    short: "Digital Marketing",
    icon: Megaphone,
    description: [
      "Result-driven digital marketing strategies focused on growth, visibility, and conversions.",
      "SEO, paid ads, content marketing, and performance tracking.",
      "ROI-focused campaigns backed by analytics.",
    ],
    cta: "Grow Your Brand",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function ServicesWithDetails() {
  const [active, setActive] = useState(services[0]);
  const [mobilePopup, setMobilePopup] = useState(null);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const handleChange = (service) => {
    if (isMobile) {
      setMobilePopup(service);
      return;
    }
    if (service.id === active.id) return;
    setActive(service);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="flex justify-center mb-6">
          <span className="bg-[#940200] px-6 py-2 rounded-full font-semibold">
            Transform Your Idea into Reality
          </span>
        </div>

        <h2 className="text-center text-3xl font-semibold mb-14">
          In-Demand{" "}
          <span className="relative inline-block">
            Services
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#940200]" />
          </span>
        </h2>

        {/* SERVICE BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              active={active.id === service.id}
              onClick={() => handleChange(service)}
            />
          ))}
        </div>

        {/* DESKTOP DETAILS */}
        <div className="hidden md:block relative overflow-hidden min-h-[520px]">

          <div
            className="absolute inset-0 bg-no-repeat bg-top bg-contain pointer-events-none"
            style={{ backgroundImage: "url('/crow-bg.png')" }}
          />

          <div className="relative z-10 grid grid-cols-2 gap-12 items-start pt-24">
            <div />

            {/* ✅ ONLY FIX: content aligned slightly right */}
            <div className="max-w-xl translate-x-[24px]">
              <h2 className="text-5xl font-bold mb-6">
                {active.title}
              </h2>

              <div className="space-y-4">
                {active.description.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-6 justify-end">
                <button className="bg-[#940200] px-6 py-3 rounded font-semibold">
                  {active.cta}
                </button>
                <span className="text-[#940200] font-bold">★ 4.8</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE POPUP — UNCHANGED */}
        {mobilePopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 md:hidden">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10">

              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: "url('/crow-bg.png')" }}
              />
              <div className="absolute inset-0 bg-black/85" />

              <div className="relative z-10 p-6">
                <button
                  onClick={() => setMobilePopup(null)}
                  className="absolute right-4 top-4 text-white/70 hover:text-white"
                >
                  <X />
                </button>

                <h3 className="text-2xl font-bold mb-4">
                  {mobilePopup.title}
                </h3>

                <div className="space-y-3 text-sm text-white">
                  {mobilePopup.description.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>

                <button className="mt-6 w-full bg-[#940200] py-3 rounded font-semibold">
                  {mobilePopup.cta}
                </button>
              </div>
            </div>
          </div>
        )}

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
        rounded-xl border text-left transition-all duration-300
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
