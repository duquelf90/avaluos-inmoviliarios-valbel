import FirstBlock from "components/FirstBlock";
import MobileNavbar from "components/MobileNavbar";
import Navbar from "components/Navbar";
import React from "react";

const Home = () => {
  return (
    <section className="relative bg-white overflow-hidden bg-center" id="home">
      <Navbar />
      <MobileNavbar/>
      <FirstBlock/>
    </section>
  );
};

export default Home;
