import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Container from "../common/Container";
import { BarstoneLogo } from "../common/Logo";

const nav = [
  { label: "About", path: "/about", section: "about" },
  {
    label: "Practices",
    path: "/practices",
    section: "practices",
  },
  { label: "People", path: "/people", section: "people" },
  {
    label: "Sector & Industries",
    path: "/insights",
    section: "insights",
  },
  {
    label: "Careers",
    path: "/careers",
    section: "careers",
  },
  {
    label: "Contact",
    path: "/contact",
    section: "contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const [active, setActive] = useState("About");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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

  // Scroll to the requested homepage section
  // after the URL changes.
  useEffect(() => {
    const currentSection = nav.find(
      (item) => item.path === location.pathname
    );

    if (!currentSection) return;

    const element = document.getElementById(
      currentSection.section
    );

    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.pathname]);

  const solid = scrolled || open;

  const handleSectionNavigation = (
    path: string,
    label: string
  ) => {
    setActive(label);
    setOpen(false);

    navigate(path);
  };

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
          onClick={() => {
            setActive("");
            setOpen(false);

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
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
              <a
                key={item.label}
                href={item.path}
                className={`bs-link ${
                  active === item.label ? "on" : ""
                }`}
                onClick={(event) => {
                  event.preventDefault();

                  handleSectionNavigation(
                    item.path,
                    item.label
                  );
                }}
              >
                {item.label}
              </a>
            ))}

            {/* <Link to="/contact" className="bs-cta">
              <span>CONTACT</span>
            </Link> */}
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
                <a
                  key={item.label}
                  href={item.path}
                  className="bs-mlink"
                  style={{
                    color:
                      active === item.label
                        ? "#E9B99B"
                        : undefined,
                  }}
                  onClick={(event) => {
                    event.preventDefault();

                    handleSectionNavigation(
                      item.path,
                      item.label
                    );
                  }}
                >
                  <span>{item.label}</span>

                  <span
                    aria-hidden="true"
                    style={{
                      width: 6,
                      height: 6,
                      background:
                        "rgba(233,185,155,.6)",
                      transform: "rotate(45deg)",
                    }}
                  />
                </a>
              ))}

              <Link
                to="/contact"
                className="mt-7 block border text-center"
                style={{
                  padding: 16,
                  background: "#E9B99B",
                  color: "#0A0A0A",
                  borderColor: "#E9B99B",
                  fontFamily:
                    "'Cormorant Garamond', serif",
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