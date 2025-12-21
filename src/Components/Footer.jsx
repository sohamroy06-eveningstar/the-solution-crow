import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP */}
        <div className="grid grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/crow-logo.png"
                alt="Solution Crow"
                width={40}
                height={40}
              />
              <span className="text-sm font-bold">Solution Crow</span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We build high-performance websites, applications, cloud solutions,
              and AI systems with precision and clarity.
            </p>

            {/* ✅ SOCIAL ICONS */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/60 hover:text-[#940200] transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-white/60 hover:text-[#940200] transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/60 hover:text-[#940200] transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Website Development</li>
              <li>Web App Development</li>
              <li>Mobile Applications</li>
              <li>Cloud & DevOps</li>
              <li>AI & Data</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* COPYRIGHT */}
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Solution Crow. All rights reserved.
          </p>

          {/* BOTTOM LINKS */}
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
