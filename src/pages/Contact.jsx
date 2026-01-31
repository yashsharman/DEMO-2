function Contact() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cream/30 dark:bg-charcoal/20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Get In Touch
          </h3>
          <h1 className="text-5xl md:text-7xl font-display italic mb-8">
            Let's Talk Design
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-3xl mx-auto">
            Whether you're planning a new project or just exploring ideas, we'd
            love to hear from you. Schedule a complimentary consultation today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label
                      className="text-sm font-medium uppercase tracking-widest"
                      htmlFor="firstName"
                    >
                      First Name *
                    </label>
                    <input
                      className="w-full px-6 py-4 bg-cream/30 dark:bg-charcoal/20 border border-cream dark:border-charcoal/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      id="firstName"
                      placeholder="John"
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-3">
                    <label
                      className="text-sm font-medium uppercase tracking-widest"
                      htmlFor="lastName"
                    >
                      Last Name *
                    </label>
                    <input
                      className="w-full px-6 py-4 bg-cream/30 dark:bg-charcoal/20 border border-cream dark:border-charcoal/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      id="lastName"
                      placeholder="Doe"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    className="text-sm font-medium uppercase tracking-widest"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-cream/30 dark:bg-charcoal/20 border border-cream dark:border-charcoal/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    id="email"
                    placeholder="john@example.com"
                    required
                    type="email"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    className="text-sm font-medium uppercase tracking-widest"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-cream/30 dark:bg-charcoal/20 border border-cream dark:border-charcoal/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    id="phone"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    className="text-sm font-medium uppercase tracking-widest"
                    htmlFor="projectType"
                  >
                    Project Type *
                  </label>
                  <select
                    className="w-full px-6 py-4 bg-cream/30 dark:bg-charcoal/20 border border-cream dark:border-charcoal/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    id="projectType"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="heritage">Heritage Restoration</option>
                    <option value="landscape">Landscape Design</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label
                    className="text-sm font-medium uppercase tracking-widest"
                    htmlFor="budget"
                  >
                    Budget Range
                  </label>
                  <select
                    className="w-full px-6 py-4 bg-cream/30 dark:bg-charcoal/20 border border-cream dark:border-charcoal/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    id="budget"
                  >
                    <option value="">Select a budget range</option>
                    <option value="under-10">Under ₹10 Lakhs</option>
                    <option value="10-25">₹10-25 Lakhs</option>
                    <option value="25-50">₹25-50 Lakhs</option>
                    <option value="50-100">₹50 Lakhs - 1 Crore</option>
                    <option value="over-100">Over ₹1 Crore</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label
                    className="text-sm font-medium uppercase tracking-widest"
                    htmlFor="message"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    className="w-full px-6 py-4 bg-cream/30 dark:bg-charcoal/20 border border-cream dark:border-charcoal/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    id="message"
                    placeholder="Share your vision, requirements, timeline, and any other relevant details..."
                    required
                    rows="6"
                  ></textarea>
                </div>

                <button
                  className="w-full bg-primary text-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                  type="submit"
                >
                  Submit Inquiry
                </button>

                <p className="text-xs text-charcoal/50 dark:text-cream/50 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-12">
              {/* Office Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display">Visit Our Studio</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      location_on
                    </span>
                    <div>
                      <p className="font-medium mb-1">Mumbai Office</p>
                      <p className="text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                        602, Lotus Business Park
                        <br />
                        Andheri West, Mumbai
                        <br />
                        Maharashtra 400053
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      schedule
                    </span>
                    <div>
                      <p className="font-medium mb-1">Office Hours</p>
                      <p className="text-sm text-charcoal/70 dark:text-cream/70">
                        Monday - Saturday
                        <br />
                        10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      call
                    </span>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a
                        className="text-sm text-charcoal/70 dark:text-cream/70 hover:text-primary transition-colors"
                        href="tel:+919876543210"
                      >
                        +91 987 654 3210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      mail
                    </span>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        className="text-sm text-charcoal/70 dark:text-cream/70 hover:text-primary transition-colors"
                        href="mailto:hello@auraspaces.in"
                      >
                        hello@auraspaces.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    className="w-12 h-12 rounded-full border border-charcoal/20 dark:border-cream/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-charcoal transition-all"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl">IG</span>
                  </a>
                  <a
                    className="w-12 h-12 rounded-full border border-charcoal/20 dark:border-cream/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-charcoal transition-all"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl">IN</span>
                  </a>
                  <a
                    className="w-12 h-12 rounded-full border border-charcoal/20 dark:border-cream/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-charcoal transition-all"
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl">PIN</span>
                  </a>
                </div>
              </div>

              {/* Quick Note */}
              <div className="p-6 bg-cream/30 dark:bg-charcoal/20 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  info
                </span>
                <p className="text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                  <strong className="text-charcoal dark:text-cream">
                    First Consultation Free:
                  </strong>{" "}
                  We offer a complimentary initial consultation to discuss your
                  project needs and explore how we can help bring your vision to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-cream/30 dark:bg-charcoal/20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <span className="material-symbols-outlined text-primary text-6xl">
            map
          </span>
          <p className="text-charcoal/50 dark:text-cream/50">
            Interactive map would be embedded here
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display italic mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal/70 dark:text-cream/70">
              Quick answers to common questions about working with us.
            </p>
          </div>
          <div className="space-y-6">
            <details className="group p-6 bg-cream/30 dark:bg-charcoal/20 rounded-xl">
              <summary className="flex justify-between items-center cursor-pointer list-none font-display text-xl">
                What is your design process?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                Our process begins with a consultation to understand your needs,
                followed by conceptualization, design development, execution,
                and final styling. Each phase includes client reviews to ensure
                your vision is realized.
              </p>
            </details>
            <details className="group p-6 bg-cream/30 dark:bg-charcoal/20 rounded-xl">
              <summary className="flex justify-between items-center cursor-pointer list-none font-display text-xl">
                How long does a typical project take?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                Project timelines vary based on scope and complexity. A typical
                residential project takes 3-6 months from concept to completion,
                while larger or commercial projects may take 6-12 months.
              </p>
            </details>
            <details className="group p-6 bg-cream/30 dark:bg-charcoal/20 rounded-xl">
              <summary className="flex justify-between items-center cursor-pointer list-none font-display text-xl">
                Do you work outside Mumbai?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                Yes! While based in Mumbai, we take on projects across India and
                internationally. We have completed successful projects in Delhi,
                Bangalore, Goa, Udaipur, and other cities.
              </p>
            </details>
            <details className="group p-6 bg-cream/30 dark:bg-charcoal/20 rounded-xl">
              <summary className="flex justify-between items-center cursor-pointer list-none font-display text-xl">
                What services do you offer?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                We offer comprehensive interior design services including
                residential and commercial design, heritage restoration,
                landscape design, color consulting, and custom furniture design.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
