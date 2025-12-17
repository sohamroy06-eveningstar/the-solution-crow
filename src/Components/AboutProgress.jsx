"use client";

import { ArrowRight, ArrowDown } from "lucide-react";

export default function AboutProcess() {
  return (
    <section
      className="pt-0 pb-20 md:pb-28 px-6 bg-black"
      aria-labelledby="process-title"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <header className="text-center mb-12 md:mb-24">
          <h2
            id="process-title"
            className="text-3xl md:text-4xl font-semibold text-white mb-4"
          >
            The Crow’s Process — From{" "}
            <span className="relative inline-block">
              Vision to Execution
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#940200]" />
            </span>
          </h2>

          <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-base">
            Every project follows a strategy that’s as precise as a crow’s
            flight path — smart, focused, and flawless.
          </p>
        </header>

        {/* ================= TOP ROW ================= */}

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-[320px_60px_320px_60px_320px] items-center justify-center mb-24">
          <ProcessCard
            observation
            title="OBSERVATION"
            subtitle="Understanding the Terrain"
            text="We begin by deeply observing your goals, market, and audience — identifying patterns others miss."
          />

          <ArrowRight className="mx-auto text-white w-4 h-4" />

          <ProcessCard
            title="STRATEGY"
            subtitle="Plotting the Perfect Path"
            text="Our team crafts a detailed roadmap defining purpose, timeline, and technology."
          />

          <ArrowRight className="mx-auto text-white w-4 h-4" />

          <ProcessCard
            title="DESIGN"
            subtitle="Crafting the Vision"
            text="We transform ideas into immersive, user-focused designs."
          />
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col items-center gap-8 mb-12">
          <ProcessCard
            observation
            title="OBSERVATION"
            subtitle="Understanding the Terrain"
            text="We begin by deeply observing your goals, market, and audience — identifying patterns others miss."
          />

          <ArrowDown className="text-white w-4 h-4" />

          <ProcessCard
            title="STRATEGY"
            subtitle="Plotting the Perfect Path"
            text="Our team crafts a detailed roadmap defining purpose, timeline, and technology."
          />

          <ArrowDown className="text-white w-4 h-4" />

          <ProcessCard
            title="DESIGN"
            subtitle="Crafting the Vision"
            text="We transform ideas into immersive, user-focused designs."
          />

          {/* ✅ MISSING ARROW — ADDED HERE */}
          <ArrowDown className="text-white w-4 h-4" />
        </div>

        {/* ================= BOTTOM ROW ================= */}

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-[320px_60px_320px] items-center justify-center">
          <ProcessCard
            title="DEVELOPMENT"
            subtitle="Bringing Ideas to Life"
            text="With clean code and smart engineering, we build scalable digital solutions optimized for performance."
          />

          <ArrowRight className="mx-auto text-white w-4 h-4" />

          <ProcessCard
            title="TESTING & LAUNCH"
            subtitle="Precision in Every Pixel"
            text="Before launch, we test everything thoroughly. Once perfected, your product takes flight."
          />
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <ProcessCard
            title="DEVELOPMENT"
            subtitle="Bringing Ideas to Life"
            text="With clean code and smart engineering, we build scalable digital solutions optimized for performance."
          />

          <ArrowDown className="text-white w-4 h-4" />

          <ProcessCard
            title="TESTING & LAUNCH"
            subtitle="Precision in Every Pixel"
            text="Before launch, we test everything thoroughly. Once perfected, your product takes flight."
          />
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */

function ProcessCard({ title, subtitle, text, observation }) {
  return (
    <article
      className={`
        relative
        aspect-square
        w-[320px] h-[320px]
        p-8
        flex flex-col justify-center
        text-center
        rounded-2xl
        border
        overflow-hidden
        ${
          observation
            ? "bg-[#0f1b17] border-[#7c3aed]"
            : "bg-[#940200] border-[#7c3aed]"
        }
      `}
    >
      {observation && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/observation-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </>
      )}

      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: "0 0 40px rgba(124,58,237,0.35)" }}
      />

      <div className="relative z-10">
        <h3 className="text-4xl font-semibold text-white mb-1">
          {title}
        </h3>
        <p className="text-white mb-4">{subtitle}</p>
        <p className="text-white leading-relaxed">{text}</p>
      </div>
    </article>
  );
}
