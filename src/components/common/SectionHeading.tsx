interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div
      className={`
        max-w-3xl
        ${align === "center" ? "mx-auto text-center" : ""}
      `}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-barstone-brass uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-4xl leading-tight font-medium tracking-tight text-barstone-charcoal sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-barstone-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;