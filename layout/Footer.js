"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const Footer = () => {
  return <Footer1 />;
};

export default Footer;

const Footer1 = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="main-footer rel z-1 bgc-black">
      {/* Decorative Top Border */}
      <div className="footer-glow-top" />

      <div className="footer-top-wrap py-40">
        <div className="container">
          <motion.div
            className="footer-single-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Left: Brand & Copyright */}
            <div className="footer-left">
              <div className="footer-logo">
                <Logo title="MR logo" />
              </div>
              <div className="footer-divider" />
              <p className="copyright-text">
                © {date}{" "}
                <span className="hero-v2__title-gradient">Mohamed Ragab</span>.
                All Rights Reserved.
              </p>
            </div>

            {/* Right: Socials & Back to Top */}
            <div className="footer-right">
              <div className="social-style-one">
                {[
                  {
                    href: "https://www.linkedin.com/in/mo7amed-ibrahim/",
                    icon: "fab fa-linkedin-in",
                    label: "LinkedIn Profile",
                  },
                  {
                    href: "https://github.com/Mo7amed-ragab",
                    icon: "fab fa-github",
                    label: "GitHub Profile",
                  },
                  {
                    href: "https://www.facebook.com/midooraga",
                    icon: "fab fa-facebook-f",
                    label: "Facebook Profile",
                  },
                  {
                    href: "https://www.instagram.com/mohamed_raagab_/",
                    icon: "fab fa-instagram",
                    label: "Instagram Profile",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#c9f31d",
                      color: "#000",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={social.icon} />
                  </motion.a>
                ))}
              </div>

              <div className="footer-divider" />

              <motion.a
                href="#"
                className="back-to-top-circle"
                aria-label="Back to Top"
                whileHover={{
                  y: -5,
                  backgroundColor: "#c9f31d",
                  color: "#000",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-arrow-up" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
