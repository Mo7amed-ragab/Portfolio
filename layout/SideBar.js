"use client";
import { Fragment } from "react";
const SideBar = () => {
  const toggleSidebar = () => {
    document.querySelector("body").classList.remove("side-content-visible");
  };
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => toggleSidebar()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center ">
          <div className="cross-icon" onClick={() => toggleSidebar()}>
            <span className="fa fa-times" />
          </div>
          <div className="social-flow d-flex flex-column align-items-center gap-4">
            <h4 className="me-2">Follow :</h4>
            <ul className="d-flex flex-column align-items-center gap-5 fs-3">
              <li>
                <a
                  href="https://www.facebook.com/midooraga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mohamed_raagab_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mo7amed-ragab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mo7amed-ibrahim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};
export default SideBar;
