
import { useEffect, useRef } from "react";
import { sectors } from "../../data/sectors";


const Insights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: 280,
          behavior: "smooth",
        });
      }
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-16" id="insights">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#C9A24D]">
            Insights
          </p>

          <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-white md:text-5xl">
            Sectors & Industries
          </h2>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden pb-4 scrollbar-hide"
        >
          {sectors.map((sector, index) => (
            <article
              key={`${sector}-${index}`}
              className="group flex min-w-[240px] max-w-[280px] shrink-0 items-center border border-[#2A2A2A] px-5 py-5 transition-colors duration-300 hover:border-[#C9A24D]"
            >
              {/* <span className="mr-4 text-xs tracking-widest text-[#C9A24D]">
                {String(index + 1).padStart(2, "0")}
              </span> */}

              <h3 className="text-sm font-medium leading-6 text-white transition-colors duration-300 group-hover:text-[#C9A24D]">
                {sector}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
