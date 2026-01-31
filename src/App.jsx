function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-charcoal dark:text-cream transition-colors duration-300">
      <div className="fixed inset-0 grain-overlay z-50"></div>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        {/* Top Navigation */}
        <header className="sticky top-0 z-40 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-cream dark:border-charcoal/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-yellow-400 size-8">
                <svg
                  fill="#facc16"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="#facc16"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Aura Spaces</h1>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <a
                className="text-sm font-medium hover:text-yellow-400 transition-colors uppercase tracking-widest"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="text-sm font-medium hover:text-yellow-400 transition-colors uppercase tracking-widest"
                href="#"
              >
                Services
              </a>
              <a
                className="text-sm font-medium hover:text-yellow-400 transition-colors uppercase tracking-widest"
                href="#"
              >
                Our Studio
              </a>
              <a
                className="text-sm font-medium hover:text-yellow-400 transition-colors uppercase tracking-widest"
                href="#"
              >
                Journal
              </a>
            </nav>
            <button className="bg-yellow-400 hover:bg-primary/90 text-charcoal px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all">
              Consultation
            </button>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full h-[90vh] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(27, 23, 14, 0.4) 0%, rgba(27, 23, 14, 0.7) 100%), url("/src/assets/images/hero.jpg")',
              }}
            ></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-display italic leading-tight mb-8">
                Designing Spaces That <br /> Feel Like Home
              </h2>
              <p className="text-white text-lg md:text-xl font-light mb-12 tracking-wide max-w-2xl mx-auto">
                Bespoke luxury interiors crafted for the modern Indian
                lifestyle, blending heritage aesthetics with contemporary soul.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 text-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                  The Portfolio
                </button>
                <button className="border border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all">
                  Book a Consultation
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
              <span className="material-symbols-outlined text-3xl">
                keyboard_double_arrow_down
              </span>
            </div>
          </section>

          {/* Philosophy / Feature Section */}
          <section className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <h3 className="text-yellow-400 text-sm font-bold uppercase tracking-[0.3em]">
                    Our Philosophy
                  </h3>
                  <h2 className="text-4xl md:text-6xl font-display leading-tight">
                    Editorial aesthetics with soulful comfort.
                  </h2>
                  <p className="text-lg text-charcoal/70 dark:text-cream/70 leading-relaxed font-light">
                    We believe that true luxury is not just about expensive
                    materials, but about the harmony of form and function. Each
                    project is a narrative of its inhabitants, told through
                    curated textures and impeccable craftsmanship.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-cream dark:border-charcoal/50">
                    <div className="space-y-3">
                      <span className="material-symbols-outlined text-yellow-400 text-3xl">
                        auto_awesome
                      </span>
                      <h4 className="text-xl font-display">
                        Impeccable Curation
                      </h4>
                      <p className="text-sm opacity-70">
                        Hand-selected pieces that reflect your unique
                        personality and lifestyle requirements.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <span className="material-symbols-outlined text-yellow-400 text-3xl">
                        architecture
                      </span>
                      <h4 className="text-xl font-display">
                        Tailored Elegance
                      </h4>
                      <p className="text-sm opacity-70">
                        Sophisticated designs that speak of quiet luxury and
                        refined spatial intelligence.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/5] bg-cream dark:bg-charcoal rounded-2xl overflow-hidden shadow-2xl rotate-2">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("/src/assets/images/philosophy.jpg")',
                      }}
                    ></div>
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-400/20 backdrop-blur-xl rounded-2xl flex items-center justify-center p-6 text-center border border-yellow-400/30">
                    <p className="font-display italic text-lg leading-tight">
                      "Where heritage meets the future."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section (Asymmetrical Grid) */}
          <section className="py-24 bg-cream/30 dark:bg-charcoal/20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-2xl">
                  <h3 className="text-yellow-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">
                    Portfolio
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-display">
                    Selected Commissions
                  </h2>
                </div>
                <a
                  className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                  href="#"
                >
                  View All Projects
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Project 1 */}
                <div className="md:col-span-8 group cursor-pointer overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage:
                          'url("/src/assets/images/project1.jpg")',
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100 duration-500">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2">
                        Mumbai, India
                      </p>
                      <h4 className="text-3xl font-display italic">
                        The Obsidian Villa
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage:
                          'url("/src/assets/images/project2.jpg")',
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100 duration-500">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2">
                        Delhi
                      </p>
                      <h4 className="text-2xl font-display italic">
                        Sand &amp; Silk Penthouse
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Project 3 */}
                <div className="md:col-span-5 group cursor-pointer overflow-hidden rounded-xl">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage:
                          'url("/src/assets/images/project3.jpg")',
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100 duration-500">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2">
                        Udaipur
                      </p>
                      <h4 className="text-2xl font-display italic">
                        Ethereal Heritage Home
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Project 4 */}
                <div className="md:col-span-7 group cursor-pointer overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage:
                          'url("/src/assets/images/project4.jpg")',
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100 duration-500">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2">
                        Bangalore
                      </p>
                      <h4 className="text-3xl font-display italic">
                        The Zenith Studio
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <span className=" w-max h-max material-symbols-outlined text-yellow-400 text-6xl  mb-8 inline-block">
                format_quote
              </span>
              <h3 className="text-3xl md:text-4xl font-display italic leading-relaxed mb-12">
                "Aura Spaces transformed our house into a sanctuary. Their
                attention to detail and understanding of our cultural roots
                while maintaining a modern aesthetic is truly unparalleled."
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-16 h-px bg-primary mb-6"></div>
                <p className="text-sm font-bold uppercase tracking-[0.3em]">
                  Vikram &amp; Priya Malhotra
                </p>
                <p className="text-xs opacity-50 mt-2">
                  Private Residence, Alibaug
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-stone-300 text-stone-900 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-2 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 size-8">
                    <svg
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                        fill="#facc16"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Aura Spaces
                  </h2>
                </div>
                <p className="text-cream/60 max-w-sm font-light leading-relaxed">
                  Creating timeless interiors that resonate with elegance and
                  character. Based in Mumbai, serving worldwide.
                </p>
                <div className="flex gap-6">
                  <a
                    className="hover:text-yellow-400 transition-colors text-sm uppercase tracking-widest font-medium"
                    href="#"
                  >
                    Instagram
                  </a>
                  <a
                    className="hover:text-yellow-400 transition-colors text-sm uppercase tracking-widest font-medium"
                    href="#"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="hover:text-yellow-400 transition-colors text-sm uppercase tracking-widest font-medium"
                    href="#"
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
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-cream/40">
              <p>© 2024 Aura Spaces Interior Design. All rights reserved.</p>
              <div className="flex gap-8">
                <a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
