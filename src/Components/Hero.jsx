export default function Hero() {
  return (
    <section
      className="
        relative
        bg-black overflow-hidden
        md:min-h-[90vh]
        -mt-[64px]        /* ✅ FIX: removes navbar gap (mobile + desktop) */
      "
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0 bg-no-repeat bg-right
          top-0 md:top-[-100px]
        "
        style={{
          backgroundImage: "url('/crow-hero.png')",
          backgroundSize: "105%",
          backgroundPosition: "center",
        }}
      />

      {/* CONTENT */}
      <header className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            max-w-xl
            pt-0 pb-8
            md:pt-0 md:pb-0
            md:min-h-[90vh]
          "
        >
          <div>
            <p className="italic text-3xl md:text-5xl mb-2">
              Like a{" "}
              <span className="bg-[#940200] px-2 py-1 rounded font-semibold not-italic">
                Crow
              </span>
            </p>

            <h1
              id="hero-title"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              We Never Miss the Details.
            </h1>

            <p className="text-white mb-6">
              Solution Crow builds high-performance websites, web applications,
              cloud solutions, and AI-powered products that are scalable,
              secure, and SEO-optimized for business growth.
            </p>

            <button className="bg-[var(--color-primary)] px-6 py-3 rounded font-semibold">
              Explore Now
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}
