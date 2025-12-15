export default function AboutProcess() {
  return (
    <section
      className="py-28 px-6 bg-black"
      aria-labelledby="process-title"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <header className="text-center mb-24">
          <h2
            id="process-title"
            className="text-3xl md:text-4xl font-semibold text-white mb-4"
          >
            The Crow’s Process — From {" "}
            <span className="relative inline-block">
              Vision to Execution
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#940200]" />
            </span>
          </h2>

          <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-base">
            Every project follows a strategy that’s as precise as a crow’s
            flight path — smart, focused, and flawless. Here’s how we bring
            your idea to life.
          </p>
        </header>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <ProcessCard
            observation
            title="OBSERVATION"
            subtitle="Understanding the Terrain"
            text="We begin by deeply observing your goals, market, and audience — identifying patterns others miss. Like a crow, we study every angle before moving."
          />

          <ProcessCard
            title="STRATEGY"
            subtitle="Plotting the Perfect Path"
            text="Our team crafts a detailed roadmap defining purpose, timeline, and technology. Every decision is guided by precision and efficiency."
          />

          <ProcessCard
            title="DESIGN"
            subtitle="Crafting the Vision"
            text="We transform ideas into immersive, user-focused designs. Every pixel and interaction is crafted to be memorable and meaningful."
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ProcessCard
            title="DEVELOPMENT"
            subtitle="Bringing Ideas to Life"
            text="With clean code and smart engineering, we build scalable digital solutions optimized for performance and future growth."
          />

          <ProcessCard
            title="TESTING & LAUNCH"
            subtitle="Precision in Every Pixel"
            text="Before launch, we test everything thoroughly. Once perfected, your product takes flight across platforms and devices."
          />
        </div>

      </div>
    </section>
  );
}

/* ---------------- PROCESS CARD ---------------- */

function ProcessCard({ title, subtitle, text, observation }) {
  return (
    <article
      className={`
        relative p-8 text-center
        rounded-2xl border
        overflow-hidden
        ${
          observation
            ? "bg-[#0f1b17] border-[#7c3aed]"
            : "bg-[#940200] border-[#7c3aed]"
        }
      `}
    >
      {/* BACKGROUND IMAGE — ONLY OBSERVATION */}
      {observation && (
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundImage: "url('/observation-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* DARK OVERLAY — ONLY OBSERVATION */}
      {observation && (
        <div className="absolute inset-0 bg-black/80 rounded-2xl" />
      )}

      {/* PURPLE GLOW */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: "0 0 40px rgba(124,58,237,0.35)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <h3 className="text-4xl font-semibold text-white mb-1">
          {title}
        </h3>

        <p className=" text-white mb-4">
          {subtitle}
        </p>

        <p className=" text-white leading-relaxed">
          {text}
        </p>
      </div>
    </article>
  );
}
