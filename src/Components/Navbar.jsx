"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isPortfolio = pathname.startsWith("/portfolio");

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/crow-logo.png"
            alt="Solution Crow Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-6 font-semibold">

          {/* HOME */}
          <Link
            href="/"
            className={`
              px-4 py-1 rounded transition
              ${isHome
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:text-white hover:bg-white/10"}
            `}
          >
            HOME
          </Link>

          {/* PORTFOLIO */}
          <Link
            href="/portfolio"
            className={`
              px-4 py-1 rounded transition
              ${isPortfolio
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:text-white hover:bg-white/10"}
            `}
          >
            PORTFOLIO
          </Link>

        </div>
      </div>
    </nav>
  );
}
