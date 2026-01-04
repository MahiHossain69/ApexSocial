import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-[calc(100vh-177px)] flex grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
