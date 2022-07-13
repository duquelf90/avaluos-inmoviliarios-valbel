import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="antialiased bg-body text-body font-body">
      <div className="container mx-auto">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
