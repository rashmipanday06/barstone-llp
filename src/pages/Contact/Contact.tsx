import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "../../components/common/Container";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@barstonellp.com",
    href: "mailto:contact@barstonellp.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9599227270",
    href: "tel:+919599227270",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "India",
    href: "#office",
  },
];

const Contact = () => {
  return (
    <main className="bg-[#0A0A0A] text-white" id="contact">
      {/* Hero */}
      <section className="border-b border-white/10 py-24 md:py-32">
        <Container>
          <div className="max-w-5xl">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B99A5B]">
              Contact
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
              Let's discuss
              <br />
              your <span className="text-[#B99A5B]">legal needs.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Whether you are seeking legal advice, exploring a transaction,
              managing a dispute or looking for specialist counsel, our team
              is available to understand your requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Details */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group bg-[#0A0A0A] p-8 transition-colors duration-300 hover:bg-[#111111] md:p-10"
                >
                  <Icon
                    size={23}
                    strokeWidth={1.2}
                    className="text-[#B99A5B]"
                  />

                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    {item.label}
                  </p>

                  <p className="mt-3 text-sm text-white/75 transition-colors group-hover:text-[#B99A5B]">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Enquiry Section */}
      <section className="border-y border-white/10 py-20 md:py-28">
        <Container>
          <div className="grid gap-14 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B99A5B]">
                Get In Touch
              </p>

              <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight md:text-5xl">
                Tell us how we can help.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm leading-7 text-white/60 md:text-base">
                Please write to us with a brief description of your
                requirements and our team will get back to you.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@barstonellp.com&su=Legal%20Enquiry%20-%20Barstone%20LLP"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-[#B99A5B] bg-[#B99A5B] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-[#B99A5B]"
              >
                Send An Enquiry
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Office */}
      <section id="office" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B99A5B]">
                Our Office
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
                Visit Barstone LLP.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 md:text-base">
                Our team works with clients across a range of industries and
                legal requirements. For office visits and meetings, please
                contact us in advance.
              </p>
            </div>

            <div className="border border-white/10 bg-[#101010] p-8 md:p-10">
              <MapPin
                size={24}
                strokeWidth={1.2}
                className="text-[#B99A5B]"
              />

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Barstone LLP
              </p>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Office address
                <br />
                India
              </p>

              <p className="mt-6 text-xs leading-6 text-white/40">
                Please contact the firm for the complete office address and
                appointment details.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-[#101010] py-20 md:py-28">
        <Container>
          <div className="border border-white/10 px-7 py-12 text-center md:px-16 md:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B99A5B]">
              Barstone LLP
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
              Have a legal matter to discuss?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
              Get in touch with our team to discuss your requirements.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@barstonellp.com&su=Legal%20Enquiry%20-%20Barstone%20LLP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-[#B99A5B] hover:text-[#B99A5B]"
            >
              Contact Barstone
              <ArrowRight size={14} />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;