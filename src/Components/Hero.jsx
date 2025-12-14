export default function Hero() {
  return (
  <section
  className="
    relative min-h-[90vh]
    flex items-center
    bg-black overflow-hidden
  "
  aria-labelledby="hero-title"
>
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-no-repeat bg-right"
    style={{
      backgroundImage: "url('/crow-hero.png')",
      backgroundSize: "95%",
      backgroundPosition: "right center",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

  {/* CONTENT */}
  <header className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-xl text-left">
      <p className="italic text-lg mb-2">
        Like a{" "}
        <span className="bg-[#940200] px-2 py-1 rounded font-semibold not-italic">
          Crow
        </span>
      </p>

      {/* ✅ SINGLE H1 (VERY IMPORTANT FOR SEO) */}
      <h1
        id="hero-title"
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        We Never Miss the Details.
      </h1>

      {/* SEO-RICH PARAGRAPH */}
      <p className="text-white/70 mb-6">
        Solution Crow builds high-performance websites, web applications,
        cloud solutions, and AI-powered products that are scalable,
        secure, and SEO-optimized for business growth.
      </p>

      <button className="bg-[#940200] px-6 py-3 rounded font-semibold">
        Explore Now
      </button>
    </div>
  </header>
</section>

  );
}
