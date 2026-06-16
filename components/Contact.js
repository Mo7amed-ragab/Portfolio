"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mgobqzay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="contact" className="contact-area rel z-1 overflow-hidden">
      <div className="for-bgc-black py-130 rpy-100 rel">
        {/* Background Decorative Elements */}
        <div className="contact-grid-background" />
        <div className="contact-bg-glow" />

        <div className="container">
          <motion.div
            className="row gap-80 align-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Column: Premium Contact Form */}
            <div className="col-lg-6 order-2 order-lg-1">
              <motion.div
                className="premium-form-card overlay-glow"
                variants={fadeInUp}
              >
                <div className="form-head mb-35">
                  <span className="badge-status mb-20">Get In Touch</span>
                  <h3 className="form-title">Let’s Workspace Together</h3>
                </div>

                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group-premium">
                        <label>Full Name</label>
                        <div className="input-wrap">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name..."
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <i className="far fa-user" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-premium">
                        <label>Email Address</label>
                        <div className="input-wrap">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email..."
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <i className="far fa-envelope-open" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group-premium">
                        <label>Phone Number (Optional)</label>
                        <div className="input-wrap">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone..."
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          <i className="fas fa-phone" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group-premium">
                        <label>Message Content</label>
                        <div className="input-wrap">
                          <textarea
                            name="message"
                            rows={4}
                            placeholder="Write Message..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-10">
                      <button
                        type="submit"
                        className={`submit-btn-premium ${formStatus === "success" ? "success" : ""}`}
                        disabled={
                          formStatus === "sending" || formStatus === "success"
                        }
                      >
                        <AnimatePresence mode="wait">
                          {formStatus === "idle" && (
                            <motion.span
                              key="idle"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              Send Message{" "}
                              <i className="fas fa-paper-plane ms-2" />
                            </motion.span>
                          )}
                          {formStatus === "sending" && (
                            <motion.span
                              key="sending"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="d-flex align-items-center"
                            >
                              <div className="spinner-border spinner-border-sm me-3" />
                              Sending...
                            </motion.span>
                          )}
                          {formStatus === "success" && (
                            <motion.span
                              key="success"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              Message Sent{" "}
                              <i className="fas fa-check-circle ms-2" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Right Column: High-Impact Content */}
            <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
              <motion.div
                className="contact-info-content rel"
                variants={stagger}
              >
                {/* Neon Glow Accent */}
                <div className="content-side-glow" />

                <motion.div className="section-title mb-45" variants={fadeInUp}>
                  <span className="sub-title mb-15">Contact Me</span>
                  <h2 className="mb-25">
                    Ready to Build the{" "}
                    <span className="hero-v2__title-gradient">Future</span> of
                    Web?
                  </h2>
                  <p className="lead-text-premium mb-30">
                    Whether you're looking for a performance audit, a complex
                    dashboard, or a scalable enterprise application, let's
                    connect and architect something remarkable.
                  </p>
                </motion.div>

                <motion.div className="contact-specialties" variants={stagger}>
                  {[
                    "Scalable Architecture & Design Systems",
                    "Next-gen React & SSR Optimization",
                    "High-Performance Data Visualization",
                    "Complex State Orchestration",
                  ].map((service, i) => (
                    <motion.div
                      key={i}
                      className="specialty-item"
                      variants={fadeInUp}
                    >
                      <div className="dot-icon" />
                      <span>{service}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="contact-grid-background" />
      </div>
    </section>
  );
};

export default Contact;
