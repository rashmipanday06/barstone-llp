
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BarstoneLogo } from "../common/Logo";

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("barstone-disclaimer-accepted");

    if (!accepted) {
      setShowDisclaimer(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("barstone-disclaimer-accepted", "true");
    document.body.style.overflow = "";
    setShowDisclaimer(false);
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com/";
  };

  return (
    <AnimatePresence>
      {showDisclaimer && (
        <motion.div
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-y-auto bg-[#0B0B0B] px-5 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative gold line */}
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent" />

          <motion.div
            className="relative w-full max-w-3xl border border-[#2A2A2A] bg-[#0B0B0B] px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Logo */}
            <div className="mb-10 flex justify-center">
              <BarstoneLogo
                variant="stacked"
                theme="dark"
                size={50}
              />
            </div>

            {/* Heading */}
            <div className="mb-8 text-center">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                BARSTONE LLP
              </p>

              <h1 className="font-serif text-3xl font-medium tracking-wide text-[#EDE6D6] sm:text-4xl">
                Disclaimer
              </h1>

              <div className="mx-auto h-px w-16 bg-[#C9A45C]" />
            </div>

            {/* Disclaimer content */}
            <div className="max-h-[45vh] overflow-y-auto pr-2 text-center">
              <p className="font-sans text-sm leading-7 text-[#B8B2A7] sm:text-[15px]">
                {/* 
                  REPLACE THIS TEXT WITH THE EXACT DISCLAIMER
                  PROVIDED BY THE CLIENT.
                */}

                The information contained on this website is for general
                informational purposes only and does not constitute legal
                advice or create an attorney-client relationship. The
                information provided may not reflect the most current legal
                developments and should not be relied upon as a substitute
                for specific legal advice.
              </p>

              <p className="mt-5 font-sans text-sm leading-7 text-[#B8B2A7] sm:text-[15px]">
                Please do not act or refrain from acting on the basis of any
                information contained on this website without obtaining
                appropriate professional legal advice.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleAccept}
                className="group relative overflow-hidden border border-[#C9A45C] px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C] transition-colors duration-500"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#C9A45C] transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0B0B0B]">
                  I Accept
                </span>
              </button>

              <button
                type="button"
                onClick={handleExit}
                className="border border-[#2A2A2A] px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#8F8A81] transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
              >
                Exit
              </button>
            </div>

            {/* Footer note */}
            <p className="mt-8 text-center font-sans text-[10px] uppercase tracking-[0.2em] text-[#5F5B55]">
              By continuing, you acknowledge and accept this disclaimer.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Disclaimer;

