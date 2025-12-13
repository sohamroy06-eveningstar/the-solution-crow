export default function Hero() {
  return (
    <section className="min-h-screen pt-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Like a{" "}
            <span className="bg-[var(--color-primary)] px-2">Crow</span>
            <br />
            We Never Miss the Details.
          </h1>

          <p className="mt-6 text-white/70 max-w-lg">
            Every idea deserves to soar. We transform concepts into scalable
            digital products.
          </p>

          <button className="mt-8 px-6 py-3 rounded bg-[var(--color-primary)] shadow-lg">
            Explore Now
          </button>
        </div>

        <div className="hidden md:block relative">
          <img
            src="/crow-hero.png"
            alt="Crow"
            className="absolute right-0 max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
