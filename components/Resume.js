"use client";
import { motion } from "framer-motion";

const Resume = () => {
  const journey = [
    {
      role: "Front-End Developer",
      company: "DomApp",
      duration: "Dec 2024 - Present",
      icon: "fas fa-briefcase",
      side: "right",
      badge: "Work",
    },
    {
      role: "Front-End Developer",
      company: "DESIGNAL ENGINEERING",
      duration: "June 2024 - Dec 2024",
      icon: "fas fa-briefcase",
      side: "left",
      badge: "Work",
    },
    {
      role: "PHP Web Developer Intern",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      duration: "Apr 2024 - Oct 2024",
      icon: "fas fa-code-branch",
      side: "right",
      badge: "Training",
    },
    {
      role: "PHP Web Developer Intern",
      company: "Information Technology Institute (ITI)",
      duration: "Jul 2022 - Sep 2022",
      icon: "fas fa-laptop-code",
      side: "left",
      badge: "Training",
    },
    {
      role: "Bachelor's degree in computers and information",
      company: "Kafr El Sheikh University",
      duration: "2019 - 2023",
      icon: "fas fa-graduation-cap",
      side: "right",
      badge: "Education",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experiences"
      className="for-bgc-black resume-area rel z-1 py-130 rpt-145 pb-100"
    >
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              className="section-title text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="sub-title mb-15">Experience</span>
              <h2>
                My Professional{" "}
                <span className="hero-v2__title-gradient">Journey</span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Narrative Journey Timeline */}
        <div className="journey-timeline-wrap rel">
          {/* Central Vertical Line */}
          <div className="journey-path-line" />

          {journey.map((item, index) => (
            <div key={index} className={`journey-item-row ${item.side}`}>
              <div className="journey-node">
                <div className="node-inner" />
              </div>

              <motion.div
                className="journey-content-card"
                initial={{ opacity: 0, x: item.side === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="card-inner">
                  <div className="card-top">
                    <span className="journey-badge">{item.badge}</span>
                    <span className="journey-date">{item.duration}</span>
                  </div>
                  <h3 className="journey-role">{item.role}</h3>
                  <div className="journey-meta">
                    <i className={item.icon} />
                    <span>{item.company}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Component */}
      <div className="resume-grid-background" />
    </section>
  );
};

export default Resume;
