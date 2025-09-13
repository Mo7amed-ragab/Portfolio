import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-8 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, i’m </span>
              <h1>
                <b>Mohamed Ibrahim Ragab</b> <br />
                Front End Developer
              </h1>
              <div className="hero-btns">
                <Link legacyBehavior href="#contact">
                  <a className="theme-btn">
                    Contact Me <i className="far fa-angle-right" />
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://drive.google.com/uc?export=download&id=1kZ7FgynItvss6gd1sDCZ6-w7YCPxWPy9"
                >
                  <a rel="noopener noreferrer" className="theme-btn" download>
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/hero/me3.png" alt="Author" />
              <div className="progress-shape">
                <img
                  src="assets/images/hero/progress-shape.png"
                  alt="Progress"
                />
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
export default Hero;
