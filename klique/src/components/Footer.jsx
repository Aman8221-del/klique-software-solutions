import { useEffect, useState } from "react";
import kliqueLogo from "../assets/kliquelogo.png";

function Footer({ onLinkClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLink = (e, path) => {
    if (onLinkClick) {
      onLinkClick(e, path);
    }
  };

  return (
    <footer className="relative bg-[#eeeeee] text-slate-800">
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.5fr] gap-12 lg:gap-10">
          {/* =================================================
              BRAND SECTION
          ================================================= */}
          <div className="lg:pr-10">
            <a
              href="/"
              onClick={(e) => handleLink(e, "/")}
              className="inline-flex items-center group"
            >
              <img
                src={kliqueLogo}
                alt="Klique Software Solutions"
                width={96}
                height={96}
                loading="lazy"
                className="h-20 sm:h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            <p className="mt-5 max-w-sm text-[15px] leading-7 text-slate-500">
              We help businesses turn ideas into powerful digital solutions
              through technology, design and strategy.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-7">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/klique-software-solutions-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-11 h-11 rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 transition-all duration-300 hover:bg-[#0d5fd4] hover:border-[#0d5fd4] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="text-sm font-bold">in</span>
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group w-11 h-11 rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 transition-all duration-300 hover:bg-[#0d5fd4] hover:border-[#0d5fd4] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="text-base font-bold">f</span>
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group w-11 h-11 rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 transition-all duration-300 hover:bg-[#0d5fd4] hover:border-[#0d5fd4] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="group w-11 h-11 rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 transition-all duration-300 hover:bg-[#0d5fd4] hover:border-[#0d5fd4] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="text-base font-medium">𝕏</span>
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}
          <div className="lg:px-6">
            <h4 className="text-[16px] font-bold tracking-tight text-slate-900">
              Quick Links
            </h4>

            <div className="w-9 h-1 bg-[#0d5fd4] rounded-full mt-3 mb-6" />

            <ul className="space-y-5">
              <li>
                <a
                  href="/blog"
                  onClick={(e) => handleLink(e, "/blog")}
                  className="group flex items-center gap-3 text-[15px] text-slate-600 hover:text-[#0d5fd4] transition-colors"
                >
                  <span className="text-[#0d5fd4] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, "/services")}
                  className="group flex items-center gap-3 text-[15px] text-slate-600 hover:text-[#0d5fd4] transition-colors"
                >
                  <span className="text-[#0d5fd4] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => handleLink(e, "/contact-us")}
                  className="group flex items-center gap-3 text-[15px] text-slate-600 hover:text-[#0d5fd4] transition-colors"
                >
                  <span className="text-[#0d5fd4] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* =================================================
              CAREER
          ================================================= */}
          <div className="lg:px-6">
            <h4 className="text-[16px] font-bold tracking-tight text-slate-900">
              Career
            </h4>

            <div className="w-9 h-1 bg-[#0d5fd4] rounded-full mt-3 mb-6" />

            <ul className="space-y-5">
              <li>
                <a
                  href="/apply-trainer"
                  onClick={(e) => handleLink(e, "/apply-trainer")}
                  className="group flex items-center gap-3 text-[15px] text-slate-600 hover:text-[#0d5fd4] transition-colors"
                >
                  <span className="text-[#0d5fd4] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                  Trainer
                </a>
              </li>

              <li>
                <a
                  href="/apply-trainee"
                  onClick={(e) => handleLink(e, "/apply-trainee")}
                  className="group flex items-center gap-3 text-[15px] text-slate-600 hover:text-[#0d5fd4] transition-colors"
                >
                  <span className="text-[#0d5fd4] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                  Trainee
                </a>
              </li>

              <li>
                <a
                  href="/apply-freelancer"
                  onClick={(e) => handleLink(e, "/apply-freelancer")}
                  className="group flex items-center gap-3 text-[15px] text-slate-600 hover:text-[#0d5fd4] transition-colors"
                >
                  <span className="text-[#0d5fd4] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                  Freelancer
                </a>
              </li>
            </ul>
          </div>

          {/* =================================================
              CONTACT INFO
          ================================================= */}
          <div className="lg:pl-6">
            <h4 className="text-[16px] font-bold tracking-tight text-slate-900">
              Contact Info
            </h4>

            <div className="w-9 h-1 bg-[#0d5fd4] rounded-full mt-3 mb-6" />

            <div className="space-y-5">
              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0d5fd4]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                <p className="text-[14px] leading-6 text-slate-600 pt-1">
                  202, Pragati Nagar, Kotra
                  <br />
                  305004, Ajmer, Rajasthan, India
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0d5fd4]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3,7 12,13 21,7" />
                  </svg>
                </div>

                <a
                  href="mailto:hr@kliquesoftwaresolutions.com"
                  className="text-[14px] text-slate-600 hover:text-[#0d5fd4] transition-colors pt-3 break-all"
                >
                  hr@kliquesoftwaresolutions.com
                </a>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0d5fd4]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.07 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.35 1.77.68 2.61a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.29-1.29a2 2 0 0 1 2.11-.45c.84.33 1.71.56 2.61.68A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>

                <a
                  href="tel:+917014294738"
                  className="text-[14px] text-slate-600 hover:text-[#0d5fd4] transition-colors pt-3"
                >
                  +91-7014-294-738
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}
      <div className="relative border-t border-slate-300/90 bg-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* COPYRIGHT */}
            <p className="text-sm text-slate-500 text-center lg:text-left">
              © {new Date().getFullYear()}{" "}
              <strong className="text-[#0d5fd4] font-semibold">
                Klique Software Solutions
              </strong>
              . All rights reserved.
            </p>

            {/* LANGUAGE */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <path d="M12 3a14 14 0 0 1 0 18" />
                <path d="M12 3a14 14 0 0 0 0 18" />
              </svg>

              <span>English</span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* LEGAL LINKS */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
              <a
                href="/privacy-policy"
                onClick={(e) => handleLink(e, "/privacy-policy")}
                className="text-slate-500 hover:text-[#0d5fd4] transition-colors"
              >
                Privacy Policy
              </a>

              <span className="hidden sm:block text-slate-300">|</span>

              <a
                href="/terms-conditions"
                onClick={(e) => handleLink(e, "/terms-conditions")}
                className="text-slate-500 hover:text-[#0d5fd4] transition-colors"
              >
                Terms & Conditions
              </a>

              <span className="hidden sm:block text-slate-300">|</span>

              <a
                href="/cookie-policy"
                onClick={(e) => handleLink(e, "/cookie-policy")}
                className="text-slate-500 hover:text-[#0d5fd4] transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 w-14 h-14 rounded-2xl bg-[#0d5fd4] text-white flex items-center justify-center shadow-xl shadow-blue-500/25 hover:bg-[#004bb5] hover:-translate-y-1 transition-all duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      )}
    </footer>
  );
}

export default Footer;
