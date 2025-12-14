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
            The Crow’s Process — From Vision to{" "}
            <span className="relative inline-block">
              Execution
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

/* ---------------- SHARED SHAPE ---------------- */

const PROCESS_SHAPE =
  "polygon(6% 0%, 94% 0%, 100% 18%, 88% 100%, 12% 100%, 0% 18%)";

const PURPLE = "#7c3aed";

/* ---------------- PROCESS CARD ---------------- */

function ProcessCard({ title, subtitle, text, observation }) {
  return (
    <article
      className="relative p-8 text-center border overflow-hidden"
      style={{
        clipPath: PROCESS_SHAPE,
        borderColor: PURPLE,
        backgroundColor: observation ? "#0f1b17" : "#940200",
      }}
    >
      {/* BACKGROUND IMAGE — ONLY OBSERVATION */}
      {observation && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/observation-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: PROCESS_SHAPE,
          }}
        />
      )}

      {/* DARK OVERLAY — ONLY OBSERVATION */}
      {observation && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,27,23,0.85), rgba(15,27,23,0.95))",
            clipPath: PROCESS_SHAPE,
          }}
        />
      )}

      {/* PURPLE GLOW — ALL CARDS */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: PROCESS_SHAPE,
          boxShadow: "0 0 55px rgba(124,58,237,0.35)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-white mb-1">
          {title}
        </h3>

        <p className="text-sm text-white/60 mb-4">
          {subtitle}
        </p>

        <p className="text-sm text-white/70 leading-relaxed">
          {text}
        </p>
      </div>
    </article>
  );
}
