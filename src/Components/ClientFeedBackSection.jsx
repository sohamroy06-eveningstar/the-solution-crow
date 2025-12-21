"use client";

import Script from "next/script";
import { clientFeedback } from "@/data/ClientFeedback";

export default function ClientFeedbackSection() {
  return (
    <>
      {/* SEO: Review Schema */}
      <Script
        id="review-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Solution Crow Projects",
            review: clientFeedback.flatMap((project) =>
              project.reviews.map((review) => ({
                "@type": "Review",
                author: {
                  "@type": "Organization",
                  name: review.clientName,
                },
                reviewBody: review.feedback,
              }))
            ),
          }),
        }}
      />

      <section
        className="py-28 px-6 bg-black"
        aria-labelledby="client-feedback-title"
      >
        <div className="max-w-7xl mx-auto">
          {/* BOX */}
          <div
            className="
              rounded-3xl
              border border-white/15
              bg-gradient-to-b from-[#940200]/20 via-black to-black
              px-6 md:px-14 py-20
              shadow-[0_0_80px_rgba(148,2,0,0.25)]
            "
          >
            {/* HEADING */}
            <h2
              id="client-feedback-title"
              className="text-center text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Client Feedback
            </h2>

            <h5 className="text-center text-xl text-white/80 mb-20">
              Trusted by businesses that demand performance
            </h5>

            {/* GRID — 3 COLUMNS DESKTOP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {clientFeedback.map((project, index) => (
                <article
                  key={index}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    p-6
                    transition-all duration-300
                    hover:border-[#940200]
                    hover:shadow-[0_0_40px_rgba(148,2,0,0.35)]
                  "
                >
                  {/* PROJECT INFO */}
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {project.projectName}
                  </h3>

                  <h4 className="text-sm text-[#940200] mb-3">
                    {project.projectDetails}
                  </h4>

                  <h5 className="text-sm text-white/70 mb-6">
                    {project.projectDescription}
                  </h5>

                  {/* REVIEWS */}
                  <div className="space-y-6">
                    {project.reviews.map((review, i) => (
                      <div key={i}>
                        <h5 className="text-sm text-white leading-relaxed mb-2">
                          “{review.feedback}”
                        </h5>

                        <h5 className="text-xs font-semibold text-[#940200] mb-3">
                          — {review.clientName}
                        </h5>

                        {/* YOUTUBE VIDEO */}
                        {review.youtubeUrl && (
                          <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                            <iframe
                              src={review.youtubeUrl}
                              className="w-full h-full"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
