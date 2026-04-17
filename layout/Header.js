"use client";

import { noxfolioUtilits } from "@/utility";
import Link from "next/link";
import { useEffect, useState } from "react";
import OnePageMenu from "./Menu";
import Logo from "@/components/Logo";

const Header = () => {
  return <Header1 />;
};
export default Header;

const Header1 = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    noxfolioUtilits.stickyNav();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", toggle);

    const handleResize = () => {
      if (window.innerWidth > 991) {
        setToggle(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [toggle]);

  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container  clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo fs-3 my-10">
                <Link legacyBehavior href="/">
                  <a
                    className="brand-link"
                    aria-label="Mohamed Ibrahim Ragab home"
                  >
                    <Logo title="MR logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo fs-3 my-10">
                    <Link legacyBehavior href="/">
                      <a
                        className="brand-link"
                        aria-label="Mohamed Ibrahim Ragab home"
                      >
                        <Logo title="MR logo" />
                      </a>
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="mobile-menu-toggle menu-sidebar"
                    onClick={() => setToggle((prev) => !prev)}
                    aria-expanded={toggle}
                    aria-controls="mobile-navigation"
                    aria-label={toggle ? "Close menu" : "Open menu"}
                  >
                    <span className="mobile-menu-toggle__label">
                      {toggle ? "Close" : "Menu"}
                    </span>
                    <span className="mobile-menu-toggle__icon" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                  </button>
                </div>
                <button
                  type="button"
                  className={`mobile-nav-backdrop ${toggle ? "is-visible" : ""}`}
                  onClick={() => setToggle(false)}
                  aria-label="Close navigation"
                />
                <div
                  id="mobile-navigation"
                  className={`navbar-collapse clearfix ${toggle ? "show" : ""}`}
                >
                  {toggle ? (
                    <div className="mobile-nav-panel">
                      <OnePageMenu onItemClick={() => setToggle(false)} />
                    </div>
                  ) : (
                    <OnePageMenu onItemClick={() => setToggle(false)} />
                  )}
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
