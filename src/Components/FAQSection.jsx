"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

const faqs = [
  {
    question: "What Payment Methods Do You Accept?",
    answer:
      "We accept UPI, credit and debit cards, net banking, and international payments through secure gateways.",
  },
  {
    question: "How Can I Track My Order?",
    answer:
      "You receive milestone-based updates, progress reports, and direct communication throughout the project lifecycle.",
  },
  {
    question: "Do You Provide Installment Options?",
    answer:
      "Yes, we offer milestone-based installment plans for long-term and enterprise-level projects.",
  },
  {
    question: "Can I Return A Product If It's Defective?",
    answer:
      "For software services, verified defects are resolved at no additional cost under our support policy.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* SEO: FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section
        className="py-28 px-6 bg-black"
        aria-labelledby="faq-title"
      >
        <div className="max-w-6xl mx-auto">
          {/* ✅ OUTER BOX */}
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
            {/* TITLES */}
            <h2
              id="faq-title"
              className="text-center text-5xl md:text-6xl font-bold text-white mb-6"
            >
              FAQ
            </h2>

            <p className="text-center text-xl md:text-2xl text-white/90 mb-20">
              Questions &amp; Answers
            </p>

            {/* FAQ GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index}>
                    {/* QUESTION */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="
                        w-full
                        flex justify-between items-center
                        px-6 py-4
                        rounded-xl
                        border border-white/20
                        text-left
                        text-base md:text-lg font-semibold
                        bg-white/5
                        hover:bg-white/10
                        transition
                        focus:outline-none
                        focus:ring-2 focus:ring-[#940200]
                      "
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        className={`w-6 h-6 text-[#940200] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* ANSWER */}
                    {isOpen && (
                      <div
                        id={`faq-answer-${index}`}
                        className="px-6 pt-4 text-white/70 leading-relaxed text-sm"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
