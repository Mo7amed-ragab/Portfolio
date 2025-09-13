import { useEffect, useState } from "react";

const Footer = () => {
  return <Footer1 />;
};

export default Footer;

const Footer1 = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className="main-footer rel z-1">
      <div className="footer-top-wrap bgc-black pt-100 pb-75 footer-widget widget_contact_info wow fadeInUp delay-0-6s">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="footer-title">Follow</h6>
              <div className="social-flow">
                <div className="social-style-one">
                  <a
                    href="https://www.facebook.com/midooraga"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.instagram.com/mohamed_raagab_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://github.com/Mo7amed-ragab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mo7amed-ibrahim/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 footer-title">
              <div className="copyright-text">
                <p>Copyright @{date}, All Rights Reserved</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="">
                <h6 className="footer-title">Address</h6>
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" /> Cairo, Egypt
                  </li>
                  <li>
                    <i className="far fa-envelope" />{" "}
                    <a href="mailto:mohamedragab0160@gmail.com">
                      mohamedragab0160@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="far fa-phone" />{" "}
                    <a href="callto:+20109232755">+20 1092321755</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row">
            {/* Scroll Top Button */}
            <a
              href="#"
              className="scroll-top scroll-to-target d-inline-block mb-3"
            >
              <span className="fas fa-angle-double-up" />
            </a>
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
      </div>
    </footer>
  );
};
