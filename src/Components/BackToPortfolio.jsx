"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToPortfolio() {
  return (
    <div className="mb-6">
      <Link
        href="/portfolio"
        className="
          inline-flex items-center gap-2
          px-4 py-2
          rounded-full
          border border-white/10
          text-sm font-semibold
          text-white
          transition-all duration-300
          bg-[#940200]
          hover:text-white
          hover:border-[#940200]
          hover:bg-[#940200]/20
        "
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>
    </div>
  );
}
