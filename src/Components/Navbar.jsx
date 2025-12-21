"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const isPortfolio = pathname.startsWith("/portfolio");
  const isBlog = pathname.startsWith("/blog");

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur border-b-0 md:border-b border-white">
      <div className="max-w-7xl mx-auto relative flex items-center px-6 py-4">

        {/* LOGO — CENTERED ON MOBILE */}
        <Link
          href="/"
          className="mx-auto md:mx-0 md:flex md:items-center"
        >
          <Image
            src="/crow-logo.png"
            alt="Solution Crow Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* MOBILE MENU BUTTON — RIGHT */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white absolute right-6"
          aria-label="Toggle Menu"
        >
          {open ? (
            <X size={22} />
          ) : (
            <div className="flex flex-col gap-[3px]">
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
            </div>
          )}
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 font-semibold ml-auto">
          <Link
            href="/"
            className={`px-4 py-1 rounded transition ${
              isHome
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >
            HOME
          </Link>

          <Link
            href="/portfolio"
            className={`px-4 py-1 rounded transition ${
              isPortfolio
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >
            PORTFOLIO
          </Link>

          <Link
            href="/blog"
            className={`px-4 py-1 rounded transition ${
              isBlog
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >
            BLOG
          </Link>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div
          className="
            md:hidden
            absolute top-full left-0 w-full
            bg-black/95
            border-t border-white/10
            px-6 py-4 space-y-3
          "
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`block px-4 py-2 rounded font-semibold ${
              isHome
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            HOME
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setOpen(false)}
            className={`block px-4 py-2 rounded font-semibold ${
              isPortfolio
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            PORTFOLIO
          </Link>

          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className={`block px-4 py-2 rounded font-semibold ${
              isBlog
                ? "bg-[#940200] text-white"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            BLOG
          </Link>
        </div>
      )}
    </nav>
  );
}
