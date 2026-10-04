import { ArrowRight } from "lucide-react";

import Container from "../../components/common/Container";

const About = () => {
  const handleExplorePractices = () => {
    document.getElementById("practices")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#2A2A2A] bg-[#0B0B0B] py-24 text-[#EDE6D6] md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#C9A45C]/[0.025] blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.02]" />
      </div>

      <Container className="relative z-10">
        {/* Heading */}
        <div className="mb-16 max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C9A45C]" />

            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
              About Barstone LLP
            </span>
          </div>

          <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-6xl">
            Comprehensive legal counsel
            <span className="text-[#C9A45C]">
              {" "}
              across complex matters.
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="font-serif text-2xl leading-tight text-[#EDE6D6] md:text-3xl">
              Barstone LLP provides comprehensive legal services to companies,
              promoters, investors, financial institutions and businesses.
            </p>

            <div className="mt-10 h-px w-full bg-[#2A2A2A]" />

            <div className="mt-8 flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center border border-[#C9A45C]">
                <span className="font-serif text-3xl text-[#C9A45C]">
                  B
                </span>
              </div>

              <div>
                <p className="font-serif text-lg text-[#EDE6D6]">
                  BARSTONE LLP
                </p>

                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.25em] text-[#6F6A61]">
                  Attorneys &amp; Counsellors
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="space-y-7 font-sans text-sm leading-8 text-[#B8B2A7] md:text-base">
              <p>
                Barstone LLP provides comprehensive legal services to
                companies, promoters, investors, financial institutions and
                businesses across the entire corporate and investment
                lifecycle.
              </p>

              <p>
                The firm combines transactional, regulatory and advisory
                capabilities to assist clients with complex legal and
                commercial requirements.
              </p>

              <p>
                Our practice brings together specialist capabilities across
                corporate and securities, banking and finance, dispute
                resolution, markets, risk management, international trade and
                customs, labour and employment, private clients, energy and
                infrastructure, real estate, technology, intellectual
                property, media and entertainment, and white-collar crime.
              </p>

              <p>
                We focus on understanding the client's commercial objectives,
                regulatory environment and potential legal risks, and provide
                practical legal solutions designed around the requirements of
                each engagement.
              </p>
            </div>

            {/* Explore Practices */}
            <button
              type="button"
              onClick={handleExplorePractices}
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#C9A45C] pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EDE6D6] transition-colors duration-300 hover:text-[#C9A45C]"
            >
              Explore Our Practices

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Practice Philosophy */}
        <div className="mt-20 grid border-t border-[#2A2A2A] md:grid-cols-3">
          <div className="border-b border-[#2A2A2A] py-8 md:border-b-0 md:border-r md:pr-10">
            <p className="mb-3 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              01
            </p>

            <h3 className="font-serif text-2xl text-[#EDE6D6]">
              Transactional
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#77736C]">
              Transactional legal capabilities supporting businesses and
              investors across their legal and commercial requirements.
            </p>
          </div>

          <div className="border-b border-[#2A2A2A] py-8 md:border-b-0 md:border-r md:px-10">
            <p className="mb-3 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              02
            </p>

            <h3 className="font-serif text-2xl text-[#EDE6D6]">
              Regulatory
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#77736C]">
              Regulatory and compliance capabilities addressing evolving legal
              and regulatory requirements.
            </p>
          </div>

          <div className="py-8 md:pl-10">
            <p className="mb-3 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              03
            </p>

            <h3 className="font-serif text-2xl text-[#EDE6D6]">
              Dispute Resolution
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#77736C]">
              Dispute-resolution capabilities supporting clients through
              complex commercial, regulatory and legal disputes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;