import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Container from "../../components/common/Container";
import { practices } from "../../data/practices";

const PracticeDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const practice = practices.find((item) => item.id === slug);

  if (!practice) {
    return (
      <main className="min-h-screen bg-[#0B0B0B] px-6 py-32 text-[#EDE6D6]">
        <Container>
          <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
            Practice Area
          </p>

          <h1 className="mt-5 font-serif text-5xl md:text-6xl">
            Practice not found
          </h1>

          <Link
            to="/practices"
            className="mt-10 inline-flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#EDE6D6] transition-colors hover:text-[#C9A45C]"
          >
            <ArrowLeft size={14} />
            Back to Practices
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main className="bg-[#0B0B0B] text-[#EDE6D6]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2A2A2A] py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#C9A45C]/[0.025] blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.02]" />
        </div>

        <Container className="relative z-10">
          <Link
            to="/practices"
            className="group mb-12 inline-flex items-center gap-3 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8F897E] transition-colors hover:text-[#C9A45C]"
          >
            <ArrowLeft
              size={13}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All Practice Areas
          </Link>

          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A45C]" />

              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                Practice Area
              </span>
            </div>

            <h1 className="font-serif text-5xl font-medium leading-[0.95] tracking-[-0.025em] sm:text-6xl md:text-7xl lg:text-8xl">
              {practice.title}
            </h1>

            <p className="mt-10 max-w-3xl font-sans text-sm leading-8 text-[#B8B2A7] md:text-base">
              {practice.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
                Services
              </p>

              <h2 className="font-serif text-3xl text-[#EDE6D6] md:text-4xl">
                Areas of legal support
              </h2>
            </div>

            <span className="hidden font-sans text-[9px] uppercase tracking-[0.25em] text-[#6F6A61] md:block">
              Scroll horizontally →
            </span>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {practice.services.map((service, index) => (
              <article
                key={service.id}
                className="group min-w-[300px] shrink-0 border border-[#2A2A2A] bg-[#0B0B0B] p-8 transition-all duration-300 hover:border-[#C9A45C] md:min-w-[360px]"
              >
                <div className="flex min-h-[250px] flex-col">
                  {/* <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] font-semibold tracking-[0.25em] text-[#C9A45C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-10 bg-[#2A2A2A] transition-colors duration-300 group-hover:bg-[#C9A45C]" />
                  </div> */}

                  <div className="mt-auto">
                    <h3 className="max-w-[280px] font-serif text-2xl leading-tight text-[#EDE6D6] md:text-3xl">
                      {service.title}
                    </h3>

                    <div className="mt-8 flex items-center justify-between border-t border-[#2A2A2A] pt-5">
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#6F6A61]">
                        Legal Service
                      </span>

                      <ArrowRight
                        size={16}
                        className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-[#2A2A2A] py-24 md:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
                Discuss a Matter
              </p>

              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                Need legal counsel for a complex matter?
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-4 border border-[#C9A45C] px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EDE6D6] transition-colors duration-300 hover:bg-[#C9A45C] hover:text-[#0B0B0B]"
            >
              Contact Barstone

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default PracticeDetails;