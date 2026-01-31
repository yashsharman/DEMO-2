function Studio() {
  const team = [
    {
      name: "Ananya Mehta",
      role: "Founder & Principal Designer",
      image: "/src/assets/images/hero.jpg",
      bio: "20+ years of experience in luxury residential and heritage design.",
    },
    {
      name: "Rohan Kapoor",
      role: "Senior Interior Architect",
      image: "/src/assets/images/project1.jpg",
      bio: "Specializes in spatial planning and architectural detailing.",
    },
    {
      name: "Priya Sharma",
      role: "Lead Designer",
      image: "/src/assets/images/project2.jpg",
      bio: "Expert in color theory and material curation.",
    },
    {
      name: "Vikram Singh",
      role: "Project Manager",
      image: "/src/assets/images/project3.jpg",
      bio: "Ensures seamless execution from concept to completion.",
    },
  ];

  const values = [
    {
      icon: "auto_awesome",
      title: "Excellence",
      description:
        "We pursue perfection in every detail, from initial sketches to final installations.",
    },
    {
      icon: "eco",
      title: "Sustainability",
      description:
        "Committed to eco-friendly practices and sustainable material choices.",
    },
    {
      icon: "diversity_3",
      title: "Collaboration",
      description:
        "We work closely with clients, artisans, and craftsmen to achieve shared visions.",
    },
    {
      icon: "history_edu",
      title: "Heritage",
      description:
        "Honoring traditional Indian craftsmanship while embracing contemporary design.",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cream/30 dark:bg-charcoal/20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
            About Us
          </h3>
          <h1 className="text-5xl md:text-7xl font-display italic mb-8">
            Our Studio
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-3xl mx-auto">
            Founded in Mumbai, Aura Spaces has been crafting extraordinary
            interiors that blend heritage aesthetics with contemporary soul for
            over two decades.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/src/assets/images/philosophy.jpg")',
                }}
              ></div>
            </div>
            <div className="space-y-8">
              <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
                Our Story
              </h3>
              <h2 className="text-4xl md:text-5xl font-display italic leading-tight">
                Where It All Began
              </h2>
              <div className="space-y-6 text-charcoal/70 dark:text-cream/70 leading-relaxed">
                <p>
                  Aura Spaces was born from a deep passion for creating
                  environments that truly feel like home. Founded by Ananya
                  Mehta in 2003, our studio began with a simple mission: to
                  craft spaces that honor India's rich design heritage while
                  embracing contemporary aesthetics.
                </p>
                <p>
                  Over the years, we've had the privilege of working with
                  discerning clients across India and beyond, each project
                  adding a new chapter to our story. From intimate apartments to
                  sprawling villas, from heritage restorations to cutting-edge
                  commercial spaces, our portfolio reflects our commitment to
                  design excellence.
                </p>
                <p>
                  Today, Aura Spaces is recognized as one of India's leading
                  interior design studios, with numerous awards and features in
                  prestigious design publications. But what truly drives us is
                  the joy of seeing our clients' visions come to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-cream/30 dark:bg-charcoal/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
              What Drives Us
            </h3>
            <h2 className="text-4xl md:text-6xl font-display italic">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    {value.icon}
                  </span>
                </div>
                <h4 className="text-xl font-display">{value.title}</h4>
                <p className="text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
              Meet The Team
            </h3>
            <h2 className="text-4xl md:text-6xl font-display italic mb-6">
              The Creative Minds
            </h2>
            <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto">
              A diverse team of passionate designers, architects, and project
              managers dedicated to bringing your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group space-y-6">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url("${member.image}")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-display group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary uppercase tracking-widest">
                    {member.role}
                  </p>
                  <p className="text-sm text-charcoal/70 dark:text-cream/70">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 px-6 bg-cream/30 dark:bg-charcoal/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
              Recognition
            </h3>
            <h2 className="text-4xl md:text-6xl font-display italic">
              Awards & Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="text-5xl font-display text-primary">2024</div>
              <h4 className="text-lg font-display">Best Residential Design</h4>
              <p className="text-sm text-charcoal/60 dark:text-cream/60">
                Indian Interior Design Awards
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-display text-primary">2023</div>
              <h4 className="text-lg font-display">Heritage Restoration</h4>
              <p className="text-sm text-charcoal/60 dark:text-cream/60">
                National Architecture Awards
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-display text-primary">2022</div>
              <h4 className="text-lg font-display">Designer of the Year</h4>
              <p className="text-sm text-charcoal/60 dark:text-cream/60">
                Design India Magazine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-20 px-6 border-t border-b border-cream dark:border-charcoal/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-charcoal/50 dark:text-cream/50 mb-12">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-16 opacity-50">
            <div className="text-2xl font-display">Architectural Digest</div>
            <div className="text-2xl font-display">Elle Decor</div>
            <div className="text-2xl font-display">Design India</div>
            <div className="text-2xl font-display">Living Etc</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display italic">
            Let's Work Together
          </h2>
          <p className="text-lg text-charcoal/70 dark:text-cream/70">
            We'd love to hear about your project and explore how we can bring
            your vision to life.
          </p>
          <button className="bg-primary text-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Get In Touch
          </button>
        </div>
      </section>
    </main>
  );
}

export default Studio;
