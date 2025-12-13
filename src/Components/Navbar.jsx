import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
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
        <div className="flex gap-8 font-semibold">
          <Link
            href="/"
            className="bg-[var(--color-primary)] px-4 py-1 rounded"
          >
            HOME
          </Link>

          <Link href="/portfolio">PORTFOLIO</Link>
        </div>
      </div>
    </nav>
  );
}
