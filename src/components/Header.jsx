import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-cream dark:border-charcoal/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-yellow-400 size-8">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Aura Spaces</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            to="/studio"
          >
            Our Studio
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
        <Link
          to="/contact"
          className="bg-yellow-400 hover:bg-primary/90 text-charcoal px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
        >
          Consultation
        </Link>
      </div>
    </header>
  );
}

export default Header;
