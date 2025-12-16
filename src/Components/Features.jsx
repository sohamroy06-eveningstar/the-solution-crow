export default function Features() {
  return (
    <section
      className="
        pt-6 pb-20           /* 🔹 MOBILE: reduced top padding */
        md:pt-20 md:pb-20   /* 🔹 DESKTOP: unchanged */
      "
    >
      <h2 className="text-center text-3xl font-bold mb-12">
        Why Leading Businesses Choose{" "}
        <span className="relative inline-block">
          The Solution Crow
          <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#940200]" />
        </span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="
              bg-[var(--color-card)]
              border border-white/10
              rounded-4xl
              aspect-square
              p-8
              text-center
              flex flex-col justify-center
              hover:scale-[1.02]
              transition
            "
          >
            <h3 className="text-5xl font-bold text-[#940200]">45%</h3>
            <p className="mt-2 text-4xl">Cost Efficiency</p>
            <p className="text-sm text-white mt-4">
              Reduce operational costs with automation and optimization.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
