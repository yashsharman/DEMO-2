import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="text-primary size-8">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="#facc15"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Aura Spaces</h2>
            </div>
            <p className="text-cream/60 max-w-sm font-light leading-relaxed">
              Creating timeless interiors that resonate with elegance and
              character. Based in Mumbai, serving worldwide.
            </p>
            <div className="flex gap-6">
              <a
                className="hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium"
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Inquiries
            </h4>
            <ul className="space-y-4 text-cream/60 font-light">
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="mailto:hello@auraspaces.in"
                >
                  hello@auraspaces.in
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="tel:+919876543210"
                >
                  +91 987 654 3210
                </a>
              </li>
              <li>
                602, Lotus Business Park
                <br />
                Mumbai, MH 400053
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Newsletter
            </h4>
            <p className="text-xs text-cream/40 mb-4">
              Subscribe for design insights and project updates.
            </p>
            <form className="flex gap-2">
              <input
                className="bg-white/10 border-none rounded px-4 py-2 w-full text-sm focus:ring-1 focus:ring-primary"
                placeholder="Your Email"
                type="email"
              />
              <button className="bg-primary text-charcoal p-2 rounded flex items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-cream/40">
          <p>© 2024 Aura Spaces Interior Design. All rights reserved.</p>
          <div className="flex gap-8">
            <Link className="hover:text-white transition-colors" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" to="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
