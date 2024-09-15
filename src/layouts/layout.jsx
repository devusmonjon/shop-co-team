import React from "react";
import { Discount, Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Discount />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
