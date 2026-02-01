import project1Img from "../assets/images/project1.jpg";
import project2Img from "../assets/images/project2.jpg";
import project3Img from "../assets/images/project3.jpg";
import project4Img from "../assets/images/project4.jpg";
import heroImg from "../assets/images/hero.jpg";
import philosophyImg from "../assets/images/philosophy.jpg";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "The Obsidian Villa",
      location: "Mumbai, India",
      year: "2023",
      category: "Residential",
      image: project1Img,
      description:
        "A contemporary villa that seamlessly blends modern minimalism with traditional Indian elements. Dark stone facades meet warm wooden interiors.",
    },
    {
      id: 2,
      title: "Sand & Silk Penthouse",
      location: "Delhi",
      year: "2023",
      category: "Residential",
      image: project2Img,
      description:
        "Luxurious penthouse featuring earthy tones and silk textures, creating an oasis of calm in the heart of the city.",
    },
    {
      id: 3,
      title: "Ethereal Heritage Home",
      location: "Udaipur",
      year: "2022",
      category: "Heritage Restoration",
      image: project3Img,
      description:
        "A meticulously restored heritage property that honors its historic roots while incorporating modern comforts.",
    },
    {
      id: 4,
      title: "The Zenith Studio",
      location: "Bangalore",
      year: "2024",
      category: "Commercial",
      image: project4Img,
      description:
        "A creative workspace designed to inspire innovation, featuring flexible zones and biophilic design principles.",
    },
    {
      id: 5,
      title: "Coastal Retreat",
      location: "Goa",
      year: "2023",
      category: "Residential",
      image: heroImg,
      description:
        "A beachfront residence that captures the essence of coastal living with natural materials and open spaces.",
    },
    {
      id: 6,
      title: "Urban Sanctuary",
      location: "Mumbai",
      year: "2024",
      category: "Residential",
      image: philosophyImg,
      description:
        "A serene apartment in the bustling city, designed as a peaceful retreat with thoughtful spatial planning.",
    },
  ];

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Heritage Restoration",
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cream/30 dark:bg-charcoal/20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Our Work
          </h3>
          <h1 className="text-5xl md:text-7xl font-display italic mb-8">
            Portfolio
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-3xl mx-auto">
            Explore our curated collection of spaces where artistry meets
            functionality. Each project tells a unique story of design
            excellence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-cream dark:border-charcoal/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm font-medium uppercase tracking-widest border border-charcoal/20 dark:border-cream/20 rounded-full hover:bg-primary hover:text-charcoal hover:border-primary transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary">
                    <span>{project.category}</span>
                    <span className="text-charcoal/30 dark:text-cream/30">
                      •
                    </span>
                    <span className="text-charcoal/50 dark:text-cream/50">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 dark:text-cream/60">
                    {project.location}
                  </p>
                  <p className="text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                    {project.description}
                  </p>
                  <button className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2 group/btn">
                    View Project
                    <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-cream/30 dark:bg-charcoal/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display italic">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-charcoal/70 dark:text-cream/70">
            Let's collaborate to create a space that reflects your vision and
            lifestyle.
          </p>
          <button className="bg-primary text-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Book a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
