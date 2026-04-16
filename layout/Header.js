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
            <div className="nav-outer clearfix mx-auto">
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
                    aria-label={toggle ? "Close menu" : "Open menu"}
                  >
                    <img
                      src="assets/images/shape/sidebar-tottler.svg"
                      alt="Toggler"
                    />
                  </button>
                </div>
                <div
                  className={`navbar-collapse clearfix header-nav-open ${toggle ? "show" : ""}`}
                >
                  <OnePageMenu onItemClick={() => setToggle(false)} />
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
