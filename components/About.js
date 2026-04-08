const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    <span>Frontend Developer</span> building scalable dashboards
                    <br />& real-world systems
                  </h2>
                  <p>
                    I specialize in developing production-level applications,
                    including admin systems and client platforms, where I handle
                    features end-to-end — from understanding requirements to
                    implementation, code review, and delivery. Worked on complex
                    systems such as Tickets Management, Roles & Permissions,
                    Dashboards, Reports, and dynamic form builders, focusing on
                    performance, scalability, and clean architecture. I enjoy
                    turning complex workflows into intuitive user experiences
                    while maintaining high code quality, performance
                    optimization, and reusable component architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                <li>React.js</li>
                <li>State Management</li>
                <li>API Integration</li>
                <li>Scalable Systems</li>
              </ul>
              <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                <div className="info-box-item">
                  <i className="far fa-envelope" />
                  <div className="content">
                    <span>Email Us</span>
                    <br />
                    <a href="mailto:mohamedragab0160@gmail.com">
                      mohamedragab0160@gmail.com
                    </a>
                  </div>
                </div>
                <div className="info-box-item">
                  <i className="far fa-phone" />
                  <div className="content">
                    <span>Make A Call</span>
                    <br />
                    <a href="callto:+20109232755">+20 1092321755</a>
                  </div>
                </div>
                <div className="info-box-item">
                  <i className="fab fa-linkedin-in" />
                  <div className="content">
                    <span>LinkedIn</span>
                    <br />
                    <a
                      href="https://www.linkedin.com/in/mo7amed-ibrahim/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      mo7amed-ibrahim
                    </a>
                  </div>
                </div>
                <div className="info-box-item">
                  <i className="fab fa-github" />
                  <div className="content">
                    <span>GitHub</span>
                    <br />
                    <a
                      href="https://github.com/Mo7amed-ragab"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mo7amed-ragab
                    </a>
                  </div>
                </div>
              </div>
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
      </div>
    </section>
  );
};
export default About;
