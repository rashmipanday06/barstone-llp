import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "text";
  className?: string;
}

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-barstone-brass text-white hover:bg-barstone-charcoal",

    outline:
      "border border-barstone-charcoal/30 text-barstone-charcoal hover:border-barstone-brass hover:text-barstone-brass",

    text:
      "text-barstone-charcoal hover:text-barstone-brass",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-3
    px-6
    py-3.5
    text-[11px]
    font-semibold
    tracking-[0.18em]
    uppercase
    transition-all
    duration-300
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};

export default Button;