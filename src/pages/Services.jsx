import { Link } from "react-router-dom";
import philosophyImg from "../assets/images/philosophy.jpg";

function Services() {
  const services = [
    {
      id: 1,
      icon: "home",
      title: "Residential Design",
      description:
        "Transform your living spaces into personalized sanctuaries that reflect your lifestyle, from apartments to luxury villas.",
      features: [
        "Complete home interiors",
        "Modular kitchen design",
        "Bedroom & living spaces",
        "Custom furniture design",
      ],
    },
    {
      id: 2,
      icon: "apartment",
      title: "Commercial Spaces",
      description:
        "Create inspiring work environments that enhance productivity and embody your brand identity.",
      features: [
        "Office interior design",
        "Retail store design",
        "Restaurant & hospitality",
        "Corporate spaces",
      ],
    },
    {
      id: 3,
      icon: "museum",
      title: "Heritage Restoration",
      description:
        "Preserve the soul of historic properties while seamlessly integrating modern amenities and comfort.",
      features: [
        "Architectural restoration",
        "Heritage home revival",
        "Period-appropriate design",
        "Modern integration",
      ],
    },
    {
      id: 4,
      icon: "landscape",
      title: "Landscape & Outdoor",
      description:
        "Design outdoor spaces that extend your living area, creating harmonious connections with nature.",
      features: [
        "Garden design",
        "Terrace & balcony styling",
        "Outdoor living areas",
        "Sustainable landscaping",
      ],
    },
    {
      id: 5,
      icon: "palette",
      title: "Color & Material Consulting",
      description:
        "Expert guidance on selecting the perfect palette and materials to bring your vision to life.",
      features: [
        "Color scheme development",
        "Material sourcing",
        "Texture coordination",
        "Finish selection",
      ],
    },
    {
      id: 6,
      icon: "chair",
      title: "Custom Furniture Design",
      description:
        "Bespoke furniture pieces crafted to perfectly fit your space and express your unique style.",
      features: [
        "Made-to-order furniture",
        "Upholstery design",
        "Built-in solutions",
        "Artisanal craftsmanship",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We begin with an in-depth consultation to understand your vision, lifestyle, and requirements.",
    },
    {
      step: "02",
      title: "Conceptualization",
      description:
        "Our team develops initial concepts, mood boards, and 3D visualizations of your space.",
    },
    {
      step: "03",
      title: "Design Development",
      description:
        "Detailed plans, material selections, and custom designs are refined to perfection.",
    },
    {
      step: "04",
      title: "Execution",
      description:
        "Expert project management ensures flawless execution with attention to every detail.",
    },
    {
      step: "05",
      title: "Styling",
      description:
        "Final touches with curated décor, art, and accessories that complete your space.",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cream/30 dark:bg-charcoal/20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
            What We Offer
          </h3>
          <h1 className="text-5xl md:text-7xl font-display italic mb-8">
            Our Services
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive design solutions
            tailored to your unique needs and aspirations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group space-y-6 p-8 rounded-2xl hover:bg-cream/30 dark:hover:bg-charcoal/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    {service.icon}
                  </span>
                  <h3 className="text-2xl font-display group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-charcoal/60 dark:text-cream/60"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-cream/30 dark:bg-charcoal/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
              How We Work
            </h3>
            <h2 className="text-4xl md:text-6xl font-display italic mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto">
              A meticulously crafted journey from the first conversation to the
              final reveal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative space-y-4">
                <div className="text-6xl font-display text-primary/20">
                  {item.step}
                </div>
                <h4 className="text-xl font-display">{item.title}</h4>
                <p className="text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${philosophyImg})`,
                }}
              ></div>
            </div>
            <div className="space-y-8">
              <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
                Our Expertise
              </h3>
              <h2 className="text-4xl md:text-5xl font-display italic leading-tight">
                20+ Years of Design Excellence
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-cream/70 leading-relaxed">
                With decades of experience and hundreds of successful projects,
                we bring unparalleled expertise to every commission. Our team of
                award-winning designers and craftsmen ensures that each project
                exceeds expectations.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-cream dark:border-charcoal/50">
                <div>
                  <div className="text-4xl font-display text-primary mb-2">
                    200+
                  </div>
                  <div className="text-sm uppercase tracking-widest opacity-70">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-display text-primary mb-2">
                    15+
                  </div>
                  <div className="text-sm uppercase tracking-widest opacity-70">
                    Awards
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-display text-primary mb-2">
                    98%
                  </div>
                  <div className="text-sm uppercase tracking-widest opacity-70">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display italic">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lg text-cream/70">
            Begin your design journey with a complimentary consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform inline-block"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/portfolio"
              className="border border-cream text-cream px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cream hover:text-charcoal transition-all inline-block"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
