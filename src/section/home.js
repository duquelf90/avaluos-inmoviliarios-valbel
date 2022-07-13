import FirstBlock from "components/FirstBlock";
import MobileNavbar from "components/MobileNavbar";
import Navbar from "components/Navbar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="relative bg-white overflow-hidden bg-center">
      <Navbar />
      <MobileNavbar/>
      <FirstBlock/>
    </div>
  );
};

export default Home;
