"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Add phone field
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mldwvvoq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset phone field
        setTimeout(() => setFormStatus("idle"), 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
    >
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Contact Me</span>
                <h2>
                  Let’s Talk About Your <span>Next Project</span>
                </h2>
                <p>
                  Have a project in mind or just want to connect? Feel free to
                  reach out. I'm always open to discussing new opportunities and
                  collaborations.
                </p>
              </div>
              <ul className="list-style-two">
                <li>Front-End Development</li>
                <li>Responsive Web Design</li>
                <li>Interactive UI/UX</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-two form-style-one wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                onSubmit={handleSubmit}
              >
                {/* Name Field */}
                <div className="form-group">
                  <label className="for-title" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                    data-error="Please enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="for-icon">
                    <i className="far fa-user" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                {/* Email Field */}
                <div className="form-group">
                  <label className="for-title" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                    data-error="Please enter your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="for-icon">
                    <i className="far fa-envelope" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                {/* Phone Field */}
                <div className="form-group">
                  <label className="for-title" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    data-error="Please enter your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone" className="for-icon">
                    <i className="fas fa-phone" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                {/* Message Field */}
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={7}
                    placeholder="Write Message....."
                    required
                    data-error="Please enter your Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    className="theme-btn"
                    disabled={
                      formStatus === "sending" || formStatus === "success"
                    }
                  >
                    {formStatus === "sending" && "Sending..."}
                    {formStatus === "success" && (
                      <>
                        Sent <i className="far fa-check-circle mx-3" />
                      </>
                    )}
                    {formStatus === "error" && "Error! Try Again"}
                    {formStatus === "idle" && (
                      <>
                        Send Message <i className="far fa-angle-right mx-3" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default Contact;
