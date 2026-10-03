import React from "react";
import "./Footer.css";
/**
 * Barstone LLP – Footer (exact same design as barstone-footer-black-gold.html)
 * Single file: styles are embedded and scoped to .bs-footer, so no Tailwind
 * or other CSS file is needed and nothing will change the colors.
 *
 * Usage: import BarstoneFooter from "./BarstoneFooter";  →  <BarstoneFooter />
 */

const EMAIL = "contact@barstonellp.com";
const WHATSAPP_NUMBER = "919599227270";
const WHATSAPP_DISPLAY = "+91 95992 27270";
const WHATSAPP_MESSAGE = "Hello Barstone LLP, I'd like to discuss a legal matter.";

const WIDE_REGIONS = ["Overall India", "Middle East"];
const REGIONS = ["Dubai", "UAE", "USA", "UK", "Canada", "Australia"];

const BarstoneFooter: React.FC = () => {
const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;
const waLinkWithText = `${waLink}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
  return (
    <footer className="bs-footer">

      <section className="crest">
        <div className="mono" aria-hidden="true">
          <span>B</span>
        </div>
        <h2>
          Barstone<em>LLP</em>
        </h2>
        <p>
          Trusted legal counsel for individuals and businesses across borders, with clarity, discretion and care.
        </p>
      </section>
      <div className="rule" />

      <div className="cols">
        <div>
          <h3>Services available in</h3>
          <p className="sub">Serving clients across these regions</p>
          <ul className="regions">
            {WIDE_REGIONS.map((r) => (
              <li key={r} className="wide">
                {r}
              </li>
            ))}
            {REGIONS.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Get in touch</h3>
          <p className="sub">Write to us or message directly</p>

          <a className="row" href={`mailto:${EMAIL}`}>
            <span className="ico">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span>
              <small>Email</small>
              <b>{EMAIL}</b>
            </span>
          </a>

          <a className="row" href={waLink} target="_blank" rel="noopener noreferrer">
            <span className="ico">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 19l1.2-3.8A8 8 0 1 1 9 18z" />
              </svg>
            </span>
            <span>
              <small>WhatsApp</small>
              <b>{WHATSAPP_DISPLAY}</b>
            </span>
          </a>

          <a className="btn" href={waLinkWithText} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.5.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.3z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="base">
        <div>
          <span>© {new Date().getFullYear()} Barstone LLP. All rights reserved.</span>
          <span>Attorney advertising. Past results do not guarantee future outcomes.</span>
        </div>
      </div>
    </footer>
  );
};

export default BarstoneFooter;