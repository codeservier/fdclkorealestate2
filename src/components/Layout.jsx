import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div >
      <Header />
      <main className="">{children}</main>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
