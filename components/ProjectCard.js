"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getTechDetails } from "@/utility/techIcons";
import { HiCheckCircle } from "react-icons/hi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const ProjectCard = ({ project, isReversed }) => {
  const imageColumn = (
    <div
      className={isReversed ? "col-lg-6" : "col-md-6"}
      style={{ position: "relative" }}
    >
      <div
        className="d-none d-xl-block"
        style={{
          position: "absolute",
          top: "-47%",
          [isReversed ? "left" : "right"]: "-22px",
          width: "220px",
          zIndex: 50,
          pointerEvents: "none",
          transform: isReversed ? "scaleX(-1)" : "scaleX(1)",
        }}
      >
        <svg
          width="220"
          height="150"
          viewBox="0 0 220 150"
          fill="none"
          style={{ overflow: "visible" }}
        >
          {/* Main animated swoop with a central loop */}
          <motion.path
            d="M 210 20 C 160 20, 160 100, 120 100 C 80 100, 80 40, 110 40 C 140 40, 100 80, 20 100"
            stroke="#c9f31d"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.1 }}
          />
          {/* Arrowhead pointing down-left (ends at 20, 100) */}
          <motion.path
            d="M 20 100 L 32 88 M 20 100 L 40 103"
            stroke="#c9f31d"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 1.4 }}
          />
        </svg>
      </div>
      <div
        className="project-item wow fadeInUp delay-0-2s mb-10"
        style={{ padding: "0 10px" }}
      >
        <div className="premium-image-wrapper">
          <Image
            src={project.image}
            alt={project.alt}
            width={800}
            height={600}
            className="premium-image"
            style={{ width: "100%", height: "auto" }}
            priority={false}
          />
          {project.link && (
            <Link legacyBehavior href={project.link}>
              <a
                className="premium-overlay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.ariaLabel}
              >
                <div className="premium-overlay-content">
                  <span>View Live</span>
                  <span className="pulse-dot" />
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  const contentColumn = (
    <div className="col-xl-6 col-lg-6">
      <div className="project-content wow fadeInRight delay-0-2s">
        <h2>{project.title}</h2>
        {project.subTitle && <h4 className="pb-4">{project.subTitle}</h4>}
        <ul className="project-bullets">
          {project.bullets.map((bullet, i) => (
            <li key={i}>
              <HiCheckCircle className="bullet-icon" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="project-tech-stack"
        >
          {project.techStack.map((tech, i) => {
            const details = getTechDetails(tech);
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="tech-tag"
              >
                <span className="tech-tag__icon">
                  {details.iconSvg ? (
                    <img
                      src={details.iconSvg}
                      alt={details.name}
                      width={18}
                      height={18}
                    />
                  ) : (
                    details.icon && <details.icon color={details.color} />
                  )}
                </span>
                <span className="tech-tag__label">{tech}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="row align-items-center position-relative mb-5">
      {isReversed ? (
        <>
          {contentColumn}
          {imageColumn}
        </>
      ) : (
        <>
          {imageColumn}
          {contentColumn}
        </>
      )}
    </div>
  );
};

export default ProjectCard;
