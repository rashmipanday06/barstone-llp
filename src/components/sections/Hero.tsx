import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Container from "../common/Container";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0B0B] pt-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#C9A45C]/[0.04] blur-3xl" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[380px] w-[380px] rounded-full bg-[#C9A45C]/[0.03] blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.035]" />
      </div>

      {/* Gold line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent" />

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A45C]" />

              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                BARSTONE LLP
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] text-[#EDE6D6] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
              Comprehensive
              <br />
              <span className="text-[#C9A45C]">
                Legal Solutions
              </span>
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-sm leading-7 text-[#B8B2A7] sm:text-base sm:leading-8">
              Barstone LLP provides comprehensive legal services to
              companies, businesses, investors and other stakeholders,
              combining transactional, regulatory, advisory and
              dispute-resolution capabilities to address complex legal
              and commercial requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/practices"
                className="group inline-flex items-center justify-center gap-3 border border-[#C9A45C] bg-[#C9A45C] px-7 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B0B0B] transition-all duration-300 hover:bg-[#D8B978]"
              >
                Our Practices

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center border border-[#2A2A2A] px-7 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] !text-[#EDE6D6] transition-all duration-300 hover:!border-[#C9A45C] hover:!text-[#C9A45C]"
              >
                About Barstone
              </a>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex lg:justify-end"
          >
            <div className="relative flex h-[500px] w-[420px] items-center justify-center border border-[#2A2A2A]">

              <div className="absolute inset-5 border border-[#C9A45C]/30" />

              <div className="relative flex h-64 w-64 items-center justify-center">
                <div className="absolute inset-0 rotate-45 border border-[#C9A45C]/60" />

                <div className="absolute inset-8 rotate-45 border border-[#C9A45C]/30" />

                <div className="relative flex h-28 w-28 items-center justify-center border border-[#C9A45C]">
                  <span className="font-serif text-7xl font-medium text-[#EDE6D6]">
                    B
                  </span>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <div className="mb-4 h-px bg-[#2A2A2A]" />

                <p className="font-serif text-lg italic text-[#C9A45C]">
                  Attorneys &amp; Counsellors
                </p>

                <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.3em] text-[#6F6A61]">
                  Legal • Commercial • Regulatory
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#6F6A61]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-[#C9A45C]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;