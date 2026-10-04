import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../components/common/Container";
import { advocates } from "../../data/advocates";

const AUTO_SCROLL_SPEED = 0.5;

const People = () => {
  const navigate = useNavigate();

  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  /*
   * We render the advocates twice.
   *
   * When the first set has completely moved away,
   * we reset scrollLeft back by exactly one set width.
   *
   * This creates a seamless infinite loop.
   */
  const animateSlider = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    if (!pausedRef.current) {
      slider.scrollLeft += AUTO_SCROLL_SPEED;

      const firstSetWidth = slider.scrollWidth / 2;

      if (slider.scrollLeft >= firstSetWidth) {
        slider.scrollLeft -= firstSetWidth;
      }
    }

    animationRef.current = requestAnimationFrame(animateSlider);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateSlider);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animateSlider]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
  };

  return (
    <section
      id="people"
      className="relative overflow-hidden border-t border-[#2A2A2A] bg-[#0B0B0B] py-24 text-[#EDE6D6] md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#C9A45C]/[0.02] blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.02]" />
      </div>

      <Container className="relative z-10">
        {/* Heading */}
        <div className="mb-16 max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C9A45C]" />

            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
              Our People
            </span>
          </div>

          <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-6xl">
            Legal expertise shaped around
            <span className="text-[#C9A45C]"> complex matters.</span>
          </h2>
        </div>

        {/* Main Introduction */}
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="font-serif text-2xl leading-tight text-[#EDE6D6] md:text-3xl">
              A multidisciplinary approach to legal and commercial challenges.
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
                At Barstone LLP, our practice brings together specialist legal
                capabilities across corporate and securities, banking and
                finance, dispute resolution, markets, risk management,
                international trade and customs, labour and employment,
                private clients, energy and infrastructure, real estate,
                technology, intellectual property, media and entertainment,
                and white-collar crime.
              </p>

              <p>
                Our multidisciplinary approach enables us to address the
                immediate legal issue while also considering the client's
                broader commercial and regulatory exposure.
              </p>

              <p>
                We work with companies, promoters, investors, financial
                institutions, businesses and other stakeholders across
                complex legal and commercial matters.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#C9A45C] pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EDE6D6] transition-colors duration-300 hover:text-[#C9A45C]"
            >
              Get in Touch

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* OUR ADVOCATES */}
        {/* ========================================================= */}

        <div className="mt-24 border-t border-[#2A2A2A] pt-16">
          {/* Header */}
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                  Our Advocates
                </span>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[#EDE6D6] md:text-4xl">
                Experienced counsel across
                <span className="text-[#C9A45C]">
                  {" "}
                  specialist practices.
                </span>
              </h3>
            </div>
          </div>

          {/* Slider */}
          <div
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="overflow-x-auto pb-6 scrollbar-none"
          >
            <div className="flex w-max gap-5">
              {[...advocates, ...advocates].map((advocate, index) => (
                <article
                  key={`${advocate.id}-${index}`}
                  className="group relative h-[290px] w-[310px] flex-shrink-0 overflow-hidden border border-[#2A2A2A] bg-[#0F0F0F] p-7 transition-all duration-500 hover:border-[#C9A45C]"
                >
                  {/* Normal Card */}
                  <div className="relative z-10 flex h-full flex-col transition-opacity duration-300 group-hover:opacity-0">
                    <div className="flex items-start justify-between">
                      <span className="font-sans text-[9px] tracking-[0.2em] text-[#C9A45C]">
                        {String(advocate.id).padStart(2, "0")}
                      </span>

                      <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#6F6A61]">
                        Advocate
                      </span>
                    </div>

                    <div className="mt-auto">
                      <h4 className="font-serif text-2xl leading-tight text-[#EDE6D6]">
                        {advocate.name}
                      </h4>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="h-px w-6 bg-[#C9A45C]" />

                        <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#B8B2A7]">
                          {advocate.experience} Years Experience
                        </span>
                      </div>

                      <p className="mt-4 font-sans text-xs uppercase tracking-[0.12em] text-[#C9A45C]">
                        {advocate.coreArea}
                      </p>
                    </div>
                  </div>

                  {/* Hover Details */}
                  <div className="absolute inset-0 z-20 flex translate-y-4 flex-col justify-end bg-[#111111] p-7 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#C9A45C]">
                      {advocate.experience} Years of Legal Experience
                    </span>

                    <h4 className="mt-3 font-serif text-2xl leading-tight text-[#EDE6D6]">
                      {advocate.name}
                    </h4>

                    <div className="my-5 h-px w-full bg-[#2A2A2A]" />

                    <p className="mb-3 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6F6A61]">
                      Areas of Practice
                    </p>

                    <div className="flex max-h-[70px] flex-wrap gap-x-2 gap-y-1 overflow-hidden">
                      {advocate.practiceAreas.map((area) => (
                        <span
                          key={area}
                          className="font-sans text-[11px] leading-5 text-[#B8B2A7]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <button
            type="button"
            onClick={() => navigate("/people")}
            className="group mt-6 inline-flex items-center gap-3 border-b border-[#C9A45C] pb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#EDE6D6] transition-colors duration-300 hover:text-[#C9A45C] md:hidden"
          >
            View All Advocates

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default People;