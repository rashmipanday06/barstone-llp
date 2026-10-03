import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { practiceAreas } from "../../data/practices";

const AUTOPLAY_MS = 1500;

const Practices = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [active, setActive] = useState(0);

  const total = practiceAreas.length;

  const getStep = useCallback(() => {
    const slider = sliderRef.current;
    const card = slider?.querySelector<HTMLElement>("article");
    if (!slider || !card) return 0;
    const gap = parseFloat(getComputedStyle(slider).columnGap) || 24;
    return card.offsetWidth + gap;
  }, []);

  const goNext = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;
    if (atEnd) slider.scrollTo({ left: 0, behavior: "smooth" });
    else slider.scrollBy({ left: getStep(), behavior: "smooth" });
  }, [getStep]);

  const goPrev = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    if (slider.scrollLeft <= 10) {
      slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: -getStep(), behavior: "smooth" });
    }
  }, [getStep]);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const max = slider.scrollWidth - slider.clientWidth;
    const p = max > 0 ? Math.min(1, Math.max(0, slider.scrollLeft / max)) : 0;
    setActive(Math.round(p * (total - 1)));
  };

  // Cursor-following gold spotlight inside each card
  const handleCardMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  // Autoplay: pauses on hover / focus / touch, off for reduced-motion users
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!pausedRef.current) goNext();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [goNext]);

  const arrowBtn =
    "grid h-12 w-12 place-items-center border border-[#2A2A2A] text-white transition-colors duration-300 hover:border-[#C9A96E] hover:bg-[#C9A96E] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A96E]";

  return (
    <main className="bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#2A2A2A] px-6 py-24 md:px-12 lg:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(201,169,110,0.10),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-[#C9A96E] to-transparent" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A96E]">
              Our Expertise
            </p>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Practice Areas
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#A5A5A5] md:text-lg">
            Comprehensive legal counsel built around the needs of businesses,
            institutions and individuals.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Top bar: label + counter + arrows */}
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9A96E]">
                Areas of Practice
              </p>
              <p className="mt-3 font-serif text-3xl text-white">
                {String(active + 1).padStart(2, "0")}
                <span className="mx-2 text-[#3A3A3A]">/</span>
                <span className="text-xl text-[#666666]">
                  {String(total).padStart(2, "0")}
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={goPrev} aria-label="Previous practice area" className={arrowBtn}>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={1.5} aria-hidden="true">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </button>
              <button type="button" onClick={goNext} aria-label="Next practice area" className={arrowBtn}>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={1.5} aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider */}
          <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Practice areas"
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onFocus={() => (pausedRef.current = true)}
            onBlur={() => (pausedRef.current = false)}
            onTouchStart={() => (pausedRef.current = true)}
          >
            {/* pt/pb give the hover lift + glow room so overflow doesn't clip them */}
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-10 pt-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {practiceAreas.map((practice, index) => {
                const num = String(index + 1).padStart(2, "0");
                return (
                  <article
                    key={practice.id}
                    onMouseMove={handleCardMove}
                    className="group relative flex min-h-[600px] min-w-[85%] snap-start flex-col overflow-hidden border border-[#2A2A2A] bg-[linear-gradient(180deg,#151515_0%,#0A0A0A_100%)] p-8 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[#C9A96E]/60 hover:shadow-[0_30px_70px_-30px_rgba(201,169,110,0.35)] md:min-w-[48%] lg:min-w-[36%] lg:p-11"
                  >
                    {/* Cursor spotlight */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,0%),rgba(201,169,110,0.13),transparent_60%)]"
                    />
                    {/* Inset gold frame, appears on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-3 border border-[#C9A96E]/0 transition-colors duration-500 group-hover:border-[#C9A96E]/25"
                    />
                    {/* Top gold line draws across on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[#8F7340] via-[#E8D3A2] to-[#C9A96E] transition-all duration-700 group-hover:w-full"
                    />

                    <div className="relative flex flex-1 flex-col">
                      {/* Title */}
                      <h2 className=" max-w-sm font-serif text-3xl leading-[1.1] tracking-tight md:text-[2.5rem]">
                        {practice.title}
                      </h2>

                      <span className="mt-6 block h-px w-12 bg-gradient-to-r from-[#E8D3A2] to-[#8F7340] transition-all duration-500 group-hover:w-24" />

                      {/* Description */}
                      <p className="mt-6 text-sm leading-7 text-[#9A9A9A]">
                        {practice.description}
                      </p>

                      {/* Services */}
                      <ul className="mt-8">
                        {practice.services.slice(0, 4).map((service) => (
                          <li
                            key={service}
                            className="flex items-center gap-3 border-t border-white/[0.06] py-3 text-xs tracking-wide text-[#C4C4C4] last:border-b"
                          >
                            <span
                              aria-hidden="true"
                              className="h-1 w-1 flex-none rotate-45 bg-[#C9A96E]"
                            />
                            {service}
                          </li>
                        ))}
                      </ul>

                      {/* CTA – stretched link makes the whole card clickable */}
                      <Link
                        to={`/practices/${practice.id}`}
                        className="mt-auto flex items-center justify-between pt-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 after:absolute after:inset-0 after:content-[''] hover:text-[#C9A96E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-[#C9A96E]"
                      >
                        Explore Practice
                        <span className="grid h-11 w-11 place-items-center rounded-full border border-[#C9A96E]/50 text-[#C9A96E] transition-all duration-500 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-black">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-current transition-transform duration-500 group-hover:translate-x-0.5"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Practices;