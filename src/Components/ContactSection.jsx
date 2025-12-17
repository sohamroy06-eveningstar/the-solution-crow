import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="pt-0 pb-28 px-6 bg-black"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <h2
            id="contact-title"
            className="text-3xl md:text-4xl font-semibold text-white"
          >
            Let’s Talk About Your{" "}
            <span className="relative inline-block">
              Next Project
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#940200]" />
            </span>
          </h2>
        </div>

        {/* CARD */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#120c18] to-[#050406] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-5xl italic font-semibold text-white mb-2">
                Let’s Build{" "}
                <span className="text-[var(--color-primary)]">
                  Something Brilliant.
                </span>
              </h3>

              <p className="text-white/60 mb-8">
                Drop a message — we’ll get back
                faster than you expect.
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-8">

              {/* CONTACT INFO */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Contact Us
                </h4>

                <ul className="space-y-4 text-white/70 text-sm">
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#940200]" />
                    <span>+91 86178 11488</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#940200]" />
                    <span>support@solutioncrow.com</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#940200]" />
                    <span>Hazra Lane, Bankura, India</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-[#940200]" />
                    <span>WhatsApp: +91 86178 11488</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
