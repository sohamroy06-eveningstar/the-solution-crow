import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin,  } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/crow-logo.png"
                alt="Solution Crow"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">Solution Crow</span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              We build high-performance websites, applications, cloud solutions,
              and AI systems with precision and clarity.
            </p>
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

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-white/60 text-sm">
  <li className="flex items-center gap-3">
    <Mail size={16} className="text-[#940200]" />
    <span>Email: support@solutioncrow.com</span>
  </li>

  <li className="flex items-center gap-3">
    <Phone size={16} className="text-[#940200]" />
    <span>Phone: +91 8617811488</span>
  </li>

  <li className="flex items-center gap-3">
    <MapPin size={16} className="text-[#940200]" />
    <span>Location: HazraLan, Bankura</span>
  </li>

  <li className="flex items-center gap-3">
    <FaWhatsapp size={16} className="text-[#940200]" />
    <span>WhatsApp: +91 8617811488</span>
  </li>
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
