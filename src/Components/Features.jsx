export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold mb-12">
        Why Leading Businesses Choose The Solution Crow
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[var(--color-card)] border border-white/10 rounded-xl p-8 text-center hover:scale-[1.02] transition"
          >
            <h3 className="text-4xl font-bold text-[var(--color-primary)]">
              45%
            </h3>
            <p className="mt-2 font-semibold">Cost Efficiency</p>
            <p className="text-sm text-white/60 mt-4">
              Reduce operational costs with automation and optimization.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
