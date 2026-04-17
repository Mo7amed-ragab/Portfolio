"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return <Footer1 />;
};

export default Footer;

const Footer1 = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="main-footer rel z-1 bgc-black">
      {/* Decorative Top Border */}
      <div className="footer-glow-top" />

      <div className="footer-top-wrap pt-100 pb-40">
        <div className="container">
          <motion.div
            className="row gap-40 pb-60"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand & About */}
            <motion.div className="col-lg-4 col-md-6" variants={itemVariants}>
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-25">
                  <h3
                    className="text-white mb-0"
                    style={{ letterSpacing: "2px" }}
                  >
                    <span style={{ color: "#c9f31d" }}>&lt;</span>MR
                    <span style={{ color: "#c9f31d" }}>/&gt;</span>
                  </h3>
                </div>
                <p className="footer-desc">
                  Building high-fidelity digital experiences with focus on
                  performance, scalability, and intuitive user interfaces.
                </p>
                <div className="social-style-one mt-25">
                  {[
                    {
                      href: "https://www.linkedin.com/in/mo7amed-ibrahim/",
                      icon: "fab fa-linkedin-in",
                    },
                    {
                      href: "https://github.com/Mo7amed-ragab",
                      icon: "fab fa-github",
                    },
                    {
                      href: "https://www.facebook.com/midooraga",
                      icon: "fab fa-facebook-f",
                    },
                    {
                      href: "https://www.instagram.com/mohamed_raagab_/",
                      icon: "fab fa-instagram",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: "#c9f31d",
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{ color: "white" }}
                    >
                      <motion.i
                        className={social.icon}
                        whileHover={{ color: "#000" }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="col-lg-3 col-md-6" variants={itemVariants}>
              <div className="footer-widget menu-widget">
                <h6 className="footer-title">Navigation</h6>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Me</a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Column 3: Contact Info */}
            <motion.div className="col-lg-5 col-md-12" variants={itemVariants}>
              <div className="footer-widget contact-widget">
                <h6 className="footer-title">Get In Touch</h6>
                <ul className="footer-contact-list">
                  <motion.li whileHover={{ x: 5 }}>
                    <div className="icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="text">Cairo, Egypt</div>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }}>
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="text">
                      <a href="mailto:mohamedragab0160@gmail.com">
                        mohamedragab0160@gmail.com
                      </a>
                    </div>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }}>
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="text">
                      <a href="callto:+20109232755">+20 1092321755</a>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Merged Footer Bottom */}
          <div className="footer-bottom-inner">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="copyright-text mb-0">
                  Copyright © {date}{" "}
                  <span className="text-primary">Mohamed Ragab</span>. All
                  Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <motion.a
                  href="#"
                  className="back-to-top-btn"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-arrow-up" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="footer-shapes">
        <div className="shape-one" />
        <div className="shape-two" />
      </div>
    </footer>
  );
};
