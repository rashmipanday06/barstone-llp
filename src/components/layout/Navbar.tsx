
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import { BarstoneLogo } from "../common/Logo";

const nav = [
  { label: "About", href: "/about" },
  { label: "Practices", href: "/practices" },
  { label: "People", href: "/people" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const [active, setActive] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className="sticky top-0 z-50 text-barstone-white"
      style={{
        borderBottom: solid
          ? "1px solid rgba(233,185,155,.2)"
          : "1px solid rgba(255,255,255,.05)",
        background: solid
          ? "#0B0B0B"
          : "rgba(10,10,10,.7)",
        // backdropFilter: "blur(10px)",
        boxShadow: solid
          ? "0 10px 30px -12px rgba(0,0,0,.8)"
          : "none",
        transition: "all .5s ease",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(233,185,155,.6), transparent)",
        }}
      />

      <Container>
        <div
          className="flex items-center justify-between transition-all duration-500"
          style={{
            height: scrolled ? 72 : 96,
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Barstone LLP home"
            onClick={() => setActive("")}
          >
            <BarstoneLogo
              variant="horizontal"
              theme="dark"
              size={scrolled ? 48 : 56}
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="bs-desk hidden items-center lg:flex"
            style={{
              gap: 40,
            }}
            aria-label="Primary navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`bs-link ${
                  active === item.label ? "on" : ""
                }`}
                onClick={() => setActive(item.label)}
              >
                {item.label}
              </Link>
            ))}

            <Link to="/contact" className="bs-cta">
              <span>CONTACT</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="bs-burger flex lg:hidden"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div className={`bs-m lg:hidden ${open ? "o" : ""}`}>
          <div className="overflow-hidden">
            <nav
              className="flex flex-col border-t py-4 pb-8"
              style={{
                borderColor: "rgba(233,185,155,.2)",
              }}
              aria-label="Mobile navigation"
            >
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="bs-mlink"
                  style={{
                    color:
                      active === item.label
                        ? "#E9B99B"
                        : undefined,
                  }}
                  onClick={() => {
                    setActive(item.label);
                    setOpen(false);
                  }}
                >
                  <span>{item.label}</span>

                  <span
                    aria-hidden="true"
                    style={{
                      width: 6,
                      height: 6,
                      background: "rgba(233,185,155,.6)",
                      transform: "rotate(45deg)",
                    }}
                  />
                </Link>
              ))}

              <Link
                to="/contact"
                className="mt-7 block border text-center"
                style={{
                  padding: 16,
                  background: "#E9B99B",
                  color: "#0A0A0A",
                  borderColor: "#E9B99B",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  letterSpacing: ".22em",
                  fontSize: 14,
                }}
                onClick={() => setOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;

