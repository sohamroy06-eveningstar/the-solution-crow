export default function Hero() {
  return (
    <section
      className="
        relative
        bg-black overflow-hidden
        md:min-h-[90vh]
        -mt-[64px]
      "
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0
          bg-no-repeat
          bg-center               /* ✅ MOBILE: original behavior */
          bg-[length:120%]        /* mobile scale (unchanged) */

          md:bg-right              /* ✅ DESKTOP anchor */
          md:bg-[position:right_45%] /* ✅ DESKTOP exact alignment */
          md:bg-[length:105%]
        "
        style={{
          backgroundImage: "url('/crow-hero.png')",
        }}
      />

      {/* CONTENT */}
      <header className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            max-w-xl
            flex flex-col justify-center
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
