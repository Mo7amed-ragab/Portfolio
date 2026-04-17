"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Logo from "@/components/Logo";

const Preloader = () => {
  useEffect(() => {
    noxfolioUtilits.preloader();
  }, []);

  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader__inner">
        <div className="preloader__halo" />
        <div className="preloader__logo-wrap">
          <Logo className="preloader__logo" title="MR portfolio logo" />
        </div>
        <p className="preloader__title">Mohamed Ibrahim Ragab</p>
        <p className="preloader__subtitle">Front-End Developer</p>
        <span className="preloader__caption">Loading portfolio experience</span>
        <span className="preloader__line" />
      </div>
    </div>
  );
};
export default Preloader;
