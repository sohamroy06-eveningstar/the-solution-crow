import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/industries";

export default function IndustriesSection() {
  return (
    <section
      aria-labelledby="industries-title"
      className=" py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* ✅ OUTER BOX */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-[#0f0f12]
          p-8 md:p-14
        ">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* LEFT CONTENT */}
            <header className="lg:col-span-1">
              <h2
                id="industries-title"
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Solutions for <br /> Every Industry
              </h2>

              <p className="mt-6 text-white max-w-md">
                We build secure, scalable, and industry-specific digital solutions
                that help businesses grow and operate efficiently.
              </p>

              <Link
                href="/contact"
                className="
                  inline-block mt-8
                  rounded-full
                  bg-[#940200]
                  px-6 py-3
                  text-sm font-semibold text-white
                  hover:bg-[#b30000]
                  transition
                "
              >
                Discover Now
              </Link>
            </header>

            {/* RIGHT LIST */}
            <div className="lg:col-span-2 space-y-10">
              {industries.map((item, index) => (
                <article
                  key={index}
                  className="
                    grid grid-cols-1 md:grid-cols-2
                    gap-8 items-center
                    border-b border-white/10
                    pb-10 last:border-b-0 last:pb-0
                  "
                >
                  {/* TEXT */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-white text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="relative w-full h-[140px] md:h-[160px] rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} industry solutions`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
