"use client";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="about-area rel z-1 overflow-hidden">
      <div className="py-130 rpy-100 rel">
        {/* Background Decorative Elements */}
        <div className="about-bg-glow" />

        <div className="container">
          <motion.div
            className="row gap-80 align-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="about-content-part rel z-2">
                <motion.div className="section-title mb-40" variants={fadeInUp}>
                  <span className="sub-title mb-15">About</span>
                  <h2 className="mb-25">
                    Architecting{" "}
                    <span className="hero-v2__title-gradient">Scalable</span>{" "}
                    Web Ecosystems <br /> with React & Next.js
                  </h2>
                  <p className="lead-text mb-20">
                    I engineer high-performance, complex dashboards and
                    data-driven systems where performance and clean architecture
                    are non-negotiable.
                  </p>
                  <p>
                    From modular dashboard components to complex state
                    orchestration, I deliver production-ready code focused on
                    speed, modularity, and measurable business impact.
                  </p>

                  {/* Tech Stack Bar */}
                  <div className="tech-stack-strip mt-30">
                    <span className="tech-label">Core Stack:</span>
                    <div className="tech-tags">
                      {[
                        { name: "React.js", Icon: SiReact, color: "#61dafb" },
                        {
                          name: "Next.js",
                          Icon: SiNextdotjs,
                          color: "#f8fafc",
                        },
                        {
                          name: "TypeScript",
                          Icon: SiTypescript,
                          color: "#3178c6",
                        },
                        { name: "Redux", Icon: SiRedux, color: "#a78bfa" },
                        {
                          name: "Tailwind CSS",
                          Icon: SiTailwindcss,
                          color: "#38bdf8",
                        },
                      ].map((tech) => (
                        <motion.span
                          key={tech.name}
                          className="tech-tag-premium"
                          whileHover={{
                            y: -5,
                            backgroundColor: tech.color,
                            color:
                              tech.color === "#f8fafc" ||
                              tech.color === "#61dafb"
                                ? "#000"
                                : "#fff",
                            borderColor: tech.color,
                          }}
                        >
                          <tech.Icon className="me-2" />
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Skills & Contact */}
            <div className="col-lg-6">
              <div className="about-right-wrap rel z-2">
                {/* Interactive Contact Card */}
                <motion.div
                  className="premium-contact-nexus"
                  variants={fadeInUp}
                >
                  <div className="nexus-grid">
                    {[
                      {
                        label: "Direct Message",
                        val: "m.ragab.dev@gmail.com",
                        link: "mailto:m.ragab.dev@gmail.com",
                        icon: "far fa-envelope-open",
                      },

                      {
                        label: "LinkedIn",
                        val: "mo7amed-ibrahim",
                        link: "https://www.linkedin.com/in/mo7amed-ibrahim/",
                        icon: "fab fa-linkedin-in",
                      },
                      {
                        label: "GitHub",
                        val: "Mo7amed-ragab",
                        link: "https://github.com/Mo7amed-ragab",
                        icon: "fab fa-github",
                      },
                      {
                        label: "Availability",
                        val: (
                          <div className="availability-tag mx-2">
                            <span className="pulse-dot" />
                            <span>Open for Projects</span>
                          </div>
                        ),
                        link: "tel:+201092321755",
                        icon: "far fa-phone",
                      },
                    ].map((item, idx) => (
                      <a
                        href={item.link}
                        key={idx}
                        className="nexus-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="nexus-icon">
                          <i className={item.icon} />
                        </div>
                        <div className="nexus-content">
                          <span className="nexus-label">{item.label}</span>
                          <span className="nexus-val">{item.val}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual background lines */}
      <div className="bg-lines">
        {[...Array(10)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </section>
  );
};

export default About;
