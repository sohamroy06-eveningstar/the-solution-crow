"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MoreVertical, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 font-semibold">

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

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <MoreVertical size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-3">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`
              block px-4 py-2 rounded font-semibold
              ${isHome
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:bg-white/10"}
            `}
          >
            HOME
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setOpen(false)}
            className={`
              block px-4 py-2 rounded font-semibold
              ${isPortfolio
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:bg-white/10"}
            `}
          >
            PORTFOLIO
          </Link>
        </div>
      )}
    </nav>
  );
}
