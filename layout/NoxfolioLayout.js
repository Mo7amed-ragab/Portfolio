"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const NoxfolioLayout = ({ children, noFooter, onePageMenu, noHeader }) => {
  useEffect(() => {
    noxfolioUtilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      {!noHeader && <Header onePageMenu={onePageMenu} />}
      <SideBar />
      {children}
      {!noFooter && <Footer />}
    </div>
  );
};
export default NoxfolioLayout;
