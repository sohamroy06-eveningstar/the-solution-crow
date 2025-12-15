export default function ContactSection() {
  return (
    <section
      className="py-28 px-6 bg-black"
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
                <p className="text-[var(--color-primary)]">
                  Something Brilliant.
                </p>
              </h3>

              <p className="text-white/60 mb-8">
                Drop a message — we’ll get back
                faster than you expect.
              </p>

              {/* IMAGE PLACEHOLDER (OPTIONAL) */}
              <div className="h-[260px] bg-black rounded-lg flex items-center justify-center text-white/20">
                Image / Illustration
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              className="space-y-5"
              aria-label="Contact form"
            >
              {/* NAME */}
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Your Name<span className="text-[#940200]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your business or personal email"
                  className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your contact number (optional)"
                  className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Service you are interested in
                </label>
                <select
                  name="service"
                  className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#7c3aed]"
                >
                  <option value="">
                    Select the service you want
                  </option>
                  <option>Website Development</option>
                  <option>Web App Development</option>
                  <option>Mobile App Development</option>
                  <option>AI / ML Solutions</option>
                  <option>Cloud & DevOps</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  How can I help you?
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us what kind of support or solution you're looking for"
                  className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold text-white"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
