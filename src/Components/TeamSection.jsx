"use client";

import Image from "next/image";
import Script from "next/script";

const team = [
  {
    name: "Soham Roy",
    role: "Frontend Devloper",
    bio: "Crafts immersive UI experiences with React, Next.js, and performance-first design principles.",
    image: "/team/soham.jpg",
  },
  {
    name: "Sumit Panda",
    role: "Frontend Engineer",
    bio: "Crafts immersive UI experiences with React, Next.js, and performance-first design principles.",
    image: "/team/ankit.jpg",
  },
  {
    name: "Riya Sen",
    role: "Backend Engineer",
    bio: "Specializes in Django, APIs, and secure backend architectures built for scale.",
    image: "/team/riya.jpg",
  },
  {
    name: "Aditya Verma",
    role: "DevOps & Cloud",
    bio: "Automates infrastructure, CI/CD pipelines, and cloud deployments with zero-downtime strategies.",
    image: "/team/aditya.jpg",
  },
];

export default function TeamSection() {
  return (
    <>
      {/* SEO: Organization Schema */}
      <Script
        id="team-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Solution Crow",
            employee: team.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.role,
            })),
          }),
        }}
      />

      <section
        className="py-28 px-6 bg-black"
        aria-labelledby="team-title"
      >
        <div className="max-w-7xl mx-auto">
          {/* OUTER BOX */}
          <div
            className="
              relative
              rounded-3xl
              border border-white/15
              bg-gradient-to-b from-[#940200]/20 via-black to-black
              px-6 md:px-14 py-20
              shadow-[0_0_80px_rgba(148,2,0,0.25)]
            "
          >
            {/* HEADING */}
            <h2
              id="team-title"
              className="text-center text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our Team
            </h2>

            <p className="text-center text-xl md:text-2xl text-white mb-20">
              The minds behind precision engineering
            </p>

            {/* TEAM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {team.map((member, index) => (
                <article
                  key={index}
                  className="
                    group
                    relative
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    p-6
                    text-center
                    transition-all duration-300
                    hover:border-[#940200]
                    hover:shadow-[0_0_40px_rgba(148,2,0,0.35)]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={member.image}
                      alt={`${member.name} – ${member.role}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p className="text-[#940200] font-medium text-sm mb-4">
                    {member.role}
                  </p>

                  {/* BIO */}
                  <p className="text-sm text-white leading-relaxed">
                    {member.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
