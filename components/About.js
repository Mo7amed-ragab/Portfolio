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
                    Passionate <span>Front-end Developer</span> Crafting
                    Engaging Web Experiences
                  </h2>
                  <p>
                    I specialize in building responsive and user-friendly web
                    interfaces with modern technologies like React.js and
                    Next.js, focusing on clean code and seamless API
                    integration. With a strong eye for UI/UX design, I enjoy
                    transforming complex requirements into intuitive and
                    engaging user experiences. I am a passionate learner, always
                    eager to contribute to innovative projects within a dynamic
                    team.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                <li>React.js Development</li>
                <li>Next.js Development</li>
                <li>UI/UX Design</li>
                <li>Responsive Web Design</li>
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
