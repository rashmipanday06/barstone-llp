
import { ArrowRight, BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";



const opportunities = [
  {
    icon: BriefcaseBusiness,
    title: "Legal Professionals",
    description:
      "We welcome applications from lawyers and legal professionals who bring strong legal capability, sound judgment and a commitment to delivering high-quality client work.",
  },
  {
    icon: GraduationCap,
    title: "Internships",
    description:
      "Our internships provide students with exposure to legal research, drafting, transactions, disputes and the practical aspects of legal practice.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description:
      "We are interested in professionals with relevant experience who can contribute to our growing practices and work collaboratively across complex matters.",
  },
];

const values = [
  {
    number: "01",
    title: "Legal Excellence",
    description:
      "We value rigorous legal analysis, attention to detail and a commitment to delivering thoughtful and practical legal solutions.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We believe in professional integrity, confidentiality and maintaining the highest standards of responsibility towards our clients and colleagues.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "Our multidisciplinary approach encourages collaboration across practice areas and enables teams to approach complex matters from multiple perspectives.",
  },
  {
    number: "04",
    title: "Commercial Thinking",
    description:
      "We look beyond the legal issue to understand the client's commercial objectives, risks and long-term interests.",
  },
];

const Career = () => {
  return (
    <main className="bg-[#0A0A0A] text-white" id="careers">
      {/* Hero */}
      <section className="border-b border-white/10 py-24 md:py-32">
        <Container>
          <div className="max-w-5xl">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B99A5B]">
              Careers
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
              Build your career
              <br />
              with <span className="text-[#B99A5B]">Barstone.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Join a growing legal practice where legal excellence,
              commercial thinking and a multidisciplinary approach come
              together to solve complex client challenges.
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B99A5B]">
                Careers at Barstone LLP
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl leading-tight md:text-5xl">
                A place to learn, contribute and grow.
              </h2>

              <div className="mt-8 space-y-5 text-sm leading-7 text-white/60 md:text-base">
                <p>
                  At Barstone LLP, we believe that strong legal practice is
                  built around people who are curious, responsible and
                  committed to excellence.
                </p>

                <p>
                  Our work spans corporate transactions, banking and finance,
                  disputes, intellectual property, technology, international
                  trade, employment, energy and infrastructure, real estate,
                  private clients and other specialist areas.
                </p>

                <p>
                  We encourage our lawyers and professionals to develop
                  breadth as well as depth, work across disciplines and
                  understand the commercial context behind the legal issues
                  they address.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Opportunities */}
      <section className="border-y border-white/10 py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B99A5B]">
              Opportunities
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Opportunities at Barstone
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60 md:text-base">
              We look for people who combine strong fundamentals with
              curiosity, initiative and a genuine commitment to the practice
              of law.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {opportunities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-[#0A0A0A] p-7 transition-colors duration-300 hover:bg-[#111111] md:p-9"
                >
                  <Icon
                    size={24}
                    strokeWidth={1.2}
                    className="text-[#B99A5B]"
                  />

                  <h3 className="mt-8 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50 transition-colors group-hover:text-[#B99A5B]">
                    Learn More
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What We Value */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B99A5B]">
                Our Values
              </p>

              <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight md:text-5xl">
                What we look for in our people.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="grid gap-5 py-7 md:grid-cols-[70px_220px_1fr] md:items-start"
                >
                  <span className="text-xs tracking-[0.15em] text-[#B99A5B]">
                    {value.number}
                  </span>

                  <h3 className="font-serif text-xl md:text-2xl">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/55">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Working at Barstone */}
      <section className="border-y border-white/10 bg-[#101010] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B99A5B]">
                Working With Us
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight md:text-5xl">
                Meaningful work. Strong teams. Continuous learning.
              </h2>
            </div>

            <div className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
              <p>
                We aim to create an environment where professionals can take
                ownership of their work, learn from experienced colleagues and
                contribute meaningfully to client matters.
              </p>

              <p className="mt-5">
                As our practices grow, we provide opportunities to work on
                matters that require legal research, strategic thinking,
                drafting, negotiation and collaboration across specialist
                areas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Application CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="border border-white/10 px-7 py-12 text-center md:px-16 md:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B99A5B]">
              Join Barstone
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
              Think you could contribute to our team?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
              We welcome applications from talented lawyers, students and
              professionals who are interested in building their careers with
              Barstone LLP.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@barstonellp.com&su=Career%20Application%20-%20Barstone%20LLP&body=Dear%20Barstone%20Team%2C%0A%0AI%20would%20like%20to%20apply%20for%20an%20opportunity%20at%20Barstone%20LLP.%0A%0APlease%20find%20my%20CV%20attached.%0A%0ARegards%2C"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#B99A5B] bg-[#B99A5B] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-[#B99A5B]"
              >
                Submit Your CV
                <ArrowRight size={14} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-[#B99A5B] hover:text-[#B99A5B]"
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Career;

