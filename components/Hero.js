"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Skills from "./Skills";

const textVariant = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const skillsVariant = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: 0.08, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section id="home" className="hero-v2 rel z-1">
      <div className="hero-grid-background" />
      <div className="hero-glow-background" />

      <div className="container">
        <div className="row align-items-center hero-v2__row">
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="col-lg-6 hero-v2__content-col"
            suppressHydrationWarning
          >
            <div className="hero-v2__greeting">
              <span className="hero-v2__greeting-wave" aria-hidden="true">
                👋
              </span>
              <span>Hey, I&apos;m</span>
            </div>

            <h1
              className="hero-v2__title"
              style={{ fontFamily: "var(--font-dm_sans)" }}
            >
              <span className="hero-v2__title-main">Mohamed Ibrahim</span>{" "}
              <span className="hero-v2__title-gradient">Ragab</span>
            </h1>

            <p className="hero-v2__description">
              Specializing in engineering high-fidelity Dashboards and complex
              web ecosystems. I bridge the gap between sophisticated design and
              scalable performance using the modern React stack.
            </p>

            <div className="hero-v2__actions mb-5 mb-lg-0 pb-4 pb-lg-0">
              <Link
                href="https://drive.google.com/uc?export=download&id=1TbicRDl_j825eTxAf5newn4QLxNmHJEr"
                download
                className="hero-v2__button hero-v2__button--primary"
              >
                <span>
                  Download CV <i className="ms-2 fs-5 far fa-arrow-right" />
                </span>
              </Link>

              <Link
                href="#contact"
                className="hero-v2__button hero-v2__button--secondary"
              >
                <span>
                  Contact Me <i className="ms-2 fs-5 far fa-arrow-right" />
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={skillsVariant}
            initial="hidden"
            animate="visible"
            className="col-lg-6 hero-v2__skills-col"
            suppressHydrationWarning
          >
            <Skills />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
