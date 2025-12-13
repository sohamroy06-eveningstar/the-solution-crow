"use client";
import Reveal from "./Reveal";

export default function WebsiteDevelopment() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute -right-40 top-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
        
        {/* IMAGE */}
        <Reveal>
          <img
            src="/crow-laptop.png"
            alt="Website Development"
            className="w-full max-w-xl mx-auto"
          />
        </Reveal>

        {/* CONTENT */}
        <Reveal delay={0.15}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Website Development
          </h2>

          <p className="text-white/70 leading-relaxed mb-6">
            We create websites that are not just visually stunning, but
            strategically built to drive conversions and engagement.
            Every design is responsive, SEO-friendly, and optimized for speed.
          </p>

          <p className="text-white/70 leading-relaxed mb-10">
            Your website isn’t just your online identity — it’s your
            digital growth engine.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-[var(--color-primary)] px-7 py-3 rounded-lg font-semibold glow-red">
              Get Your Website Now
            </button>

            <div className="flex items-center gap-2">
              <span className="text-[var(--color-primary)] text-lg font-bold">
                ★ 4.8
              </span>
              <span className="text-white/60 text-sm">Rating</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
