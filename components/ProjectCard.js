"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiBootstrap,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiSocketdotio,
  SiAppwrite,
  SiReactrouter,
  SiAxios,
  SiJsonwebtokens,
  SiFramer,
  SiSass,
  SiFormik,
  SiChartdotjs,
  SiI18Next,
} from "react-icons/si";
import {
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaAws,
  FaCloud,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { HiCheckCircle } from "react-icons/hi";

const getTechIcon = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("react.js") || t.includes("react")) return <SiReact />;
  if (t.includes("next.js") || t.includes("next")) return <SiNextdotjs />;
  if (t.includes("typescript")) return <SiTypescript />;
  if (t.includes("javascript") || t === "js") return <SiJavascript />;
  if (t.includes("redux")) return <SiRedux />;
  if (t.includes("tailwind")) return <SiTailwindcss />;
  if (t.includes("bootstrap")) return <SiBootstrap />;
  if (t.includes("html")) return <SiHtml5 />;
  if (t.includes("css")) return <SiCss />;
  if (t.includes("formik")) return <SiFormik />;
  if (t.includes("chart.js") || t.includes("chart")) return <SiChartdotjs />;
  if (t.includes("socket.io")) return <SiSocketdotio />;
  if (t.includes("aws") || t.includes("s3")) return <FaAws />;
  if (t.includes("appwrite")) return <SiAppwrite />;
  if (t.includes("router")) return <SiReactrouter />;
  if (t.includes("axios")) return <SiAxios />;
  if (t.includes("jwt") || t.includes("auth")) return <SiJsonwebtokens />;
  if (t.includes("i18n")) return <SiI18Next />;
  if (t.includes("framer")) return <SiFramer />;
  if (t.includes("sass") || t.includes("scss")) return <SiSass />;
  if (t.includes("api") || t.includes("restful") || t.includes("tmdb"))
    return <TbApi />;
  if (t.includes("responsive") || t.includes("mobile")) return <FaMobileAlt />;
  if (t.includes("globe") || t.includes("world")) return <FaGlobe />;
  if (t.includes("cloud")) return <FaCloud />;
  return <FaCode />;
};

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
    <div className={isReversed ? "col-lg-6" : "col-md-6"}>
      <div className="project-item style-four wow fadeInUp delay-0-2s">
        <div className="image">
          <Image
            src={project.image}
            alt={project.alt}
            width={800}
            height={600}
            style={{ width: "100%", height: "auto" }}
            priority={false}
          />
          {project.link && (
            <Link legacyBehavior href={project.link}>
              <a
                className="hover-box"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.ariaLabel}
              >
                <i className="far fa-arrow-right" />
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
        {project.badge && (
          <span className="project-type-badge">{project.badge}</span>
        )}
        <span className="sub-title">{project.subtitle}</span>
        <h2>{project.title}</h2>
        <p className="project-description">{project.description}</p>
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
          {project.techStack.map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="tech-tag"
            >
              <span className="tech-tag__icon">{getTechIcon(tech)}</span>
              <span className="tech-tag__label">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
        <p className="key-feature">{project.keyFeature}</p>
      </div>
    </div>
  );

  return (
    <div className="row align-items-center">
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
