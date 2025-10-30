import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-area-four projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Project 1 */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/proj1.png"
                  alt="Fresh Cart E-commerce"
                />
                <Link
                  legacyBehavior
                  href="https://e-commerce-fresh-cart-plum.vercel.app/"
                >
                  <a
                    className="hover-box"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Fresh Cart"
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Frontend Development</span>
              <h2>
                Fresh Cart <br /> E-commerce
              </h2>
              <p>
                A complete e-commerce project built with React, featuring a
                modern design and a smooth user experience. Includes core
                functionalities like a shopping cart, product browsing, and
                various categories.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Frontend Development</span>
              <h2>Professional Law Firm</h2>
              <p>
                A sleek and professional website template designed specifically
                for law firms and legal services. Built with Bootstrap to ensure
                full responsiveness across all devices.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/proj2.png"
                  alt="Legal Firm Website"
                />
                <Link
                  legacyBehavior
                  href="https://legal-frim-template.vercel.app/"
                >
                  <a
                    className="hover-box"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Legal Firm Website"
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/proj3.png"
                  alt="Food Delivery Website"
                />
                <Link
                  legacyBehavior
                  href="https://food-website-cyan-five.vercel.app/"
                >
                  <a
                    className="hover-box"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Restaurant & Food UI Project"
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Frontend Development</span>
              <h2>Restaurant & Food Delivery</h2>
              <p>
                An engaging user interface for a website specializing in food
                display and ordering. Designed for easy navigation with a
                premium showcase of images and recipes to attract customers.
              </p>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Frontend Development</span>
              <h2>Market Mingle Website</h2>
              <p>
                A modern and responsive interface for an online marketplace
                built to connect buyers and sellers. Features dynamic product
                listings, category filtering, and a clean shopping experience
                optimized for performance and usability.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/proj4.png"
                  alt="Market Mingle Website"
                />
                <Link
                  legacyBehavior
                  href="https://github.com/Mo7amed-ragab/E-Commerce-Market-Mingle"
                >
                  <a
                    className="hover-box"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Market Mingle Website"
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/proj5.png"
                  alt="Movies Website"
                />
                <Link
                  legacyBehavior
                  href="https://movies-website-v2.vercel.app/"
                >
                  <a
                    className="hover-box"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Movies Website"
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Frontend Development</span>
              <h2>Movies Website</h2>
              <p>
                Movies Website A modern and responsive movie discovery platform.
                Features dynamic movie listings, search and filter
                functionality, and a clean, intuitive interface optimized for
                performance and usability.
              </p>
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

export default Projects;
