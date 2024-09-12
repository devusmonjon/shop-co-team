import React from "react";
import { Discount, Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Discount />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
